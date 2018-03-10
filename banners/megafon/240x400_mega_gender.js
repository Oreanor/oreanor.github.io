(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib._25 = function() {
	this.initialize(img._25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,139);


(lib.giftpack = function() {
	this.initialize(img.giftpack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,181);


(lib.headphones = function() {
	this.initialize(img.headphones);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,174);


(lib.joystick = function() {
	this.initialize(img.joystick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,139);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,88);


(lib.moneypack = function() {
	this.initialize(img.moneypack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,189);


(lib.tshirt = function() {
	this.initialize(img.tshirt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,211);// helper functions:

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


(lib.white_block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white_block, new cjs.Rectangle(0,0,240,400), null);


(lib.tshirt_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ALPQFQgTgCqwAAQquAAgBACQgTgPgBgPIAAiHQAAhJgNqyQABACiBhNQh/hKgCAAIE4o1QAAACBwgBIBvgBQAvhUADgDIgHgPQgIgQAAABQCgkYAAACQAAACAKgLQAPgLAZAAIGzADIASAEQAWAJAPAgQAYA0BtDKQgFAygBgBIArBTIAAAAIAAAAIEHgJQDkJggBgBIABAHQAAAJgIAEIjTB4IgINhIAAAMQgEAIgMAAIgEAAgAvFgwIAAAAIAAAAIAAAAgALipbIAAAAIAAAAg");
	this.shape.setTransform(96.6,102.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tshirt_shadow, new cjs.Rectangle(0,0,193.2,205.8), null);


(lib.tshirt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ALPQFQgTgCqwAAQquAAgBACQgTgPgBgPIAAiHQAAhJgMqyQAAACiBhNQh/hKgCAAIE5o1QgBACBwgBIBvgBIAyhXIgIgPQgGgQgBABQChkYgBACQAAACAJgLQAQgLAZAAIGzADIASAEQAWAJAPAgQAYA0BtDKQgFAygBgBIArBTIAAAAIAAAAIEHgJQDkJggBgBIABAHQAAAJgIAEIjTB4IgINhIAAAMQgEAIgMAAIgEAAgAvFgwIAAAAIAAAAIAAAAgALipbIAAAAIAAAAg");
	mask.setTransform(98.6,105.9);

	// Layer_1
	this.instance = new lib.tshirt();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tshirt_1, new cjs.Rectangle(2.1,3,193.2,205.8), null);


(lib.sportmaster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4859A5").s().p("AsiAAIEYCLIkIg1IiLA5gAjHB0IAribIApAAIgCAIQASgMAUAAQAbAAALASQAHALgBAQIgDARQgHAagQAOQgQAOgOADQgOAEgIAAQgMAAgJgEIgEgCIgFgEIgMAugAhrgKQgFABgFAEQgEADgDAFQgEAHgCAIIgCAKQgBAHADAGQABAEAEACQAEACAGAAQAMAAAIgIQAIgJAEgOIACgKIAAgIQgCgGgEgDQgFgEgGAAQgFAAgEADgAL6BwIAqibIAqAAIgDAIQATgMATAAQAcAAALARQAHAMgBARIgDAPQgIAcgQANQgQAOgOADQgMAEgKgBQgKAAgKgDIgFgDIgEgDIgNAugANVgPQgFABgEAFQgFAEgDAFIgGANIgBALQgBAIACAFQACAEAEACQAFACAFAAQALAAAIgIQAJgJAEgPIACgKIgBgHQgBgHgFgDQgEgDgGAAIgKACgAkiBNQgMgDgHgIQgIgIgCgLIgBgNIADgPQAEgRAKgLIAKgMIAMgIIAZgKQAKgCAOAAQAOAAAJACQALAEAJAGIAHAIQADAFABAHIABANIgDAPQgEARgKANQgEAFgGAFIgMAJQgNAHgMADIgMACIgMABQgNAAgMgEgAkEgFQgHAHgFARIgDANQgBAKAFAFQADAFAKAAQAMAAAJgIQAIgIAEgRIADgMQABgKgFgEQgEgFgKgBQgMABgIAHgAo8BLQgMgDgGgKQgGgJAAgKIAAgFIAAgDIACgPIAFgOIAIgNQAIgNATgLQARgKAdAAQAWAAAKAIQALAGADALIABAIIAAAIIAAADIgBAFIgqAAQABgLgDgEQgCgFgJgBIgLADIgGADIgFAFQgFAFgEAOQgDAJAAAFQAAAJACAEQAEAIAKAAQAJAAAGgGIAGgHIAFgKIArAAIgHAOIgIALQgDAFgHAFQgHAGgHADQgJADgJADQgIACgMAAQgSAAgLgGgAGYBIQgMgGgFgIQgGgKgBgKIAAgIIADgOIAFgOIAHgMQAKgQASgJQASgKAbAAQAWgBALAIQALAIACAKIACAHIgCAQIgqAAQABgKgDgFQgDgEgIAAQgGAAgFABIgFADIgFAFQgGAHgEANIgDAOQAAAKADADQAEAHAJAAQAKABAFgHIAGgGIAFgKIArAAIgHAOIgHALQgFAGgGAEIgOAIIgRAGQgMACgJAAQgQAAgNgEgAgSBMIAWhUIgmAAIAIgdIB4AAIgHAdIgnAAIgYBUgAmGBMIAXhUIglAAIgXBUIgsAAIAfhxIB8AAIgfBxgAKSBIIgKgGQgEgCgEgFIgFgJIgCgLIAAgKIADgOQAFgSANgOQANgPASgGQAKgEAIgBIATgCQAQAAANAFQALAFAGAJIAEAKIABAJIAAAJIgCAPIgDAJIhaAAIgBABIAAACIABAGIABAFIAEAFIAFACIAHABQAHABAIgEIAFgEIAFgHIAsAAIgHAMQgEAFgFAEQgDAEgHAFIgOAGQgPAGgXAAQgPAAgNgEgAK/gQQgEACgFAEIgFAGIgEAFIAtAAIAAgDQABgHgEgEQgFgEgIAAQgHAAgEABgAEBBJQgIgCgDgGQgFgIAAgJIABgHQADgJAHgJQAGgGAKgFQALgEAIgBIAugHIACgDIABgDIAAgCQABgIgNAAIgKAAQgDABgCACIgFAGIgDAHIgqAAIAFgMQACgEAEgGIAKgJIAOgHQAGgDAKgCIAVgBIAVABQALADAEADQALAHABAJIABAEIAAAEIgCAMIgOAvIgDANIAAACIABACIAEACIgCAIIgsAAIgBgIIgIAFIgKADQgOADgJAAQgMAAgJgDgAEmAeIgEAEIgDAGQAAAEACACIAEACIAGAAQAIAAAIgEQAIgHAEgNIABgBgAIaBIIAYhVIgnAAIAIgcIB5AAIgIAcIgnAAIgXBVgACfBIIBahxIggBxgABLBIIAghyIAZBygAryhNQgMgLAAgQQAAgPAMgMQALgLAPAAQAQAAALALQALAMAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape.setTransform(94.4,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F24942").s().p("AhHg8IAzA4IBchDIhyCPg");
	this.shape_1.setTransform(113.4,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F24942").s().p("Aiog6IDYAxIB5gzIhpB5g");
	this.shape_2.setTransform(16.9,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sportmaster, new cjs.Rectangle(0,0,187,28.5), null);


(lib.slogan_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdA8IAAhaIg3BaIgWAAIAAh3IAUAAIAABbIA3hbIAWAAIAAB3g");
	this.shape.setTransform(149.4,38.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArA8IAAhgIgjBgIgRAAIgihkIAABkIgUAAIAAh3IAgAAIAfBfIAjhfIAdAAIAAB3g");
	this.shape_1.setTransform(135,38.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhA8IAAgvIgMAAQgLAAgFADQgFADgJAPIgSAaIgZAAIAWggQAKgPAKgCQgSgCgIgJQgJgLAAgNQAAgQAMgJQALgKAUAAIA3AAIAAB3gAgSgkQgGAFAAAIQAAALAIAFQAIAFASAAIAXAAIAAgoIgdAAQgRAAgFAGg");
	this.shape_2.setTransform(120.1,38.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdA8IAAhaIg3BaIgWAAIAAh3IAUAAIAABbIA3hbIAWAAIAAB3g");
	this.shape_3.setTransform(108,38.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmBNIAAgiIhcAAIAAh3IAUAAIAABmIA4AAIAAhmIAUAAIAABmIANAAIAAAzg");
	this.shape_4.setTransform(95.3,40.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnAvQgQgRAAgdQAAgdAQgRQAPgRAYAAQAZAAAPARQAPAQAAAdIAAAFIhZAAQACAUAKALQAKAKAOAAQALAAAIgGQAIgGAEgMIAVACQgEATgOAKQgNAKgVAAQgaAAgPgQgAgVgkQgKAKgBAQIBCAAQgCgQgGgHQgKgMgPAAQgNAAgJAJg");
	this.shape_5.setTransform(81.7,38.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbA8IAAhmIg1AAIAABmIgVAAIAAh3IBeAAIAAB3g");
	this.shape_6.setTransform(69.1,38.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmBLQgRgLgIgUQgKgVABgXQgBgaAKgTQALgUARgKQATgKAVAAQAZAAARANQARANAHAXIgWAEQgGgSgLgIQgLgIgQAAQgTAAgNAJQgNAJgEAQQgGAPAAARQAAAUAGAQQAHAPAMAIQAOAIAOAAQASAAANgLQANgKAFgVIAVAFQgGAcgTAOQgSAOgZAAQgbAAgQgLg");
	this.shape_7.setTransform(54.5,36.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABWIAKgwIgjAAIgKAwIgRAAIAKgwIgTAAIAAgRIAXAAIAIgpIgfAAIAAgQIAiAAIAKgxIARAAIgKAxIAjAAIAKgxIARAAIgKAxIAUAAIAAAQIgXAAIgJApIAgAAIAAARIgjAAIgKAwgAgVAVIAiAAIAJgpIgjAAg");
	this.shape_8.setTransform(39.5,36.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAvQgQgQgBgfQABggASgQQAQgOAVAAQAZAAAQARQAQAQAAAcQgBAXgGANQgIANgNAIQgNAHgQAAQgYAAgPgQgAgYghQgLALAAAWQAAAXALAMQAKALAOAAQAPAAAKgLQAKgMAAgXQAAgWgKgLQgKgMgPAAQgOAAgKAMg");
	this.shape_9.setTransform(20.2,38.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAvQgPgQgBgeQABgTAGgPQAHgOANgHQANgIAOAAQAUAAANAKQAMAKAEASIgVADQgCgMgIgGQgGgGgLAAQgOAAgKALQgKALAAAXQAAAYAKALQAJALAOAAQAMAAAIgHQAIgIADgPIAUADQgEAVgNALQgOAMgUAAQgYAAgOgQg");
	this.shape_10.setTransform(8.1,38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slogan_05, new cjs.Rectangle(0,22,158.1,29.9), null);


(lib.slogan_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60167E").s().p("AAdA8IAAhaIg3BaIgWAAIAAh3IAUAAIAABbIA3hbIAWAAIAAB3g");
	this.shape.setTransform(108.5,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60167E").s().p("AAWA8IgWglQgGgLgFgEQgFgDgHAAIAAA3IgUAAIAAh3IAUAAIAAA0QAKAAAEgEQAEgEAGgSQAGgOAEgEQAEgFAFgBQAFgCAKAAIAEAAIAAARIgFAAQgIAAgCACQgDADgFAMQgEAMgEAEQgEAFgHAEQAMACANAVIAWAlg");
	this.shape_1.setTransform(97.8,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60167E").s().p("AAbA8IAAhmIg1AAIAABmIgVAAIAAh3IBfAAIAAB3g");
	this.shape_2.setTransform(85.6,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60167E").s().p("AgrBSIgDgTQAHACAFAAQAHAAAEgDQAEgCADgEQACgDAEgMIACgFIguh4IAWAAIAZBGIAIAbQADgNAFgNIAahHIAUAAIguB6QgHAUgDAHQgFAKgHAFQgHAFgKAAQgGAAgHgDg");
	this.shape_3.setTransform(73.6,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60167E").s().p("AAWA8IgWglQgGgLgFgEQgFgDgHAAIAAA3IgUAAIAAh3IAUAAIAAA0QAKAAAEgEQAEgEAGgSQAGgOAEgEQAEgFAFgBQAFgCAKAAIAEAAIAAARIgFAAQgIAAgCACQgDADgFAMQgEAMgEAEQgEAFgHAEQAMACANAVIAWAlg");
	this.shape_4.setTransform(63.3,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60167E").s().p("AgoAvQgPgQgBgfQABggASgQQAQgOAVAAQAZAAAPARQAQAQABAcQAAAXgIANQgHANgNAIQgNAHgQAAQgYAAgQgQgAgYghQgKALAAAWQAAAXAKAMQAKALAOAAQAQAAAJgLQAKgMAAgXQAAgWgKgLQgKgMgPAAQgOAAgKAMg");
	this.shape_5.setTransform(50.9,16.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#60167E").s().p("AAbA8IAAhmIg1AAIAABmIgUAAIAAh3IBdAAIAAB3g");
	this.shape_6.setTransform(38.2,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#60167E").s().p("AgsA1QgKgJAAgPQAAgJAEgIQAEgHAGgEQAHgEAIgCQAGgCAMgBQAYgDALgEIAAgFQAAgNgFgFQgIgHgPAAQgOAAgHAFQgHAFgDANIgUgDQADgMAGgIQAGgIAMgEQAMgFAOAAQAQAAAJAEQAKAEAFAFQAEAGACAIIABATIAAAaQAAAcABAIQACAHADAHIgVAAQgDgGgBgJQgLAKgLAEQgJAEgMAAQgUAAgLgKgAgEAIQgNABgFADQgFACgDAEQgDAFAAAFQAAAIAHAGQAGAFAMAAQAKAAAKgFQAJgFAEgJQADgHAAgOIAAgHQgLAEgVAEg");
	this.shape_7.setTransform(18.9,16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#60167E").s().p("AgtAaIATgEQADAMAIAGQAIAHAJAAQAKAAAHgGQAHgGAAgJQAAgHgEgFQgFgGgFgBQgEgBgMAAIgFAAIAAgPIARgBQAEgBAFgFQAEgEAAgHQAAgIgGgFQgFgFgJAAQgQAAgHAUIgTgDQAJgiAhAAQAUAAALALQAKAKAAAPQAAAPgOAIQAJAEAFAIQAEAHAAALQAAAQgLAKQgMAKgVAAQgpAAgGglg");
	this.shape_8.setTransform(7.1,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slogan_04, new cjs.Rectangle(0,0,117.1,29.9), null);


(lib.slogan_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBNQgKgMAAgWQAAgTAJgMQAJgMARAAQAQAAAKALQAKALAAAWQAAAVgKAMQgLAKgPABQgPgBgKgKgAApAUQgFAHAAARQAAARAFAGQAFAGAIAAQAHAAAFgGQAFgGAAgSQAAgQgFgHQgFgGgHAAQgIAAgFAGgAg1BYIBaivIARAAIhaCvgAhOgKQgKgLAAgXQAAgRAJgNQAJgNARAAQAPAAALAMQAKALAAAVQAAAVgLAMQgKAKgPAAQgPAAgKgKgAhBhBQgFAGAAARQAAARAFAGQAFAHAHAAQAIAAAFgHQAFgHAAgRQAAgRgFgFQgFgIgIABQgHgBgFAIg");
	this.shape.setTransform(153.1,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBGQgPgMgCgVIAVgCQADAQAJAIQAIAHANAAQANAAALgLQAJgLABgSQAAgSgKgJQgKgKgPAAQgKAAgHAFQgJAEgEAGIgUgCIARhUIBRAAIAAATIhBAAIgJAtQAPgLAPAAQAXAAAOAPQAPAOAAAYQAAAXgNAQQgQAUgaAAQgXAAgOgNg");
	this.shape_1.setTransform(136.4,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BTQAAgHADgHQAEgLAJgLQAJgLASgOQAagWAJgMQAKgNAAgMQAAgMgJgIQgJgJgNAAQgOAAgJAJQgJAJAAAQIgVgCQACgYAOgMQAOgMAXAAQAYAAAOANQAOANAAAUQAAAKgEAJQgEAKgKAKQgJAKgWATQgSAPgFAGQgFAFgDAGIBQAAIAAATg");
	this.shape_2.setTransform(123.2,37.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAvQgQgQAAgfQAAggAUgQQAPgOAVAAQAZAAAPARQAQAQAAAcQABAXgIANQgGANgOAIQgNAHgQAAQgYAAgQgQgAgYghQgLALABAWQgBAXALAMQAKALAOAAQAPAAALgLQAJgMABgXQgBgWgJgLQgLgMgPAAQgOAAgKAMg");
	this.shape_3.setTransform(104.2,40);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAvBNIAAgiIhdAAIAAAiIgRAAIAAgzIALAAQAVgcAAhKIBSAAIAABmIANAAIAAAzgAghAaIBAAAIAAhVIguAAQgCA6gQAbg");
	this.shape_4.setTransform(90.6,41.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWA8IgWglQgGgLgFgEQgFgDgHAAIAAA3IgUAAIAAh3IAUAAIAAA0QAKAAAEgEQAEgEAGgSQAGgOAEgEQAEgFAFgBQAFgCAKAAIAEAAIAAARIgFAAQgIAAgCACQgDADgFAMQgEAMgEAEQgEAFgHAEQAMACANAVIAWAlg");
	this.shape_5.setTransform(73.6,40);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAA/QgWAAgNgMQgNgMgDgUIAUgDQAEAeAaAAQAOAAAIgKQAIgJACgUIgpAAIAAgQIApAAQgCgQgJgKQgIgKgNAAQgXAAgFAZIgUgDQACgRANgLQAMgLAVAAQAYAAAOARQAPARAAAcQABAdgOASQgNAQgXAAIgDAAg");
	this.shape_6.setTransform(61.6,40);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfBNQgMgKgHgPQgFgQAAglQAAgvAPgRQARgQAgAAQAVAAADgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIASAAQgBAMgEAFQgEAFgHABQgGABgTAAQgZAAgIAFQgKAFgEALQgEAKAAARQAHgLALgGQAKgGAMAAQAXAAAQARQAPAQAAAbQAAAVgHANQgIAOgLAHQgKAHgTAAQgUAAgMgJgAgYgGQgJAMAAAVQAAAVAKALQALALANAAQAQAAAJgNQAKgNAAgVQAAgTgJgLQgKgMgQAAQgPAAgKANg");
	this.shape_7.setTransform(49.5,37.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMA8IAAh3IAVAAIAABmIAuAAIAAhmIATAAIAABmIAuAAIAAhmIAVAAIAAB3g");
	this.shape_8.setTransform(33.5,40);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAA/QgWAAgNgMQgNgMgDgUIAUgDQAEAeAaAAQAOAAAIgKQAIgJACgUIgpAAIAAgQIApAAQgCgQgJgKQgIgKgNAAQgXAAgFAZIgUgDQACgRANgLQAMgLAVAAQAYAAAOARQAPARAAAcQABAdgOASQgNAQgXAAIgDAAg");
	this.shape_9.setTransform(18.1,40);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWA8IgWglQgGgLgFgEQgFgDgHAAIAAA3IgUAAIAAh3IAUAAIAAA0QAKAAAEgEQAEgEAGgSQAGgOAEgEQAEgFAFgBQAFgCAKAAIAEAAIAAARIgFAAQgIAAgCACQgDADgFAMQgEAMgEAEQgEAFgHAEQAMACANAVIAWAlg");
	this.shape_10.setTransform(7.8,40);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#60167E").s().p("AAdBTIAAhaIg3BaIgWAAIAAh4IAUAAIAABbIA3hbIAWAAIAAB4gAgUg8QgJgIgCgOIAOAAQACAIAFAEQAEADAHABQAJgBAFgDQAFgEABgIIAOAAQgBAOgJAIQgJAIgOgBQgOABgIgIg");
	this.shape_11.setTransform(87.5,14.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#60167E").s().p("AgsA1QgKgJAAgPQAAgJAEgIQAEgHAGgEQAHgEAIgCQAGgCAMgBQAYgDALgEIAAgFQAAgNgFgFQgIgHgPAAQgOAAgHAFQgHAFgDANIgUgDQADgMAGgIQAGgIAMgEQAMgFAOAAQAQAAAJAEQAKAEAFAFQAEAGACAIIABATIAAAaQAAAcABAIQACAHADAHIgVAAQgDgGgBgJQgLAKgLAEQgJAEgMAAQgUAAgLgKgAgEAIQgNABgFADQgFACgDAEQgDAFAAAFQAAAIAHAGQAGAFAMAAQAKAAAKgFQAJgFAEgJQADgHAAgOIAAgHQgLAEgVAEg");
	this.shape_12.setTransform(74.5,16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#60167E").s().p("AAcA8IAAgwQgTAGgPAAQgOAAgKgHQgKgHgEgJQgEgKAAgNIAAgfIAUAAIAAAXQAAAOACAHQACAHAHAFQAGAEAKAAQALAAASgGIAAg2IAVAAIAAB3g");
	this.shape_13.setTransform(61.8,16.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#60167E").s().p("AgrBSIgDgTQAHACAFAAQAHAAAEgDQAEgCADgEQACgDAEgMIACgFIguh4IAWAAIAZBGIAIAbQADgNAFgNIAahHIAUAAIguB6QgHAUgDAHQgFAKgHAFQgHAFgKAAQgGAAgHgDg");
	this.shape_14.setTransform(50.4,19.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#60167E").s().p("Ag6A8IAAgRIAJAAQAHAAACgCQADgBABgDQABgDAAgPIAAhPIBeAAIAAB4IgVAAIAAhnIg1AAIAAA7QAAAVgBAHQgBAHgGAFQgHAFgLAAIgRgBg");
	this.shape_15.setTransform(37.1,17);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#60167E").s().p("AgnAvQgQgQAAgfQAAggASgQQAQgOAVAAQAZAAAQARQAQAQAAAcQgBAXgGANQgIANgNAIQgNAHgQAAQgYAAgPgQgAgZghQgJALgBAWQABAXAJAMQALALAOAAQAPAAAKgLQALgMgBgXQABgWgLgLQgKgMgPAAQgOAAgLAMg");
	this.shape_16.setTransform(25,16.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#60167E").s().p("AArBTIAAiSIhVAAIAACSIgWAAIAAilICBAAIAAClg");
	this.shape_17.setTransform(10.2,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slogan_03, new cjs.Rectangle(0,0,165.6,52.9), null);


(lib.slogan_011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdA8IAAhaIg3BaIgWAAIAAh3IAUAAIAABbIA3hbIAWAAIAAB3g");
	this.shape.setTransform(86.9,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA8IAAh3IBDAAIAAARIgvAAIAABmg");
	this.shape_1.setTransform(77,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwA8IAAh3IAUAAIAAAvIAaAAQAYAAAOAKQANAJAAARQAAAPgLALQgLAKgZAAgAgcArIAVAAQATAAAIgEQAIgFAAgKQAAgIgGgGQgGgGgUAAIgYAAg");
	this.shape_2.setTransform(66.3,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcA8IAAg1Ig3AAIAAA1IgUAAIAAh3IAUAAIAAAyIA3AAIAAgyIAUAAIAAB3g");
	this.shape_3.setTransform(53.5,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAvQgPgRgBgdQABgdAPgRQAQgRAYAAQAYAAAPARQAQAQAAAdIgBAFIhYAAQABAUAKALQAKAKAOAAQALAAAIgGQAIgGAEgMIAWACQgGATgNAKQgNAKgVAAQgaAAgPgQgAgWgkQgKAKAAAQIBCAAQgCgQgGgHQgKgMgPAAQgNAAgKAJg");
	this.shape_4.setTransform(40.6,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBNIAAgiIhdAAIAAAiIgRAAIAAgzIALAAQAWgcgChKIBTAAIAABmIANAAIAAAzgAghAaIBAAAIAAhVIguAAQgCA6gQAbg");
	this.shape_5.setTransform(27.1,18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwA8IAAh3IAvAAQAQAAAIADQAJADAGAHQAGAIAAALQAAAJgEAGQgDAGgHAFQAIABAGAIQAFAIAAALQgBARgLAIQgLAIgVAAgAgcArIAbAAQAQAAAHgDQAGgFAAgJQAAgGgDgFQgEgFgGgBQgGgCgMAAIgZAAgAgcgIIAWAAQAMAAAFgCQAFgBADgEQAEgEAAgGQAAgKgGgDQgHgEgQAAIgWAAg");
	this.shape_6.setTransform(8.4,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slogan_011, new cjs.Rectangle(0,0,95.5,29.9), null);


(lib.slogan_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60167E").s().p("AAdA8IAAhaIg3BaIgWAAIAAh3IAUAAIAABbIA3hbIAWAAIAAB3g");
	this.shape.setTransform(82.8,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60167E").s().p("AAWA8IgWglQgGgLgFgEQgFgDgHAAIAAA3IgUAAIAAh3IAUAAIAAA0QAKAAAEgEQAEgEAGgSQAGgOAEgEQAEgFAFgBQAFgCAKAAIAEAAIAAARIgFAAQgIAAgCACQgDADgFAMQgEAMgEAEQgEAFgHAEQAMACANAVIAWAlg");
	this.shape_1.setTransform(72.1,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60167E").s().p("AgzBUIAAilIATAAIAAAQQAGgJAIgFQAIgFALAAQAPABANAHQALAJAGAOQAGAOAAARQAAATgGAOQgHAPgMAIQgNAHgOAAQgKAAgHgEQgJgEgFgHIAAA6gAgXg3QgKAMAAAXQAAAXAJAKQAKAMAOAAQAMAAAJgMQALgLgBgYQAAgWgJgMQgJgMgNAAQgMABgLAMg");
	this.shape_2.setTransform(60.1,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60167E").s().p("AgsA1QgKgJAAgPQAAgJAEgIQAEgHAGgEQAHgEAIgCQAGgCAMgBQAYgDALgEIAAgFQAAgNgFgFQgIgHgPAAQgOAAgHAFQgHAFgDANIgUgDQADgMAGgIQAGgIAMgEQAMgFAOAAQAQAAAJAEQAKAEAFAFQAEAGACAIIABATIAAAaQAAAcABAIQACAHADAHIgVAAQgDgGgBgJQgLAKgLAEQgJAEgMAAQgUAAgLgKgAgEAIQgNABgFADQgFACgDAEQgDAFAAAFQAAAIAHAGQAGAFAMAAQAKAAAKgFQAJgFAEgJQADgHAAgOIAAgHQgLAEgVAEg");
	this.shape_3.setTransform(46.8,40);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60167E").s().p("AAvBNIAAgiIhdAAIAAAiIgRAAIAAgzIALAAQAVgcgBhKIBTAAIAABmIANAAIAAAzgAghAaIBAAAIAAhVIguAAQgCA6gQAbg");
	this.shape_4.setTransform(33.3,41.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60167E").s().p("AgoAvQgQgQAAgfQAAggAUgQQAPgOAVAAQAZAAAPARQAQAQAAAcQABAXgIANQgGANgOAIQgNAHgQAAQgYAAgQgQgAgYghQgLALABAWQgBAXALAMQAKALAOAAQAPAAALgLQAJgMABgXQgBgWgJgLQgLgMgPAAQgOAAgKAMg");
	this.shape_5.setTransform(20.9,40);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#60167E").s().p("AAbA8IAAhmIg1AAIAABmIgVAAIAAh3IBfAAIAAB3g");
	this.shape_6.setTransform(8.2,40);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#60167E").s().p("AAdBTIAAhaIg3BaIgWAAIAAh4IAUAAIAABbIA3hbIAWAAIAAB4gAgUg8QgJgIgCgOIAOAAQACAIAFAEQAEADAHABQAJgBAFgDQAFgEABgIIAOAAQgBAOgJAIQgJAIgOgBQgOABgIgIg");
	this.shape_7.setTransform(121,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#60167E").s().p("AgsA1QgKgJAAgPQAAgJAEgIQAEgHAGgEQAHgEAIgCQAGgCAMgBQAYgDALgEIAAgFQAAgNgFgFQgIgHgPAAQgOAAgHAFQgHAFgDANIgUgDQADgMAGgIQAGgIAMgEQAMgFAOAAQAQAAAJAEQAKAEAFAFQAEAGACAIIABATIAAAaQAAAcABAIQACAHADAHIgVAAQgDgGgBgJQgLAKgLAEQgJAEgMAAQgUAAgLgKgAgEAIQgNABgFADQgFACgDAEQgDAFAAAFQAAAIAHAGQAGAFAMAAQAKAAAKgFQAJgFAEgJQADgHAAgOIAAgHQgLAEgVAEg");
	this.shape_8.setTransform(108,16.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#60167E").s().p("ABDBNIAAgiIiWAAIAAh3IAVAAIAABmIAuAAIAAhmIATAAIAABmIAvAAIAAhmIAUAAIAABmIAOAAIAAAzg");
	this.shape_9.setTransform(92.5,18.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#60167E").s().p("AgsA1QgKgJAAgPQAAgJAEgIQAEgHAGgEQAHgEAIgCQAGgCAMgBQAYgDALgEIAAgFQAAgNgFgFQgIgHgPAAQgOAAgHAFQgHAFgDANIgUgDQADgMAGgIQAGgIAMgEQAMgFAOAAQAQAAAJAEQAKAEAFAFQAEAGACAIIABATIAAAaQAAAcABAIQACAHADAHIgVAAQgDgGgBgJQgLAKgLAEQgJAEgMAAQgUAAgLgKgAgEAIQgNABgFADQgFACgDAEQgDAFAAAFQAAAIAHAGQAGAFAMAAQAKAAAKgFQAJgFAEgJQADgHAAgOIAAgHQgLAEgVAEg");
	this.shape_10.setTransform(76,16.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#60167E").s().p("AgzBUIAAilIATAAIAAAQQAGgJAIgFQAJgFAKAAQAPABANAHQALAJAGAOQAGAOAAARQAAATgGAOQgHAPgNAHQgNAIgNAAQgKAAgIgEQgHgEgGgHIAAA6gAgWg4QgLANAAAXQAAAWAKALQAJALANAAQANABAKgMQAKgLgBgYQAAgWgJgMQgJgMgNAAQgNABgJALg");
	this.shape_11.setTransform(63.5,19.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#60167E").s().p("AgwA8IAAh3IAvAAQAQAAAIADQAJADAGAHQAGAIAAALQAAAJgEAGQgDAGgHAFQAIABAGAIQAFAIAAALQgBARgLAIQgLAIgVAAgAgcArIAbAAQAQAAAHgDQAGgFAAgJQAAgGgDgFQgEgFgGgBQgGgCgMAAIgZAAgAgcgIIAWAAQAMAAAFgCQAFgBADgEQAEgEAAgGQAAgKgGgDQgHgEgQAAIgWAAg");
	this.shape_12.setTransform(50.9,16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#60167E").s().p("AgnAvQgPgRgBgdQABgdAPgRQAQgRAYAAQAYAAAPARQAQAQAAAdIgBAFIhYAAQABAUAKALQAKAKAOAAQALAAAIgGQAIgGAEgMIAWACQgGATgNAKQgNAKgVAAQgaAAgPgQgAgWgkQgKAKAAAQIBCAAQgCgQgGgHQgKgMgPAAQgNAAgKAJg");
	this.shape_13.setTransform(37.9,16.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#60167E").s().p("AgzBUIAAilIASAAIAAAQQAHgJAIgFQAIgFALAAQAPABAMAHQAMAJAGAOQAGAOAAARQAAATgHAOQgGAPgNAHQgMAIgOAAQgJAAgJgEQgHgEgGgHIAAA6gAgWg4QgLANAAAXQAAAWAJALQAKALANAAQANABAKgMQAJgLABgYQAAgWgKgMQgKgMgMAAQgNABgJALg");
	this.shape_14.setTransform(25.4,19.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#60167E").s().p("AArBTIAAiSIhVAAIAACSIgWAAIAAilICBAAIAAClg");
	this.shape_15.setTransform(10.2,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slogan_01, new cjs.Rectangle(0,0,129.6,52.9), null);


(lib.round_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjVDWQhahYAAh+QAAh9BahYQBYhZB9AAQB+AABZBZQBYBYAAB9QAAB+hYBYQhZBZh+AAQh9AAhYhZg");
	this.shape.setTransform(30.4,30.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_06, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D0F8C").s().p("AlzFzQiaiZAAjaQAAjZCaiZQCbiaDYAAQDaAACZCaQCaCZAADZQAADaiaCZQiZCajaAAQjYAAibiag");
	this.shape.setTransform(30.3,30.3,0.577,0.577);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_05, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D0F8C").s().p("AlzFzQiZiZgBjaQABjZCZiZQCbiaDYAAQDZAACbCaQCZCZABDZQgBDaiZCZQibCajZAAQjYAAibiag");
	this.shape.setTransform(30.3,30.3,0.577,0.577);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_04, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D0F8C").s().p("AjVDWQhahYAAh+QAAh9BahYQBYhZB9AAQB+AABZBZQBYBYAAB9QAAB+hYBYQhZBZh+AAQh9AAhYhZg");
	this.shape.setTransform(30.4,30.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_03, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28B93C").s().p("AlzFzQiaiZAAjaQAAjZCaiZQCbiaDYAAQDaAACZCaQCaCZAADZQAADaiaCZQiZCajaAAQjYAAibiag");
	this.shape.setTransform(30.3,30.3,0.577,0.577);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_02, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28B93C").s().p("AlzFzQiZiZgBjaQABjZCZiZQCbiaDYAAQDZAACbCaQCZCZABDZQgBDaiZCZQibCajZAAQjYAAibiag");
	this.shape.setTransform(30.3,30.3,0.577,0.577);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round_01, new cjs.Rectangle(0,0,60.7,60.7), null);


(lib.round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AouIuQh+h+g5iaQgwiBAAiVQAAlGDnjoQDojnFGAAQFHAADnDnQDoDoAAFGQAACVgwCBQg5Cbh/B9QjnDolHAAQlGAAjojog");
	this.shape.setTransform(79,79);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.round, new cjs.Rectangle(0,0,158,158), null);


(lib.money_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvnG4IAAtvIfPAAIAANvg");
	this.shape.setTransform(100,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_shadow, new cjs.Rectangle(0,0,200,88), null);


(lib.money_pack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlxNMQilhJiBiFQh/iDhHikQhIipAAiuQAAl8D7kDQD4kBGAgZQAJgBAfAKQAhAKAZABQCjAGB8AsQBnAkBgBHQA9AZBUBWQA1A1AnA0QANATgIAZQBZCVAgCjQANAgAEAOIAOAgQALAjgKAQQgHAKgKAHIAAAaQAACPgbCRQggCpgrgKQhuDqjiB8QjUB1kQAAQi6AAithOg");
	mask.setTransform(96.4,95.6);

	// Layer_1
	this.instance = new lib.moneypack();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_pack, new cjs.Rectangle(3,3.4,186.8,184.5), null);


(lib.money_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.money();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_all, new cjs.Rectangle(0,0,201,88), null);


(lib.megafon_round = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmGOkQi0hMiLiNQiMiMhMi0QhPi9AAjNQAAjNBPi9QBMi1CMiMQCLiMC0hNQC7hQDLAAQDMAAC7BQQC0BNCLCMQCLCMBNC1QBPC9AADNQAADNhPC9QhMC1iMCLQiLCNi0BMQi7BQjMgBQjMABi6hQg");
	this.shape.setTransform(35.6,35.9,0.355,0.355);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon_round, new cjs.Rectangle(0,0,71.3,71.8), null);


(lib.megafon_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28B93C").s().p("AimStIAAyBQABghAWgWQAXgXAggBIB9AAQAEAAADgDQADgDAAgEIAAx/IB4AAIAASvIgBAAQAAAigXAYQgYAXgiAAIh5AAQgEAAgDAEQgEADAAAEIAAROg");
	this.shape.setTransform(9.6,42.4,0.355,0.355);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#28B93C").s().p("AhXBYQgkgkAAg0QAAgyAkgmQAkgkAzAAQAzAAAlAkQAkAlAAAzQAAA0gkAkQgkAlg0AAQgzAAgkglg");
	this.shape_1.setTransform(4.4,30.5,0.355,0.355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon_face, new cjs.Rectangle(0,0,15.5,84.9), null);


(lib.megafon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9EgIAAg/Ig2AAQh7AAg/gzQg5gsgPhcQgGgeAAgoQAAh9A8hAQA/hDCGABID1AAQCGgBA/BDQA8BAAAB9QAAAngFAfQgQBbg4AtQhAAzh7AAIg2AAIAAA/gAA+B3IA5AAQA7AAAggVQAbgTAPgpQAHgTAAgyQAAhNgigmQgfgkg4AAIhMAAgAjgiSQgiAmAABNQAAAyAIATQAPApAaATQAgAVA7AAIA5AAIAAktIhMAAQg4AAgfAkg");
	this.shape.setTransform(96.8,10.7,0.355,0.355);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUEAQiLAAg/g/Qg9g9AAiDIAAgBQAAiDA9g9QA+g/CLAAIArAAQCLAAA/A/QA8A9AACDIAAABQAACDg9A9Qg/A/iLAAgAiDhwQgfAjAABNIAAABQAABPAhAkQAiAkBMAAIAnAAQBMAAAigkQAhgkAAhPIAAgBQAAhMgggkQgigmhNAAIgnAAQhPAAghAmg");
	this.shape_1.setTransform(123.5,12,0.355,0.355);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjcD5IAAmnQAAgeAVgVQAVgXAgAAIFuAAIAABpIkxAAQgEAAgEADQgCADAAAFIAAF9g");
	this.shape_2.setTransform(57.5,12.1,0.355,0.355);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiSD5QgfAAgWgXQgUgWgBgdIAAldQABgeAUgVQAWgXAfAAIFuAAIAABpIkxAAQgEAAgDADQgDADAAAFIAABLIE0AAIAABlIk0AAIAABZQAAAEADAEQADADAEAAIExAAIAABpg");
	this.shape_3.setTransform(38.8,12.1,0.355,0.355);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrDUIijlzIAAHDIh8AAIAAnPQAAg9AjgiQAfgeAsAAQArAAAeAYQAdAWAVAwIChF2ICil2QAVgwAdgWQAegYArAAQAtAAAeAeQAjAiAAA9IAAHPIh8AAIAAnDIijFzQgjBVhJAAQhHAAgkhVg");
	this.shape_4.setTransform(14,10.6,0.355,0.355);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACtD/IgthpIj/AAIgtBpIiEAAIDLm6QAPghAdgSQAbgQAeAAQAgAAAaAQQAdASAPAhIDLG6gABWAyIhMi0QgCgHgIAAQgGAAgDAHIhNC0ICsAAg");
	this.shape_5.setTransform(72.9,11.9,0.355,0.355);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AB+D5IAAjJIj7AAIAADJIh8AAIAAnxIB8AAIAAC8ID7AAIAAi8IB8AAIAAHxg");
	this.shape_6.setTransform(145.4,12.1,0.355,0.355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.megafon, new cjs.Rectangle(0,0,154.3,21.1), null);


(lib.mediamarkt_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F55493").s().p("AArFjQA0gVAwgfQAZgQAOgMQBVhKAHhjQAIhhhIgwQAGAHAEAKQA3BCggBbQghBdhlAxQgQAHgbAJQg2ASg2AGQgogbgbgdQA0AHA3gDQAagBARgDQBugWA4hSQA3hQglhOIAAAEIgBALQARBWhKBAQhLBChwgIQgRgCgbgFQg1gLgwgUQgXgqgMguIgBgHQApAgAxAZQAYAMAQAGQBpAkBZgqQBXgpAJhWQgEAJgGAHQgfBQhfARQhgAShcg/QhBgygyg6IhCFmQgCAKgNAAIhLAAQgJAAgDgFQgDgDAAgFIAEgTQheA6hYgQQgygKgpgrQgpgrgJg0IgEgjIgCgXIghC6QgCAKgNAAIhUAAQgJAAgCgDQgFgGACgGIBTnIQADgMAMAAIBUAAQAHAAAEAFQAFAFgBAHIgjC5IABgDQAahJA7g2QAzgwA8gSQA9gSA9APIALADQAmARARAPQABgLADgJIADgGQAFgMALAAIBMAAQAHAAAFAEQADAEACAGQARAwAgA0QAQAZAMARQBLBWBkAGQBjAGAwhLIgLAHIgCACIAAAAQhCA9hegfQhfgggzhmQgHgQgJgZQgRg0gHg1QAbgtAmgkQgIA1ADA4QACAcADARQAVBvBSA3QBSA3BPgnIgMABIgHAAQhWAQhAhKQhBhKAIhxQACgRAGgcQALg2AVgyQAmgVAsgMQggAqgYAxIgRAoQgmBsAtBaQArBXBYAFQgGgCgEgEIgCAAIAAgBQhWgagUhhQgUhjA/hfIAdgjQAlgpAqghQA3AAAxAQQgzAUgwAfIglAbQhXBLgGBkQgGBjBKAvQgFgGgEgIQg8hBAgheQAghfBngyIArgRQA3gSA3gGQApAaAiAjQg2gIg6ADIguAEQhwAWg4BUQg2BRAnBOIgBgJIABgGQgThXBKhBQBLhDBzAIIAuAIQA5AMAzAWQAWAoALAtIADANQgsgjg0gbIgsgUQhpgkhZAqQhXApgJBWQAEgKAGgHQAghQBegQQBggRBdA+IAkAeQAsAnAhAsQgDAvgNAqQgUgzgegvIgbglQhKhUhigIQhggIgzBGQAHgEAHgDQBDg4BcAgQBeAhAxBkIAVA6QAXBEAFA1IH/pMQADgEAFAAIBrAAQAFAAADAEQADADAAAFIAAACQhAF4gRBDQAwg2ExmPQADgEAFAAIBlAAQAGAAADAEQADADgBAHIhLGUQAag7AyguQAzgwA8gSQA8gSA+AOIALAEQAiANAXAVIAGgcQADgMAMAAIBMAAQAHAAAEAFQADAEAAAGIhUHKQgCAKgNAAIhLAAQgJAAgCgDQgEgEAAgGIAEgTQheA6hYgQQgygKgpgrQgpgrgJg0QgCgLACgRIADgcIAAgMIgiDFQgCAJgJAAIhcAAQgGAAgDgFQgCgCAAgEIAAgDQARhTAeixQAdilAJgrQgdAjirDgIilDbQgDAEgFAAIheAAQgGAAgDgEQgCgDAAgEIAAgCQAThfAdioIAkjOQgtA2mLGoQgDAEgGAAIh4AAQgGAAgEgHQgCgEADgGIAAgBIAAAAIALgTQANgYAFgYQAIg0gGg4IgHgtQgVhthRg3QhPg3hOAiIADAAQAIAAAGABQBVgNA+BJQBABKgIBwIgHAuQgMA4gWAzQgnATgpALIgOADQAkgrAag0QAOgaAGgSQAlhsgthaQgshXhYgFQAGACAIAFQBVAbAUBgQAVBjhBBgQgKAPgUAVQgnArgtAiQgzgDgxgQgAZ6gSQgeAGgXAPQgoAegVAmQgVAmAAApQAAAMACAOQALAtAgAWQAiAWA9gKQApgJAlgmQAkglAOgtQAFgOAAgUQAAgjgPgaQgVglgugLQgOgEgPAAQgNAAgOADgAnagSQgdAGgYAPQgoAegVAmQgVAmAAApQAAAOACAMQAOAvAdAUQAjAXBAgMQApgKAkglQAigkANgtQAFgQAAgSQAAgigPgbQgVglgugLQgOgEgPAAQgNAAgOADgAyTFtQgygKgogrQgpgrgKg0QgFgbAAgdQgDAEgGAAIleAAIgBAEQAAAFAEAQIACAFQANAfAbARQAcASAigBQBEgBA3g/QAEgFAHAAIBOAAQAIAAAEAHQAFAGgEAIQghBGhEArQhEArhOAAQg3gCgrgaQgsgZgagsQgZgvABhAIgjC6QgCAJgJAAIhbAAQgFAAgDgEQgDgEAAgDIABgDQAWhcAdiwQAfi5AGgdQgvA3lBG1QgDAEgGAAIhdAAQgFAAgEgEQgDgEAAgDIABgDQAVhhAeirIAljVQgtA2mDG1QgDAEgFAAIh7AAQgGAAgEgHIgBgFQAAgEADgDIJhq9QADgEAGAAIBgAAQAFAAADAEQADADAAAEIgBACQhBF3gOBEQAwg2EzmOQAEgEAEAAIBjAAQAGAAADAEQADAFgBAFIhIGJIACgEQAihCBCgtQBAgsBIgJIABAAQBBgDAxAYQAxAYAeAxIAAABQAYAuADA8QAZhHA8g4QAzgwA9gSQA8gSA+AOIAKAEQAlAQASAQIAjipQADgMAMAAIBMAAQAHAAAEAGQAFAGgCAGIhvJWQgBAKgNAAIhLAAQgJAAgDgDQgDgFAAgFIADgTQhJAuhGAAQgUAAgTgEgAw0gSQgdAGgXAPQgoAegWAmQgWAmAAApQAAAQACAKQAKAtAhAXQAkAXA9gMQAqgKAkglQAlglAMgtQAEgSAAgPQABgkgQgaQgYgmgpgKQgOgEgPAAQgOAAgOADgA36gSQghAFgfASQghAVgQAeIDiABQgCgagagZQgRgOgQgFQgQgGgXAAIgNABgEAmiAFjIgHgDIgFADIhbAAQgJAAgDgHQhZiTgeguQgfCvgFAPQgDAKgLAAIhSAAQgHAAgEgFQgEgFABgHIA+lvIgNABQhTANgWBTIg4ETQgCAMgMAAIhJAAQgHAAgFgFQgEgFABgHIBTnGQADgLAMAAIBMAAQAHAAAEAEQAFAGgCAGIgCALQAWgOAagJQAcgKAZAAQAHAAAFAGIAAAAQALhDAOhBQABgFAEgDQAEgEAFAAIBTAAQAHAAAEAGQAEADAAAGIAAACIgwEEQAogqBEhXQAFgEAGAAIBiAAQAHAAAFAGQAEgGAIAAIAvAAIAYiDQADgNAMAAIBUAAQAHAAAFAGQADAEAAAFIgYCAIBWAAQAHAAAEAGQADADAAAGIAAACIgNBKQgBAGgEADQgEADgFAAIhcABIhEFvQAAAFgEADQgEAEgGAAgEAkYABZICKDiIAii9IAciXIgpAAQgHAAgEgFQgFgFACgHIAKg4gAr0iNQgHAAgEgGQgFgGACgIIARhhQABgGAEgDQAFgEAFAAIBUAAQAHAAAFAGQAEAGgBAGIgSBiQgBAFgEAEQgFAFgFAAgEAqhgC5QgPgPAAgWQAAgWAQgPQAPgPAVAAQAVAAAQAPQAPAPAAAWQAAAWgPAPQgPAPgWAAQgVAAgQgPgEAqogD8QgMAMAAASQAAASAMAMQANANARAAQASAAAMgNQANgMAAgSQAAgSgNgMQgMgNgSAAQgRAAgNANgEArTgDCIgJgWIgOAAIAAAWIgMAAIAAg4IAaAAQAVAAAAARQAAAGgEAFIgGAEIAKAYgEAq8gDiIAMAAQALAAAAgIQAAgHgKAAIgNAAg");
	this.shape.setTransform(281,37.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mediamarkt_logo, new cjs.Rectangle(0,0,562,74.8), null);


(lib.lamoda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000102").s().p("AzdGhQgIgaAMg9IAYhyIgDAAQhDBfhYBHQhCA3guAAQgbAAgUggQgXgmAAhDQAAhcAnhZQAohbBBg2QAwgoA7gZQA/gbA3AAQAdAAAuAIQAgAHANAAIAEAFQgPA8gXBqQgZB0gUBtQgLA0ANAAQAIAAAagSQAdgUAYgZIAPAdQguA4g4AlQgxAhgaAAQgTAAgGgUgA0Ig8QgXAHgQAMQg7ArglBfQgiBZAABeQAAAmAKAWQAJATANAAQAiAABRhXQBOhUAghBQAIgcAgiRQgOgHgVgEQgYgGgWAAQgYAAgXAHgA8WGYQgIglARhQQBonmAWhsQAJgngJgLQgKgKgpAAIghgCIAFgcQA4gHA/gTIA8gRQAIAAABAJQACAIgEATIiWLBQgIAqANAAQALAAAegUQAfgVAZgZIASAbQgtA2g6AmQg2AlgdAAQgUAAgGgdgAZHGZQgWgSgKgXQgtAegXANQgqAXgUAAQhLAAgxgwQgtgtAAg5QAAgtAWgcQAWgcAygSIBugmQBEgZATgQIAAgyQAAgxgVgdQgTgagfAAQgPAAgLAFQgKAFgLANQgUAXgNA4QgLAnglAAQgcAAgagRQgdgSAAgXQAAgaAsgcQAvgeAwgVQA/gbA1gIQBKAAA1ApQAgAZAOAlQALAeAAAuIAADYQAABFAqAAQAUAAAUgHIAMAlIiLBBQgtAAgbgZgAXaCsQgeARgMAQQgOATAAAeQAAAoAbAaQAYAXAcAAQAaAAAUgRIAAjAgAP0FyIhBApQgkAXghAAQhbAAhIhBQhThKAAh7QAAh8BfhVQBfhYCMAAQANAAAlAGIAAiJQAAgxgLgMQgMgNg4gFIAAgjQBAgGBBgMQBFgLArgNIAAKvQAAAtAIAMQAHALAfAEIAiAEIAAAlIhkAPQhTAOg7ARgANdgmQgxA4AAB5QAABjAxA6QAoAxAzAAQASAAAMgDQAPgDAPgJIAAlXQgNgfgWgQQgUgPgZAAQgnAAggAlgAA/FdQhFhMAAhrQAAiKBdhRQBThIBwAAQB7AABPBRQBKBMAABvQAACLhWBQQhOBIh1AAQiHAAhPhVgADHgdQgcA3AABiQAAB0AfBJQAgBLA3AAQAoAAAWgnQAdgyAAh5QAAh5gehDQgfhFg3AAQgoAAgZAygAksGkIAAgmQApgEAKgNQAKgOAAg2IAAjcQAAg7gZgbQgVgXglAAQgYAAgTAHQgXAIgbAVQADAeAAAOIAAD8QAAA0AKANQAJAMArAFIAAAmIkdAAIAAgmQArgFAJgMQAKgMAAg1IAAjhQAAg4gYgaQgWgZgnAAQgsAAgtAjIAAEpQAAAzAKAOQAIAMAlAFIAAAmIkoAAIAAgmQA4gFAMgNQAMgNAAg3IAAkEQAAg0gJgMQgJgNgsgJIAAgfQBrgNByggIAABXIBEgtQAkgVAVgIQAdgMAeAAQAxAAAmAbQAjAZAQAoIBTg2QA9gmAsAAQBQAAApAyQAoAwAABVIAADvQAAA2AKANQAKAMAwAGIAAAmg");
	this.shape.setTransform(181.8,43.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lamoda, new cjs.Rectangle(0,0,363.6,87.4), null);


(lib.joystick_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJkIsQi8hjAAABIgyhyQgyhzgBABQAAACkUgEQkTgDgBABQAAABgegNQgdgNAAABIh0DLQABABi4B4Ii2B4IhZjQQhXjPgBgBID8oFIAAAAIAAAAIgCh9QAAACASgQIARgOIAAAAIAAAAIAEgfQCjh1gBACQAAABATgDIASgDIAAg0ICRAAIAAAmQAAABBNgGQBNgGgBABQAAACgNANIgLAOQgBABDDADQC9ACAGABIAAgTQDAAAAFACIAAAAIAAAAIAAgrQAAACAngJQAogIAAABIAEAJQAGAHAAABQAAABAVAAQAXAAAAABQAKA1AAACQAAACBUA7QBWA8gBABIAMCbIBvEVQBvESAAABIiUGUIAAAAQgCAAi6higAuzDmIABAAIAAAAIgBAAg");
	this.shape.setTransform(94.8,65.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.joystick_shadow, new cjs.Rectangle(0,0,189.5,130.8), null);


(lib.joystick_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJvJFQi/hngBABIgzh3Qgzh4AAABQAAACkZgEQkYgEgBABQAAACgegOQgdgOgBABIh1DVQAAABi6B9Ii7B+IhajZQhZjZgBgBIECodIAAAAIAAAAIgDiCQAAABASgQIARgPIAAAAIAAAAIAFghQCmh6gBACQAAACATgEIATgDIAAg3ICTAAIAAAoQAAACBOgHQBOgGgBABQAAACgMANIgNAPQAAACDGACQDBADAFABIABgUQDDAAAFACIAAAAIAAAAIAAgtQAAACAogJQAogJAAABIAFAJQAFAIAAABQAAABAWAAQAXAAAAABQAKA3AAADQAAABBWA/QBXA+gBABIANCjIBwEhQBxEeAAABIiWGnIAAAAQgDAAi8hngAvDDxIAAAAIAAAAIAAAAg");
	mask.setTransform(96.9,68.9);

	// Layer_1
	this.instance = new lib.joystick();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.joystick_1, new cjs.Rectangle(0.6,0.5,192.8,136.8), null);


(lib.icatcher_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9800").s().p("AuGj/QAAh6BXhWQBWhWB6AAIXmAAIAAMsI3mAAQh6AAhWBWQhUBUgDB1g");
	this.shape.setTransform(70.8,48.1,0.767,0.767,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icatcher_top, new cjs.Rectangle(0,0,141.7,96.3), null);


(lib.icatcher_bg_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE7E00").s().p("A3mImQh6AAhWhWQhXhWAAh7IAAskQADB1BUBTQBWBXB6AAMAz0AAAIAAMsg");
	this.shape.setTransform(138.6,42.2,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icatcher_bg_bottom, new cjs.Rectangle(0,0,277.2,84.4), null);


(lib.headphones_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnnNYQgzgJgZAAQgeAAgcgIQgZgIgEgJIh4jeQhzjWAAABIBmleIAPgLQAPgKAAABIAAAAIAAAAIAPiBIAUgtQgOgWgBgeIAFjeQABABAMgIIAMgGQAAACBTiOQAAABBphkIBphjQAAACDegqQDegpAAABQAAACDSAzQDSAzAAABQAAACCIB6QCJB7gBABIAoGkIgMBtQAAABALAJQAMAJgBABIA3CsQA4CsgBABQj3G6AAADQAAABhOANQhNAMAAABQAAACgTAAQgSAAgBABQAAABgrhDQgshEAAABQgKgPAAgMQgBgIAKg1IAIgxQAAABgHgFQgHgFgBABIAKjtQAAABAIgFIAHgEIAPjSQAAACBSg/IBRg9QAAABATgGQATgFgBABIA6hwIAAgBIAAABIgUkvQAAABi0iHQi0iHAAABQAAACh0gXQh0gWgBABQAAABi4AcQi4AbgBABQAAACh4BuIh4BvIglFHIAbBuQAAACBQAuQBRAwgBABQAAABALAGQAMAKACAUQAuG9gGAPIgLAbQgGARAHALQAMASAEAOQAFAVgLAUQgPAehGB6IAAABIgsgHgArYmwIAAABIAAgBg");
	this.shape.setTransform(88.6,86.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.headphones_shadow, new cjs.Rectangle(0,0,177.3,172.5), null);


(lib.headphones_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnnNYQgzgJgZAAQgeAAgcgIQgZgIgEgJIh4jeQhzjWAAABIBmleIAPgLQAPgKAAABIAAAAIAAAAIAPiBIAUgtQgOgWgBgeIAFjeQABABAMgIIAMgGQAAACBTiOQAAABBphkIBphjQAAACDegqQDegpAAABQAAACDSAzQDSAzAAABQAAACCIB6QCJB7gBABIAoGkIgMBtQAAABALAJQAMAJgBABIA3CsQA4CsgBABQj3G6AAADQAAABhOANQhNAMAAABQAAACgTAAQgSAAgBABQAAABgrhDQgshEAAABQgKgPAAgMQgBgIAKg1IAIgxQAAABgHgFQgHgFgBABIAKjtQAAABAIgFIAHgEIAPjSQAAACBSg/IBRg9QAAABATgGQATgFgBABIA6hwIAAgBIAAABIgUkvQAAABi0iHQi0iHAAABQAAACh0gXQh0gWgBABQAAABi4AcQi4AbgBABQAAACh4BuIh4BvIglFHIAbBuQAAACBQAuQBRAwgBABQAAABALAGQAMAKACAUQAuG9gGAPIgLAbQgGARAHALQAMASAEAOQAFAVgLAUQgPAehGB6IAAABIgsgHgArYmwIAAABIAAgBg");
	mask.setTransform(89.9,86.8);

	// Layer_1
	this.instance = new lib.headphones();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headphones_1, new cjs.Rectangle(1.3,0.5,177.3,172.5), null);


(lib.giftmoneyPack_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqUKUQkRkRAAmDQAAmCERkSQESkRGCAAQGDAAERERQESESAAGCQAAGDkSERQkRESmDAAQmCAAkSkSg");
	this.shape.setTransform(93.4,93.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.giftmoneyPack_shadow, new cjs.Rectangle(0,0,186.9,186.9), null);


(lib.gift_pack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ap2J2QkGkDAAlzQAAlyEGkEQEFkFFxgBQFyABEFEFQEGEEAAFyQAAFzkGEDQkFEHlygBQlxABkFkHg");
	mask.setTransform(90.9,90.7);

	// Layer_1
	this.instance = new lib.giftpack();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift_pack, new cjs.Rectangle(1.6,1.5,178.6,178.5), null);


(lib.disclamer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAZQgEgCgCgDQgCgCAAgEIgBgIIAAggIAIAAIAAAcIABAJQABAEADACQACACAFAAQADAAADgCQADgCABgEQACgDAAgHIAAgbIAJAAIAAAzIgIAAIAAgHQgGAIgKAAQgEABgEgCg");
	this.shape.setTransform(97.5,69);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAaIAAgzIAIAAIAAAIQADgFACgCQACgBADgBQAFAAAEADIgDAIQgDgCgEAAQgCAAgCACQgCACgBADIgBAKIAAAag");
	this.shape_1.setTransform(93.5,68.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(90,71.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAaIAAgeIgBgIIgDgFQgDgBgEAAQgEAAgEADQgEAEAAAKIAAAbIgJAAIAAgzIAIAAIAAAIQAFgJAKAAQAFABAEABQAEACACADQACADAAADIABAIIAAAfg");
	this.shape_3.setTransform(85.8,68.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgNAIgIQAGgFAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_4.setTransform(80.3,69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAkIAAgsIgHAAIAAgHIAHAAIAAgFIABgHQACgEADgCQACgDAGABIAIAAIgBAIIgFAAQgEAAgCABQgCACAAAFIAAAEIAKAAIAAAHIgKAAIAAAsg");
	this.shape_5.setTransform(76.3,67.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAXQgEgEAAgHQAAgEACgDQACgDACgBIAGgDIAIgBQAKgBAFgCIAAgCQAAgGgCgCQgDgDgHAAQgFAAgEADQgDACgBAFIgIgBQABgGACgDQADgEAFgBQAGgCAFAAQAGAAAFACQAEABACACQACADABAEIAAAIIAAAKIABAQIACAGIgKAAIgBgGQgFAEgEABQgEACgFAAQgIAAgGgEgAgBADIgIACIgDADIgBAEQgBAEADACQADACAFABQAEgBAEgCQAEgCACgEIABgJIAAgDQgFACgIABg");
	this.shape_6.setTransform(71.9,69);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAhQgFgEAAgJIAJABQAAAEACADQAEACAFAAQAFAAAEgCQADgDACgFIAAgLQgGAHgIAAQgKAAgGgHQgGgJAAgJQAAgHADgHQADgGAFgEQAFgDAGAAQAJAAAGAHIAAgGIAIAAIAAAsQAAAMgDAFQgCAFgGADQgEADgIAAQgJAAgGgEgAgJgYQgDAFAAAJQAAAKADAEQAFAFAEAAQAHAAADgFQAFgEAAgJQAAgKgFgFQgDgFgHAAQgEAAgFAFg");
	this.shape_7.setTransform(66.2,70);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgMQAAgNAHgHQAGgHAKAAQALAAAGAHQAHAHAAAMIAAADIgmAAQABAIAEAEQAFAFAFAAQAFAAADgCQAEgDACgFIAJABQgCAHgGAFQgGAEgJAAQgLAAgGgHgAgJgOQgEADgBAHIAdAAQgBgHgDgDQgEgFgHAAQgEAAgFAFg");
	this.shape_8.setTransform(60.8,69);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaAaIAAgfIAAgHQgBgDgDgCQgCgBgDAAQgFAAgEAEQgEADAAAJIAAAcIgHAAIAAggQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBAEAAAGIAAAaIgJAAIAAgzIAIAAIAAAIQACgEAEgCQAEgCAFgBQAGABAEACQADADABADQAGgJAKAAQAIABAEAEQAEAEAAAJIAAAig");
	this.shape_9.setTransform(53.9,68.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_10.setTransform(48.3,71.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAkIAAhHIAHAAIAABHg");
	this.shape_11.setTransform(45.8,68);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAXQgFgEAAgHQAAgEACgDQABgDADgBIAHgDIAIgBQAJgBAFgCIAAgCQAAgGgCgCQgEgDgGAAQgFAAgDADQgDACgCAFIgIgBQABgGACgDQADgEAFgBQAGgCAFAAQAHAAAEACQAEABACACQACADAAAEIABAIIAAAKIAAAQIADAGIgJAAIgCgGQgFAEgFABQgDACgFAAQgJAAgEgEgAgBADIgIACIgDADIgCAEQAAAEADACQADACAFABQAEgBAEgCQAEgCACgEIABgJIAAgDQgEACgJABg");
	this.shape_12.setTransform(41.9,69);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAkIAAgzIAIAAIAAAzgAgDgZIAAgKIAIAAIAAAKg");
	this.shape_13.setTransform(38.1,68);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAUQgHgGAAgNQAAgIADgHQADgFAGgEQAFgDAGAAQAJAAAFAEQAFAEABAIIgIACQgBgGgDgCQgDgDgFAAQgFAAgEAFQgEAFgBAJQABAKAEAFQADAFAGAAQAFAAADgDQAEgEABgGIAIABQgBAJgFAFQgHAFgIAAQgKAAgGgHg");
	this.shape_14.setTransform(34.6,69);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgMQAAgNAHgHQAHgHAJAAQALAAAGAHQAHAHAAAMIAAADIgmAAQAAAIAFAEQAFAFAFAAQAFAAADgCQADgDADgFIAJABQgCAHgHAFQgFAEgJAAQgLAAgGgHgAgJgOQgEADAAAHIAcAAQgBgHgCgDQgFgFgHAAQgEAAgFAFg");
	this.shape_15.setTransform(29.2,69);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAkIAAhHIAIAAIAAAHQADgEADgCQADgCAEAAQAHABAGADQAEADADAHQACAGABAHQgBAIgCAGQgDAGgFAEQgGACgGAAQgDABgEgCQgDgCgCgDIAAAZgAgJgYQgFAGABAKQAAAJADAFQAFAEAFAAQAGAAADgEQAFgGAAgJQAAgKgFgFQgEgEgFAAQgFAAgEAEg");
	this.shape_16.setTransform(23.8,69.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAXQgFgEgCgIIAJgCQABAGAEACQACADAGAAQAGAAADgCQACgDAAgDQABgDgDgCIgJgDIgNgEQgDgBgCgDQgCgEAAgDQAAgDACgDQABgEADgCIAGgCIAHgBQAFAAAFACQAFACACACQACAEABAEIgJABQAAgDgDgCQgDgDgFAAQgFAAgDACQgCACAAADIABADIADADIAHACIANADQADABADADQABAEAAAEQABAEgDAEQgDAEgFACQgEACgGAAQgJAAgGgEg");
	this.shape_17.setTransform(18.3,69);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAXQgEgEAAgHQAAgEACgDQACgDACgBIAGgDIAIgBQAKgBAFgCIAAgCQAAgGgCgCQgDgDgHAAQgFAAgEADQgDACgBAFIgIgBQABgGACgDQADgEAFgBQAGgCAFAAQAGAAAFACQAEABACACQACADABAEIAAAIIAAAKIABAQIACAGIgKAAIgBgGQgFAEgEABQgEACgFAAQgIAAgGgEgAgBADIgIACIgDADIgBAEQgBAEADACQADACAFABQAEgBAEgCQAEgCACgEIABgJIAAgDQgFACgIABg");
	this.shape_18.setTransform(10.3,69);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANAaIAAgXIgYAAIAAAXIgJAAIAAgzIAJAAIAAAVIAYAAIAAgVIAIAAIAAAzg");
	this.shape_19.setTransform(4.8,69);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAOAaIgLgQIgDgEIgMAUIgMAAIAUgaIgSgZIALAAIAIANIADAFIAEgFIAJgNIAKAAIgSAZIAUAag");
	this.shape_20.setTransform(110.9,60.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAOAaIAAgUIgFAAIgHABQgCABgEAHIgHALIgLAAIAJgOQAFgHAEAAQgHgBgEgEQgEgEAAgFQAAgIAFgDQAFgFAJAAIAXAAIAAAzgAgHgPQgCADgBADQABAEADADQADACAHAAIAKAAIAAgRIgMAAQgHAAgCACg");
	this.shape_21.setTransform(105.4,60.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANAaIAAgmIgYAmIgJAAIAAgzIAJAAIAAAnIAXgnIAJAAIAAAzg");
	this.shape_22.setTransform(100.1,60.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAaIAAgzIAUAAQAHAAADABQAEABADAEQACAEAAAEQAAADgBADQgCADgDACQAEAAACADQACAEAAAEQAAAIgFAEQgFADgJAAgAgLATIALAAQAHAAADgCQACgCAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAIgIgBIgKAAgAgLgDIAJAAIAHAAIAEgDQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgFgDgBQgDgBgGAAIgJAAg");
	this.shape_23.setTransform(94.9,60.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgOAIgGQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAKgDAFQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_24.setTransform(89.3,60.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAaIAAgIIAEAAIAEAAIABgCIABgIIAAghIAnAAIAAAzIgIAAIAAgsIgXAAIAAAZIAAAMQgBADgCACQgDACgFAAIgHAAg");
	this.shape_25.setTransform(83.2,60.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPAUQgHgHAAgNQAAgHADgHQADgGAGgDQAFgDAGAAQAIAAAGAFQAFADABAJIgIAAQgBgEgDgDQgDgDgFAAQgFAAgEAFQgEAEgBAKQABAKAEAFQADAFAGAAQAFAAADgDQAEgDABgHIAIABQgBAJgFAFQgHAFgIAAQgKAAgGgHg");
	this.shape_26.setTransform(78.3,60.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAkIgBgJIAFABIAFgBIADgDIACgGIABgDIgUgyIAKAAIALAeIACAKIAEgKIALgeIAJAAIgUA0IgEALQgCAEgDADQgDACgEAAIgGgBg");
	this.shape_27.setTransform(73.2,61.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgNAhQgFgEgDgHQgCgGAAgQQAAgUAGgHQAIgHANAAIAKgBIABgBIAJAAQgBAFgCACQgCACgDABIgKABQgKAAgFACQgEACgBAEQgCAFAAAHQADgFAEgCQAFgDAEAAQALAAAGAHQAIAHAAALQgBAJgDAGQgDAGgFADQgEADgJAAQgIAAgFgEgAgKgCQgDAFAAAJQAAAJADAFQAFAEAFAAQAHAAAEgFQAEgGAAgJQAAgIgDgEQgFgFgHAAQgGAAgEAFg");
	this.shape_28.setTransform(65.1,59.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgOAIgGQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAKgDAFQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_29.setTransform(59.4,60.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNQAAgLAHgIQAGgHAKAAQALAAAGAHQAHAHAAAMIAAACIgmAAQAAAJAFAFQAEAEAGAAQAFAAADgDQAEgCACgGIAJABQgDAJgFAEQgGAEgJAAQgLAAgGgHgAgJgPQgEAFAAAGIAcAAQgBgGgDgEQgEgFgHAAQgFAAgEAEg");
	this.shape_30.setTransform(51,60.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNQAAgLAHgIQAHgHAKAAQAKAAAGAHQAHAHAAAMIAAACIgmAAQABAJAEAFQAFAEAFAAQAFAAADgDQADgCACgGIAJABQgBAJgHAEQgFAEgJAAQgKAAgHgHgAgJgPQgEAFAAAGIAbAAQAAgGgCgEQgFgFgGAAQgFAAgFAEg");
	this.shape_31.setTransform(45.5,60.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AANAaIAAgXIgYAAIAAAXIgJAAIAAgzIAJAAIAAAWIAYAAIAAgWIAIAAIAAAzg");
	this.shape_32.setTransform(40,60.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNAhQgFgEgDgHQgDgGAAgQQABgUAGgHQAIgHANAAIAKgBIACgBIAIAAQgBAFgCACQgCACgCABIgLABQgLAAgEACQgDACgCAEQgCAFAAAHQAEgFADgCQAFgDAEAAQALAAAGAHQAIAHAAALQgBAJgDAGQgEAGgEADQgEADgJAAQgIAAgFgEgAgKgCQgDAFAAAJQAAAJADAFQAFAEAFAAQAHAAAEgFQAEgGAAgJQAAgIgEgEQgDgFgIAAQgGAAgEAFg");
	this.shape_33.setTransform(34.4,59.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgOAIgGQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAKgDAFQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_34.setTransform(28.7,60.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWAlIAAhHIAIAAIAAAGQADgEAEgBQAEgCAEAAQAGAAAFADQAFAEADAFQACAHAAAHQAAAIgCAFQgDAHgGADQgFADgGABQgDAAgEgCQgEgCgCgDIAAAagAgJgXQgEAFgBAKQAAAJAFAEQADAGAGAAQAGAAAEgGQADgEAAgKQAAgKgDgEQgEgFgGgBQgFABgEAFg");
	this.shape_35.setTransform(23.3,61.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAUAhIAAgOIgoAAIAAAOIgHAAIAAgVIAFAAQAJgMAAggIAjAAIAAAsIAGAAIAAAVgAgOAMIAbAAIAAglIgTAAQgBAZgHAMg");
	this.shape_36.setTransform(17.3,61.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgOAIgGQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAKgDAFQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_37.setTransform(12,60.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AATAkIAAg+IgkAAIAAA+IgKAAIAAhHIA3AAIAABHg");
	this.shape_38.setTransform(5.6,59.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_39.setTransform(166.3,54.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgBAWIAMgWIgMgVIAGAAIAQAVIgQAWgAgUAWIANgWIgNgVIAHAAIAPAVIgPAWg");
	this.shape_40.setTransform(162.1,52.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAJAaIgJgQIgEgGQgCgCgDAAIAAAYIgJAAIAAgzIAJAAIAAAWQAEABABgCQADgCACgHIAEgJQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAIAHgBIABAAIAAAHIgCAAQgBAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAABIgDAGIgEAHIgDADQAEABAFAJIAKAQg");
	this.shape_41.setTransform(157.5,52.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAAbQgJAAgGgFQgFgGgCgIIAJgBQACANALAAQAGAAADgFQADgEABgIIgRAAIAAgGIARAAQgBgHgDgFQgEgEgFAAQgKAAgCALIgJgCQABgHAGgFQAFgEAJAAQAKAAAGAHQAGAHAAAMQAAAMgFAIQgGAHgJAAIgCAAg");
	this.shape_42.setTransform(152.3,52.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgNAhQgFgEgDgHQgCgGAAgQQAAgUAGgHQAIgHANAAIAKgBIABgBIAIAAQAAAFgCACQgCACgDABIgLABQgJAAgFACQgEACgBAEQgCAFAAAHQADgFAEgCQAFgDAEAAQALAAAGAHQAIAHgBALQAAAJgDAGQgDAGgFADQgEADgJAAQgIAAgFgEgAgKgCQgDAFAAAJQAAAJADAFQAFAEAFAAQAHAAAEgFQAEgGAAgJQAAgIgDgEQgFgFgHAAQgGAAgEAFg");
	this.shape_43.setTransform(147.1,51.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AggAaIAAgzIAIAAIAAAsIAUAAIAAgsIAIAAIAAAsIAUAAIAAgsIAJAAIAAAzg");
	this.shape_44.setTransform(140.2,52.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAAAbQgJAAgFgFQgHgGAAgIIAIgBQACANALAAQAGAAADgFQADgEACgIIgSAAIAAgGIASAAQgBgHgFgFQgDgEgFAAQgKAAgCALIgJgCQACgHAFgFQAFgEAJAAQAKAAAGAHQAGAHABAMQAAAMgHAIQgFAHgJAAIgCAAg");
	this.shape_45.setTransform(133.6,52.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAKAaIgKgQIgEgGQgCgCgDAAIAAAYIgJAAIAAgzIAJAAIAAAWQAEABABgCQADgCABgHIAFgJQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAIAHgBIABAAIAAAHIgCAAQgBAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAABIgDAGIgEAHIgDADQAEABAGAJIAJAQg");
	this.shape_46.setTransform(129.1,52.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANAkIAAgnIgYAnIgJAAIAAgzIAJAAIAAAmIAXgmIAJAAIAAAzgAgIgZQgEgEAAgGIAGAAQAAAEACABQACACADAAQAEAAACgCQACgBAAgEIAGAAQAAAGgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_47.setTransform(120.9,51.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAUAaIAAgzIAJAAIAAAzgAgcAaIAAgzIAJAAIAAAVIALAAQAKAAAGADQAGAEAAAIQAAAGgFAFQgFAEgKAAgAgTATIAJAAQAIAAADgDQAEgCAAgDQAAgEgDgDQgCgCgJAAIgKAAg");
	this.shape_48.setTransform(114.5,52.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAMAaIAAgXIgXAAIAAAXIgJAAIAAgzIAJAAIAAAWIAXAAIAAgWIAJAAIAAAzg");
	this.shape_49.setTransform(108.2,52.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgUAaIAAgzIAIAAIAAAVIAMAAQAKAAAFADQAGAEAAAIQAAAGgFAFQgFAEgKAAgAgMATIAKAAQAHAAAEgDQADgCAAgDQAAgEgCgDQgDgCgIAAIgLAAg");
	this.shape_50.setTransform(103,52.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgYAaIAAgIIAEAAIAEAAIABgCIABgIIAAghIAnAAIAAAzIgIAAIAAgsIgXAAIAAAZIAAAMQgBADgCACQgDACgFAAIgHAAg");
	this.shape_51.setTransform(97.1,52.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgSAXQgFgEAAgGQAAgEACgEQACgDADgBIAGgDIAHgBQAKgBAFgCIAAgCQAAgFgCgDQgEgDgGAAQgGAAgCADQgDABgCAGIgJgBQACgGADgDQACgDAFgCQAGgCAFAAQAGAAAFACQAEABACACQACADAAAEIABAIIAAAKIAAAQIADAGIgKAAIgBgGQgFAEgFABQgDACgFAAQgJAAgEgEgAgBAEIgIABIgEADIgBAEQABAEACACQADACAFABQAEgBAEgCQAEgCACgEIABgJIAAgDQgFACgIACg");
	this.shape_52.setTransform(91.7,52.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AASAaIAAgoIgPAoIgHAAIgOgqIAAAqIgIAAIAAgzIANAAIANAoIAPgoIAMAAIAAAzg");
	this.shape_53.setTransform(85.5,52.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AANAaIAAgnIgYAnIgJAAIAAgzIAJAAIAAAnIAXgnIAJAAIAAAzg");
	this.shape_54.setTransform(79.2,52.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgNQgBgIADgGQADgGAGgEQAFgDAGAAQAJAAAFAEQAFAFACAHIgJABQgBgFgDgCQgDgDgFAAQgFAAgFAFQgDAFAAAJQAAAKADAFQAFAFAFAAQAFAAADgDQAEgDABgHIAJABQgCAJgGAFQgFAFgJAAQgKAAgGgHg");
	this.shape_55.setTransform(74.1,52.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAJAaIgJgQIgEgGQgCgCgDAAIAAAYIgJAAIAAgzIAJAAIAAAWQAEABACgCQACgCABgHIAFgJQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAIAIgBIABAAIAAAHIgCAAQgBAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAABIgDAGIgDAHIgFADQAFABAFAJIAKAQg");
	this.shape_56.setTransform(69.5,52.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgSAXQgFgEAAgGQAAgEACgEQACgDADgBIAFgDIAIgBQAKgBAFgCIAAgCQAAgFgCgDQgEgDgGAAQgGAAgCADQgEABgBAGIgJgBQACgGADgDQACgDAFgCQAFgCAGAAQAGAAAFACQAEABACACQACADABAEIAAAIIAAAKIAAAQIADAGIgKAAIgBgGQgFAEgFABQgDACgFAAQgJAAgEgEgAgBAEIgIABIgEADIgBAEQABAEACACQADACAFABQAEgBAEgCQAEgCACgEIABgJIAAgDQgFACgIACg");
	this.shape_57.setTransform(64.1,52.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAZAkIAAg7IgUA7IgIAAIgVg8IAAA8IgJAAIAAhHIAOAAIARAyIACAKIAFgLIARgxIAMAAIAABHg");
	this.shape_58.setTransform(57.1,51.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAOAWIgPgWIAPgVIAHAAIgNAVIANAWgAgEAWIgQgWIAQgVIAGAAIgMAVIALAWg");
	this.shape_59.setTransform(50.1,52.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AANAaIAAgnIgYAnIgJAAIAAgzIAJAAIAAAnIAXgnIAJAAIAAAzg");
	this.shape_60.setTransform(41.7,52.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAKAaIgKgQIgEgGQgCgCgDAAIAAAYIgJAAIAAgzIAJAAIAAAWQAEABABgCQADgCACgHIAEgJQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAIAGgBIACAAIAAAHIgDAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAABIgDAGIgEAHIgDADQAEABAGAJIAJAQg");
	this.shape_61.setTransform(37.1,52.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgPAUQgGgGAAgNQgBgIADgGQADgGAFgEQAGgDAGAAQAJAAAFAEQAFAFACAHIgJABQgBgFgDgCQgDgDgFAAQgFAAgFAFQgDAFAAAJQAAAKADAFQAFAFAFAAQAFAAADgDQAEgDABgHIAJABQgCAJgGAFQgFAFgJAAQgKAAgGgHg");
	this.shape_62.setTransform(32.2,52.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AANAaIAAgnIgYAnIgJAAIAAgzIAJAAIAAAnIAXgnIAJAAIAAAzg");
	this.shape_63.setTransform(26.7,52.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAMAaIAAgsIgXAAIAAAsIgJAAIAAgzIApAAIAAAzg");
	this.shape_64.setTransform(21.3,52.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAUAhIAAgOIgoAAIAAAOIgHAAIAAgVIAFAAQAJgMAAggIAjAAIAAAsIAGAAIAAAVgAgOAMIAbAAIAAglIgTAAQgBAZgHAMg");
	this.shape_65.setTransform(15.5,53.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgNAIgIQAGgFAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_66.setTransform(10.2,52.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAMAaIAAgsIgXAAIAAAsIgJAAIAAgzIApAAIAAAzg");
	this.shape_67.setTransform(4.7,52.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AANAaIAAgnIgYAnIgJAAIAAgzIAJAAIAAAmIAXgmIAJAAIAAAzg");
	this.shape_68.setTransform(162,44.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AANAaIAAgnIgYAnIgJAAIAAgzIAJAAIAAAmIAXgmIAJAAIAAAzg");
	this.shape_69.setTransform(156.4,44.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAMAaIAAgXIgXAAIAAAXIgJAAIAAgzIAJAAIAAAVIAXAAIAAgVIAJAAIAAAzg");
	this.shape_70.setTransform(150.9,44.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNQAAgLAHgIQAGgHAKAAQALAAAHAHQAGAHAAAMIAAACIgmAAQABAJAEAFQAFAEAFAAQAFAAADgCQADgDADgFIAJAAQgDAJgFAEQgGAEgJAAQgLAAgGgHgAgIgPQgFAFgBAGIAdAAQgBgGgDgEQgEgFgHAAQgEAAgEAEg");
	this.shape_71.setTransform(145.3,44.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAMAaIAAgVQgIACgGABQgGAAgFgEQgEgDgBgCQgCgFAAgFIAAgOIAIAAIAAAKIACAJQAAADADACQADABAEAAQAEABAIgCIAAgYIAJAAIAAAzg");
	this.shape_72.setTransform(139.8,44.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgFAUQgGgFgBgMIgKAAIAAAXIgJAAIAAgzIAJAAIAAAWIAKAAQACgLAFgGQAFgGAJAAQAIAAAFADQAEADADAGQADAGAAAIQAAANgGAHQgGAHgKAAQgKAAgFgHgAAAgOQgDAGAAAIQAAAKADAFQADAFAGAAQAGAAAEgEQAEgGAAgKQAAgIgDgGQgDgEgHAAQgHAAgDAEg");
	this.shape_73.setTransform(133.9,44.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgYAaIAAgIIAEAAIAEAAIABgCIABgIIAAghIAnAAIAAAzIgIAAIAAgsIgXAAIAAAZIAAAMQgBADgCACQgDACgFAAIgHAAg");
	this.shape_74.setTransform(126.9,44.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAJAaIgJgQIgEgHQgCgBgDAAIAAAYIgJAAIAAgzIAJAAIAAAXQAEAAACgCQABgBACgJIAFgIQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAAAIAHgBIACAAIAAAIIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDAHIgDAHIgFADQAFABAFAJIAKAQg");
	this.shape_75.setTransform(122.3,44.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAUAhIAAgOIgoAAIAAAOIgHAAIAAgVIAFAAQAJgMAAggIAjAAIAAAsIAGAAIAAAVgAgOAMIAbAAIAAglIgTAAQgBAZgHAMg");
	this.shape_76.setTransform(116.7,45.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgOAIgGQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAKgDAFQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_77.setTransform(111.4,44.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAMAaIAAgrIgWAAIAAArIgJAAIAAgzIAnAAIAAAzg");
	this.shape_78.setTransform(105.9,44.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AANAaIAAgnIgYAnIgJAAIAAgzIAJAAIAAAmIAXgmIAJAAIAAAzg");
	this.shape_79.setTransform(97.6,44.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgVAlIAAhHIAIAAIAAAGQADgDADgCQADgCAEgBQAHAAAGAEQAEAEADAGQACAGABAHQgBAIgCAFQgDAHgFADQgGADgGAAQgDAAgEgBQgDgCgCgDIAAAagAgJgXQgFAFABAKQAAAJADAEQAFAFAFABQAGgBADgFQAFgEAAgKQAAgKgFgEQgEgGgFAAQgFAAgEAGg");
	this.shape_80.setTransform(92.2,45.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAMAaIAAgrIgWAAIAAArIgJAAIAAgzIAnAAIAAAzg");
	this.shape_81.setTransform(86.6,44.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAOAaIAAgUIgFAAIgHABQgCABgDAHIgIALIgLAAIAKgOQAEgHAEAAQgHgBgEgEQgDgEgBgFQABgIAEgDQAFgFAJAAIAXAAIAAAzgAgIgPQgCADAAADQAAAEADADQAEACAIAAIAJAAIAAgRIgNAAQgGgBgDADg");
	this.shape_82.setTransform(78.1,44.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgPAUQgHgHAAgNQAAgHADgHQADgFAGgEQAFgDAGAAQAJAAAFAEQAFAFABAIIgIABQgBgFgDgDQgDgDgFAAQgFAAgEAFQgEAFgBAJQABALAEAEQADAFAGAAQAFAAAEgDQADgDABgHIAIABQgBAJgFAFQgHAFgIAAQgKAAgGgHg");
	this.shape_83.setTransform(73.3,44.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgDAaIAAgrIgRAAIAAgIIApAAIAAAIIgQAAIAAArg");
	this.shape_84.setTransform(68.5,44.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNQAAgLAHgIQAHgHAJAAQALAAAGAHQAHAHAAAMIAAACIgmAAQAAAJAFAFQAEAEAGAAQAFAAADgCQAEgDACgFIAJAAQgDAJgFAEQgGAEgJAAQgLAAgGgHgAgJgPQgEAFAAAGIAcAAQgBgGgCgEQgFgFgHAAQgEAAgFAEg");
	this.shape_85.setTransform(63.7,44.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAOAaIAAgUIgFAAIgHABQgCABgEAHIgHALIgLAAIAJgOQAFgHAEAAQgIgBgDgEQgEgEABgFQgBgIAFgDQAFgFAJAAIAXAAIAAAzgAgIgPQgBADAAADQAAAEACADQAEACAHAAIAKAAIAAgRIgNAAQgGgBgDADg");
	this.shape_86.setTransform(58,44.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgYAaIAAgIIAEAAIAEAAIABgCIABgIIAAghIAnAAIAAAzIgIAAIAAgsIgXAAIAAAZIAAAMQgBADgCACQgDACgFAAIgHAAg");
	this.shape_87.setTransform(52.4,44.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgUAaIAAgzIAUAAQAHAAADABQAEABADAEQACADAAAFQAAADgBADQgCADgDACQAEAAACADQACAEAAAEQAAAIgFADQgFAEgJAAgAgLATIALAAQAHAAADgCQACgCAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgIgBIgKAAgAgLgDIAJAAIAHgBIAEgCQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgFgDgBQgDgCgGABIgJAAg");
	this.shape_88.setTransform(47.5,44.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgSAXQgFgEAAgHQAAgDACgDQABgEADgCIAHgBIAIgCQAJgBAFgCIAAgCQAAgFgCgDQgEgDgGAAQgFAAgDACQgDADgCAFIgIgBQABgGACgDQADgDAFgCQAGgCAFAAQAHAAAEABQAEACACADQACACAAADIABAIIAAALIAAAQIADAGIgJAAIgCgHQgFAFgFACQgDABgFAAQgJAAgEgEgAgBADIgIACIgDADIgCAEQAAADADADQADADAFgBQAEABAEgDQAEgCACgEIABgJIAAgDQgEACgJABg");
	this.shape_89.setTransform(41.9,44.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgDAaIAAgrIgRAAIAAgIIApAAIAAAIIgQAAIAAArg");
	this.shape_90.setTransform(37,44.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgPAUQgGgHAAgNQgBgHADgHQADgFAFgEQAHgDAFAAQAJAAAFAEQAFAFACAIIgJABQgBgFgDgDQgDgDgEAAQgGAAgFAFQgDAFAAAJQAAALADAEQAFAFAFAAQAFAAADgDQAEgDABgHIAJABQgCAJgGAFQgFAFgJAAQgJAAgHgHg");
	this.shape_91.setTransform(32.3,44.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgOAIgGQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAKgDAFQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_92.setTransform(26.9,44.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAUAhIAAgOIgoAAIAAAOIgHAAIAAgVIAFAAQAJgMAAggIAjAAIAAAsIAGAAIAAAVgAgOAMIAbAAIAAglIgTAAQgBAZgHAMg");
	this.shape_93.setTransform(21.1,45.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNQAAgLAHgIQAGgHAKAAQALAAAHAHQAGAHAAAMIAAACIgmAAQABAJAEAFQAFAEAFAAQAFAAADgCQADgDADgFIAJAAQgDAJgFAEQgGAEgJAAQgLAAgGgHgAgIgPQgFAFgBAGIAdAAQgBgGgDgEQgEgFgHAAQgEAAgEAEg");
	this.shape_94.setTransform(15.7,44.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgWAlIAAhHIAIAAIAAAGQAEgDADgCQAEgCADgBQAIAAAEAEQAFAEADAGQACAGAAAHQAAAIgCAFQgDAHgGADQgFADgGAAQgDAAgEgBQgDgCgDgDIAAAagAgJgXQgFAFAAAKQAAAJAFAEQADAFAGABQAFgBAEgFQAEgEAAgKQAAgKgEgEQgDgGgGAAQgFAAgEAGg");
	this.shape_95.setTransform(10.3,45.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAMAaIAAgrIgXAAIAAArIgJAAIAAgzIApAAIAAAzg");
	this.shape_96.setTransform(4.7,44.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AANAkIAAgnIgYAnIgJAAIAAgzIAJAAIAAAmIAXgmIAJAAIAAAzgAgIgZQgEgEAAgGIAGAAQAAAEACABQACACADAAQAEAAACgCQACgBAAgEIAGAAQAAAGgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_97.setTransform(141.7,35.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgNAIgHQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_98.setTransform(136.1,36.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAKAaIgKgQIgEgGQgCgCgDAAIAAAYIgJAAIAAgzIAJAAIAAAWQAEAAABgBQACgCADgHIAEgIQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAIAHgBIACAAIAAAHIgDAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDAHIgDAHIgFADQAFABAGAJIAJAQg");
	this.shape_99.setTransform(131.4,36.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgUAaIAAgzIAUAAQAHAAADACQAEAAADAEQACADAAAFQAAAEgBADQgCACgDACQAEAAACAEQACADAAAFQAAAHgFAEQgFADgJAAgAgLATIALAAQAHAAADgCQACgCAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAIgIgBIgKAAgAgLgDIAJAAIAHAAIAEgDQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgDgDgCQgDgCgGAAIgJAAg");
	this.shape_100.setTransform(126.4,36.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgSAXQgFgEAAgGQAAgFACgDQACgDADgCIAFgCIAIgBQAKgBAFgCIAAgCQAAgGgCgCQgEgDgGAAQgGAAgCACQgEADgBAFIgJgBQACgGADgDQACgEAFgBQAFgCAGAAQAGAAAFACQAEABACADQACACAAAEIABAIIAAALIAAAPIADAGIgKAAIgBgGQgFAEgFABQgDACgFAAQgJAAgEgEgAgBAEIgIABIgEADIgBAEQABADACADQADADAFAAQAEAAAEgDQAEgCACgEIABgJIAAgDQgFACgIACg");
	this.shape_101.setTransform(120.8,36.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgEAaIAAgsIgQAAIAAgHIApAAIAAAHIgRAAIAAAsg");
	this.shape_102.setTransform(115.9,36.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgPAUQgHgGABgOQAAgHACgGQADgHAGgDQAFgDAGAAQAIAAAGAFQAFAEABAHIgIABQgBgFgDgCQgDgDgFAAQgFAAgFAFQgDAFAAAJQAAAKADAFQAEAFAGAAQAFAAADgDQAEgDABgHIAJABQgCAJgFAFQgHAFgIAAQgKAAgGgHg");
	this.shape_103.setTransform(111.2,36.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AANAkIAAgnIgYAnIgJAAIAAgzIAJAAIAAAmIAXgmIAJAAIAAAzgAgIgZQgEgEAAgGIAGAAQAAAEACABQACACADAAQAEAAACgCQACgBAAgEIAGAAQAAAGgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_104.setTransform(102.9,35.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgNAIgHQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_105.setTransform(97.4,36.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAMAaIAAgXIgXAAIAAAXIgJAAIAAgzIAJAAIAAAWIAXAAIAAgWIAJAAIAAAzg");
	this.shape_106.setTransform(91.9,36.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAMAaIAAgXIgXAAIAAAXIgJAAIAAgzIAJAAIAAAWIAXAAIAAgWIAJAAIAAAzg");
	this.shape_107.setTransform(86.4,36.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgQAUQgHgHAAgNQAAgMAHgHQAHgHAJAAQALAAAGAHQAHAHAAAMIAAADIgmAAQAAAIAFAEQAEAFAGAAQAFAAADgDQAEgCACgGIAJACQgDAHgGAFQgFAEgJAAQgLAAgGgHgAgJgOQgEAEAAAGIAcAAQgBgGgCgDQgFgGgHAAQgEAAgFAFg");
	this.shape_108.setTransform(80.8,36.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AggAaIAAgzIAIAAIAAArIAUAAIAAgrIAIAAIAAArIAUAAIAAgrIAJAAIAAAzg");
	this.shape_109.setTransform(74.1,36.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAUAaIAAgzIAJAAIAAAzgAgcAaIAAgzIAJAAIAAAVIALAAQAKAAAGADQAGAEAAAIQAAAGgFAFQgFAEgKAAgAgTATIAJAAQAIAAADgDQAEgCAAgDQAAgEgDgCQgCgDgJAAIgKAAg");
	this.shape_110.setTransform(66.4,36.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgUAaIAAgzIAUAAQAHAAADACQAEAAADAEQACADAAAFQAAAEgBADQgCACgDACQAEAAACAEQACADAAAFQAAAHgFAEQgFADgJAAgAgLATIALAAQAHAAADgCQACgCAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBQgBAAAAAAIgIgBIgKAAgAgLgDIAJAAIAHAAIAEgDQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgDgDgCQgDgCgGAAIgJAAg");
	this.shape_111.setTransform(60.4,36.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgRAUQgGgHAAgNQAAgNAIgHQAGgGAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_112.setTransform(54.8,36.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAMAaIAAgsIgWAAIAAAsIgJAAIAAgzIAnAAIAAAzg");
	this.shape_113.setTransform(49.4,36.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgPAUQgGgGgBgOQABgHACgGQADgHAFgDQAHgDAFAAQAIAAAGAFQAFAEABAHIgIABQgBgFgDgCQgDgDgEAAQgHAAgDAFQgFAFAAAJQAAAKAFAFQAEAFAFAAQAFAAAEgDQADgDABgHIAIABQgBAJgGAFQgFAFgJAAQgKAAgGgHg");
	this.shape_114.setTransform(41.5,36.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAKAaIgKgQIgEgGQgCgCgDAAIAAAYIgJAAIAAgzIAJAAIAAAWQAEAAABgBQACgCADgHIAEgIQAAgBABAAQAAgBABAAQAAAAABgBQAAAAAAAAIAHgBIACAAIAAAHIgDAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgDAHIgDAHIgFADQAFABAGAJIAJAQg");
	this.shape_115.setTransform(34.2,36.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAAAbQgJAAgFgFQgHgGAAgIIAIgBQACANALAAQAGAAADgFQAEgEABgIIgSAAIAAgGIASAAQgBgHgFgFQgDgEgFAAQgKAAgCALIgJgCQABgHAGgFQAFgEAJAAQAJAAAHAHQAGAHABAMQAAAMgHAIQgFAHgJAAIgCAAg");
	this.shape_116.setTransform(29.1,36.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgNAhQgFgEgDgHQgCgGgBgQQAAgUAHgHQAIgHANAAIAKgBIACgBIAIAAQgBAFgCACQgCACgCABIgLABQgLAAgDACQgEACgCAEQgCAFAAAHQAEgFAEgCQAEgDAFAAQAKAAAHAHQAGAHABALQAAAJgEAGQgDAGgFADQgEADgIAAQgJAAgFgEgAgJgCQgFAFAAAJQAAAJAFAFQAEAEAGAAQAGAAAEgFQAEgGAAgJQAAgIgEgEQgDgFgHAAQgHAAgDAFg");
	this.shape_117.setTransform(23.8,35.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AggAaIAAgzIAIAAIAAArIAUAAIAAgrIAIAAIAAArIAUAAIAAgrIAJAAIAAAzg");
	this.shape_118.setTransform(16.9,36.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAAAbQgJAAgGgFQgFgGgCgIIAJgBQACANALAAQAGAAADgFQAEgEAAgIIgRAAIAAgGIARAAQgBgHgDgFQgEgEgFAAQgKAAgCALIgJgCQABgHAGgFQAFgEAJAAQAKAAAGAHQAHAHgBAMQAAAMgFAIQgGAHgJAAIgCAAg");
	this.shape_119.setTransform(10.3,36.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AANAkIgMgUIgHgLQgDgDgFAAIAAAiIgKAAIAAhHIAKAAIAAAgQAGAAADgDQACgDADgJIAFgKQACgDAEgCQADgCAEAAIAGAAIAAAIIgBAAIgCAAQgFAAgCADQgCACgEAHQgDAJgCACIgGAEQAHABAGALIAPAYg");
	this.shape_120.setTransform(5.3,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.disclamer, new cjs.Rectangle(0,28,205,47.8), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATABQASgBAMANQAMANAAAWIAAAEIhEAAQAAAPAIAIQAIAIALAAQAIABAGgFQAHgEADgLIAQACQgDAPgLAIQgKAHgQABQgUAAgMgNgAgQgbQgIAHgBAMIAzAAQgBgLgFgHQgHgIgMgBQgKAAgHAIg");
	this.shape.setTransform(118.4,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATABQASgBAMANQAMANAAAWIAAAEIhEAAQAAAPAIAIQAIAIALAAQAIABAGgFQAHgEADgLIAQACQgDAPgLAIQgKAHgQABQgUAAgMgNgAgQgbQgIAHgBAMIAzAAQgBgLgFgHQgHgIgMgBQgKAAgHAIg");
	this.shape_1.setTransform(108.4,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWAvIAAgqIgrAAIAAAqIgQAAIAAhdIAQAAIAAAoIArAAIAAgoIAQAAIAABdg");
	this.shape_2.setTransform(98.6,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA7QgJgHgFgMQgFgMAAgdQAAgkANgNQAMgNAZAAQAQAAACgBIADgBIAOAAQgBAJgDADQgDAEgFABQgFACgPgBQgTABgHADQgHAEgDAIQgDAIAAANQAGgIAIgFQAIgEAIgBQATABAMANQAMAMAAAUQAAAQgGALQgGAKgJAGQgIAFgOABQgQAAgJgIgAgSgEQgHAIAAARQAAAQAIAIQAIAJAKAAQAMAAAHgKQAHgKAAgRQAAgOgHgIQgGgJgNAAQgMAAgHAKg");
	this.shape_3.setTransform(88.6,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAkQgMgMgBgYQAAgYAPgNQAMgKAQAAQATgBANANQALAMABAXQgBAQgFALQgGAKgJAGQgLAFgMABQgTAAgLgNgAgSgaQgJAJAAARQAAASAJAJQAHAJALgBQALAAAIgJQAJgIgBgSQABgQgJgKQgIgIgLgBQgLABgHAIg");
	this.shape_4.setTransform(78.4,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBBIAAh/IAOAAIAAAMQAFgHAGgEQAHgDAIAAQAMAAAJAGQAJAGAFALQAEALAAAOQAAAOgFAKQgFAMgKAGQgKAGgKAAQgHAAgGgDQgHgEgEgFIAAAtgAgRgqQgIAJAAASQAAARAHAIQAHAJALAAQAJAAAIgJQAHgJAAgRQAAgSgHgJQgIgJgJAAQgKAAgHAKg");
	this.shape_5.setTransform(68.7,25.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkA8IAAgbIhIAAIAAAbIgMAAIAAgoIAIAAQARgVgBg6IBAAAIAABPIAKAAIAAAogAgZAUIAxAAIAAhCIgjAAQgCAugMAUg");
	this.shape_6.setTransform(58,25.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAkQgMgMABgYQAAgYAOgNQAMgKAQAAQATgBAMANQANAMAAAXQAAAQgGALQgFAKgLAGQgKAFgMABQgSAAgNgNgAgSgaQgIAJAAARQAAASAIAJQAHAJALgBQALAAAJgJQAHgIABgSQgBgQgHgKQgJgIgLgBQgLABgHAIg");
	this.shape_7.setTransform(48.4,24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBAIAAhwIhBAAIAABwIgRAAIAAh/IBjAAIAAB/g");
	this.shape_8.setTransform(37,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D0F8C").s().p("AoMD1QhlAAhJhIQhHhHAAhmQAAhkBHhJQBJhHBlAAIQZAAQBlAABIBHQBIBJAABkQAABmhIBHQhIBIhlAAg");
	this.shape_9.setTransform(77,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(0,0,154,49), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B956").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,240,400), null);


(lib._25_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ALsKnQABgDp5AAQgSAAAAgKIAAkpQKcACAAgCIAAjLIi6ABQi7ABAAgCQABgBiVikQiViiAAgCIgFi7IExlIQJ9ADAAgDQADFKABAAIqVAAIAADDIFjAAQAeAAALAHQAFAEgBACQAAgBCECfICDCdIgGAEQgHAEAAgCIAAC0IiLCfQiJCfgCAAIAAAAgAsNKkIiAiiQiBiiAAACIAAiZQAAADEGlqQAAACDtgBIDsgBIAAjDQAAADqwgFQADgDDPkpQAAABBXAAIBWgBIAIgLQADgCAJAAQD9ADgBACQAAACAKgBQAMACALAMQEMEqgBACIgHC5QgBADkIFVQgBADnagDIAAC3QAAABF0AAIF1gBIAAE4QAAABi6AAIotgBgAQCFpIAAAAIAAAAIAAAAgAvfljIAAAAIAAAAIAAAAg");
	this.shape.setTransform(104,67.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._25_shadow, new cjs.Rectangle(0,0,207.9,135.8), null);


(lib._25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ALtKnQAAgDp5AAQgRAAgBgKIAAkpQKcACAAgCIAAjLIi6ABQi7ABAAgCQABgBiVikQiViiAAgCIgFi7IExlIQJ9ADAAgDQAEFKABAAIqWAAIAADDIFkAAQAdAAALAHQAFAEgBACQABgBCDCfICDCcIgGAFQgHAEAAgCIAAC0IiLCfQiJCfgBAAIAAAAgAsMKkIiBiiQiBiiAAACIAAiZQAAADEGlqQAAACDtgBIDsgBIAAjDQAAADqvgFQACgDDQkpQgBABBXAAIBWgBIAIgLQADgCAJAAQD9ADgBACQAAACAKgBQAMACALAMQEMEqgBACIgHC5QgBADkIFVQAAADnbgDIAAC3QAAABF1AAIF0gBIAAE4QAAABi6AAIosgBgAQCFpIAAAAIAAAAIAAAAgAvfljIABAAIAAAAIgBAAg");
	mask.setTransform(108.5,69.1);

	// Layer_1
	this.instance = new lib._25();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._25_1, new cjs.Rectangle(4.5,1.3,207.9,135.8), null);


(lib._23feb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfA5IAAgtIgLAAQgLAAgEADQgFADgJAOIgQAZIgZAAIAVgeQAKgPAJgCQgQgCgIgIQgJgKAAgNQAAgOALgKQALgJAUAAIA0AAIAABxgAgRgiQgFAEgBAIQABAKAGAFQAIAFASAAIAVAAIAAgmIgcAAQgQAAgEAGg");
	this.shape.setTransform(86.8,37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3A5IAAgRIAJAAQAGAAACgBQADgBABgDQABgCAAgQIAAhKIBZAAIAAByIgUAAIAAhhIgyAAIAAA3QAAAUgBAGQgCAHgFAEQgGAGgLAAIgQgBg");
	this.shape_1.setTransform(74.4,37.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpAzQgLgKAAgOQABgIAEgIQADgGAHgFQAFgCAIgDIARgDQAXgCALgFIAAgEQAAgMgFgFQgIgGgOgBQgNABgHAEQgGAFgDAMIgTgDQADgMAGgHQAFgIAMgDQAKgFAOAAQAPAAAJAEQAJADAFAGQADAFACAHIABASIAAAZQAAAbACAIQABAGADAHIgTAAQgDgGgCgIQgKAJgKAEQgJAEgLAAQgUgBgJgIgAgDAHQgNACgEACQgFACgDAFQgDAEAAAFQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEAEgJQADgGAAgNIAAgHQgLAEgTADg");
	this.shape_2.setTransform(62.4,37.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBQIAAidIARAAIAAAPQAGgIAIgFQAIgEAKAAQAPAAALAIQALAHAGANQAGAOAAAQQgBASgFANQgHAOgMAHQgMAIgNAAQgJAAgIgEQgHgEgFgHIAAA4gAgVg0QgKALAAAWQAAAVAJAKQAJALANAAQAMAAAIgLQAKgLAAgWQAAgVgJgLQgJgLgMAAQgMAAgJAMg");
	this.shape_3.setTransform(50.5,39.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguA5IAAhxIAsAAQAQAAAIADQAIACAGAHQAFAIABAKQAAAIgDAHQgEAFgHAFQAIABAGAIQAFAHAAAKQgCAQgKAIQgLAIgTAAgAgbApIAaAAQAPAAAHgEQAGgDAAgKQAAgFgDgFQgEgFgGgBIgRgBIgYAAgAgbgIIAVAAQAMAAAEgBQAEgBAEgFQAEgEAAgFQAAgJgHgDQgGgEgOAAIgWAAg");
	this.shape_4.setTransform(38.5,37.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAsQgPgPgBgcQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQACASAJALQAKAJANABQALgBAHgFQAHgGAFgMIAUACQgEASgNAKQgNAKgUAAQgYgBgOgPgAgUgiQgJAJgBAPIA/AAQgCgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_5.setTransform(26.2,37.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJBkIAAg1QgGAGgGADQgIADgIABQgRgBgOgPQgOgQAAgcQABgZALgRQANgRAUAAQAJAAAHAEQAHADAFAHIAAg2IASAAIAAA2QAHgHAHgDQAHgEAJAAQATAAAMARQAMARAAAZQAAAagMARQgNAQgTABQgGgBgHgCQgHgCgJgIIAAA1gAAQggQgHALAAAVQABAaAGAJQAIAJAKAAQAMAAAIgLQAJgLAAgWQAAgVgIgLQgHgLgNAAQgNAAgGALgAg3ggQgHAMAAATQAAAXAIALQAJALALAAQANAAAHgLQAFgKAAgWQAAgVgGgMQgGgLgOAAQgLAAgJALg");
	this.shape_6.setTransform(11.1,37.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgjBEQgOgMgCgUIAUgDQADARAIAHQAIAHAMABQAMAAAKgKQAJgJAAgPQAAgNgJgIQgIgJgOAAQgEAAgIACIACgQIADAAQALAAAKgHQAKgFAAgOQAAgLgHgHQgHgGgLAAQgLAAgIAGQgHAIgCAOIgUgEQAEgTANgLQAMgKATAAQAMgBALAGQAKAFAGAKQAGAKAAAKQAAAKgGAJQgFAJgLAEQAOAEAIAIQAIALAAAPQAAAUgPAPQgPAPgWAAQgVAAgOgNg");
	this.shape_7.setTransform(50.8,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzBPQAAgHACgHQAEgKAJgLQAJgKAQgNQAZgVAJgLQAJgNAAgLQAAgLgIgIQgJgIgNAAQgNAAgIAJQgIAHgBAQIgTgDQACgWANgLQANgMAWAAQAWAAAOANQANAMAAASQAAAKgEAJQgEAKgJAIQgJALgVARQgQAPgFAFQgFAFgDAGIBMAAIAAASg");
	this.shape_8.setTransform(38.4,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqAyQgKgJAAgOQAAgJAFgGQADgIAHgDQAFgDAIgDIARgCQAXgEALgDIAAgGQAAgMgGgEQgHgHgOABQgNgBgGAFQgHAFgDAMIgTgCQACgMAGgIQAGgHALgFQAMgDANAAQAPAAAJADQAJADAEAFQAFAGACAIIAAASIAAAYQAAAbABAHQACAIAEAGIgUAAQgEgGgBgIQgLAJgJAEQgJADgMAAQgSABgLgKgAgEAHQgLACgFACQgGACgCAEQgDAFAAAEQAAAIAGAGQAGAEALAAQAKAAAJgEQAIgFAFgJQADgHAAgMIAAgHQgKAEgVADg");
	this.shape_9.setTransform(20.2,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAbA5IAAgzIg1AAIAAAzIgTAAIAAhxIATAAIAAAvIA1AAIAAgvIATAAIAABxg");
	this.shape_10.setTransform(8.1,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._23feb, new cjs.Rectangle(0,0,95.5,50.1), null);


(lib.tshirt_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvyDjIAAnFIflAAIAAHFg");
	mask.setTransform(101.1,22.7);

	// Layer_1
	this.instance = new lib.tshirt_1();
	this.instance.parent = this;
	this.instance.setTransform(99.9,122.3,1,1,0,0,0,98,105.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tshirt_05, new cjs.Rectangle(1.9,16.8,196,28.6), null);


(lib.tshirt_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvyDjIAAnFIflAAIAAHFg");
	mask.setTransform(101.1,93.7);

	// Layer_1
	this.instance = new lib.tshirt_1();
	this.instance.parent = this;
	this.instance.setTransform(99.9,102.5,1,1,0,0,0,98,105.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tshirt_03, new cjs.Rectangle(1.9,71,196,45.4), null);


(lib.tshirt_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvyDjIAAnFIflAAIAAHFg");
	mask.setTransform(101.1,139.1);

	// Layer_1
	this.instance = new lib.tshirt_1();
	this.instance.parent = this;
	this.instance.setTransform(99.9,102.5,1,1,0,0,0,98,105.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tshirt_02, new cjs.Rectangle(1.9,116.4,196,45.4), null);


(lib.tshirt_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvyDjIAAnFIflAAIAAHFg");
	mask.setTransform(101.1,184.5);

	// Layer_1
	this.instance = new lib.tshirt_1();
	this.instance.parent = this;
	this.instance.setTransform(99.9,102.5,1,1,0,0,0,98,105.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tshirt_01, new cjs.Rectangle(1.9,161.8,196,45.4), null);


(lib.tshirt_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvyDjIAAnFIflAAIAAHFg");
	mask.setTransform(101.1,48.3);

	// Layer_2
	this.instance = new lib.tshirt_1();
	this.instance.parent = this;
	this.instance.setTransform(99.9,102.5,1,1,0,0,0,98,105.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tshirt_04, new cjs.Rectangle(1.9,25.6,196,45.4), null);


(lib.percent_tree_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwSDiIAAnDMAglAAAIAAHDg");
	mask.setTransform(104.3,22.6);

	// Layer_1
	this.instance = new lib._25_1();
	this.instance.parent = this;
	this.instance.setTransform(102.5,68.3,1,1,0,0,0,107,69.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.percent_tree_03, new cjs.Rectangle(0,0,208.5,45.3), null);


(lib.percent_tree_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwSDiIAAnDMAglAAAIAAHDg");
	mask.setTransform(104.3,67.9);

	// Layer_1
	this.instance = new lib._25_1();
	this.instance.parent = this;
	this.instance.setTransform(102.5,68.3,1,1,0,0,0,107,69.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.percent_tree_02, new cjs.Rectangle(0,45.3,208.5,45.2), null);


(lib.percent_tree_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwSDiIAAnDMAglAAAIAAHDg");
	mask.setTransform(104.3,113.1);

	// Layer_1
	this.instance = new lib._25_1();
	this.instance.parent = this;
	this.instance.setTransform(102.5,68.3,1,1,0,0,0,107,69.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.percent_tree_01, new cjs.Rectangle(0,90.5,208.5,45.2), null);


(lib.money_half_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An1G/IAAt+IPrAAIAAN+g");
	mask.setTransform(150.3,44.8);

	// Layer_2
	this.instance = new lib.money_all();
	this.instance.parent = this;
	this.instance.setTransform(100.5,45,1,1,0,0,0,100.5,44);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_half_02, new cjs.Rectangle(100.1,1,100.5,88), null);


(lib.money_half_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2G/IAAt+IPtAAIAAN+g");
	mask.setTransform(50.3,44.8);

	// Layer_2
	this.instance = new lib.money_all();
	this.instance.parent = this;
	this.instance.setTransform(100.5,45.5,1,1,0,0,0,100.5,44);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_half_01, new cjs.Rectangle(0,1.5,100.5,88), null);


(lib.money_four_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2DYIAAmwIPtAAIAAGwg");
	mask.setTransform(50.3,65);

	// Layer_1
	this.instance = new lib.money_half_02();
	this.instance.parent = this;
	this.instance.setTransform(100.1,43.8,1,1,0,0,180,100.5,44.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_four_04, new cjs.Rectangle(0,43.3,100.5,43.3), null);


(lib.money_four_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2DYIAAmwIPtAAIAAGwg");
	mask.setTransform(50.3,21.7);

	// Layer_2
	this.instance = new lib.money_half_02();
	this.instance.parent = this;
	this.instance.setTransform(100.5,43.4,1,1,0,0,180,100.5,44.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_four_03, new cjs.Rectangle(0,0,100.5,43.3), null);


(lib.money_four_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2DYIAAmwIPtAAIAAGwg");
	mask.setTransform(50.3,21.7);

	// Layer_2
	this.instance = new lib.money_half_01();
	this.instance.parent = this;
	this.instance.setTransform(100.5,43.4,1,1,0,0,0,100.5,44.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_four_02, new cjs.Rectangle(0,0,100.5,43.3), null);


(lib.money_four_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An2DYIAAmwIPtAAIAAGwg");
	mask.setTransform(50.3,65);

	// Layer_1
	this.instance = new lib.money_half_01();
	this.instance.parent = this;
	this.instance.setTransform(100.5,43.4,1,1,0,0,0,100.5,44.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_four_01, new cjs.Rectangle(0,43.3,100.5,43.3), null);


(lib.money_bow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag9EmIAAABIAAgBgAhZDqIgdg+IiTBuQAniGANgmQAQgqAGgGIg4gYQg8gYgLgGQgWgLgCgDQgLgMAAghQgCi5ABAAIAEgNQAFgMAMgDIBpgRQABgBAJADQAJACAJAFQCCBcABgBIBBgEIBAgDIB2hqQB0ANALgBIAPgCQAGABACAGIAEAaQAEAWAEAPQAHAaAICRQACAKgXAMIhxBDIAwBTIAiA9IgQAJQgigOgJgFQgKgGgVgJIgRgHIAAAAIAAAAIhDCDIgjiAIgsifQgGgWgJgdIgHgWQABgBgwADIAAAAIAAAAIgOB2QgRCCgDAfIgIBUIgcg8gACBEhIAAAAIAAABIAAgBg");
	mask.setTransform(64.4,72.8);

	// Layer_1
	this.moneyGift = new lib.money_pack();
	this.moneyGift.parent = this;
	this.moneyGift.setTransform(63.8,62.9,0.562,0.562,15,0,0,95.7,94.5);

	var maskedShapeInstanceList = [this.moneyGift];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.moneyGift).wait(1));

}).prototype = getMCSymbolPrototype(lib.money_bow, new cjs.Rectangle(28.9,43.3,71.1,58.9), null);


(lib.megafon_logo_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 2
	this.instance = new lib.megafon_face();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,37,1,1,0,0,0,7.8,42.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:7.7,regY:42.4,x:-14.7,y:36.9},0).wait(1).to({x:-6.4},0).wait(1).to({x:0.3},0).wait(1).to({x:6.1},0).wait(1).to({x:11.1},0).wait(1).to({x:15.4},0).wait(1).to({x:19},0).wait(1).to({x:21.9},0).wait(1).to({x:24.3},0).wait(1).to({x:26.2},0).wait(1).to({x:27.7},0).wait(1).to({x:29},0).wait(1).to({x:30},0).wait(1).to({x:30.8},0).wait(1).to({x:31.4},0).wait(1).to({x:31.8},0).wait(1).to({x:32.1},0).wait(1).to({x:32.3},0).wait(1).to({regX:7.8,regY:42.5,x:32.5,y:37},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.megafon_round();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.6,35.9,1,1,0,0,0,35.6,35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.3,71.8);


(lib.joystick_three_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvuDhIAAnBIfdAAIAAHBg");
	mask.setTransform(100.7,23);

	// Layer_1
	this.instance = new lib.joystick_1();
	this.instance.parent = this;
	this.instance.setTransform(100,69,1,1,0,0,0,97,69.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.joystick_three_03, new cjs.Rectangle(3,0.5,194,45), null);


(lib.joystick_three_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvuDjIAAnFIfdAAIAAHFg");
	mask.setTransform(100.7,113.6);

	// Layer_2
	this.instance = new lib.joystick_1();
	this.instance.parent = this;
	this.instance.setTransform(100,69,1,1,0,0,0,97,69.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.joystick_three_01, new cjs.Rectangle(3,90.9,194,45.4), null);


(lib.jostick_three_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvuDjIAAnFIfdAAIAAHFg");
	mask.setTransform(100.7,68.2);

	// Layer_2
	this.instance = new lib.joystick_1();
	this.instance.parent = this;
	this.instance.setTransform(100,69,1,1,0,0,0,97,69.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.jostick_three_02, new cjs.Rectangle(3,45.5,194,45.4), null);


(lib.icatcher_bg_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._23feb();
	this.instance.parent = this;
	this.instance.setTransform(51.6,26.9,1,1,0,0,0,51.6,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icatcher_bg_top, new cjs.Rectangle(0,0,95.5,50.1), null);


(lib.headphones_three_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av2EnIAApNIftAAIAAJNg");
	mask.setTransform(101.5,29.5);

	// Layer_1
	this.instance = new lib.headphones_1();
	this.instance.parent = this;
	this.instance.setTransform(101,91.9,1,1,0,0,0,89.5,87);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headphones_three_03, new cjs.Rectangle(11.5,4.9,179,54.2), null);


(lib.headphones_three_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av2EnIAApNIftAAIAAJNg");
	mask.setTransform(101.5,142.3);

	// Layer_1
	this.instance = new lib.headphones_1();
	this.instance.parent = this;
	this.instance.setTransform(101,86.5,1,1,0,0,0,89.5,87);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headphones_three_01, new cjs.Rectangle(11.5,112.8,179,59.1), null);


(lib.headphines_three_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Av2EnIAApNIftAAIAAJNg");
	mask.setTransform(101.5,83.2);

	// Layer_2
	this.instance = new lib.headphones_1();
	this.instance.parent = this;
	this.instance.setTransform(101,86.5,1,1,0,0,0,89.5,87);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.headphines_three_02, new cjs.Rectangle(11.5,53.7,179,59.1), null);


(lib.gift_half_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvnHuIAAvbIfPAAIAAPbg");
	mask.setTransform(100,49.4);

	// Layer_1
	this.instance = new lib.money_pack();
	this.instance.parent = this;
	this.instance.setTransform(99.2,97.6,1.071,1.071,0,0,0,95.6,94.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift_half_02, new cjs.Rectangle(0,0,200.1,98.8), null);


(lib.gift_half_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvnHuIAAvbIfPAAIAAPbg");
	mask.setTransform(100,148.1);

	// Layer_2
	this.instance = new lib.money_pack();
	this.instance.parent = this;
	this.instance.setTransform(99.2,97.6,1.071,1.071,0,0,0,95.6,94.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift_half_01, new cjs.Rectangle(0,98.8,200.1,98.8), null);


(lib.gift_four_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzHoIAAvPIPnAAIAAPPg");
	mask.setTransform(150.1,48.8);

	// Layer_1
	this.instance = new lib.gift_half_01();
	this.instance.parent = this;
	this.instance.setTransform(99,100,1,0.988,0,180,0,99,96.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift_four_02, new cjs.Rectangle(100.1,0,100,97.6), null);


(lib.gift_four_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnzHoIAAvPIPnAAIAAPPg");
	mask.setTransform(50,48.8);

	// Layer_1
	this.instance = new lib.gift_half_01();
	this.instance.parent = this;
	this.instance.setTransform(99,100,1,0.988,0,180,0,99,96.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gift_four_01, new cjs.Rectangle(0,0,100,97.6), null);


(lib.final_block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(175).call(this.frame_175).wait(11));

	// Layer 15
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(120.7,245.6,1,1,0,0,0,77,24.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({y:234.6,alpha:1},6).wait(130));

	// Layer 16
	this.instance_1 = new lib.disclamer();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122,343.7,1,1,0,0,0,102.5,39.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({alpha:1},11).to({_off:true},134).wait(10));

	// Layer 10
	this.instance_2 = new lib.megafon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(143.3,148.4,1.009,1.009,0,0,0,77.3,10.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({y:125.4,alpha:1},11).to({_off:true},145).wait(10));

	// Layer 8
	this.instance_3 = new lib.round_02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(189.8,197,1,1,0,0,0,30.4,30.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(1).to({regX:30.3,scaleX:0.99,scaleY:0.99,x:188.2,y:196.2,alpha:0.011},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:184.7,y:194.6,alpha:0.036},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:179.4,y:192,alpha:0.075},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:172.4,y:188.7,alpha:0.125},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:163.9,y:184.6,alpha:0.187},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:154.2,y:179.9,alpha:0.258},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:143.3,y:174.7,alpha:0.337},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:131.6,y:169.1,alpha:0.422},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:119.3,y:163.2,alpha:0.511},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:106.7,y:157.2,alpha:0.603},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:94.2,y:151.1,alpha:0.694},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:82,y:145.3,alpha:0.782},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:70.9,y:140,alpha:0.863},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:61.5,y:135.5,alpha:0.931},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:54.7,y:132.2,alpha:0.98},0).wait(1).to({regX:32,regY:30.7,scaleX:0.08,scaleY:0.08,x:52.1,y:130.9,alpha:1},0).wait(42).to({regX:32.3,regY:31.2,scaleX:0.1,scaleY:0.1},4).to({regX:32,regY:30.7,scaleX:0.08,scaleY:0.08},6).to({_off:true},98).wait(10));

	// Layer 7
	this.instance_4 = new lib.round_03();
	this.instance_4.parent = this;
	this.instance_4.setTransform(189.8,197,1,1,0,0,0,30.4,30.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:188.3,y:196.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:184.8,y:194.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:179.5,y:192},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:172.5,y:188.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:164,y:184.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:154.2,y:179.9},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:143.3,y:174.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:131.6,y:169.1},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:119.3,y:163.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:106.7,y:157.2},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:94.1,y:151.1},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:82,y:145.3},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:70.9,y:140},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:61.4,y:135.4},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:54.7,y:132.2},0).wait(1).to({regX:30.6,regY:30.6,scaleX:0.08,scaleY:0.08,x:52,y:130.9},0).to({_off:true},1).wait(159));

	// Layer 6
	this.instance_5 = new lib.round_02();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.2,197,1,1,0,0,0,30.3,30.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:119.2,y:196.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:117.3,y:194.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:114.4,y:191.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:110.6,y:188.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:106,y:184.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:100.7,y:179.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:95,y:174.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:88.8,y:168.7},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:82.2,y:162.8},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:75.5,y:156.8},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:68.9,y:150.9},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:62.5,y:145.1},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:56.6,y:139.8},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:51.7,y:135.4},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:48.1,y:132.2},0).wait(1).to({regX:31.4,regY:30.7,scaleX:0.08,scaleY:0.08,x:46.7,y:130.9},0).wait(36).to({regX:31.9,regY:30.9,scaleX:0.1,scaleY:0.1},4).to({regX:31.4,regY:30.7,scaleX:0.08,scaleY:0.08},6).to({_off:true},104).wait(10));

	// Layer 5
	this.instance_6 = new lib.round_01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(50.6,197,1,1,0,0,0,30.3,30.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:50.4,y:195.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:50,y:192.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:49.5,y:189},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:48.9,y:184.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:48.2,y:180.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:47.6,y:175.1},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:46.8,y:169.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:46,y:164.4},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:45.3,y:158.9},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:44.5,y:153.5},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:43.8,y:148.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:43.1,y:143.3},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:42.5,y:138.8},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:41.9,y:134.9},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:41.5,y:132.1},0).wait(1).to({regX:30.8,regY:30.8,scaleX:0.08,scaleY:0.08,x:41.4,y:130.9},0).wait(30).to({regX:31.3,regY:31.3,scaleX:0.1,scaleY:0.1},4).to({regX:30.8,regY:30.8,scaleX:0.08,scaleY:0.08},6).to({_off:true},110).wait(10));

	// Layer 4
	this.instance_7 = new lib.megafon_logo_animated();
	this.instance_7.parent = this;
	this.instance_7.setTransform(119.6,153,8.036,8.036,0,0,0,35.6,35.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).wait(1).to({regX:18.5,regY:36.9,scaleX:7.92,scaleY:7.92,x:-17,y:163.6},0).wait(1).to({scaleX:7.72,scaleY:7.72,x:-15.7,y:162.5},0).wait(1).to({scaleX:7.42,scaleY:7.42,x:-13.8,y:160.9},0).wait(1).to({scaleX:7.02,scaleY:7.02,x:-11.2,y:158.8},0).wait(1).to({scaleX:6.5,scaleY:6.5,x:-7.9,y:156},0).wait(1).to({scaleX:5.89,scaleY:5.89,x:-4,y:152.7},0).wait(1).to({scaleX:5.19,scaleY:5.19,x:0.6,y:149},0).wait(1).to({scaleX:4.43,scaleY:4.43,x:5.4,y:144.9},0).wait(1).to({scaleX:3.67,scaleY:3.67,x:10.3,y:140.8},0).wait(1).to({scaleX:2.95,scaleY:2.95,x:14.9,y:136.9},0).wait(1).to({scaleX:2.3,scaleY:2.3,x:19.1,y:133.4},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:22.7,y:130.4},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:25.6,y:128},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:27.8,y:126.1},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:29.4,y:124.8},0).wait(1).to({regX:35.7,regY:36,scaleX:0.52,scaleY:0.52,x:39.4,y:123.2},0).to({_off:true},150).wait(10));

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgqGBJzQpfpfkTrpQjopuAArPQAA4qRaxbQRcxaYqAAQYpAARcRaQRcRbAAYqQAALPjoJwQkVLnpfJfQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_1 = new cjs.Graphics().p("EgqGBGBQpfpgkTroQjopuAArPQAA4rRaxbQRcxZYqAAQYpAARcRZQRcRbAAYrQAALPjoJwQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_2 = new cjs.Graphics().p("EgqGBCPQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_3 = new cjs.Graphics().p("EgqGA+dQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_4 = new cjs.Graphics().p("EgqGA6qQpfpfkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJwQkVLnpfJfQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_5 = new cjs.Graphics().p("EgqGA24QpfpfkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJwQkVLnpfJfQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_6 = new cjs.Graphics().p("EgqGAzGQpfpgkTroQjopuAArPQAA4qRaxcQRcxZYqAAQYpAARcRZQRcRcAAYqQAALPjoJwQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_7 = new cjs.Graphics().p("EgqGAvUQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_8 = new cjs.Graphics().p("EgqGAriQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");
	var mask_graphics_9 = new cjs.Graphics().p("EgqGAqFQpfpgkTrpQjopuAArOQAA4qRaxcQRcxaYqAAQYpAARcRaQRcRcAAYqQAALOjoJxQkVLmpfJgQxcRc4pAAQ4qAAxcxcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:120,y:583.9}).wait(1).to({graphics:mask_graphics_1,x:120,y:559.7}).wait(1).to({graphics:mask_graphics_2,x:120,y:535.5}).wait(1).to({graphics:mask_graphics_3,x:120,y:511.3}).wait(1).to({graphics:mask_graphics_4,x:120,y:487}).wait(1).to({graphics:mask_graphics_5,x:120,y:462.8}).wait(1).to({graphics:mask_graphics_6,x:120,y:438.6}).wait(1).to({graphics:mask_graphics_7,x:120,y:414.4}).wait(1).to({graphics:mask_graphics_8,x:120,y:390.2}).wait(1).to({graphics:mask_graphics_9,x:120,y:351}).wait(1).to({graphics:null,x:0,y:0}).wait(176));

	// Layer 11
	this.instance_8 = new lib.round_03();
	this.instance_8.parent = this;
	this.instance_8.setTransform(189.8,197,1,1,0,0,0,30.4,30.3);

	this.instance_9 = new lib.round_02();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120.2,197,1,1,0,0,0,30.3,30.3);

	this.instance_10 = new lib.round_01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(50.6,197,1,1,0,0,0,30.3,30.3);

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).to({state:[]},10).to({state:[]},166).wait(10));

	// Layer 2
	this.instance_11 = new lib.round();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120,787,4.821,4.821,0,0,0,79,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:351},9).to({_off:true},1).wait(176));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,185,86,0)").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B956").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_1.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},9).to({state:[]},167).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.8,0,761.8,1167.9);


(lib.tshirt_close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(2));

	// Layer_18
	this.instance = new lib.tshirt_05();
	this.instance.parent = this;
	this.instance.setTransform(100.7,23.6,1,1,0,0,0,100.6,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:44.8,scaleY:0.04},3).wait(1).to({regY:45.3,scaleY:0.09,skewX:180,y:23.1},0).to({regY:44.6,scaleY:0.89,y:24},3).to({regY:43.9,scaleY:0.06,y:67.9},3).wait(1).to({regY:44.7,scaleY:0.07,skewX:0,y:71.5},0).to({regY:44.8,scaleY:0.9,y:112.9},3).wait(1).to({regY:44.9,scaleY:0.12,y:93.7,alpha:0},3).wait(2));

	// Layer_19
	this.instance_1 = new lib.tshirt_04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.2,99.8,1,1,0,0,0,101.1,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({regY:102.1,scaleY:0.02,y:69},3).wait(1).to({regY:103,scaleY:0.08,skewX:180,y:66.5},0).to({scaleY:1.01,y:35.4},3).wait(1).to({regY:102.8,scaleY:0.13,y:83.8,alpha:0},3).wait(2));

	// Layer_20
	this.instance_2 = new lib.tshirt_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(101.2,99.5,1,1,0,0,0,101.1,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({regY:103,scaleY:0.11,y:92.2,alpha:0},3).wait(2));

	// Layer_21
	this.instance_3 = new lib.tshirt_02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(100.7,113.2,1,1,0,0,0,100.6,116.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({regY:115.8,scaleY:0.02},3).wait(1).to({regX:101.1,regY:102.8,scaleY:0.04,skewX:180,x:101.2,y:113.9},0).to({scaleY:1,y:127.5},3).wait(1).to({regY:102.6,scaleY:0.13,y:95.6,alpha:0},3).wait(2));

	// Layer_22
	this.instance_4 = new lib.tshirt_01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(100.7,158.3,1,1,0,0,0,100.6,161.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:162.7,scaleY:0.02,y:158.4},4).wait(1).to({regY:161.8,scaleY:0.08,skewX:180,y:158.9},0).to({regY:161.1,scaleY:0.9,y:143.9},3).to({regY:160.6,scaleY:0.05,y:114.8},3).wait(1).to({regY:161.1,scaleY:0.04,skewX:0,y:111.5},0).to({scaleY:0.9,y:73},3).to({regY:161.6,scaleY:0.11,y:88.6,alpha:0},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-21.8,202.2,227.8);


(lib.percent2headphones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer_3
	this.instance = new lib.headphones_three_03();
	this.instance.parent = this;
	this.instance.setTransform(100.9,76.9,1,1.096,0,180,0,101.4,59.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(7).to({regY:60.1,scaleY:0.08,y:79.2},3).wait(1).to({regY:59.1,scaleY:0.02,skewX:0,y:79.5},0).to({scaleY:1},3).wait(2));

	// Layer_5
	this.instance_1 = new lib.headphones_three_01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.9,137.9,1,1.016,0,180,0,101.4,112.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regY:113.6,scaleY:0.06,y:138},3).wait(1).to({regY:112.2,scaleY:0.02,skewX:0},0).to({regY:112.8,scaleY:1,y:137.8},4).wait(8));

	// Layer_6
	this.instance_2 = new lib.headphines_three_02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(101,112,1,1,0,0,0,101.5,86.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(16));

	// Layer_23
	this.instance_3 = new lib._25_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(99.5,91.5,1,1,0,0,0,107,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(29));

	// Layer_19
	this.instance_4 = new lib.percent_tree_01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(101.5,113.8,1,1,0,0,0,104,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({y:113.7},0).to({scaleY:0.02},3).wait(1).to({scaleY:0.07,skewX:180,y:113.8},0).to({regY:89.8,scaleY:0.99,y:114.4},3).to({_off:true},1).wait(15));

	// Layer_18
	this.instance_5 = new lib.percent_tree_03();
	this.instance_5.parent = this;
	this.instance_5.setTransform(101.5,68.7,1,1,0,0,0,104,45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.01},3).wait(1).to({regY:45.4,scaleY:0.08,skewX:180,y:68.6},0).to({regX:103.9,regY:44.8,scaleY:1,x:101.4,y:69},3).to({_off:true},8).wait(15));

	// Layer_20
	this.instance_6 = new lib.percent_tree_02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(100,91.6,1,1,0,0,0,102.5,68.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,22,214.5,139.2);


(lib.partners = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgRbBJdQoBjamMmQQmOmPjYoEQjioYAApLQAApLDioZQDYoFGOmPQGMmOIBjcQIWjjJFAAQJGAAIUDjQIDDcGMGOQGMGPDaIFQDiIZAAJLQAAJLjiIYQjYIGmOGNQmMGQoDDaQoUDipGAAQpHAAoUjig");
	var mask_graphics_1 = new cjs.Graphics().p("EgRbBEgQoBjamMmPQmOmPjYoEQjioYAApMQAApLDioYQDYoGGOmOQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGODaIGQDiIYAAJLQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_2 = new cjs.Graphics().p("EgRbBAPQoBjamMmQQmOmPjYoEQjioYAApLQAApLDioYQDYoFGOmPQGMmPIBjcQIWjjJFAAQJGAAIUDjQIDDcGMGPQGMGPDaIFQDiIYAAJLQAAJLjiIYQjYIGmOGNQmMGQoDDaQoUDipGAAQpHAAoUjig");
	var mask_graphics_3 = new cjs.Graphics().p("EgRbA8hQoBjamMmPQmOmQjYoEQjioYAApLQAApLDioYQDYoFGOmPQGMmPIBjcQIWjiJFAAQJGAAIUDiQIDDcGMGPQGMGPDaIFQDiIYAAJLQAAJLjiIYQjYIGmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_4 = new cjs.Graphics().p("EgRbA5RQoBjamMmPQmOmPjYoFQjioYAApLQAApLDioXQDYoGGOmPQGMmPIBjcQIWjiJFAAQJGAAIUDiQIDDcGMGPQGMGPDaIGQDiIXAAJLQAAJLjiIYQjYIGmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_5 = new cjs.Graphics().p("EgRbA2bQoBjamMmQQmOmPjYoEQjioYAApLQAApLDioXQDYoGGOmPQGMmPIBjcQIWjjJFAAQJGAAIUDjQIDDcGMGPQGMGPDaIGQDiIXAAJLQAAJLjiIYQjYIGmOGNQmMGQoDDaQoUDipGAAQpHAAoUjig");
	var mask_graphics_6 = new cjs.Graphics().p("EgRbAz7QoBjamMmPQmOmQjYoEQjioYAApLQAApLDioXQDYoGGOmPQGMmPIBjcQIWjiJFAAQJGAAIUDiQIDDcGMGPQGMGPDaIGQDiIXAAJLQAAJLjiIYQjYIGmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_7 = new cjs.Graphics().p("EgRbAxvQoBjamMmPQmOmQjYoEQjioYAApLQAApKDioYQDYoGGOmPQGMmPIBjcQIWjiJFAAQJGAAIUDiQIDDcGMGPQGMGPDaIGQDiIYAAJKQAAJLjiIYQjYIGmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_8 = new cjs.Graphics().p("EgRbAv0QoBjamMmPQmOmPjYoEQjioYAApLQAApLDioYQDYoFGOmPQGMmQIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGQQGMGPDaIFQDiIYAAJLQAAJLjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_9 = new cjs.Graphics().p("EgRbAuKQoBjamMmPQmOmQjYoEQjioYAApLQAApKDioYQDYoGGOmPQGMmPIBjcQIWjiJFAAQJGAAIUDiQIDDcGMGPQGMGPDaIGQDiIYAAJKQAAJLjiIYQjYIGmOGOQmMGPoDDaQoUDipGAAQpHAAoUjig");
	var mask_graphics_10 = new cjs.Graphics().p("EgRbAsuQoBjbmMmPQmOmPjYoEQjioYAApLQAApLDioYQDYoFGOmPQGMmQIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGQQGMGPDaIFQDiIYAAJLQAAJLjiIYQjYIFmOGOQmMGPoDDbQoUDipGAAQpHAAoUjig");
	var mask_graphics_11 = new cjs.Graphics().p("EgRbAreQoBjamMmPQmOmPjYoEQjioYAApMQAApKDioYQDYoFGOmQQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGQDaIFQDiIYAAJKQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_12 = new cjs.Graphics().p("EgRbAqbQoBjamMmPQmOmPjYoEQjioYAApMQAApKDioYQDYoGGOmPQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGPDaIGQDiIYAAJKQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_13 = new cjs.Graphics().p("EgRbApjQoBjamMmPQmOmPjYoEQjioZAApLQAApKDioYQDYoGGOmPQGMmPIBjcQIWjiJFAAQJGAAIUDiQIDDcGMGPQGMGPDaIGQDiIYAAJKQAAJLjiIZQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_14 = new cjs.Graphics().p("EgRbAphQoBjamMmPQmOmPjYoEQjioYAApMQAApKDioYQDYoFGOmQQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGQDaIFQDiIYAAJKQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_15 = new cjs.Graphics().p("EgRbAphQoBjamMmPQmOmPjYoEQjioYAApMQAApKDioYQDYoFGOmQQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGQDaIFQDiIYAAJKQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_16 = new cjs.Graphics().p("EgRbAphQoBjamMmPQmOmPjYoEQjioYAApMQAApKDioYQDYoFGOmQQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGQDaIFQDiIYAAJKQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_17 = new cjs.Graphics().p("EgRbAphQoBjamMmPQmOmPjYoEQjioYAApMQAApKDioYQDYoFGOmQQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGQDaIFQDiIYAAJKQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_18 = new cjs.Graphics().p("EgRbAphQoBjamMmPQmOmPjYoEQjioYAApMQAApKDioYQDYoFGOmQQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGQDaIFQDiIYAAJKQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_19 = new cjs.Graphics().p("EgRbAphQoBjamMmPQmOmPjYoEQjioYAApMQAApKDioYQDYoFGOmQQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGQDaIFQDiIYAAJKQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_59 = new cjs.Graphics().p("EgRbAphQoBjamMmPQmOmPjYoEQjioYAApMQAApKDioYQDYoFGOmQQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGQDaIFQDiIYAAJKQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");
	var mask_graphics_78 = new cjs.Graphics().p("EgRbAphQoBjamMmPQmOmPjYoEQjioYAApMQAApKDioYQDYoFGOmQQGMmPIBjbQIWjjJFAAQJGAAIUDjQIDDbGMGPQGMGQDaIFQDiIYAAJKQAAJMjiIYQjYIFmOGOQmMGPoDDaQoUDjpGAAQpHAAoUjjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:119.8,y:492.7}).wait(1).to({graphics:mask_graphics_1,x:119.8,y:461.1}).wait(1).to({graphics:mask_graphics_2,x:119.8,y:433.7}).wait(1).to({graphics:mask_graphics_3,x:119.8,y:410}).wait(1).to({graphics:mask_graphics_4,x:119.8,y:389.2}).wait(1).to({graphics:mask_graphics_5,x:119.8,y:370.9}).wait(1).to({graphics:mask_graphics_6,x:119.8,y:355}).wait(1).to({graphics:mask_graphics_7,x:119.8,y:341}).wait(1).to({graphics:mask_graphics_8,x:119.8,y:328.7}).wait(1).to({graphics:mask_graphics_9,x:119.8,y:318}).wait(1).to({graphics:mask_graphics_10,x:119.8,y:308.8}).wait(1).to({graphics:mask_graphics_11,x:119.8,y:300.9}).wait(1).to({graphics:mask_graphics_12,x:119.8,y:294.2}).wait(1).to({graphics:mask_graphics_13,x:119.8,y:288.6}).wait(1).to({graphics:mask_graphics_14,x:119.8,y:279.6}).wait(1).to({graphics:mask_graphics_15,x:119.8,y:272.3}).wait(1).to({graphics:mask_graphics_16,x:119.8,y:266.8}).wait(1).to({graphics:mask_graphics_17,x:119.8,y:263.1}).wait(1).to({graphics:mask_graphics_18,x:119.8,y:260.8}).wait(1).to({graphics:mask_graphics_19,x:119.8,y:260.1}).wait(40).to({graphics:mask_graphics_59,x:119.8,y:260.1}).wait(19).to({graphics:mask_graphics_78,x:119.8,y:260.1}).wait(12));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B956").s().p("AgwA8IAAh3IAvAAQAQAAAIADQAJADAFAIQAHAHAAALQgBAIgDAHQgDAGgIAEQAJACAGAIQAFAIAAAKQgBARgLAJQgLAIgVAAgAgcArIAbAAQAQAAAHgEQAGgEAAgKQAAgFgDgFQgEgFgGgCIgSgBIgZAAgAgcgJIAVAAIARgBQAGgBADgEQAEgEAAgGQAAgKgHgDQgGgEgQAAIgWAAg");
	this.shape.setTransform(170.7,56.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B956").s().p("AgnAuQgQgQAAgeQAAggASgQQAQgOAVAAQAZAAAQARQAPAQAAAcQAAAXgGANQgIANgNAHQgNAIgQgBQgYABgPgRgAgYghQgKALAAAWQAAAXAKALQAKAMAOAAQAPAAAKgMQALgLgBgXQABgVgLgMQgKgMgPAAQgOAAgKAMg");
	this.shape_1.setTransform(157.8,56.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B956").s().p("AgzBUIAAikIATAAIAAAPQAGgJAIgEQAJgFALAAQAPAAAMAIQALAIAGAOQAGAOAAASQAAASgHAOQgGAOgNAIQgMAIgOAAQgJAAgIgEQgJgFgEgGIAAA6gAgWg3QgKAMAAAXQAAAWAJALQAJALANAAQANAAAKgLQAKgMAAgXQAAgWgKgMQgJgLgNAAQgMAAgKAMg");
	this.shape_2.setTransform(145.3,58.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B956").s().p("AgmBEQgQgQAAgdQAAgdAQgRQAPgRAYAAQAYAAAPARQAPAQAAAdIAAAFIhYAAQABAUAKAKQAKALAOAAQALAAAIgGQAIgGAEgNIAVADQgEASgOAKQgNAKgVAAQgaAAgOgQgAgVgOQgKAKgBAOIBCAAQgCgOgGgHQgKgMgPAAQgNAAgJAJgAAKg8IAAgXIAWAAIAAAXgAgeg8IAAgXIAUAAIAAAXg");
	this.shape_3.setTransform(132.1,53.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00B956").s().p("AAcA8IAAg1Ig3AAIAAA1IgUAAIAAh3IAUAAIAAAyIA3AAIAAgyIAUAAIAAB3g");
	this.shape_4.setTransform(119.4,56.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00B956").s().p("AgJA8IAAhmIgmAAIAAgRIBgAAIAAARIgnAAIAABmg");
	this.shape_5.setTransform(107.7,56.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00B956").s().p("AgzBUIAAikIASAAIAAAPQAHgJAIgEQAJgFAKAAQAPAAAMAIQAMAIAGAOQAGAOAAASQAAASgHAOQgGAOgNAIQgMAIgOAAQgJAAgIgEQgJgFgEgGIAAA6gAgXg3QgJAMgBAXQAAAWAKALQAKALANAAQAMAAAKgLQAKgMAAgXQAAgWgKgMQgKgLgMAAQgNAAgKAMg");
	this.shape_6.setTransform(96.8,58.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00B956").s().p("AgsA1QgKgJAAgQQAAgIAEgHQAEgIAGgEQAHgDAIgDIASgDQAXgDAMgEIAAgFQAAgMgGgFQgHgIgPAAQgOAAgGAGQgIAEgDANIgUgDQADgMAGgIQAGgIAMgEQAMgFAOAAQAQAAAJAFQAJADAGAGQAEAFABAIIABATIAAAaQAAAcACAHQABAIAEAHIgVAAQgDgHgBgIQgMAKgKAEQgJAEgNgBQgTAAgLgJgAgEAHQgMACgGADQgFACgCAEQgEAEAAAGQAAAIAHAGQAFAFANAAQALAAAIgFQAKgFAEgKQADgGAAgOIAAgHQgLAEgVADg");
	this.shape_7.setTransform(83.7,56.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00B956").s().p("AAbA8IAAhmIg1AAIAABmIgUAAIAAh3IBdAAIAAB3g");
	this.shape_8.setTransform(71.1,56.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00B956").s().p("AglBDQgQgVAAguQAAgcAGgSQAGgSAMgKQAMgKARABQANAAAKAFQALAGAGAJQAHAKADAPQAEAPAAAXQAAAdgGASQgGASgMAKQgMAJgSABQgXAAgOgSgAgVg3QgLAPAAAoQAAApAKANQAJAOANAAQAOAAAKgOQAJgNAAgpQAAgngJgOQgKgNgOAAQgOgBgHAMg");
	this.shape_9.setTransform(51.9,53.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00B956").s().p("AgkBDQgRgVAAguQAAgcAGgSQAGgSAMgKQAMgKARABQANAAAKAFQAKAGAHAJQAGAKAEAPQAEAPAAAXQAAAdgGASQgGASgMAKQgMAJgSABQgXAAgNgSgAgWg3QgKAPAAAoQAAApAJANQAKAOANAAQAOAAAKgOQAJgNAAgpQAAgngJgOQgKgNgOAAQgNgBgJAMg");
	this.shape_10.setTransform(39.1,53.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00B956").s().p("AglBHQgOgMgCgVIAUgDQAEARAIAIQAIAHANABQANAAAKgKQAKgKAAgPQAAgOgKgJQgJgJgOAAQgFAAgIADIACgRIADAAQAMAAALgHQAKgHAAgOQAAgLgHgHQgIgIgLABQgMAAgIAHQgIAHgCAPIgUgDQAEgVANgLQANgLAUAAQAMgBAMAHQALAGAGAJQAGAKAAAMQAAALgGAIQgGAJgLAFQAPADAIAKQAIAKAAAQQAAAXgQAOQgPAPgYABQgVgBgPgNg");
	this.shape_11.setTransform(26.3,53.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7D0F8C").s().p("AArA8IAAhgIgjBgIgRAAIgihkIAABkIgTAAIAAh3IAfAAIAfBfIAihfIAeAAIAAB3g");
	this.shape_12.setTransform(141.6,31.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7D0F8C").s().p("AgnAvQgPgRAAgdQAAgdAPgQQAQgSAYABQAYAAAPAQQAPAQAAAdIAAAFIhYAAQABAUAKALQAKAKAOAAQALAAAIgGQAIgGAFgNIAVADQgFATgOAJQgNALgVAAQgZAAgQgQgAgWgjQgJAJgBAPIBCAAQgBgOgHgIQgJgMgQABQgNAAgKAJg");
	this.shape_13.setTransform(127.2,31.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7D0F8C").s().p("AAcA8IAAgwQgSAFgQAAQgNAAgLgGQgLgHgDgJQgEgLAAgMIAAgfIAVAAIAAAXQAAAOACAHQABAHAHAFQAGADALAAQAKAAASgFIAAg2IAUAAIAAB3g");
	this.shape_14.setTransform(114.5,31.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7D0F8C").s().p("AgmAvQgQgRAAgdQAAgdAQgQQAPgSAYABQAYAAAPAQQAPAQAAAdIAAAFIhYAAQABAUAKALQAKAKAOAAQALAAAIgGQAIgGAFgNIAUADQgEATgOAJQgNALgVAAQgZAAgPgQgAgVgjQgKAJgBAPIBCAAQgCgOgGgIQgKgMgPABQgNAAgJAJg");
	this.shape_15.setTransform(96,31.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7D0F8C").s().p("AgnAvQgPgRAAgdQAAgdAPgQQAQgSAYABQAYAAAPAQQAPAQAAAdIAAAFIhYAAQABAUAKALQAKAKAOAAQALAAAIgGQAIgGAEgNIAVADQgEATgOAJQgNALgVAAQgaAAgPgQgAgVgjQgKAJgBAPIBCAAQgCgOgGgIQgKgMgPABQgNAAgJAJg");
	this.shape_16.setTransform(83.2,31.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7D0F8C").s().p("Ag5A7IAAgRIAJAAIAJgBQADgBAAgDQABgDAAgQIAAhNIBeAAIAAB2IgVAAIAAhmIg1AAIAAA7QAAAVgBAGQgBAHgHAFQgFAFgMAAIgQgBg");
	this.shape_17.setTransform(69.5,31.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7D0F8C").s().p("AgnAvQgQgRAAgeQAAggASgQQAQgNAVAAQAZAAAQAQQAPAQAAAcQAAAXgGANQgIANgNAIQgNAGgQABQgYAAgPgQgAgYghQgKALAAAWQAAAXAKALQAKAMAOAAQAPAAAKgMQALgLgBgXQABgWgLgLQgKgMgPABQgOgBgKAMg");
	this.shape_18.setTransform(57.4,31.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7D0F8C").s().p("AgfBMQgMgKgGgPQgGgPAAglQAAgvAQgRQAQgQAgAAQAVAAACgBQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIASAAQgBAMgEAFQgEAFgHABQgGACgTAAQgYAAgKAEQgJAFgEALQgEALAAAQQAIgLAKgGQAKgFAMAAQAXAAAQAQQAPAQAAAbQAAAVgIANQgHANgLAIQgLAHgSAAQgUAAgMgKgAgYgGQgJAMAAAVQAAAVAKALQAKALAOAAQAPAAAKgNQAJgNAAgVQAAgTgJgLQgJgMgQAAQgPAAgKANg");
	this.shape_19.setTransform(44.5,28.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7D0F8C").s().p("AgrBSIgDgTQAHABAFAAQAHAAAEgCQAEgCADgEIAGgQIACgEIguh3IAWAAIAZBFQAFAOADANQADgNAFgOIAZhFIAVAAIgtB4IgLAbQgGAKgHAGQgHAEgJAAQgGAAgHgCg");
	this.shape_20.setTransform(25.8,33.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	// Layer 1
	this.instance = new lib.sportmaster();
	this.instance.parent = this;
	this.instance.setTransform(120,300.6,1.068,1.068,0,0,0,93.5,14.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// 1
	this.instance_1 = new lib.lamoda();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.1,229.5,0.45,0.45,0,0,0,181.9,43.6);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// Layer 1
	this.instance_2 = new lib.mediamarkt_logo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.1,167,0.355,0.355,0,0,0,281.1,37.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// Layer_3
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_21.setTransform(120,200);

	var maskedShapeInstanceList = [this.shape_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(90));

	// Layer_1
	this.instance_3 = new lib.megafon_logo_animated();
	this.instance_3.parent = this;
	this.instance_3.setTransform(119.6,693.9,8.036,8.036,0,0,0,35.6,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:18.5,regY:36.9,x:-17.8,y:641.8},0).wait(1).to({y:587.2},0).wait(1).to({y:539.6},0).wait(1).to({y:498},0).wait(1).to({y:461.6},0).wait(1).to({y:429.6},0).wait(1).to({y:401.6},0).wait(1).to({y:377.1},0).wait(1).to({y:355.8},0).wait(1).to({y:337.3},0).wait(1).to({y:321.5},0).wait(1).to({y:308},0).wait(1).to({y:296.8},0).wait(1).to({y:287.7},0).wait(1).to({y:280.4},0).wait(1).to({y:275},0).wait(1).to({y:271.2},0).wait(1).to({y:269},0).wait(1).to({regX:35.6,regY:35.5,x:119.6,y:257},0).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.5,408.6,573,577);


(lib.money2percent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// Layer_15
	this.instance = new lib.money_four_03();
	this.instance.parent = this;
	this.instance.setTransform(100.6,93.4,1.007,1,0,0,180,100.2,43.4);
	this.instance._off = true;

	this.instance_1 = new lib.money_four_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.5,93.2,1,0.06,180,0,0,100.5,45.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regX:100.5,scaleX:1,scaleY:0.04},2).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regY:43.5,scaleY:1,x:100.6,y:93.1},2).to({regY:43.3,scaleX:1.01,scaleY:0.16,x:100.5,y:120.8},2).to({_off:true},1).wait(19));

	// Layer_16
	this.instance_2 = new lib.money_four_04();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100.6,93.3,1,1,0,0,180,100.5,43.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({_off:true},5).wait(22));

	// Layer_17
	this.instance_3 = new lib.money_four_02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(100.6,93.3,1,1,0,0,0,100.5,43.3);
	this.instance_3._off = true;

	this.instance_4 = new lib.money_four_03();
	this.instance_4.parent = this;
	this.instance_4.setTransform(100.6,93.2,1,0.06,0,180,0,100.5,45.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({regY:43.4,scaleY:0.04,y:93.4},2).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({regY:43.5,scaleY:1,y:93.1},2).to({regY:43.3,scaleY:0.16,y:120.8},2).to({_off:true},1).wait(19));

	// Layer_14
	this.instance_5 = new lib.money_four_01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(100.6,93.3,1,1,0,0,0,100.5,43.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({_off:true},6).wait(21));

	// Layer_13
	this.instance_6 = new lib.money_half_02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(100.6,93.4,0.995,1,0,0,0,100.5,44.8);
	this.instance_6._off = true;

	this.instance_7 = new lib.money_half_01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(100.6,93.4,0.114,1,0,0,0,100.5,44.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({regX:100.6,scaleX:0.11},3).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({scaleX:1,x:100.5},2).to({_off:true},1).wait(26));

	// Layer_9
	this.instance_8 = new lib.money_half_01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(100.5,93.4,1,1,0,0,0,100.5,44.8);

	this.instance_9 = new lib.money_half_02();
	this.instance_9.parent = this;
	this.instance_9.setTransform(100.6,93.4,0.995,1,0,0,0,100.5,44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},2).to({state:[]},7).to({state:[]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.11,x:100.6},2).wait(1).to({regX:100.6,scaleX:0.13,skewY:180},0).to({_off:true,regX:100.5,scaleX:1,skewY:0},2).wait(33));

	// Layer_10
	this.instance_10 = new lib.money_half_02();
	this.instance_10.parent = this;
	this.instance_10.setTransform(100.5,93.8,1,1,0,0,0,100.5,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},6).wait(32));

	// Layer_23
	this.instance_11 = new lib._25_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(99.5,91.5,1,1,0,0,0,107,69.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(37).to({_off:false},0).wait(1));

	// Layer_18
	this.instance_12 = new lib.percent_tree_03();
	this.instance_12.parent = this;
	this.instance_12.setTransform(101.5,127.4,1,0.149,0,0,0,104,44.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({_off:false},0).to({regY:44.8,scaleY:1,y:158.5},3).wait(1).to({scaleY:0.09,y:117.6},3).wait(1).to({regY:44.6,scaleY:0.07,skewX:180,y:110.5},0).to({regY:45.1,scaleY:1,y:68.6},3).to({regY:45.3,scaleY:0.08,y:68.5},3).wait(1).to({scaleY:0.05,skewX:0},0).to({scaleY:1,y:68.8},3).wait(1));

	// Layer_20
	this.instance_13 = new lib.percent_tree_02();
	this.instance_13.parent = this;
	this.instance_13.setTransform(100,124,1,0.149,0,180,0,102.5,68.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).to({regY:68.8,scaleY:1,y:135.5},3).wait(1).to({scaleY:0.09,y:115.6},3).wait(1).to({regY:68.7,scaleY:0.07,skewX:0,y:112.1},0).to({regY:68.3,scaleY:1,y:91.6},3).wait(8));

	// Layer_19
	this.instance_14 = new lib.percent_tree_01();
	this.instance_14.parent = this;
	this.instance_14.setTransform(100,117.5,1,0.149,0,0,0,102.5,68.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(19).to({_off:false},0).to({regY:68.3,scaleY:1,y:91.6},3).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,48.6,201,90);


(lib.joystick2tshirt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(9));

	// Layer_18
	this.instance = new lib.tshirt_05();
	this.instance.parent = this;
	this.instance.setTransform(100.7,112.9,1,0.902,0,0,0,100.6,44.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({regY:44.7,scaleY:0.07,y:71.5},3).wait(1).to({regY:43.9,scaleY:0.06,skewX:180,y:68.9},0).to({regY:44.6,scaleY:0.89,y:23.8},3).to({regY:45.3,scaleY:0.09,y:23.6},3).wait(1).to({regY:44.8,scaleY:0.04,skewX:0,y:23.4},0).to({regY:45.4,scaleY:1},3).wait(12));

	// Layer_19
	this.instance_1 = new lib.tshirt_04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.2,35.4,1,1.013,0,180,0,101.1,103);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleY:0.08,y:65.7},3).wait(1).to({regX:100.6,regY:71.5,scaleY:0.04,skewX:0,x:100.7,y:68.6},0).to({regY:71,scaleY:1,y:68.5},3).wait(19));

	// Layer_20
	this.instance_2 = new lib.tshirt_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(101.2,99.5,1,1,0,0,0,101.1,102.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(26));

	// Layer_21
	this.instance_3 = new lib.tshirt_02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(101.2,127.5,1,1,0,180,0,101.1,102.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({scaleY:0.04,y:113.9},3).wait(1).to({regY:103.7,scaleY:0.05,skewX:0,y:112.8},0).to({regY:102.5,scaleY:1,y:99.3},3).wait(19));

	// Layer_26
	this.instance_4 = new lib.tshirt_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(100,99.5,1,1,0,0,0,98,105.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).wait(11));

	// Layer_22
	this.instance_5 = new lib.tshirt_01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(100.7,73,1,0.897,0,0,0,100.6,161.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({scaleY:0.04,y:111.5},3).wait(1).to({regY:160.6,scaleY:0.05,skewX:180,y:114.8},0).to({regY:161.1,scaleY:0.9,y:159.1},3).to({regY:161.8,scaleY:0.08,y:158.9},3).wait(1).to({scaleY:0.05,skewX:0,y:155.9},0).to({scaleY:1,y:158.3},3).to({_off:true},1).wait(11));

	// Layer_9
	this.instance_6 = new lib.joystick_three_03();
	this.instance_6.parent = this;
	this.instance_6.setTransform(99.9,68.3,1,1,0,0,0,99.9,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({regY:45,scaleY:0.03,y:68},3).to({regY:45.5,scaleY:0.12,skewX:180,y:68.3},1).to({regY:45.6,scaleY:1.13,y:67.9},3).to({_off:true},1).wait(25));

	// Layer_14
	this.instance_7 = new lib.jostick_three_02();
	this.instance_7.parent = this;
	this.instance_7.setTransform(100.7,91.5,1,1,0,0,0,100.7,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},13).wait(25));

	// Layer_8
	this.instance_8 = new lib.joystick_three_01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(99.9,113.2,1,1,0,0,0,99.9,90.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.13},4).wait(1).to({regY:91.2,scaleY:0.31,skewX:180,y:113.3},0).to({regY:91,scaleY:1,y:113.5},4).to({_off:true},4).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,21.8,201.3,139.5);


(lib.headphones2jotstick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(9));

	// Layer_13
	this.instance = new lib.joystick_1();
	this.instance.parent = this;
	this.instance.setTransform(100,91.1,1,1,0,0,0,97,69.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(14));

	// Layer_9
	this.instance_1 = new lib.joystick_three_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.9,67.9,1,1.134,0,180,0,99.9,45.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({regY:45.5,scaleY:0.12,y:68},3).to({regY:45.6,scaleY:0.18,skewX:0,y:69.3},1).to({regY:45.5,scaleY:1,y:68},4).to({_off:true},1).wait(14));

	// Layer_14
	this.instance_2 = new lib.jostick_three_02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100.7,91.5,1,1,0,0,0,100.7,69);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({_off:true},9).wait(14));

	// Layer_8
	this.instance_3 = new lib.joystick_three_01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(99.9,113.5,1,1.003,0,180,0,99.9,91);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({regY:91.2,scaleY:0.31,y:113.3},4).wait(1).to({regY:90.9,scaleY:0.02,skewX:0,y:113.2},0).to({scaleY:1},4).to({_off:true},1).wait(13));

	// Layer_3
	this.instance_4 = new lib.headphones_three_03();
	this.instance_4.parent = this;
	this.instance_4.setTransform(100.9,59.4,1,1,0,0,0,101.4,59.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({y:59.3},0).to({regY:60.5,scaleY:0.01,y:59.2},3).wait(1).to({regY:60.1,scaleY:0.08,skewX:180,y:59.4},0).to({regY:59.4,scaleY:1.1,y:60.1},3).to({_off:true},1).wait(23));

	// Layer_5
	this.instance_5 = new lib.headphones_three_01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(100.9,118.2,1,1,0,0,0,101.4,112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:113,scaleY:0.07,y:118.1},4).wait(1).to({regY:113.6,scaleY:0.06,skewX:180,y:118.3},0).to({regY:112.6,scaleY:1.02,y:119.2},3).to({_off:true},7).wait(23));

	// Layer_6
	this.instance_6 = new lib.headphines_three_02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(101,92,1,1,0,0,0,101.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:true},11).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.3,203,178.9);


(lib.gift2money = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer_5
	this.instance = new lib.money_pack();
	this.instance.parent = this;
	this.instance.setTransform(51.4,52.7,0.585,0.585,0,0,0,95.5,94.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.money_bow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.7,51.2,0.586,0.586,0,0,0,63.7,62.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.22,scaleY:1.22,y:51.3,alpha:1},7).to({regX:63.6,regY:62.9,scaleX:1.01,scaleY:1.01,rotation:-15,x:50.5,y:52.5},4).to({_off:true},1).wait(1));

	// gift_four_01
	this.instance_2 = new lib.gift_four_01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51,53,0.542,0.02,0,180,0,99.2,98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.54,y:53.1},3).to({_off:true},9).wait(1));

	// gift_four_02
	this.instance_3 = new lib.gift_four_02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.3,53.6,0.001,0.542,0,180,0,100.3,97.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:100.1,scaleX:0.54,x:51.4},3).to({_off:true},6).wait(1));

	// gift_half_02
	this.instance_4 = new lib.gift_half_02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(51.1,53.5,0.542,0.018,0,0,0,99,96.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({regY:97.8,scaleY:0.54,y:53.1},3).to({_off:true},2).wait(1));

	// Layer_1
	this.instance_5 = new lib.gift_pack();
	this.instance_5.parent = this;
	this.instance_5.setTransform(52,51.8,0.581,0.581,0,0,0,91,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},11).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-0.8,110.9,105.2);


(lib.gift_transform = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// Layer_9
	this.instance = new lib.money_half_02();
	this.instance.parent = this;
	this.instance.setTransform(100.5,102,0.991,0.18,0,0,0,100.5,45);
	this.instance._off = true;

	this.instance_1 = new lib.money_half_01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.4,93.4,0.064,1,0,0,0,99.8,44.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regY:44.8,scaleY:1,y:93.4},4).to({regX:100.6,scaleX:0.06},4).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({regX:100.5,scaleX:1,x:100.5},4).wait(1));

	// Layer_10
	this.instance_2 = new lib.money_half_02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(100.5,105,1,0.115,0,0,0,100.5,44.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regY:44.8,scaleY:1,y:93.8},4).wait(10));

	// Layer_6
	this.instance_3 = new lib.gift_four_01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(99.3,100,1,1,0,0,0,99,98.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({scaleX:0.05,x:100.1},3).wait(1).to({regX:100,scaleX:0.06,skewY:180,x:99.8},0).to({scaleX:0.97,x:99.7},3).to({_off:true},1).wait(18));

	// Layer_7
	this.instance_4 = new lib.gift_four_02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(99,100,1,1,0,0,0,99,98.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(8).to({scaleY:0.06},4).to({_off:true},1).wait(13));

	// Layer_4
	this.instance_5 = new lib.gift_half_01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(99,97.5,1,1,0,0,0,99,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.04,y:97.6},3).wait(1).to({scaleY:0.05,skewX:180,y:98.9},0).to({regY:96.3,scaleY:0.99,y:101.2},2).to({_off:true},1).wait(26));

	// Layer_2
	this.instance_6 = new lib.gift_half_02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(99,97.5,1,1,0,0,0,99,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},6).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-3.6,204.5,202.4);


(lib.all_movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_124 = function() {
		moneyGift.shadow = new createjs.Shadow("rgba(0,0,0,0.2)",200,200,15);
	}
	this.frame_143 = function() {
		moneyGift.shadow = new createjs.Shadow("rgba(0,0,0,0.2)",200,200,15);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(124).call(this.frame_124).wait(19).call(this.frame_143).wait(569));

	// Layer 20
	this.instance = new lib.final_block();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(582).to({_off:false},0).to({_off:true},128).wait(2));

	// round_06
	this.instance_1 = new lib.round_03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.7,197,0.282,0.282,0,0,0,30.3,30.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(553).to({_off:false},0).to({regX:30.5,regY:30.5,scaleX:1.33,scaleY:1.33,x:190,y:197.2,alpha:1},4).to({regX:30.4,regY:30.3,scaleX:1,scaleY:1,x:189.8,y:197},2).wait(18).to({regY:30.4,scaleX:1.12,scaleY:1.12,x:189.7,y:197.1},3).to({regY:30.3,scaleX:1,scaleY:1,x:189.8,y:197},4).to({_off:true},27).wait(101));

	// round_05
	this.instance_2 = new lib.round_02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120.2,197.1,0.28,0.28,0,0,0,30.4,30.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(547).to({_off:false},0).to({scaleX:1.68,scaleY:1.68,x:120.3,y:195.1,alpha:1},4).to({regX:30.3,regY:30.3,scaleX:1,scaleY:1,x:120.2,y:197},2).wait(18).to({regX:30.4,regY:30.4,scaleX:1.12,scaleY:1.12,x:120.3,y:197.1},3).to({regX:30.3,regY:30.3,scaleX:1,scaleY:1,x:120.2,y:197},4).to({_off:true},33).wait(101));

	// round_04
	this.instance_3 = new lib.round_02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50.7,197,0.283,0.283,0,0,0,30.4,30.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(541).to({_off:false},0).to({scaleX:1.59,scaleY:1.59,x:53.7,y:192.1,alpha:1},4).to({regX:30.3,regY:30.3,scaleX:1,scaleY:1,x:50.6,y:197},2).wait(18).to({scaleX:1.15,scaleY:1.15,x:50.7},3).to({scaleX:1,scaleY:1,x:50.6},4).to({_off:true},39).wait(101));

	// Layer_17
	this.instance_4 = new lib.white_block();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(536).to({_off:false},0).to({alpha:1},13).to({_off:true},161).wait(2));

	// Layer_13
	this.instance_5 = new lib.partners();
	this.instance_5.parent = this;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(491).to({_off:false},0).to({_off:true},219).wait(2));

	// Layer_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApKEuIRJhgIBMNmIxJBgg");
	var mask_graphics_347 = new cjs.Graphics().p("ApKANIRJhfIBMNkIxJBgg");
	var mask_graphics_348 = new cjs.Graphics().p("ApQgBIRVhiIBMNlIxVBhg");
	var mask_graphics_349 = new cjs.Graphics().p("ApWgQIRhhjIBMNlIxhBig");
	var mask_graphics_350 = new cjs.Graphics().p("ApcgfIRthkIBMNlIxtBjg");
	var mask_graphics_351 = new cjs.Graphics().p("ApiguIR5hlIBMNlIx5Bkg");
	var mask_graphics_352 = new cjs.Graphics().p("Apog9ISFhmIBMNlIyFBlg");
	var mask_graphics_353 = new cjs.Graphics().p("ApuhMISRhnIBMNlIyRBng");
	var mask_graphics_354 = new cjs.Graphics().p("ApLhbISdhoIBMNlIydBog");
	var mask_graphics_355 = new cjs.Graphics().p("An+hqISohpIBNNlIypBog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-48.9,y:117.2}).wait(347).to({graphics:mask_graphics_347,x:-49.7,y:88.2}).wait(1).to({graphics:mask_graphics_348,x:-32.5,y:86.7}).wait(1).to({graphics:mask_graphics_349,x:-15.2,y:85.2}).wait(1).to({graphics:mask_graphics_350,x:2,y:83.7}).wait(1).to({graphics:mask_graphics_351,x:19.3,y:82.2}).wait(1).to({graphics:mask_graphics_352,x:36.5,y:80.7}).wait(1).to({graphics:mask_graphics_353,x:53.8,y:79.3}).wait(1).to({graphics:mask_graphics_354,x:67,y:77.8}).wait(1).to({graphics:mask_graphics_355,x:75.9,y:76.2}).wait(357));

	// Layer 1
	this.instance_6 = new lib.icatcher_bg_top();
	this.instance_6.parent = this;
	this.instance_6.setTransform(22.9,113.7,1,1,-5,0,0,51.5,26.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(351).to({_off:false},0).to({regX:51.6,x:91.6,y:108.2,alpha:1},4).to({_off:true},355).wait(2));

	// Layer_9
	this.instance_7 = new lib.icatcher_top();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80.7,120,1,1,0,0,0,70.8,48.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(347).to({_off:false},0).to({_off:true},363).wait(2));

	// Layer 16
	this.instance_8 = new lib.slogan_05();
	this.instance_8.parent = this;
	this.instance_8.setTransform(366.9,55.8,1,1,0,0,0,86.8,40.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(328).to({_off:false},0).to({scaleX:0.92,x:98.9},9).wait(1).to({regX:78.6,regY:38.2,scaleX:0.97,x:95.1,y:53.2},0).wait(1).to({scaleX:0.99,x:96.6},0).wait(1).to({scaleX:1,x:97.4},0).wait(1).to({regX:86.8,regY:40.8,scaleX:1,x:105.9,y:55.8},0).wait(151).to({regX:78.6,regY:38.2,x:97,y:53.2},0).wait(1).to({x:94.8},0).wait(1).to({x:91.1},0).wait(1).to({x:85.6},0).wait(1).to({x:78.2},0).wait(1).to({x:68.2},0).wait(1).to({x:55.1},0).wait(1).to({x:37.8},0).wait(1).to({x:14.3},0).wait(1).to({x:-21},0).wait(1).to({regX:86.8,regY:40.8,x:-117.1,y:55.8},0).to({_off:true},1).wait(209));

	// Layer 15
	this.instance_9 = new lib.slogan_04();
	this.instance_9.parent = this;
	this.instance_9.setTransform(366.9,55.8,1,1,0,0,0,86.8,40.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(321).to({_off:false},0).to({scaleX:0.92,x:98.9},9).wait(1).to({regX:58,regY:19.3,scaleX:0.97,x:75.2,y:34.3},0).wait(1).to({scaleX:0.99,x:76.2},0).wait(1).to({scaleX:1,x:76.8},0).wait(1).to({regX:86.8,regY:40.8,scaleX:1,x:105.9,y:55.8},0).wait(158).to({regX:58,regY:19.3,x:76.4,y:34.3},0).wait(1).to({x:74.2},0).wait(1).to({x:70.5},0).wait(1).to({x:65},0).wait(1).to({x:57.6},0).wait(1).to({x:47.6},0).wait(1).to({x:34.5},0).wait(1).to({x:17.2},0).wait(1).to({x:-6.3},0).wait(1).to({x:-41.6},0).wait(1).to({regX:86.8,regY:40.8,x:-117.1,y:55.8},0).to({_off:true},1).wait(209));

	// Layer 14
	this.instance_10 = new lib.slogan_03();
	this.instance_10.parent = this;
	this.instance_10.setTransform(366.9,55.8,1,1,0,0,0,86.8,40.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(235).to({_off:false},0).to({scaleX:0.92,x:98.9},9).wait(1).to({regX:82.7,regY:27.9,scaleX:0.97,x:99.1,y:42.9},0).wait(1).to({scaleX:0.99,x:100.6},0).wait(1).to({scaleX:1,x:101.4},0).wait(1).to({regX:86.8,regY:40.8,scaleX:1,x:105.9,y:55.8},0).wait(71).to({regX:82.7,regY:27.9,x:101.1,y:42.9},0).wait(1).to({x:98.9},0).wait(1).to({x:95.2},0).wait(1).to({x:89.7},0).wait(1).to({x:82.3},0).wait(1).to({x:72.3},0).wait(1).to({x:59.2},0).wait(1).to({x:41.9},0).wait(1).to({x:18.4},0).wait(1).to({x:-16.9},0).wait(1).to({regX:86.8,regY:40.8,x:-117.1,y:55.8},0).to({_off:true},1).wait(382));

	// Layer_6
	this.instance_11 = new lib.slogan_011();
	this.instance_11.parent = this;
	this.instance_11.setTransform(293.1,104.8,1,1,0,0,0,86.8,40.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(145).to({_off:false},0).to({scaleX:0.97,x:103.6},9).to({scaleX:1,x:105.9},4).wait(35).to({regX:47.6,regY:18.5,x:65.2,y:82.5,alpha:0.993},0).wait(1).to({x:60.7,alpha:0.973},0).wait(1).to({x:53.3,alpha:0.94},0).wait(1).to({x:42.9,alpha:0.893},0).wait(1).to({x:29.3,alpha:0.832},0).wait(1).to({x:12.3,alpha:0.756},0).wait(1).to({x:-8.5,alpha:0.663},0).wait(1).to({x:-33.6,alpha:0.55},0).wait(1).to({x:-64.3,alpha:0.412},0).wait(1).to({x:-102.9,alpha:0.239},0).wait(1).to({regX:86.8,regY:40.8,x:-117.1,y:104.8,alpha:0},0).to({_off:true},1).wait(508));

	// Layer 10
	this.instance_12 = new lib.slogan_01();
	this.instance_12.parent = this;
	this.instance_12.setTransform(366.9,55.8,1,1,0,0,0,86.8,40.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},0).to({scaleX:0.92,x:98.9},9).wait(1).to({regX:64.7,regY:28.5,scaleX:0.97,x:81.6,y:43.5},0).wait(1).to({scaleX:0.99,x:82.9},0).wait(1).to({scaleX:1,x:83.5},0).wait(1).to({regX:86.8,regY:40.8,scaleX:1,x:105.9,y:55.8},0).wait(129).to({regX:64.7,regY:28.5,x:82.3,y:43.5,alpha:0.993},0).wait(1).to({x:77.8,alpha:0.973},0).wait(1).to({x:70.4,alpha:0.94},0).wait(1).to({x:60,alpha:0.893},0).wait(1).to({x:46.4,alpha:0.832},0).wait(1).to({x:29.4,alpha:0.756},0).wait(1).to({x:8.6,alpha:0.663},0).wait(1).to({x:-16.5,alpha:0.55},0).wait(1).to({x:-47.2,alpha:0.412},0).wait(1).to({x:-85.8,alpha:0.239},0).wait(1).to({regX:86.8,regY:40.8,x:-117.1,y:55.8,alpha:0},0).to({_off:true},1).wait(512));

	// Layer_5
	this.instance_13 = new lib.gift2money();
	this.instance_13.parent = this;
	this.instance_13.setTransform(119.9,196.3,1,1,0,0,0,52,51.8);
	this.instance_13._off = true;

	this.instance_14 = new lib.gift_transform("synched",0,false);
	this.instance_14.parent = this;
	this.instance_14.setTransform(119,226,1,1,0,0,0,99,97.5);

	this.instance_15 = new lib.money2percent("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(20,128.5);

	this.instance_16 = new lib.percent2headphones("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(119,226,1,1,0,0,0,99,97.5);

	this.instance_17 = new lib.headphones2jotstick("synched",0,false);
	this.instance_17.parent = this;
	this.instance_17.setTransform(119,246,1,1,0,0,0,99,97.5);

	this.instance_18 = new lib.joystick2tshirt("synched",0,false);
	this.instance_18.parent = this;
	this.instance_18.setTransform(119,246,1,1,0,0,0,99,97.5);

	this.instance_19 = new lib.tshirt_close("synched",0,false);
	this.instance_19.parent = this;
	this.instance_19.setTransform(119,246,1,1,0,0,0,99,97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},124).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_14}]},47).to({state:[{t:this.instance_15}]},60).to({state:[{t:this.instance_16}]},63).to({state:[{t:this.instance_17}]},56).to({state:[{t:this.instance_18}]},49).to({state:[{t:this.instance_19}]},53).to({state:[]},212).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(124).to({_off:false},0).wait(1).to({regX:51.8,regY:53.4,scaleX:1,scaleY:1,x:119.7,y:198},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:198.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:198.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:119.8,y:199.8},0).wait(1).to({regX:52.2,regY:51.8,scaleX:1.16,scaleY:1.16,x:120.1,y:199},0).wait(1).to({regX:51.8,regY:53.4,scaleX:1.21,scaleY:1.21,x:119.6,y:202},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:119.5,y:203.5},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:205.3},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:119.4,y:207.3},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:119.3,y:209.6},0).wait(1).to({scaleX:1.68,scaleY:1.68,y:212.1},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:119.2,y:214.7},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:119.1,y:217.3},0).wait(1).to({regX:52,regY:51.9,scaleX:2.04,scaleY:2.04,x:119.9,y:216.6},0).to({regX:52.1,scaleX:1.91,scaleY:1.91,x:120.1,y:226.6},5).to({_off:true},47).wait(522));

	// Layer_19
	this.instance_20 = new lib.money_shadow();
	this.instance_20.parent = this;
	this.instance_20.setTransform(121,223,1,1,0,0,0,100,44);
	this.instance_20.alpha = 0.398;
	this.instance_20._off = true;

	this.instance_21 = new lib._25_shadow();
	this.instance_21.parent = this;
	this.instance_21.setTransform(121,220.1,1,1,0,0,0,104,67.8);
	this.instance_21.alpha = 0.398;
	this.instance_21._off = true;

	this.instance_22 = new lib.headphones_shadow();
	this.instance_22.parent = this;
	this.instance_22.setTransform(120.9,239.5,1,1,0,0,0,88.6,86.3);
	this.instance_22.alpha = 0.398;
	this.instance_22._off = true;

	this.instance_23 = new lib.joystick_shadow();
	this.instance_23.parent = this;
	this.instance_23.setTransform(119.6,239.5,1,1,0,0,0,94.8,65.3);
	this.instance_23.alpha = 0.398;
	this.instance_23._off = true;

	this.instance_24 = new lib.tshirt_shadow();
	this.instance_24.parent = this;
	this.instance_24.setTransform(120.7,248.9,1,1,0,0,0,96.6,102.9);
	this.instance_24.alpha = 0.398;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(222).to({_off:false},0).to({x:110,y:234},6).wait(18).to({x:121,y:223},4).to({_off:true},1).wait(461));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(287).to({_off:false},0).to({x:112,y:229.1},4).wait(18).to({x:121,y:220.1},4).to({_off:true},1).wait(398));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(342).to({_off:false},0).to({x:110.9,y:249.5},4).wait(19).to({x:119.9,y:240.5},4).to({_off:true},1).wait(342));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(393).to({_off:false},0).to({x:108.6,y:250.5},4).wait(17).to({x:119.6,y:239.5},4).to({_off:true},1).wait(293));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(444).to({_off:false},0).to({x:108.7,y:260.9},4).wait(19).to({x:120.7,y:248.9},4).to({_off:true},1).wait(240));

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("AgbRDQiYiXAAjYQAAjWCYiYQCYiYDWAAQDXAACYCYQCYCYABDWQgBDYiYCXQiYCZjXAAQjWAAiYiZg");
	var mask_1_graphics_124 = new cjs.Graphics().p("AgbRDQiYiXAAjYQAAjWCYiYQCYiYDWAAQDXAACYCYQCYCYABDWQgBDYiYCXQiYCZjXAAQjWAAiYiZg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AgeREQiZiYAAjYQAAjYCZiYQCYiZDYAAQDYAACZCZQCZCYAADYQAADYiZCYQiZCZjYAAQjYAAiYiZg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AgnRHQibiaAAjcQAAjbCbiaQCaibDbAAQDbAACbCbQCcCaAADbQAADcicCaQibCcjbAAQjbAAiaicg");
	var mask_1_graphics_127 = new cjs.Graphics().p("Ag3RMQifieAAjhQAAjgCfieQCeifDhAAQDgAACfCfQCfCeAADgQAADhifCeQifCfjgAAQjhAAieifg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AhNRTQikijAAjpQAAjoCkijQCkilDnAAQDoAAClClQCkCjAADoQAADpikCjQilCljoAAQjnAAikilg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AhpRdQisirAAjyQAAjyCsiqQCqisDyAAQDxAACrCsQCsCqAADyQAADyisCrQirCrjxAAQjyAAiqirg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AiNRoQi0izAAj/QAAj9C0izQCzi0D+AAQD+AACzC0QC0CzAAD9QAAD/i0CzQizC0j+AAQj+AAizi0g");
	var mask_1_graphics_131 = new cjs.Graphics().p("Ai3R1Qi+i9AAkNQAAkMC+i9QC9i+EMAAQEMAAC/C+QC+C9AAEMQAAENi+C9Qi/C/kMAAQkMAAi9i/g");
	var mask_1_graphics_132 = new cjs.Graphics().p("AjoSFQjKjJAAkeQAAkdDKjJQDKjJEcAAQEdAADKDJQDKDJAAEdQAAEejKDJQjKDKkdAAQkcAAjKjKg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AkgSXQjYjWAAkxQAAkwDYjXQDYjWEvAAQEwAADXDWQDYDXAAEwQAAExjYDWQjXDYkwAAQkvAAjYjYg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AlfSrQjmjlAAlHQAAlFDmjmQDnjmFFAAQFFAADnDmQDnDmAAFFQAAFHjnDlQjnDnlFAAQlFAAjnjng");
	var mask_1_graphics_135 = new cjs.Graphics().p("AmkTBQj3j2AAleQAAldD3j2QD4j3FcAAQFdAAD3D3QD4D2AAFdQAAFej4D2Qj3D4ldAAQlcAAj4j4g");
	var mask_1_graphics_136 = new cjs.Graphics().p("AnwTaQkKkJAAl4QAAl3EKkIQEKkKF2AAQF3AAEKEKQEKEIAAF3QAAF4kKEJQkKEKl3AAQl2AAkKkKg");
	var mask_1_graphics_137 = new cjs.Graphics().p("ApCT0QkekcAAmVQAAmTEekbQEekeGSAAQGTAAEeEeQEeEbAAGTQAAGVkeEcQkeEemTAAQmSAAkekeg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AqaURQk0kyAAmzQAAmxE0kxQEzkzGwAAQGyAAEzEzQEzExAAGxQAAGzkzEyQkzEzmyAAQmwAAkzkzg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AqKUZQkvkuAAmtQAAmsEvksQEwkvGqAAQGsAAEvEvQEvEsAAGsQAAGtkvEuQkvEvmsAAQmqAAkwkvg");
	var mask_1_graphics_140 = new cjs.Graphics().p("Ap5UhQkrkpAAmoQAAmmErkoQErkrGlAAQGmAAErErQErEoAAGmQAAGokrEpQkrErmmAAQmlAAkrkrg");
	var mask_1_graphics_141 = new cjs.Graphics().p("ApoUpQknklAAmiQAAmgEnkkQEnkoGfAAQGgAAEnEoQEnEkAAGgQAAGiknElQknEnmgAAQmfAAknkng");
	var mask_1_graphics_142 = new cjs.Graphics().p("ApXUxQkjkhAAmcQAAmaEjkhQEjkjGZAAQGaAAEjEjQEjEhAAGaQAAGckjEhQkjEjmaAAQmZAAkjkjg");
	var mask_1_graphics_143 = new cjs.Graphics().p("ApGU5QkfkdAAmWQAAmVEfkcQEekfGUAAQGVAAEeEfQEfEcAAGVQAAGWkfEdQkeEfmVAAQmUAAkekfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:85.9,y:124.4}).wait(62).to({graphics:mask_1_graphics_124,x:85.9,y:124.4}).wait(1).to({graphics:mask_1_graphics_125,x:86,y:124.5}).wait(1).to({graphics:mask_1_graphics_126,x:86.4,y:125.1}).wait(1).to({graphics:mask_1_graphics_127,x:87,y:125.9}).wait(1).to({graphics:mask_1_graphics_128,x:87.9,y:127.2}).wait(1).to({graphics:mask_1_graphics_129,x:89.1,y:128.8}).wait(1).to({graphics:mask_1_graphics_130,x:90.5,y:130.8}).wait(1).to({graphics:mask_1_graphics_131,x:92.3,y:133.2}).wait(1).to({graphics:mask_1_graphics_132,x:94.3,y:135.9}).wait(1).to({graphics:mask_1_graphics_133,x:96.6,y:139.1}).wait(1).to({graphics:mask_1_graphics_134,x:99.2,y:142.6}).wait(1).to({graphics:mask_1_graphics_135,x:102,y:146.5}).wait(1).to({graphics:mask_1_graphics_136,x:105.1,y:150.8}).wait(1).to({graphics:mask_1_graphics_137,x:108.5,y:155.4}).wait(1).to({graphics:mask_1_graphics_138,x:112.1,y:160.4}).wait(1).to({graphics:mask_1_graphics_139,x:111.4,y:160.8}).wait(1).to({graphics:mask_1_graphics_140,x:110.7,y:161.2}).wait(1).to({graphics:mask_1_graphics_141,x:110,y:161.6}).wait(1).to({graphics:mask_1_graphics_142,x:109.3,y:162}).wait(1).to({graphics:mask_1_graphics_143,x:108.6,y:162.4}).wait(1).to({graphics:null,x:0,y:0}).wait(568));

	// Layer_4
	this.instance_25 = new lib.gift_pack();
	this.instance_25.parent = this;
	this.instance_25.setTransform(119.9,309.3,0.581,0.581,-90,0,0,91,90.5);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(62).to({_off:false},0).wait(1).to({regX:90.9,regY:90.7,rotation:-77.6,x:120,y:293.8},0).wait(1).to({rotation:-66.1,y:279.3},0).wait(1).to({rotation:-55.4,x:119.9,y:266},0).wait(1).to({rotation:-45.7,y:253.9},0).wait(1).to({rotation:-37.1,y:243},0).wait(1).to({rotation:-29.5,y:233.5},0).wait(1).to({rotation:-22.9,y:225.1},0).wait(1).to({rotation:-17.3,x:119.8,y:218.1},0).wait(1).to({rotation:-12.6,y:212.2},0).wait(1).to({rotation:-8.7,y:207.3},0).wait(1).to({rotation:-5.7,y:203.5},0).wait(1).to({rotation:-3.4,y:200.6},0).wait(1).to({rotation:-1.7,y:198.5},0).wait(1).to({rotation:-0.6,y:197.1},0).wait(1).to({regX:91,regY:90.5,rotation:0,x:119.9,y:196.3},0).wait(48).to({regX:90.9,regY:90.7,scaleX:0.58,scaleY:0.58,x:119.8,y:196.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,y:196.7},0).wait(1).to({scaleX:0.61,scaleY:0.61,y:197.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,y:197.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:119.7,y:198.7},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:199.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:201},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:202.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:119.6,y:204},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:205.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:207.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:119.5,y:210.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:212.5},0).wait(1).to({regX:91,regY:90.5,scaleX:1.17,scaleY:1.17,x:119.6,y:214.9},0).to({_off:true},1).wait(573));

	// round_06
	this.round06 = new lib.round_06();
	this.round06.parent = this;
	this.round06.setTransform(119.9,196.9,0.082,0.082,0,0,0,30.6,30.6);
	this.round06._off = true;

	this.timeline.addTween(cjs.Tween.get(this.round06).wait(14).to({_off:false},0).wait(1).to({regX:30.4,regY:30.3,scaleX:0.18,scaleY:0.18,x:119.8,y:196.8},0).wait(1).to({scaleX:0.32,scaleY:0.32},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:119.7,y:196.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:196.6},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:119.6,y:196.5},0).wait(1).to({regY:30.4,scaleX:1.82,scaleY:1.82,x:119.9,y:196.9},0).to({scaleX:1.71,scaleY:1.71},3).wait(101).to({regY:30.3,scaleX:1.72,scaleY:1.72,x:119.8,y:196.8},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:119.9,y:197.1},0).wait(1).to({scaleX:1.79,scaleY:1.79,y:197.6},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:119.8,y:198.2},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:119.9,y:199.1},0).wait(1).to({scaleX:2.02,scaleY:2.02,x:119.8,y:200.1},0).wait(1).to({scaleX:2.14,scaleY:2.14,y:201.4},0).wait(1).to({scaleX:2.27,scaleY:2.27,y:202.9},0).wait(1).to({scaleX:2.42,scaleY:2.42,y:204.6},0).wait(1).to({scaleX:2.59,scaleY:2.59,y:206.4},0).wait(1).to({scaleX:2.78,scaleY:2.78,x:119.7,y:208.5},0).wait(1).to({scaleX:2.99,scaleY:2.99,y:210.8},0).wait(1).to({scaleX:3.21,scaleY:3.21,x:119.6,y:213.2},0).wait(1).to({regY:30.4,scaleX:3.45,scaleY:3.45,x:119.7,y:216.3},0).to({scaleX:3.22,scaleY:3.22,x:119.6,y:227.2},5).to({_off:true},1).wait(568));

	// Layer_3
	this.instance_26 = new lib.giftmoneyPack_shadow();
	this.instance_26.parent = this;
	this.instance_26.setTransform(119.7,196.9,0.555,0.555,0,0,0,93.5,93.5);
	this.instance_26.alpha = 0.398;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(67).to({_off:false},0).to({x:109.7,y:206.9},10).wait(48).to({regX:93.4,regY:93.4,scaleX:0.56,scaleY:0.56,x:109.6,y:207},0).wait(1).to({scaleX:0.57,scaleY:0.57,y:207.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:109.7,y:208.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:109.8,y:209.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:109.9,y:210.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:110.2,y:212.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:110.3,y:214.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:110.6,y:216.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:110.8,y:219},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:111.2,y:221.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:111.5,y:225.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:111.9,y:228.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:112.3,y:232.6},0).wait(1).to({regX:93.5,regY:92.3,scaleX:1.14,scaleY:1.14,x:112.8,y:236.8},0).to({regY:92.2,scaleX:1.07,scaleY:1.07,x:113.9,y:236.7},6).wait(38).to({regY:92.3,scaleX:0.99,scaleY:0.99,x:118.8,y:227.8},8).to({_off:true},1).wait(521));

	// round_05
	this.instance_27 = new lib.round_05();
	this.instance_27.parent = this;
	this.instance_27.setTransform(239.2,196.9,0.082,0.082,0,0,0,30.6,30.6);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(7).to({_off:false},0).wait(1).to({regX:30.3,regY:30.3,scaleX:0.18,scaleY:0.18,x:239.1,y:196.8},0).wait(1).to({scaleX:0.32,scaleY:0.32},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:239},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:238.9,y:196.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:196.6},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:238.8,y:196.5},0).wait(1).to({regX:30.4,regY:30.4,scaleX:1.82,scaleY:1.82,x:239.2,y:196.9},0).to({scaleX:1.71,scaleY:1.71},3).wait(108).to({regX:30.3,regY:30.3,scaleX:1.72,scaleY:1.72,x:239.5,y:196.8,alpha:0.996},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:241,y:197.1,alpha:0.983},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:243.7,y:197.5,alpha:0.961},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:247.6,y:198.1,alpha:0.929},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:252.9,y:198.9,alpha:0.885},0).wait(1).to({scaleX:2.01,scaleY:2.01,x:259.7,y:200,alpha:0.829},0).wait(1).to({scaleX:2.13,scaleY:2.13,x:268,y:201.3,alpha:0.76},0).wait(1).to({scaleX:2.27,scaleY:2.27,x:278,y:202.9,alpha:0.678},0).wait(1).to({scaleX:2.44,scaleY:2.44,x:289.5,y:204.8,alpha:0.583},0).wait(1).to({scaleX:2.63,scaleY:2.63,x:302.5,y:206.8,alpha:0.476},0).wait(1).to({scaleX:2.83,scaleY:2.83,x:316.5,y:209,alpha:0.359},0).wait(1).to({scaleX:3.04,scaleY:3.04,x:331.2,y:211.3,alpha:0.238},0).wait(1).to({scaleX:3.25,scaleY:3.25,x:346,y:213.7,alpha:0.116},0).wait(1).to({regX:30.4,regY:30.4,scaleX:3.45,scaleY:3.45,x:360.4,y:216.3,alpha:0},0).to({_off:true},1).wait(573));

	// round_04
	this.instance_28 = new lib.round_04();
	this.instance_28.parent = this;
	this.instance_28.setTransform(1,196.9,0.081,0.081,0,0,0,30.3,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({scaleX:0.18,scaleY:0.18},0).wait(1).to({scaleX:0.32,scaleY:0.32,y:196.8},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:196.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:1.1},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:1},0).wait(1).to({regX:30.2,regY:30.4,scaleX:1.82,scaleY:1.82},0).to({regX:30.3,scaleX:1.71,scaleY:1.71,x:1.1},3).wait(115).to({regY:30.3,scaleX:1.72,scaleY:1.72,x:0.6,y:196.8,alpha:0.996},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:-0.9,y:197.1,alpha:0.983},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-3.5,y:197.5,alpha:0.961},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:-7.5,y:198.1,alpha:0.929},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:-12.8,y:198.9,alpha:0.885},0).wait(1).to({scaleX:2.01,scaleY:2.01,x:-19.6,y:200,alpha:0.829},0).wait(1).to({scaleX:2.13,scaleY:2.13,x:-27.9,y:201.3,alpha:0.76},0).wait(1).to({scaleX:2.27,scaleY:2.27,x:-37.9,y:202.9,alpha:0.678},0).wait(1).to({scaleX:2.44,scaleY:2.44,x:-49.4,y:204.8,alpha:0.583},0).wait(1).to({scaleX:2.63,scaleY:2.63,x:-62.4,y:206.8,alpha:0.476},0).wait(1).to({scaleX:2.83,scaleY:2.83,x:-76.5,y:209,alpha:0.359},0).wait(1).to({scaleX:3.04,scaleY:3.04,x:-91.2,y:211.3,alpha:0.238},0).wait(1).to({scaleX:3.25,scaleY:3.25,x:-105.9,y:213.7,alpha:0.116},0).wait(1).to({regY:30.4,scaleX:3.45,scaleY:3.45,x:-120,y:216.3,alpha:0},0).to({_off:true},1).wait(573));

	// Layer_12 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_339 = new cjs.Graphics().p("AKVAWIRLhfIBMNlIxLBgg");
	var mask_2_graphics_340 = new cjs.Graphics().p("AH3AlIRLhfIBMNlIxLBgg");
	var mask_2_graphics_341 = new cjs.Graphics().p("AFZAzIRKhfIBMNlIxKBgg");
	var mask_2_graphics_342 = new cjs.Graphics().p("AC6BCIRLhfIBMNlIxLBgg");
	var mask_2_graphics_343 = new cjs.Graphics().p("AAcBRIRLhgIBMNlIxLBgg");
	var mask_2_graphics_344 = new cjs.Graphics().p("AiBBfIRKhfIBMNlIxKBgg");
	var mask_2_graphics_345 = new cjs.Graphics().p("AkfBuIRJhgIBMNlIxJBgg");
	var mask_2_graphics_346 = new cjs.Graphics().p("Am+B8IRKhgIBMNmIxKBgg");
	var mask_2_graphics_347 = new cjs.Graphics().p("ApKCLIRJhgIBMNlIxJBgg");
	var mask_2_graphics_348 = new cjs.Graphics().p("ApKCZIRJhgIBMNmIxJBgg");
	var mask_2_graphics_349 = new cjs.Graphics().p("ApKCoIRJhgIBMNlIxJBhg");
	var mask_2_graphics_350 = new cjs.Graphics().p("ApKC2IRJhgIBMNmIxJBgg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(339).to({graphics:mask_2_graphics_339,x:183.6,y:89.2}).wait(1).to({graphics:mask_2_graphics_340,x:167.8,y:90.7}).wait(1).to({graphics:mask_2_graphics_341,x:151.9,y:92.1}).wait(1).to({graphics:mask_2_graphics_342,x:136.1,y:93.6}).wait(1).to({graphics:mask_2_graphics_343,x:120.3,y:95}).wait(1).to({graphics:mask_2_graphics_344,x:104.5,y:96.5}).wait(1).to({graphics:mask_2_graphics_345,x:88.6,y:97.9}).wait(1).to({graphics:mask_2_graphics_346,x:72.8,y:99.4}).wait(1).to({graphics:mask_2_graphics_347,x:55.2,y:100.8}).wait(1).to({graphics:mask_2_graphics_348,x:23.6,y:102.3}).wait(1).to({graphics:mask_2_graphics_349,x:-8.1,y:103.8}).wait(1).to({graphics:mask_2_graphics_350,x:-39.7,y:105.2}).wait(1).to({graphics:null,x:0,y:0}).wait(361));

	// Layer_8
	this.instance_29 = new lib.icatcher_bg_bottom();
	this.instance_29.parent = this;
	this.instance_29.setTransform(152.1,141.1,1,1,-5,0,0,138.6,42.3);
	this.instance_29._off = true;

	var maskedShapeInstanceList = [this.instance_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(339).to({_off:false},0).to({_off:true},12).wait(361));

	// Layer 1
	this.instance_30 = new lib.bg();
	this.instance_30.parent = this;
	this.instance_30.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({_off:true},710).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,241.5,400);


// stage content:
(lib._240x400_mega_gender = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A31").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fgAylfGMAlLAAAMAAAg+LMglLAAAg");
	this.shape.setTransform(1,1,1,1,0,0,0,-119,-199);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.allmovie = new lib.all_movie();
	this.allmovie.parent = this;
	this.allmovie.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.allmovie).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.4,200,347.6,400);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_25.jpg", id:"_25"},
		{src:"images/giftpack.jpg", id:"giftpack"},
		{src:"images/headphones.jpg", id:"headphones"},
		{src:"images/joystick.jpg", id:"joystick"},
		{src:"images/money.jpg", id:"money"},
		{src:"images/moneypack.jpg", id:"moneypack"},
		{src:"images/tshirt.jpg", id:"tshirt"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;