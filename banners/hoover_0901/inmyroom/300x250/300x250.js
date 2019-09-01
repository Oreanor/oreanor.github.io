(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[604,252,300,250],[0,0,300,250],[302,0,300,250],[604,0,300,250],[0,252,300,250],[302,252,300,250]]}
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


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkeKnQiFg4hlhlQhnhmg4iFQg5iJAAiWQAAiVA5iJQA4iFBnhlQBlhnCFg4QCJg5CVAAQCWAACJA5QCFA4BmBnQBlBlA4CFQA6CJABCVQgBCWg6CJQg4CFhlBmQhmBliFA4QiJA6iWABQiVgBiJg6gAidA8IiUIrQCQBHChABQEcgBDKjIQDJjJAAkdQAAhjgdhigAqLDZQAnB1BNBgQBNBfBpBAICIn+IixA5Ig1DFIg8ASIA0jEgAoxmKQh9CxAADZQAABfAZBZIDZhFIDMr1QjHBKh6CugAi0qVIjLL1ICxg4IB4nBIA8gRIh4G/IMZj7QhIjKivh9QiziBjdAAQhcAAhYAZg");
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(65.4,65.4,147.5,147.5), null);


(lib.ClipGroup_5_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlIMFQiWhFh3h7Qh0h4hBiWQhCiaAAidQAAirBCidQBAiYB1h1QB1h1CYhAQCdhCCrAAQCsAACdBCQCYBAB1B1QB1B1BACYQBCCdAACrQAACshCCdQhACYh1B1Qh1B1iYBAQidBCisAAQipAAifhIg");
	mask.setTransform(169.1,169);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D42D3F","#D32D3F","#CC2D3D","#CA2D3C","#B92B35","#B52B34","#AB2A30","#A3292D","#9A292A","#76231D"],[0,0.047,0.051,0.082,0.161,0.439,0.502,0.694,0.835,1,1],61.2,61.2,-75.4,-75.4).s().p("A6aAAIaa6aIabaaI6babg");
	this.shape.setTransform(169.1,169.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_5, new cjs.Rectangle(84.6,84.5,169.1,169.1), null);


(lib.ClipGroup_4_5 = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_5, new cjs.Rectangle(78.9,78.9,165.2,165.2), null);


(lib.ClipGroup_3_5 = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_5, new cjs.Rectangle(77.4,77.5,162.2,162.1), null);


(lib.ClipGroup_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhxAVQgQgRAFgjIAtAAQABAZAVgGQANgEALgPIAoAAQgaAuguAOQgMADgJAAQgRAAgKgLgAA0gfIBKAAQgMAHgMADQgLAEgKAAQgTAAgKgOg");
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

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_5, new cjs.Rectangle(3.9,11.5,25.3,6.5), null);


(lib.ClipGroup_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjgCiQgPgTAIglQAHgnAagfQAZgfAigIQANgEAHAAQAYAAAKASQAKATgHAgQgGAggSAaQgTAbgZAPgAiUAmQgLADgJAMQgNAPgFAZQgEAVAFAJQAEAIAJAAIAGgBQALgDAKgLQANgQAFgZQAFgZgIgJQgEgEgHAAIgHABgAk2CiQAKgPAEgVQAFgZgIgJQgGgHgLADQgLADgJAMQgNAPgFAZQgCAKAAAJIgtAAIABgGQAIgnAZgeQAagfAhgKQALgDAKAAQAXAAAKATQAKATgGAgQgGAagNAXgAg/gcIAygOIAFBhIAAAAIAxh1IA0gQIhZDCIg1ASgAB0hWIBkgfIgJAtIg1ATIgEAWIAtgRIgIAsIgtANIgFAWIA3gVIgLAzIhoAggAEHiEIBfgaQAKgDAHAAQAPAAAHAJQAIAKgEATQgDAOgJANQgJAPgNAIQATADgEAhIgCATQgCANACAEIgyANQgBgJACgQQADgQgCgGQgDgJgNADIgXADIgOBFIg0APgAFIhvIgXAGIgIAjIAagHQAXgHADgRQACgIgFgDQgCgBgEAAIgMACg");
	mask.setTransform(54.5,52);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(196,196,196,0)","#C4C4C4","#A9A9A8","#898988","#646462","#3B3B39","#1D1D1B","#1D1D1B"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],66.1,40.1,-101.6,-61.5).s().p("AojBLIFppSILeG9IlpJSg");
	this.shape.setTransform(54.8,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F8F8F8","#E4E4E4","#C3C3C3","#ADADAD","#E8E8E8","#FFFFFF","#FDFDFD","#F6F6F6","#EBEBEA","#DADADA","#C4C4C4","rgba(196,196,196,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],66.1,40.1,-101.6,-61.5).s().p("AojBLIFppSILeG9IlpJSg");
	this.shape_1.setTransform(54.8,52);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_5, new cjs.Rectangle(14.4,35.8,80.4,32.4), null);


(lib.txt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(141.9,45.5,0.45,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAgBSIAAhrIhABrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_1.setTransform(136.3,42.7,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBSIAAhEIg8AAIAABEIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAkAAIAACjg");
	this.shape_2.setTransform(128.5,42.7,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BCIAMgbQAVAPATAAQAfAAAAgVQAAgMgJgFQgIgFgWAAIgHAAIAAgYIAHAAQASAAAIgFQAJgFABgNQAAgSgZAAQgYAAgPANIgMgZQAWgSAhAAQAZAAAPAMQAPAMAAATQAAAbgZALQAcAJAAAeQAAAVgQAOQgRAOgaAAQgkAAgWgTg");
	this.shape_3.setTransform(121.4,42.8,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBSIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_4.setTransform(114.5,42.7,0.45,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABNBSIgphIIgTAbIAAAtIghAAIAAgtIgUgbIgpBIIgmAAIA3hcIg1hHIAoAAIA5BPIAAhPIAhAAIAABPIA5hPIAoAAIg1BHIA3Bcg");
	this.shape_5.setTransform(105.3,42.7,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhBxIAAhrIhBBrIghAAIAAijIAiAAIAABqIBAhqIAiAAIAACjgAgbhOQgNgMgCgTIAWgDQAFAUAQAAQASAAAFgUIAVADQgCAUgMALQgMAKgSAAQgQAAgMgKg");
	this.shape_6.setTransform(92.4,41.3,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA/QgWgXAAgmIAAgCQAAglAUgYQAUgXAeAAQAhAAASAZQASAXAAAlIgBAMIhmAAQACAVAMALQALALAPAAQAWAAASgRIAQAWQgXAYgiAAQgfAAgWgWgAgWgrQgKAMgCAVIBFAAQgBgUgJgMQgJgNgPAAQgNAAgKAMg");
	this.shape_7.setTransform(84.8,42.8,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAgkIAAgCQAAgkAWgYQAWgYAfAAQAhAAAVAXQAWAYAAAlIAAABQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPARAAQASAAAMgPQALgPAAgXIAAgCQAAgXgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_8.setTransform(77.1,42.8,0.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAXAAAPALQAPAMAAATQgBAagYALQAfAKABAcQgBAWgPAMQgQAMgbAAgAgcA2IAdAAQAbABAAgXQAAgVgcAAIgcAAgAgcgNIAaAAQAZAAAAgUQAAgVgYAAIgbAAg");
	this.shape_9.setTransform(69.7,42.7,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIguAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_10.setTransform(62.8,42.7,0.45,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAgkIAAgCQAAgkAWgYQAWgYAfAAQAhAAAVAXQAWAYAAAlIAAABQAAAlgWAXQgVAYghAAQggAAgWgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPARAAQATAAALgPQALgPAAgXIAAgCQAAgXgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_11.setTransform(52.2,42.8,0.45,0.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAYAAAOALQAOAMAAATQAAAagYALQAfAKAAAcQAAAWgQAMQgPAMgbAAgAgcA2IAdAAQAcABAAgXQAAgVgdAAIgcAAgAgcgNIAaAAQAZAAAAgUQAAgVgYAAIgbAAg");
	this.shape_12.setTransform(44.8,42.7,0.45,0.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_13.setTransform(37.9,42.7,0.45,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqA+QgVgYAAgkIAAgCQAAglAVgYQAWgXAfAAQAfAAAVAVIgQAbQgRgRgSAAQgRAAgLAOQgLAPAAAXIAAACQgBAYAMAPQAMAOARAAQASAAASgQIAPAYQgWAXggAAQgfAAgVgXg");
	this.shape_14.setTransform(31.6,42.8,0.45,0.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguA/QgXgXABgmIAAgCQgBglAUgYQAUgXAeAAQAgAAATAZQARAXAAAlIAAAMIhnAAQADAVAMALQAKALAQAAQAXAAARgRIARAWQgYAYgiAAQgfAAgVgWgAgWgrQgJAMgDAVIBFAAQgBgUgJgMQgJgNgPAAQgOAAgJAMg");
	this.shape_15.setTransform(24.4,42.8,0.45,0.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAcBSIAAg+QgUALgVAAQgWAAgNgMQgOgNAAgYIAAg/IAjAAIAAA3QAAANAHAHQAGAHALAAQARAAAOgJIAAhJIAjAAIAACjg");
	this.shape_16.setTransform(17,42.7,0.45,0.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgxBIQgPgOgBgXIAAgCQAAgaARgNQAPgNAcAAQASAAATAHIAAgHQAAgigkAAQgRAAgYAKIgHgdQAagMAaAAQAhAAAQARQAQAQAAAfIAABlIghAAIAAgUQgSAYgcAAQgVAAgOgNgAgWALQgIAHAAANIAAACQAAAMAIAHQAHAGAMAAQAPAAAJgJQALgIAAgOIAAgRQgNgGgSAAQgOAAgJAHg");
	this.shape_17.setTransform(9.6,42.8,0.45,0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_18.setTransform(3.1,42.7,0.45,0.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgqARIAAghIBVAAIAAAhg");
	this.shape_19.setTransform(114.2,25.4,0.45,0.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhBSIAAhqIhBBqIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_20.setTransform(104,26,0.45,0.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcBSIgohEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_21.setTransform(96.9,26,0.45,0.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhJBrIAAjSIAjAAIAAAbQAUgeAcAAQAbAAARAUQAUAXAAAoIAAAEQAAAmgUAXQgRAVgbAAQgbAAgVgcIAABIgAgbg8QgLAOAAAXIAAAEQAAAWALAPQAMAOAPABQAQgBAMgOQALgOAAgXIAAgEQAAgXgLgPQgMgOgQAAQgPAAgMAPg");
	this.shape_22.setTransform(88.9,27,0.45,0.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAgkIAAgCQAAgkAWgYQAVgYAhAAQAgAAAWAXQAVAYAAAlIAAABQAAAlgVAXQgWAYghAAQgfAAgXgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPASAAQASAAALgPQALgPAAgXIAAgCQAAgXgLgPQgMgPgSAAQgRAAgMAPg");
	this.shape_23.setTransform(80.7,26,0.45,0.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag1BaQgUgYAAgrIAAgEQAAgwAIgYQANghAigIIBOgSIAGAdIhLASQgkAIgBAkQAGgLAMgIQAPgJATAAQAcAAAUAWQAUAXAAAiIAAABQAAAkgUAXQgUAXgiAAQgiAAgTgXgAgbgGQgLANAAAXIAAACQAAAWALAPQALAOAQAAQASAAALgOQAKgPAAgWIAAgCQAAgWgLgOQgLgOgRAAQgQAAgLAOg");
	this.shape_24.setTransform(72.8,24.8,0.45,0.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhCBhIAKgaQAKAFALAAQAOAAAHgSIg7ijIAlAAIAlB5IAlh5IAkAAIg5CmQgIAZgLAKQgLAKgTAAQgSAAgQgJg");
	this.shape_25.setTransform(65.1,27.1,0.45,0.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAgkIAAgCQAAgkAWgYQAWgYAfAAQAhAAAVAXQAWAYAAAlIAAABQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgmQgLAOAAAXIAAACQAAAYAMAPQALAPARAAQASAAAMgPQALgPAAgXIAAgCQAAgXgMgPQgLgPgSAAQgRAAgMAPg");
	this.shape_26.setTransform(53.8,26,0.45,0.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhABSIAAijIBFAAQAXAAAOALQAPALABAVQgBAZgYALQAgAKAAAcQAAAXgRAMQgPALgbAAgAgcA2IAdAAQAcABAAgXQAAgVgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgUgXABIgcAAg");
	this.shape_27.setTransform(46.4,26,0.45,0.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIguAAIAAgeIB8AAIAAAeIgsAAIAACFg");
	this.shape_28.setTransform(39.5,26,0.45,0.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgqA+QgVgYAAgkIAAgCQAAglAWgYQAVgXAfAAQAeAAAWAVIgQAbQgRgRgSAAQgRAAgLAOQgMAPAAAXIAAACQAAAYAMAPQALAOASAAQASAAASgQIAPAYQgXAXgfAAQgfAAgVgXg");
	this.shape_29.setTransform(33.2,26,0.45,0.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgvA/QgVgXAAgmIAAgCQgBglAUgYQAVgXAdAAQAhAAASAZQARAXAAAlIAAAMIhmAAQACAVAMALQALALAQAAQAWAAARgRIARAWQgYAYgiAAQggAAgVgWgAgWgrQgKAMgBAVIBEAAQgBgUgJgMQgJgNgPAAQgNAAgKAMg");
	this.shape_30.setTransform(26,26,0.45,0.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAcBSIAAg+QgUALgVAAQgWAAgNgMQgOgNAAgYIAAg/IAjAAIAAA2QAAANAGAJQAHAGAKAAQARAAAPgJIAAhJIAjAAIAACjg");
	this.shape_31.setTransform(18.6,26,0.45,0.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgxBIQgQgOAAgXIAAgCQAAgaARgNQAPgNAbAAQATAAASAHIAAgHQAAgigjAAQgSAAgXAKIgHgdQAagMAbAAQAgAAAQARQARAQAAAfIAABlIgjAAIAAgUQgRAYgcAAQgVAAgOgNgAgWALQgIAHAAANIAAACQAAAMAHAHQAIAGAMAAQAOAAAKgJQALgIAAgOIAAgRQgOgGgRAAQgOAAgJAHg");
	this.shape_32.setTransform(11.3,26,0.45,0.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAoBtIg7hfIgbAgIAAA/IgkAAIAAjZIAkAAIAABrIBShrIAsAAIhMBeIBPB7g");
	this.shape_33.setTransform(3.9,24.8,0.45,0.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgUIAAAAQAAgSALgNQALgMAPAAQASAAAJALIgIAOQgJgJgJAAQgIAAgGAIQgGAHAAAMIAAAAQAAAMAGAIQAGAHAJAAQAIABAKgJIAIANQgMAMgQAAQgPAAgLgMg");
	this.shape_34.setTransform(50.3,4.4,0.856,0.856);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgUIAAAAQAAgSALgMQALgNAQAAQARAAALAMQALANAAASIAAAAQAAAUgLAMQgLAMgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAAAQAAANAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgMgGgHQgGgJgJABQgIgBgGAJg");
	this.shape_35.setTransform(42.9,4.4,0.856,0.856);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgUIAAAAQAAgSALgNQALgMAQAAQARAAAKALIgIAOQgKgJgJAAQgHAAgHAIQgFAHAAAMIAAAAQAAAMAFAIQAHAHAIAAQAJABAJgJIAIANQgLAMgQAAQgQAAgLgMg");
	this.shape_36.setTransform(35.9,4.4,0.856,0.856);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgVIAAAAQAAgSAKgNQALgMAOAAQARAAAKANQAJALAAATIAAAHIg1AAQAEAWARgBQALAAAKgIIAIALQgMANgSAAQgQAAgLgLgAgKgWQgGAGgBALIAjAAQgBgXgRAAQgGAAgEAGg");
	this.shape_37.setTransform(28.8,4.4,0.856,0.856);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgPAAgrIA5AAIAABUIgTAAIAAhEIgVAAQAAAqgGAPQgGAMgPAAg");
	this.shape_38.setTransform(21,4.4,0.856,0.856);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAeIAOAAQAgAAAAAZQgBAcgeAAgAgbAcIAOAAQANAAAAgNQAAgNgNAAIgOAAg");
	this.shape_39.setTransform(12.9,4.4,0.856,0.856);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAWA4IAAheIgqAAIAABeIgTAAIAAhvIBPAAIAABvg");
	this.shape_40.setTransform(3.6,3.2,0.856,0.856);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKAwIAFglIgdAWIgLgSIAigPIgigNIALgTIAdAWIgFglIAVAAIgFAlIAdgWIALATIghANIAhAPIgLASIgdgWIAFAlg");
	this.shape_41.setTransform(149.8,0.7,0.428,0.428);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_42.setTransform(143.6,3.3,0.428,0.428);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_43.setTransform(136.1,3.3,0.428,0.428);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAmBsIgthMIgLAAIgZAAIAABMIgkAAIAAjYIBOAAQAiAAAUASQAVATAAAhQAAAvgtAPIAzBUgAgrAAIApAAQARAAALgJQAMgKAAgTQAAglgpAAIgoAAg");
	this.shape_44.setTransform(128.2,3.3,0.428,0.428);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhDBsIAAjYICHAAIAAAhIhjAAIAAA+IBYAAIAAAfIhYAAIAABag");
	this.shape_45.setTransform(120.4,3.3,0.428,0.428);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgqARIAAghIBVAAIAAAhg");
	this.shape_46.setTransform(113.9,3.9,0.428,0.428);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAqBsIAAhcIhUAAIAABcIgjAAIAAjYIAjAAIAABbIBUAAIAAhbIAkAAIAADYg");
	this.shape_47.setTransform(107,3.3,0.428,0.428);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgpBTIAAijIAjAAIAAAhQAOgkAiABIAAAmIgCAAQgVAAgNAOQgMAPAAAaIAABIg");
	this.shape_48.setTransform(97.1,4.3,0.428,0.428);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AguA/QgXgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAgAAATAYQASAYAAAlIgBAMIhnAAQADAVAMALQALAKAPAAQAXAAARgRIAQAWQgXAZgiAAQggAAgUgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_49.setTransform(90.9,4.4,0.428,0.428);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPBTIg6ilIAlAAIAkB3IAmh3IAkAAIg6Clg");
	this.shape_50.setTransform(84.3,4.4,0.428,0.428);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAWgYAgAAQAhAAAVAXQAWAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXALAPQANAPAQAAQASAAAMgPQALgOAAgXIAAgCQAAgXgLgQQgMgPgSAAQgSAAgLAPg");
	this.shape_51.setTransform(77.3,4.4,0.428,0.428);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAgkAWgYQAWgYAgAAQAgAAAWAXQAVAYAAAkIAAACQAAAlgVAXQgXAYggAAQggAAgVgXgAgdgnQgKAPgBAXIAAACQAAAXAMAPQALAPASAAQASAAALgPQALgOAAgXIAAgCQAAgYgLgPQgMgPgSAAQgRAAgMAPg");
	this.shape_52.setTransform(69.7,4.4,0.428,0.428);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AArBsIAAhcIhUAAIAABcIgkAAIAAjYIAkAAIAABbIBUAAIAAhbIAjAAIAADYg");
	this.shape_53.setTransform(61.5,3.3,0.428,0.428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt6, new cjs.Rectangle(0,-1.6,151.8,48.2), null);


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
	this.shape.setTransform(50,6.4,0.854,0.858);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAgQgLgMAAgUIAAAAQAAgSALgMQALgNAQAAQARAAALAMQALANAAASIAAAAQAAAUgLAMQgLAMgRAAQgQAAgLgMgAgOgTQgGAHAAAMIAAAAQAAANAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMIAAgBQAAgMgGgHQgGgJgJABQgIgBgGAJg");
	this.shape_1.setTransform(42.6,6.4,0.854,0.858);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAgQgLgMAAgUIAAAAQAAgSALgNQALgMAQAAQARAAAKALIgIAOQgKgJgJAAQgHAAgHAIQgFAHAAAMIAAAAQAAAMAFAIQAHAHAIAAQAJABAJgJIAIANQgLAMgQAAQgQAAgLgMg");
	this.shape_2.setTransform(35.6,6.4,0.854,0.858);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAhQgLgMAAgVIAAAAQAAgSAKgNQALgMAOAAQARAAAKANQAJALAAATIAAAHIg1AAQAEAWARgBQALAAAKgIIAIALQgMANgSAAQgQAAgLgLgAgKgWQgGAGgBALIAjAAQgBgXgRAAQgGAAgEAGg");
	this.shape_3.setTransform(28.6,6.4,0.854,0.858);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmAqIABgPIAFAAQAIAAACgLQAEgPAAgrIA5AAIAABUIgTAAIAAhEIgVAAQAAAqgGAPQgGAMgPAAg");
	this.shape_4.setTransform(20.8,6.4,0.854,0.858);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAqIAAhTIASAAIAABTgAgtAqIAAhTIASAAIAAAeIAOAAQAgAAAAAZQgBAcgeAAgAgbAcIAOAAQANAAAAgNQAAgNgNAAIgOAAg");
	this.shape_5.setTransform(12.7,6.4,0.854,0.858);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWA4IAAheIgqAAIAABeIgTAAIAAhvIBPAAIAABvg");
	this.shape_6.setTransform(3.4,5.2,0.854,0.858);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAwIAFglIgdAWIgLgSIAigPIgigNIALgTIAdAWIgFglIAVAAIgFAlIAdgWIALATIghANIAhAPIgLASIgdgWIAFAlg");
	this.shape_7.setTransform(149.3,2.7,0.427,0.429);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_8.setTransform(143.1,5.3,0.427,0.429);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEBsIAAjYICIAAIAAAhIhkAAIAAA7IBYAAIAAAfIhYAAIAAA9IBlAAIAAAgg");
	this.shape_9.setTransform(135.6,5.3,0.427,0.429);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmBsIgthMIgLAAIgZAAIAABMIgkAAIAAjYIBOAAQAiAAAUASQAVATAAAhQAAAvgtAPIAzBUgAgrAAIApAAQARAAALgJQAMgKAAgTQAAglgpAAIgoAAg");
	this.shape_10.setTransform(127.8,5.3,0.427,0.429);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhDBsIAAjYICHAAIAAAhIhjAAIAAA+IBYAAIAAAfIhYAAIAABag");
	this.shape_11.setTransform(120,5.3,0.427,0.429);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqARIAAghIBVAAIAAAhg");
	this.shape_12.setTransform(113.5,5.9,0.427,0.429);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAqBsIAAhcIhUAAIAABcIgjAAIAAjYIAjAAIAABbIBUAAIAAhbIAkAAIAADYg");
	this.shape_13.setTransform(106.7,5.3,0.427,0.429);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpBTIAAijIAjAAIAAAhQAOgkAiABIAAAmIgCAAQgVAAgNAOQgMAPAAAaIAABIg");
	this.shape_14.setTransform(96.8,6.4,0.427,0.429);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguA/QgXgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAgAAATAYQASAYAAAlIgBAMIhnAAQADAVAMALQALAKAPAAQAXAAARgRIAQAWQgXAZgiAAQggAAgUgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_15.setTransform(90.6,6.5,0.427,0.429);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPBTIg6ilIAlAAIAkB3IAmh3IAkAAIg6Clg");
	this.shape_16.setTransform(83.9,6.5,0.427,0.429);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAWgYAgAAQAhAAAVAXQAWAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXALAPQANAPAQAAQASAAAMgPQALgOAAgXIAAgCQAAgXgLgQQgMgPgSAAQgSAAgLAPg");
	this.shape_17.setTransform(77,6.5,0.427,0.429);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAgkAWgYQAWgYAgAAQAgAAAWAXQAVAYAAAkIAAACQAAAlgVAXQgXAYggAAQggAAgVgXgAgdgnQgKAPgBAXIAAACQAAAXAMAPQALAPASAAQASAAALgPQALgOAAgXIAAgCQAAgYgLgPQgMgPgSAAQgRAAgMAPg");
	this.shape_18.setTransform(69.4,6.5,0.427,0.429);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AArBsIAAhcIhUAAIAABcIgkAAIAAjYIAkAAIAABbIBUAAIAAhbIAjAAIAADYg");
	this.shape_19.setTransform(61.3,5.3,0.427,0.429);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhBSIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_20.setTransform(87,40,0.45,0.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAeBSIAAhDIg8AAIAABDIgjAAIAAijIAjAAIAABDIA8AAIAAhDIAkAAIAACjg");
	this.shape_21.setTransform(79.3,40,0.45,0.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag7BCIANgcQAWAQASAAQANAAAIgFQAKgGAAgKQAAgNgIgEQgJgFgWAAIgHAAIAAgZIAHAAQASAAAIgEQAKgFgBgOQAAgSgZAAQgVAAgRAOIgMgZQAWgSAiAAQAYAAAPAMQAPAMAAATQABAagaAMQAcAIAAAfQAAAVgQAOQgQAOgbAAQgjAAgYgTg");
	this.shape_22.setTransform(72.1,40,0.45,0.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAhBSIAAhrIhBBrIgiAAIAAijIAjAAIAABqIBAhqIAiAAIAACjg");
	this.shape_23.setTransform(65.2,40,0.45,0.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABNBSIgphIIgTAbIAAAtIghAAIAAgtIgUgbIgoBIIgnAAIA3hcIg1hHIAoAAIA5BPIAAhPIAhAAIAABPIA5hPIAoAAIg1BHIA3Bcg");
	this.shape_24.setTransform(56,40,0.45,0.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAhBxIAAhsIhBBsIghAAIAAijIAiAAIAABrIBAhrIAiAAIAACjgAgbhOQgMgLgDgUIAWgDQAEAUARAAQASAAAGgUIAUADQgCAUgMALQgLAKgTAAQgRAAgLgKg");
	this.shape_25.setTransform(43.2,38.6,0.45,0.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgvA/QgWgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAhAAASAYQASAYAAAlIgBAMIhmAAQACAVAMALQALAKAPAAQAWAAASgRIAQAWQgXAZgiAAQgfAAgWgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_26.setTransform(35.6,40,0.45,0.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag1A+QgWgYAAglIAAgBQAAglAWgXQAVgYAgAAQAhAAAWAXQAVAYAAAkIAAACQAAAlgWAXQgWAYggAAQggAAgVgXgAgdgnQgLAPAAAXIAAACQAAAXAMAPQALAPARAAQASAAALgPQAMgOAAgXIAAgCQAAgXgMgQQgMgPgRAAQgRAAgMAPg");
	this.shape_27.setTransform(27.9,40,0.45,0.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBDAAQAYAAAOALQAPALAAAUQAAAagYALQAfALAAAbQAAAWgQANQgPALgbAAgAgcA2IAcAAQAdAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgTgYAAIgbAAg");
	this.shape_28.setTransform(20.4,40,0.45,0.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB7AAIAAAeIgtAAIAACFg");
	this.shape_29.setTransform(13.6,40,0.45,0.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_30.setTransform(3.7,40,0.45,0.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAhBSIAAg4IgbAAIgfA4IgqAAIAog/QghgMAAgiQAAg2A8AAIBEAAIAACjgAgSguQgIAGAAAOQAAAMAIAHQAIAHAMAAIAfAAIAAg1IgaAAQgSAAgHAHg");
	this.shape_31.setTransform(163.2,23.2,0.45,0.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgqA+QgVgYAAglIAAgBQAAglAVgYQAVgXAgAAQAfAAAVAVIgQAaQgSgQgSAAQgQAAgLAOQgLAPAAAXIAAACQAAAYALAPQALAOASAAQASAAARgRIAQAZQgLALgLAGQgNAGgTAAQgfAAgVgXg");
	this.shape_32.setTransform(156.5,23.3,0.45,0.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag9BSIAAijIAjAAIAAA6IAbAAQAcAAAQAMQARANAAAaQAAAbgRAOQgQANgcAAgAgaA2IAaAAQAMAAAIgHQAHgHAAgLQAAgZgbAAIgaAAg");
	this.shape_33.setTransform(149.9,23.2,0.45,0.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_34.setTransform(143.2,23.2,0.45,0.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgxBIQgPgPgBgWIAAgCQAAgaARgNQAQgNAaAAQAUAAARAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAcAAQAhAAAQARQAQAQABAfIAABmIgjAAIAAgUQgQAWgcAAQgWABgOgNgAgeAfIAAACQAAAMAIAHQAHAGAMAAQAOABALgKQAJgIABgOIAAgRQgOgGgRAAQgfAAAAAbg");
	this.shape_35.setTransform(136.4,23.3,0.45,0.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag/BSIAAijIBEAAQAXAAAPALQAOALAAAUQAAAagYALQAfAKAAAcQAAAWgQANQgPALgbAAgAgcA2IAdAAQAcAAAAgVQAAgWgdAAIgcAAgAgcgNIAaAAQAZAAAAgVQAAgTgYAAIgbAAg");
	this.shape_36.setTransform(129.5,23.2,0.45,0.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag2A+QgVgYAAglIAAgBQAAglAVgXQAXgYAfAAQAhAAAWAXQAVAYAAAkIAAACQAAAlgVAXQgWAYghAAQggAAgWgXgAgdgnQgLAPAAAXIAAACQAAAXALAPQANAPAQAAQASAAAMgPQALgOAAgXIAAgCQAAgYgLgPQgMgPgSAAQgSAAgLAPg");
	this.shape_37.setTransform(121.7,23.3,0.45,0.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhJBrIAAjSIAjAAIAAAaQATgdAcAAQAbAAASAVQAUAXAAAnIAAAEQAAAngUAWQgSAVgbAAQgbAAgUgcIAABIgAgbg9QgLAPAAAYIAAADQAAAWALAPQALAOAQAAQAQAAALgOQAMgOAAgXIAAgDQAAgYgMgPQgLgOgQAAQgQAAgLAOg");
	this.shape_38.setTransform(113.8,24.2,0.45,0.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAgBSIAAhrIhABrIghAAIAAijIAiAAIAABqIBAhqIAiAAIAACjg");
	this.shape_39.setTransform(105.6,23.2,0.45,0.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQBSIAAiFIgtAAIAAgeIB8AAIAAAeIgtAAIAACFg");
	this.shape_40.setTransform(98.7,23.2,0.45,0.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAeBSIAAiFIg7AAIAACFIgjAAIAAijICBAAIAACjg");
	this.shape_41.setTransform(91.8,23.2,0.45,0.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgyBIQgPgPABgWIAAgCQAAgaAQgNQAPgNAbAAQAUAAARAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAcAAQAgAAARARQAQAQAAAfIAABmIgiAAIAAgUQgQAWgdAAQgVABgPgNgAgeAfIAAACQAAAMAHAHQAIAGAMAAQAPABAJgKQALgIAAgOIAAgRQgNgGgSAAQgfAAAAAbg");
	this.shape_42.setTransform(84.2,23.3,0.45,0.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAxBkIAAgkIhiAAIgCAkIgfAAIAAhCIAQAAQARgjAAhMIAAgWIBwAAIAACFIAUAAIgEBCgAgfAiIA7AAIAAhnIgsAAQAABHgPAgg");
	this.shape_43.setTransform(76.8,24,0.45,0.45);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgyBIQgOgPAAgWIAAgCQAAgaAQgNQAPgNAbAAQAUAAARAGIAAgGQAAgigjABQgUgBgVAKIgHgdQAYgMAdAAQAgAAAQARQAQAQAAAfIAABmIgiAAIAAgUQgRAWgcAAQgVABgPgNgAgWALQgIAHAAANIAAACQAAAMAHAHQAIAGAMAAQAOABAKgKQAKgIAAgOIAAgRQgNgGgRAAQgOAAgJAHg");
	this.shape_44.setTransform(69.1,23.3,0.45,0.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_45.setTransform(58.9,23.2,0.45,0.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgyBIQgPgPAAgWIAAgCQABgaAQgNQAPgNAcAAQATAAARAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAdAAQAfAAARARQAQAQAAAfIAABmIgiAAIAAgUQgQAWgdAAQgVABgPgNgAgeAfIAAACQAAAMAHAHQAIAGAMAAQAOABAKgKQALgIgBgOIAAgRQgNgGgRAAQgfAAAAAbg");
	this.shape_46.setTransform(51.1,23.3,0.45,0.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAdBSIgphEIgVAaIAAAqIgjAAIAAijIAjAAIAABNIA6hNIAoAAIg2BFIA6Beg");
	this.shape_47.setTransform(44.5,23.2,0.45,0.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgXAcQAagGgCgXIgPAAIAAgpIAmAAIAAAjQAAAXgLANQgLAMgWACg");
	this.shape_48.setTransform(35,27,0.45,0.45);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgRBSIAAiFIgtAAIAAgeIB9AAIAAAeIgtAAIAACFg");
	this.shape_49.setTransform(31.1,23.2,0.45,0.45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AguA/QgXgYAAgmIAAgBQAAglAVgYQAUgXAdAAQAgAAATAYQASAYAAAlIAAAMIhnAAQACAVAMALQALAKAPAAQAXAAARgRIAQAWQgXAZgiAAQggAAgUgWgAgWgrQgKAMgCAVIBFAAQgBgVgJgMQgJgMgPAAQgNAAgKAMg");
	this.shape_50.setTransform(24.5,23.3,0.45,0.45);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgyBIQgPgPAAgWIAAgCQAAgaARgNQAPgNAbAAQATAAASAGIAAgGQAAgigjABQgTgBgWAKIgHgdQAYgMAcAAQBCABAAA/IAABmIgjAAIAAgUQgRAWgcAAQgVABgPgNgAgWALQgIAIAAAMIAAACQAAAMAHAHQAIAGAMAAQAOABAKgKQAKgIAAgOIAAgRQgNgGgRAAQgOAAgJAHg");
	this.shape_51.setTransform(17.1,23.3,0.45,0.45);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAfBSIAAhDIg8AAIAABDIgkAAIAAijIAkAAIAABDIA8AAIAAhDIAjAAIAACjg");
	this.shape_52.setTransform(9.8,23.2,0.45,0.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ag6BCIAMgcQAVAQATAAQANAAAJgFQAKgGgBgKQAAgNgIgEQgIgFgWAAIgIAAIAAgZIAIAAQASAAAIgEQAJgFAAgOQAAgSgZAAQgWAAgRAOIgMgZQAWgSAhAAQAZAAAQAMQAPAMAAATQAAAagaAMQAcAIABAfQAAAVgRAOQgQAOgbAAQgjAAgXgTg");
	this.shape_53.setTransform(2.7,23.3,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0.4,166.3,43.5), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAIAVIAAgbIgQAbIgIAAIAAgpIAJAAIAAAaIAPgaIAJAAIAAApg");
	this.shape.setTransform(38.9,1.3,1.276,1.277);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSAcIAAg2IAJAAIAAAHQAFgIAGAAQAIAAAEAGQAFAGAAAKIAAABQAAAJgFAGQgEAFgIAAQgGAAgFgHIAAATgAgGgPQgDAEAAAGIAAABQAAAMAJAAQAKAAAAgMIAAgBQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1.setTransform(33.2,2,1.276,1.277);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAiIAAgPQgDADgGAAQgHAAgDgFQgFgGAAgLQAAgUAPAAQAEAAAFAEIAAgRIAIAAIAAARQADgEAFAAQAHAAAEAGQAEAFAAAKIAAAAQAAAKgEAGQgEAFgHAAQgGAAgCgDIAAAPgAAFgIIAAAUQACACADAAQAIAAAAgNQAAgNgIAAQgDAAgCAEgAgSABQAAANAIAAQAEAAADgCIAAgUQgDgEgEAAQgIAAAAANg");
	this.shape_2.setTransform(26.1,1.2,1.276,1.277);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHAVIAAgQQgEADgGAAQgMAAAAgMIAAgQIAJAAIAAAOQAAAGAGAAQADAAAEgBIAAgTIAJAAIAAApg");
	this.shape_3.setTransform(16.7,1.3,1.276,1.277);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJAdIAAgcIgQAcIgJAAIAAgpIAJAAIAAAaIAQgaIAIAAIAAApgAgKgbIAGgBQABAFADAAQAFAAABgFIAGABQgCAKgKAAQgJAAgBgKg");
	this.shape_4.setTransform(11.3,0.3,1.276,1.277);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAQIAFgGQAEAEAEAAQAJAAACgLIgOAAIAAgGIAOAAQgCgKgHAAQgGAAgEAEIgEgGQAFgGAIAAQAHAAAGAGQAFAGAAAJIAAAAQAAAKgFAGQgFAGgHAAQgJAAgGgGg");
	this.shape_5.setTransform(5.9,1.3,1.276,1.277);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAMIABgJIgHAGIgDgFIAJgEIgJgDIADgFIAHAGIgBgJIAFAAIgBAJIAHgGIADAFIgIADIAIAEIgDAFIgHgGIABAJg");
	this.shape_6.setTransform(1.5,-1.6,1.276,1.277);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hfree, new cjs.Rectangle(0,-3.5,41.1,9), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAcQgGgFAAgIIAHgBQACAGAEADQACADAFAAQAFAAAEgEQADgDAAgGQAAgGgDgDQgDgEgGAAIgFABIABgGIABAAQAFAAADgCQAFgDAAgFQAAgFgEgDQgCgCgEAAQgEAAgDACQgDADgCAGIgIgBQACgIAFgFQAGgEAHAAQAEAAAFACQAEADACAEQADADAAAFQAAAEgDADQgBAEgFACQAGABADADQADAEAAAHQAAAIgGAGQgHAGgIAAQgIAAgGgFg");
	this.shape.setTransform(253.6,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAbQgFgEgBgJIAIAAQABAGADADQADADAFAAQAFAAAEgEQAEgFAAgHQAAgHgEgDQgDgDgGAAQgDAAgEABQgDACgBACIgIgBIAHggIAeAAIAAAHIgZAAIgDASQAGgEAFAAQAJAAAGAFQAFAFABAJQgBAJgFAHQgGAHgKAAQgJAAgFgFg");
	this.shape_1.setTransform(248.6,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGAgIAAgPIgbAAIAAgHIAcgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAPgAgNAKIATAAIAAgcg");
	this.shape_2.setTransform(243.4,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAaQgHgIAAgSQAAgKACgHQADgHAEgEQAFgEAGAAQAFAAAFACQADACADAEQACAEACAGIABAOQAAALgCAHQgCAHgFAEQgEAEgIAAQgIAAgFgHgAgHgVQgFAGAAAPQABAQADAFQAEAFAEAAQAFAAAFgFQADgFAAgQQAAgPgDgFQgFgFgFAAQgEAAgDAEg");
	this.shape_3.setTransform(238.5,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAgQAAgIADgLQADgKAFgJQAFgKAGgHIgfAAIAAgIIApAAIAAAGQgGAHgGALQgHAKgCALQgCAIgBAKg");
	this.shape_4.setTransform(233.6,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAaQgHgIAAgSQAAgKACgHQADgHAEgEQAFgEAGAAQAFAAAEACQAEACADAEQADAEABAGIABAOQAAALgCAHQgCAHgFAEQgFAEgHAAQgIAAgFgHgAgIgVQgEAGAAAPQABAQADAFQAEAFAEAAQAFAAAEgFQAEgFAAgQQAAgPgEgFQgEgFgFAAQgFAAgDAEg");
	this.shape_5.setTransform(228.5,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgQQAAgSAHgJQAGgHAJAAQAHAAAFAEQAFAFABAHIgIABQgBgFgCgCQgDgDgFAAQgDAAgCACQgEACgCAGQgCAFAAAKQACgFAEgCQAFgCADAAQAIAAAGAGQAFAFAAAJQAAAGgCAFQgDAFgFADQgEADgGAAQgJAAgGgHgAgIABQgDAEAAAGIABAIQACADADACQADACADAAQAFAAADgEQAEgEAAgHQAAgGgDgEQgEgDgFAAQgFAAgEADg");
	this.shape_6.setTransform(223.5,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAdQgFgFgBgHIAIgBQABAGACACQADACAEAAQADAAADgBQADgCABgDIADgHIABgKIAAgCQgCAEgEADQgEACgEAAQgIAAgFgGQgGgFAAgJQAAgKAGgGQAGgGAIAAQAGAAAFADQAFAEADAGQACAGAAAMQAAAMgCAHQgDAHgFAEQgGAEgGAAQgHAAgFgEgAgIgVQgEAEAAAHQAAAGAEAEQAEADAEAAQAFAAAEgDQAEgEAAgHQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_7.setTransform(218.5,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAgQAAgIADgLQADgKAFgJQAFgKAGgHIgfAAIAAgIIApAAIAAAGQgGAHgGALQgHAKgCALQgCAIgBAKg");
	this.shape_8.setTransform(213.6,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAgQAAgIADgLQADgKAFgJQAFgKAGgHIgfAAIAAgIIApAAIAAAGQgGAHgGALQgHAKgCALQgCAIgBAKg");
	this.shape_9.setTransform(208.6,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAGAgIAAgPIgbAAIAAgHIAcgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAPgAgNAKIATAAIAAgcg");
	this.shape_10.setTransform(203.4,15.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKACgHQADgHAFgEQAEgEAGAAQAGAAADACQAEACADAEQADAEABAGIABAOQAAALgCAHQgDAHgEAEQgEAEgIAAQgIAAgGgHgAgIgVQgDAGAAAPQgBAQAEAFQAEAFAEAAQAGAAADgFQAEgFAAgQQAAgPgEgFQgDgFgGAAQgFAAgDAEg");
	this.shape_11.setTransform(198.5,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_12.setTransform(193.2,15.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AARAgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAaIAhAAIAAgaIAIAAIAAA/g");
	this.shape_13.setTransform(185.3,15.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAgIAAg/IAXAAIAKAAQAEABAEACQADADABAEQACAEAAAEQAAAJgEAEQgGAGgNAAIgQAAIAAAagAgPgBIAQAAQAIAAADgDQAEgDAAgFQAAgEgCgDQgDgDgCgBIgIgBIgQAAg");
	this.shape_14.setTransform(179.2,15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAgIAAg/IApAAIAAAHIggAAIAAA4g");
	this.shape_15.setTransform(174,15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPAdQgIgEgDgIQgEgIAAgIQAAgPAJgJQAIgJANAAQAJAAAHAEQAHAEAEAIQAEAHAAAJQAAAKgEAIQgEAHgHAEQgIAEgIAAQgIAAgHgEgAgPgTQgGAGAAAOQAAAMAGAGQAGAHAJAAQAJAAAHgHQAGgGAAgNQAAgHgDgGQgCgGgFgDQgGgDgGAAQgIAAgHAGg");
	this.shape_16.setTransform(167.7,15.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAbQgFgEgBgJIAIAAQABAGADADQAEADAEAAQAFAAAEgEQAEgFAAgHQAAgHgEgDQgDgDgGAAQgDAAgDABQgEACgCACIgHgBIAHggIAeAAIAAAHIgYAAIgEASQAGgEAGAAQAIAAAFAFQAHAFAAAJQAAAJgGAHQgGAHgKAAQgIAAgGgFg");
	this.shape_17.setTransform(159.2,16);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_18.setTransform(153.9,15.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAEgEQAFgEAGAAQAFAAAFACQADACADAEQACAEACAGIABAOQAAALgCAHQgDAHgEAEQgFAEgHAAQgIAAgGgHgAgHgVQgFAGAAAPQAAAQAEAFQAEAFAEAAQAFAAAFgFQADgFAAgQQAAgPgDgFQgFgFgFAAQgEAAgDAEg");
	this.shape_19.setTransform(149.2,16);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVAgIABgFQACgFAEgEIAKgKQAJgIAFgEQADgFAAgFQAAgEgDgEQgDgDgGAAQgFAAgDAEQgEADAAAGIgIgBQABgJAFgFQAGgEAIAAQAJAAAGAFQAFAFAAAHIgBAIIgGAHIgMALIgIAIIgEAFIAgAAIAAAHg");
	this.shape_20.setTransform(144.1,15.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_21.setTransform(138.9,15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgBgJIAJAAQABAGAEADQACADAFAAQAFAAAEgEQAEgFAAgHQAAgHgDgDQgFgDgFAAQgEAAgCABQgDACgDACIgHgBIAGggIAgAAIAAAHIgZAAIgEASQAGgEAGAAQAIAAAFAFQAHAFgBAJQABAJgGAHQgGAHgKAAQgIAAgGgFg");
	this.shape_22.setTransform(134.2,16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAGAgIAAgPIgbAAIAAgHIAcgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAPgAgNAKIATAAIAAgcg");
	this.shape_23.setTransform(129,15.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAFgEQAEgEAGAAQAGAAADACQAEACADAEQACAEACAGIABAOQAAALgCAHQgDAHgEAEQgFAEgHAAQgIAAgGgHgAgIgVQgDAGAAAPQAAAQADAFQAEAFAEAAQAGAAADgFQAEgFAAgQQAAgPgEgFQgDgFgGAAQgFAAgDAEg");
	this.shape_24.setTransform(124.2,16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLAgQAAgIADgLQADgKAFgJQAFgKAGgHIgfAAIAAgIIApAAIAAAGQgGAHgGALQgHAKgCALQgCAIgBAKg");
	this.shape_25.setTransform(119.2,16);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLAgQAAgIADgLQADgKAFgJQAFgKAGgHIgfAAIAAgIIApAAIAAAGQgGAHgGALQgHAKgCALQgCAIgBAKg");
	this.shape_26.setTransform(114.2,16);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AARAgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAaIAhAAIAAgaIAIAAIAAA/g");
	this.shape_27.setTransform(105.9,15.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARAgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAaIAhAAIAAgaIAIAAIAAA/g");
	this.shape_28.setTransform(99.4,15.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASAgIAAgyIgiAyIgIAAIAAg/IAIAAIAAAyIAhgyIAIAAIAAA/g");
	this.shape_29.setTransform(93,15.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDAFIAAgIIAIAAIAAAIg");
	this.shape_30.setTransform(86,18.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgOAbQgGgFAAgJQAAgGADgEQADgEAGgBQgFgCgCgDQgDgEAAgEQAAgHAGgFQAFgFAHAAQAIAAAGAFQAFAFAAAHQAAAEgDAEQgCADgFACQAGACADADQADAEAAAGQAAAJgFAFQgGAGgKAAQgIAAgGgGgAgIAEQgEAEAAAFQAAAEACADQABADADACIAGABQAGAAAEgDQADgEAAgGQAAgFgEgEQgDgEgGAAQgFAAgDAEgAgGgXQgDADAAAEQAAAFADADQACADAEAAQAFAAADgDQADgDAAgEQAAgFgDgCQgDgDgFAAQgDAAgDACg");
	this.shape_31.setTransform(82.2,16);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEAFIAAgIIAIAAIAAAIg");
	this.shape_32.setTransform(76,18.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AASAeIAAgNIgjAAIAAANIgHAAIAAgUIAEAAQAJgKgBgdIAgAAIAAAnIAFAAIAAAUgAgMAKIAYAAIAAggIgRAAQgBAWgGAKg");
	this.shape_33.setTransform(72,17.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAIQABgBAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_34.setTransform(65.7,19.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AALAgIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtgAgHgXQgEgDAAgFIAFAAIACAEQACACACAAQAEAAACgCQACgBAAgDIAGAAQgBAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_35.setTransform(62,15.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgLAEIAAgHIAXAAIAAAHg");
	this.shape_36.setTransform(58,16.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVAgIACgFQABgFAEgEIAKgKQAKgIAEgEQADgFAAgFQAAgEgDgEQgDgDgGAAQgFAAgDAEQgDADAAAGIgJgBQABgJAFgFQAGgEAIAAQAKAAAFAFQAFAFAAAHIgCAIIgFAHIgMALIgIAIIgDAFIAeAAIAAAHg");
	this.shape_37.setTransform(53.9,15.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AALAgIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtgAgHgXQgEgDAAgFIAFAAIACAEQACACACAAQAEAAACgCQACgBAAgDIAGAAQgBAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_38.setTransform(46.4,15.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AALAXIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtg");
	this.shape_39.setTransform(41.4,16.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAJAXIgJgOQgCgFgCgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAAVIgIAAIAAgtIAIAAIAAAUQAEAAABgCIAEgIIADgHIAEgDIAFAAIADAAIAAAGIgDAAIgEABIgCAGIgEAGIgDADQADABAGAIIAIAOg");
	this.shape_40.setTransform(37.2,16.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_41.setTransform(32.8,16.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AALAXIAAgUIgVAAIAAAUIgIAAIAAgtIAIAAIAAATIAVAAIAAgTIAIAAIAAAtg");
	this.shape_42.setTransform(27.9,16.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AALAXIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtg");
	this.shape_43.setTransform(22.9,16.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAaAeIAAgNIg6AAIAAguIAIAAIAAAnIASAAIAAgnIAIAAIAAAnIASAAIAAgnIAIAAIAAAnIAEAAIAAAUg");
	this.shape_44.setTransform(16.9,17.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_45.setTransform(10.5,16.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgXAgIAAg/IAXAAIAKAAQAEABAEACQADADABAEQACAEAAAEQAAAJgEAEQgGAGgNAAIgQAAIAAAagAgPgBIAQAAQAIAAADgDQAEgDAAgFQAAgEgCgDQgCgDgDgBIgIgBIgQAAg");
	this.shape_46.setTransform(5.2,15.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AASAeIAAgNIgjAAIAAANIgHAAIAAgUIAEAAQAJgKgBgdIAgAAIAAAnIAFAAIAAAUgAgMAKIAYAAIAAggIgRAAQgBAWgGAKg");
	this.shape_47.setTransform(203.3,8.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgRAKIAIgBQAAAEAEACQADADADAAQAEAAADgCQACgDAAgDQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgGgBIgCAAIAAgFIAGAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgCgCgDAAQgGAAgDAIIgHgBQADgNANAAQAHAAAEAEQAEAEABAFQAAAGgGADQADABADADQABADAAAEQAAAGgFAEQgEAEgIAAQgQAAgCgOg");
	this.shape_48.setTransform(198.7,7.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAKAAAFAGQAHAGgBALIAAACIgiAAQABAIAEAEQADAEAGAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgKAAgGgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgFAAgDAEg");
	this.shape_49.setTransform(194.2,7.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_50.setTransform(189.1,7.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_51.setTransform(184.3,8.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AARAgIAAg4IghAAIAAA4IgIAAIAAg/IAxAAIAAA/g");
	this.shape_52.setTransform(178.4,6.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_53.setTransform(171.4,10.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_54.setTransform(167.7,7.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgSAXIAAgtIASAAIAJABQADABADADQACADAAAEIgBAGQgCACgDACQAEAAACADQACADAAAEQAAAHgFADQgEADgIAAgAgKARIAKAAQAGAAACgCQADgBAAgEIgCgEQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgHAAIgJAAgAgKgDIAIAAIAGAAIADgCIACgEQAAgEgDgBQgCgCgGAAIgIAAg");
	this.shape_55.setTransform(162.9,7.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAIAXIgIgOQgBgFgCgBQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAAVIgIAAIAAgtIAIAAIAAAUQADAAACgCIADgIIAFgHIACgDIAHAAIABAAIAAAGIgCAAIgEABIgDAGIgDAGIgEADQAFABAEAIIAJAOg");
	this.shape_56.setTransform(158.8,7.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_57.setTransform(154.3,7.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_58.setTransform(149.4,7.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAXAgIAAg1IgTA1IgHAAIgSg2IAAA2IgJAAIAAg/IANAAIAQAsIACAKIADgKIAPgsIAMAAIAAA/g");
	this.shape_59.setTransform(143.2,6.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDAEIAAgIIAIAAIAAAIg");
	this.shape_60.setTransform(135.7,9.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMAXIAAgtIAaAAIAAAGIgSAAIAAAng");
	this.shape_61.setTransform(133.1,7.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_62.setTransform(127.4,10.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgNAdQgFgFgBgHIAIgBQABAGACACQADACAEAAQADAAADgBQADgCABgDIADgHIABgKIAAgCQgCAEgEADQgEACgEAAQgIAAgFgGQgGgFAAgJQAAgKAGgGQAGgGAIAAQAGAAAFADQAFAEADAGQACAGAAAMQAAAMgCAHQgDAHgFAEQgGAEgGAAQgHAAgFgEgAgIgVQgEAEAAAHQAAAGAEAEQAEADAEAAQAFAAAEgDQAEgEAAgHQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_63.setTransform(123.6,6.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_64.setTransform(118.3,6.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAGAgIAAgPIgbAAIAAgHIAcgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAPgAgNAKIATAAIAAgcg");
	this.shape_65.setTransform(113.5,6.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgOAbQgGgEgBgJIAJAAQABAGAEADQACADAFAAQAFAAAEgEQAEgFAAgHQAAgHgDgDQgFgDgFAAQgEAAgCABQgEACgCACIgHgBIAGggIAgAAIAAAHIgZAAIgEASQAGgEAGAAQAIAAAFAFQAHAFgBAJQAAAJgEAHQgHAHgKAAQgJAAgFgFg");
	this.shape_66.setTransform(108.7,7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_67.setTransform(103.3,6.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_68.setTransform(98.3,6.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgBAUIALgUIgLgTIAGAAIAOATIgOAUgAgSAUIAMgUIgMgTIAHAAIAMATIgMAUg");
	this.shape_69.setTransform(91.2,7.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_70.setTransform(87.4,9.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgUAgIAAg/IApAAIAAAHIggAAIAAA4g");
	this.shape_71.setTransform(84.1,6.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_72.setTransform(80.1,9.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AARAgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAaIAhAAIAAgaIAIAAIAAA/g");
	this.shape_73.setTransform(75.5,6.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_74.setTransform(71.1,9.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOAdQgHgEgDgIQgEgIAAgJQAAgKAFgHQADgHAIgEQAHgEAHAAQAKAAAGAFQAGAFAEAIIgJACQgDgHgDgDQgFgDgGAAQgGAAgGAEQgEADgCAGQgDAGAAAGQAAAIADAGQACAGAFADQAFADAFAAQAHAAAFgEQAFgEACgIIAJACQgDAKgHAGQgHAFgKAAQgKAAgGgEg");
	this.shape_75.setTransform(66.6,6.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AASAgIAAgyIgiAyIgIAAIAAg/IAIAAIAAAyIAhgyIAIAAIAAA/g");
	this.shape_76.setTransform(57.6,6.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAVAoIAAgPIgqAAIAAAPIgHAAIAAgXIAFAAQAIgMAAgiIAAgKIAmAAIAAA4IAGAAIAAAXgAgHgcIgBAXQgCANgEAJIAcAAIAAgwIgVAAg");
	this.shape_77.setTransform(51.2,7.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AARAgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAaIAhAAIAAgaIAIAAIAAA/g");
	this.shape_78.setTransform(45,6.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAUAgIgHgTIgaAAIgHATIgJAAIAYg/IAJAAIAaA/gAgDgMIgHASIAUAAIgHgRIgDgNIgDAMg");
	this.shape_79.setTransform(38.8,6.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAMAgIgLgRIgGgKQgDgDgFAAIAAAeIgIAAIAAg/IAIAAIAAAcQAGAAADgCQACgCACgJIAFgJQABgDADgBQAEgCAEAAIAFAAIAAAHIgCAAIgCAAQgDAAgCACQgDACgCAHQgDAIgDACQgCACgCABQAGABAFAKIAOAVg");
	this.shape_80.setTransform(33.5,6.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAMAUIgNgUIANgTIAHAAIgMATIAMAUgAgEAUIgOgUIAOgTIAGAAIgLATIALAUg");
	this.shape_81.setTransform(28,7.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgPAdQgIgEgDgIQgEgIAAgIQAAgPAJgJQAIgJANAAQAJAAAHAEQAHAEAEAIQAEAHAAAJQAAAKgEAIQgEAHgHAEQgIAEgIAAQgIAAgHgEgAgPgTQgGAGAAAOQAAAMAGAGQAGAHAJAAQAJAAAHgHQAGgGAAgNQAAgHgDgGQgCgGgFgDQgGgDgGAAQgIAAgHAGg");
	this.shape_82.setTransform(19.5,6.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgPAdQgIgEgDgIQgEgIAAgIQAAgPAJgJQAIgJANAAQAJAAAHAEQAHAEAEAIQAEAHAAAJQAAAKgEAIQgEAHgHAEQgIAEgIAAQgIAAgHgEgAgPgTQgGAGAAAOQAAAMAGAGQAGAHAJAAQAJAAAHgHQAGgGAAgNQAAgHgDgGQgCgGgFgDQgGgDgGAAQgIAAgHAGg");
	this.shape_83.setTransform(12.5,6.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgPAdQgIgEgDgIQgEgIAAgIQAAgPAJgJQAIgJANAAQAJAAAHAEQAHAEAEAIQAEAHAAAJQAAAKgEAIQgEAHgHAEQgIAEgIAAQgIAAgHgEgAgPgTQgGAGAAAOQAAAMAGAGQAGAHAJAAQAJAAAHgHQAGgGAAgNQAAgHgDgGQgCgGgFgDQgGgDgGAAQgIAAgHAGg");
	this.shape_84.setTransform(5.5,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgOAcQgGgFAAgIIAHgBQACAGAEADQACADAFAAQAFAAAEgEQAEgDgBgGQABgGgEgDQgDgEgGAAIgFABIABgGIABAAQAFAAADgCQAFgDAAgFQAAgFgDgDQgDgCgEAAQgEAAgDACQgDADgCAGIgHgBQABgIAFgFQAGgEAHAAQAEAAAFACQAEADADAEQACADAAAFQAAAEgCADQgDAEgEACQAGABADADQADAEAAAHQAAAIgGAGQgHAGgIAAQgIAAgGgFg");
	this.shape_85.setTransform(254.6,17);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgOAbQgFgEgBgJIAIAAQABAGADADQAEADAEAAQAFAAAEgEQAEgFAAgHQAAgHgEgDQgDgDgGAAQgDAAgEABQgDACgBACIgIgBIAHggIAeAAIAAAHIgZAAIgDASQAGgEAFAAQAJAAAGAFQAFAFABAJQgBAJgFAHQgGAHgKAAQgIAAgGgFg");
	this.shape_86.setTransform(249.6,17);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AAGAgIAAgPIgbAAIAAgHIAcgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAPgAgNAKIATAAIAAgcg");
	this.shape_87.setTransform(244.4,16.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgNAaQgHgIAAgSQAAgKADgHQACgHAEgEQAFgEAGAAQAGAAAEACQADACADAEQACAEACAGIABAOQAAALgCAHQgCAHgFAEQgEAEgIAAQgIAAgFgHgAgHgVQgFAGAAAPQABAQADAFQAEAFAEAAQAGAAAEgFQADgFAAgQQAAgPgDgFQgEgFgGAAQgEAAgDAEg");
	this.shape_88.setTransform(239.5,17);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgLAgQAAgIADgLQADgKAFgJQAFgKAGgHIgfAAIAAgIIApAAIAAAGQgGAHgGALQgHAKgCALQgCAIgBAKg");
	this.shape_89.setTransform(234.6,17);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgNAaQgHgIAAgSQAAgKACgHQADgHAEgEQAFgEAGAAQAFAAAFACQADACADAEQACAEACAGIABAOQAAALgCAHQgCAHgFAEQgEAEgIAAQgIAAgFgHgAgHgVQgFAGAAAPQABAQADAFQAEAFAEAAQAFAAAFgFQADgFAAgQQAAgPgDgFQgFgFgFAAQgEAAgDAEg");
	this.shape_90.setTransform(229.5,17);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgOAaQgGgIAAgQQAAgSAHgJQAGgHAJAAQAHAAAFAEQAFAFABAHIgIABQgBgFgCgCQgDgDgFAAQgDAAgCACQgEACgCAGQgCAFAAAKQACgFAEgCQAFgCADAAQAIAAAGAGQAFAFAAAJQAAAGgCAFQgDAFgFADQgEADgGAAQgJAAgGgHgAgIABQgDAEAAAGIABAIQACADADACQADACADAAQAFAAADgEQAEgEAAgHQAAgGgDgEQgEgDgFAAQgFAAgEADg");
	this.shape_91.setTransform(224.5,17);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgNAdQgFgFgBgHIAIgBQABAGACACQADACAEAAQADAAADgBQADgCABgDQACgDABgEIABgKIAAgCQgCAEgEADQgEACgEAAQgIAAgFgGQgGgFAAgJQAAgKAGgGQAGgGAIAAQAGAAAFADQAFAEADAGQACAGAAAMQAAAMgCAHQgDAHgFAEQgGAEgGAAQgHAAgFgEgAgIgVQgEAEAAAHQAAAGAEAEQAEADAEAAQAFAAAEgDQAEgEAAgHQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_92.setTransform(219.5,17);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgLAgQAAgIADgLQADgKAFgJQAFgKAGgHIgfAAIAAgIIApAAIAAAGQgGAHgGALQgHAKgCALQgCAIgBAKg");
	this.shape_93.setTransform(214.6,17);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgLAgQAAgIADgLQADgKAFgJQAFgKAGgHIgfAAIAAgIIApAAIAAAGQgGAHgGALQgHAKgCALQgCAIgBAKg");
	this.shape_94.setTransform(209.6,17);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AAGAgIAAgPIgbAAIAAgHIAcgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAPgAgNAKIATAAIAAgcg");
	this.shape_95.setTransform(204.4,16.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgNAaQgHgIAAgSQAAgKACgHQADgHAFgEQAEgEAGAAQAFAAAEACQAEACADAEQADAEABAGIABAOQAAALgCAHQgCAHgFAEQgEAEgIAAQgIAAgFgHgAgIgVQgDAGAAAPQgBAQAEAFQAEAFAEAAQAFAAAEgFQAEgFAAgQQAAgPgEgFQgEgFgFAAQgFAAgDAEg");
	this.shape_96.setTransform(199.5,17);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_97.setTransform(194.2,16.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AARAgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAaIAhAAIAAgaIAIAAIAAA/g");
	this.shape_98.setTransform(186.3,16.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgXAgIAAg/IAXAAIAKAAQAEABAEACQACADACAEQACAEAAAEQAAAJgEAEQgGAGgNAAIgQAAIAAAagAgPgBIAQAAQAIAAADgDQAEgDAAgFQAAgEgCgDQgCgDgDgBIgIgBIgQAAg");
	this.shape_99.setTransform(180.2,16.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgUAgIAAg/IApAAIAAAHIggAAIAAA4g");
	this.shape_100.setTransform(175,16.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgPAdQgIgEgDgIQgEgIAAgIQAAgPAJgJQAIgJANAAQAJAAAHAEQAHAEAEAIQAEAHAAAJQAAAKgEAIQgEAHgHAEQgIAEgIAAQgIAAgHgEgAgPgTQgGAGAAAOQAAAMAGAGQAGAHAJAAQAJAAAHgHQAGgGAAgNQAAgHgDgGQgCgGgFgDQgGgDgGAAQgIAAgHAGg");
	this.shape_101.setTransform(168.7,16.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgOAbQgFgEgCgJIAJAAQABAGAEADQADADAEAAQAFAAAEgEQAEgFAAgHQAAgHgDgDQgFgDgFAAQgEAAgCABQgEACgCACIgHgBIAGggIAgAAIAAAHIgZAAIgEASQAGgEAGAAQAIAAAFAFQAHAFAAAJQAAAJgGAHQgGAHgKAAQgIAAgGgFg");
	this.shape_102.setTransform(160.2,17);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_103.setTransform(154.9,16.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgOAaQgGgIAAgSQAAgKADgHQACgHAFgEQAEgEAGAAQAGAAAEACQADACADAEIAEAKIABAOQAAALgCAHQgDAHgEAEQgFAEgHAAQgIAAgGgHgAgHgVQgEAGgBAPQAAAQAEAFQAEAFAEAAQAGAAAEgFQADgFAAgQQAAgPgDgFQgEgFgGAAQgEAAgDAEg");
	this.shape_104.setTransform(150.2,17);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgVAgIABgFQADgFADgEIAKgKQAJgIAFgEQADgFAAgFQAAgEgDgEQgDgDgGAAQgFAAgDAEQgEADAAAGIgIgBQABgJAFgFQAGgEAIAAQAKAAAFAFQAFAFAAAHIgBAIIgGAHIgMALIgIAIIgDAFIAeAAIAAAHg");
	this.shape_105.setTransform(145.1,16.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_106.setTransform(139.9,16.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgOAbQgGgEgBgJIAJAAQABAGAEADQACADAFAAQAFAAAEgEQAEgFAAgHQAAgHgDgDQgFgDgFAAQgEAAgCABQgEACgCACIgHgBIAGggIAgAAIAAAHIgZAAIgEASQAGgEAGAAQAIAAAFAFQAHAFgBAJQAAAJgEAHQgHAHgKAAQgJAAgFgFg");
	this.shape_107.setTransform(135.2,17);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AAGAgIAAgPIgbAAIAAgHIAcgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAPgAgNAKIATAAIAAgcg");
	this.shape_108.setTransform(130,16.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgOAaQgGgIAAgSQAAgKACgHQADgHAFgEQAEgEAGAAQAGAAADACQAEACADAEQADAEABAGIABAOQAAALgCAHQgDAHgEAEQgEAEgIAAQgIAAgGgHgAgIgVQgDAGAAAPQgBAQAEAFQAEAFAEAAQAGAAADgFQAEgFAAgQQAAgPgEgFQgDgFgGAAQgFAAgDAEg");
	this.shape_109.setTransform(125.2,17);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgLAgQAAgIADgLQADgKAFgJQAFgKAGgHIgfAAIAAgIIApAAIAAAGQgGAHgGALQgHAKgCALQgCAIgBAKg");
	this.shape_110.setTransform(120.2,17);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgLAgQAAgIADgLQADgKAFgJQAFgKAGgHIgfAAIAAgIIApAAIAAAGQgGAHgGALQgHAKgCALQgCAIgBAKg");
	this.shape_111.setTransform(115.2,17);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AARAgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAaIAhAAIAAgaIAIAAIAAA/g");
	this.shape_112.setTransform(106.9,16.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AARAgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAaIAhAAIAAgaIAIAAIAAA/g");
	this.shape_113.setTransform(100.4,16.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AASAgIAAgyIgiAyIgIAAIAAg/IAIAAIAAAyIAhgyIAIAAIAAA/g");
	this.shape_114.setTransform(94,16.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgDAFIAAgIIAIAAIAAAIg");
	this.shape_115.setTransform(87,19.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgOAbQgGgFAAgJQAAgGADgEQADgEAGgBQgFgCgCgDQgDgEAAgEQAAgHAGgFQAFgFAHAAQAIAAAGAFQAFAFAAAHQAAAEgDAEQgCADgFACQAGACADADQADAEAAAGQAAAJgFAFQgGAGgKAAQgIAAgGgGgAgIAEQgEAEAAAFQAAAEACADQABADADACIAGABQAGAAAEgDQADgEAAgGQAAgFgEgEQgDgEgGAAQgFAAgDAEgAgGgXQgDADAAAEQAAAFADADQACADAEAAQAFAAADgDQADgDAAgEQAAgFgDgCQgDgDgFAAQgDAAgDACg");
	this.shape_116.setTransform(83.2,17);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgDAFIAAgIIAIAAIAAAIg");
	this.shape_117.setTransform(77,19.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AASAeIAAgNIgjAAIAAANIgHAAIAAgUIAEAAQAJgKgBgdIAgAAIAAAnIAFAAIAAAUgAgMAKIAYAAIAAggIgRAAQgBAWgGAKg");
	this.shape_118.setTransform(73,18.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgEAIQABgBAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_119.setTransform(66.7,20.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AALAgIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtgAgHgXQgEgDAAgFIAFAAIACAEQACACACAAQAEAAACgCQACgBAAgDIAGAAQgBAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_120.setTransform(63,16.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgLAEIAAgHIAXAAIAAAHg");
	this.shape_121.setTransform(59,17.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgUAgIABgFQACgFADgEIAKgKQAKgIADgEQAEgFAAgFQAAgEgDgEQgEgDgFAAQgFAAgDAEQgEADABAGIgJgBQABgJAFgFQAGgEAIAAQAJAAAGAFQAFAFAAAHIgCAIIgEAHIgNALIgIAIIgDAFIAeAAIAAAHg");
	this.shape_122.setTransform(54.9,16.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AALAgIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtgAgHgXQgEgDAAgFIAFAAIACAEQACACACAAQAEAAACgCQACgBAAgDIAGAAQgBAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_123.setTransform(47.4,16.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AALAXIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtg");
	this.shape_124.setTransform(42.4,17.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AAJAXIgJgOQgBgFgDgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAAVIgIAAIAAgtIAIAAIAAAUQAEAAABgCIADgIIAEgHIAEgDIAFAAIADAAIAAAGIgDAAIgEABIgCAGIgEAGIgDADQAEABAFAIIAIAOg");
	this.shape_125.setTransform(38.2,17.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_126.setTransform(33.8,17.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AALAXIAAgUIgVAAIAAAUIgIAAIAAgtIAIAAIAAATIAVAAIAAgTIAIAAIAAAtg");
	this.shape_127.setTransform(28.9,17.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AALAXIAAgiIgVAiIgIAAIAAgtIAIAAIAAAiIAVgiIAIAAIAAAtg");
	this.shape_128.setTransform(23.9,17.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AAaAeIAAgNIg6AAIAAguIAIAAIAAAnIASAAIAAgnIAHAAIAAAnIASAAIAAgnIAJAAIAAAnIAEAAIAAAUg");
	this.shape_129.setTransform(17.9,18.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_130.setTransform(11.5,17.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgYAgIAAg/IAYAAIAKAAQAFABADACQACADACAEQACAEABAEQgBAJgFAEQgFAGgNAAIgQAAIAAAagAgPgBIAQAAQAIAAADgDQAEgDAAgFQAAgEgCgDQgCgDgDgBIgIgBIgQAAg");
	this.shape_131.setTransform(6.2,16.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AASAeIAAgNIgjAAIAAANIgHAAIAAgUIAEAAQAJgKgBgdIAgAAIAAAnIAFAAIAAAUgAgMAKIAYAAIAAggIgRAAQgBAWgGAKg");
	this.shape_132.setTransform(204.3,9.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgRAKIAIgBQAAAEAEACQADADADAAQAEAAADgCQACgDAAgDQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgGgBIgCAAIAAgFIAGAAQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgCgCgDAAQgGAAgDAIIgHgBQADgNANAAQAHAAAEAEQAFAEAAAFQAAAGgGADQAEABACADQABADAAAEQAAAGgFAEQgEAEgIAAQgPAAgDgOg");
	this.shape_133.setTransform(199.7,8.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AgPASQgFgGgBgMQABgKAFgHQAHgGAIAAQAJAAAHAGQAFAGAAALIAAACIgiAAQABAIAEAEQAEAEAFAAQAEAAADgCQADgDACgFIAIABQgCAHgFAEQgGAEgHAAQgJAAgHgGgAgIgNQgDADgBAGIAZAAQAAgFgDgDQgEgFgGAAQgEAAgEAEg");
	this.shape_134.setTransform(195.2,8.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_135.setTransform(190.1,8.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgTAhIAAhAIAHAAIAAAGQACgDAEgCQADgCADAAQAGAAAFADQAFADACAGQACAFAAAHQAAAHgCAFQgDAGgFADQgFADgFAAQgDAAgDgCIgFgEIAAAXgAgIgVQgEAFAAAJQAAAIADAEQAEAEAFAAQAFAAADgEQAEgFAAgIQAAgJgEgEQgDgFgFAAQgEAAgEAFg");
	this.shape_136.setTransform(185.3,9.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AARAgIAAg4IghAAIAAA4IgIAAIAAg/IAxAAIAAA/g");
	this.shape_137.setTransform(179.4,7.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_138.setTransform(172.4,11.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgQAVQgEgEAAgGIABgGQACgDACgCQADgBADAAIAHgCIANgCIAAgCQAAgFgCgCQgDgDgGAAQgFAAgCACQgDACgBAFIgIgBQABgFACgDQADgDAEgCQAFgBAFAAIAKABIAFADIADAGIAAAHIAAAKQAAALABADQAAADABACIgIAAQgBgCAAgEQgFAEgEACQgDABgFAAQgHAAgEgDgAgBADIgHABIgDADIgBAEQAAADACACQADACAEAAQAEAAADgCQAEgCACgDIABgIIAAgDQgEACgIABg");
	this.shape_139.setTransform(168.7,8.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AgSAXIAAgtIASAAIAJABQADABADADQACADAAAEIgBAGQgCACgDACQAEAAACADQACADAAAEQAAAHgFADQgEADgIAAgAgKARIAKAAQAGAAACgCQADgBAAgEIgCgEQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgHAAIgJAAgAgKgDIAIAAIAGAAIADgCIACgEQAAgEgDgBQgCgCgGAAIgIAAg");
	this.shape_140.setTransform(163.9,8.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AAIAXIgIgOQgBgFgCgBQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAAVIgIAAIAAgtIAIAAIAAAUQADAAACgCIAEgIIADgHIADgDIAGAAIACAAIAAAGIgCAAIgEABIgDAGIgDAGIgEADQAFABAEAIIAJAOg");
	this.shape_141.setTransform(159.8,8.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AgNASQgGgGAAgMQAAgGACgGQADgGAFgDQAFgCAFAAQAIAAAEADQAFAEACAHIgIABQgBgEgDgDQgDgCgEAAQgFAAgDAEQgEAFAAAIQAAAJADAFQAEAEAFAAQAFAAADgDQADgDABgGIAHABQgBAIgFAFQgFAEgIAAQgJAAgFgGg");
	this.shape_142.setTransform(155.3,8.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgPASQgGgGAAgMQAAgMAHgGQAGgFAIAAQAKAAAGAGQAGAGAAALQAAAIgDAFQgCAGgGACQgFADgGAAQgJAAgGgGgAgJgMQgEAEAAAIQAAAJAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgIgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_143.setTransform(150.4,8.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AAXAgIAAg1IgTA1IgHAAIgSg2IAAA2IgJAAIAAg/IANAAIAQAsIACAKIADgKIAPgsIAMAAIAAA/g");
	this.shape_144.setTransform(144.2,7.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgDAEIAAgIIAIAAIAAAIg");
	this.shape_145.setTransform(136.7,10.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AgMAXIAAgtIAZAAIAAAGIgRAAIAAAng");
	this.shape_146.setTransform(134.1,8.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgEAIQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAAgCAAgDIgDAAIAAgJIAIAAIAAAJQAAAEgCADQgCADgDACg");
	this.shape_147.setTransform(128.4,11.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgNAdQgFgFgBgHIAIgBQABAGACACQADACAEAAQADAAADgBQADgCABgDIADgHIABgKIAAgCQgCAEgEADQgEACgEAAQgIAAgFgGQgGgFAAgJQAAgKAGgGQAGgGAIAAQAGAAAFADQAFAEADAGQACAGAAAMQAAAMgCAHQgDAHgFAEQgGAEgGAAQgHAAgFgEgAgIgVQgEAEAAAHQAAAGAEAEQAEADAEAAQAFAAAEgDQAEgEAAgHQAAgGgEgEQgEgEgFAAQgEAAgEAEg");
	this.shape_148.setTransform(124.6,7.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_149.setTransform(119.3,7.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AAGAgIAAgPIgbAAIAAgHIAcgpIAHAAIAAApIAIAAIAAAHIgIAAIAAAPgAgNAKIATAAIAAgcg");
	this.shape_150.setTransform(114.5,7.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AgOAbQgFgEgCgJIAJAAQABAGAEADQACADAFAAQAFAAAEgEQAEgFAAgHQAAgHgDgDQgEgDgGAAQgEAAgCABQgDACgDACIgHgBIAGggIAgAAIAAAHIgZAAIgEASQAGgEAFAAQAJAAAGAFQAFAFAAAJQAAAJgEAHQgHAHgKAAQgJAAgFgFg");
	this.shape_151.setTransform(109.7,8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_152.setTransform(104.3,7.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AAEAgIAAgxQgDADgEACIgIAEIAAgHQAHgDAEgFQAFgEACgEIAFAAIAAA/g");
	this.shape_153.setTransform(99.3,7.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgBAUIALgUIgLgTIAGAAIAOATIgOAUgAgSAUIAMgUIgMgTIAHAAIANATIgNAUg");
	this.shape_154.setTransform(92.2,8.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_155.setTransform(88.4,10.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgUAgIAAg/IApAAIAAAHIggAAIAAA4g");
	this.shape_156.setTransform(85.1,7.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AgDAEIAAgIIAIAAIAAAIg");
	this.shape_157.setTransform(81.1,10.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AARAgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAaIAhAAIAAgaIAIAAIAAA/g");
	this.shape_158.setTransform(76.5,7.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgDAEIAAgIIAIAAIAAAIg");
	this.shape_159.setTransform(72.1,10.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgOAdQgGgEgEgIQgEgIAAgJQABgKAEgHQADgHAHgEQAIgEAHAAQAKAAAGAFQAGAFAEAIIgJACQgDgHgEgDQgEgDgGAAQgHAAgFAEQgEADgCAGQgCAGgBAGQABAIACAGQACAGAFADQAFADAFAAQAHAAAFgEQAFgEACgIIAJACQgDAKgHAGQgHAFgKAAQgJAAgHgEg");
	this.shape_160.setTransform(67.6,7.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AASAgIAAgyIgiAyIgIAAIAAg/IAIAAIAAAyIAhgyIAIAAIAAA/g");
	this.shape_161.setTransform(58.6,7.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AAVAoIAAgPIgpAAIAAAPIgIAAIAAgXIAFAAQAIgMAAgiIAAgKIAmAAIAAA4IAGAAIAAAXgAgHgcIgBAXQgCANgEAJIAdAAIAAgwIgWAAg");
	this.shape_162.setTransform(52.2,8.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AARAgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAaIAhAAIAAgaIAIAAIAAA/g");
	this.shape_163.setTransform(46,7.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AAUAgIgHgTIgaAAIgHATIgJAAIAZg/IAIAAIAaA/gAgDgMIgHASIAUAAIgGgRIgEgNIgDAMg");
	this.shape_164.setTransform(39.8,7.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AAMAgIgLgRIgGgKQgDgDgFAAIAAAeIgIAAIAAg/IAIAAIAAAcQAGAAADgCQACgCACgJIAFgJQABgDADgBQAEgCAEAAIAFAAIAAAHIgBAAIgDAAQgDAAgCACQgCACgDAHQgEAIgBACQgDACgCABQAGABAFAKIAOAVg");
	this.shape_165.setTransform(34.5,7.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AAMAUIgNgUIANgTIAHAAIgMATIAMAUgAgEAUIgOgUIAOgTIAGAAIgLATIALAUg");
	this.shape_166.setTransform(29,8.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgPAdQgIgEgDgIQgEgIAAgIQAAgPAJgJQAIgJANAAQAJAAAHAEQAHAEAEAIQAEAHAAAJQAAAKgEAIQgEAHgHAEQgIAEgIAAQgIAAgHgEgAgPgTQgGAGAAAOQAAAMAGAGQAGAHAJAAQAJAAAHgHQAGgGAAgNQAAgHgDgGQgCgGgFgDQgGgDgGAAQgIAAgHAGg");
	this.shape_167.setTransform(20.5,7.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgPAdQgIgEgDgIQgEgIAAgIQAAgPAJgJQAIgJANAAQAJAAAHAEQAHAEAEAIQAEAHAAAJQAAAKgEAIQgEAHgHAEQgIAEgIAAQgIAAgHgEgAgPgTQgGAGAAAOQAAAMAGAGQAGAHAJAAQAJAAAHgHQAGgGAAgNQAAgHgDgGQgCgGgFgDQgGgDgGAAQgIAAgHAGg");
	this.shape_168.setTransform(13.5,7.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgPAdQgIgEgDgIQgEgIAAgIQAAgPAJgJQAIgJANAAQAJAAAHAEQAHAEAEAIQAEAHAAAJQAAAKgEAIQgEAHgHAEQgIAEgIAAQgIAAgHgEgAgPgTQgGAGAAAOQAAAMAGAGQAGAHAJAAQAJAAAHgHQAGgGAAgNQAAgHgDgGQgCgGgFgDQgGgDgGAAQgIAAgHAGg");
	this.shape_169.setTransform(6.5,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,288,24.1), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(404));

	// hfree
	this.instance = new lib.hfree();
	this.instance.parent = this;
	this.instance.setTransform(22.5,222.9,1,1,0,0,0,16.1,3.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7,cjs.Ease.get(1)).wait(59).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(256).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(59).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// legal
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(149.9,237.3,1,1,0,0,0,143.5,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(404));

	// logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("Ag5A6QgYgYAAgiQgBghAZgYQAXgZAiAAQAiAAAYAZQAYAYABAhQgBAigYAYQgYAYgiAAQgiAAgXgYgAgygyQgUAWAAAcQAAAdAUAWQAVAVAdAAQAeAAAUgVQAUgVABgeQAAgcgVgWQgUgUgegBQgdABgVAUgAAWAtIAAgCIAAgDIAAgHQAAgPgJgGQgEgCgNgBIgMAAIAAAkIgQAAIAAhaIAgAAQAPAAAIADQAOAGAAASQAAALgJAGQgEACgJACQALABAEAHQAFAHAAAIIABASIABABgAgQgBIAOAAQAKAAAEgCQAKgEAAgKQgBgKgFgEQgIgDgLAAIgNAAg");
	this.shape_1.setTransform(73.2,61.7,0.291,0.291);

	this.instance_2 = new lib.ClipGroup_10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.5,39.8,0.291,0.291,0,0,0,139.5,139.5);

	this.instance_3 = new lib.ClipGroup_1_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(58.8,40.5,0.291,0.291,0,0,0,55.1,52.3);

	this.instance_4 = new lib.ClipGroup_2_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(50.6,46.3,0.291,0.291,0,0,0,16.5,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkeKoQiFg4hmhmQhmhng4iEQg5iJAAiWQAAiVA5iJQA4iFBmhmQBmhmCFg4QCJg6CVAAQCWAACJA6QCEA4BnBmQBlBmA5CFQA6CJAACVQAACWg6CJQg5CEhlBnQhnBmiEA4QiJA6iWAAQiVAAiJg6gAidA8IiVIrQCSBICgAAQEcAADJjJQDJjKAAkcQAAhlgchggAqKDZQAnB1BNBgQBMBfBpA/ICIn8IiyA4Ig0DFIg8ASIA1jEgAoxmKQh9CxAADZQAABcAZBcIDZhFIDLr1QjGBKh6CugAi1qWIjLL2ICyg4IB4nBIA8gRIh4G/IMZj7QhIjKivh+Qi0iAjcAAQhaAAhbAYg");
	this.shape_2.setTransform(51,39.8,0.291,0.291);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjhCiQgOgTAHglQAIgnAZgfQAagfAhgIQAigKAQASQAQASgIAnQgGAfgTAbQgSAbgZAPgAiUAmQgLADgJALQgNAPgFAZQgFAZAIAJQAGAHALgDQALgDAKgLQANgQAFgZQAEgZgIgJQgEgEgGAAIgHABgAk2CiQAKgPAEgVQAFgZgIgJQgGgHgLADQgLADgKAMQgNAPgEAZQgDANABAGIgtAAIABgGQAIgnAZgeQAaggAhgJQAhgKAQATQAQASgHAnQgGAbgNAXgAg/gcIAygOIAFBhIAAAAIAxh1IA0gQIhZDBIg1ATgABzhWIBlgfIgJAtIg1ATIgEAWIAtgSIgIAtIgtANIgFAWIA3gVIgMAzIhnAggAEHiEIBfgaQAWgHAMAJQANAJgEAYQgIAhgaARQAUACgFAiQgEAfACAFIgyAMQgBgHACgRQACgRgBgFQgDgJgNADIgXADIgPBFIgzAOgAFIhvIgYAGIgHAiIAagHQAWgGAEgRQADgMgMAAQgFAAgHACg");
	this.shape_3.setTransform(58.3,40.6,0.291,0.291);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhyAVQgPgQAFgkIAtAAQAAAOAIAEQAGAEAIgDQAOgFAKgOIAoAAQgbAvgtANQgMADgJAAQgRAAgLgLgAAzgfIBLAAQgLAHgNAEQgMADgJAAQgTAAgLgOg");
	this.shape_4.setTransform(50.2,46.3,0.291,0.291);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#76231F").s().p("AkeKoQiFg4hmhmQhlhmg5iFQg6iJAAiWQAAiVA6iJQA5iEBlhnQBmhmCFg4QCJg6CVAAQCWAACJA6QCFA4BmBmQBlBnA5CEQA5CJABCVQgBCWg5CJQg5CFhlBmQhmBmiFA4QiJA6iWAAQiVAAiJg6gAidA9IiVIqQCRBIChAAQEdAADIjJQDJjJAAkdQAAhlgdhggAqKDZQAnB1BNBgQBMBfBpA/ICIn8IixA4Ig1DFIg8ASIA0jEgAoxmKQh9CxAADZQAABfAZBZIDZhFIDLr1QjGBKh6CugAi1qVIjKL1ICwg4IB5nAIA8gSIh4G/IMZj7QhIjKivh9QiziBjdAAQhcAAhZAZg");
	this.shape_5.setTransform(51.6,40.3,0.291,0.291);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#76231F").s().p("AjhCiQgOgTAHglQAIgnAZgfQAagfAigIQAhgKAQASQAQASgIAnQgGAggSAaQgTAbgZAPgAiUAmQgLADgJAMQgNAPgFAZQgFAZAIAJQAGAHALgEQALgDAKgLQANgQAFgZQAEgZgIgJQgEgEgGAAIgHABgAk2CiQAKgPAEgVQAFgZgIgJQgGgHgLADQgLADgKAMQgNAPgEAZQgCAKAAAJIgtAAIABgGQAIgnAZgeQAagfAhgKQAigKAQATQAPASgHAnQgGAbgNAXgAg/gcIAygOIAFBhIAAAAIAxh1IA0gQIhZDCIg1ASgAB0hWIBkgfIgJAtIg1ATIgEAWIAtgRIgIAsIgtANIgFAWIA3gVIgMAzIhnAggAEHiEIBfgaQAXgHAMAJQAMAJgEAYQgIAigaAQQATACgEAiQgFAeADAGIgyANQgBgIACgRQACgRgBgFQgDgJgNADIgXADIgOBFIg0AOgAFIhvIgYAGIgHAjIAagIQAWgGAEgRQACgIgFgDQgCgBgEAAIgMACg");
	this.shape_6.setTransform(58.8,41,0.291,0.291);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#76231F").s().p("AhyAVQgPgRAFgjIAtAAQABAZAVgGQANgEALgPIAoAAQgbAugtAOQgLADgKAAQgRAAgLgLgAAzgfIBLAAQgLAHgNADQgMAEgJAAQgTAAgLgOg");
	this.shape_7.setTransform(50.8,46.7,0.291,0.291);

	this.instance_5 = new lib.ClipGroup_3_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(51.1,39.5,0.291,0.291,0,0,0,158.8,158.8);

	this.instance_6 = new lib.ClipGroup_4_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(51.1,39.5,0.291,0.291,0,0,0,161.7,161.8);

	this.instance_7 = new lib.ClipGroup_5_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(51.1,39.5,0.291,0.291,0,0,0,169.5,169.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EggOAVJMAAAgqRMBAeAAAMgLcAqRg");
	this.shape_8.setTransform(60,39.4,0.291,0.291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_1}]}).wait(404));

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_330 = new cjs.Graphics().p("Aj6KNICJnqIeXAAIiJHqg");
	var mask_graphics_331 = new cjs.Graphics().p("AnfKNICInqIeYAAIiJHqg");
	var mask_graphics_332 = new cjs.Graphics().p("AqhKNICInqIeYAAIiJHqg");
	var mask_graphics_333 = new cjs.Graphics().p("AtAKNICJnqIeXAAIiJHqg");
	var mask_graphics_334 = new cjs.Graphics().p("Au8KNICJnqIeYAAIiJHqg");
	var mask_graphics_335 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_graphics_336 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_graphics_337 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_graphics_396 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_graphics_397 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_graphics_398 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_graphics_399 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_graphics_400 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_graphics_401 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_graphics_402 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_graphics_403 = new cjs.Graphics().p("AwVKNICJnqIeXAAIiIHqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(330).to({graphics:mask_graphics_330,x:183,y:65.3}).wait(1).to({graphics:mask_graphics_331,x:160.1,y:65.3}).wait(1).to({graphics:mask_graphics_332,x:140.7,y:65.3}).wait(1).to({graphics:mask_graphics_333,x:124.8,y:65.3}).wait(1).to({graphics:mask_graphics_334,x:112.5,y:65.3}).wait(1).to({graphics:mask_graphics_335,x:103.3,y:65.3}).wait(1).to({graphics:mask_graphics_336,x:92.7,y:65.3}).wait(1).to({graphics:mask_graphics_337,x:89.2,y:65.3}).wait(59).to({graphics:mask_graphics_396,x:89.2,y:65.3}).wait(1).to({graphics:mask_graphics_397,x:37.6,y:65.3}).wait(1).to({graphics:mask_graphics_398,x:-6,y:65.3}).wait(1).to({graphics:mask_graphics_399,x:-41.7,y:65.3}).wait(1).to({graphics:mask_graphics_400,x:-69.5,y:65.3}).wait(1).to({graphics:mask_graphics_401,x:-89.3,y:65.3}).wait(1).to({graphics:mask_graphics_402,x:-101.2,y:65.3}).wait(1).to({graphics:mask_graphics_403,x:-104.6,y:65.3}).wait(1));

	// txt6
	this.instance_8 = new lib.txt6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(75.6,107.6,0.792,0.792,0,0,0,71.4,21.8);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(330).to({_off:false},0).wait(74));

	// mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_198 = new cjs.Graphics().p("Aj6KNICJnqIeXAAIiJHqg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AnfKNICInqIeYAAIiJHqg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AqhKNICInqIeYAAIiJHqg");
	var mask_1_graphics_201 = new cjs.Graphics().p("AtAKNICJnqIeXAAIiJHqg");
	var mask_1_graphics_202 = new cjs.Graphics().p("Au8KNICJnqIeYAAIiJHqg");
	var mask_1_graphics_203 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_1_graphics_205 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_1_graphics_330 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_1_graphics_331 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_1_graphics_332 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_1_graphics_333 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_1_graphics_334 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_1_graphics_335 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_1_graphics_336 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_1_graphics_337 = new cjs.Graphics().p("AwVKNICJnqIeXAAIiIHqg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(198).to({graphics:mask_1_graphics_198,x:183,y:65.3}).wait(1).to({graphics:mask_1_graphics_199,x:160.1,y:65.3}).wait(1).to({graphics:mask_1_graphics_200,x:140.7,y:65.3}).wait(1).to({graphics:mask_1_graphics_201,x:124.8,y:65.3}).wait(1).to({graphics:mask_1_graphics_202,x:112.5,y:65.3}).wait(1).to({graphics:mask_1_graphics_203,x:103.3,y:65.3}).wait(1).to({graphics:mask_1_graphics_204,x:92.7,y:65.3}).wait(1).to({graphics:mask_1_graphics_205,x:89.2,y:65.3}).wait(125).to({graphics:mask_1_graphics_330,x:89.2,y:65.3}).wait(1).to({graphics:mask_1_graphics_331,x:37.6,y:65.3}).wait(1).to({graphics:mask_1_graphics_332,x:-6,y:65.3}).wait(1).to({graphics:mask_1_graphics_333,x:-41.7,y:65.3}).wait(1).to({graphics:mask_1_graphics_334,x:-69.5,y:65.3}).wait(1).to({graphics:mask_1_graphics_335,x:-89.3,y:65.3}).wait(1).to({graphics:mask_1_graphics_336,x:-101.2,y:65.3}).wait(1).to({graphics:mask_1_graphics_337,x:-104.6,y:65.3}).wait(67));

	// txt4
	this.instance_9 = new lib.txt4();
	this.instance_9.parent = this;
	this.instance_9.setTransform(78,107.6,0.871,0.871,0,0,0,68.2,6.3);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(198).to({_off:false},0).wait(132).to({_off:true},8).wait(66));

	// mask1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_132 = new cjs.Graphics().p("Aj6KNICJnqIeXAAIiJHqg");
	var mask_2_graphics_133 = new cjs.Graphics().p("AnfKNICInqIeYAAIiJHqg");
	var mask_2_graphics_134 = new cjs.Graphics().p("AqhKNICInqIeYAAIiJHqg");
	var mask_2_graphics_135 = new cjs.Graphics().p("AtAKNICJnqIeXAAIiJHqg");
	var mask_2_graphics_136 = new cjs.Graphics().p("Au8KNICJnqIeYAAIiJHqg");
	var mask_2_graphics_137 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_2_graphics_138 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_2_graphics_139 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_2_graphics_198 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_2_graphics_201 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_2_graphics_202 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_2_graphics_203 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_2_graphics_204 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_2_graphics_205 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(132).to({graphics:mask_2_graphics_132,x:183,y:65.3}).wait(1).to({graphics:mask_2_graphics_133,x:160.1,y:65.3}).wait(1).to({graphics:mask_2_graphics_134,x:140.7,y:65.3}).wait(1).to({graphics:mask_2_graphics_135,x:124.8,y:65.3}).wait(1).to({graphics:mask_2_graphics_136,x:112.5,y:65.3}).wait(1).to({graphics:mask_2_graphics_137,x:103.3,y:65.3}).wait(1).to({graphics:mask_2_graphics_138,x:92.7,y:65.3}).wait(1).to({graphics:mask_2_graphics_139,x:89.2,y:65.3}).wait(59).to({graphics:mask_2_graphics_198,x:89.2,y:65.3}).wait(1).to({graphics:mask_2_graphics_199,x:40.5,y:65.3}).wait(1).to({graphics:mask_2_graphics_200,x:-0.7,y:65.3}).wait(1).to({graphics:mask_2_graphics_201,x:-34.4,y:65.3}).wait(1).to({graphics:mask_2_graphics_202,x:-60.6,y:65.3}).wait(1).to({graphics:mask_2_graphics_203,x:-79.4,y:65.3}).wait(1).to({graphics:mask_2_graphics_204,x:-90.6,y:65.3}).wait(1).to({graphics:mask_2_graphics_205,x:-94.3,y:65.3}).wait(199));

	// txt3
	this.instance_10 = new lib.txt3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(65,107.6,0.871,0.871,0,0,0,53.3,14.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(132).to({_off:false},0).to({_off:true},74).wait(198));

	// mask1 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_66 = new cjs.Graphics().p("Aj6KNICJnqIeXAAIiJHqg");
	var mask_3_graphics_67 = new cjs.Graphics().p("AnfKNICInqIeYAAIiJHqg");
	var mask_3_graphics_68 = new cjs.Graphics().p("AqhKNICInqIeYAAIiJHqg");
	var mask_3_graphics_69 = new cjs.Graphics().p("AtAKNICJnqIeXAAIiJHqg");
	var mask_3_graphics_70 = new cjs.Graphics().p("Au8KNICJnqIeYAAIiJHqg");
	var mask_3_graphics_71 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_3_graphics_72 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_3_graphics_73 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_3_graphics_132 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_3_graphics_133 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_3_graphics_134 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_3_graphics_135 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_3_graphics_136 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_3_graphics_137 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_3_graphics_138 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_3_graphics_139 = new cjs.Graphics().p("AwVKNICJnqIeXAAIiIHqg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(66).to({graphics:mask_3_graphics_66,x:183,y:65.3}).wait(1).to({graphics:mask_3_graphics_67,x:160.1,y:65.3}).wait(1).to({graphics:mask_3_graphics_68,x:140.7,y:65.3}).wait(1).to({graphics:mask_3_graphics_69,x:124.8,y:65.3}).wait(1).to({graphics:mask_3_graphics_70,x:112.5,y:65.3}).wait(1).to({graphics:mask_3_graphics_71,x:103.3,y:65.3}).wait(1).to({graphics:mask_3_graphics_72,x:92.7,y:65.3}).wait(1).to({graphics:mask_3_graphics_73,x:89.2,y:65.3}).wait(59).to({graphics:mask_3_graphics_132,x:89.2,y:65.3}).wait(1).to({graphics:mask_3_graphics_133,x:37.6,y:65.3}).wait(1).to({graphics:mask_3_graphics_134,x:-6,y:65.3}).wait(1).to({graphics:mask_3_graphics_135,x:-41.7,y:65.3}).wait(1).to({graphics:mask_3_graphics_136,x:-69.5,y:65.3}).wait(1).to({graphics:mask_3_graphics_137,x:-89.3,y:65.3}).wait(1).to({graphics:mask_3_graphics_138,x:-101.2,y:65.3}).wait(1).to({graphics:mask_3_graphics_139,x:-104.6,y:65.3}).wait(265));

	// txt2
	this.instance_11 = new lib.txt2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(60.8,107.6,0.871,0.871,0,0,0,48.5,14.5);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(66).to({_off:false},0).to({_off:true},74).wait(264));

	// mask1 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_0 = new cjs.Graphics().p("Aj6KNICJnqIeXAAIiJHqg");
	var mask_4_graphics_1 = new cjs.Graphics().p("AnfKNICInqIeYAAIiJHqg");
	var mask_4_graphics_2 = new cjs.Graphics().p("AqhKNICInqIeYAAIiJHqg");
	var mask_4_graphics_3 = new cjs.Graphics().p("AtAKNICJnqIeXAAIiJHqg");
	var mask_4_graphics_4 = new cjs.Graphics().p("Au8KNICJnqIeYAAIiJHqg");
	var mask_4_graphics_5 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_4_graphics_6 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_4_graphics_7 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_4_graphics_66 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_4_graphics_67 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_4_graphics_68 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_4_graphics_69 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_4_graphics_70 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_4_graphics_71 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_4_graphics_72 = new cjs.Graphics().p("AwQKNICJnqIeYAAIiJHqg");
	var mask_4_graphics_73 = new cjs.Graphics().p("AwVKNICJnqIeXAAIiIHqg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:mask_4_graphics_0,x:183,y:65.3}).wait(1).to({graphics:mask_4_graphics_1,x:160.1,y:65.3}).wait(1).to({graphics:mask_4_graphics_2,x:140.7,y:65.3}).wait(1).to({graphics:mask_4_graphics_3,x:124.8,y:65.3}).wait(1).to({graphics:mask_4_graphics_4,x:112.5,y:65.3}).wait(1).to({graphics:mask_4_graphics_5,x:103.3,y:65.3}).wait(1).to({graphics:mask_4_graphics_6,x:92.7,y:65.3}).wait(1).to({graphics:mask_4_graphics_7,x:89.2,y:65.3}).wait(59).to({graphics:mask_4_graphics_66,x:89.2,y:65.3}).wait(1).to({graphics:mask_4_graphics_67,x:37.6,y:65.3}).wait(1).to({graphics:mask_4_graphics_68,x:-6,y:65.3}).wait(1).to({graphics:mask_4_graphics_69,x:-41.7,y:65.3}).wait(1).to({graphics:mask_4_graphics_70,x:-69.5,y:65.3}).wait(1).to({graphics:mask_4_graphics_71,x:-89.3,y:65.3}).wait(1).to({graphics:mask_4_graphics_72,x:-101.2,y:65.3}).wait(1).to({graphics:mask_4_graphics_73,x:-104.6,y:65.3}).wait(331));

	// txt1
	this.instance_12 = new lib.txt1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(74.1,107.5,0.792,0.792,0,0,0,83.2,21.9);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},74).wait(330));

	// plate
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjsIiIEjxDIC2AAIkjRDg");
	this.shape_9.setTransform(155.5,85.4,0.346,0.346);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CB0927").s().p("AkaIYIEkwvIESAAIklQvg");
	this.shape_10.setTransform(151.8,116.6,0.346,0.346);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DBDBDA").s().p("Al+LYICSoiIERAAID0uOIBmAAImFWwg");
	this.shape_11.setTransform(151.9,123.3,0.346,0.346);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC052B").s().p("AtqEaIAAozIbVAAIiSIzg");
	this.shape_12.setTransform(87.5,107.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(404));

	// 6.jpg
	this.instance_13 = new lib.p6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(120,68.3,1.1,1.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(330).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.5,alpha:1},7,cjs.Ease.get(1)).wait(67));

	// 5.jpg
	this.instance_14 = new lib.p5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(120,68.3,1.1,1.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(264).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.5,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(66));

	// 4.jpg
	this.instance_15 = new lib.p4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(120,68.3,1.1,1.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(198).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.5,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(132));

	// 3.jpg
	this.instance_16 = new lib.p3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(120,68.3,1.1,1.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(132).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(198));

	// 2.jpg
	this.instance_17 = new lib.p2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(120,68.3,1.1,1.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(264));

	// 1.jpg
	this.instance_18 = new lib.p1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(120,68.3,1.1,1.1);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:1,scaleY:1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(330));

	// bg
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(404));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138,115.3,330,278.7);
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