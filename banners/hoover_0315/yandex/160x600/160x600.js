(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_atlas_", frames: [[161,224,160,222],[323,224,160,222],[323,0,160,222],[161,0,160,222],[0,0,159,280]]}
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
	this.shape.setTransform(92.1,0.3,0.848,0.848);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgUIAAAAQAAgSALgMQALgNAQAAQARAAALAMQALANAAASIAAAAQAAAUgLAMQgLAMgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAAAQAAANAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgMgGgHQgGgJgJABQgIgBgGAJg");
	this.shape_1.setTransform(84.9,0.3,0.848,0.848);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgUIAAAAQAAgSALgNQALgMAQAAQARAAAKALIgIAOQgKgJgJAAQgHAAgHAIQgFAHAAAMIAAAAQAAAMAFAIQAHAHAIAAQAJABAJgJIAIANQgLAMgQAAQgQAAgLgMg");
	this.shape_2.setTransform(77.9,0.3,0.848,0.848);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgVIAAAAQAAgSAKgNQALgMAOAAQARAAAKANQAJALAAATIAAAHIg1AAQAEAWARgBQALAAAKgIIAIALQgMANgSAAQgQAAgLgLgAgKgWQgGAGgBALIAjAAQgBgXgRAAQgGAAgEAGg");
	this.shape_3.setTransform(70.9,0.3,0.848,0.848);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgPAAgrIA5AAIAABUIgTAAIAAhEIgVAAQAAAqgGAPQgGAMgPAAg");
	this.shape_4.setTransform(63.2,0.3,0.848,0.848);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAeIAOAAQAgAAAAAZQgBAcgeAAgAgbAcIAOAAQANAAAAgNQAAgNgNAAIgOAAg");
	this.shape_5.setTransform(55.1,0.2,0.848,0.848);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAeBSIAAiFIg7AAIAACFIgjAAIAAijICBAAIAACjg");
	this.shape_6.setTransform(46.7,0.2,0.431,0.435);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBxIAAhsIhBBsIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjgAgbhOQgMgMgDgSIAVgFQAFAWARAAQASAAAFgWIAVAFQgCATgMALQgMAKgSAAQgQAAgMgKg");
	this.shape_7.setTransform(35,-1,0.424,0.424);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA2BSIAAijIAjAAIAACjgAhYBSIAAijIAjAAIAAA6IAcAAQAbAAAQAMQARANAAAaQAAAbgRAOQgPANgcAAgAg1A2IAbAAQAMAAAHgHQAHgHAAgLQAAgZgaAAIgbAAg");
	this.shape_8.setTransform(26.7,0.4,0.424,0.424);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBDAAQAYAAAOALQAPALAAAUQAAAagYALQAfALAAAbQAAAWgQANQgPALgbAAgAgcA2IAcAAQAdAAAAgVQAAgKgIgGQgIgGgNAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgTgYAAIgbAAg");
	this.shape_9.setTransform(18.8,0.4,0.424,0.424);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAWgYAfAAQAhAAAVAXQAWAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPARAAQASAAAMgPQALgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_10.setTransform(11.4,0.4,0.424,0.424);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArBsIAAhcIhVAAIAABcIgkAAIAAjYIAkAAIAABbIBVAAIAAhbIAkAAIAADYg");
	this.shape_11.setTransform(3.3,-0.8,0.424,0.424);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAwIAFglIgdAWIgLgSIAigPIgigNIALgTIAdAWIgFglIAVAAIgFAlIAdgWIALATIghANIAhAPIgLASIgdgWIAFAlg");
	this.shape_12.setTransform(91.6,11.5,0.428,0.428);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_13.setTransform(85.5,14.1,0.428,0.428);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_14.setTransform(77.9,14.1,0.428,0.428);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAmBsIgthMIgLAAIgZAAIAABMIgkAAIAAjYIBOAAQAiAAAUASQAVATAAAhQAAAvgtAPIAzBUgAgrAAIApAAQARAAALgJQAMgKAAgTQAAglgpAAIgoAAg");
	this.shape_15.setTransform(70.1,14.1,0.428,0.428);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDBsIAAjYICHAAIAAAhIhjAAIAAA+IBYAAIAAAfIhYAAIAABag");
	this.shape_16.setTransform(62.2,14.1,0.428,0.428);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgqARIAAghIBVAAIAAAhg");
	this.shape_17.setTransform(55.8,14.7,0.428,0.428);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAqBsIAAhcIhUAAIAABcIgjAAIAAjYIAjAAIAABbIBUAAIAAhbIAkAAIAADYg");
	this.shape_18.setTransform(48.9,14.1,0.428,0.428);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBTIAAijIAjAAIAAAhQAOgkAiABIAAAmIgCAAQgVAAgNAOQgMAPAAAaIAABIg");
	this.shape_19.setTransform(38.9,15.2,0.428,0.428);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguA/QgXgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAgAAATAYQASAYAAAlIgBAMIhnAAQADAVAMALQALAKAPAAQAXAAARgRIAQAWQgXAZgiAAQggAAgUgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_20.setTransform(32.8,15.3,0.428,0.428);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPBTIg6ilIAlAAIAkB3IAmh3IAkAAIg6Clg");
	this.shape_21.setTransform(26.1,15.3,0.428,0.428);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAWgYAgAAQAhAAAVAXQAWAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXALAPQANAPAQAAQASAAAMgPQALgOAAgXIAAgCQAAgXgLgQQgMgPgSAAQgSAAgLAPg");
	this.shape_22.setTransform(19.2,15.3,0.428,0.428);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAgkAWgYQAWgYAgAAQAgAAAWAXQAVAYAAAkIAAACQAAAlgVAXQgXAYggAAQggAAgVgXgAgdgnQgKAPgBAXIAAACQAAAXAMAPQALAPASAAQASAAALgPQALgOAAgXIAAgCQAAgYgLgPQgMgPgSAAQgRAAgMAPg");
	this.shape_23.setTransform(11.5,15.3,0.428,0.428);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AArBsIAAhcIhUAAIAABcIgkAAIAAjYIAkAAIAABbIBUAAIAAhbIAjAAIAADYg");
	this.shape_24.setTransform(3.4,14.1,0.428,0.428);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAgkIAAgCQAAgkAWgYQAWgYAfAAQAhAAAVAXQAWAYAAAlIAAABQAAAlgWAXQgVAYghAAQggAAgWgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPARAAQATAAALgPQALgPAAgXIAAgCQAAgXgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_25.setTransform(52.2,45.1,0.45,0.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAYAAAOALQAOAMAAATQAAAagYALQAfAKAAAcQAAAWgQAMQgPAMgbAAgAgcA2IAdAAQAcABAAgXQAAgVgdAAIgcAAgAgcgNIAaAAQAZAAAAgUQAAgVgYAAIgbAAg");
	this.shape_26.setTransform(44.8,45,0.45,0.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_27.setTransform(37.9,45,0.45,0.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgqA+QgVgYAAgkIAAgCQAAglAVgYQAWgXAfAAQAfAAAVAVIgQAbQgRgRgSAAQgRAAgLAOQgLAPAAAXIAAACQgBAYAMAPQAMAOARAAQASAAASgQIAPAYQgWAXggAAQgfAAgVgXg");
	this.shape_28.setTransform(31.6,45.1,0.45,0.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AguA/QgXgXABgmIAAgCQgBglAUgYQAUgXAeAAQAgAAATAZQARAXAAAlIAAAMIhnAAQADAVAMALQAKALAQAAQAXAAARgRIARAWQgYAYgiAAQgfAAgVgWgAgWgrQgJAMgDAVIBFAAQgBgUgJgMQgJgNgPAAQgOAAgJAMg");
	this.shape_29.setTransform(24.4,45.1,0.45,0.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAcBSIAAg+QgUALgVAAQgWAAgNgMQgOgNAAgYIAAg/IAjAAIAAA3QAAANAHAHQAGAHALAAQARAAAOgJIAAhJIAjAAIAACjg");
	this.shape_30.setTransform(17,45,0.45,0.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgxBIQgPgOgBgXIAAgCQAAgaARgNQAPgNAcAAQASAAATAHIAAgHQAAgigkAAQgRAAgYAKIgHgdQAagMAaAAQAhAAAQARQAQAQAAAfIAABlIghAAIAAgUQgSAYgcAAQgVAAgOgNgAgWALQgIAHAAANIAAACQAAAMAIAHQAHAGAMAAQAPAAAJgJQALgIAAgOIAAgRQgNgGgSAAQgOAAgJAHg");
	this.shape_31.setTransform(9.6,45.1,0.45,0.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_32.setTransform(3.1,45,0.45,0.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAgkIAAgCQAAgkAWgYQAWgYAfAAQAhAAAVAXQAWAYAAAlIAAABQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPARAAQASAAAMgPQALgPAAgXIAAgCQAAgXgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_33.setTransform(53.8,30.3,0.45,0.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhABSIAAijIBFAAQAXAAAOALQAPALABAVQgBAZgYALQAgAKAAAcQAAAXgRAMQgPALgbAAgAgcA2IAdAAQAcABAAgXQAAgVgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgUgXABIgcAAg");
	this.shape_34.setTransform(46.4,30.3,0.45,0.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIguAAIAAgeIB8AAIAAAeIgsAAIAACFg");
	this.shape_35.setTransform(39.5,30.3,0.45,0.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgqA+QgVgYAAgkIAAgCQAAglAWgYQAVgXAfAAQAeAAAWAVIgQAbQgRgRgSAAQgRAAgLAOQgMAPAAAXIAAACQAAAYAMAPQALAOASAAQASAAASgQIAPAYQgXAXgfAAQgfAAgVgXg");
	this.shape_36.setTransform(33.2,30.3,0.45,0.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgvA/QgVgXAAgmIAAgCQgBglAUgYQAVgXAdAAQAhAAASAZQARAXAAAlIAAAMIhmAAQACAVAMALQALALAQAAQAWAAARgRIARAWQgYAYgiAAQggAAgVgWgAgWgrQgKAMgBAVIBEAAQgBgUgJgMQgJgNgPAAQgNAAgKAMg");
	this.shape_37.setTransform(26,30.3,0.45,0.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAcBSIAAg+QgUALgVAAQgWAAgNgMQgOgNAAgYIAAg/IAjAAIAAA2QAAANAGAJQAHAGAKAAQARAAAPgJIAAhJIAjAAIAACjg");
	this.shape_38.setTransform(18.6,30.3,0.45,0.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgxBIQgQgOAAgXIAAgCQAAgaARgNQAPgNAbAAQATAAASAHIAAgHQAAgigjAAQgSAAgXAKIgHgdQAagMAbAAQAgAAAQARQARAQAAAfIAABlIgjAAIAAgUQgRAYgcAAQgVAAgOgNgAgWALQgIAHAAANIAAACQAAAMAHAHQAIAGAMAAQAOAAAKgJQALgIAAgOIAAgRQgOgGgRAAQgOAAgJAHg");
	this.shape_39.setTransform(11.3,30.3,0.45,0.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAoBtIg7hfIgbAgIAAA/IgkAAIAAjZIAkAAIAABrIBShrIAsAAIhMBeIBPB7g");
	this.shape_40.setTransform(3.9,29.1,0.45,0.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgqARIAAghIBVAAIAAAhg");
	this.shape_41.setTransform(114.2,29.7,0.45,0.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAhBSIAAhqIhBBqIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_42.setTransform(104,30.3,0.45,0.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAcBSIgohEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_43.setTransform(96.9,30.3,0.45,0.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhJBrIAAjSIAjAAIAAAbQAUgeAcAAQAbAAARAUQAUAXAAAoIAAAEQAAAmgUAXQgRAVgbAAQgbAAgVgcIAABIgAgbg8QgLAOAAAXIAAAEQAAAWALAPQAMAOAPABQAQgBAMgOQALgOAAgXIAAgEQAAgXgLgPQgMgOgQAAQgPAAgMAPg");
	this.shape_44.setTransform(88.9,31.3,0.45,0.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAgkIAAgCQAAgkAWgYQAVgYAhAAQAgAAAWAXQAVAYAAAlIAAABQAAAlgVAXQgWAYghAAQgfAAgXgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPASAAQASAAALgPQALgPAAgXIAAgCQAAgXgLgPQgMgPgSAAQgRAAgMAPg");
	this.shape_45.setTransform(80.7,30.3,0.45,0.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag1BaQgUgYAAgrIAAgEQAAgwAIgYQANghAigIIBOgSIAGAdIhLASQgkAIgBAkQAGgLAMgIQAPgJATAAQAcAAAUAWQAUAXAAAiIAAABQAAAkgUAXQgUAXgiAAQgiAAgTgXgAgbgGQgLANAAAXIAAACQAAAWALAPQALAOAQAAQASAAALgOQAKgPAAgWIAAgCQAAgWgLgOQgLgOgRAAQgQAAgLAOg");
	this.shape_46.setTransform(72.8,29.1,0.45,0.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhCBhIAKgaQAKAFALAAQAOAAAHgSIg7ijIAlAAIAlB5IAlh5IAkAAIg5CmQgIAZgLAKQgLAKgTAAQgSAAgQgJg");
	this.shape_47.setTransform(65.1,31.4,0.45,0.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_48.setTransform(81.9,62.8,0.45,0.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAgBSIAAhrIhABrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_49.setTransform(76.3,60,0.45,0.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAeBSIAAhEIg8AAIAABEIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAkAAIAACjg");
	this.shape_50.setTransform(68.5,60,0.45,0.45);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag6BCIAMgbQAVAPATAAQAfAAAAgVQAAgMgJgFQgIgFgWAAIgHAAIAAgYIAHAAQASAAAIgFQAJgFABgNQAAgSgZAAQgYAAgPANIgMgZQAWgSAhAAQAZAAAPAMQAPAMAAATQAAAbgZALQAcAJAAAeQAAAVgQAOQgRAOgaAAQgkAAgWgTg");
	this.shape_51.setTransform(61.4,60.1,0.45,0.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAhBSIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_52.setTransform(54.5,60,0.45,0.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("ABNBSIgphIIgTAbIAAAtIghAAIAAgtIgUgbIgpBIIgmAAIA3hcIg1hHIAoAAIA5BPIAAhPIAhAAIAABPIA5hPIAoAAIg1BHIA3Bcg");
	this.shape_53.setTransform(45.3,60,0.45,0.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAhBxIAAhrIhBBrIghAAIAAijIAiAAIAABqIBAhqIAiAAIAACjgAgbhOQgNgMgCgTIAWgDQAFAUAQAAQASAAAFgUIAVADQgCAUgMALQgMAKgSAAQgQAAgMgKg");
	this.shape_54.setTransform(32.4,58.6,0.45,0.45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgvA/QgWgXAAgmIAAgCQAAglAUgYQAUgXAeAAQAhAAASAZQASAXAAAlIgBAMIhmAAQACAVAMALQALALAPAAQAWAAASgRIAQAWQgXAYgiAAQgfAAgWgWgAgWgrQgKAMgCAVIBFAAQgBgUgJgMQgJgNgPAAQgNAAgKAMg");
	this.shape_55.setTransform(24.8,60.1,0.45,0.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAgkIAAgCQAAgkAWgYQAWgYAfAAQAhAAAVAXQAWAYAAAlIAAABQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPARAAQASAAAMgPQALgPAAgXIAAgCQAAgXgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_56.setTransform(17.1,60.1,0.45,0.45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAXAAAPALQAPAMAAATQgBAagYALQAfAKABAcQgBAWgPAMQgQAMgbAAgAgcA2IAdAAQAbABAAgXQAAgVgcAAIgcAAgAgcgNIAaAAQAZAAAAgUQAAgVgYAAIgbAAg");
	this.shape_57.setTransform(9.7,60,0.45,0.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIguAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_58.setTransform(2.8,60,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt6, new cjs.Rectangle(0,-5.7,116.1,69.7), null);


(lib.txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAbQAbgEgDgYIgPAAIAAgpIAoAAIAAAjQAAAsgtAGg");
	this.shape.setTransform(79.7,10.5,0.45,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBxIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjgAgbhOQgMgLgDgUIAVgDQAFAUARAAQASAAAFgUIAVADQgCAUgMALQgMAKgSAAQgRAAgLgKg");
	this.shape_1.setTransform(74.3,5.1,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA2BSIAAijIAjAAIAACjgAhYBSIAAijIAjAAIAAA6IAbAAQAbAAARAMQARANAAAaQAAAbgRAOQgQANgbAAgAg1A2IAbAAQANAAAGgHQAHgGAAgMQAAgZgagBIgbAAg");
	this.shape_2.setTransform(65.5,6.5,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfBSIAAhEIg9AAIAABEIgjAAIAAijIAjAAIAABDIA9AAIAAhDIAjAAIAACjg");
	this.shape_3.setTransform(56.7,6.5,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9BSIAAijIAjAAIAAA6IAaAAQAcAAARAMQARANAAAaQAAAbgRAOQgPANgdAAgAgaA2IAaAAQANAAAGgHQAIgGAAgMQAAgZgbgBIgaAAg");
	this.shape_4.setTransform(49.7,6.5,0.45,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKBRIACgdIAJABQAPAAAFgWQAIgcAAhVIBuAAIAACjIgjAAIAAiFIgqAAQAABSgOAdQgKAYgcAAIgUgCg");
	this.shape_5.setTransform(41.7,6.5,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBIQgPgOAAgXIAAgCQgBgaARgNQAPgNAcAAQASAAASAHIAAgHQAAgigjAAQgTAAgWAKIgHgdQAagMAaAAQAhAAAQARQAQAQABAfIAABlIgjAAIAAgUQgSAYgbAAQgVAAgOgNgAgVALQgJAHAAANIAAACQAAAMAIAHQAGAGANAAQAOAAAKgJQALgIAAgOIAAgRQgOgGgSAAQgOAAgHAHg");
	this.shape_6.setTransform(34.5,6.5,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIApAAIg3BFIA6Beg");
	this.shape_7.setTransform(28,6.5,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBSIAAhqIhBBqIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_8.setTransform(20.1,6.5,0.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfBSIAAhEIg9AAIAABEIgjAAIAAijIAjAAIAABDIA9AAIAAhDIAjAAIAACjg");
	this.shape_9.setTransform(12.3,6.5,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhLBmIALgcQAKAEALAAQAQAAANgXIhMikIAoAAIA2B6IAxh6IAmAAIhICqQgLAagNALQgOAMgVAAQgRAAgSgIg");
	this.shape_10.setTransform(4.1,5.4,0.45,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA2BSIAAijIAjAAIAACjgAhYBSIAAijIAjAAIAAA6IAcAAQAbAAAQAMQARANAAAaQABAbgSAOQgPANgbAAgAg1A2IAbAAQANAAAHgHQAGgGAAgMQAAgMgGgHQgHgGgNgBIgbAAg");
	this.shape_11.setTransform(46.7,23.1,0.45,0.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIguAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_12.setTransform(38.7,23.1,0.45,0.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAgBSIAAhqIhABqIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_13.setTransform(28.2,23.1,0.45,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdBSIgohEIgWAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_14.setTransform(17.4,23.1,0.45,0.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxBIQgQgOAAgXIAAgCQAAgaARgNQAQgNAbAAQATAAARAHIAAgHQAAgigjAAQgRAAgYAKIgHgdQAZgMAcAAQAfAAARARQARAQAAAfIAABlIgjAAIAAgUQgRAYgbAAQgWAAgOgNgAgeAfIAAACQAAAMAIAHQAHAGAMAAQAOAAALgJQAKgIgBgOIAAgRQgNgGgRAAQgfAAAAAbg");
	this.shape_15.setTransform(9.6,23.1,0.45,0.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_16.setTransform(3.1,23.1,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt4, new cjs.Rectangle(0,0,80.8,27), null);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBxIAAhsIhBBsIghAAIAAijIAiAAIAABqIBAhqIAiAAIAACjgAgchOQgMgMgCgTIAVgEQAGAVAQAAQATAAAEgVIAVAEQgCATgMAMQgMAKgSAAQgQAAgNgKg");
	this.shape.setTransform(65.5,21.9,0.45,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAVgYAhAAQAgAAAWAXQAVAYAAAkIAAACQAAAkgVAYQgWAYghAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPASAAQARAAAMgPQALgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_1.setTransform(57.6,23.3,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBSIAAhDIg9AAIAABDIgjAAIAAijIAjAAIAABDIA9AAIAAhDIAjAAIAACjg");
	this.shape_2.setTransform(49.7,23.3,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxBkIAAgkIhiAAIgDAkIgdAAIAAhCIAPAAQAQgkAAhLIAAgWIBxAAIAACFIATAAIgDBCgAgfAiIA7AAIAAhnIgsAAQgBBHgOAgg");
	this.shape_3.setTransform(41.9,24.1,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAVgYAhAAQAgAAAWAXQAVAYAAAkIAAACQAAAkgVAYQgXAYggAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQAMAPARAAQARAAAMgPQALgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgSAAgLAPg");
	this.shape_4.setTransform(34.1,23.3,0.45,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAXAAAPALQAOALAAAUQAAAagYALQAfAKAAAcQAAAWgQANQgPALgbAAgAgcA2IAdAAQAcAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgUgYAAIgbAAg");
	this.shape_5.setTransform(26.7,23.3,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAWgYAgAAQAhAAAVAXQAWAYAAAkIAAACQAAAkgWAYQgVAYghAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPARAAQATAAAKgPQAMgOAAgXIAAgCQAAgYgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_6.setTransform(18.9,23.3,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhJBrIAAjSIAjAAIAAAbQATgeAcAAQAbAAASAVQAUAXAAAnIAAAEQAAAngUAWQgSAVgbAAQgbAAgUgcIAABIgAgbg8QgLAOAAAXIAAAEQAAAWALAPQALAOAQAAQAQAAALgOQAMgOAAgXIAAgEQAAgXgMgPQgLgOgQAAQgPAAgMAPg");
	this.shape_7.setTransform(11,24.3,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeBSIAAiFIg7AAIAACFIgjAAIAAijICBAAIAACjg");
	this.shape_8.setTransform(2.9,23.3,0.45,0.45);

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

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,106.3,29.1), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhByIAAhtIhBBtIghAAIAAikIAiAAIAABrIBAhrIAiAAIAACkgAgbhPQgMgKgDgUIAWgDQAEAUARAAQATAAAEgUIAVADQgCAUgMAKQgLALgTAAQgRAAgLgLg");
	this.shape.setTransform(93.8,21.8,0.45,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2BSIAAijIAjAAIAACjgAhYBSIAAijIAjAAIAAA6IAcAAQAbAAAQAMQARANAAAaQABAbgSAOQgQANgaAAgAg1A2IAbAAQANAAAHgHQAHgHgBgLQAAgagaAAIgbAAg");
	this.shape_1.setTransform(85,23.2,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBSIAAhDIg8AAIAABDIgkAAIAAijIAkAAIAABDIA8AAIAAhDIAjAAIAACjg");
	this.shape_2.setTransform(76.2,23.2,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeBSIAAhDIg8AAIAABDIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAjAAIAACjg");
	this.shape_3.setTransform(68.5,23.2,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA/QgWgYAAgmIAAgBQAAglAUgYQAUgXAeAAQAhAAASAYQASAYAAAlIgBAMIhmAAQACAVAMALQALAKAPAAQAWAAASgRIAQAWQgXAZgiAAQggAAgVgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgOAAgJAMg");
	this.shape_4.setTransform(61,23.3,0.45,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJBrIAAjSIAjAAIAAAbQATgeAcAAQAbAAASAVQAUAXAAAnIAAAEQAAAngUAWQgSAWgbgBQgbAAgUgcIAABIgAgbg9QgLAPAAAYIAAADQAAAWALAPQALAOAQABQAQgBALgOQAMgOAAgXIAAgDQAAgYgMgPQgLgOgQAAQgPAAgMAOg");
	this.shape_5.setTransform(53.3,24.2,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBDAAQAYAAAOALQAPALAAAUQAAAagYALQAfAKAAAcQAAAWgQANQgPALgbAAgAgcA2IAcAAQAdAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgUgYAAIgbAAg");
	this.shape_6.setTransform(45.7,23.2,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBZQgWgXABgmIAAgDQgBgjAVgYQAUgYAdAAQAgAAATAZQASAXAAAlIAAANIhnAAQACAUAMALQALALAPAAQAXAAARgRIAQAWQgXAZgiAAQgfAAgWgXgAgWgRQgJAMgDAUIBFAAQAAgTgKgMQgJgNgPAAQgNAAgKAMgAALhMIAAgjIAjAAIAAAjgAgthMIAAgjIAjAAIAAAjg");
	this.shape_7.setTransform(38.1,22.1,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfBSIAAhDIg8AAIAABDIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAiAAIAACjg");
	this.shape_8.setTransform(30.6,23.2,0.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBIQgOgOAAgXIAAgCQAAgaAQgNQAQgNAaAAQATAAASAHIAAgHQAAgigjAAQgTAAgWAKIgHgdQAagMAbAAQAgAAAQARQAQAQAAAgIAABlIgiAAIAAgUQgRAXgcAAQgVAAgPgNgAgWALQgJAIAAAMIAAACQAAAMAIAHQAHAGAMAAQAPAAAKgJQAKgIAAgOIAAgRQgNgGgRAAQgPAAgIAHg");
	this.shape_9.setTransform(23,23.3,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBSIAAhsIgrBHIAAAAIgrhHIAABsIgiAAIAAijIAjAAIAqBJIArhJIAjAAIAACjg");
	this.shape_10.setTransform(15.1,23.2,0.45,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgBSIAAhrIhABrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_11.setTransform(3.2,23.2,0.45,0.45);

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

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,96.8,29.1), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgUIAAAAQAAgSALgNQALgMAPAAQASAAAJALIgIAOQgJgJgJAAQgIAAgGAIQgGAHAAAMIAAAAQAAAMAGAIQAGAHAJAAQAIABAKgJIAIANQgMAMgQAAQgPAAgLgMg");
	this.shape.setTransform(52.6,6.3,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgUIAAAAQAAgSALgMQALgNAQAAQARAAALAMQALANAAASIAAAAQAAAUgLAMQgLAMgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAAAQAAANAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgMgGgHQgGgJgJABQgIgBgGAJg");
	this.shape_1.setTransform(44.9,6.3,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgUIAAAAQAAgSALgNQALgMAQAAQARAAAKALIgIAOQgKgJgJAAQgHAAgHAIQgFAHAAAMIAAAAQAAAMAFAIQAHAHAIAAQAJABAJgJIAIANQgLAMgQAAQgQAAgLgMg");
	this.shape_2.setTransform(37.5,6.3,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgVIAAAAQAAgSAKgNQALgMAOAAQARAAAKANQAJALAAATIAAAHIg1AAQAEAWARgBQALAAAKgIIAIALQgMANgSAAQgQAAgLgLgAgKgWQgGAGgBALIAjAAQgBgXgRAAQgGAAgEAGg");
	this.shape_3.setTransform(30.1,6.3,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgPAAgrIA5AAIAABUIgTAAIAAhEIgVAAQAAAqgGAPQgGAMgPAAg");
	this.shape_4.setTransform(21.9,6.3,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAeIAOAAQAgAAAAAZQgBAcgeAAgAgbAcIAOAAQANAAAAgNQAAgNgNAAIgOAAg");
	this.shape_5.setTransform(13.4,6.3,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWA4IAAheIgqAAIAABeIgTAAIAAhvIBPAAIAABvg");
	this.shape_6.setTransform(3.6,5,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpBTIAAijIAjAAIAAAhQAOgkAiABIAAAmIgCAAQgVAAgNAOQgMAPAAAaIAABIg");
	this.shape_7.setTransform(101.9,6.2,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguA/QgXgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAgAAATAYQASAYAAAlIgBAMIhnAAQADAVAMALQALAKAPAAQAXAAARgRIAQAWQgXAZgiAAQggAAgUgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_8.setTransform(95.4,6.3,0.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBTIg6ilIAlAAIAkB3IAmh3IAkAAIg6Clg");
	this.shape_9.setTransform(88.4,6.3,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAWgYAgAAQAhAAAVAXQAWAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXALAPQANAPAQAAQASAAAMgPQALgOAAgXIAAgCQAAgXgLgQQgMgPgSAAQgSAAgLAPg");
	this.shape_10.setTransform(81.1,6.3,0.45,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAgkAWgYQAWgYAgAAQAgAAAWAXQAVAYAAAkIAAACQAAAlgVAXQgXAYggAAQggAAgVgXgAgdgnQgKAPgBAXIAAACQAAAXAMAPQALAPASAAQASAAALgPQALgOAAgXIAAgCQAAgYgLgPQgMgPgSAAQgRAAgMAPg");
	this.shape_11.setTransform(73.1,6.3,0.45,0.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AArBsIAAhcIhUAAIAABcIgkAAIAAjYIAkAAIAABbIBUAAIAAhbIAjAAIAADYg");
	this.shape_12.setTransform(64.5,5.1,0.45,0.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAwIAFglIgdAWIgLgSIAigPIgigNIALgTIAdAWIgFglIAVAAIgFAlIAdgWIALATIghANIAhAPIgLASIgdgWIAFAlg");
	this.shape_13.setTransform(48.4,19.5,0.45,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_14.setTransform(42,22.2,0.45,0.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_15.setTransform(34,22.2,0.45,0.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmBsIgthMIgLAAIgZAAIAABMIgkAAIAAjYIBOAAQAiAAAUASQAVATAAAhQAAAvgtAPIAzBUgAgrAAIApAAQARAAALgJQAMgKAAgTQAAglgpAAIgoAAg");
	this.shape_16.setTransform(25.8,22.2,0.45,0.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhDBsIAAjYICHAAIAAAhIhjAAIAAA+IBYAAIAAAfIhYAAIAABag");
	this.shape_17.setTransform(17.5,22.2,0.45,0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgqARIAAghIBVAAIAAAhg");
	this.shape_18.setTransform(10.8,22.8,0.45,0.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAqBsIAAhcIhUAAIAABcIgjAAIAAjYIAjAAIAABbIBUAAIAAhbIAkAAIAADYg");
	this.shape_19.setTransform(3.5,22.2,0.45,0.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXAcQAagGgCgXIgPAAIAAgpIAmAAIAAAjQAAAXgLANQgLAMgWACg");
	this.shape_20.setTransform(91,27,0.45,0.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRBSIAAiFIgtAAIAAgeIB9AAIAAAeIgtAAIAACFg");
	this.shape_21.setTransform(87.1,23.2,0.45,0.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AguA/QgXgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAgAAATAYQASAYAAAlIAAAMIhnAAQACAVAMALQALAKAPAAQAXAAARgRIAQAWQgXAZgiAAQggAAgUgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_22.setTransform(80.5,23.3,0.45,0.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgyBIQgPgPAAgWIAAgCQAAgaARgNQAPgNAbAAQATAAASAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAcAAQBCABAAA/IAABmIgjAAIAAgUQgRAWgcAAQgVABgPgNgAgWALQgIAIAAAMIAAACQAAAMAHAHQAIAGAMAAQAOABAKgKQAKgIAAgOIAAgRQgNgGgRAAQgOAAgJAHg");
	this.shape_23.setTransform(73.1,23.3,0.45,0.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAfBSIAAhDIg8AAIAABDIgkAAIAAijIAkAAIAABDIA8AAIAAhDIAjAAIAACjg");
	this.shape_24.setTransform(65.8,23.2,0.45,0.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag6BCIAMgcQAVAQATAAQANAAAJgFQAKgGgBgKQAAgNgIgEQgIgFgWAAIgIAAIAAgZIAIAAQASAAAIgEQAJgFAAgOQAAgSgZAAQgWAAgRAOIgMgZQAWgSAhAAQAZAAAQAMQAPAMAAATQAAAagaAMQAcAIABAfQAAAVgRAOQgQAOgbAAQgjAAgXgTg");
	this.shape_25.setTransform(58.7,23.3,0.45,0.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAhBSIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_26.setTransform(86.4,56.7,0.45,0.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAeBSIAAhDIg8AAIAABDIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAkAAIAACjg");
	this.shape_27.setTransform(78.7,56.7,0.45,0.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag7BCIANgcQAWAQASAAQANAAAIgFQAKgGAAgKQAAgNgIgEQgJgFgWAAIgHAAIAAgZIAHAAQASAAAIgEQAKgFgBgOQAAgSgZAAQgVAAgRAOIgMgZQAWgSAiAAQAYAAAPAMQAPAMAAATQABAagaAMQAcAIAAAfQAAAVgQAOQgQAOgbAAQgjAAgYgTg");
	this.shape_28.setTransform(71.5,56.7,0.45,0.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAhBSIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_29.setTransform(64.6,56.7,0.45,0.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABNBSIgphIIgTAbIAAAtIghAAIAAgtIgUgbIgoBIIgnAAIA3hcIg1hHIAoAAIA5BPIAAhPIAhAAIAABPIA5hPIAoAAIg1BHIA3Bcg");
	this.shape_30.setTransform(55.4,56.7,0.45,0.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAhBxIAAhsIhBBsIghAAIAAijIAiAAIAABrIBAhrIAiAAIAACjgAgbhOQgMgLgDgUIAWgDQAEAUARAAQASAAAGgUIAUADQgCAUgMALQgLAKgTAAQgRAAgLgKg");
	this.shape_31.setTransform(42.6,55.3,0.45,0.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgvA/QgWgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAhAAASAYQASAYAAAlIgBAMIhmAAQACAVAMALQALAKAPAAQAWAAASgRIAQAWQgXAZgiAAQgfAAgWgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_32.setTransform(35,56.7,0.45,0.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAVgYAgAAQAhAAAWAXQAVAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPARAAQASAAALgPQAMgOAAgXIAAgCQAAgXgMgQQgMgPgRAAQgRAAgMAPg");
	this.shape_33.setTransform(27.3,56.7,0.45,0.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBDAAQAYAAAOALQAPALAAAUQAAAagYALQAfALAAAbQAAAWgQANQgPALgbAAgAgcA2IAcAAQAdAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgTgYAAIgbAAg");
	this.shape_34.setTransform(19.8,56.7,0.45,0.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB7AAIAAAeIgtAAIAACFg");
	this.shape_35.setTransform(13,56.7,0.45,0.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_36.setTransform(3.1,56.7,0.45,0.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAhBSIAAg4IgbAAIgfA4IgqAAIAog/QghgMAAgiQAAg2A8AAIBEAAIAACjgAgSguQgIAGAAAOQAAAMAIAHQAIAHAMAAIAfAAIAAg1IgaAAQgSAAgHAHg");
	this.shape_37.setTransform(121.7,40,0.45,0.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgqA+QgVgYAAglIAAgBQAAglAVgYQAVgXAgAAQAfAAAVAVIgQAaQgSgQgSAAQgQAAgLAOQgLAPAAAXIAAACQAAAYALAPQALAOASAAQASAAARgRIAQAZQgLALgLAGQgNAGgTAAQgfAAgVgXg");
	this.shape_38.setTransform(115.1,40,0.45,0.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag9BSIAAijIAjAAIAAA6IAbAAQAcAAAQAMQARANAAAaQAAAbgRAOQgQANgcAAgAgaA2IAaAAQAMAAAIgHQAHgHAAgLQAAgZgbAAIgaAAg");
	this.shape_39.setTransform(108.4,40,0.45,0.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_40.setTransform(101.7,40,0.45,0.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgxBIQgPgPgBgWIAAgCQAAgaARgNQAQgNAaAAQAUAAARAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAcAAQAhAAAQARQAQAQABAfIAABmIgjAAIAAgUQgQAWgcAAQgWABgOgNgAgeAfIAAACQAAAMAIAHQAHAGAMAAQAOABALgKQAJgIABgOIAAgRQgOgGgRAAQgfAAAAAbg");
	this.shape_41.setTransform(94.9,40,0.45,0.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAXAAAPALQAOALAAAUQAAAagYALQAfAKAAAcQAAAWgQANQgPALgbAAgAgcA2IAdAAQAcAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgTgYAAIgbAAg");
	this.shape_42.setTransform(88,40,0.45,0.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAXgYAfAAQAhAAAWAXQAVAYAAAkIAAACQAAAlgVAXQgWAYghAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXALAPQANAPAQAAQASAAAMgPQALgOAAgXIAAgCQAAgYgLgPQgMgPgSAAQgSAAgLAPg");
	this.shape_43.setTransform(80.2,40,0.45,0.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhJBrIAAjSIAjAAIAAAaQATgdAcAAQAbAAASAVQAUAXAAAnIAAAEQAAAngUAWQgSAVgbAAQgbAAgUgcIAABIgAgbg9QgLAPAAAYIAAADQAAAWALAPQALAOAQAAQAQAAALgOQAMgOAAgXIAAgDQAAgYgMgPQgLgOgQAAQgQAAgLAOg");
	this.shape_44.setTransform(72.3,41,0.45,0.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAgBSIAAhrIhABrIghAAIAAijIAiAAIAABqIBAhqIAiAAIAACjg");
	this.shape_45.setTransform(64.2,40,0.45,0.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_46.setTransform(57.2,40,0.45,0.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAeBSIAAiFIg7AAIAACFIgjAAIAAijICBAAIAACjg");
	this.shape_47.setTransform(50.4,40,0.45,0.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgyBIQgPgPABgWIAAgCQAAgaAQgNQAPgNAbAAQAUAAARAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAcAAQAgAAARARQAQAQAAAfIAABmIgiAAIAAgUQgQAWgdAAQgVABgPgNgAgeAfIAAACQAAAMAHAHQAIAGAMAAQAPABAJgKQALgIAAgOIAAgRQgNgGgSAAQgfAAAAAbg");
	this.shape_48.setTransform(42.8,40,0.45,0.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAxBkIAAgkIhiAAIgCAkIgfAAIAAhCIAQAAQARgjAAhMIAAgWIBwAAIAACFIAUAAIgEBCgAgfAiIA7AAIAAhnIgsAAQAABHgPAgg");
	this.shape_49.setTransform(35.3,40.8,0.45,0.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgyBIQgOgPAAgWIAAgCQAAgaAQgNQAPgNAbAAQAUAAARAGIAAgGQAAgigjABQgUgBgVAKIgHgdQAYgMAdAAQAgAAAQARQAQAQAAAfIAABmIgiAAIAAgUQgRAWgcAAQgVABgPgNgAgWALQgIAHAAANIAAACQAAAMAHAHQAIAGAMAAQAOABAKgKQAKgIAAgOIAAgRQgNgGgRAAQgOAAgJAHg");
	this.shape_50.setTransform(27.7,40,0.45,0.45);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_51.setTransform(17.4,40,0.45,0.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgyBIQgPgPAAgWIAAgCQABgaAQgNQAPgNAcAAQATAAARAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAdAAQAfAAARARQAQAQAAAfIAABmIgiAAIAAgUQgQAWgdAAQgVABgPgNgAgeAfIAAACQAAAMAHAHQAIAGAMAAQAOABAKgKQALgIgBgOIAAgRQgNgGgRAAQgfAAAAAbg");
	this.shape_52.setTransform(9.6,40,0.45,0.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_53.setTransform(3.1,40,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,124.8,60.6), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(-120,-67.5,159,280), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-120,-67.5,160,222), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-120,-67.5,160,222), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-120,-67.5,160,222), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-120,-67.5,160,222), null);


(lib.hfree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E2E2E").s().p("AAIAVIAAgbIgQAbIgIAAIAAgpIAJAAIAAAaIAPgaIAJAAIAAApg");
	this.shape.setTransform(30.5,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E2E2E").s().p("AgSAcIAAg2IAJAAIAAAHQAFgIAGAAQAIAAAEAGQAFAGAAAKIAAABQAAAJgFAGQgEAFgIAAQgGAAgFgHIAAATgAgGgPQgDAEAAAGIAAABQAAAMAJAAQAKAAAAgMIAAgBQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1.setTransform(26,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E2E2E").s().p("AgDAiIAAgPQgDADgGAAQgHAAgDgFQgFgGAAgLQAAgUAPAAQAEAAAFAEIAAgRIAIAAIAAARQADgEAFAAQAHAAAEAGQAEAFAAAKIAAAAQAAAKgEAGQgEAFgHAAQgGAAgCgDIAAAPgAAFgIIAAAUQACACADAAQAIAAAAgNQAAgNgIAAQgDAAgCAEgAgSABQAAANAIAAQAEAAADgCIAAgUQgDgEgEAAQgIAAAAANg");
	this.shape_2.setTransform(20.5,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E2E2E").s().p("AAHAVIAAgQQgEADgGAAQgMAAAAgMIAAgQIAJAAIAAAOQAAAGAGAAQADAAAEgBIAAgTIAJAAIAAApg");
	this.shape_3.setTransform(13.1,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2E2E2E").s().p("AAJAdIAAgcIgQAcIgJAAIAAgpIAJAAIAAAaIAQgaIAIAAIAAApgAgKgbIAGgBQABAFADAAQAFAAABgFIAGABQgCAKgKAAQgJAAgBgKg");
	this.shape_4.setTransform(8.8,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2E2E2E").s().p("AgQAQIAFgGQAEAEAEAAQAJAAACgLIgOAAIAAgGIAOAAQgCgKgHAAQgGAAgEAEIgEgGQAFgGAIAAQAHAAAGAGQAFAGAAAJIAAAAQAAAKgFAGQgFAGgHAAQgJAAgGgGg");
	this.shape_5.setTransform(4.6,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2E2E2E").s().p("AgCAMIABgJIgHAGIgDgFIAJgEIgJgDIADgFIAHAGIgBgJIAFAAIgBAJIAHgGIADAFIgIADIAIAEIgDAFIgHgGIABAJg");
	this.shape_6.setTransform(1.2,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hfree, new cjs.Rectangle(0,0,32.2,7.1), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(146.3,61.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEAAgGQAAgGgDgDQgEgDgEAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(141.9,61.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(137.3,61.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIABANQAAAKgCAGQgDAGgDAEQgEADgHAAQgHAAgFgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(133,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_4.setTransform(128.6,61.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(124.1,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMAXQgGgHAAgPQAAgPAGgIQAGgGAIAAQAGAAAFAEQAEADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgFgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgCgDgGAAQgDAAgDADg");
	this.shape_6.setTransform(119.6,61.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(115.2,61.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAjAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(110.8,61.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(106.3,61.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(101.7,61.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAEgDQAEgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgBAGQgCAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(97.4,61.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(92.6,61.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(85.6,61.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABADACQADACABADQACAEAAAEQAAAHgFAEQgEAFgNAAIgNAAIAAAYgAgNAAIANAAQAIAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgIgBIgNAAg");
	this.shape_14.setTransform(80.2,61.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAdIAAg5IAkAAIAAAHIgcAAIAAAyg");
	this.shape_15.setTransform(75.5,61.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(69.9,61.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAYQgFgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgBACIgHgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_17.setTransform(62.4,61.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(57.6,61.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQAAgJADgGQACgHADgDQAFgDAFAAQAFAAADACQADABADAEIADAIIABANQAAAKgCAGQgCAGgDAEQgFADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(53.5,61.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQAEgEAAgEQAAgEgEgDQgCgDgGAAQgDAAgDADQgEADAAAGIgHgBQABgIAFgEQAEgFAIAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_20.setTransform(49,61.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(44.3,61.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgFgFg");
	this.shape_22.setTransform(40.2,61.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(35.5,61.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAEgDQAEgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(31.2,61.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_25.setTransform(26.8,61.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_26.setTransform(22.4,61.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_27.setTransform(15,61.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_28.setTransform(9.2,61.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgIAAIAAg5IAHAAIAAAtIAdgtIAIAAIAAA5g");
	this.shape_29.setTransform(3.5,61.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(104.6,55.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgNAYQgFgFAAgHQAAgGADgEQADgCAFgCQgEgBgDgDQgCgDAAgEQABgHAEgEQAEgEAHAAQAHAAAFAEQAEAEABAHQAAAEgCADQgDADgEABQAGACACADQADAEAAAFQAAAHgFAFQgFAFgJAAQgHAAgGgFgAgHAEQgEADABAFIABAGIAEAEIAFABQAFAAAEgDQADgDAAgFQAAgFgDgDQgEgEgFAAQgEAAgDAEgAgGgUQgCADAAADQAAAEACADQADADADAAQAEAAADgDQACgDABgDQgBgEgCgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(101.2,53.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(95.8,55.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_33.setTransform(92.2,54.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(86.6,56.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApgAgGgUQgDgDgBgEIAFAAIACADIADABIAFgBIACgDIAFAAQgBAEgCADQgEACgEABQgFgBgCgCg");
	this.shape_35.setTransform(83.4,53.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(79.8,54.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEABgEQAAgEgDgDQgEgDgEAAQgFAAgCADQgDADgBAGIgGgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAFAEAAAHIgBAHQgCADgDADQgDAEgIAGIgHAHIgDAEIAbAAIAAAHg");
	this.shape_37.setTransform(76.2,53.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApgAgHgUQgCgDgBgEIAEAAIADADIADABIAFgBIACgDIAFAAQAAAEgDADQgDACgFABQgEgBgEgCg");
	this.shape_38.setTransform(69.6,53.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_39.setTransform(65.2,54.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(61.4,54.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(57.5,54.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(53.2,54.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(48.8,54.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(43.4,54.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_45.setTransform(37.7,54.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_46.setTransform(33,53.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgKAJIAUAAIAAgdIgPAAQAAAUgFAJg");
	this.shape_47.setTransform(25.5,54.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAADgCQACgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQgBgCgEAAQgEAAgDAHIgHgBQADgMAMAAQAGAAAEAEQADAEAAAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(21.5,54.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgEAAQgEAAgEADg");
	this.shape_49.setTransform(17.4,54.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_50.setTransform(13,54.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAGAAAEADQADACACAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(8.7,54.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(3.5,53.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(150.9,48.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIAAANIACAFIgHAAQgBgCAAgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABAAAAQADACAEAAQADAAADgCQADgBABgDQACgDAAgEIAAgDIgLADg");
	this.shape_54.setTransform(147.6,46.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgHAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgDgCIgGgBIgIAAg");
	this.shape_55.setTransform(143.4,46.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(139.7,46.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(135.8,46.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_58.setTransform(131.4,46.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(125.9,45.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(119.3,48);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(117,46.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(111.9,48.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(108.6,45.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(103.9,45.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(99.6,45.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEAAgGQAAgGgEgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAFAFQAFAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_66.setTransform(95.3,45.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(90.5,45.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(86.1,45.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(79.7,46.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(76.5,48);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(73.5,45.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(69.9,48);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(65.9,45.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(61.9,48);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgDgFgBQgGAAgEAEQgFADgCAGQgBAFAAAFQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgDACgIIAHACQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_75.setTransform(57.9,45.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgIAAIAAg5IAHAAIAAAtIAegtIAHAAIAAA5g");
	this.shape_76.setTransform(49.9,45.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAUgAgGgZIgBAVQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(44.2,46.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_78.setTransform(38.7,45.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(33.1,45.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgCgCgFAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgEAAgBACIgFAHQgCAIgCABIgEADQAFABAFAJIAMATg");
	this.shape_80.setTransform(28.5,45.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(23.5,46.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(16.1,45.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(9.9,45.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(3.7,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(-1.4,39.2,157.9,28.7), null);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(338));

	// hfree
	this.instance = new lib.hfree();
	this.instance.parent = this;
	this.instance.setTransform(22.5,552.9,1,1,0,0,0,16.1,3.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7,cjs.Ease.get(1)).wait(59).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(190).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(59).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(3.5,527.2);

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(338));

	// logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("Ag6A6QgYgYAAgiQAAghAYgZQAYgYAiAAQAiAAAYAYQAZAYAAAiQAAAigZAYQgXAZgjAAQgiAAgYgZgAgxgyQgVAWAAAcQAAAdAVAVQAUAVAdAAQAeAAAUgVQAUgUABgeQAAgdgVgVQgVgUgdAAQgcAAgVAUgAAWAtIAAgCIAAgDIAAgHQAAgQgJgFQgGgDgLAAIgMAAIAAAkIgQAAIAAhaIAfAAQAQAAAIADQAOAGAAARQAAAMgJAGQgFACgIACQALABAFAIQAEAGAAAIIACASIAAABgAgQgBIAOAAQAJAAAFgCQAKgEAAgKQAAgKgHgEQgFgDgNAAIgNAAg");
	this.shape_1.setTransform(111.7,89.4,0.412,0.413);

	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(80.7,58.3,0.412,0.413,0,0,0,139.7,139.3);

	this.instance_2 = new lib.ClipGroup_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(91,59.5,0.412,0.413,0,0,0,55.1,52.6);

	this.instance_3 = new lib.ClipGroup_2_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(79.5,67.7,0.412,0.413,0,0,0,16.6,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkeKoQiEg4hnhmQhlhmg4iFQg7iJAAiWQAAiVA7iJQA4iEBlhnQBnhmCEg4QCJg6CVAAQCWAACJA6QCEA4BmBmQBmBnA5CEQA5CJAACVQAACWg5CJQg5CFhmBmQhmBmiEA4QiJA6iWAAQiVAAiJg6gAidA9IiVIqQCSBICgAAQEdAADIjJQDJjJAAkdQAAhlgdhggAqKDZQAnB1BNBgQBMBfBpA/ICIn8IiyA4Ig1DFIg7ASIA0jEgAoxmKQh9CxAADZQAABdAZBbIDZhFIDLr1QjGBKh6CugAi0qVIjML1ICyg4IB4nAIA8gSIh4G/IMZj7QhIjKiwh9QiyiBjdAAQhcAAhYAZg");
	this.shape_2.setTransform(80.1,58.4,0.412,0.413);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjhCiQgOgTAHglQAIgnAZgfQAagfAhgIQAigKAQASQAQASgIAnQgGAfgTAbQgSAbgZAPgAiUAmQgLADgJALQgNAPgFAZQgFAaAIAJQAGAHALgEQALgDAKgLQANgQAFgZQAEgZgIgJQgEgEgGAAIgHABgAk2CiQAKgPAEgVQAFgZgIgJQgGgHgLADQgLADgKAMQgNAPgEAZQgDANABAGIgtAAIABgGQAIgnAZgeQAagfAhgKQAhgKAQATQAQASgHAnQgGAbgNAXgAg/gcIAygOIAFBhIAAAAIAxh1IA0gQIhZDCIg1ASgABzhWIBlgfIgJAtIg1ATIgEAWIAtgSIgIAtIgtANIgFAWIA3gVIgMAzIhnAggAEHiEIBfgaQAWgHAMAJQANAJgEAYQgIAigaAQQAUACgFAiIgDATQgBANACAEIgyAMQgBgHACgRQACgRgBgFQgDgJgNADIgXADIgPBFIgzAOgAFIhvIgYAGIgHAjIAagIQAWgGAEgRQACgIgFgDQgCgBgEAAIgMACg");
	this.shape_3.setTransform(90.5,59.5,0.412,0.413);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhyAVQgPgRAFgjIAtAAQAAANAIAFQAFADAJgCQANgEALgPIAoAAQgbAugtAOQgLADgKAAQgRAAgLgLgAAzgfIBLAAQgLAHgNADQgMAEgJAAQgTAAgLgOg");
	this.shape_4.setTransform(79,67.5,0.412,0.413);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#76231F").s().p("AkeKoQiEg4hmhnQhnhmg4iEQg5iJAAiWQAAiVA5iJQA4iEBnhnQBlhlCFg4QCJg7CVAAQCWAACJA7QCEA4BnBlQBlBnA4CEQA6CJABCVQgBCWg6CJQg4CEhlBmQhnBniEA4QiJA5iWAAQiVAAiJg5gAidA9IiUIpQCOBJCjgBQEcAADKjJQDIjJAAkcQAAhmgchggAqLDZQAoB0BMBhQBNBfBoBAICJn+IixA5Ig1DFIg8ARIA0jDgAoxmKQh9CyAADYQAABeAZBaIDZhFIDLr1QjFBLh7CtgAi0qVIjLL1ICxg4IB4nAIA8gSIh4G/IMZj7QhIjKiwh+QiyiAjdAAQhcAAhYAZg");
	this.shape_5.setTransform(80.9,59,0.412,0.413);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#76231F").s().p("AjhCiQgOgTAHglQAIgnAZgeQAaggAigIQAhgKAQASQAQASgIAnQgGAggSAaQgTAbgZAPgAiUAmQgLADgJAMQgNAPgFAZQgFAZAIAJQAGAHALgEQAMgDAJgLQANgPAFgZQAEgagIgJQgEgEgGAAIgHABgAk2CiQAKgOAEgWQAFgZgIgJQgGgHgLADQgLAEgKALQgNAPgEAZQgCAKAAAJIgtAAIABgGQAIgnAZgeQAagfAhgKQAigJAQASQAPATgHAnQgFAagOAXgAg/gcIAygOIAFBhIAAAAIAxh1IA0gQIhZDCIg1ASgAB0hWIBkgeIgJAsIg1ATIgEAWIAtgRIgIAsIgtANIgFAWIA3gUIgMAzIhnAfgAEHiEIBfgaQAXgGAMAIQAMAJgEAYQgIAigaAQQATADgEAhQgFAeADAGIgyANQgBgJACgQQACgRgBgFQgDgJgNAEIgXACIgOBFIg0APgAFIhvIgYAGIgHAjIAagHQAWgGAEgSQACgIgFgDQgCgBgEAAIgMACg");
	this.shape_6.setTransform(91.3,60.1,0.412,0.413);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#76231F").s().p("AhyAVQgPgRAFgjIAtAAQABAZAVgGQANgEALgPIAoAAQgcAvgsANQgLADgKAAQgRAAgLgLgAAzgfIBLAAQgLAHgNADQgMAEgJAAQgTAAgLgOg");
	this.shape_7.setTransform(79.8,68.1,0.412,0.413);

	this.instance_4 = new lib.ClipGroup_3_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80.1,58,0.412,0.413,0,0,0,158.8,158.6);

	this.instance_5 = new lib.ClipGroup_4_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80,58,0.412,0.413,0,0,0,161.8,161.6);

	this.instance_6 = new lib.ClipGroup_5_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80.1,58,0.412,0.413,0,0,0,169.5,169.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_1}]}).wait(338));

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_264 = new cjs.Graphics().p("AmQPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_265 = new cjs.Graphics().p("ArPPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_266 = new cjs.Graphics().p("AvcPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_267 = new cjs.Graphics().p("Ay4PpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_268 = new cjs.Graphics().p("A1kPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_269 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_270 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_271 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_graphics_330 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_graphics_331 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_332 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_333 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_334 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_graphics_335 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_336 = new cjs.Graphics().p("A3FPpIC+qoMAqMAAAIi+Kog");
	var mask_graphics_337 = new cjs.Graphics().p("A3hPpIC+qoMAqMAAAIi+Kog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(264).to({graphics:mask_graphics_264,x:249,y:100.1}).wait(1).to({graphics:mask_graphics_265,x:217.1,y:100.1}).wait(1).to({graphics:mask_graphics_266,x:190.2,y:100.1}).wait(1).to({graphics:mask_graphics_267,x:168.2,y:100.1}).wait(1).to({graphics:mask_graphics_268,x:151,y:100.1}).wait(1).to({graphics:mask_graphics_269,x:133,y:100.1}).wait(1).to({graphics:mask_graphics_270,x:118.3,y:100.1}).wait(1).to({graphics:mask_graphics_271,x:113.4,y:100.1}).wait(59).to({graphics:mask_graphics_330,x:113.4,y:100.1}).wait(1).to({graphics:mask_graphics_331,x:41.8,y:100.1}).wait(1).to({graphics:mask_graphics_332,x:-18.8,y:100.1}).wait(1).to({graphics:mask_graphics_333,x:-68.4,y:100.1}).wait(1).to({graphics:mask_graphics_334,x:-107,y:100.1}).wait(1).to({graphics:mask_graphics_335,x:-134.6,y:100.1}).wait(1).to({graphics:mask_graphics_336,x:-147.8,y:100.1}).wait(1).to({graphics:mask_graphics_337,x:-150.6,y:100.1}).wait(1));

	// txt6
	this.instance_7 = new lib.txt6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(81.4,158.9,1,1,0,0,0,71.4,21.8);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(264).to({_off:false},0).wait(74));

	// mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_198 = new cjs.Graphics().p("AmQPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_199 = new cjs.Graphics().p("ArPPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_200 = new cjs.Graphics().p("AvcPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_201 = new cjs.Graphics().p("Ay4PpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_202 = new cjs.Graphics().p("A1kPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_203 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_204 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_205 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_1_graphics_264 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_1_graphics_265 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_266 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_267 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_268 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_1_graphics_269 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_270 = new cjs.Graphics().p("A3FPpIC+qoMAqMAAAIi+Kog");
	var mask_1_graphics_271 = new cjs.Graphics().p("A3hPpIC+qoMAqMAAAIi+Kog");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(198).to({graphics:mask_1_graphics_198,x:249,y:100.1}).wait(1).to({graphics:mask_1_graphics_199,x:217.1,y:100.1}).wait(1).to({graphics:mask_1_graphics_200,x:190.2,y:100.1}).wait(1).to({graphics:mask_1_graphics_201,x:168.2,y:100.1}).wait(1).to({graphics:mask_1_graphics_202,x:151,y:100.1}).wait(1).to({graphics:mask_1_graphics_203,x:133,y:100.1}).wait(1).to({graphics:mask_1_graphics_204,x:118.3,y:100.1}).wait(1).to({graphics:mask_1_graphics_205,x:113.4,y:100.1}).wait(59).to({graphics:mask_1_graphics_264,x:113.4,y:100.1}).wait(1).to({graphics:mask_1_graphics_265,x:41.8,y:100.1}).wait(1).to({graphics:mask_1_graphics_266,x:-18.8,y:100.1}).wait(1).to({graphics:mask_1_graphics_267,x:-68.4,y:100.1}).wait(1).to({graphics:mask_1_graphics_268,x:-107,y:100.1}).wait(1).to({graphics:mask_1_graphics_269,x:-134.6,y:100.1}).wait(1).to({graphics:mask_1_graphics_270,x:-147.8,y:100.1}).wait(1).to({graphics:mask_1_graphics_271,x:-150.6,y:100.1}).wait(67));

	// txt4
	this.instance_8 = new lib.txt4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(84.9,159.2,1.1,1.1,0,0,0,68.1,6.3);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(198).to({_off:false},0).to({_off:true},74).wait(66));

	// mask1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_132 = new cjs.Graphics().p("AmQPpIC+qoMAqMAAAIi+Kog");
	var mask_2_graphics_133 = new cjs.Graphics().p("ArPPpIC+qoMAqMAAAIi+Kog");
	var mask_2_graphics_134 = new cjs.Graphics().p("AvcPpIC+qoMAqMAAAIi+Kog");
	var mask_2_graphics_135 = new cjs.Graphics().p("Ay4PpIC+qoMAqMAAAIi+Kog");
	var mask_2_graphics_136 = new cjs.Graphics().p("A1kPpIC+qoMAqMAAAIi+Kog");
	var mask_2_graphics_137 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");
	var mask_2_graphics_138 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_2_graphics_139 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_2_graphics_198 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_2_graphics_199 = new cjs.Graphics().p("A2kPpIC+qoMAqLAAAIi9Kog");
	var mask_2_graphics_200 = new cjs.Graphics().p("A2lPpIC+qoMAqNAAAIi/Kog");
	var mask_2_graphics_201 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");
	var mask_2_graphics_202 = new cjs.Graphics().p("A2lPpIC+qoMAqNAAAIi/Kog");
	var mask_2_graphics_203 = new cjs.Graphics().p("A2kPpIC+qoMAqLAAAIi9Kog");
	var mask_2_graphics_204 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi9Kog");
	var mask_2_graphics_205 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(132).to({graphics:mask_2_graphics_132,x:249,y:100.1}).wait(1).to({graphics:mask_2_graphics_133,x:217.1,y:100.1}).wait(1).to({graphics:mask_2_graphics_134,x:190.2,y:100.1}).wait(1).to({graphics:mask_2_graphics_135,x:168.2,y:100.1}).wait(1).to({graphics:mask_2_graphics_136,x:151,y:100.1}).wait(1).to({graphics:mask_2_graphics_137,x:133,y:100.1}).wait(1).to({graphics:mask_2_graphics_138,x:118.3,y:100.1}).wait(1).to({graphics:mask_2_graphics_139,x:113.4,y:100.1}).wait(59).to({graphics:mask_2_graphics_198,x:113.4,y:100.1}).wait(1).to({graphics:mask_2_graphics_199,x:45.7,y:100.1}).wait(1).to({graphics:mask_2_graphics_200,x:-11.5,y:100.1}).wait(1).to({graphics:mask_2_graphics_201,x:-58.3,y:100.1}).wait(1).to({graphics:mask_2_graphics_202,x:-94.8,y:100.1}).wait(1).to({graphics:mask_2_graphics_203,x:-120.8,y:100.1}).wait(1).to({graphics:mask_2_graphics_204,x:-136.4,y:100.1}).wait(1).to({graphics:mask_2_graphics_205,x:-141.6,y:100.1}).wait(133));

	// txt3
	this.instance_9 = new lib.txt3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(68.4,168.1,1.1,1.1,0,0,0,53.1,14.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(132).to({_off:false},0).to({_off:true},74).wait(132));

	// mask1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_66 = new cjs.Graphics().p("AmQPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_67 = new cjs.Graphics().p("ArPPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_68 = new cjs.Graphics().p("AvcPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_69 = new cjs.Graphics().p("Ay4PpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_70 = new cjs.Graphics().p("A1kPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_71 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_72 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_73 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_3_graphics_132 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_3_graphics_133 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_134 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_135 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_136 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_3_graphics_137 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_138 = new cjs.Graphics().p("A3FPpIC+qoMAqMAAAIi+Kog");
	var mask_3_graphics_139 = new cjs.Graphics().p("A3hPpIC+qoMAqMAAAIi+Kog");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_3_graphics_66,x:249,y:100.1}).wait(1).to({graphics:mask_3_graphics_67,x:217.1,y:100.1}).wait(1).to({graphics:mask_3_graphics_68,x:190.2,y:100.1}).wait(1).to({graphics:mask_3_graphics_69,x:168.2,y:100.1}).wait(1).to({graphics:mask_3_graphics_70,x:151,y:100.1}).wait(1).to({graphics:mask_3_graphics_71,x:133,y:100.1}).wait(1).to({graphics:mask_3_graphics_72,x:118.3,y:100.1}).wait(1).to({graphics:mask_3_graphics_73,x:113.4,y:100.1}).wait(59).to({graphics:mask_3_graphics_132,x:113.4,y:100.1}).wait(1).to({graphics:mask_3_graphics_133,x:41.8,y:100.1}).wait(1).to({graphics:mask_3_graphics_134,x:-18.8,y:100.1}).wait(1).to({graphics:mask_3_graphics_135,x:-68.4,y:100.1}).wait(1).to({graphics:mask_3_graphics_136,x:-107,y:100.1}).wait(1).to({graphics:mask_3_graphics_137,x:-134.6,y:100.1}).wait(1).to({graphics:mask_3_graphics_138,x:-147.8,y:100.1}).wait(1).to({graphics:mask_3_graphics_139,x:-150.6,y:100.1}).wait(199));

	// txt2
	this.instance_10 = new lib.txt2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(63.3,168.1,1.1,1.1,0,0,0,48.4,14.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(66).to({_off:false},0).to({_off:true},74).wait(198));

	// mask1 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("AmQPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_1 = new cjs.Graphics().p("ArPPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_2 = new cjs.Graphics().p("AvcPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_3 = new cjs.Graphics().p("Ay4PpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_4 = new cjs.Graphics().p("A1kPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_5 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_6 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_7 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_4_graphics_66 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_4_graphics_67 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_68 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_69 = new cjs.Graphics().p("A2lPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_70 = new cjs.Graphics().p("A2kPpIC9qoMAqMAAAIi+Kog");
	var mask_4_graphics_71 = new cjs.Graphics().p("A2kPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_72 = new cjs.Graphics().p("A3FPpIC+qoMAqMAAAIi+Kog");
	var mask_4_graphics_73 = new cjs.Graphics().p("A3hPpIC+qoMAqMAAAIi+Kog");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:249,y:100.1}).wait(1).to({graphics:mask_4_graphics_1,x:217.1,y:100.1}).wait(1).to({graphics:mask_4_graphics_2,x:190.2,y:100.1}).wait(1).to({graphics:mask_4_graphics_3,x:168.2,y:100.1}).wait(1).to({graphics:mask_4_graphics_4,x:151,y:100.1}).wait(1).to({graphics:mask_4_graphics_5,x:133,y:100.1}).wait(1).to({graphics:mask_4_graphics_6,x:118.3,y:100.1}).wait(1).to({graphics:mask_4_graphics_7,x:113.4,y:100.1}).wait(59).to({graphics:mask_4_graphics_66,x:113.4,y:100.1}).wait(1).to({graphics:mask_4_graphics_67,x:41.8,y:100.1}).wait(1).to({graphics:mask_4_graphics_68,x:-18.8,y:100.1}).wait(1).to({graphics:mask_4_graphics_69,x:-68.4,y:100.1}).wait(1).to({graphics:mask_4_graphics_70,x:-107,y:100.1}).wait(1).to({graphics:mask_4_graphics_71,x:-134.6,y:100.1}).wait(1).to({graphics:mask_4_graphics_72,x:-147.8,y:100.1}).wait(1).to({graphics:mask_4_graphics_73,x:-150.6,y:100.1}).wait(265));

	// txt1
	this.instance_11 = new lib.txt1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(93.2,158.4,1,1,0,0,0,83.2,21.9);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},74).wait(264));

	// plate
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjsIiIEjxDIC2AAIkkRDg");
	this.shape_8.setTransform(145.3,132.6,0.544,0.544,0,0,0,-0.1,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CB0927").s().p("AkbIYIElwvIERAAIkkQvg");
	this.shape_9.setTransform(139.5,181.5,0.544,0.544,0,0,0,0,-0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DBDBDA").s().p("Al+LYICSoiIERAAID0uOIBmAAImFWwg");
	this.shape_10.setTransform(139.6,192.1,0.544,0.544,0,0,0,-0.1,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC052B").s().p("AxjFuIAArbMAjHAAAIi+Lbg");
	this.shape_11.setTransform(23.1,167,1.21,1.21,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(338));

	// rect
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AsfDNIAAmZIY/AAIAAGZg");
	this.shape_12.setTransform(80,232.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AsfDNIAAmZIY/AAIAAGZg");
	this.shape_13.setTransform(80,495.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[]},264).wait(74));

	// 5.jpg
	this.instance_12 = new lib.p5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(124.6,320.5,1.1,1.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(264).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.5,alpha:1},7,cjs.Ease.get(1)).wait(67));

	// 4.jpg
	this.instance_13 = new lib.p4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(124,320.5,1.1,1.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(198).to({_off:false},0).to({scaleX:1,scaleY:1,x:120,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(66));

	// 3.jpg
	this.instance_14 = new lib.p3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(124,320.5,1.1,1.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(132).to({_off:false},0).to({scaleX:1,scaleY:1,x:120,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(132));

	// 2.jpg
	this.instance_15 = new lib.p2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(124,320.5,1.1,1.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,x:120,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(198));

	// 1.jpg
	this.instance_16 = new lib.p1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(124,320.5,1.1,1.1);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:1,scaleY:1,x:120,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(264));

	// bg
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_14.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(338));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,288.2,280.9,612.4);
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