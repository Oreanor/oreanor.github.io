(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx240_atlas_", frames: [[0,0,300,250],[302,0,300,250],[604,0,300,250],[0,252,300,250],[302,252,300,250],[604,252,300,250]]}
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
	this.spriteSheet = ss["100pcx240_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["100pcx240_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["100pcx240_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["100pcx240_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["100pcx240_atlas_"];
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


(lib.ClipGroup_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlIMFQiWhFh3h7Qh0h5hBiWQhCiaAAicQAAirBCidQBAiYB1h1QB1h1CYhAQCdhCCrAAQCsAACdBCQCYBAB1B1QB1B1BACYQBCCdAACrQAACshCCdQhACYh1B1Qh1B1iYBAQidBCisAAQipAAifhIg");
	mask.setTransform(169.1,169.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D42D3F","#D32D3F","#CC2D3D","#CA2D3C","#B92B35","#B52B34","#AB2A30","#A3292D","#9A292A","#76231D"],[0,0.047,0.051,0.082,0.161,0.439,0.502,0.694,0.835,1,1],61.2,61.2,-75.4,-75.4).s().p("A6aAAIaa6aIabaaI6babg");
	this.shape.setTransform(169.1,169.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, new cjs.Rectangle(84.6,84.6,169.1,169.1), null);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlBL5QiUg/hyhyQhyhyg/iUQhBiaAAioQAAinBBiaQA/iUByhyQByhyCUg/QCahBCnAAQCoAACZBBQCVA/ByByQByByA/CUQBBCaAACnQAACohBCaQg/CUhyByQhyByiVA/QiZBBioAAQinAAiahBg");
	mask.setTransform(161.5,161.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D42D3F","#C52C3A","#9E292B","#9A292A","#76231D"],[0,0.514,0.671,0.973,1,1],-54,-73.2,78.4,106.3).s().p("A5OjzIdC1bIVbdCI9CVbg");
	this.shape.setTransform(161.5,161.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, new cjs.Rectangle(78.9,78.9,165.2,165.2), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak7LrQiRg+hwhwQhxhwg9iRQhAiXAAilQAAikBAiWQA9iSBxhwQBwhwCRg+QCXhACkABQClgBCWBAQCSA+BwBwQBxBwA9CSQBACWAACkQAAClhACXQg+CRhwBwQhwBwiSA+QiWBAilAAQikAAiXhAg");
	mask.setTransform(158.5,158.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D42D3F","#C52C3A","#9E292B","#9A292A","#76231D"],[0,0.224,0.475,0.957,1,1],-52.9,-71.7,77,104.5).s().p("A4wjuIcg1CIVBcfI8gVCg");
	this.shape.setTransform(158.5,158.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(77.4,77.5,162.2,162.1), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhxAVQgQgRAFgjIAtAAQABAZAVgGQANgEALgPIAoAAQgbAvgtANQgMADgJAAQgRAAgKgLgAA0gfIBKAAQgMAHgMADQgLAEgKAAQgTAAgKgOg");
	mask.setTransform(16.5,14.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(196,196,196,0)","#C4C4C4","#A9A9A8","#898988","#646462","#3B3B39","#1D1D1B","#1D1D1B"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],79.4,48.2,-90.8,-55).s().p("AihARIBminIDdCGIhmCng");
	this.shape.setTransform(16.2,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F8F8F8","#E4E4E4","#C3C3C3","#ADADAD","#E8E8E8","#FFFFFF","#FDFDFD","#F6F6F6","#EBEBEA","#DADADA","#C4C4C4","rgba(196,196,196,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],79.4,48.2,-90.8,-55).s().p("AihARIBminIDdCGIhmCng");
	this.shape_1.setTransform(16.2,15.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(3.9,11.5,25.3,6.5), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjgCiQgPgSAIgmQAHgnAageQAZggAigIQALgDAJAAQAYAAAKARQAKATgHAgQgGAggSAaQgTAbgZAPgAiUAmQgLADgJAMQgNAPgFAZQgEAVAFAJQAEAIAJAAIAGgBQAMgDAJgLQANgPAFgZQAFgagIgJQgEgEgHAAIgHABgAk2CiQAKgOAEgWQAFgZgIgJQgGgHgLADQgLAEgJALQgNAPgFAZQgCAKAAAJIgtAAIABgGQAIgnAZgeQAagfAhgKQAMgDAJAAQAXAAAKATQAKATgGAgQgFAagOAXgAg/gcIAygOIAFBhIAAAAIAxh1IA0gQIhZDCIg1ASgAB0hWIBkgeIgJAsIg1ATIgEAWIAtgRIgIAsIgtANIgFAWIA3gUIgLAzIhoAfgAEHiEIBfgaQAKgDAHAAQAPAAAHAJQAIAKgEATQgDAOgJANQgJAPgNAIQATADgEAhIgCATQgCANACAEIgyANQgBgJACgQQADgQgCgGQgDgJgNAEIgXACIgOBFIg0APgAFIhvIgXAGIgIAjIAagHQAWgGAEgSQADgMgNAAIgLACg");
	mask.setTransform(54.5,52);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(196,196,196,0)","#C4C4C4","#A9A9A8","#898988","#646462","#3B3B39","#1D1D1B","#1D1D1B"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],66.1,40,-101.6,-61.6).s().p("AojBLIFppSILeG9IlpJSg");
	this.shape.setTransform(54.8,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F8F8F8","#E4E4E4","#C3C3C3","#ADADAD","#E8E8E8","#FFFFFF","#FDFDFD","#F6F6F6","#EBEBEA","#DADADA","#C4C4C4","rgba(196,196,196,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],66.1,40,-101.6,-61.6).s().p("AojBLIFppSILeG9IlpJSg");
	this.shape_1.setTransform(54.8,52);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(14.4,35.8,80.4,32.4), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkeKnQiFg4hlhlQhnhmg4iFQg5iJAAiWQAAiVA5iJQA4iFBnhlQBlhnCFg4QCJg5CVAAQCWAACJA5QCFA4BmBnQBlBlA4CFQA6CJABCVQgBCWg6CJQg4CFhlBmQhmBliFA4QiJA6iWABQiVgBiJg6gAidA8IiUIrQCPBICiAAQEcgBDKjIQDJjJAAkdQAAhkgdhhgAqLDZQAnB1BNBgQBNBfBpBAICIn+IixA5Ig1DFIg8ASIA0jEgAoxmKQh9CxAADZQAABfAZBZIDZhFIDMr1QjHBKh6CugAi0qVIjLL1ICxg4IB4nBIA8gRIh4G/IMZj7QhIjKivh9QiziBjdAAQheAAhWAZg");
	mask.setTransform(139.2,139.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(196,196,196,0)","#C4C4C4","#A9A9A8","#898988","#646462","#3B3B39","#1D1D1B","#1D1D1B"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],85.9,52.1,-81.5,-49.4).s().p("A1vFWIQb7FIbDQbIwZbDg");
	this.shape.setTransform(139.2,139.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F8F8F8","#E4E4E4","#C3C3C3","#ADADAD","#E8E8E8","#FFFFFF","#FDFDFD","#F6F6F6","#EBEBEA","#DADADA","#C4C4C4","rgba(196,196,196,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],85.9,52.1,-81.5,-49.4).s().p("A1vFWIQb7FIbDQbIwZbDg");
	this.shape_1.setTransform(139.2,139.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(65.4,65.4,147.5,147.5), null);


(lib.txt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgUIAAAAQAAgSALgNQALgMAPAAQASAAAJALIgIAOQgJgJgJAAQgIAAgGAIQgGAHAAAMIAAAAQAAAMAGAIQAGAHAJAAQAIABAKgJIAIANQgMAMgQAAQgPAAgLgMg");
	this.shape.setTransform(97.8,3.6,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgUIAAAAQAAgSALgMQALgNAQAAQARAAALAMQALANAAASIAAAAQAAAUgLAMQgLAMgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAAAQAAANAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgMgGgHQgGgJgJABQgIgBgGAJg");
	this.shape_1.setTransform(90.1,3.6,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgUIAAAAQAAgSALgNQALgMAQAAQARAAAKALIgIAOQgKgJgJAAQgHAAgHAIQgFAHAAAMIAAAAQAAAMAFAIQAHAHAIAAQAJABAJgJIAIANQgLAMgQAAQgQAAgLgMg");
	this.shape_2.setTransform(82.7,3.6,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgVIAAAAQAAgSAKgNQALgMAOAAQARAAAKANQAJALAAATIAAAHIg1AAQAEAWARgBQALAAAKgIIAIALQgMANgSAAQgQAAgLgLgAgKgWQgGAGgBALIAjAAQgBgXgRAAQgGAAgEAGg");
	this.shape_3.setTransform(75.3,3.6,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgPAAgrIA5AAIAABUIgTAAIAAhEIgVAAQAAAqgGAPQgGAMgPAAg");
	this.shape_4.setTransform(67.1,3.6,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAeIAOAAQAgAAAAAZQgBAcgeAAgAgbAcIAOAAQANAAAAgNQAAgNgNAAIgOAAg");
	this.shape_5.setTransform(58.5,3.6,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAwIAFglIgdAWIgLgSIAigPIgigNIALgTIAdAWIgFglIAVAAIgFAlIAdgWIALATIghANIAhAPIgLASIgdgWIAFAlg");
	this.shape_6.setTransform(202.4,-0.3,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_7.setTransform(196,2.4,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_8.setTransform(188,2.4,0.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmBsIgthMIgLAAIgZAAIAABMIgkAAIAAjYIBOAAQAiAAAUASQAVATAAAhQAAAvgtAPIAzBUgAgrAAIApAAQARAAALgJQAMgKAAgTQAAglgpAAIgoAAg");
	this.shape_9.setTransform(179.8,2.4,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhDBsIAAjYICHAAIAAAhIhjAAIAAA+IBYAAIAAAfIhYAAIAABag");
	this.shape_10.setTransform(171.5,2.4,0.45,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqARIAAghIBVAAIAAAhg");
	this.shape_11.setTransform(164.8,3,0.45,0.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAqBsIAAhcIhUAAIAABcIgjAAIAAjYIAjAAIAABbIBUAAIAAhbIAkAAIAADYg");
	this.shape_12.setTransform(157.5,2.4,0.45,0.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpBTIAAijIAjAAIAAAhQAOgkAiABIAAAmIgCAAQgVAAgNAOQgMAPAAAaIAABIg");
	this.shape_13.setTransform(147.1,3.5,0.45,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AguA/QgXgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAgAAATAYQASAYAAAlIgBAMIhnAAQADAVAMALQALAKAPAAQAXAAARgRIAQAWQgXAZgiAAQggAAgUgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_14.setTransform(140.6,3.6,0.45,0.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBTIg6ilIAlAAIAkB3IAmh3IAkAAIg6Clg");
	this.shape_15.setTransform(133.6,3.6,0.45,0.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAWgYAgAAQAhAAAVAXQAWAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXALAPQANAPAQAAQASAAAMgPQALgOAAgXIAAgCQAAgXgLgQQgMgPgSAAQgSAAgLAPg");
	this.shape_16.setTransform(126.3,3.6,0.45,0.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAgkAWgYQAWgYAgAAQAgAAAWAXQAVAYAAAkIAAACQAAAlgVAXQgXAYggAAQggAAgVgXgAgdgnQgKAPgBAXIAAACQAAAXAMAPQALAPASAAQASAAALgPQALgOAAgXIAAgCQAAgYgLgPQgMgPgSAAQgRAAgMAPg");
	this.shape_17.setTransform(118.3,3.6,0.45,0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AArBsIAAhcIhUAAIAABcIgkAAIAAjYIAkAAIAABbIBUAAIAAhbIAjAAIAADYg");
	this.shape_18.setTransform(109.7,2.4,0.45,0.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAeBSIAAiFIg7AAIAACFIgjAAIAAijICBAAIAACjg");
	this.shape_19.setTransform(49.5,3.5,0.458,0.462);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhBxIAAhsIhBBsIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjgAgbhOQgMgMgDgSIAVgFQAFAWARAAQASAAAFgWIAVAFQgCATgMALQgMAKgSAAQgQAAgMgKg");
	this.shape_20.setTransform(37.1,2.3,0.45,0.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA2BSIAAijIAjAAIAACjgAhYBSIAAijIAjAAIAAA6IAcAAQAbAAAQAMQARANAAAaQAAAbgRAOQgPANgcAAgAg1A2IAbAAQAMAAAHgHQAHgHAAgLQAAgZgaAAIgbAAg");
	this.shape_21.setTransform(28.3,3.7,0.45,0.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBDAAQAYAAAOALQAPALAAAUQAAAagYALQAfALAAAbQAAAWgQANQgPALgbAAgAgcA2IAcAAQAdAAAAgVQAAgKgIgGQgIgGgNAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgTgYAAIgbAAg");
	this.shape_22.setTransform(19.9,3.7,0.45,0.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAWgYAfAAQAhAAAVAXQAWAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPARAAQASAAAMgPQALgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_23.setTransform(12.1,3.7,0.45,0.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AArBsIAAhcIhVAAIAABcIgkAAIAAjYIAkAAIAABbIBVAAIAAhbIAkAAIAADYg");
	this.shape_24.setTransform(3.5,2.5,0.45,0.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_25.setTransform(81.8,45.1,0.45,0.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAgBSIAAhrIhABrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_26.setTransform(76.2,42.3,0.45,0.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAeBSIAAhEIg8AAIAABEIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAkAAIAACjg");
	this.shape_27.setTransform(68.4,42.3,0.45,0.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag6BCIAMgbQAVAPATAAQAfAAAAgVQAAgMgJgFQgIgFgWAAIgHAAIAAgYIAHAAQASAAAIgFQAJgFABgNQAAgSgZAAQgYAAgPANIgMgZQAWgSAhAAQAZAAAPAMQAPAMAAATQAAAbgZALQAcAJAAAeQAAAVgQAOQgRAOgaAAQgkAAgWgTg");
	this.shape_28.setTransform(61.3,42.4,0.45,0.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAhBSIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_29.setTransform(54.4,42.3,0.45,0.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABNBSIgphIIgTAbIAAAtIghAAIAAgtIgUgbIgpBIIgmAAIA3hcIg1hHIAoAAIA5BPIAAhPIAhAAIAABPIA5hPIAoAAIg1BHIA3Bcg");
	this.shape_30.setTransform(45.2,42.3,0.45,0.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAhBxIAAhrIhBBrIghAAIAAijIAiAAIAABqIBAhqIAiAAIAACjgAgbhOQgNgMgCgTIAWgDQAFAUAQAAQASAAAFgUIAVADQgCAUgMALQgMAKgSAAQgQAAgMgKg");
	this.shape_31.setTransform(32.3,40.9,0.45,0.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgvA/QgWgXAAgmIAAgCQAAglAUgYQAUgXAeAAQAhAAASAZQASAXAAAlIgBAMIhmAAQACAVAMALQALALAPAAQAWAAASgRIAQAWQgXAYgiAAQgfAAgWgWgAgWgrQgKAMgCAVIBFAAQgBgUgJgMQgJgNgPAAQgNAAgKAMg");
	this.shape_32.setTransform(24.7,42.4,0.45,0.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAgkIAAgCQAAgkAWgYQAWgYAfAAQAhAAAVAXQAWAYAAAlIAAABQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPARAAQASAAAMgPQALgPAAgXIAAgCQAAgXgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_33.setTransform(17,42.4,0.45,0.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAXAAAPALQAPAMAAATQgBAagYALQAfAKABAcQgBAWgPAMQgQAMgbAAgAgcA2IAdAAQAbABAAgXQAAgVgcAAIgcAAgAgcgNIAaAAQAZAAAAgUQAAgVgYAAIgbAAg");
	this.shape_34.setTransform(9.6,42.3,0.45,0.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIguAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_35.setTransform(2.7,42.3,0.45,0.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAgkIAAgCQAAgkAWgYQAWgYAfAAQAhAAAVAXQAWAYAAAlIAAABQAAAlgWAXQgVAYghAAQggAAgWgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPARAAQATAAALgPQALgPAAgXIAAgCQAAgXgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_36.setTransform(174.9,25.8,0.45,0.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAYAAAOALQAOAMAAATQAAAagYALQAfAKAAAcQAAAWgQAMQgPAMgbAAgAgcA2IAdAAQAcABAAgXQAAgVgdAAIgcAAgAgcgNIAaAAQAZAAAAgUQAAgVgYAAIgbAAg");
	this.shape_37.setTransform(167.5,25.7,0.45,0.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_38.setTransform(160.6,25.7,0.45,0.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgqA+QgVgYAAgkIAAgCQAAglAVgYQAWgXAfAAQAfAAAVAVIgQAbQgRgRgSAAQgRAAgLAOQgLAPAAAXIAAACQgBAYAMAPQAMAOARAAQASAAASgQIAPAYQgWAXggAAQgfAAgVgXg");
	this.shape_39.setTransform(154.3,25.8,0.45,0.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AguA/QgXgXABgmIAAgCQgBglAUgYQAUgXAeAAQAgAAATAZQARAXAAAlIAAAMIhnAAQADAVAMALQAKALAQAAQAXAAARgRIARAWQgYAYgiAAQgfAAgVgWgAgWgrQgJAMgDAVIBFAAQgBgUgJgMQgJgNgPAAQgOAAgJAMg");
	this.shape_40.setTransform(147.1,25.8,0.45,0.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAcBSIAAg+QgUALgVAAQgWAAgNgMQgOgNAAgYIAAg/IAjAAIAAA3QAAANAHAHQAGAHALAAQARAAAOgJIAAhJIAjAAIAACjg");
	this.shape_41.setTransform(139.7,25.7,0.45,0.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgxBIQgPgOgBgXIAAgCQAAgaARgNQAPgNAcAAQASAAATAHIAAgHQAAgigkAAQgRAAgYAKIgHgdQAagMAaAAQAhAAAQARQAQAQAAAfIAABlIghAAIAAgUQgSAYgcAAQgVAAgOgNgAgWALQgIAHAAANIAAACQAAAMAIAHQAHAGAMAAQAPAAAJgJQALgIAAgOIAAgRQgNgGgSAAQgOAAgJAHg");
	this.shape_42.setTransform(132.3,25.8,0.45,0.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_43.setTransform(125.8,25.7,0.45,0.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgqARIAAghIBVAAIAAAhg");
	this.shape_44.setTransform(114.2,25,0.45,0.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAhBSIAAhqIhBBqIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_45.setTransform(104,25.6,0.45,0.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAcBSIgohEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_46.setTransform(96.9,25.6,0.45,0.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhJBrIAAjSIAjAAIAAAbQAUgeAcAAQAbAAARAUQAUAXAAAoIAAAEQAAAmgUAXQgRAVgbAAQgbAAgVgcIAABIgAgbg8QgLAOAAAXIAAAEQAAAWALAPQAMAOAPABQAQgBAMgOQALgOAAgXIAAgEQAAgXgLgPQgMgOgQAAQgPAAgMAPg");
	this.shape_47.setTransform(88.9,26.6,0.45,0.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAgkIAAgCQAAgkAWgYQAVgYAhAAQAgAAAWAXQAVAYAAAlIAAABQAAAlgVAXQgWAYghAAQgfAAgXgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPASAAQASAAALgPQALgPAAgXIAAgCQAAgXgLgPQgMgPgSAAQgRAAgMAPg");
	this.shape_48.setTransform(80.7,25.6,0.45,0.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag1BaQgUgYAAgrIAAgEQAAgwAIgYQANghAigIIBOgSIAGAdIhLASQgkAIgBAkQAGgLAMgIQAPgJATAAQAcAAAUAWQAUAXAAAiIAAABQAAAkgUAXQgUAXgiAAQgiAAgTgXgAgbgGQgLANAAAXIAAACQAAAWALAPQALAOAQAAQASAAALgOQAKgPAAgWIAAgCQAAgWgLgOQgLgOgRAAQgQAAgLAOg");
	this.shape_49.setTransform(72.8,24.4,0.45,0.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhCBhIAKgaQAKAFALAAQAOAAAHgSIg7ijIAlAAIAlB5IAlh5IAkAAIg5CmQgIAZgLAKQgLAKgTAAQgSAAgQgJg");
	this.shape_50.setTransform(65.1,26.7,0.45,0.45);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAgkIAAgCQAAgkAWgYQAWgYAfAAQAhAAAVAXQAWAYAAAlIAAABQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPARAAQASAAAMgPQALgPAAgXIAAgCQAAgXgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_51.setTransform(53.8,25.6,0.45,0.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhABSIAAijIBFAAQAXAAAOALQAPALABAVQgBAZgYALQAgAKAAAcQAAAXgRAMQgPALgbAAgAgcA2IAdAAQAcABAAgXQAAgVgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgUgXABIgcAAg");
	this.shape_52.setTransform(46.4,25.6,0.45,0.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIguAAIAAgeIB8AAIAAAeIgsAAIAACFg");
	this.shape_53.setTransform(39.5,25.6,0.45,0.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgqA+QgVgYAAgkIAAgCQAAglAWgYQAVgXAfAAQAeAAAWAVIgQAbQgRgRgSAAQgRAAgLAOQgMAPAAAXIAAACQAAAYAMAPQALAOASAAQASAAASgQIAPAYQgXAXgfAAQgfAAgVgXg");
	this.shape_54.setTransform(33.2,25.6,0.45,0.45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgvA/QgVgXAAgmIAAgCQgBglAUgYQAVgXAdAAQAhAAASAZQARAXAAAlIAAAMIhmAAQACAVAMALQALALAQAAQAWAAARgRIARAWQgYAYgiAAQggAAgVgWgAgWgrQgKAMgBAVIBEAAQgBgUgJgMQgJgNgPAAQgNAAgKAMg");
	this.shape_55.setTransform(26,25.6,0.45,0.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAcBSIAAg+QgUALgVAAQgWAAgNgMQgOgNAAgYIAAg/IAjAAIAAA2QAAANAGAJQAHAGAKAAQARAAAPgJIAAhJIAjAAIAACjg");
	this.shape_56.setTransform(18.6,25.6,0.45,0.45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgxBIQgQgOAAgXIAAgCQAAgaARgNQAPgNAbAAQATAAASAHIAAgHQAAgigjAAQgSAAgXAKIgHgdQAagMAbAAQAgAAAQARQARAQAAAfIAABlIgjAAIAAgUQgRAYgcAAQgVAAgOgNgAgWALQgIAHAAANIAAACQAAAMAHAHQAIAGAMAAQAOAAAKgJQALgIAAgOIAAgRQgOgGgRAAQgOAAgJAHg");
	this.shape_57.setTransform(11.3,25.6,0.45,0.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAoBtIg7hfIgbAgIAAA/IgkAAIAAjZIAkAAIAABrIBShrIAsAAIhMBeIBPB7g");
	this.shape_58.setTransform(3.9,24.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt6, new cjs.Rectangle(-0.1,-2.8,204.6,49), null);


(lib.txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAbQAbgEgDgYIgPAAIAAgpIAoAAIAAAjQAAAsgtAGg");
	this.shape.setTransform(79.7,10.5,0.45,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2BSIAAijIAjAAIAACjgAhYBSIAAijIAjAAIAAA6IAcAAQAbAAAQAMQARANAAAaQABAbgSAOQgPANgbAAgAg1A2IAbAAQANAAAHgHQAGgGAAgMQAAgMgGgHQgHgGgNgBIgbAAg");
	this.shape_1.setTransform(132.1,6.5,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIguAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_2.setTransform(124.2,6.5,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgBSIAAhqIhABqIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_3.setTransform(113.7,6.5,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBSIgohEIgWAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_4.setTransform(102.9,6.5,0.45,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBIQgQgOAAgXIAAgCQAAgaARgNQAQgNAbAAQATAAARAHIAAgHQAAgigjAAQgRAAgYAKIgHgdQAZgMAcAAQAfAAARARQARAQAAAfIAABlIgjAAIAAgUQgRAYgbAAQgWAAgOgNgAgeAfIAAACQAAAMAIAHQAHAGAMAAQAOAAALgJQAKgIgBgOIAAgRQgNgGgRAAQgfAAAAAbg");
	this.shape_5.setTransform(95.1,6.5,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_6.setTransform(88.6,6.5,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBxIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjgAgbhOQgMgLgDgUIAVgDQAFAUARAAQASAAAFgUIAVADQgCAUgMALQgMAKgSAAQgRAAgLgKg");
	this.shape_7.setTransform(74.3,5.1,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA2BSIAAijIAjAAIAACjgAhYBSIAAijIAjAAIAAA6IAbAAQAbAAARAMQARANAAAaQAAAbgRAOQgQANgbAAgAg1A2IAbAAQANAAAGgHQAHgGAAgMQAAgZgagBIgbAAg");
	this.shape_8.setTransform(65.5,6.5,0.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfBSIAAhEIg9AAIAABEIgjAAIAAijIAjAAIAABDIA9AAIAAhDIAjAAIAACjg");
	this.shape_9.setTransform(56.7,6.5,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9BSIAAijIAjAAIAAA6IAaAAQAcAAARAMQARANAAAaQAAAbgRAOQgPANgdAAgAgaA2IAaAAQANAAAGgHQAIgGAAgMQAAgZgbgBIgaAAg");
	this.shape_10.setTransform(49.7,6.5,0.45,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhKBRIACgdIAJABQAPAAAFgWQAIgcAAhVIBuAAIAACjIgjAAIAAiFIgqAAQAABSgOAdQgKAYgcAAIgUgCg");
	this.shape_11.setTransform(41.7,6.5,0.45,0.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxBIQgPgOAAgXIAAgCQgBgaARgNQAPgNAcAAQASAAASAHIAAgHQAAgigjAAQgTAAgWAKIgHgdQAagMAaAAQAhAAAQARQAQAQABAfIAABlIgjAAIAAgUQgSAYgbAAQgVAAgOgNgAgVALQgJAHAAANIAAACQAAAMAIAHQAGAGANAAQAOAAAKgJQALgIAAgOIAAgRQgOgGgSAAQgOAAgHAHg");
	this.shape_12.setTransform(34.5,6.5,0.45,0.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIApAAIg3BFIA6Beg");
	this.shape_13.setTransform(28,6.5,0.45,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAhBSIAAhqIhBBqIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_14.setTransform(20.1,6.5,0.45,0.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAfBSIAAhEIg9AAIAABEIgjAAIAAijIAjAAIAABDIA9AAIAAhDIAjAAIAACjg");
	this.shape_15.setTransform(12.3,6.5,0.45,0.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhLBmIALgcQAKAEALAAQAQAAANgXIhMikIAoAAIA2B6IAxh6IAmAAIhICqQgLAagNALQgOAMgVAAQgRAAgSgIg");
	this.shape_16.setTransform(4.1,5.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt4, new cjs.Rectangle(0,0,136.1,12.5), null);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBxIAAhsIhBBsIghAAIAAijIAiAAIAABqIBAhqIAiAAIAACjgAgchOQgMgMgCgTIAVgEQAGAVAQAAQATAAAEgVIAVAEQgCATgMAMQgMAKgSAAQgQAAgNgKg");
	this.shape.setTransform(178.3,5.6,0.45,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAVgYAhAAQAgAAAWAXQAVAYAAAkIAAACQAAAkgVAYQgWAYghAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPASAAQARAAAMgPQALgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_1.setTransform(170.4,7,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBSIAAhDIg9AAIAABDIgjAAIAAijIAjAAIAABDIA9AAIAAhDIAjAAIAACjg");
	this.shape_2.setTransform(162.5,7,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxBkIAAgkIhiAAIgDAkIgdAAIAAhCIAPAAQAQgkAAhLIAAgWIBxAAIAACFIATAAIgDBCgAgfAiIA7AAIAAhnIgsAAQgBBHgOAgg");
	this.shape_3.setTransform(154.7,7.8,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAVgYAhAAQAgAAAWAXQAVAYAAAkIAAACQAAAkgVAYQgXAYggAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQAMAPARAAQARAAAMgPQALgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgSAAgLAPg");
	this.shape_4.setTransform(146.9,7,0.45,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAXAAAPALQAOALAAAUQAAAagYALQAfAKAAAcQAAAWgQANQgPALgbAAgAgcA2IAdAAQAcAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgUgYAAIgbAAg");
	this.shape_5.setTransform(139.5,7,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAWgYAgAAQAhAAAVAXQAWAYAAAkIAAACQAAAkgWAYQgVAYghAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPARAAQATAAAKgPQAMgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_6.setTransform(131.7,7,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhJBrIAAjSIAjAAIAAAbQATgeAcAAQAbAAASAVQAUAXAAAnIAAAEQAAAngUAWQgSAVgbAAQgbAAgUgcIAABIgAgbg8QgLAOAAAXIAAAEQAAAWALAPQALAOAQAAQAQAAALgOQAMgOAAgXIAAgEQAAgXgMgPQgLgOgQAAQgPAAgMAPg");
	this.shape_7.setTransform(123.8,8,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeBSIAAiFIg7AAIAACFIgjAAIAAijICBAAIAACjg");
	this.shape_8.setTransform(115.7,7,0.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAWgYAfAAQAhAAAVAXQAWAYAAAkIAAACQAAAkgWAYQgWAYggAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPARAAQASAAAMgPQALgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_9.setTransform(102.8,6.6,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBSIAAhDIg8AAIAABDIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAkAAIAACjg");
	this.shape_10.setTransform(95,6.5,0.45,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBDAAQAYAAAOALQAPALAAAUQAAAagYALQAfAKAAAcQAAAWgQANQgPALgbAAgAgcA2IAcAAQAdAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgUgYAAIgbAAg");
	this.shape_11.setTransform(87.7,6.5,0.45,0.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAgkAWgYQAWgYAgAAQAgAAAWAXQAVAYAAAkIAAACQAAAkgVAYQgWAYghAAQggAAgVgXgAgdgnQgKAPgBAXIAAACQAAAXAMAPQALAPASAAQARAAAMgPQALgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_12.setTransform(79.8,6.6,0.45,0.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhKBRIACgeIAJACQAPAAAFgWQAIgdAAhUIBuAAIAACjIgjAAIAAiFIgpAAQAABTgOAcQgLAYgcAAIgUgCg");
	this.shape_13.setTransform(71.6,6.6,0.45,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqA+QgVgYAAglIAAgBQAAglAVgYQAWgXAfAAQAgAAAUAVIgQAaQgSgQgRAAQgQAAgMAOQgMAPABAXIAAACQAAAYAMAOQALAOARAAQATAAAQgQIAQAZQgWAXgfAAQggAAgVgXg");
	this.shape_14.setTransform(64.9,6.6,0.45,0.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAbQAbgEgDgYIgPAAIAAgpIAoAAIAAAjQAAAsgtAGg");
	this.shape_15.setTransform(55.9,10.3,0.45,0.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhBxIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjgAgbhPQgMgKgDgUIAVgDQAFAUARAAQASAAAFgUIAVADQgCAUgMAKQgMALgSAAQgRAAgLgLg");
	this.shape_16.setTransform(50.4,5.1,0.45,0.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA2BSIAAijIAjAAIAACjgAhYBSIAAijIAjAAIAAA6IAbAAQAcAAAQAMQARANAAAaQAAAbgRAOQgPANgcAAgAg1A2IAbAAQAMAAAIgHQAGgHAAgLQAAgagaAAIgbAAg");
	this.shape_17.setTransform(41.6,6.5,0.45,0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeBSIAAhDIg8AAIAABDIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAjAAIAACjg");
	this.shape_18.setTransform(32.9,6.5,0.45,0.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABQBkIAAgkIjBAAIAAijIAjAAIAACFIA0AAIAAiFIAhAAIAACFIA0AAIAAiFIAjAAIAACFIAUAAIgDBCg");
	this.shape_19.setTransform(23.6,7.3,0.45,0.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAWgYAfAAQAhAAAWAXQAVAYAAAkIAAACQAAAkgVAYQgXAYggAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXALAPQANAPAQAAQASAAAMgPQALgOAAgXIAAgCQAAgYgLgPQgMgPgSAAQgSAAgLAPg");
	this.shape_20.setTransform(13.6,6.6,0.45,0.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AA6BsIAAiYIg6BjIAAAAIg5hiIAACXIgjAAIAAjXIAlAAIA3BjIA3hjIAmAAIAADXg");
	this.shape_21.setTransform(4.3,5.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0.2,0,181.2,12.8), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhByIAAhtIhBBtIghAAIAAikIAiAAIAABrIBAhrIAiAAIAACkgAgbhPQgMgKgDgUIAWgDQAEAUARAAQATAAAEgUIAVADQgCAUgMAKQgLALgTAAQgRAAgLgLg");
	this.shape.setTransform(184,5,0.45,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2BSIAAijIAjAAIAACjgAhYBSIAAijIAjAAIAAA6IAcAAQAbAAAQAMQARANAAAaQABAbgSAOQgQANgaAAgAg1A2IAbAAQANAAAHgHQAHgHgBgLQAAgagaAAIgbAAg");
	this.shape_1.setTransform(175.2,6.4,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBSIAAhDIg8AAIAABDIgkAAIAAijIAkAAIAABDIA8AAIAAhDIAjAAIAACjg");
	this.shape_2.setTransform(166.5,6.4,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBSIAAhDIg8AAIAABDIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAjAAIAACjg");
	this.shape_3.setTransform(158.7,6.4,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA/QgWgYAAgmIAAgBQAAglAUgYQAUgXAeAAQAhAAASAYQASAYAAAlIgBAMIhmAAQACAVAMALQALAKAPAAQAWAAASgRIAQAWQgXAZgiAAQggAAgVgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_4.setTransform(151.2,6.5,0.45,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJBrIAAjSIAjAAIAAAbQATgeAcAAQAbAAASAVQAUAXAAAnIAAAEQAAAngUAWQgSAWgbgBQgbAAgUgcIAABIgAgbg9QgLAPAAAYIAAADQAAAWALAPQALAOAQABQAQgBALgOQAMgOAAgXIAAgDQAAgYgMgPQgLgOgQAAQgPAAgMAOg");
	this.shape_5.setTransform(143.6,7.4,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBDAAQAYAAAOALQAPALAAAUQAAAagYALQAfAKAAAcQAAAWgQANQgPALgbAAgAgcA2IAcAAQAdAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgUgYAAIgbAAg");
	this.shape_6.setTransform(135.9,6.4,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBZQgWgXABgmIAAgDQgBgjAVgYQAUgYAdAAQAgAAATAZQASAXAAAlIAAANIhnAAQACAUAMALQALALAPAAQAXAAARgRIAQAWQgXAZgiAAQgfAAgWgXgAgWgRQgJAMgDAUIBFAAQAAgTgKgMQgJgNgPAAQgNAAgKAMgAALhMIAAgjIAjAAIAAAjgAgthMIAAgjIAjAAIAAAjg");
	this.shape_7.setTransform(128.4,5.3,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfBSIAAhDIg8AAIAABDIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAiAAIAACjg");
	this.shape_8.setTransform(120.9,6.4,0.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBIQgOgOAAgXIAAgCQAAgaAQgNQAQgNAaAAQATAAASAHIAAgHQAAgigjAAQgTAAgWAKIgHgdQAagMAbAAQAgAAAQARQAQAQAAAgIAABlIgiAAIAAgUQgRAXgcAAQgVAAgPgNgAgWALQgJAIAAAMIAAACQAAAMAIAHQAHAGAMAAQAPAAAKgJQAKgIAAgOIAAgRQgNgGgRAAQgPAAgIAHg");
	this.shape_9.setTransform(113.2,6.5,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBSIAAhsIgrBHIAAAAIgrhHIAABsIgiAAIAAijIAjAAIAqBJIArhJIAjAAIAACjg");
	this.shape_10.setTransform(105.4,6.4,0.45,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgBSIAAhrIhABrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_11.setTransform(93.4,6.4,0.45,0.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAgByIAAhsIhABsIgiAAIAAikIAjAAIAABqIBAhqIAiAAIAACkgAgbhPQgMgLgDgTIAVgEQAFAVARAAQASAAAFgVIAVAEQgCATgMALQgMALgSAAQgRAAgLgLg");
	this.shape_12.setTransform(82,5.1,0.45,0.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAhBSIAAhrIhBBrIghAAIAAijIAiAAIAABqIBAhqIAiAAIAACjg");
	this.shape_13.setTransform(74.1,6.5,0.45,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdBSIgohEIgWAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_14.setTransform(67,6.5,0.45,0.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyBSIAAijIBlAAIAAAeIhCAAIAACFg");
	this.shape_15.setTransform(60.4,6.5,0.45,0.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBZQgXgXABgmIAAgDQgBgjAVgYQATgYAeAAQAgAAATAZQARAXAAAlIAAANIhmAAQACAUAMALQALALAPAAQAXAAARgRIAQAWQgXAZgiAAQgfAAgVgXgAgWgRQgJAMgDAUIBFAAQgBgTgJgMQgJgNgPAAQgNAAgKAMgAALhMIAAgjIAjAAIAAAjgAgthMIAAgjIAiAAIAAAjg");
	this.shape_16.setTransform(53.5,5.3,0.45,0.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhKBRIACgeQADACAGAAQAPAAAGgWQAHgcAAhVIBuAAIAACkIgjAAIAAiGIgpAAQAABSgOAdQgKAYgdAAIgUgCg");
	this.shape_17.setTransform(45.5,6.5,0.45,0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag9BSIAAijIAjAAIAAA6IAaAAQAdAAAQAMQARANAAAaQAAAbgRAOQgQANgcAAgAgaA2IAaAAQANAAAHgHQAHgHAAgLQAAgNgHgGQgHgHgNAAIgaAAg");
	this.shape_18.setTransform(35.4,6.5,0.45,0.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAfBSIAAhDIg9AAIAABDIgjAAIAAijIAjAAIAABDIA9AAIAAhDIAjAAIAACjg");
	this.shape_19.setTransform(27.9,6.5,0.45,0.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvA/QgWgYABgmIAAgBQgBglAVgYQATgXAeAAQAgAAATAYQARAYAAAlIAAAMIhnAAQADAVALALQALAKAQAAQAWAAASgRIAQAWQgXAZgiAAQgfAAgWgWgAgWgrQgJAMgDAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_20.setTransform(20.3,6.5,0.45,0.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcBSIAAg+QgSALgXAAQgWAAgNgMQgOgNAAgYIAAg/IAjAAIAAA2QAAAOAHAHQAGAHALAAQARAAAOgJIAAhJIAjAAIAACjg");
	this.shape_21.setTransform(12.9,6.5,0.45,0.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhEBRQgbgfAAgwIAAgDQAAgwAbgfQAbgfApAAQAqAAAbAfQAbAfAAAwIAAACQAAAwgbAgQgbAfgqAAQgpAAgbgfgAgpg5QgQAVAAAjIAAACQAAAjAQAVQAQAWAZgBQAaABARgWQAQgVAAgiIAAgDQAAgjgRgVQgQgVgaAAQgZAAgQAVg");
	this.shape_22.setTransform(4.3,5.3,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,187.1,12.3), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAcQAagGgCgXIgPAAIAAgpIAmAAIAAAjQAAAXgLANQgLAMgWACg");
	this.shape.setTransform(245.2,10.4,0.45,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBSIAAiFIgtAAIAAgeIB9AAIAAAeIgtAAIAACFg");
	this.shape_1.setTransform(241.4,6.6,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguA/QgXgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAgAAATAYQASAYAAAlIAAAMIhnAAQACAVAMALQALAKAPAAQAXAAARgRIAQAWQgXAZgiAAQggAAgUgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_2.setTransform(234.8,6.7,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBIQgPgPAAgWIAAgCQAAgaARgNQAPgNAbAAQATAAASAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAcAAQBCABAAA/IAABmIgjAAIAAgUQgRAWgcAAQgVABgPgNgAgWALQgIAIAAAMIAAACQAAAMAHAHQAIAGAMAAQAOABAKgKQAKgIAAgOIAAgRQgNgGgRAAQgOAAgJAHg");
	this.shape_3.setTransform(227.3,6.7,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfBSIAAhDIg8AAIAABDIgkAAIAAijIAkAAIAABDIA8AAIAAhDIAjAAIAACjg");
	this.shape_4.setTransform(220,6.6,0.45,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BCIAMgcQAVAQATAAQANAAAJgFQAKgGgBgKQAAgNgIgEQgIgFgWAAIgIAAIAAgZIAIAAQASAAAIgEQAJgFAAgOQAAgSgZAAQgWAAgRAOIgMgZQAWgSAhAAQAZAAAQAMQAPAMAAATQAAAagaAMQAcAIABAfQAAAVgRAOQgQAOgbAAQgjAAgXgTg");
	this.shape_5.setTransform(212.9,6.7,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgUIAAAAQAAgSALgNQALgMAPAAQASAAAJALIgIAOQgJgJgJAAQgIAAgGAIQgGAHAAAMIAAAAQAAAMAGAIQAGAHAJAAQAIABAKgJIAIANQgMAMgQAAQgPAAgLgMg");
	this.shape_6.setTransform(97.8,6.6,0.9,0.896);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgUIAAAAQAAgSALgMQALgNAQAAQARAAALAMQALANAAASIAAAAQAAAUgLAMQgLAMgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAAAQAAANAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgMgGgHQgGgJgJABQgIgBgGAJg");
	this.shape_7.setTransform(90.1,6.6,0.9,0.896);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgUIAAAAQAAgSALgNQALgMAQAAQARAAAKALIgIAOQgKgJgJAAQgHAAgHAIQgFAHAAAMIAAAAQAAAMAFAIQAHAHAIAAQAJABAJgJIAIANQgLAMgQAAQgQAAgLgMg");
	this.shape_8.setTransform(82.7,6.6,0.9,0.896);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgVIAAAAQAAgSAKgNQALgMAOAAQARAAAKANQAJALAAATIAAAHIg1AAQAEAWARgBQALAAAKgIIAIALQgMANgSAAQgQAAgLgLgAgKgWQgGAGgBALIAjAAQgBgXgRAAQgGAAgEAGg");
	this.shape_9.setTransform(75.3,6.6,0.9,0.896);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgPAAgrIA5AAIAABUIgTAAIAAhEIgVAAQAAAqgGAPQgGAMgPAAg");
	this.shape_10.setTransform(67.1,6.6,0.9,0.896);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAeIAOAAQAgAAAAAZQgBAcgeAAgAgbAcIAOAAQANAAAAgNQAAgNgNAAIgOAAg");
	this.shape_11.setTransform(58.5,6.6,0.9,0.896);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAwIAFglIgdAWIgLgSIAigPIgigNIALgTIAdAWIgFglIAVAAIgFAlIAdgWIALATIghANIAhAPIgLASIgdgWIAFAlg");
	this.shape_12.setTransform(202.5,2.7,0.45,0.448);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_13.setTransform(196,5.4,0.45,0.448);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_14.setTransform(188.1,5.4,0.45,0.448);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAmBsIgthMIgLAAIgZAAIAABMIgkAAIAAjYIBOAAQAiAAAUASQAVATAAAhQAAAvgtAPIAzBUgAgrAAIApAAQARAAALgJQAMgKAAgTQAAglgpAAIgoAAg");
	this.shape_15.setTransform(179.9,5.4,0.45,0.448);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDBsIAAjYICHAAIAAAhIhjAAIAAA+IBYAAIAAAfIhYAAIAABag");
	this.shape_16.setTransform(171.6,5.4,0.45,0.448);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgqARIAAghIBVAAIAAAhg");
	this.shape_17.setTransform(164.8,6,0.45,0.448);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAqBsIAAhcIhUAAIAABcIgjAAIAAjYIAjAAIAABbIBUAAIAAhbIAkAAIAADYg");
	this.shape_18.setTransform(157.6,5.4,0.45,0.448);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBTIAAijIAjAAIAAAhQAOgkAiABIAAAmIgCAAQgVAAgNAOQgMAPAAAaIAABIg");
	this.shape_19.setTransform(147.1,6.5,0.45,0.448);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguA/QgXgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAgAAATAYQASAYAAAlIgBAMIhnAAQADAVAMALQALAKAPAAQAXAAARgRIAQAWQgXAZgiAAQggAAgUgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_20.setTransform(140.6,6.6,0.45,0.448);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPBTIg6ilIAlAAIAkB3IAmh3IAkAAIg6Clg");
	this.shape_21.setTransform(133.6,6.6,0.45,0.448);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAWgYAgAAQAhAAAVAXQAWAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXALAPQANAPAQAAQASAAAMgPQALgOAAgXIAAgCQAAgXgLgQQgMgPgSAAQgSAAgLAPg");
	this.shape_22.setTransform(126.3,6.6,0.45,0.448);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAgkAWgYQAWgYAgAAQAgAAAWAXQAVAYAAAkIAAACQAAAlgVAXQgXAYggAAQggAAgVgXgAgdgnQgKAPgBAXIAAACQAAAXAMAPQALAPASAAQASAAALgPQALgOAAgXIAAgCQAAgYgLgPQgMgPgSAAQgRAAgMAPg");
	this.shape_23.setTransform(118.3,6.6,0.45,0.448);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AArBsIAAhcIhUAAIAABcIgkAAIAAjYIAkAAIAABbIBUAAIAAhbIAjAAIAADYg");
	this.shape_24.setTransform(109.7,5.4,0.45,0.448);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAeBSIAAiFIg7AAIAACFIgjAAIAAijICBAAIAACjg");
	this.shape_25.setTransform(49.6,6.5,0.458,0.46);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAhBxIAAhsIhBBsIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjgAgbhOQgMgMgDgSIAVgFQAFAWARAAQASAAAFgWIAVAFQgCATgMALQgMAKgSAAQgQAAgMgKg");
	this.shape_26.setTransform(37.1,5.3,0.45,0.448);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AA2BSIAAijIAjAAIAACjgAhYBSIAAijIAjAAIAAA6IAcAAQAbAAAQAMQARANAAAaQAAAbgRAOQgPANgcAAgAg1A2IAbAAQAMAAAHgHQAHgHAAgLQAAgZgaAAIgbAAg");
	this.shape_27.setTransform(28.3,6.7,0.45,0.448);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBDAAQAYAAAOALQAPALAAAUQAAAagYALQAfALAAAbQAAAWgQANQgPALgbAAgAgcA2IAcAAQAdAAAAgVQAAgKgIgGQgIgGgNAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgTgYAAIgbAAg");
	this.shape_28.setTransform(19.9,6.7,0.45,0.448);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAWgYAfAAQAhAAAVAXQAWAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPARAAQASAAAMgPQALgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_29.setTransform(12.1,6.7,0.45,0.448);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AArBsIAAhcIhVAAIAABcIgkAAIAAjYIAkAAIAABbIBVAAIAAhbIAkAAIAADYg");
	this.shape_30.setTransform(3.5,5.5,0.45,0.448);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAhBSIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_31.setTransform(217.1,23.4,0.45,0.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAeBSIAAhDIg8AAIAABDIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAkAAIAACjg");
	this.shape_32.setTransform(209.4,23.4,0.45,0.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag7BCIANgcQAWAQASAAQANAAAIgFQAKgGAAgKQAAgNgIgEQgJgFgWAAIgHAAIAAgZIAHAAQASAAAIgEQAKgFgBgOQAAgSgZAAQgVAAgRAOIgMgZQAWgSAiAAQAYAAAPAMQAPAMAAATQABAagaAMQAcAIAAAfQAAAVgQAOQgQAOgbAAQgjAAgYgTg");
	this.shape_33.setTransform(202.2,23.4,0.45,0.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAhBSIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_34.setTransform(195.3,23.4,0.45,0.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ABNBSIgphIIgTAbIAAAtIghAAIAAgtIgUgbIgoBIIgnAAIA3hcIg1hHIAoAAIA5BPIAAhPIAhAAIAABPIA5hPIAoAAIg1BHIA3Bcg");
	this.shape_35.setTransform(186.1,23.4,0.45,0.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAhBxIAAhsIhBBsIghAAIAAijIAiAAIAABrIBAhrIAiAAIAACjgAgbhOQgMgLgDgUIAWgDQAEAUARAAQASAAAGgUIAUADQgCAUgMALQgLAKgTAAQgRAAgLgKg");
	this.shape_36.setTransform(173.3,22,0.45,0.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgvA/QgWgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAhAAASAYQASAYAAAlIgBAMIhmAAQACAVAMALQALAKAPAAQAWAAASgRIAQAWQgXAZgiAAQgfAAgWgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_37.setTransform(165.7,23.4,0.45,0.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAVgYAgAAQAhAAAWAXQAVAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPARAAQASAAALgPQAMgOAAgXIAAgCQAAgXgMgQQgMgPgRAAQgRAAgMAPg");
	this.shape_38.setTransform(158,23.4,0.45,0.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBDAAQAYAAAOALQAPALAAAUQAAAagYALQAfALAAAbQAAAWgQANQgPALgbAAgAgcA2IAcAAQAdAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgTgYAAIgbAAg");
	this.shape_39.setTransform(150.5,23.4,0.45,0.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB7AAIAAAeIgtAAIAACFg");
	this.shape_40.setTransform(143.7,23.4,0.45,0.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_41.setTransform(133.8,23.4,0.45,0.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAhBSIAAg4IgbAAIgfA4IgqAAIAog/QghgMAAgiQAAg2A8AAIBEAAIAACjgAgSguQgIAGAAAOQAAAMAIAHQAIAHAMAAIAfAAIAAg1IgaAAQgSAAgHAHg");
	this.shape_42.setTransform(121.7,23.2,0.45,0.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgqA+QgVgYAAglIAAgBQAAglAVgYQAVgXAgAAQAfAAAVAVIgQAaQgSgQgSAAQgQAAgLAOQgLAPAAAXIAAACQAAAYALAPQALAOASAAQASAAARgRIAQAZQgLALgLAGQgNAGgTAAQgfAAgVgXg");
	this.shape_43.setTransform(115.1,23.3,0.45,0.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag9BSIAAijIAjAAIAAA6IAbAAQAcAAAQAMQARANAAAaQAAAbgRAOQgQANgcAAgAgaA2IAaAAQAMAAAIgHQAHgHAAgLQAAgZgbAAIgaAAg");
	this.shape_44.setTransform(108.4,23.2,0.45,0.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_45.setTransform(101.7,23.2,0.45,0.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgxBIQgPgPgBgWIAAgCQAAgaARgNQAQgNAaAAQAUAAARAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAcAAQAhAAAQARQAQAQABAfIAABmIgjAAIAAgUQgQAWgcAAQgWABgOgNgAgeAfIAAACQAAAMAIAHQAHAGAMAAQAOABALgKQAJgIABgOIAAgRQgOgGgRAAQgfAAAAAbg");
	this.shape_46.setTransform(94.9,23.3,0.45,0.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAXAAAPALQAOALAAAUQAAAagYALQAfAKAAAcQAAAWgQANQgPALgbAAgAgcA2IAdAAQAcAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgTgYAAIgbAAg");
	this.shape_47.setTransform(88,23.2,0.45,0.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAXgYAfAAQAhAAAWAXQAVAYAAAkIAAACQAAAlgVAXQgWAYghAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXALAPQANAPAQAAQASAAAMgPQALgOAAgXIAAgCQAAgYgLgPQgMgPgSAAQgSAAgLAPg");
	this.shape_48.setTransform(80.2,23.3,0.45,0.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhJBrIAAjSIAjAAIAAAaQATgdAcAAQAbAAASAVQAUAXAAAnIAAAEQAAAngUAWQgSAVgbAAQgbAAgUgcIAABIgAgbg9QgLAPAAAYIAAADQAAAWALAPQALAOAQAAQAQAAALgOQAMgOAAgXIAAgDQAAgYgMgPQgLgOgQAAQgQAAgLAOg");
	this.shape_49.setTransform(72.3,24.2,0.45,0.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAgBSIAAhrIhABrIghAAIAAijIAiAAIAABqIBAhqIAiAAIAACjg");
	this.shape_50.setTransform(64.2,23.2,0.45,0.45);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_51.setTransform(57.2,23.2,0.45,0.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAeBSIAAiFIg7AAIAACFIgjAAIAAijICBAAIAACjg");
	this.shape_52.setTransform(50.4,23.2,0.45,0.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgyBIQgPgPABgWIAAgCQAAgaAQgNQAPgNAbAAQAUAAARAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAcAAQAgAAARARQAQAQAAAfIAABmIgiAAIAAgUQgQAWgdAAQgVABgPgNgAgeAfIAAACQAAAMAHAHQAIAGAMAAQAPABAJgKQALgIAAgOIAAgRQgNgGgSAAQgfAAAAAbg");
	this.shape_53.setTransform(42.8,23.3,0.45,0.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAxBkIAAgkIhiAAIgCAkIgfAAIAAhCIAQAAQARgjAAhMIAAgWIBwAAIAACFIAUAAIgEBCgAgfAiIA7AAIAAhnIgsAAQAABHgPAgg");
	this.shape_54.setTransform(35.3,24,0.45,0.45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgyBIQgOgPAAgWIAAgCQAAgaAQgNQAPgNAbAAQAUAAARAGIAAgGQAAgigjABQgUgBgVAKIgHgdQAYgMAdAAQAgAAAQARQAQAQAAAfIAABmIgiAAIAAgUQgRAWgcAAQgVABgPgNgAgWALQgIAHAAANIAAACQAAAMAHAHQAIAGAMAAQAOABAKgKQAKgIAAgOIAAgRQgNgGgRAAQgOAAgJAHg");
	this.shape_55.setTransform(27.7,23.3,0.45,0.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_56.setTransform(17.4,23.2,0.45,0.45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgyBIQgPgPAAgWIAAgCQABgaAQgNQAPgNAcAAQATAAARAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAdAAQAfAAARARQAQAQAAAfIAABmIgiAAIAAgUQgQAWgdAAQgVABgPgNgAgeAfIAAACQAAAMAHAHQAIAGAMAAQAOABAKgKQALgIgBgOIAAgRQgNgGgRAAQgfAAAAAbg");
	this.shape_57.setTransform(9.6,23.3,0.45,0.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_58.setTransform(3.1,23.2,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0.2,246.3,28.9), null);


(lib.p6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._6();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p6, new cjs.Rectangle(-120,-67.5,300,250), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(-120,-67.5,300,250), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-120,-67.5,300,250), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-120,-67.5,300,250), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-120,-67.5,300,250), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-120,-67.5,300,250), null);


(lib.hfree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIAVIAAgbIgQAbIgIAAIAAgpIAJAAIAAAaIAPgaIAJAAIAAApg");
	this.shape.setTransform(33.5,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAcIAAg2IAJAAIAAAHQAFgIAGAAQAIAAAEAGQAFAGAAAKIAAABQAAAJgFAGQgEAFgIAAQgGAAgFgHIAAATgAgGgPQgDAEAAAGIAAABQAAAMAJAAQAKAAAAgMIAAgBQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1.setTransform(29,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDAiIAAgPQgDADgGAAQgHAAgDgFQgFgGAAgLQAAgUAPAAQAEAAAFAEIAAgRIAIAAIAAARQADgEAFAAQAHAAAEAGQAEAFAAAKIAAAAQAAAKgEAGQgEAFgHAAQgGAAgCgDIAAAPgAAFgIIAAAUQACACADAAQAIAAAAgNQAAgNgIAAQgDAAgCAEgAgSABQAAANAIAAQAEAAADgCIAAgUQgDgEgEAAQgIAAAAANg");
	this.shape_2.setTransform(23.5,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAHAVIAAgQQgEADgGAAQgMAAAAgMIAAgQIAJAAIAAAOQAAAGAGAAQADAAAEgBIAAgTIAJAAIAAApg");
	this.shape_3.setTransform(16.1,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJAdIAAgcIgQAcIgJAAIAAgpIAJAAIAAAaIAQgaIAIAAIAAApgAgKgbIAGgBQABAFADAAQAFAAABgFIAGABQgCAKgKAAQgJAAgBgKg");
	this.shape_4.setTransform(11.8,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAQIAFgGQAEAEAEAAQAJAAACgLIgOAAIAAgGIAOAAQgCgKgHAAQgGAAgEAEIgEgGQAFgGAIAAQAHAAAGAGQAFAGAAAJIAAAAQAAAKgFAGQgFAGgHAAQgJAAgGgGg");
	this.shape_5.setTransform(7.6,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCAMIABgJIgHAGIgDgFIAJgEIgJgDIADgFIAHAGIgBgJIAFAAIgBAJIAHgGIADAFIgIADIAIAEIgDAFIgHgGIABAJg");
	this.shape_6.setTransform(4.2,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hfree, new cjs.Rectangle(3,3,32.2,7.1), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(44.6,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEAAgGQAAgGgDgDQgEgDgEAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(40.2,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(35.6,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgDAEQgEADgHAAQgHAAgFgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(31.3,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_4.setTransform(26.9,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(22.4,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMAXQgGgHAAgPQAAgPAGgIQAGgGAIAAQAGAAAFAEQAEADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgFgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgCgDgGAAQgDAAgDADg");
	this.shape_6.setTransform(17.9,14.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(13.5,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(9.1,14.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(4.6,14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(0,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAEgDQAEgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(-4.3,14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(-9.1,14.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_13.setTransform(92,6.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQAEABACACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_14.setTransform(86.5,6.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAdIAAg5IAjAAIAAAHIgcAAIAAAyg");
	this.shape_15.setTransform(81.9,6.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(76.3,6.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEAAgGQAAgGgEgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAFAFQAFAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_17.setTransform(68.8,6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(64,6.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIAAANQAAAKgBAGQgDAGgEAEQgDADgHAAQgIAAgEgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(59.8,6.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQAEgEgBgEQAAgEgCgDQgEgDgFAAQgDAAgEADQgCADAAAGIgIgBQABgIAFgEQAEgFAIAAQAIAAAFAFQAEAEAAAHIAAAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_20.setTransform(55.3,6.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(50.6,6.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEAAgGQAAgGgDgDQgEgDgEAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_22.setTransform(46.5,6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(41.9,6.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgDAGgDAEQgEADgHAAQgHAAgFgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(37.6,6.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(33.2,6.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAcQABgHACgJQACgKAFgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(28.7,6.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_27.setTransform(21.4,6.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_28.setTransform(15.6,6.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAPAdIAAgsIgdAsIgHAAIAAg5IAGAAIAAAtIAdgtIAJAAIAAA5g");
	this.shape_29.setTransform(9.8,6.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(3.7,9.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgCgDQgCgDgBgEQAAgHAFgEQAFgEAGAAQAHAAAFAEQAEAEAAAHQAAAEgBADQgCADgFABQAFACADADQADAEAAAFQAAAHgFAFQgGAFgIAAQgIAAgEgFgAgHAEQgDADgBAFIACAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgFgUQgEADAAADQAAAEAEADQACADADAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgCgEAAQgDAAgCACg");
	this.shape_31.setTransform(0.3,6.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(-5.2,9.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_33.setTransform(-8.8,8.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(106.8,1.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAcIAAgeIgTAeIgHAAIAAgoIAHAAIAAAeIATgeIAHAAIAAAogAgGgUQgEgDAAgFIAFAAIACAEIADACIAFgCIACgEIAFAAQAAAFgEADQgDADgEgBQgFABgCgDg");
	this.shape_35.setTransform(103.5,-1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(99.9,-0.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAJgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_37.setTransform(96.3,-1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAeIATgeIAHAAIAAAogAgGgUQgDgDgBgFIAEAAIADAEIADACIAFgCIACgEIAFAAQAAAFgDADQgEADgEgBQgFABgCgDg");
	this.shape_38.setTransform(89.8,-1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_39.setTransform(85.3,-0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(81.6,-0.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(77.7,-0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(73.4,-0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(69,-0.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(63.6,0.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_45.setTransform(57.9,-0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_46.setTransform(53.1,-1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_47.setTransform(45.7,0.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgEAAgDAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(41.6,-0.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCACgFIAHABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQgBgFgCgDQgEgEgEAAQgFAAgCADg");
	this.shape_49.setTransform(37.6,-0.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_50.setTransform(33.1,-0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(28.8,0.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(23.6,-1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(17.4,1.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_54.setTransform(14.1,-0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQABgCABgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(9.9,-0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(6.1,-0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(2.2,-0.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(-2.1,-0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(-7.7,-1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(107.8,-6.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(105.4,-8.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(100.4,-6.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(97.1,-9.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(92.3,-9.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(88,-9.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_66.setTransform(83.8,-9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(79,-9.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(74.5,-9.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(68.2,-8.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(64.9,-6.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgSAdIAAg5IAkAAIAAAHIgcAAIAAAyg");
	this.shape_71.setTransform(61.9,-9.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(58.4,-6.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_73.setTransform(54.3,-9.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(50.4,-6.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAZQgGgDgDgHQgDgHAAgIQAAgIADgHQAEgHAGgEQAGgDAHAAQAIAAAGAFQAGAEACAIIgHABQgCgFgEgEQgEgCgFAAQgGgBgEAEQgFADgCAFQgBAFAAAGQAAAHACAFQACAFAEAEQAFACAEAAQAGAAAFgDQAEgFACgHIAHADQgCAIgGAFQgGAFgJABQgJAAgFgFg");
	this.shape_75.setTransform(46.3,-9.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAdIAAgsIgdAsIgIAAIAAg5IAHAAIAAAtIAdgtIAIAAIAAA5g");
	this.shape_76.setTransform(38.4,-9.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAkIAAgOIglAAIAAAOIgHAAIAAgVIAFAAQAHgKAAgfIAAgIIAhAAIAAAxIAGAAIAAAVgAgGgYIgBATQgCAMgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(32.6,-8.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_78.setTransform(27.2,-9.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(21.6,-9.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAKAdIgJgQQgDgGgDgDQgDgCgDAAIAAAbIgIAAIAAg5IAIAAIAAAaQAFAAACgCQACgCACgIIAEgIIAEgEQADgCAEAAIAEABIAAAGIgBAAIgCAAQgEAAgBACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(16.9,-9.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(12,-8.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(4.5,-9.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(-1.7,-9.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(-7.9,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(-13,-15.4,126.1,36.6), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/PSwMAAAglfMA+fAAAMAAAAlfg");
	this.shape.setTransform(200,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,400,240), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_330 = new cjs.Graphics().p("AE1GYIDRrrMAubAAAIjRLrg");
	var mask_graphics_331 = new cjs.Graphics().p("AgoGYIDQrrMAubAAAIjRLrg");
	var mask_graphics_332 = new cjs.Graphics().p("AlQGYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_333 = new cjs.Graphics().p("ApDGYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_334 = new cjs.Graphics().p("Ar/GYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_335 = new cjs.Graphics().p("AuGGYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_336 = new cjs.Graphics().p("AvXGYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_337 = new cjs.Graphics().p("AvyGYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_396 = new cjs.Graphics().p("AvyGYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_397 = new cjs.Graphics().p("A18GYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_398 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_399 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_400 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_401 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_402 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_graphics_403 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(330).to({graphics:mask_graphics_330,x:348.9,y:40.8}).wait(1).to({graphics:mask_graphics_331,x:313.9,y:40.8}).wait(1).to({graphics:mask_graphics_332,x:284.3,y:40.8}).wait(1).to({graphics:mask_graphics_333,x:260,y:40.8}).wait(1).to({graphics:mask_graphics_334,x:241.2,y:40.8}).wait(1).to({graphics:mask_graphics_335,x:227.7,y:40.8}).wait(1).to({graphics:mask_graphics_336,x:219.6,y:40.8}).wait(1).to({graphics:mask_graphics_337,x:216.9,y:40.8}).wait(59).to({graphics:mask_graphics_396,x:216.9,y:40.8}).wait(1).to({graphics:mask_graphics_397,x:177.5,y:40.8}).wait(1).to({graphics:mask_graphics_398,x:129.4,y:40.8}).wait(1).to({graphics:mask_graphics_399,x:74.8,y:40.8}).wait(1).to({graphics:mask_graphics_400,x:32.4,y:40.8}).wait(1).to({graphics:mask_graphics_401,x:2.1,y:40.8}).wait(1).to({graphics:mask_graphics_402,x:-16.1,y:40.8}).wait(1).to({graphics:mask_graphics_403,x:-22.1,y:40.8}).wait(1));

	// txt6
	this.instance = new lib.txt6();
	this.instance.parent = this;
	this.instance.setTransform(223.6,46.4,1.21,1.21,0,0,0,71.5,21.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(330).to({_off:false},0).wait(74));

	// mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_198 = new cjs.Graphics().p("AE1GYIDRrrMAubAAAIjRLrg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AgoGYIDQrrMAubAAAIjRLrg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AlQGYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_201 = new cjs.Graphics().p("ApDGYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_202 = new cjs.Graphics().p("Ar/GYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_203 = new cjs.Graphics().p("AuGGYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AvXGYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_205 = new cjs.Graphics().p("AvyGYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AvyGYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_331 = new cjs.Graphics().p("A18GYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_332 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_333 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_334 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_335 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_336 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_1_graphics_337 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(198).to({graphics:mask_1_graphics_198,x:348.9,y:40.8}).wait(1).to({graphics:mask_1_graphics_199,x:313.9,y:40.8}).wait(1).to({graphics:mask_1_graphics_200,x:284.3,y:40.8}).wait(1).to({graphics:mask_1_graphics_201,x:260,y:40.8}).wait(1).to({graphics:mask_1_graphics_202,x:241.2,y:40.8}).wait(1).to({graphics:mask_1_graphics_203,x:227.7,y:40.8}).wait(1).to({graphics:mask_1_graphics_204,x:219.6,y:40.8}).wait(1).to({graphics:mask_1_graphics_205,x:216.9,y:40.8}).wait(125).to({graphics:mask_1_graphics_330,x:216.9,y:40.8}).wait(1).to({graphics:mask_1_graphics_331,x:177.5,y:40.8}).wait(1).to({graphics:mask_1_graphics_332,x:129.4,y:40.8}).wait(1).to({graphics:mask_1_graphics_333,x:74.8,y:40.8}).wait(1).to({graphics:mask_1_graphics_334,x:32.4,y:40.8}).wait(1).to({graphics:mask_1_graphics_335,x:2.1,y:40.8}).wait(1).to({graphics:mask_1_graphics_336,x:-16.1,y:40.8}).wait(1).to({graphics:mask_1_graphics_337,x:-22.1,y:40.8}).wait(67));

	// txt4
	this.instance_1 = new lib.txt4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(219.1,46.4,1.21,1.21,0,0,0,68.2,6.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(198).to({_off:false},0).to({_off:true},140).wait(66));

	// mask1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_132 = new cjs.Graphics().p("AE1GYIDRrrMAubAAAIjRLrg");
	var mask_2_graphics_133 = new cjs.Graphics().p("AgoGYIDQrrMAubAAAIjRLrg");
	var mask_2_graphics_134 = new cjs.Graphics().p("AlQGYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_135 = new cjs.Graphics().p("ApDGYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_136 = new cjs.Graphics().p("Ar/GYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_137 = new cjs.Graphics().p("AuGGYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_138 = new cjs.Graphics().p("AvXGYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_139 = new cjs.Graphics().p("AvyGYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AvyGYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_199 = new cjs.Graphics().p("A1mGYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_200 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_201 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_202 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_203 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_204 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_2_graphics_205 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(132).to({graphics:mask_2_graphics_132,x:348.9,y:40.8}).wait(1).to({graphics:mask_2_graphics_133,x:313.9,y:40.8}).wait(1).to({graphics:mask_2_graphics_134,x:284.3,y:40.8}).wait(1).to({graphics:mask_2_graphics_135,x:260,y:40.8}).wait(1).to({graphics:mask_2_graphics_136,x:241.2,y:40.8}).wait(1).to({graphics:mask_2_graphics_137,x:227.7,y:40.8}).wait(1).to({graphics:mask_2_graphics_138,x:219.6,y:40.8}).wait(1).to({graphics:mask_2_graphics_139,x:216.9,y:40.8}).wait(59).to({graphics:mask_2_graphics_198,x:216.9,y:40.8}).wait(1).to({graphics:mask_2_graphics_199,x:179.7,y:40.8}).wait(1).to({graphics:mask_2_graphics_200,x:137.5,y:40.8}).wait(1).to({graphics:mask_2_graphics_201,x:85.9,y:40.8}).wait(1).to({graphics:mask_2_graphics_202,x:45.9,y:40.8}).wait(1).to({graphics:mask_2_graphics_203,x:17.2,y:40.8}).wait(1).to({graphics:mask_2_graphics_204,x:0.1,y:40.8}).wait(1).to({graphics:mask_2_graphics_205,x:-5.6,y:40.8}).wait(199));

	// txt3
	this.instance_2 = new lib.txt3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(201,54.9,1.21,1.21,0,0,0,53.2,14.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(132).to({_off:false},0).to({_off:true},74).wait(198));

	// mask1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_66 = new cjs.Graphics().p("AE1GYIDRrrMAubAAAIjRLrg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AgoGYIDQrrMAubAAAIjRLrg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AlQGYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_69 = new cjs.Graphics().p("ApDGYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_70 = new cjs.Graphics().p("Ar/GYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AuGGYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AvXGYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AvyGYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AvyGYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_133 = new cjs.Graphics().p("A18GYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_134 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_3_graphics_66,x:348.9,y:40.8}).wait(1).to({graphics:mask_3_graphics_67,x:313.9,y:40.8}).wait(1).to({graphics:mask_3_graphics_68,x:284.3,y:40.8}).wait(1).to({graphics:mask_3_graphics_69,x:260,y:40.8}).wait(1).to({graphics:mask_3_graphics_70,x:241.2,y:40.8}).wait(1).to({graphics:mask_3_graphics_71,x:227.7,y:40.8}).wait(1).to({graphics:mask_3_graphics_72,x:219.6,y:40.8}).wait(1).to({graphics:mask_3_graphics_73,x:216.9,y:40.8}).wait(59).to({graphics:mask_3_graphics_132,x:216.9,y:40.8}).wait(1).to({graphics:mask_3_graphics_133,x:177.5,y:40.8}).wait(1).to({graphics:mask_3_graphics_134,x:129.4,y:40.8}).wait(1).to({graphics:mask_3_graphics_135,x:74.8,y:40.8}).wait(1).to({graphics:mask_3_graphics_136,x:32.4,y:40.8}).wait(1).to({graphics:mask_3_graphics_137,x:2.1,y:40.8}).wait(1).to({graphics:mask_3_graphics_138,x:-16.1,y:40.8}).wait(1).to({graphics:mask_3_graphics_139,x:-22.1,y:40.8}).wait(265));

	// txt2
	this.instance_3 = new lib.txt2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(195.3,55.2,1.21,1.21,0,0,0,48.5,14.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({_off:false},0).to({_off:true},74).wait(264));

	// mask1 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AHLGYIDRrrMAubAAAIjRLrg");
	var mask_4_graphics_1 = new cjs.Graphics().p("AA8GYIDRrrMAubAAAIjRLrg");
	var mask_4_graphics_2 = new cjs.Graphics().p("AkVGYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_3 = new cjs.Graphics().p("AopGYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_4 = new cjs.Graphics().p("AsAGYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_5 = new cjs.Graphics().p("AuaGYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_6 = new cjs.Graphics().p("Av2GYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AwVGYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AwLGYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_67 = new cjs.Graphics().p("A2XGYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_68 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_69 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_70 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_71 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_72 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");
	var mask_4_graphics_73 = new cjs.Graphics().p("A41GYIDRrrMAuaAAAIjRLrg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:363.9,y:40.8}).wait(1).to({graphics:mask_4_graphics_1,x:324,y:40.8}).wait(1).to({graphics:mask_4_graphics_2,x:290.2,y:40.8}).wait(1).to({graphics:mask_4_graphics_3,x:262.6,y:40.8}).wait(1).to({graphics:mask_4_graphics_4,x:241.1,y:40.8}).wait(1).to({graphics:mask_4_graphics_5,x:225.7,y:40.8}).wait(1).to({graphics:mask_4_graphics_6,x:216.5,y:40.8}).wait(1).to({graphics:mask_4_graphics_7,x:213.4,y:40.8}).wait(59).to({graphics:mask_4_graphics_66,x:214.4,y:40.8}).wait(1).to({graphics:mask_4_graphics_67,x:174.8,y:40.8}).wait(1).to({graphics:mask_4_graphics_68,x:123.4,y:40.8}).wait(1).to({graphics:mask_4_graphics_69,x:68.5,y:40.8}).wait(1).to({graphics:mask_4_graphics_70,x:25.8,y:40.8}).wait(1).to({graphics:mask_4_graphics_71,x:-4.7,y:40.8}).wait(1).to({graphics:mask_4_graphics_72,x:-23,y:40.8}).wait(1).to({graphics:mask_4_graphics_73,x:-29.1,y:40.8}).wait(331));

	// txt1
	this.instance_4 = new lib.txt1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(224.1,53.3,1.177,1.177,0,0,0,83.2,21.9);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},74).wait(330));

	// plate
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBErICgpVIBjAAIigJVg");
	this.shape.setTransform(435.6,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB0927").s().p("AiaEmICfpLICWAAIigJLg");
	this.shape_1.setTransform(429.7,59.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBDBDA").s().p("AjRGPIBQkrICWAAICFnyIA4AAIjVMdg");
	this.shape_2.setTransform(429.9,70);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC052B").s().p("A72G+IDjt7MA0KAAAIjoN7g");
	this.shape_3.setTransform(273.3,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(404));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95,-19.8,356.6,129.7);


(lib.pics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3YSwMAKGglfMAkrAAAMgKGAlfg");
	mask.setTransform(149.7,125.8);

	// 6.jpg
	this.instance = new lib.p6();
	this.instance.parent = this;
	this.instance.setTransform(120,68.3,1.1,1.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(330).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.5,alpha:1},7,cjs.Ease.get(1)).wait(67));

	// 5.jpg
	this.instance_1 = new lib.p5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,68.3,1.1,1.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(264).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.5,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(66));

	// 4.jpg
	this.instance_2 = new lib.p4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,68.3,1.1,1.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(198).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.5,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(132));

	// 3.jpg
	this.instance_3 = new lib.p3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,68.3,1.1,1.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(132).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(198));

	// 2.jpg
	this.instance_4 = new lib.p2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,68.3,1.1,1.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(264));

	// 1.jpg
	this.instance_5 = new lib.p1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,68.3,1.1,1.1);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(330));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5.8,299.4,240);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("Ag6A6QgYgYAAgiQAAghAYgZQAYgYAiAAQAiAAAYAYQAZAYAAAiQAAAigZAYQgXAZgjAAQgiAAgYgZgAgxgyQgVAWAAAcQAAAdAVAVQAUAVAdAAQAeAAAUgVQAUgUABgeQAAgdgVgVQgVgUgdAAQgcAAgVAUgAAWAtIAAgCIAAgDIAAgHQAAgQgJgFQgGgDgLAAIgMAAIAAAkIgQAAIAAhaIAfAAQAQAAAIADQAOAGAAARQAAAMgJAGQgFACgIACQALABAFAIQAEAGAAAIIACASIAAABgAgQgBIAOAAQAJAAAFgCQAKgEAAgKQAAgKgHgEQgFgDgNAAIgNAAg");
	this.shape.setTransform(26.2,26.1,0.342,0.342);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(0.6,0.3,0.342,0.342,0,0,0,139.8,139.3);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.2,1.3,0.342,0.342,0,0,0,55.3,52.6);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.4,8.1,0.342,0.342,0,0,0,16.7,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkeKoQiEg4hnhmQhlhmg4iFQg7iJAAiWQAAiVA7iJQA4iEBlhnQBnhmCEg4QCJg6CVAAQCWAACJA6QCEA4BmBmQBmBnA5CEQA5CJAACVQAACWg5CJQg5CFhmBmQhmBmiEA4QiJA6iWAAQiVAAiJg6gAidA9IiVIqQCSBICgAAQEdAADIjJQDJjJAAkdQAAhlgdhggAqKDZQAnB1BNBgQBMBfBpA/ICIn8IiyA4Ig1DFIg7ASIA0jEgAoxmKQh9CxAADZQAABdAZBbIDZhFIDLr1QjGBKh6CugAi0qVIjML1ICyg4IB4nAIA8gSIh4G/IMZj7QhIjKiwh9QiyiBjdAAQhcAAhYAZg");
	this.shape_1.setTransform(0.1,0.4,0.342,0.342);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjhCiQgOgTAHglQAIgnAZgfQAagfAhgIQAigKAQASQAQASgIAnQgGAfgTAbQgSAbgZAPgAiUAmQgLADgJALQgNAPgFAZQgFAaAIAJQAGAHALgEQALgDAKgLQANgQAFgZQAEgZgIgJQgEgEgGAAIgHABgAk2CiQAKgPAEgVQAFgZgIgJQgGgHgLADQgLADgKAMQgNAPgEAZQgDANABAGIgtAAIABgGQAIgnAZgeQAagfAhgKQAhgKAQATQAQASgHAnQgGAbgNAXgAg/gcIAygOIAFBhIAAAAIAxh1IA0gQIhZDCIg1ASgABzhWIBlgfIgJAtIg1ATIgEAWIAtgSIgIAtIgtANIgFAWIA3gVIgMAzIhnAggAEHiEIBfgaQAWgHAMAJQANAJgEAYQgIAigaAQQAUACgFAiIgDATQgBANACAEIgyAMQgBgHACgRQACgRgBgFQgDgJgNADIgXADIgPBFIgzAOgAFIhvIgYAGIgHAjIAagIQAWgGAEgRQACgIgFgDQgCgBgEAAIgMACg");
	this.shape_2.setTransform(8.6,1.4,0.342,0.342);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhyAVQgPgRAFgjIAtAAQAAANAIAFQAFADAJgCQANgEALgPIAoAAQgbAugtAOQgLADgKAAQgRAAgLgLgAAzgfIBLAAQgLAHgNADQgMAEgJAAQgTAAgLgOg");
	this.shape_3.setTransform(-0.8,8,0.342,0.342);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#76231F").s().p("AkeKoQiEg4hmhnQhnhmg4iEQg5iJAAiWQAAiVA5iJQA4iEBnhnQBlhlCFg4QCJg7CVAAQCWAACJA7QCEA4BnBlQBlBnA4CEQA6CJABCVQgBCWg6CJQg4CEhlBmQhnBniEA4QiJA5iWAAQiVAAiJg5gAidA9IiUIpQCOBJCjgBQEcAADKjJQDIjJAAkcQAAhmgchggAqLDZQAoB0BMBhQBNBfBoBAICJn+IixA5Ig1DFIg8ARIA0jDgAoxmKQh9CyAADYQAABeAZBaIDZhFIDLr1QjFBLh7CtgAi0qVIjLL1ICxg4IB4nAIA8gSIh4G/IMZj7QhIjKiwh+QiyiAjdAAQhcAAhYAZg");
	this.shape_4.setTransform(0.7,0.9,0.342,0.342);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#76231F").s().p("AjhCiQgOgTAHglQAIgnAZgeQAaggAigIQAhgKAQASQAQASgIAnQgGAggSAaQgTAbgZAPgAiUAmQgLADgJAMQgNAPgFAZQgFAZAIAJQAGAHALgEQAMgDAJgLQANgPAFgZQAEgagIgJQgEgEgGAAIgHABgAk2CiQAKgOAEgWQAFgZgIgJQgGgHgLADQgLAEgKALQgNAPgEAZQgCAKAAAJIgtAAIABgGQAIgnAZgeQAagfAhgKQAigJAQASQAPATgHAnQgFAagOAXgAg/gcIAygOIAFBhIAAAAIAxh1IA0gQIhZDCIg1ASgAB0hWIBkgeIgJAsIg1ATIgEAWIAtgRIgIAsIgtANIgFAWIA3gUIgMAzIhnAfgAEHiEIBfgaQAXgGAMAIQAMAJgEAYQgIAigaAQQATADgEAhQgFAeADAGIgyANQgBgJACgQQACgRgBgFQgDgJgNAEIgXACIgOBFIg0APgAFIhvIgYAGIgHAjIAagHQAWgGAEgSQACgIgFgDQgCgBgEAAIgMACg");
	this.shape_5.setTransform(9.3,1.9,0.342,0.342);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#76231F").s().p("AhyAVQgPgRAFgjIAtAAQABAZAVgGQANgEALgPIAoAAQgcAvgsANQgLADgKAAQgRAAgLgLgAAzgfIBLAAQgLAHgNADQgMAEgJAAQgTAAgLgOg");
	this.shape_6.setTransform(-0.2,8.5,0.342,0.342);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,0.1,0.342,0.342,0,0,0,159,158.6);

	this.instance_4 = new lib.ClipGroup_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,0.1,0.342,0.342,0,0,0,161.8,161.5);

	this.instance_5 = new lib.ClipGroup_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.1,0.1,0.342,0.342,0,0,0,169.5,169.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-57.8,-57.8,115.5,115.7), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hfree
	this.instance = new lib.hfree();
	this.instance.parent = this;
	this.instance.setTransform(99.5,2.9,1,1,0,0,0,16.1,3.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7,cjs.Ease.get(1)).wait(59).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(256).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(59).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(12.5,25.2);

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(404));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,2.4,126.1,43.9);


// stage content:
(lib._100pcx240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		 
		stage.addEventListener("resize", res);
		
		var bg = this.bg;
		
		
		var legal = this.legal;
		var text = this.text;
		var logo = this.logo;
		var pics = this.pics;
		
		function res() {
			
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			
			bg.x = 0;
			bg.y = 0;
			bg.scaleX = wdt/400;
			
			legal.scaleX = 1.2;
			legal.scaleY = 1.2;
		
		
			if (wdt<500){
				text.scaleX = 0.65;
				text.scaleY = 0.65;
				text.x = 100;
				text.y = 120;
				
				logo.scaleX = 1;		
				logo.scaleY = 1;
				logo.x = 0.25*wdt;
				logo.y = 40;
				
				pics.x = wdt*0.75;
				
				legal.x = 5;
				
				
			} else if (wdt<700){
				text.scaleX = 0.9;
				text.scaleY = 0.9;
				text.x = 140;
				text.y = 130;
				
				logo.scaleX = 1;		
				logo.scaleY = 1;
				logo.x = 0.25*wdt;
				logo.y = 40;
				
				pics.x = wdt*0.75;
				
				legal.x = 5;
				
		
			} else if (wdt<1000){
				text.scaleX = 1;
				text.scaleY = 1;
				text.x = 0.2*wdt;
				text.y = 120;
				
				logo.scaleX = 1.7;		
				logo.scaleY = 1.7;
				logo.x = 0.8*wdt;
				logo.y = 120;
				
				pics.x = 0.55*wdt;
				
				legal.x = wdt - 150;
			} else {
				text.scaleX = 1.1;
				text.scaleY = 1.1;
				text.x = 0.2*wdt;
				text.y = 120;
				
				logo.scaleX = 1.7;		
				logo.scaleY = 1.7;
				logo.x = 0.8*wdt;
				logo.y = 120;
				
				pics.x = 0.55*wdt;
				
				legal.x = wdt - 150;
			} 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(404));

	// legal
	this.legal = new lib.legal();
	this.legal.parent = this;
	this.legal.setTransform(-141.1,183.6);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(404));

	// logo
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(51.4,45,1,1,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(404));

	// text
	this.text = new lib.text();
	this.text.parent = this;
	this.text.setTransform(73.6,131.1,0.5,0.5,0,0,0,273.3,45);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(404));

	// pics
	this.pics = new lib.pics();
	this.pics.parent = this;
	this.pics.setTransform(320.1,127.1,1,1,0,0,0,153,131.5);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(404));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(404));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(58.4,107.2,626.6,277.4);
// library properties:
lib.properties = {
	width: 400,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx240_atlas_.jpg", id:"100pcx240_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;