(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"970x90_atlas_", frames: [[0,276,298,274],[300,276,300,250],[300,0,298,274],[0,0,298,274],[600,0,298,274]]}
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
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["970x90_atlas_"];
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


(lib.uznat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBaIAAi0IBhAAIAAAhIg/AAIAAAqIA8AAIAAAfIg8AAIAAAqIA/AAIAAAgg");
	this.shape.setTransform(67.9,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBaIAAi0IBgAAIAAAhIg/AAIAAAqIA8AAIAAAfIg8AAIAAAqIA/AAIAAAgg");
	this.shape_1.setTransform(55.2,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhBaIAAhLIhBAAIAABLIghAAIAAi0IAhAAIAABJIBBAAIAAhJIAhAAIAAC0g");
	this.shape_2.setTransform(40.4,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BaIAAi0IBpAAIAAAhIhIAAIAAAlIAcAAQAlAAAPAYQAIANAAASQAAAZgQAPQgRAPgbAAgAgbA6IAdAAQAMAAAIgHQAGgHAAgJQAAgJgFgFQgHgJgOAAIgdAAg");
	this.shape_3.setTransform(25.1,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDBDQgbgbAAgoQAAgmAbgbQAcgcAnAAQAoAAAcAcQAbAbAAAmQAAAogbAbQgcAbgoAAQgnAAgcgbgAgrgrQgSASAAAZQAAAZASATQASASAZAAQAaAAASgTQASgSAAgZQAAgZgSgSQgRgSgbAAQgZAAgSASg");
	this.shape_4.setTransform(7.1,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5BaIAAi0IAzAAQAlAAAQAXQALAOAAAUQAAAWgNAOQgRATgiAAIgRAAIAABEgAgXgKIAUAAQAbAAAAgXQAAgYgbAAIgUAAg");
	this.shape_5.setTransform(-9.5,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBsIAAgjIiCAAIAAAjIgiAAIAAhDIARAAIBEiUIAcAAIBDCUIARAAIAABDgAgsApIBZAAIgthlg");
	this.shape_6.setTransform(-26.9,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhDBDQgbgbgBgoQABgmAbgbQAcgcAnAAQAoAAAcAcQAbAbAAAmQAAAogbAbQgcAbgoAAQgoAAgbgbgAgrgrQgSASAAAZQAAAZASATQASASAZAAQAaAAATgTQARgSAAgZQAAgZgRgSQgTgSgaAAQgaAAgRASg");
	this.shape_7.setTransform(-47.2,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBaIAAiTIhBAAIAACTIghAAIAAi0ICEAAIAAC0g");
	this.shape_8.setTransform(-65.8,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AvPD9IAAn5IefAAIAAH5g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uznat, new cjs.Rectangle(-97.6,-25.2,195.2,50.5), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AifAvIAAgSIgrAAIAAgyIAJAAIAAArIAYAAIAAgrIAKAAIAAArIAJAAIAAAVIgBADIgCABgAmZAvIAAgRQgGAAgGgCQgFgDgDgDQgEgEgCgEQgBgFAAgFQAAgFABgFQACgEAEgEQADgEAFgCIAMgCIAAgTIAJAAIAAATIAKACQAFACAEAEQAEAEACAEQACAFAAAFQAAAFgCAFQgCAEgEAEQgEADgFADQgFACgFAAIAAARgAmRAXQAFgBADgBIAFgEIAEgGIABgHIgBgHIgEgGQgCgCgDgCIgIgBgAmngJQgEAFAAAIQAAAIAEAFQAFAFAJABIAAglQgJAAgFAFgAr4AvIAAgSIgrAAIAAAOIAAADIgCABIgGAAIAAgZIADAAIADAAIADgDIADgFIACgIIACgKIABgRIAhAAIAAArIAJAAIAAAVIAAADIgCABgAsUATIASAAIAAggIgSAAgANzAuIAAhDIAFAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIABAGQADgEAEgDQAFgCAFAAQAEABADABQAEACADADQACADABAFQACAFAAAGQAAAFgCAFQgBAEgDAEQgCADgFADQgEACgFAAQgFgBgDgBIgFgEIAAAWgAOCgMQgDACgCAEIAAAWQACAEACABQADABAEABQAHAAADgGQAEgEAAgJIgBgIIgCgGQgCgCgCgBIgGgBQgDAAgEACgABrAuIAAhDIAGAAQAAAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIABAGQADgEAEgDQAFgCAFAAQAEABADABQAEACADADQADADAAAFQACAFAAAGQAAAFgCAFQgBAEgDAEQgDADgEADQgEACgFAAQgEgBgEgBIgGgEIAAAWgAB6gMQgDACgDAEIAAAWQADAEACABQADABAEABQAHAAAEgGQADgEAAgJIgBgIIgCgGQgCgCgCgBIgFgBQgEAAgEACgAllAuIAKgUIgWgvIAIAAIADABIABABIAMAeIACAEIAAgBIABgDIAOgeIAAgBIACgBIAHAAIgbBBIgCACIgCAAgANGAdIgFgDQgBgBgBgDQgCgCAAgEQAAgDACgCIAFgGIAJgDQAHgBAIAAIAAgEQAAgFgCgDQgDgDgFAAIgFABIgDABIgDACIgDABIgCgBIgBgBIgBgCQAEgEAFgDQAFgCAFAAQAFABADABQADABADADIADAGIABAHIAAAgIgDAAIgDAAIgBgCIgBgEIgEACIgEADIgEACIgGAAIgFgBgANSAHIgHADIgDACIgCAEIABADIACADIACABIAEAAIADAAIAEgBIAEgCIACgEIAAgKIgKABgAO2AcQgEgCgEgDQgDgEgBgFQgCgFAAgFQAAgGACgEQABgFADgDQAEgEAEgCQAFgCAFAAQAGAAAEACQAFACADAEQADADACAFQABAEABAGQgBAFgBAFQgCAFgDAEQgDADgFACQgEABgGABQgFgBgFgBgAO1gJQgDAFAAAIQAAAJADAEQAEAGAHAAQAIAAADgGQAEgEAAgJQAAgIgEgFQgDgFgIAAQgHAAgEAFgAIiAcQgEgCgDgDQgEgDgBgGQgCgFAAgGIACgJIAEgIQAEgDAEgDQAEgCAGAAQAEABAEABQAEABADAEQADACABAEQACAFAAAEIAAADIgCABIghAAIABAIIADAFQACADADABQACABAEABIAGgBIAEgCIADgCIACgBIABACIAEADIgFADIgEADIgGABIgGABQgFgBgFgBgAIigLQgEADAAAHIAbAAIgBgFIgDgFIgDgCIgGgBQgHgBgDAEgAHWAdIAAgGIACAAIADgBIAEgCIADgGIADgHIACgLIACgRIAgAAIAAAyIgJAAIAAgqIgPAAIgDAQQgBAGgCAFIgDAIIgFAFIgEACIgFABQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAgAF9AcQgEgCgEgDQgDgEgCgFQgCgFAAgFQAAgGACgEQACgFADgDQAEgEAEgCQAFgCAFAAQAFAAAFACQAFACADAEQADADABAFQACAEAAAGQAAAFgCAFQgBAFgDAEQgDADgFACQgFABgFABQgFgBgFgBgAF8gJQgEAFAAAIQAAAJAEAEQADAGAIAAQAHAAAEgGQAEgEAAgJQAAgIgEgFQgEgFgHAAQgIAAgDAFgAESAcQgFgCgEgDQgCgEgCgFQgCgFAAgFQAAgGACgEQACgFACgDQAEgEAFgCQAEgCAGAAQAFAAAEACQAFACADAEQAEADABAFQACAEAAAGQAAAFgCAFQgBAFgEAEQgDADgFACQgEABgFABQgGgBgEgBgAERgJQgEAFAAAIQAAAJAEAEQADAGAIAAQAHAAADgGQAEgEAAgJQAAgIgEgFQgDgFgHAAQgIAAgDAFgAhJAcQgEgCgDgDQgDgDgCgGQgCgFAAgGIACgJIAEgIQADgDAFgDQAEgCAGAAQAEABAEABQAEABADAEQADACACAEQABAFAAAEIAAADIgCABIghAAIABAIIADAFQACADADABQADABADABIAGgBIAEgCIADgCIACgBIABACIAEADIgFADIgEADIgGABIgGABQgFgBgFgBgAhJgLQgDADgBAHIAbAAIgBgFIgDgFIgEgCIgFgBQgHgBgDAEgAnxAcIgHgFQgCgEgCgFQgCgEAAgGQAAgFACgFQABgEADgEQADgEAFgCQAEgCAGAAQAFABAEABIAIAFIgDADIAAABIgBABIgCgBIgDgBIgDgBIgFgBIgGABIgFAEIgCAFIgBAIIABAIIACAFQACADADABIAGACIAFgBIAEgCIACgCIACgBIACACIACADIgDADIgFADIgFABIgGABQgEgBgFgBgAq5AdIAAgGIACAAIAEgBIADgCIADgGIADgHIACgLIABgRIAiAAIAAAyIgKAAIAAgqIgPAAIgCAQQgCAGgCAFIgDAIIgFAFIgEACIgFABQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAgArcAcQgEgCgDgDQgDgDgCgGQgCgFAAgGIACgJIAEgIQADgDAFgDQAEgCAGAAQAFABADABQAEABADAEQADACABAEQACAFAAAEIgBADIgBABIghAAIABAIIADAFQACADADABQADABADABIAGgBIAEgCIADgCIACgBIABACIADADIgEADIgFADIgFABIgGABQgFgBgFgBgArcgLQgEADAAAHIAbAAIgBgFIgDgFIgDgCIgGgBQgHgBgDAEgAtSAcQgFgCgEgDQgCgEgCgFQgCgFAAgFQAAgGACgEQACgFACgDQAEgEAFgCQAEgCAFAAQAGAAAEACQAFACADAEQAEADABAFQACAEAAAGQAAAFgCAFQgBAFgEAEQgDADgFACQgEABgGABQgFgBgEgBgAtTgJQgEAFAAAIQAAAJAEAEQADAGAHAAQAIAAADgGQAEgEAAgJQAAgIgEgFQgDgFgIAAQgHAAgDAFgAQVAdIAAggIAAgDIAAgEIgRAeIgBABIgCABIgBAAIgCgBIgBgBIgRgeIAAAEIAAADIAAAgIgIAAIAAgyIAHAAIACAAIACACIAPAZIABACIABADIABgDIACgCIAOgZIACgCIACAAIAIAAIAAAygAMpAdIAAgqIgXAAIAAAqIgJAAIAAgyIAqAAIAAAygALYAdIAAgVIgEAAIgCAAIgBAAIgCACIgBABIgLAOQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgFABIgGAAIAOgTQACgDAEgBIgHgCIgEgDIgDgDIgBgEIABgGIAEgEIAGgEIAIgBIASAAIAAAygALLgNIgDABIgCADIAAAEQAAADADACQADACAFAAIAHAAIAAgQIgIAAIgFABgAKnAdIAAghIAAgCIAAgCIgBACIgBACIgBABIgDADIgEAFIgFAGIgLAPIgBADIgCAAIgGAAIAAgyIAJAAIAAAhIAAACIAAACIACgDIABgBIADgFIADgEIAFgGIAMgQIABgBIACgBIAGAAIAAAygAJsAdIAAgYIgXAAIAAAYIgJAAIAAgyIAJAAIAAAUIAXAAIAAgUIAKAAIAAAygAGrAdIAAgyIASAAIAJABIAFADIADAEIABAEIAAAEIgCADIgDACIgFADQAGABADACQAEADgBAFQAAAEgCADQAAACgDACIgGADIgIABgAG0AXIAKAAQAFgBADgCQACgCAAgEIAAgDIgBgDIgEgCIgFAAIgKAAgAG0AAIAJAAIAEAAIADgBIACgDIABgDIAAgDIgCgCIgEgCIgEAAIgJAAgAFMAdIAAgqIgTAAIAAgIIAxAAIAAAIIgUAAIAAAqgADcAdIAAgyIAiAAIAAAIIgYAAIAAAqgADFAdIAAghIAAgCIAAgCIgBACIAAACIgCABIgCADIgEAFIgEAGIgMAPIgCADIgCAAIgFAAIAAgyIAKAAIAAAhIAAACIgBACIACgDIABgBIADgFIAEgEIAEgGIALgQIACgBIACgBIAGAAIAAAygABUAdIAAgqIgYAAIAAAqIgKAAIAAgyIArAAIAAAygAACAdIAAghIAAgCIAAgCIgBACIAAACIgBABIgDADIgDAFIgFAGIgLAPIgCADIgCAAIgFAAIAAgyIAJAAIAAAhIAAACIAAACIABgDIABgBIAEgFIADgEIAEgGIALgQIACgBIABgBIAHAAIAAAygAhrAdIAAghIAAgCIAAgCIgBACIgBACIgBABIgCADIgFAFIgEAGIgLAPIgCADIgCAAIgFAAIAAgyIAJAAIAAAhIAAACIAAACIACgDIAAgBIADgFIAEgEIAEgGIAMgQIACgBIACgBIAGAAIAAAygAjZAdIgDgBIgDgDIgJgPIgEgDIgDgBIgGAAIAAAXIgJAAIAAgyIAJAAIAAAVIAFAAIADAAIADgDIALgPIACgCIACgBIAIAAIgOATIgCADIgDACIAEABIADAEIANAVgAkVAdIAAgYIgYAAIAAAYIgJAAIAAgyIAJAAIAAAUIAYAAIAAgUIAJAAIAAAygAomAdIgBAAIgCgCIgLgUIgBACIgBACIgLAQIgCACIgBAAIgJAAIASgaIgRgYIAJAAIACAAIABABIAMATIABgBIABgCIAKgPIABgCIABAAIAJAAIgRAYIARAagApeAdIAAgVIgDAAIgDAAIgBAAIgBACIgCABIgKAOQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAIgEABIgHAAIAPgTQACgDADgBIgGgCIgFgDIgCgDIgBgEIABgGQABgCADgCIAFgEIAJgBIARAAIAAAygApqgNIgEABIgBADIgBAEQAAADADACQAEACAEAAIAHAAIAAgQIgIAAIgEABgAt1AdIAAggIAAgDIABgEIgRAeIgCABIgBABIgBAAIgBgBIgCgBIgRgeIAAAEIABADIAAAgIgJAAIAAgyIAIAAIACAAIABACIAQAZIABACIABADIAAgDIABgCIAQgZIABgCIACAAIAIAAIAAAygAvxAdIAAgyIATAAIAIABIAGADIADAEIABAEIgBAEIgBADIgDACIgFADQAGABADACQAEADAAAFQAAAEgDADQgBACgDACIgGADIgHABgAvoAXIALAAQAFgBACgCQAEgCAAgEIgBgDIgCgDIgDgCIgFAAIgLAAgAvoAAIAKAAIAEAAIADgBIACgDIABgDIgBgDIgCgCIgCgCIgFAAIgKAAgAwPgNIAAgJIAAgCIAAgBIgCABIgIAFIgDgEIAIgFIADgBIABAAIgEgCIgIgFIADgEIAIAGIACACIAAgBIAAgDIAAgKIAEAAIAAAKIAAADIAAABIADgCIAIgGIADAEIgJAFIgBABIgCABIADABIAJAFIgDAEIgIgFIgCgBIgBgCIAAAFIAAAJgAgPgdIgFgCIgDgDIgBgFIABgCIABAAIAGAAIAAADIACADIABACIAEAAIAEAAIABgCIACgDIAAgDIAFAAIABAAIABACIgBAFIgDADIgEACIgGABIgGgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-105.3,-4.6,210.6,9.3), null);


(lib.t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AgPBZIAAgfIAfAAIAAAfgAgPAsIAAiEIAfAAIAACEg");
	this.shape.setTransform(236.2,39.1,0.975,0.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AA9BZIAAiEIgvCEIgbAAIgviEIAACEIghAAIAAixIAtAAIAwCHIAxiHIAtAAIAACxg");
	this.shape_1.setTransform(222.2,39.1,0.975,0.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AgvBZIAAixIBeAAIAAAgIg9AAIAAApIA7AAIAAAfIg7AAIAAApIA9AAIAAAgg");
	this.shape_2.setTransform(205.5,39.1,0.975,0.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAoBZIAAh8IhPB8IghAAIAAixIAhAAIAAB8IBPh8IAhAAIAACxg");
	this.shape_3.setTransform(190.5,39.1,0.975,0.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQATAAAPAGQAbAMAAAdQAAAXgUALQAPAFAHAKQAJAMgBAPQABA2hGAAgAgYA5IAVAAQAcAAAAgWQAAgXgcAAIgVAAgAgYgTIAPAAQAXAAAAgTQAAgSgXAAIgPAAg");
	this.shape_4.setTransform(175.5,39.1,0.975,0.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgPBZIAAiRIghAAIAAggIBhAAIAAAgIggAAIAACRg");
	this.shape_5.setTransform(163.4,39.1,0.975,0.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAgiAXgbQAageArgBQAcABAVAOQAXAOAKAZIglAAQgRgVgbgBQgaAAgRASQgRASAAAYQAAAZARARQASASAZABQAbAAAQgVIAlAAQgLAYgVAOQgVAOgdAAQgqABgaggg");
	this.shape_6.setTransform(149.5,39.2,0.975,0.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("Ag6BZIAAixIAhAAIAABFIAZAAQAfAAAPARQANANAAAXQAAAZgQAPQgRAPgaAAgAgZA5IAZAAQANAAAGgGQAHgGAAgLQAAgKgHgGQgGgGgNAAIgZAAg");
	this.shape_7.setTransform(134,39.1,0.975,0.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAxBZIgxiDIgvCDIglAAIBHixIAcAAIBGCxg");
	this.shape_8.setTransform(118.2,39.1,0.975,0.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AhCBBQgbgaAAgnQAAgmAbgbQAbgbAnAAQAnAAAcAbQAbAbAAAmQAAAngbAaQgcAbgnAAQgmAAgcgbgAgqgqQgSASAAAYQAAAZASASQARASAZAAQAaAAARgSQASgTAAgYQAAgYgSgSQgRgSgaAAQgZAAgRASg");
	this.shape_9.setTransform(100,39.2,0.975,0.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQAUAAAOAGQAbAMAAAdQAAAXgTALQANAFAIAKQAJAMAAAPQAAAXgPAOQgSARglAAgAgXA5IAVAAQAbAAAAgWQAAgXgbAAIgVAAgAgXgTIAPAAQAWAAAAgTQAAgSgWAAIgPAAg");
	this.shape_10.setTransform(83.8,39.1,0.975,0.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgbQAbgaAnAAQAoAAAbAaQAbAbAAAnQAAAmgbAbQgbAagoAAQgmAAgcgagAgqgqQgSASAAAYQAAAZASASQARARAZAAQAaAAASgRQARgSAAgZQAAgZgSgRQgRgSgaABQgZAAgRARg");
	this.shape_11.setTransform(66.8,39.2,0.975,0.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("ABABqIAAgiIh/AAIAAAiIghAAIAAhCIARAAIBCiRIAcAAIBBCRIARAAIAABCgAgrAoIBXAAIgshjg");
	this.shape_12.setTransform(47.3,40.7,0.975,0.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AghBZIAVgtIhFiEIAoAAIAuBeIApheIAkAAIhRCxg");
	this.shape_13.setTransform(33.1,39.1,0.975,0.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAgiAXgbQAbgeAqAAQAcAAAWAOQAWAOALAaIgmAAQgRgWgcgBQgZABgRARQgRASAAAYQAAAZASASQARARAZABQAbAAAPgVIAnAAQgMAYgUAOQgWAOgcAAQgqAAgbgfg");
	this.shape_14.setTransform(10.5,39.2,0.975,0.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAzBZIgSguIhBAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_15.setTransform(206.7,9.8,0.975,0.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AA9BZIAAiEIgvCEIgbAAIgviEIAACEIghAAIAAixIAsAAIAxCHIAxiHIAtAAIAACxg");
	this.shape_16.setTransform(187.2,9.8,0.975,0.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgnQAAgmAbgbQAcgaAmAAQAoAAAbAaQAbAbAAAmQAAAngbAbQgbAbgoAAQgmAAgcgbgAgqgqQgSARAAAZQAAAZASASQARARAZAAQAaAAASgRQARgTAAgYQAAgZgSgRQgRgRgagBQgZABgRARg");
	this.shape_17.setTransform(166.6,9.9,0.975,0.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("ABABqIAAgiIh/AAIAAAiIghAAIAAhCIARAAIBCiRIAbAAIBCCRIARAAIAABCgAgqAoIBWAAIgshjg");
	this.shape_18.setTransform(147.2,11.5,0.975,0.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AgvBZIAAixIBfAAIAAAgIg+AAIAAApIA7AAIAAAfIg7AAIAAApIA+AAIAAAgg");
	this.shape_19.setTransform(126.2,9.8,0.975,0.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_20.setTransform(115.1,9.8,0.975,0.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("Ag6BZIAAixIAhAAIAABFIAZAAQAeAAAQARQANAOAAAWQAAAZgRAPQgQAPgaAAgAgZA5IAZAAQAMAAAHgGQAHgGAAgLQAAgKgHgGQgHgGgMAAIgZAAg");
	this.shape_21.setTransform(104.6,9.8,0.975,0.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("Ag5BZIAAixIArAAQAUAAAOAGQAbAMAAAdQAAAYgUAKQAPAFAIAKQAIAMAAAPQAAA2hGAAgAgYA5IAWAAQAbAAAAgWQAAgXgbAAIgWAAgAgYgTIAQAAQAWAAAAgTQAAgSgWAAIgQAAg");
	this.shape_22.setTransform(90.8,9.8,0.975,0.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AhBBCQgcgbABgmQgBgnAcgbQAagaAnAAQAoAAAaAaQAcAbAAAnQAAAmgcAbQgbAagnABQgngBgagagAgrgqQgRASABAYQgBAZASARQARASAZAAQAaAAARgSQARgSAAgYQAAgZgRgRQgRgSgaAAQgZAAgSASg");
	this.shape_23.setTransform(73.8,9.9,0.975,0.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgQBZIAAiRIggAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_24.setTransform(59.6,9.8,0.975,0.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AhCBCQgbgbAAgmQAAgnAbgaQAbgcAnABQAogBAbAcQAbAaAAAnQAAAmgbAbQgbAagoAAQgmAAgcgagAgqgqQgSARAAAZQAAAZASARQARATAZAAQAaAAASgTQARgRAAgZQAAgZgSgRQgRgSgaABQgZgBgRASg");
	this.shape_25.setTransform(45.5,9.9,0.975,0.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A7E0").s().p("AgrBZIAAixIBXAAIAAAgIg2AAIAACRg");
	this.shape_26.setTransform(31.3,9.8,0.975,0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t5, new cjs.Rectangle(2,0.9,235.8,50.2), null);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AwjB/IAAghIiAAAIAAAhIgiAAIAAhBIASAAIBBiRIAdAAIBCCRIARAAIAABBgAw3A+IgshjIgsBjIBYAAgAJsBZQgSgIgMgOQgLgOgGgQQgFgQAAgQQAAgOAFgQQAGgQALgOQAMgOASgIQARgJAXAAQATAAAQAGQAQAHAMAMQAMAMAIARIgmAAQgEgGgGgFQgHgFgIgDQgJgDgKAAQgSAAgNAIQgOAJgIANQgHAOgBAPQABARAHAOQAJANANAJQAOAIARAAQAMAAAMgFQALgFAIgKIAmAAQgIAPgLAMQgMAMgPAGQgQAHgUAAQgXAAgRgJgABVBWQgUgNgNgUQgMgVgBgaQABgZAMgVQANgVAUgMQAWgNAbAAQAaAAAVANQAVAMANAVQALAVABAZQgBAagLAVQgNAUgVANQgVAMgaAAQgbAAgWgMgABmguQgOAIgHAOQgJANABAQQgBARAJAOQAHAOAOAIQAOAIARAAQASAAANgIQAOgJAIgNQAIgOAAgRQAAgQgIgNQgIgOgOgIQgNgIgRAAQgTAAgNAIgAtBBWQgVgNgNgUQgMgVAAgaQAAgZAMgVQANgVAVgMQAVgNAbAAQAaAAAWANQAUAMANAVQAMAVABAZQgBAagMAVQgNAUgUANQgWAMgaAAQgbAAgVgMgAswguQgOAIgIAOQgIANAAAQQAAARAIAOQAIAOAOAIQANAIARAAQATAAANgIQAOgJAHgNQAJgOgBgRQABgQgJgNQgHgOgOgIQgOgIgRAAQgSAAgNAIgARxBeIgSguIhBAAIgSAuIglAAIBKixIAbAAIBJCxgARTAQIgVgzIgUAzIApAAgAO5BeIg4hOIAABOIggAAIAAixIAgAAIAABNIA4hNIAoAAIhDBXIBDBagAMOBeIAAiRIghAAIAAggIBjAAIAAAgIgiAAIAACRgAIABeIAAh8IhQB8IghAAIAAixIAhAAIAAB8IBQh8IAgAAIAACxgAFOBeIAAhEIgfAAQgKABgMgCQgLgCgKgIQgHgGgEgHQgDgHgBgHIgBgOIAAg5IAhAAIAAA1IABAJQAAAGAFAFQAEAEAGABIAKABIAfAAIAAhPIAgAAIAACxgAhHBeIAAhFIgBAAIgwBFIgmAAIAxhCQgOgCgKgGQgMgHgFgMQgHgKAAgQQAAgHACgJQACgKAHgJQAHgKANgGQANgHAXAAIAzAAIAACxgAhwgvQgGAEgEAGQgCAGAAAGQAAAHACAGQAEAGAGAEQAIADANAAIAUAAIAAg0IgUAAQgNAAgIAEgAjMBeIgSguIhCAAIgSAuIgkAAIBKixIAaAAIBKCxgAjrAQIgUgzIgVAzIApAAgAmJBeIAAhLIhBAAIAABLIghAAIAAixIAhAAIAABHIBBAAIAAhHIAhAAIAACxgAosBeIAAh8IhQB8IggAAIAAixIAgAAIAAB8IBQh8IAhAAIAACxgAvwBeIAAixIAqAAIAKAAIAQADQAJACAIAFQAIAFAGAJQAEAJAAAOQAAALgDAHQgEAHgEAEIgIAFQAPAEAHALQAIAMAAAPQABANgGAMQgGAMgQAIQgPAIgdABgAvQA+IAWAAIAFAAQAFgBAFgCQAFgCAEgFQAEgEAAgJQAAgDgCgGQgCgFgFgEQgHgEgMgBIgWAAgAvQgOIAQAAQAKgBAFgDQAFgEABgEIACgHQgBgIgEgEQgEgEgFgBIgJgBIgQAAgASiglIgLAWIgOgHIAMgWIgYACIAAgRIAYACIgMgWIAOgHIALAWIALgWIANAIIgMAVIAXgCIAAARIgYgCIANAVIgNAIgApphhQgJgEgGgIQgGgHgBgKIAcAAQABAGAEADQAFADAFAAQAGAAAFgDQAEgDABgGIAbAAQgBAKgGAHQgGAIgIAEQgKAEgMAAQgLAAgKgEg");
	this.shape.setTransform(125.8,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(3.6,11.6,244.3,25.4), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AhABQQgVgMgNgVQgMgVAAgaQAAgZAMgVQANgUAVgNQAVgMAbgBQAaABAUAMQAWANAMAUQAMAVAAAZQAAAagMAVQgMAVgWAMQgUAMgaABQgbgBgVgMgAgvgzQgOAIgIANQgIAOAAAQQAAARAIANQAIAOAOAIQANAIARABQARgBAOgIQAOgIAIgOQAHgOABgQQgBgQgHgOQgJgNgNgIQgOgIgQgBQgSABgNAIgAliBQQgVgMgMgVQgMgVgBgaQABgZAMgVQAMgUAVgNQAVgMAbgBQAbABAUAMQAWANAMAUQAMAVAAAZQAAAagMAVQgMAVgWAMQgUAMgbABQgbgBgVgMgAlSgzQgNAIgIANQgIAOAAAQQAAARAIANQAIAOANAIQAOAIASABQARgBAOgIQAOgIAIgOQAHgOABgQQgBgQgHgOQgJgNgNgIQgNgIgSgBQgSABgOAIgANtBYIAAiwIBfAAIAAAfIg+AAIAAAqIA8AAIAAAeIg8AAIAAApIA+AAIAAAggAMrBYIAAh8IhPB8IggAAIAAiwIAgAAIAAB7IBPh7IAiAAIAACwgAJ6BYIAAhKIhBAAIAABKIggAAIAAiwIAgAAIAABHIBBAAIAAhHIAhAAIAACwgAGcBYIAAiwIBfAAIAAAfIg/AAIAAAqIA8AAIAAAeIg8AAIAAApIA/AAIAAAggAFmBYIgxiDIgwCDIglAAIBHiwIAdAAIBGCwgABkBYIAAiwIArAAIAKAAIAQADQAJACAIAFQAHAFAGAJQAFAJAAANQAAALgEAHQgEAHgEAEIgHAFQAPAFAHALQAIALAAAPQABANgHANQgGAMgPAIQgPAIgdAAgACFA4IAVAAIAGAAQAFAAAFgDQAEgCAFgEQADgFAAgIQABgEgDgFQgBgFgGgFQgHgEgMAAIgVAAgACFgUIAPAAQALAAAEgEQAFgDACgEIABgHQAAgJgEgEQgFgEgFgBIgJgBIgPAAgAiyBYIAAiRIghAAIAAgfIBjAAIAAAfIghAAIAACRgAnwBYIAAiwIBZAAIAAAfIg5AAIAACRgAoyBYIAAh8IhPB8IghAAIAAiwIAhAAIAAB7IBPh7IAhAAIAACwgAsoBYIAAiwIAyAAQAUAAANAGQANAGAGAJQAHAJACAJQACAJAAAHQAAAJgDAJQgCAKgIAHQgHAIgMAGQgMAFgTAAIgRAAIAABDgAsHgKIATAAIALgBQAHgBAFgFQAFgFAAgLQAAgLgFgFQgFgFgHgBIgLgCIgTAAgAtpBYIAAiRIhBAAIAACRIghAAIAAiwICCAAIAACwg");
	this.shape.setTransform(39.1,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("ACZBQQgVgMgNgVQgMgVAAgaQAAgZAMgVQANgUAVgNQAVgMAbgBQAaABAVAMQAVANANAUQAMAVAAAZQAAAagMAVQgNAVgVAMQgVAMgaABQgbgBgVgMgACpgzQgNAIgIANQgIAOAAAQQAAARAIANQAIAOANAIQAOAIARABQASgBAOgIQAOgIAHgOQAIgOAAgQQAAgQgIgOQgIgNgNgIQgOgIgRgBQgSABgOAIgAouBUQgSgJgLgOQgMgOgFgQQgGgQAAgPQAAgPAGgQQAFgQAMgNQALgOASgJQARgIAYgBQASABAQAGQAQAGAMAMQANAMAHARIglAAQgFgFgGgFQgHgFgIgEQgIgDgLAAQgSABgNAIQgOAIgHAOQgIANAAAQQAAAQAIAOQAIAOANAIQAOAIARABQAMAAAMgFQALgFAIgLIAmAAQgHAQgMAMQgMALgPAHQgQAGgUABQgXgBgRgIgAHZBYIAAiEIgvCEIgcAAIgwiEIAACEIggAAIAAiwIAsAAIAyCHIAxiHIAtAAIAACwgAgRBYIAAiwIAwAAQAVAAANAGQANAGAGAJQAHAJACAJQACAJAAAHQAAAJgDAJQgDAKgHAHQgHAIgMAGQgNAFgTAAIgRAAIAABDgAAOgKIAUAAIALgBQAHgBAFgFQAFgFAAgLQAAgLgFgFQgFgFgHgBIgLgCIgUAAgAhIBYIgSguIhBAAIgSAuIglAAIBKiwIAbAAIBKCwgAhmALIgUgzIgVAzIApAAgAkEBYIAAiRIhBAAIAACRIghAAIAAiwICDAAIAACwgAJAgqIgLAWIgPgHIANgWIgYABIAAgQIAYABIgNgVIAPgHIALAVIALgWIANAJIgNAUIAYgBIAAAQIgYgBIANAUIgNAJg");
	this.shape_1.setTransform(206.9,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-58.1,30.2,326.2,18.6), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AArBrIAAghIh0AAIAAixIAgAAIAACRIBAAAIAAiRIAiAAIAACRIATAAIAABBgAE0BCQgVgNgNgUQgMgVAAgZQAAgaAMgVQANgVAVgMQAVgNAbAAQAbAAAUANQAWAMAMAVQAMAVABAaQgBAZgMAVQgMAUgWANQgUAMgbAAQgbAAgVgMgAFFhCQgOAIgIAOQgIANAAARQAAAQAIAOQAIAOAOAIQANAIARAAQASAAAOgIQAOgJAIgNQAIgOAAgQQAAgRgIgNQgJgOgNgIQgOgIgRAAQgSAAgNAIgAoqBCQgWgNgMgUQgMgVAAgZQAAgaAMgVQAMgVAWgMQAUgNAbAAQAbAAAVANQAVAMAMAVQAMAVABAaQgBAZgMAVQgMAUgVANQgVAMgbAAQgbAAgUgMgAoahCQgNAIgJAOQgHANgBARQABAQAHAOQAJAOANAIQANAIASAAQASAAAOgIQAOgJAHgNQAIgOAAgQQAAgRgIgNQgIgOgNgIQgOgIgSAAQgRAAgOAIgAPpBKIAAixIBeAAIAAAgIg+AAIAAApIA8AAIAAAfIg8AAIAAApIA+AAIAAAggAOnBKIAAixIAhAAIAACxgAMfBKIAAixIAgAAIAABFIAbAAQAWAAANAIQANAIAGAMQAFAMAAANQAAARgHAMQgIAMgOAHQgMAHgSAAgAM/AqIAbAAQAMAAAHgGQAHgGAAgLQAAgLgHgGQgHgEgMgBIgbAAgALdBKIAAhKIhAAAIAABKIghAAIAAixIAhAAIAABHIBAAAIAAhHIAiAAIAACxgAI6BKIAAhKIhAAAIAABKIghAAIAAixIAhAAIAABHIBAAAIAAhHIAiAAIAACxgADOBKIAAh8IhPB8IghAAIAAixIAhAAIAAB8IBPh8IAhAAIAACxgAiABKIgSguIhBAAIgSAuIglAAIBKixIAbAAIBKCxgAiegDIgUg0IgVA0IApAAgAmGBKIAAixIArAAIAKAAIARADQAIACAIAFQAIAFAFAJQAGAJAAAOQAAALgFAHQgDAHgFAEIgGAFQAOAFAHALQAJALgBAPQABANgGAMQgGAMgQAIQgPAIgdABgAllAqIAVAAIAHAAQAEgBAFgCQAFgCAEgFQAEgEgBgJQABgDgCgGQgBgFgHgEQgGgDgNgBIgVAAgAllgiIAQAAQAKgBAFgDQAFgEABgEIACgHQAAgIgEgEQgFgEgFgBIgJgBIgQAAgAqQBKIAAhKIhCAAIAABKIggAAIAAixIAgAAIAABHIBCAAIAAhHIAgAAIAACxgAs0BKIAAhKIhBAAIAABKIggAAIAAixIAgAAIAABHIBBAAIAAhHIAhAAIAACxgAvXBKIAAh8IhPB8IggAAIAAixIAgAAIAAB8IBPh8IAhAAIAACxg");
	this.shape.setTransform(63.6,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAmBrIAAghIh/AAIAAAhIgiAAIAAhBIASAAIBBiRIAdAAIBBCRIARAAIAABBgAASAqIgrhjIgsBjIBXAAgAkRBCQgUgNgNgUQgMgVgBgZQABgaAMgVQANgVAUgMQAWgNAbAAQAaAAAVANQAVAMANAVQAMAVAAAaQAAAZgMAVQgNAUgVANQgVAMgaAAQgbAAgWgMgAkAhCQgOAIgHAOQgJANABARQgBAQAJAOQAHAOAOAIQAOAIARAAQASAAANgIQAOgJAIgNQAIgOAAgQQAAgRgIgNQgIgOgOgIQgNgIgRAAQgTAAgNAIgAHyBKIAAh8IhQB8IggAAIAAixIAgAAIAAB8IBQh8IAhAAIAACxgAFMBKIgxiDIgwCDIglAAIBHixIAdAAIBGCxgABZBKIAAixIBeAAIAAAgIg+AAIAAApIA8AAIAAAfIg8AAIAAApIA+AAIAAAggAl3BKIAAiEIgvCEIgcAAIgwiEIAACEIggAAIAAixIAtAAIAxCHIAyiHIAsAAIAACxg");
	this.shape_1.setTransform(237.8,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-46,16.6,336.9,21.5), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AAzBZIgSguIhBAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape.setTransform(332.5,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A7E0").s().p("AAYBZIg2hOIAABOIghAAIAAixIAhAAIAABNIA2hNIAoAAIhCBYIBCBZg");
	this.shape_1.setTransform(316.8,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A7E0").s().p("AAoBZIAAh8IhPB8IggAAIAAixIAgAAIAAB8IBPh8IAgAAIAACxg");
	this.shape_2.setTransform(299.9,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A7E0").s().p("AAgBZIAAhLIg/AAIAABLIghAAIAAixIAhAAIAABIIA/AAIAAhIIAhAAIAACxg");
	this.shape_3.setTransform(282.8,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A7E0").s().p("AArBZIgrg+IgpA+IgmAAIA9hZIg9hYIAmAAIApA+IArg+IAmAAIg9BYIA9BZg");
	this.shape_4.setTransform(266.5,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00A7E0").s().p("AgvBZIAAixIBfAAIAAAgIg9AAIAAApIA6AAIAAAfIg6AAIAAApIA9AAIAAAgg");
	this.shape_5.setTransform(252.3,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00A7E0").s().p("AgPBZIAAiRIghAAIAAggIBhAAIAAAgIggAAIAACRg");
	this.shape_6.setTransform(240.8,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00A7E0").s().p("AAbBZIAAhFIgBAAIguBFIgnAAIAxhCQgVgCgNgOQgNgOAAgXQAAgVALgOQAQgXAmAAIA0AAIAACxgAgYgdQAAAaAfAAIAUAAIAAg1IgUAAQgfAAAAAbg");
	this.shape_7.setTransform(222.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00A7E0").s().p("AAzBZIgTguIhAAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_8.setTransform(206.9,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A7E0").s().p("AAgBZIAAhLIhAAAIAABLIggAAIAAixIAgAAIAABIIBAAAIAAhIIAhAAIAACxg");
	this.shape_9.setTransform(189.9,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00A7E0").s().p("AAgBZIAAhLIg/AAIAABLIghAAIAAixIAhAAIAABIIA/AAIAAhIIAhAAIAACxg");
	this.shape_10.setTransform(173.5,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A7E0").s().p("AhCBBQgbgaABgnQgBgmAbgaQAcgbAmAAQAnAAAcAbQAbAaAAAmQAAAngbAaQgbAbgoAAQgmAAgcgbgAgrgqQgRARAAAZQAAAZARASQASASAZAAQAaAAARgSQARgTAAgYQABgZgSgRQgRgSgaAAQgZAAgSASg");
	this.shape_11.setTransform(155.3,23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A7E0").s().p("AAqBZIgqg+IgpA+IgmAAIA8hZIg8hYIAmAAIApA+IAqg+IAmAAIg9BYIA9BZg");
	this.shape_12.setTransform(137.1,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A7E0").s().p("AgiBZIAVgtIhEiEIAoAAIAuBeIApheIAkAAIhRCxg");
	this.shape_13.setTransform(120.5,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A7E0").s().p("AAYBZIg2hOIAABOIghAAIAAixIAhAAIAABNIA2hNIAnAAIhBBYIBBBZg");
	this.shape_14.setTransform(105.2,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A7E0").s().p("AAaBZIAAhFIAAAAIguBFIgmAAIAwhCQgVgCgNgOQgNgOAAgXQgBgVALgOQARgXAmAAIAzAAIAACxgAgZgdQABAaAfAAIATAAIAAg1IgTAAQgfAAgBAbg");
	this.shape_15.setTransform(83.1,23);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A7E0").s().p("AAzBZIgTguIhAAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_16.setTransform(67.4,23);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A7E0").s().p("AAZBZIg3hOIAABOIghAAIAAixIAhAAIAABNIA3hNIAnAAIhCBYIBCBZg");
	this.shape_17.setTransform(51.6,23);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A7E0").s().p("AhAA9QgXgbAAgiQAAghAXgbQAaggArAAQAcAAAVAPQAXAOALAZIgmAAQgQgVgcgBQgZABgSARQgRASAAAYQAAAYASASQARATAZgBQAbAAAPgUIAnAAQgMAYgUAOQgWAPgcAAQgrgBgagfg");
	this.shape_18.setTransform(34.4,23.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A7E0").s().p("AAgBZIAAhLIhAAAIAABLIggAAIAAixIAgAAIAABIIBAAAIAAhIIAhAAIAACxg");
	this.shape_19.setTransform(16.7,23);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A7E0").s().p("AAbBZIAAhFIgBAAIguBFIgnAAIAxhCQgVgCgNgOQgOgOABgXQAAgVALgOQAQgXAmAAIA0AAIAACxgAgZgdQAAAaAhAAIATAAIAAg1IgTAAQghAAAAAbg");
	this.shape_20.setTransform(1,23);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A7E0").s().p("Ag6BZIAAixIAhAAIAABFIAZAAQAfAAAPARQANAOAAAWQAAAZgRAPQgQAPgaAAgAgZA5IAZAAQAMAAAHgGQAHgGAAgLQAAgKgHgGQgHgGgMAAIgZAAg");
	this.shape_21.setTransform(-12.2,23);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A7E0").s().p("AAwBZIgwiDIgwCDIgkAAIBHixIAbAAIBHCxg");
	this.shape_22.setTransform(-28.4,23);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A7E0").s().p("AAzBZIgTguIhAAAIgSAuIgkAAIBKixIAZAAIBKCxgAgTALIAnAAIgUgzg");
	this.shape_23.setTransform(-45.9,23);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A7E0").s().p("AgPBZIAAiRIghAAIAAggIBhAAIAAAgIghAAIAACRg");
	this.shape_24.setTransform(-58.8,23);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A7E0").s().p("AAnBZIAAh8IhOB8IghAAIAAixIAhAAIAAB8IBOh8IAhAAIAACxg");
	this.shape_25.setTransform(-72.7,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-80,13.8,421.3,18.8), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(-149,-145,298,274), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(-149,-145,298,274), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(-149,-145,298,274), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145,1.007,0.912);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(-149,-145,300,250), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-149,-145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(-149,-145,298,274), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A7E0").s().p("AqTBeQgvgrAbhAQAag5BOghQBYglCOAAQAgAAAcAEIAlAFIAPADIgUAkQgsgMgmAAQhIAAg7AVQhQAcgMA5QgHAiAYAeQAgAnBFgEQAWgBAqgOQAzgRAdgYIBIg/QAHgFAHgEQAGgCAIgBIAHAAIBNAAIAZBqIAwhpIBVAAIAxBRIAlhRIBOAAIhFCUIhQAAIgzhWIgmBWIgxAAIAAABIhcAAIgEgbIhUAAIgcAZIg3AAQg/AXhUAAQh4AAg0gvgAjhA/IAxgBIgEgpgAG6CFIAygxIgyhxIBNAAIAVA8IA/g9IBXAAIibCaQgFAFgEABQgFACgNABgAEgB3Ih+AAIBEiUIB+AAQA9AAAWAcQASAXgOAeQgNAbggASQgpAWhCAAIgDAAgAEHBSIAWAAQAaAAAUgGQAggKAGgYQAGgUgUgJQgOgGgWAAIgXAAg");
	this.shape.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-68.9,-19.1,138,28.2), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFcApIAAg+IAHAAIAAAGQADgEADgCQADgBAEAAQAHAAADADQAFADACAFQADAGAAAFQAAAHgDAGQgDAFgEADQgFADgGAAQgDAAgDgBQgDgCgCgDIAAAXgAFngLQgEAEAAAIQAAAJAEAEQADAEAFAAQAFAAAEgFQAEgEAAgJQAAgIgEgEQgDgEgGAAQgEAAgEAFgAuOAmIAAgPIgpAAIAAAPIgIAAIAAgWIAFAAQAHgLAAgjIAAgJIAmAAIAAA3IAHAAIAAAWgAurgcIAAAWQgCANgFAJIAdAAIAAgvIgWAAgAUZAlIAAgOIgkAAIAAAOIgGAAIAAgUIADAAQAJgLAAgbIAfAAIAAAmIAFAAIAAAUgAT6ARIAZAAIAAggIgSAAQgBAVgGALgAMIAlIAAgOIg6AAIAAgsIAIAAIAAAmIASAAIAAgmIAIAAIAAAmIARAAIAAgmIAIAAIAAAmIAFAAIAAAUgAI8AlIAAgOIgkAAIAAAOIgHAAIAAgUIAFAAQAHgLABgbIAfAAIAAAmIAFAAIAAAUgAIdARIAYAAIAAggIgSAAQAAAVgGALgATFAhQABgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBIABgGIgEAAIAAgIIAIAAIAAAIQABAFgCADQgBADgFACgADuAhQADgBABgDIABgGIgEAAIAAgIIAJAAIAAAIQAAAFgCADQgCADgEACgAi+AhQADgBABgDIABgGIgFAAIAAgIIAJAAIAAAIQAAAFgCADQgBADgEACgAVcATQgHgGAAgIQAAgFADgEQAEgEAFgCQgEgBgCgEQgDgDAAgEQAAgIAFgEQAFgFAIAAQAIAAAGAFQAEAEAAAIQAAAEgCADQgCAEgFABQAGACADAEQADAEAAAFQAAAIgGAGQgFAFgKAAQgJAAgFgFgAVhgDQgDADgBAFQAAAEACADQACADADABIAGACQAGAAADgDQAFgEAAgGQAAgFgFgDQgDgDgGAAQgFAAgEADgAVjgeQgDADAAAEQAAAEADADQADAEAEAAQAFAAADgEQADgDAAgDQAAgFgDgDQgDgCgFAAQgEAAgDACgAN8ASQgGgGAAgLQAAgHACgFQADgGAFgDQAFgCAFAAQAJAAAEADQAEAEACAHIgIACQAAgFgDgDQgDgCgEAAQgGAAgEAEQgDAEAAAIQAAAKADAEQAEAEAFAAQAFAAADgDQADgDABgFIAIAAQgBAJgFAEQgGAEgIAAQgJAAgFgGgAKgASQgFgGgBgLQABgMAGgGQAHgFAIAAQAJAAAGAGQAGAGAAAKQAAAJgCAFQgDAFgFADQgFACgGAAQgJAAgHgGgAKngLQgFAEAAAIQAAAIAFAEQAEAFAFAAQAGAAAEgFQADgEAAgJQAAgHgDgEQgEgFgGAAQgFAAgEAFgAHrALIAIgCQABAEACADQAEACADAAQAEAAADgCQADgCAAgEQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgFgDQgBgBgFAAIgCABIAAgGIAHAAIADgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgDgCgCQgCgCgEAAQgGAAgDAIIgIgBQAEgNANAAQAIAAAEADQAEAFAAAFQAAAGgGADQAEABACADQABADABAEQAAAGgFAEQgEADgJAAQgPAAgDgNgAHBASQgFgGAAgLQAAgLAFgGQAGgGAKAAQAJAAAGAGQAGAGgBAKIAAACIghAAQAAAIADAEQAEAEAGAAQAEAAAEgCQADgDABgEIAIABQgCAHgEAEQgGADgIAAQgKAAgGgGgAHIgMQgDADgBAGIAZAAQAAgGgDgCQgDgFgGAAQgGAAgDAEgAGQASQgGgGAAgLQAAgMAHgGQAGgFAJAAQAJAAAGAGQAGAGAAAKQAAAJgCAFQgEAFgEADQgGACgFAAQgKAAgGgGgAGWgLQgDAEgBAIQABAIADAEQAEAFAGAAQAFAAAFgFQADgEAAgJQAAgHgDgEQgFgFgFAAQgGAAgEAFgAC9AVQgEgEAAgGQAAgDACgDQABgDADgBIAFgCIAHgBIAOgDIAAgBQAAgFgCgCQgDgDgGAAQgGAAgCACQgDACgBAFIgIgBIADgIQAEgDADgCQAFgBAGAAQAFAAAEABQAEABACADIACAFIAAAHIAAAJQAAALABADIACAFIgIAAQgBgCAAgDIgIAFIgJABQgIAAgEgDgADMAEIgHABIgDACIAAAEQAAADABACQADACAFAAQAEAAAEgCQACgBACgEQACgCAAgFIAAgEIgNAEgAA+ASQgGgGAAgLQAAgHADgFQACgGAFgDQAFgCAGAAQAHAAAFADQAFAEABAHIgHACQgBgFgDgDQgDgCgDAAQgGAAgEAEQgEAEAAAIQAAAKAEAEQADAEAGAAQAEAAAEgDQACgDABgFIAIAAQgCAJgFAEQgEAEgIAAQgJAAgGgGgAANASQgHgGAAgLQAAgMAIgGQAFgFAJAAQAJAAAGAGQAGAGABAKQAAAJgDAFQgDAFgFADQgFACgGAAQgKAAgFgGgAASgLQgEAEAAAIQAAAIAEAEQAFAFAFAAQAGAAAEgFQAEgEgBgJQABgHgEgEQgEgFgGAAQgFAAgFAFgAjsAVQgEgFgBgHIAHgBQABAFADADQACACAEAAQAEAAADgCIAFgEIACgHIABgJIAAgBQgCAEgFABQgDACgFAAQgIAAgFgFQgFgFgBgJQAAgKAGgGQAGgGAJAAQAFAAAGADQAEAEADAGQADAGAAALQAAALgDAIQgDAHgEAEQgGADgHAAQgHAAgFgDgAjngcQgDAEgBAHQABAGADADQADAEAGAAQAGAAADgEQADgDAAgHQAAgHgDgDQgEgEgFAAQgFAAgEAEgAl/AUQgFgFgBgIIAIgBQABAGADADQADADAEAAQAHAAADgEQAFgEAAgIQAAgFgFgEQgDgEgHAAQgDAAgDACQgDACgCADIgHgBIAGghIAfAAIAAAHIgZAAIgEARQAHgDAGAAQAIAAAFAFQAGAGABAIQgBAJgFAGQgFAHgMAAQgHAAgGgEgAsbAUQgGgEgDgHQgDgJAAgIQAAgJADgIQAEgHAGgEQAIgDAIAAQAKAAAGAEQAGAFADAJIgIABQgCgGgFgEQgEgDgGAAQgHAAgFAEQgFADgCAGQgCAGAAAGQAAAIADAFQABAGAGAEQAEACAHAAQAGAAAFgEQAFgEACgIIAIADQgDAJgGAGQgHAFgKAAQgKAAgHgEgAznAUQgIgEgDgHQgEgIAAgHQABgQAHgJQAJgJAOAAQAIAAAHAEQAHAFAEAHQADAIAAAJQAAAIgEAIQgDAIgIAEQgHADgHAAQgKAAgGgEgAzngaQgGAGgBAOQABAKAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgLQAAgIgDgGQgDgFgEgEQgGgDgFAAQgJAAgHAHgA0sAUQgHgEgEgHQgDgIAAgHQAAgQAJgJQAHgJAOAAQAJAAAHAEQAHAFAEAHQADAIAAAJQAAAIgEAIQgDAIgIAEQgHADgIAAQgJAAgHgEgA0rgaQgHAGABAOQgBAKAHAHQAGAGAJAAQAJAAAH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");
	this.shape.setTransform(149.3,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AMGAcQgGgFAAgIIAHgBQABAHADACQAEADAEAAQAGAAADgDQAEgEABgGQgBgFgEgDQgDgEgGAAIgFABIACgGIABAAQAEAAAEgCQAFgDgBgGQAAgDgCgDQgDgDgFAAQgEAAgEADQgCADgBAFIgIgBQACgIAFgEQAEgFAIAAQAFAAAEADQAFACACAEQADAEgBAEQABAEgDADQgCADgFADQAGABADADQADAEAAAGQAAAIgFAGQgHAGgJAAQgIAAgFgFgALUAcQgFgFgBgIIAIAAQABAGAEACQADADAEAAQAHAAADgEQAEgEAAgHQAAgHgEgEQgDgCgHAAQgDAAgDACQgEAAgCADIgGgBIAFgfIAgAAIAAAHIgZAAIgDARQAFgEAHAAQAHAAAGAFQAGAFAAAJQAAAJgEAGQgHAIgLAAQgIAAgGgFgAJyAaQgFgHAAgSQAAgLACgGQACgHAFgEQAEgEAHAAQAFAAAEADQADABAEAEIADAKIABAOQAAALgCAHQgCAGgFAEQgEAEgHAAQgJAAgGgHgAJ4gUQgEAGAAAPQAAAPAEAFQAEAFAFAAQAGAAADgFQADgFAAgPQAAgPgDgFQgDgFgGAAQgFAAgEAEgAIQAaQgFgHAAgSQAAgLACgGQACgHAFgEQAEgEAHAAQAFAAAEADQADABAEAEIADAKQACAFgBAJQABALgDAHQgCAGgFAEQgEAEgHAAQgJAAgGgHgAIWgUQgDAGAAAPQAAAPADAFQAEAFAFAAQAGAAADgFQAEgFgBgPQABgPgEgFQgDgFgGAAQgFAAgEAEgAHfAaQgGgHAAgRQAAgRAHgIQAGgIAKAAQAHAAAFAFQAEAEACAHIgIABQgBgFgCgCQgDgDgFAAIgGACQgEACgCAFQgCAGAAAJQACgEAFgCIAIgCQAIAAAFAGQAGAEAAAJQAAAGgDAFQgCAFgFADQgEADgGAAQgKAAgGgHgAHmABQgEAEAAAGIABAIQACADAEADQADABADAAQAEAAAFgEQADgDAAgHQAAgHgDgEQgEgCgFAAQgGAAgDACgAGwAdQgGgEAAgIIAHgBQABAGADACQADACAEAAQADAAADgBIAEgEIADgIQACgEAAgFIAAgCQgDAEgEACQgEACgEAAQgJAAgGgFQgEgFAAgJQgBgKAGgFQAFgHAJAAQAGAAAFAEQAFADADAGQADAGAAAMQAAALgDAHQgDAHgFAEQgFAEgGAAQgIAAgEgEgAG0gUQgDAEAAAHQAAAGADADQADAEAGAAQAFAAAEgEQADgDAAgHQAAgGgDgEQgEgEgFAAQgFAAgEAEgADrAaQgGgHAAgSQAAgLACgGQADgHAEgEQAEgEAHAAQAFAAAEADQAEABACAEQADAEABAGIACAOQgBALgCAHQgCAGgEAEQgEAEgIAAQgJAAgFgHgADwgUQgDAGAAAPQAAAPADAFQAEAFAFAAQAGAAADgFQAEgFAAgPQAAgPgEgFQgDgFgGAAQgFAAgEAEgAhDAcQgHgEgEgHQgEgIAAgIQAAgOAJgJQAIgKAOAAQAIAAAIAFQAGAEAFAHQACAIAAAIQAAAKgDAHQgEAIgIAEQgGAEgIAAQgJAAgHgFgAhDgSQgGAGAAANQAAALAGAHQAHAHAJAAQAJAAAHgHQAFgHAAgMQAAgGgCgGQgDgGgFgDQgFgDgGAAQgJAAgHAGgAiVAcQgFgFgBgIIAHAAQACAGADACQADADAEAAQAHAAAEgEQADgEAAgHQAAgHgDgEQgEgCgHAAQgDAAgDACQgDAAgCADIgHgBIAGgfIAgAAIAAAHIgaAAIgDARQAGgEAGAAQAIAAAFAFQAHAFAAAJQgBAJgEAGQgHAIgLAAQgHAAgGgFgAj3AaQgGgHAAgSQAAgLACgGQADgHAEgEQAEgEAIAAQAFAAADADQAEABADAEIAEAKIABAOQAAALgCAHQgCAGgFAEQgFAEgGAAQgKAAgFgHgAjxgUQgFAGAAAPQAAAPAFAFQADAFAGAAQAFAAADgFQAEgFAAgPQAAgPgEgFQgDgFgFAAQgGAAgDAEgAmKAcQgFgFgBgIIAIAAQABAGADACQADADAFAAQAGAAAEgEQADgEABgHQgBgHgDgEQgEgCgGAAQgEAAgCACQgEAAgCADIgHgBIAHgfIAeAAIAAAHIgYAAIgEARQAGgEAGAAQAJAAAFAFQAGAFAAAJQAAAJgFAGQgGAIgLAAQgIAAgGgFgAnrAaQgHgHAAgSQAAgLACgGQADgHAEgEQAFgEAGAAQAGAAADADQAEABADAEIAEAKIABAOQAAALgCAHQgCAGgFAEQgEAEgIAAQgIAAgFgHgAnmgUQgEAGAAAPQAAAPAEAFQADAFAFAAQAGAAADgFQAFgFAAgPQAAgPgFgFQgDgFgGAAQgFAAgDAEgAK2AgIAAgPIgbAAIAAgHIAdgpIAGAAIAAApIAIAAIAAAHIgIAAIAAAPgAKjAKIATAAIAAgcgAJFAgQAAgIACgKQADgLAGgJQAFgJAGgHIgfAAIAAgHIApAAIAAAGQgGAGgHALQgFAJgEAMQgCAHAAAKgAGBAgQAAgIADgKQACgLAGgJQAFgJAGgHIgfAAIAAgHIApAAIAAAGQgGAGgGALQgGAJgDAMQgDAHAAAKgAFQAgQAAgIADgKQACgLAGgJQAFgJAGgHIgeAAIAAgHIAoAAIAAAGQgGAGgGALQgGAJgEAMQgCAHAAAKgAEuAgIAAgPIgbAAIAAgHIAcgpIAHAAIAAApIAJAAIAAAHIgJAAIAAAPgAEbAKIATAAIAAgcgADJAgIAAgxIgIAGIgIAEIAAgIQAHgDAFgEQAFgFACgEIAFAAIAAA/gACJAgIAAgeIgiAAIAAAeIgIAAIAAg/IAIAAIAAAbIAiAAIAAgbIAIAAIAAA/gAAkAgIAAg/IAYAAQAGAAADACQAFAAADACQADADACADQACAEAAAFQAAAIgFAEQgFAGgOAAIgPAAIAAAagAAtAAIAPAAQAJAAADgEQADgCAAgGQAAgEgBgCQgDgDgDgBIgIgBIgPAAgAgLAgIAAg/IApAAIAAAIIggAAIAAA3gAi3AgIAAgxIgIAGIgIAEIAAgIQAHgDAFgEQAFgFACgEIAFAAIAAA/gAkvAgIABgGQABgEAEgEIAKgJQALgJACgEQAEgFABgEQAAgFgEgDQgDgDgGAAQgFAAgEADQgCAEAAAGIgJgBQABgJAGgFQAEgFAKAAQAJAAAGAFQAEAFAAAIIgBAHQgBAEgEADQgEAEgIAHIgKAIIgDAEIAgAAIAAAIgAlJAgIAAgxIgIAGIgJAEIAAgIQAHgDAFgEQAFgFACgEIAGAAIAAA/gAmoAgIAAgPIgcAAIAAgHIAdgpIAGAAIAAApIAJAAIAAAHIgJAAIAAAPgAm8AKIAUAAIAAgcgAoZAgQAAgIACgKQADgLAFgJQAFgJAGgHIgeAAIAAgHIAoAAIAAAGQgGAGgGALQgFAJgEAMQgCAHAAAKgApLAgQAAgIAEgKQACgLAGgJQAEgJAHgHIgfAAIAAgHIApAAIAAAGQgHAGgFALQgHAJgDAMQgCAHgBAKgAp/AgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAbIAhAAIAAgbIAIAAIAAA/gAq/AgIAAgeIghAAIAAAeIgIAAIAAg/IAIAAIAAAbIAhAAIAAgbIAIAAIAAA/gAr+AgIAAgxIghAxIgIAAIAAg/IAHAAIAAAyIAhgyIAJAAIAAA/g");
	this.shape_1.setTransform(376.8,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(-2,0,459.6,34.7), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bfQMAAAg+fMAu3AAAMAAAA+fg");
	this.shape.setTransform(200,125,1.333,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,400,250), null);


(lib.pics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p5
	this.instance = new lib.p5();
	this.instance.parent = this;
	this.instance.setTransform(10,0.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).wait(67).to({x:-10,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p4
	this.instance_1 = new lib.p4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10,0.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(225).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).to({_off:true},74).wait(75));

	// p3
	this.instance_2 = new lib.p3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,0.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).to({_off:true},74).wait(150));

	// p2
	this.instance_3 = new lib.p2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(10,0.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).to({_off:true},74).wait(225));

	// p1
	this.instance_4 = new lib.p1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(10,0.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:0,y:0,alpha:1},6,cjs.Ease.get(1)).to({_off:true},74).wait(300));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bWqMAAAgtTMAu3AAAMAAAAtTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(380));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-145,309,290);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// t5
	this.instance = new lib.t5();
	this.instance.parent = this;
	this.instance.setTransform(-119.6,-21.7,0.99,0.99);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-133,y:-24.5,alpha:1},5,cjs.Ease.get(1)).wait(70).to({alpha:0},5).wait(1));

	// t4
	this.instance_1 = new lib.t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.1,-23.2,0.99,0.99);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(224).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-21.6,y:-26,alpha:1},5,cjs.Ease.get(1)).wait(67).to({scaleX:0.99,scaleY:0.99,x:-8.1,y:-23.2,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(78));

	// t3
	this.instance_2 = new lib.t3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.4,-37.1,0.99,0.99);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:4.6,y:-41.5,alpha:1},5,cjs.Ease.get(1)).wait(67).to({scaleX:0.99,scaleY:0.99,x:15.4,y:-37.1,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(153));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.1,-23.5,0.99,0.99);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-8,y:-26.4,alpha:1},5,cjs.Ease.get(1)).wait(66).to({scaleX:0.99,scaleY:0.99,x:4.1,y:-23.5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(228));

	// t1
	this.instance_4 = new lib.t1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7.4,-21.7,0.99,0.99);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.1,scaleY:1.1,x:-20.8,y:-24.4,alpha:1},4,cjs.Ease.get(1)).wait(68).to({scaleX:0.99,scaleY:0.99,x:-7.4,y:-21.7,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(302));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.6,-8,417,18.6);


// stage content:
(lib._970x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhLsgG8MCXZAAAIAAN5MiXZAAAg");
	this.shape.setTransform(485,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(380));

	// uznat
	this.uznat = new lib.uznat();
	this.uznat.parent = this;
	this.uznat.setTransform(871.6,45,0.7,0.7);
	this.uznat._off = true;

	this.timeline.addTween(cjs.Tween.get(this.uznat).wait(300).to({_off:false},0).wait(80));

	// Слой 3
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(689.2,71.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(137).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(80));

	// legal
	this.legal = new lib.legal();
	this.legal.parent = this;
	this.legal.setTransform(459.3,81.2,1,1,0,0,0,0.3,17.6);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(380));

	// logo
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(111.6,46.4,1,1,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(380));

	// pics
	this.pics = new lib.pics();
	this.pics.parent = this;
	this.pics.setTransform(311.6,84.1,0.6,0.6,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.pics).wait(380));

	// text
	this.text = new lib.main();
	this.text.parent = this;
	this.text.setTransform(580.3,37.6,0.9,0.9,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(380));

	// bg
	this.bg = new lib.bg();
	this.bg.parent = this;
	this.bg.setTransform(0,45,2.425,0.36,0,0,0,0,125);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(380));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.5,41.9,971,174);
// library properties:
lib.properties = {
	width: 970,
	height: 90,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/970x90_atlas_.jpg", id:"970x90_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;