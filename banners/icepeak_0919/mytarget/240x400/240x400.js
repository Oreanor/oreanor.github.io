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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,518);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,164);// helper functions:

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


(lib.win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAJBvIAQiEIg1CEIg/AAIAcjdIA3AAIgQB7IA0h7IBAAAIgcDdg");
	this.shape.setTransform(7.2,57,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhvCuIADgeIgYAAIAGg3IAYAAIAEgmIgYAAIAHhAIAZAAIASigIB7AAQAaAAAQAJQASAKAJAPQAJAPADAVQADATgDAYQgGA3gdAbQgeAdg3AAIgYAAIgFAmIBIAAIgGA3IhIAAIgDAegAgFgNIAOAAQARAAAKgNQALgNACgVQACgVgHgNQgHgOgRAAIgPAAg");
	this.shape_1.setTransform(84.2,85.8,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AhJBeIAEglIAMABQAJAAAFgGQAEgFAEgIIgjiFIA3AAIAKBSIABAAIAYhSIA1AAIhICfQgEAKgIAHQgGAGgLAFQgKACgPAAg");
	this.shape_2.setTransform(90.8,70.1,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AAiBfIAQiMIgBAAIgqCMIgiAAIgLiMIAAAAIgQCMIguAAIAVi9IBHAAIAHBwIAAAAIAghwIBGAAIgVC9g");
	this.shape_3.setTransform(84.5,70.1,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AAiBfIAQiMIgBAAIgqCMIgiAAIgLiMIAAAAIgQCMIguAAIAVi9IBHAAIAHBwIAAAAIAghwIBGAAIgVC9g");
	this.shape_4.setTransform(77.4,70.1,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AhIBeIAEglIAKABQALAAAFgGQAFgHADgGIgjiFIA2AAIAKBSIABAAIAYhSIA1AAIg7CGIgMAZQgFAKgHAHQgHAGgLAFQgLACgOAAg");
	this.shape_5.setTransform(71.8,70.1,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgpBdQgNgGgGgLQgGgMgBgTQAAgQADgdQADgcAFgRQAFgSAKgMQAIgMAPgFQANgFASAAQARAAALAFQALADAGAIQAHAJACAKQACALgCAOIgBAMIgwAAIACgLQABgRgCgFQgDgGgHAAQgFAAgEADQgCAEgDAHIgMBSIAAAUQABAHADADQAEADAFAAQAEAAACgCQAEgCACgFQACgFABgKQACgGACgQIAvAAIgBAOQgCATgHAOQgHAMgKAIQgKAHgLACQgLADgLAAQgUAAgNgFg");
	this.shape_6.setTransform(66.5,70.1,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AAZBfIgCghIgmAAIgJAhIg0AAIBEi9IA8AAIAYC9gAgFAYIAaAAIgEhPIAAAAg");
	this.shape_7.setTransform(58.6,70.1,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAFBfIAJhOIgeAAIgIBOIgyAAIAVi9IAyAAIgIBGIAdAAIAIhGIAxAAIgWC9g");
	this.shape_8.setTransform(53.7,70.1,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AhIBeIADglIALABQALAAAEgGQAFgFADgIIgjiFIA3AAIAKBSIABAAIAYhSIA1AAIhICfQgEAKgIAHQgHAGgKAFQgKACgPAAg");
	this.shape_9.setTransform(46.5,70.1,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AAjBxIAEgkIhNAAIgFAkIgtAAIAJhNIANAAIAMgWQAEgJAEgOQAEgOACgNIAKhMIB3AAIgRCUIARAAIgJBNgAAJg3QgCAOgDAOIgMAvIgHAQIAmAAIAMhsIgYAAg");
	this.shape_10.setTransform(40.4,70.7,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AAyBfIgQhEIgNAWIgFAuIgvAAIAGguIgJgWIgfBEIg2AAIA8huIgghPIAzAAIAXBJIAIhJIAuAAIgIBJIAnhJIA0AAIgyBPIAiBug");
	this.shape_11.setTransform(33.8,70.1,0.353,0.353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AhCBfIAWi9IBvAAIgFApIg+AAIgDAgIA6AAIgFAmIg5AAIgFAlIBAAAIgEApg");
	this.shape_12.setTransform(27.8,70.1,0.353,0.353);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AAjBxIAEgkIhOAAIgEAkIgtAAIAJhNIANAAQAHgMAEgKQAGgLADgMQAEgOACgNIAKhMIB3AAIgRCUIAQAAIgIBNgAAEgbIgFAaQgDAKgEALIgIAQIAnAAIAMhsIgZAAg");
	this.shape_13.setTransform(22.1,70.7,0.353,0.353);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgpBdQgNgGgGgLQgIgNAAgSQgBgSACgbQADgXAGgVQAFgSAKgNQAKgMAMgFQAPgFARAAQATAAAMAFQAMAFAHAMQAHAMABATQABASgCAaQgEAbgGASQgEATgKAMQgJALgOAGQgOAFgRAAQgSAAgNgFgAgBg9QgEAEgCAHQgDAHgCANIgHA+IAAAUQABAHADADQADADAGAAQAFAAADgDQADgCADgIIAFgUIAHg+QABgNgBgHQgBgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_14.setTransform(16.9,70.1,0.353,0.353);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AhRDBQgZgJgNgWQgOgXgEgnQgDgnAGg8QAHg7ANgnQAMgnATgXQATgXAbgJQAZgJAjAAQAjAAAYAJQAYAJAOAXQANAWAEAoQAEAngHA7QgGA8gNAnQgNAngTAXQgTAWgaAJQgaAIgiAAQgjAAgYgIgAgJh4QgIAOgGAqIgOCCQgFApAFAQQAGAPAQAAQAPAAAJgPQAJgOAFgrIAPiCQAEgqgFgOQgFgPgRAAQgPAAgJAPg");
	this.shape_15.setTransform(70.3,85.2,0.353,0.353);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AhRDBQgYgJgOgWQgOgXgEgnQgDgkAHg/QAGg6ANgoQANgnATgXQATgXAagJQAZgJAjAAQAkAAAXAJQAXAIAPAYQAOAYAEAmQAEAngHA7QgIBAgMAjQgMAngTAXQgUAXgaAIQgZAIgjAAQgjAAgYgIgAgIh4QgKAQgEAoIgPCCQgFAqAGAPQAGAPAQAAQAPAAAJgPQAJgOAEgrIAPiCQAFgqgGgOQgFgPgQAAQgQAAgIAPg");
	this.shape_16.setTransform(60.1,85.2,0.353,0.353);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AhRDBQgYgIgOgXQgOgYgEgmQgEgoAIg7QAHg+AMgkQAMgnATgXQAUgYAagIQAZgJAjAAQAkAAAXAJQAXAIAPAYQAOAYAEAmQADAogHA6QgGA7gNAoQgMAngTAXQgUAXgaAIQgZAIgjAAQgjAAgYgIgAgJh4QgJAPgEApIgPCCQgFArAGAOQAFAPAQAAQAQAAAJgPQAJgQAEgpIAPiCQAFgpgGgPQgFgPgQAAQgQAAgJAPg");
	this.shape_17.setTransform(49.8,85.2,0.353,0.353);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AhRDBQgZgJgNgWQgOgXgEgnQgDgnAGg8QAHg7ANgnQALglAUgZQATgXAbgJQAZgJAjAAQAjAAAYAJQAYAJAOAXQANAWAEAoQAEAngHA7QgGA8gNAnQgMAngUAXQgTAXgaAIQgaAIgiAAQgjAAgYgIgAgJh4QgJAPgEApIgPCCQgFApAFAQQAGAPAQAAQAPAAAJgPQAJgOAFgrIAPiCQAFgogGgQQgGgPgQAAQgPAAgJAPg");
	this.shape_18.setTransform(34.5,85.2,0.353,0.353);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("Ah4DCQAIgjAOgrQAOgpASglQATgpAWgiQAVgiAdglIieAAIAKhVIEBAAIgJBOQgYAhgWAmQgXAngRAmQgTApgNApQgNAugGAhg");
	this.shape_19.setTransform(24.7,85.3,0.353,0.353);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_20.setTransform(55.5,19.6,0.353,0.353);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhFBGQgegdAAgpQAAgoAegdQAdgeAoAAQApAAAdAeQAeAdAAAoQAAApgeAdQgdAegpAAQgoAAgdgegAgtgtQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATg");
	this.shape_21.setTransform(51.9,23.2,0.353,0.353);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhPDBQgagBgVgIQgUgIgOgPQgPgOgIgUQgHgVgCgaIgBhQIABhPQACgaAHgVQAIgUAPgOQAOgPAUgIQAVgHAagCIBPgBIBQABQAaACAVAHQAUAIAOAPQAPAOAIAUQAIAVABAaIABBPIgBBQQgBAagIAVQgIAUgPAOQgOAPgUAIQgVAIgaABIhQABIhPgBgAhNidQgWABgOAGQgMAEgLAKQgKALgEAMQgGAPgBAVIgBBNIABBOQABAWAGAOQAEAMAKALQALAKAMAEQAOAGAWABIBNABIBOgBQAVgBAPgGQAMgEALgKQAKgLAEgMQAGgOABgWIABhOIgBhNQgBgVgGgPQgEgMgKgLQgLgKgMgEQgPgGgVgBIhOgBIhNABg");
	this.shape_22.setTransform(51.9,23.2,0.353,0.353);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AAOERIAkj7IhsD7Ih6AAIA9mkIBqAAIgiDrIBojrIB8AAIg9GkgAgdjKQgUgZAEgtIAyAAQAAApAmAAQAoAAALgpIA0AAQgIAsgcAaQgcAaguAAQguAAgTgag");
	this.shape_23.setTransform(93.7,52.1,0.353,0.353);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AA3DSIgBhKIhXAAIgWBKIh0AAICimjICLAAIAqGjgAgIA2IA8AAIgEixIgBAAg");
	this.shape_24.setTransform(80.6,54.3,0.353,0.353);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AilDSIA9mjIClAAQAgAAAVAKQAVAJANASQANASADAXQAEAZgEAaQgJBCgpAfQgnAhhFAAIglAAIgXCggAgUgcIAUAAQAVAAAMgMQANgNAEgaQAHg0gqAAIgUAAg");
	this.shape_25.setTransform(70.1,54.3,0.353,0.353);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AiUDSIA8mjIDtAAIgNBZIh/AAIgvFKg");
	this.shape_26.setTransform(60.4,54.3,0.353,0.353);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AANDSIAlj6IhsD6Ih6AAIA9mjIBqAAIgiDrIBpjrIB7AAIg9Gjg");
	this.shape_27.setTransform(49,54.3,0.353,0.353);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("ABIDSIA8mjIBuAAIg9GjgAjyDSIA9mjIBuAAIgVCWIArAAQBHAAAcAjQAbAigIA/QgGAngRAbQgOAagYARQgWAPgYAHQgdAGgXAAgAh4CDIAOAAQAfAAANgOQAOgNAEgeQAFghgNgLQgMgMgZAAIgPAAg");
	this.shape_28.setTransform(34.4,54.3,0.353,0.353);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1B").s().p("AikDSIA9mjICmAAQA7AAAYAcQAYAdgHAvQgCARgGAPQgGAPgKAOQgJAMgPAJQgOAJgSAEIAAABQATABAPAJQANAJAIANQAIAOACAQQACAOgDATQgDAbgLAXQgKAWgSARQgSARgZAJQgZAJgjAAgAgqCDIAfAAQAOAAAOgMQANgNAEgbQAEgYgKgNQgKgNgPAAIgeAAgAgQgtIAZAAQARAAALgMQALgNACgRQADgRgHgOQgHgNgRAAIgaAAg");
	this.shape_29.setTransform(19.7,54.3,0.353,0.353);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1B").s().p("AhQBtIAfjZIA4AAIgKBOIAVAAQAmAAAOASQAOASgEAgQgDATgJAPQgHANgNAJQgKAHgOAEQgQAEgKAAgAgRBEIAHAAQAOAAAIgHQAHgIACgPQACgRgGgGQgHgGgMAAIgHAAg");
	this.shape_30.setTransform(82.6,38.2,0.353,0.353);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1B").s().p("Ag0BrQgOgFgHgOQgGgNAAgWQAAgZAEgcQAEgcAHgXQAIgWAKgNQAMgNAPgHQARgFAUAAQASAAAOAEQAOAGAGAJQAIAJABAMQADANgDAPIgCAOIg3AAIACgMQADgTgDgGQgDgHgIAAQgHAAgEADQgDADgDAJQgEAJgCAOIgLBIQgBAQAAAHQABAIADAEQAEADAGAAQAGAAACgDQADgCAEgGIAFgRIAEgZIA3AAIgCAQQgDAWgJAPQgIAPgLAJQgLAIgOACQgNADgNABQgYgBgPgFg");
	this.shape_31.setTransform(76.9,38.2,0.353,0.353);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1B").s().p("AAHBtIATiBIg3CBIhAAAIAgjZIA3AAIgRB5IA1h5IBAAAIgfDZg");
	this.shape_32.setTransform(70.8,38.2,0.353,0.353);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AiEBtIAfjZIA5AAIgZCqIAhAAIAYiqIA4AAIgYCqIAgAAIAYiqIA5AAIgfDZg");
	this.shape_33.setTransform(62.9,38.2,0.353,0.353);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1B").s().p("AAHBtIATiBIg3CBIhAAAIAgjZIA3AAIgSB5IA2h5IA/AAIgeDZg");
	this.shape_34.setTransform(55.1,38.2,0.353,0.353);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1B").s().p("AACBtIAZirIgiAAIgZCrIg5AAIAfjZICUAAIgfDZg");
	this.shape_35.setTransform(48.8,38.2,0.353,0.353);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1B").s().p("AAkCBIAGgpIhaAAIgGApIg0AAIANhYIAPAAQAJgOAFgLIALgbIAIgeIAOhXICKAAIgZCpIATAAIgNBYgAAMg/QgCAPgEAQQgFAUgCAKQgFAPgFAJIgIATIAsAAIASh8IgcAAg");
	this.shape_36.setTransform(41.7,39,0.353,0.353);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AgzBrQgOgFgIgOQgHgPgBgUQgBgXAFgeQAEgcAHgWQAIgWALgOQAKgNARgGQARgHATABQAVgBAPAHQAPAGAGANQAHANACAXQAAATgEAfQgEAegHAXQgIAWgLANQgLAOgQAFQgPAFgVABQgWgBgOgFgAAAhGQgDADgEAJQgDAKgCANIgLBIIgBAXQABAIADAEQAEADAGAAQAHAAADgDQAEgEADgIQAEgIACgPIALhIQABgPAAgIQgBgJgEgDQgDgDgGAAQgHAAgEADg");
	this.shape_37.setTransform(35.7,38.2,0.353,0.353);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1D1B").s().p("AACBtIAYirIgiAAIgYCrIg5AAIAfjZICUAAIgfDZg");
	this.shape_38.setTransform(29.6,38.2,0.353,0.353);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgyBTQgMgIgKgJQgJgIgEgKQgDgLACgJQABgKAIgOIAEgFIApAZIgDAEQgGAKABAHQABAHAGADQAHAEAGgCQAGgCAFgHQAEgIgBgIQgDgIgFgHIgLgRQgHgHgEgLQgEgLABgLQAAgLAKgPQAPgYAUgGQAVgEAbAQQAbARAGAUQAEAVgQAZIgngZIACgDQAFgIAAgHQAAgGgGgEQgGgFgHADQgFACgEAGQgFAIACAIQADAIAFAIIAMAQQAHAJAEAKQAEAKgBANQAAALgJAQQgRAbgVACIgFAAQgUAAgYgPg");
	this.shape_39.setTransform(77,14.6,0.353,0.353);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXBqQgNgEgNgGQgNgFgLgJQgKgIgEgKQgEgMACgNQACgOAJgSIA1hxIAsAVIg6B8QgGANACAGQABAFAHAEQAFADAHgDQAGgDAFgMIA6h8IAtAVIg2BxQgIASgKAKQgKALgJADQgHADgHAAIgJgBg");
	this.shape_40.setTransform(72.6,11.7,0.353,0.353);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgFBfQgBgDABgGIAKgnIADgMQABgHgBgCQAAgEgDgCIgGgEIgNgEIgXBJIgvgQIA7i0IBJAYQAMAEAJAHQAIAHAFAIQADAIAAAKQgBAMgDAIQgFARgLAJQgLAKgSgDIAAAAQARAIADALQADANgGASIgLAlIAAAFIABADIACAFIgBACgAgDgTIAIADQAKAEAHgFQAGgEAEgKQAEgLgDgHQgDgHgLgDIgJgCg");
	this.shape_41.setTransform(67,10,0.353,0.353);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AABBhIgPhHIgOAOIgJAxIgxgJIAki7IAxAKIgOBIIABAAIAxhBIA0AKIg/BJIAgBzg");
	this.shape_42.setTransform(62,8.6,0.353,0.353);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAYBgIgCgiIgngDIgIAhIgzgEIA7i7IA9AFIAhDBgAgJAWIAbACIgIhRIAAAAg");
	this.shape_43.setTransform(56.2,7.9,0.353,0.353);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag8hcIBvgFIACApIg/ADIACAgIA6gDIACAnIg6ADIACAmIBAgDIABAoIhxAFg");
	this.shape_44.setTransform(51.4,7.8,0.353,0.353);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhEhXIBIgMQANgCAMADQALADAIAHQAJAHAEAJQAEAJADAOQAEAegNAQQgOARgeAEIgQADIAKBIIgwAIgAgFg9IgJACIAHAuIAJgCQAJgBAEgHQAEgFgCgNQgDgUgOAAIgFAAg");
	this.shape_45.setTransform(46,8.4,0.353,0.353);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhQhMIBsgeIALAnIg9ARIAKAgIA3gQIALAkIg5AQIAKAlIA/gSIALAoIhuAeg");
	this.shape_46.setTransform(41.4,9.3,0.353,0.353);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVBbQgMgIgJgQQgIgPgMgbQgLgbgDgQQgEgSADgPQADgOAKgJQAMgLAQgGQAPgGANgBQAMAAAKAEQAJAFAIAJQAHAKAFAMIAFALIgtASIgDgKQgHgQgEgDQgFgFgHADQgFACgCAEQgCADABAJIARAwIAVAwQAEAGAFABQAEACAFgCQADgBADgEQACgEgBgFIgDgOIgIgVIAtgRIAFAMQAIATAAANQgBAQgFAIQgFAKgKAHQgIAGgNAFQgVAIgMAAIgCAAQgLAAgMgIg");
	this.shape_47.setTransform(36.5,11,0.353,0.353);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhAhJIAsgXIBVCqIgsAXg");
	this.shape_48.setTransform(32.9,12.6,0.353,0.353);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXBjQgSgEgRgKQgQgMgLgQQgMgSgDgTQgEgTAEgSQADgSALgRQAMgRAQgLQAPgKAUgGQASgFAQABQARABAPAIQAPAIAKAQQAKAPABAOQACAOgDAOQgDAMgHALQgHALgKAGQgEADgGAAQgFAAgEgFIgBABQAAAGgFAIQgEAGgIAFQgGAFgIABQgJACgHgCQgJgDgHgEQgGgFgHgJQgHgMgCgJQgDgLABgLQABgMAGgJQAFgKAKgGQAJgGAJgBQAIgCAKAEIgCgKIATgNIAcBAQADAFAEgCQADgCACgFQACgFAAgFQAAgFgCgJQgCgIgHgJQgJgNgJgGQgLgHgMAAQgKgCgOAEQgNAEgNAIQgOAKgIAMQgIAMgDAOQgDAMAEAPQACAMAKAQQAKAOAMAJQAMAIAPACQANADAOgEQAPgEAPgJQANgKAIgJQAJgMADgLIAZgQQgBAYgMAUQgLATgcATQgSAMgTADQgJACgJAAQgJAAgKgCgAgOgTQgFAEgCAEQgDAEgBAGIABAJIAEAJQAFAIAHACQAHACAHgFQAFgDADgFIAEgKQABgFgBgEQgBgFgDgFQgGgIgHgBIgDgBQgGAAgGAEg");
	this.shape_49.setTransform(28.5,15.1,0.353,0.353);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EC6921").s().p("ApKVtQkOhzjRjQQjRjRhykOQh2kYAAkzQAAkyB2kYQBykODRjRQDRjREOhyQEYh3EyAAQEzAAEYB3QEPByDQDRQDRDQByEPQB3EYAAEyQAAEzh3EYQhyEOjRDRQjQDQkPBzQkYB2kzAAQkyAAkYh2g");
	this.shape_50.setTransform(53.2,53.2,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.win, new cjs.Rectangle(0,0,106.5,106.4), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQC7IAKhRIBWAAIgKBRgAhBBRIACgPQAEgdAHgSQAHgTAPgOIAigiQALgLAEgMQAFgPAAgHQACgOgEgKQgFgJgLAAQgGAAgFACQgEADgFAGQgEAIgDALQgDAMgDAWIhXAAQAFgjAKgXQALgXAQgPQAQgPAXgGQAZgHAZAAQA4AAAXAcQAXAbgGAvQgDAWgHASQgIASgPAPIgsApQgIAJgEAMQgEAMgCASg");
	this.shape.setTransform(146.1,29.9,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAvC3IgChAIhLAAIgSBAIhkAAICHltIB4AAIArFtgAgKAvIA1AAIgGiaIgBAAg");
	this.shape_1.setTransform(135.3,30.1,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaC3IAlkcIhHAAIAKhRIDvAAIgKBRIhJAAIglEcg");
	this.shape_2.setTransform(127.5,30.1,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNC3IAvltICPAAQAbAAAUAIQATAJALAPQALAPAEAVQADAXgDAWQgHA6gjAaQgiAdg7AAIghAAIgSCLgAgSgYIASAAQARAAALgLQALgLADgXQAGgtgmAAIgRAAg");
	this.shape_3.setTransform(117.7,30.1,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhUC0QgYgKgNgXQgMgWgDgkQgBgmAGgyQAHgyALglQALgjATgYQATgWAagLQAagLAkAAQAmAAAXALQAYALANAWQAMAYACAjQACAlgGAyQgHA1gMAjQgLAjgSAXQgTAXgaAKQgcAKgjAAQgkAAgYgKgAgBh2QgHAGgFAOQgFANgFAaQgEAXgFAlIgHA9QgCAXACAQQABAOAGAGQAGAGALAAQAKAAAHgGQAIgHAEgNQAGgSADgVQAFgYAEglIAHg8QACgYgBgPQgCgOgFgGQgHgGgKAAQgLAAgGAGg");
	this.shape_4.setTransform(107.8,30,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGC3IAlkfIg6AAIglEfIhgAAIAvltID6AAIgvFtg");
	this.shape_5.setTransform(97.5,30.1,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhVC0QgYgKgMgXQgLgWgBgkQgBgkAHg0QAHg0ALgkQALgkASgXQATgWAagLQAcgKAjAAQAgAAAWAJQAXAIALAPQANAQADAUQAEAWgEAaIgDAYIhdAAIADgVQAEgggFgLQgEgLgOAAQgLAAgHAGQgHAGgFAOQgEANgFAaIgJA8IgHA9QgCAaABANQACAOAGAGQAFAGALAAQAJAAAFgFQAHgEAEgKQAFgNADgPQAEgTADgYIBdAAIgEAbQgFAogNAXQgNAYgUAPQgTAOgWAFQgWAFgXAAQgnAAgagKg");
	this.shape_6.setTransform(87.4,30,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABBDaIAJhGIiYAAIgJBGIhYAAIASiUIAaAAQAOgXAJgVQAKgWAIgXQAHgWAGgdIAUiTIDpAAIglEfIAhAAIgTCUgAAShrQgCATgHAiQgHAggFASIgPAqQgIATgGANIBLAAIAcjTIgxAAg");
	this.shape_7.setTransform(71.1,31.3,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOC3IAcjaIhaDaIhqAAIAwltIBdAAIgbDMIBYjMIBrAAIgvFtg");
	this.shape_8.setTransform(60.6,30.1,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiMC3IAvltICQAAQA1AAAUAZQAWAYgGAqQgBANgGAPQgFANgIAMQgIAKgMAIQgMAIgQADIAAABQASACALAHQAMAHAHAMQAHANACANQACAOgCAPQgDAYgJAUQgJAUgPAOQgPAOgWAIQgWAIgeAAgAgjByIAbAAQANAAALgLQAMgLADgXQADgVgJgMQgJgLgOAAIgaAAgAgPgnIAWAAQAPAAAJgLQAJgKACgQQADgPgHgLQgGgMgPAAIgXAAg");
	this.shape_9.setTransform(49.8,30.1,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPDuIAcjbIhaDbIhrAAIAvluIBdAAIgaDNIBXjNIBrAAIgvFugAgdiwQgSgWADgnIAsAAQAAAkAiAAQAiAAAKgkIAtAAQgHAmgYAXQgYAWgoAAQgnAAgSgWg");
	this.shape_10.setTransform(189.7,8.4,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPC3IAcjaIhaDaIhrAAIAwltIBdAAIgbDMIBYjMIBrAAIgvFtg");
	this.shape_11.setTransform(178.8,10.3,0.353,0.353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOC3IgniAIgYAfIgNBhIhgAAIAwltIBgAAIgSCMIABAAIBYiMIBmAAIhyCgIBODNg");
	this.shape_12.setTransform(168.7,10.3,0.353,0.353);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhUC0QgZgLgMgWQgLgXgBgjQAAgkAGg0QAHgyALgmQALglATgWQARgWAcgLQAbgKAjAAQAgAAAXAJQAVAIAMAPQAMAOAEAWQAEAVgDAbIgDAXIhdAAIACgUQAFgegFgNQgFgLgOAAQgLAAgHAGQgGAFgFAPQgGAQgEAWQgEAZgFAkIgHA9QgCAXACAQQABAOAGAGQAGAGALAAQAIAAAGgFQAGgEAEgKQAEgKAEgSIAHgrIBdAAIgEAbQgEAmgOAZQgNAYgTAPQgTAOgXAFQgZAFgUAAQgoAAgYgKg");
	this.shape_13.setTransform(158.4,10.3,0.353,0.353);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAPDuIAcjbIhaDbIhrAAIAwluIBcAAIgaDNIBXjNIBsAAIgwFugAgdiwQgSgXADgmIAsAAQAAAkAiAAQAjAAAJgkIAtAAQgHAmgYAXQgYAWgoAAQgnAAgSgWg");
	this.shape_14.setTransform(148,8.4,0.353,0.353);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPC3IAcjaIhaDaIhrAAIAvltIBdAAIgaDMIBXjMIBsAAIgwFtg");
	this.shape_15.setTransform(137.2,10.3,0.353,0.353);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAGC3IAlkfIg6AAIglEfIhgAAIAvltID6AAIgvFtg");
	this.shape_16.setTransform(126.5,10.3,0.353,0.353);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA/C3IAjkQIgBAAIhWEQIhEAAIgQkQIgBAAIgkEQIhZAAIAvltICJAAIALDYIABAAIBCjYICJAAIgvFtg");
	this.shape_17.setTransform(114.4,10.3,0.353,0.353);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPC3IAcjaIhaDaIhrAAIAvltIBdAAIgaDMIBXjMIBsAAIgwFtg");
	this.shape_18.setTransform(102.1,10.3,0.353,0.353);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AieC3IgJgCIAKhMIAMABQAGAAAKgCQAIgBAGgJQAGgJAGgSQAGgUAFgfIAejIIDmAAIgvFuIhhAAIAmkiIgtAAQgKBUgKA9QgLA3gQAiQgQAigVAMQgYANgjAAg");
	this.shape_19.setTransform(90.7,10.4,0.353,0.353);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhUC0QgZgLgLgWQgNgXgDgjQgBgmAHgyQAFgzANgkQALgkASgXQASgXAbgKQAbgLAjAAQAmAAAXALQAZALAMAWQAMAXADAkQABAmgHAxQgHA0gKAkQgLAigTAYQgSAWgbALQgcAKgiAAQglAAgYgKgAgBh2QgGAFgGAPQgGAQgDAWQgFAZgEAkIgHA9QgDAXACAQQACAOAFAGQAGAGALAAQALAAAGgGQAHgFAFgPQAGgRAEgWQAEgYAEglIAIg9QABgXgBgPQgCgPgFgFQgGgGgLAAQgLAAgGAGg");
	this.shape_20.setTransform(80.6,10.3,0.353,0.353);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPDuIAcjbIhaDbIhqAAIAuluIBdAAIgbDNIBYjNIBrAAIgvFugAgdiwQgRgXACgmIAsAAQABAkAhAAQAjAAAJgkIAtAAQgIAngXAWQgYAWgoAAQgoAAgRgWg");
	this.shape_21.setTransform(65.3,8.4,0.353,0.353);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABBC3IAvltIBhAAIgwFtgAjQC3IAwltIBgAAIgRCDIAmAAQA9AAAZAeQAZAegHA2QgFAkgNAWQgPAYgSANQgSAOgXAFQgWAGgWAAgAhnByIANAAQAbAAALgMQAMgLADgbQAEgcgLgKQgNgKgVAAIgMAAg");
	this.shape_22.setTransform(52.6,10.3,0.353,0.353);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiMC3IAvltICQAAQA0AAAVAYQAVAZgFAqQgCANgFAPQgFAOgJAKQgJAMgLAHQgLAIgRADIAAABQATACALAHQAMAIAHALQAHANABANQACAOgBAPQgDAXgJAVQgKAVgOANQgPAOgWAIQgXAIgdAAgAgkByIAbAAQANAAAMgLQALgLADgXQADgVgJgMQgJgLgNAAIgaAAgAgQgnIAXAAQAPAAAJgLQAJgMACgOQACgPgGgLQgHgMgPAAIgWAAg");
	this.shape_23.setTransform(39.8,10.3,0.353,0.353);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhUC0QgZgLgMgWQgMgXgCgjQgCgmAGgyQAHgzALgkQAMgkASgXQASgXAcgKQAagLAkAAQAlAAAXALQAZALALAWQANAXACAkQACAmgHAxQgFAwgNAoQgKAigTAYQgSAWgbALQgbAKgkAAQgkAAgYgKgAgBh2QgGAFgGAPQgGAQgEAWQgEAZgFAkIgHA9QgCAXACAQQABAOAGAGQAGAGALAAQAKAAAHgGQAGgFAGgPQAGgRADgWQAFgYAEglIAHg9QACgXgBgPQgCgPgFgFQgGgGgKAAQgMAAgGAGg");
	this.shape_24.setTransform(29.7,10.3,0.353,0.353);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAGC3IATiXIg6AAIgTCXIhgAAIAvltIBgAAIgRCGIA6AAIARiGIBgAAIgvFtg");
	this.shape_25.setTransform(19.4,10.3,0.353,0.353);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiFAlIAKhKIEBAAIgJBKg");
	this.shape_26.setTransform(4.7,11.5,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0,0,195.1,39), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AinDyIA+njIERAAIgNBnIiTAAIgwF8g");
	this.shape.setTransform(143.7,13.6,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIDyIAajHIhNAAIgaDHIh/AAIA+njICAAAIgXCyIBMAAIAXiyIB/AAIg+Hjg");
	this.shape_1.setTransform(130.8,13.6,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATDyIAlkgIh3EgIiNAAIA+njIB8AAIgjEPIB0kPICOAAIg/Hjg");
	this.shape_2.setTransform(116.7,13.6,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai6DyIA/njIC/AAQBFAAAbAhQAcAggGA4QgDAUgHARQgGARgMAPQgLAPgPAKQgPAJgWAFIAAACQAXABAQAKQAQALAJAPQAJARACASQADARgCAUQgFAigLAYQgLAagUATQgUATgeALQgdAKgoAAgAgvCXIAkAAQARAAAPgOQAQgOADgfQAEgdgMgPQgLgPgSAAIgjAAgAgVgzIAeAAQAUAAAMgPQANgPACgTQADgUgJgPQgIgPgUAAIgeAAg");
	this.shape_3.setTransform(102.4,13.6,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATE6IAmkhIh4EhIiNAAIA/njIB6AAIgjEPIB0kPICPAAIg/HjgAgnjpQgWgdADgzIA6AAQAAAvAtAAQAtAAANgvIA7AAQgKAzgeAdQggAeg1AAQg1AAgXgeg");
	this.shape_4.setTransform(88.5,11.1,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA/DyIgDhUIhkAAIgYBUIiFAAIC0njICeAAIA5HjgAgNA/IBHAAIgJjNIgBAAg");
	this.shape_5.setTransform(73.6,13.6,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABVEhIANhdIjKAAIgMBdIh0AAIAZjEIAhAAQASgdANgdQAOgfAJgeQAKghAHgiQAGgiAGgrIAPh2IE2AAIgyF9IArAAIgZDEgAAYiPQgEAlgIAiQgJApgIAaQgJAegKAZQgJAXgKAUIBkAAIAlkYIhAAAg");
	this.shape_6.setTransform(59.2,15.3,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiqDzIgWgDIALheIAOABIAOABQAZAAAOgPQAOgPAHgTIhWlXICPAAIAXDUIABAAIBFjUICJAAIigFbQgPAjgRAcQgOAZgUATQgVASgZAIQgbAJglAAIgcgCg");
	this.shape_7.setTransform(47.1,13.7,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhwDuQgfgOgRgdQgQgdgDgxQgDgwAJhEQAJhDAPgwQAPgwAYgeQAZgeAjgOQAigOAxAAQAxAAAfAOQAfANARAfQARAfACAvQADAwgJBDQgJBEgPAwQgPAwgYAeQgYAdgkAOQgiANgwAAQgyAAgfgNgAgBidQgKAIgHATQgGARgGAiIgVChQgDAjACAQQACATAIAIQAHAHAPAAQAOAAAIgHQAKgIAHgTQAHgVAFgeIAVihQADgfgCgUQgCgTgIgIQgHgHgOAAQgPAAgIAHg");
	this.shape_8.setTransform(33.2,13.6,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAIDyIAZjHIhMAAIgaDHIh/AAIA+njIB/AAIgXCyIBNAAIAXiyIB/AAIg+Hjg");
	this.shape_9.setTransform(19.6,13.6,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhwDuQghgOgPgdQgPgegCgwQgBgxAJhDQAJhEAPgwQAPgxAYgdQAYgeAkgOQAkgNAvAAQAsAAAcALQAcALARAUQAQAUAFAcQAFAegFAiIgEAeIh7AAIAEgbQAFgpgGgPQgGgPgTAAQgPAAgJAHQgIAIgHATQgGARgHAiIgVChQgDAfADAUQABATAIAIQAIAHAOAAQAMAAAHgFQAIgHAGgNQAGgOAFgWQAEgXAFgiIB7AAIgFAkQgGAygTAhQgRAggZATQgZATgeAGQgdAHgfAAQg2AAgfgNg");
	this.shape_10.setTransform(6.3,13.6,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0,0,149.7,25.5), null);


(lib.tag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAWgGAeIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgJAEgWIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape.setTransform(94.8,6.6,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhYB2IAnjlIBIAAIgFAlIABAAQAJgVAQgLQAQgLARAAIAMAAIgMBHIgKgBIgJAAQgUAAgNAJQgNAJgDAXIgVB8g");
	this.shape_1.setTransform(88.8,6.6,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+ByQgSgGgJgPQgJgOgBgXQgBgXAGggQAGghAJgWQAKgYANgOQAOgOAUgHQATgGAaAAQAYAAAPAFQAPAFAKAOQAJAMADAWQACAVgFAfIgEAWIhwAAIgFAfQgDATAFAFQAFAHAIAAQAKAAAGgJQAHgIAEgXIBFAAQgIAqgYAWQgaAVgtAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIABgKQADgTgCgIQgDgJgNAAQgMAAgEAJg");
	this.shape_2.setTransform(82.4,6.6,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADCXIAaiXQACgOgDgGQgDgGgKAAQgKAAgFAGQgFAHgCANIgaCXIhMAAIAzktIBLAAIgRBjIABAAQANgTAQgHQAPgGAOAAQAMAAALADQALAEAGAGQAHAHADANQADAMgDARIgeCsg");
	this.shape_3.setTransform(74.7,5.4,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnCUQgMgCgHgGQgHgGgBgLQgCgMADgTIAVh6IgZAAIAJgzIAZAAIALhDIBLAAIgLBDIAeAAIgJAzIgeAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgpABQgRAAgMgBg");
	this.shape_4.setTransform(69.1,5.5,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnCUQgLgCgHgGQgHgGgCgLQgCgMADgTIAVh6IgZAAIAJgzIAZAAIAMhDIBKAAIgLBDIAeAAIgJAzIgdAAIgTBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgVAAIgUABQgRAAgMgBg");
	this.shape_5.setTransform(64.4,5.5,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRBzQgLgDgHgHQgGgGgDgNQgDgMADgSIAeisIBMAAIgaCWQgCAPADAGQADAGAKAAQALAAAEgGQAFgGACgPIAaiWIBMAAIgnDkIhIAAIADgcIAAAAQgTAhgpAAQgMAAgLgCg");
	this.shape_6.setTransform(57.8,6.8,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGBvQgSgJgHgRQgIgQABgWQACgbAEgUQADgVAIgWQAHgWAMgRQAOgRAUgKQAVgKAgAAQAhAAASAJQASAKAGAQQAIARgCAWQAAARgFAdQgCASgJAaQgHAWgMAQQgOARgUAKQgWAKgeAAQghAAgSgJgAAChDQgEADgEAIQgEAJgDANQgDAJgEAaIgFAjQgCAOACAIQAAAHAEAEQAEADAGAAQAGAAAFgDQADgDAEgIQADgFAEgRIANhGQABgNgBgJQgBgIgEgDQgDgDgHAAQgGAAgEADg");
	this.shape_7.setTransform(50,6.6,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhuB7QgKgdAKhAQAHgiAIgUQAJgYALgMQAMgNAOgHQANgFAQAAQARgBAKAIQAMAGADASIABAAIAQhjIBNAAIg0EuIhIAAIAFggIgBAAQgKAUgOAJQgOAIgUAAQgmAAgKgfgAgNgaQgFAEgEAGQgDAIgDAMIgLA9QgBAPABAFQABAGAEAEQAEADAGAAQAHAAAFgDQAEgCAEgIQADgGACgOIAGgfQAEgSABgMQABgLgBgJQgBgGgEgEQgDgDgGAAQgHAAgEADg");
	this.shape_8.setTransform(42.8,5.5,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAVgGAfIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgJAEgWIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_9.setTransform(35,6.6,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnCUQgLgCgIgGQgGgGgCgLQgBgMACgTIAVh6IgZAAIAJgzIAZAAIAMhDIBKAAIgLBDIAeAAIgJAzIgeAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgpABQgRAAgMgBg");
	this.shape_10.setTransform(29.5,5.5,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhUBlQgRgTAGgmIBDAAIgBANQABAHACADQAEAIAKAAQAJAAAHgGQAGgEADgKQABgKgHgGQgHgGgLgDIgZgJQgMgEgMgJQgLgIgGgNQgGgNAEgWQACgOAIgOQAJgOAMgJQANgKARgFQARgFAYAAQBWAAgNBIIhCAAQADgOgEgGQgFgGgKAAQgJAAgFAFQgGAFgBAIQgCAKAIAFQAGAFAMAEIAZAIQANADALAJQALAHAGANQAGANgEAWQgDATgIAMQgJAPgNAKQgPALgRAEQgTAFgTAAQgwAAgSgTg");
	this.shape_11.setTransform(23.1,6.6,0.353,0.353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAVgGAfIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgIAEgXIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_12.setTransform(16.2,6.6,0.353,0.353);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnCUQgLgCgIgGQgGgGgCgLQgCgMAEgTIAUh6IgZAAIAIgzIAaAAIALhDIBMAAIgMBDIAeAAIgIAzIgfAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgoABQgSAAgMgBg");
	this.shape_13.setTransform(10.8,5.5,0.353,0.353);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXCTIAVhJIgmAAIgWBJIguAAIAWhJIgfAAIAIgxIAlAAIAPgxIgfAAIAIgxIAlAAIAWhJIAuAAIgWBJIAlAAIAWhJIAvAAIgWBJIAfAAIgIAxIglAAIgPAxIAfAAIgIAxIglAAIgWBJgAgZAZIAlAAIAOgxIglAAg");
	this.shape_14.setTransform(4.2,5.5,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tag, new cjs.Rectangle(0,0,98.4,10.9), null);


(lib.rect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rect, new cjs.Rectangle(0,0,240,400), null);


(lib.man_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.man();
	this.instance.parent = this;
	this.instance.setTransform(-90.5,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man_1, new cjs.Rectangle(-90.5,-82,181,164), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlNE4QAOhNCUg8IDVAAIAbhfIlWAAQAvhzBwgVIDdAAIAhh2IloAAQAchpB5ggIGVAAIitJvg");
	this.shape.setTransform(-46,-0.1,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6921").s().p("AjZDcQhbhbAAiBQAAiABbhbQBahcB/AAQCAAABaBcQBbBbAACAQAACBhbBbQhaBciAAAQh/AAhahcg");
	this.shape_1.setTransform(77,0.1,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAE4QgiiagUgsQgfhDgiAAIhzAAIApiFIB+AAIAlgHQAogRASgwQARgvAQg6IAMgwICiAAIhREBQgDAOgLASQgXAigqASIAHAVIAfBiIAyCjg");
	this.shape_2.setTransform(53.5,0.1,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AikE2ICsprICdAAIimJrg");
	this.shape_3.setTransform(40.4,0,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA8E4IApiNIjnAAIAkh6IDmAAIA8jOIiJAAQhZACgmAUQgsAWgRA/IhoFjIifAAIB/m7QAUhVBJgvQA/gpBLAAIGrAAIiuJvg");
	this.shape_4.setTransform(22.9,0.1,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Al5E4ICspvIJHAAIhhEAQgRA3gzAdQgvAcg6AAIi8AAIAmiJICCAAQAvAAAbgxQANgZAEgYIkAAAIiJHqg");
	this.shape_5.setTransform(-22.9,0.1,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlNE4QAOhOCUg7IDVAAIAbhfIlWAAQAvh0BwgUIDdAAIAhh2IloAAQAchpB5ggIGVAAIitJvg");
	this.shape_6.setTransform(-0.1,0.1,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkdElQgXgSABgfQAAgIACgLIB1m9QASgyAlgVQAhgUBKAAIFOAAQgKA1hBAvQghAYgfANIigAAQgXAAgOAKQgPAKgJAUIhREzQgCACArAAIEaAAIgUAuQgWA0ghATQgQAJguAFQgqAFgpAAIi/ABQgoAAgYgTg");
	this.shape_7.setTransform(-66.6,0.1,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiiE4ICipvICiAAIihJvg");
	this.shape_8.setTransform(-82.1,0.1,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#090A0D").s().p("EgjyAJGQkzAAh7j2QgnhNgPhcIgIhNIAAizQAAkzD2h7QB7g+B7AAMBHmAAAQEzAAB6D2QA+B7AAB7IAACzQAAEzj2B7QhMAnhdAPIhMAIg");
	this.shape_9.setTransform(0,0,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-98.2,-20.5,196.5,41.1), null);


(lib.legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIRCfIAAhKIAIAAIAAAHQACgEADgCIAGgCQAHABAEADQAEAEABAGQACAHAAAHQAAAIgBAIQgCAGgEAEQgEAEgGAAQgFAAgCgCIgFgFIAAAYgAIdBdQgCACgBAEIgBAGIAAAIIAAAKQABAGACADQACADAFABQAGAAADgHQACgFAAgMIAAgGIgCgHQgBgDgCgDQgCgCgEAAQgDAAgDACgAAzCfIAAhKIAIAAIAAAHQACgEADgCIAGgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAIQgCAGgDAEQgEAEgHAAQgEAAgDgCIgFgFIAAAYgABABdQgCACgBAEIgCAGIAAAIIABAKQAAAGADADQACADAFABQAGAAACgHQACgFAAgMIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgEAAgCACgAllCfIAAhKIAIAAIAAAHQACgEADgCIAGgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAIQgCAGgDAEQgEAEgHAAQgEAAgDgCIgFgFIAAAYgAlYBdQgCACgBAEIgCAGIAAAIIABAKQAAAGADADQACADAFABQAGAAACgHQACgFAAgMIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgEAAgCACgAweCfIAAhKIAIAAIAAAHQACgEADgCIAGgCQAHABAEADQAEAEABAGQACAHAAAHQAAAIgBAIQgCAGgEAEQgEAEgGAAQgFAAgCgCIgFgFIAAAYgAwSBdQgCACgBAEIgBAGIAAAIIAAAKQABAGACADQACADAFABQAGAAADgHQACgFAAgMIAAgGIgCgHQgBgDgCgDQgCgCgEAAQgDAAgDACgAs+CcIAAgQIggAAIAAAQIgHAAIAAgWIAFAAIADgJIACgJIABgMIAAgTIAeAAIAAAxIAFAAIAAAWgAtTBsIAAAKIgCAIIgDAIIAUAAIAAgqIgPAAgAJwCKQgEgEAAgHQAAgFACgDQABgDADgCQADgCAFgCIAEgBIAEgCIACgBQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBIABgDQAAgGgCgCQgCgBgFAAQgEAAgCACQgCADAAAFIgGAAQAAgJAEgEQAEgEAHAAQAGABADABQAEACABAEQACADAAADIAAAgIAAAEQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAIAAAAIABAAIAAAFIgBABIgCAAIgEgBIgDgCIgBgFIgBAAQgBAEgDACQgEADgEAAQgHAAgDgEgAKABxIgGAEIgEADQgBACgBAFQAAADACACQACADAEAAQAEAAACgBQACgDABgCIABgFIAAgNIgGACgAJJCLQgEgCgCgHQgDgGAAgLIABgLQABgFACgEQACgDADgDQAEgCAFgBQAGABADACQAEACABAFIADAKIAAALIgbAAIABALQABAFACACQACACAEABQAEAAACgCIADgGIAAgGIAIAAQAAAGgCAEQgBAEgEADQgEADgFAAQgGAAgEgDgAJbBtIgBgJQAAgEgCgDQgCgCgEAAQgEAAgCADQgCADgBAEIgBAIIATAAIAAAAgAHqCLQgEgCgCgHQgCgGAAgLIABgLQAAgFACgEQACgDAEgDQADgCAFgBQAGABAEACQADACACAFIACAKIABALIgbAAIAAALQABAFACACQACACAFABQAEAAABgCIADgGIABgGIAIAAQAAAGgCAEQgCAEgEADQgDADgGAAQgGAAgEgDgAH8BtIAAgJQgBgEgCgDQgCgCgDAAQgFAAgCADQgCADAAAEIgBAIIASAAIAAAAgAG+CLQgDgCgCgEQgCgEgBgFIgBgKIABgLQABgFACgFQACgDAEgDQADgCAGgBQAGABADACQAEADACADQACAEAAAGIgHAAIgBgGIgDgFQgCgBgEAAQgEAAgDADQgCADgBAGIgBALIABAHIABAHQABADACADQACACAEAAQAEgBACgCQACgCABgDIABgHIAHAAIgCAKQgBAFgEADQgEADgGAAQgGAAgEgDgABrCLQgEgCgCgHQgCgGAAgLIABgLQAAgFACgEQACgDAEgDQADgCAFgBQAGABAEACQADACACAFIACAKIABALIgbAAIAAALQABAFACACQACACAFABQAEAAABgCIADgGIABgGIAIAAQAAAGgCAEQgCAEgEADQgDADgGAAQgGAAgEgDgAB9BtIAAgJQgBgEgCgDQgCgCgDAAQgFAAgCADQgCADAAAEIgBAIIASAAIAAAAgAAJCLQgEgCgDgHQgCgGAAgLQAAgOAFgHQAEgIAKAAQALAAAEAIQAFAHAAAOQAAALgCAGQgDAHgEACQgFADgGAAQgFAAgFgDgAANBdQgDADgBAFQgBAFAAAHIABAMQABAFACACQADAEAEAAQAFAAADgEQACgCABgFIABgMIgBgMQgBgFgDgDQgCgCgFAAQgEAAgCACgAhRCKQgDgEAAgHQAAgFABgDQACgDADgCQADgCAFgCIADgBIAEgCIACgBQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAAgGgCgCQgBgBgFAAQgEAAgCACQgCADAAAFIgHAAQAAgJAEgEQAEgEAIAAQAFABAEABQADACACAEQABADAAADIAAAgIABAEQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIABAAIABAAIAAAFIgBABIgCAAIgEgBIgDgCIgCgFIAAAAQgCAEgDACQgDADgEAAQgHAAgEgEgAhBBxIgFAEIgEADQgCACAAAFQAAADACACQABADAEAAQAEAAACgBQADgDAAgCIABgFIAAgNIgGACgAh8CJQgEgEgBgKIAIAAQAAAHADADQACACAFABQAEgBADgCQADgCAAgGQAAgEgDgDQgCgDgFAAIgEAAIAAgGIAEAAQAEgBACgCQACgCAAgEIgBgFIgCgDIgFgBQgFAAgCACQgCAEgBAEIgHAAQAAgFACgEQADgEADgCQAEgCAFAAQAEABAEABQAEACACADQACADAAAEQAAAGgDADQgCADgFABIAFADQADACACADQABACAAAFQAAAHgEAEQgFAFgIAAQgIAAgFgFgAkNCKQgEgEAAgHQAAgFACgDQABgDADgCQADgCAFgCIAEgBIAEgCIACgBQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBIABgDQAAgGgCgCQgCgBgFAAQgEAAgCACQgCADAAAFIgGAAQAAgJAEgEQAEgEAHAAQAGABADABQAEACABAEQACADAAADIAAAgIAAAEQABAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAIAAAAIABAAIAAAFIgBABIgCAAIgEgBIgDgCIgBgFIgBAAQgBAEgDACQgEADgEAAQgHAAgDgEgAj9BxIgGAEIgEADQgBACgBAFQAAADACACQACADAEAAQAEAAACgBQACgDABgCIABgFIAAgNIgGACgAmPCLQgFgCgCgHQgDgGAAgLQAAgOAFgHQAFgIAKAAQAKAAAFAIQAFAHAAAOQAAALgDAGQgCAHgFACQgEADgGAAQgGAAgEgDgAmMBdQgCADgBAFQgCAFAAAHIABAMQABAFADACQACAEAFAAQAFAAACgEQADgCABgFIAAgMIgBgMQgBgFgCgDQgDgCgEAAQgEAAgDACgAnWCLQgEgCgCgHQgCgGAAgLIABgLQAAgFACgEQACgDAEgDQADgCAFgBQAGABAEACQADACACAFIACAKIABALIgbAAIAAALQABAFACACQACACAFABQAEAAABgCIADgGIABgGIAIAAQAAAGgCAEQgCAEgEADQgDADgGAAQgGAAgEgDgAnEBtIAAgJQgBgEgCgDQgCgCgDAAQgFAAgCADQgCADAAAEIgBAIIASAAIAAAAgAoDCLQgEgCgCgHQgCgGAAgLIABgLQAAgFACgEQACgDAEgDQADgCAFgBQAGABAEACQADACACAFIACAKIABALIgbAAIAAALQABAFACACQACACAFABQAEAAABgCIADgGIABgGIAIAAQAAAGgCAEQgCAEgEADQgDADgGAAQgGAAgEgDgAnxBtIAAgJQgBgEgCgDQgCgCgDAAQgFAAgCADQgCADAAAEIgBAIIASAAIAAAAgAsnCLQgEgCgCgHQgCgGAAgLIABgLQAAgFACgEQACgDAEgDQADgCAFgBQAGABAEACQADACACAFIACAKIABALIgbAAIAAALQABAFACACQACACAFABQAEAAABgCIADgGIABgGIAIAAQAAAGgCAEQgCAEgEADQgDADgGAAQgGAAgEgDgAsVBtIAAgJQgBgEgCgDQgCgCgDAAQgFAAgCADQgCADAAAEIgBAIIASAAIAAAAgAuHCLQgEgCgCgHQgCgGAAgLIABgLQAAgFACgEQACgDAEgDQADgCAFgBQAGABAEACQADACACAFIACAKIABALIgbAAIAAALQABAFACACQACACAFABQAEAAABgCIADgGIABgGIAIAAQAAAGgCAEQgCAEgEADQgDADgGAAQgGAAgEgDgAt1BtIAAgJQgBgEgCgDQgCgCgDAAQgFAAgCADQgCADAAAEIgBAIIASAAIAAAAgAvlCLQgFgCgCgHQgDgGAAgLQAAgOAFgHQAFgIAKAAQAKAAAFAIQAFAHAAAOQAAALgDAGQgCAHgFACQgEADgGAAQgGAAgEgDgAviBdQgCADgBAFQgCAFAAAHIABAMQABAFADACQACAEAFAAQAFAAACgEQADgCABgFIAAgMIgBgMQgBgFgCgDQgDgCgEAAQgEAAgDACgAL+CMIAAg3IAIAAIAAA3gALkCMIAAgwIgIAAIAAgHIAIAAIAAgEIABgIQABgDADgCQACgBAGgBIACAAIACAAIAAAHIgCAAIgBAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAGIAAAFIAJAAIAAAHIgJAAIAAAwgALKCMIAAgKIAJAAIAAAKgAK4CMIgOgbIgGAIIAAATIgIAAIAAhKIAIAAIAAAtIATgaIAJAAIgRAWIASAhgAGhCMIAAg3IAIAAIAAA3gAGJCMIAAgKIAJAAIAAAKgAFqCMIgJguIgJAuIgJAAIgNg3IAIAAIAKAxIAJgxIAIAAIAJAxIAAAAIAKgxIAHAAIgMA3gAEoCMIgJguIgJAuIgJAAIgNg3IAIAAIAKAxIAJgxIAIAAIAJAxIAAAAIAKgxIAHAAIgMA3gADmCMIgJguIgIAuIgKAAIgMg3IAHAAIAKAxIAJgxIAIAAIAJAxIABAAIAJgxIAIAAIgNA3gACTCMIAAgKIAJAAIAAAKgAgcCMIAAgwIgOAAIAAgHIAkAAIAAAHIgOAAIAAAwgAiTCMIAAgpIAAgEIAAgBIAAADIgBACIgSApIgKAAIAAg3IAIAAIAAArIAAACIgBAEIABAAIAAgEIABgCIASgrIAKAAIAAA3gAjGCMIAAgZIgTAAIAAAZIgIAAIAAg3IAIAAIAAAYIATAAIAAgYIAIAAIAAA3gAk0CMIAAg3IAdAAIAAAHIgVAAIAAAwgAo4CMIAAgpIAAgEIAAgBIAAADIgBACIgSApIgKAAIAAg3IAIAAIAAArIAAACIgBAEIABAAIAAgEIABgCIASgrIAKAAIAAA3gAqECMIAAgWIgIAAIgLAWIgJAAIAMgXQgFgCgCgEQgDgEAAgFQAAgIAEgEQAEgEAHgBIATAAIAAA3gAqUBeQgCADAAAFQAAAEACADQACACAFAAIAJAAIAAgTIgIAAQgGAAgCACgAqyCMIAAgpIAAgEIAAgBIAAADIgBACIgSApIgKAAIAAg3IAIAAIAAArIAAACIgBAEIABAAIAAgEIABgCIASgrIAKAAIAAA3gArlCMIAAgZIgTAAIAAAZIgIAAIAAg3IAIAAIAAAYIATAAIAAgYIAIAAIAAA3gAu7CMIAAg3IASAAQAEAAADACQADACACADQACADAAAEQAAAFgCAEQgCADgEABQAEABADAEQADADAAAGQAAAEgCAEQgCADgDABQgDACgEAAgAuzCGIAJAAQAFAAACgDQACgCAAgEQAAgGgDgBQgCgDgEAAIgJAAgAuzBtIAIAAQAEAAACgCQADgDAAgEQAAgEgDgCQgCgBgEgBIgIAAgAw0CMIAAgwIgUAAIAAAwIgIAAIAAg3IAjAAIAAA3gACTBgIAAgKIAJAAIAAAKgAL+BMIAAgKIAIAAIAAAKgAGhBMIAAgKIAIAAIAAAKgAnJBMIAAgKIAIAAIAAAKgAnXBMIAAgKIAIAAIAAAKgANyAvIAAhJIAIAAIAAAGQACgDADgCIAGgCQAHAAAEAEQAEAEACAFQACAHgBAHQABAIgCAHQgCAGgDAFQgEAEgHgBQgEAAgDgBIgFgGIAAAZgAN/gSQgCABgBAEIgCAHIAAAHIABAKQAAAFADAEQACADAFAAQAGAAACgGQACgGAAgLIAAgFIgBgIQgBgDgDgCQgCgDgDAAQgEAAgCADgAhdAvIAAhJIAIAAIAAAGQACgDADgCIAGgCQAHAAAEAEQAEAEABAFQACAHAAAHQAAAIgBAHQgCAGgEAFQgEAEgGgBQgFAAgCgBIgFgGIAAAZgAhRgSQgCABgBAEIgBAHIAAAHIAAAKQABAFACAEQACADAFAAQAGAAADgGQACgGAAgLIAAgFIgCgIQgBgDgCgCQgCgDgEAAQgDAAgDADgAp6AvIAAhJIAIAAIAAAGQACgDADgCIAGgCQAHAAAEAEQAEAEACAFQACAHgBAHQABAIgCAHQgCAGgDAFQgEAEgHgBQgEAAgDgBIgFgGIAAAZgAptgSQgCABgBAEIgCAHIAAAHIABAKQAAAFADAEQACADAFAAQAGAAACgGQACgGAAgLIAAgFIgBgIQgBgDgDgCQgCgDgDAAQgEAAgCADgAFjAuIAAgHIADABIADAAQAEAAACgDIADgIIgRg3IAIAAIANArIAAAAIAMgrIAIAAIgRA3IgDAJQgCADgDADQgDACgGABIgFgBgAjAAvIAAgZIgFAGQgDABgEAAQgHAAgEgEQgDgEgCgHQgBgHAAgHQAAgHABgHQACgFAEgEQAEgEAHAAQADAAADACQADACACADIAAgZIAIAAIAAAZQACgDADgCQADgCADAAQAHAAAEAEQAEAEACAFQABAHAAAHQAAAHgBAHQgCAHgEAEQgEAEgHAAQgEAAgCgBIgFgGIAAAZgAizgSQgCABgBAEIgCAHIAAAHIAAAKIADAJQADADAEAAQAGAAADgGQACgGAAgLIAAgFIgCgIIgDgFQgCgDgEAAQgDAAgCADgAjQgSQgCABgBAEIgCAHIAAAHIAAAKIADAJQADADAEAAQAGAAADgGQACgGAAgLIAAgFIgCgIIgDgFQgCgDgEAAQgDAAgCADgAP0ArIAAgPIggAAIAAAPIgHAAIAAgWIAFAAIAEgJIACgJIAAgKIAAgTIAeAAIAAAvIAGAAIAAAWgAPggEIgBAJIgCAIIgDAIIAVAAIAAgoIgPAAgABgArIAAgPIgiAAIAAg2IAIAAIAAAvIAUAAIAAgvIAHAAIAAAvIAGAAIAAAWgAqKArIAAgPIggAAIAAAPIgHAAIAAgWIAFAAIADgJIACgJIABgKIAAgTIAeAAIAAAvIAFAAIAAAWgAqfgEIAAAJIgCAIIgDAIIAUAAIAAgoIgPAAgALfAmQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAIABgEIAAgEIgEAAIAAgKIAJAAIAAAMQAAAEgDAEQgCADgEABgAQ5AbQgEgDgCgGQgDgGAAgLIABgKQABgFACgEQACgEADgCQAEgDAFAAQAGAAADADQAEACABAFIADAKIAAAJIgbAAIABALQABAFACADQACACAEAAQAEAAACgCIADgFIAAgGIAIAAQAAAFgCAFQgBAEgEADQgEADgFgBQgGAAgEgCgARLgDIgBgJQAAgEgCgCQgCgDgEAAQgEAAgCAEQgCACgBAEIgBAIIATAAIAAAAgANIAbQgFgCgCgHQgDgGAAgLQAAgOAFgHQAFgHAKAAQAKAAAFAHQAFAHAAAOQAAALgDAGQgCAHgFACQgEACgGAAQgGAAgEgCgANLgSQgCACgBAFQgCAFAAAHIABALQABAFADADQACADAFAAQAFAAACgDQADgDABgFIAAgLIgBgMQgBgFgCgCQgDgDgEAAQgEAAgDADgAH4AbQgFgCgCgHQgDgGAAgLQAAgOAFgHQAFgHAKAAQAKAAAFAHQAFAHAAAOQAAALgDAGQgCAHgFACQgEACgGAAQgGAAgEgCgAH7gSQgCACgBAFQgCAFAAAHIABALQABAFADADQACADAFAAQAFAAACgDQADgDABgFIAAgLIgBgMQgBgFgCgCQgDgDgEAAQgEAAgDADgAGZAbQgEgDgCgDQgCgFAAgEIgBgKIABgKQAAgGACgEQADgEADgCQAEgDAGAAQAFAAAEADQAEACACAEQABAEAAAGIgHAAIgBgHIgDgEQgCgCgDAAQgFAAgCAEQgDADAAAGIgBAKIAAAHIABAGQABADADADQACACADAAQAFAAACgCQACgCAAgEIABgGIAHAAIgBAKQgCAEgDAEQgEADgGgBQgGAAgEgCgAEiAaQgEgEgCgHQgCgIAAgKQAAgLACgIQACgHAEgEQAEgEAGgCIAIgDQADgBABgCIAGAAQgBAGgEACQgEACgGACQgGACgDAEQgEAEgBAHQADgEADgCQADgDAFABQAIgBAFAIQAFAGAAAMQAAAOgFAHQgEAIgLgBQgHAAgEgDgAEngPQgCACgCAFQgBAEAAAFQAAALADAFQACAGAGAAQAHAAACgGQADgFAAgLIgBgJIgEgHQgDgDgEAAQgDAAgDADgADyAbQgFgCgCgHQgDgGAAgLQAAgOAFgHQAFgHAKAAQAKAAAFAHQAFAHAAAOQAAALgDAGQgCAHgFACQgEACgGAAQgGAAgEgCgAD1gSQgCACgBAFQgCAFAAAHIABALQABAFADADQACADAFAAQAFAAACgDQADgDABgFIAAgLIgBgMQgBgFgCgCQgDgDgEAAQgEAAgDADgAASAaQgDgEAAgIQAAgEABgEQACgDADgBQADgCAFgCIADgBIAEgCIACAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgEQAAgFgCgCQgBgCgFAAQgEAAgCADQgCACAAAFIgHAAQAAgJAEgDQAEgEAIAAQAFAAAEACQADACACADQABADAAADIAAAgIABADQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAIABAAIABAAIAAAGIgBABIgCAAIgEgBIgDgCIgCgFIAAAAQgCADgDADQgDACgEAAQgHABgEgEgAAiABIgFADIgEAEQgCACAAAEQAAADACADQABADAEgBQAEABACgCQADgCAAgCIABgFIAAgNIgGACgAiHAbQgFgCgCgHQgDgGAAgLQAAgOAFgHQAFgHAKAAQAKAAAFAHQAFAHAAAOQAAALgDAGQgCAHgFACQgEACgGAAQgGAAgEgCgAiEgSQgCACgBAFQgCAFAAAHIABALQABAFADADQACADAFAAQAFAAACgDQADgDABgFIAAgLIgBgMQgBgFgCgCQgDgDgEAAQgEAAgDADgAmzAaQgEgEAAgIQAAgEACgEQABgDADgBQADgCAFgCIAEgBIAEgCIACAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIABgEQAAgFgCgCQgCgCgFAAQgEAAgCADQgCACAAAFIgGAAQAAgJAEgDQAEgEAHAAQAGAAADACQAEACABADQACADAAADIAAAgIAAADQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAIAAAAIABAAIAAAGIgBABIgCAAIgEgBIgDgCIgBgFIgBAAQgBADgDADQgEACgEAAQgHABgDgEgAmjABIgGADIgEAEQgBACgBAEQAAADACADQACADAEgBQAEABACgCQACgCABgCIABgFIAAgNIgGACgAoRAaQgEgEgCgHQgCgIAAgKQAAgLACgIQADgHADgEQAEgEAGgCIAIgDQAEgBAAgCIAHAAQgBAGgEACQgEACgHACQgGACgDAEQgDAEgBAHQACgEAEgCQADgDAEABQAJgBAFAIQAEAGABAMQAAAOgFAHQgFAIgKgBQgHAAgFgDgAoLgPQgDACgBAFQgCAEAAAFQAAALADAFQADAGAGAAQAGAAADgGQACgFAAgLIgBgJIgEgHQgCgDgEAAQgEAAgCADgApBAbQgEgCgDgHQgCgGAAgLQAAgOAFgHQAEgHAKAAQALAAAEAHQAFAHAAAOQAAALgCAGQgDAHgEACQgFACgGAAQgFAAgFgCgAo9gSQgDACgBAFQgBAFAAAHIABALQABAFACADQADADAEAAQAFAAADgDQACgDABgFIABgLIgBgMQgBgFgDgCQgCgDgFAAQgEAAgCADgArWAbQgFgCgCgHQgDgGAAgLQAAgOAFgHQAFgHAKAAQAKAAAFAHQAFAHAAAOQAAALgDAGQgCAHgFACQgEACgGAAQgGAAgEgCgArTgSQgCACgBAFQgCAFAAAHIABALQABAFADADQACADAFAAQAFAAACgDQADgDABgFIAAgLIgBgMQgBgFgCgCQgDgDgEAAQgEAAgDADgAu5AYQgFgGAAgKQAAgGADgEQACgEADgCQADgCADgBQgEAAgCgDQgDgDgBgDIgBgHQAAgEABgEQACgE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CQADgCABgCIAGAAQgBAFgEADQgEADgGABQgGACgDADQgEAFgBAHQADgEADgCQADgDAFAAQAIABAFAGQAFAHAAAMQAAAPgFAIQgEAGgLABQgHAAgEgEgANqiAQgCADgCAEQgBAFAAAFQAAALADAGQACAGAGAAQAHAAACgGQADgGAAgLIgBgKIgEgHQgDgCgEAAQgDAAgDACgAKxhUQgEgDgDgGQgCgHAAgLQAAgOAFgHQAEgHAKAAQALAAAEAHQAFAHAAAOQAAALgCAHQgDAGgEADQgFADgGAAQgFAAgFgDgAK1iDQgDADgBAFQgBAFAAAIIABAMQABAFACACQADADAEAAQAFAAADgDQACgCABgFIABgMIgBgNQgBgFgDgDQgCgBgFAAQgEAAgCABgAI0hVQgFgDgCgFQgCgFAAgHIAIAAIABAIQABAEADACQACACAFAAQAGAAADgEQADgDAAgGQAAgHgBgDQgCgDgEgBQgEgBgGAAIAAgHQAFgBADgBQAEgBABgDQACgCAAgGQAAgFgCgDQgCgDgGgBQgEAAgCACQgDACgBAEIgBAHIgHAAQAAgGACgFQACgFAEgDQAEgDAGAAQAJABAFAEQAFAFAAAIQAAAHgDAEQgDAFgGABQAHACADAFQAEAFAAAHQAAAGgDAFQgCAFgEACQgFADgHABQgHgBgEgDgAHrhUQgEgDgDgGQgCgHAAgLQAAgOAFgHQAEgHAKAAQALAAAEAHQAFAHAAAOQAAALgCAHQgDAGgEADQgFADgGAAQgFAAgFgDgAHviDQgDADgBAFQgBAFAAAIIABAMQABAFACACQADADAEAAQAFAAADgDQACgCABgFIABgMIgBgNQgBgFgDgDQgCgBgFAAQgEAAgCABgAFuhVQgFgDgCgFQgCgFAAgHIAIAAIABAIQABAEADACQACACAFAAQAGAAADgEQADgDAAgGQAAgHgBgDQgCgDgEgBQgEgBgGAAIAAgHQAFgBADgBQAEgBABgDQACgCAAgGQAAgFgCgDQgCgDgGgBQgEAAgCACQgDACgBAEIgBAHIgHAAQAAgGACgFQACgFAEgDQAEgDAGAAQAJABAFAEQAFAFAAAIQAAAHgDAEQgDAFgGABQAHACADAFQAEAFAAAHQAAAGgDAFQgCAFgEACQgFADgHABQgHgBgEgDgAEqhUQgEgCgCgEQgCgFAAgEIgBgLIABgLQAAgEACgFQADgEADgDQAEgCAGAAQAFAAAEACQAEADACAEQABAEAAAFIgHAAIgBgFIgDgFQgCgCgDABQgFAAgCACQgDAEAAAFIgBALIAAAHIABAHQABADADADQACACADAAQAFAAACgCQACgDAAgDIABgGIAHAAIgBAKQgCAEgDADQgEADgGABQgGAAgEgDgAAZhWQgDgDAAgHQAAgFABgDQACgDADgDQADgCAFgCIADgBIAEgBIACgBQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgEQAAgFgCgCQgBgCgFABQgEgBgCADQgCACAAAFIgHAAQAAgIAEgEQAEgFAIABQAFAAAEABQADACACAEQABADAAAEIAAAgIABADQAAAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIABAAIABgBIAAAGIgBAAIgCAAIgEAAIgDgCIgCgFIAAAAQgCAEgDACQgDADgEAAQgHgBgEgEgAAphuIgFADIgEAEQgCACAAAEQAAAEACACQABACAEABQAEgBACgBQADgCAAgDIABgEIAAgOIgGADgAi4hUQgEgDgCgGQgDgHAAgLIABgKQABgFACgEQACgEADgDQAEgCAFAAQAGAAADACQAEADABAEIADAKIAAAMIgbAAIABALQABAEACADQACACAEAAQAEAAACgCIADgFIAAgGIAIAAQAAAFgCAEQgBAFgEACQgEADgFABQgGAAgEgDgAimhzIgBgIQAAgEgCgDQgCgDgEABQgEAAgCACQgCADgBAEIgBAIIATAAIAAAAgAkYhUQgEgDgCgGQgDgHAAgLIABgKQABgFACgEQACgEADgDQAEgCAFAAQAGAAADACQAEADABAEIADAKIAAAMIgbAAIABALQABAEACADQACACAEAAQAEAAACgCIADgFIAAgGIAIAAQAAAFgCAEQgBAFgEACQgEADgFABQgGAAgEgDgAkGhzIgBgIQAAgEgCgDQgCgDgEABQgEAAgCACQgCADgBAEIgBAIIATAAIAAAAgAl3hUQgEgDgDgGQgCgHAAgLQAAgOAFgHQAEgHAKAAQALAAAEAHQAFAHAAAOQAAALgCAHQgDAGgEADQgFADgGAAQgFAAgFgDgAlziDQgDADgBAFQgBAFAAAIIABAMQABAFACACQADADAEAAQAFAAA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");
	this.shape.setTransform(110.7,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal, new cjs.Rectangle(0,0,221.5,31.9), null);


(lib.box2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("EgunALDIAA2FMBdPAAAIAAWFg");
	this.shape.setTransform(105.3,24.9,0.353,0.353,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2, new cjs.Rectangle(0,0,210.7,50), null);


(lib.box1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("EgkxALqIAA3TMBJjAAAIAAXTg");
	this.shape.setTransform(83.1,26.3,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1, new cjs.Rectangle(0,0,166.2,52.7), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-138,-259);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-138,-259,276,518), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

	// Слой 15
	this.instance = new lib.rect();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(145).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121,163.8,1,0.1,0,0,0,0.5,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({regX:0,scaleY:1},7).wait(50).to({scaleY:0.1},7,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// legal
	this.instance_2 = new lib.legal();
	this.instance_2.parent = this;
	this.instance_2.setTransform(115.4,381.1,1,1,0,0,0,110.7,16);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(56).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// win
	this.instance_3 = new lib.win();
	this.instance_3.parent = this;
	this.instance_3.setTransform(173.4,308.8,0.681,0.681,0,0,0,53.2,53.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({regX:53.3,scaleX:1.1,scaleY:1.1,x:173.5,alpha:1},4,cjs.Ease.get(1)).to({regX:53.2,scaleX:1,scaleY:1,x:173.4},2).wait(110).to({regY:53.3,scaleX:0.5,scaleY:0.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// man
	this.instance_4 = new lib.man_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(190.9,101.6,0.586,0.586,15,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.1,scaleX:0.76,scaleY:0.76,rotation:0,guide:{path:[190.9,101.6,153.9,-4.1,70.7,65.6]}},17,cjs.Ease.get(-0.96)).wait(64).to({scaleX:1,scaleY:1,x:-96.6,y:184.5},8).to({_off:true},1).wait(70));

	// text2
	this.instance_5 = new lib.text2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(338.3,177,1,1,0,0,0,97.5,19.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({x:108.3},7,cjs.Ease.get(1)).to({x:118.3},2).wait(48).to({scaleY:0.1,y:164.3},6,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// text1
	this.instance_6 = new lib.text1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(336.8,141.5,1,1,0,0,0,74.8,12.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({_off:false},0).to({x:106.8},7,cjs.Ease.get(1)).to({x:116.8},2).wait(50).to({regY:13,scaleY:0.1,y:160.7},6,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// box2
	this.instance_7 = new lib.box2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(339.9,177.8,1,1,0,0,0,105.3,24.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({x:109.9},7,cjs.Ease.get(1)).to({x:119.9},2).wait(52).to({scaleY:0.1,y:164.4},6,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// box1
	this.instance_8 = new lib.box1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(335.8,149.2,1,1,0,0,0,83.1,26.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({x:105.8},7,cjs.Ease.get(1)).to({x:115.8},2).wait(54).to({regY:26.4,scaleY:0.1,y:161.5},6,cjs.Ease.get(1)).to({_off:true},1).wait(72));

	// tag
	this.instance_9 = new lib.tag();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-76.2,351.9,1,1,0,0,0,49.1,5.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({x:66.9},7,cjs.Ease.get(1)).to({x:63.8},2).wait(123).to({x:-66.2},7,cjs.Ease.get(1)).wait(3));

	// bg
	this.instance_10 = new lib.bg_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(138,229);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.87,scaleY:0.87,x:120,y:175.2},17).wait(143));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.5,170,276.5,518);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/man.png", id:"man"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;