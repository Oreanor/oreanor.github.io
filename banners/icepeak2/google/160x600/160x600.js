(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"160x600_atlas_NP_", frames: [[0,0,260,600],[524,0,250,600],[262,0,260,600]]}
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



(lib._0 = function() {
	this.spriteSheet = ss["160x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["160x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["160x600_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,59);// helper functions:

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


(lib.vbnvbn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABAsQgGgDgDgHQgEgGAAgLIAAgMIgPAAIAAAoIgRAAIAAhYIARAAIAAAjIAPAAIAAgHQAAgLAEgHQADgGAGgDQAHgDAJAAQAIAAAHADQAGADAEAGQADAHABALIAAAgQgBALgDAGQgEAGgGAEQgIACgHAAQgJAAgHgCgAAIgcQgEAEAAAHIAAAjQAAAHAEAEQACAEAHAAQAFAAADgEQADgFAAgGIAAgjQAAgFgDgGQgDgDgFAAQgHAAgCADg");
	this.shape.setTransform(82.8,0,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAsIAAgNIABAAIABABIADAAQAFAAACgHIgYhFIATAAIAMAuIAOguIATAAIgdBSQgEAEgBACQgDABgFAAQgGAAgEgBg");
	this.shape_1.setTransform(67.2,0.2,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALAtIAAgqIgVAAIAAAqIgRAAIAAhZIARAAIAAAjIAVAAIAAgjIARAAIAABZg");
	this.shape_2.setTransform(54.7,0,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeAtIgPgkIgGAIIAAAcIgQAAIAAgcIgHgIIgPAkIgTAAIAYgyIgXgnIATAAIAVAnIAAgnIAQAAIAAAnIAUgnIATAAIgWAnIAXAyg");
	this.shape_3.setTransform(39.3,0,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZAtIAAhZIARAAIAABZgAgpAtIAAhZIARAAIAAAkIAPAAQAFAAAEACQAEADACADIAFAHQABAEAAAFQAAANgGAIQgEAHgKABgAgYAgIAKAAQAFAAADgEQACgDAAgHQAAgHgDgDQgCgDgGAAIgJAAg");
	this.shape_4.setTransform(21.3,0,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAsIAAgMIAGAAIADgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAIABgKIAAg9IAzAAIAABYIgRAAIAAhLIgRAAIAAAhQAAAMgCANQgBAJgFAFQgEAEgHAAIgKgBg");
	this.shape_5.setTransform(5.3,0.2,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAQIAAgeQAAgMAEgGQADgHAHgDQAHgDAHAAQAJAAAGADQAGACAEAIQAEAGAAAMIAAAeQAAAMgEAGQgDAHgHADQgGACgJAAQgcAAAAgegAgLgQIAAAjQAAAOALAAQAGAAADgEQACgDAAgHIAAgjQAAgIgCgDQgDgEgGAAQgLAAAAAPg");
	this.shape_6.setTransform(-7.1,0,1.819,1.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALAtIAAgqIgVAAIAAAqIgRAAIAAhZIARAAIAAAjIAVAAIAAgjIARAAIAABZg");
	this.shape_7.setTransform(-19.6,0,1.819,1.819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAtIAAhZIAfAAQAIABAFADQAEADAEAGQADAGAAAHQAAAIgDAGQgEAGgFADQgFADgHAAIgOAAIAAAlgAgKgEIAJAAQALAAAAgOQAAgMgLAAIgJAAg");
	this.shape_8.setTransform(-31.7,0,1.819,1.819);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAQIAAgeQAAgMAEgGQADgGAHgEQAHgDAHAAQAJAAAHADQAGADADAHQAEAGAAAMIAAAeQAAAMgEAGQgCAGgHAEQgIACgIAAQgcAAAAgegAgKgQIAAAjQAAAOAKAAQAGAAADgEQADgDAAgHIAAgjQAAgHgDgEQgDgEgGAAQgKAAAAAPg");
	this.shape_9.setTransform(-44.2,0,1.819,1.819);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAtIAAhZIAvAAIAAAOIgeAAIAABLg");
	this.shape_10.setTransform(-55,0,1.819,1.819);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAtIgEgYIgSAAIgGAYIgSAAIAXhZIAWAAIATBZgAgGAIIAOAAIgHgpg");
	this.shape_11.setTransform(-72.1,0,1.819,1.819);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAtIAAgqIgVAAIAAAqIgRAAIAAhZIARAAIAAAjIAVAAIAAgjIARAAIAABZg");
	this.shape_12.setTransform(-84.4,0,1.819,1.819);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E76720").s().p("AnkBaQglAAgagaQgbgbAAglQAAgkAbgaQAagbAlAAIPJAAQAlAAAaAbQAbAaAAAkQAAAlgbAbQgaAaglAAg");
	this.shape_13.setTransform(0,0,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vbnvbn, new cjs.Rectangle(-104.5,-16.3,209.1,32.8), null);


(lib.nnbnn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABBFQgJgEgGgLQgGgLAAgRIAAgTIgYAAIAAA/IgbAAIAAiMIAbAAIAAA5IAYAAIAAgMQAAgQAGgMQAGgKAJgEQALgFAOAAQAOAAAKAFQAKAEAGAKQAGALAAARIAAAzQAAAQgGAMQgGALgKAEQgKAEgOAAQgOAAgLgEgAALgtQgFAHAAALIAAA3QAAALAFAGQAGAHAJgBQAJABAEgHQAFgFAAgMIAAg3QAAgLgFgHQgEgFgJAAQgJAAgGAFg");
	this.shape.setTransform(78.7,-2.3,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAAg1QAAgcADgTIgmBkIgdAAIAAiMIAZAAIAABHIgCASIgCANIAnhmIAdAAIAACMg");
	this.shape_1.setTransform(53.5,-2.3,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXBVIAAgdIhHAAIAAiMIAbAAIAAB3IAiAAIAAh3IAbAAIAAB3IAJAAIAAAyg");
	this.shape_2.setTransform(33.8,0.3,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPBGIgWg3IgKANIAAAqIgbAAIAAiMIAbAAIAAA+IAfg+IAeAAIgjA+IAlBOg");
	this.shape_3.setTransform(14.1,-2.3,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBGIAAiMIBLAAIAAAXIgwAAIAAAhIArAAIAAAUIgrAAIAAArIAwAAIAAAVg");
	this.shape_4.setTransform(-4.1,-2.3,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBGIAAgUQACABAHAAQAEAAABgBQACgBACgGIACgRIAAhhIBRAAIAACMIgbAAIAAh2IgbAAIAAA1QAAAYgDAPQgDAPgHAHQgGAHgMAAQgJAAgHgCg");
	this.shape_5.setTransform(-24,-2.1,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBGIAAgUQACABAGAAQAEAAACgBQACgBABgGIADgRIAAhhIBRAAIAACMIgbAAIAAh2IgbAAIAAA1QAAAYgEAPQgDAPgGAHQgHAHgLAAQgJAAgHgCg");
	this.shape_6.setTransform(-45,-2.1,1.819,1.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAZIAAgwQABgTAFgKQAHgLAJgEQAKgFANAAQAPAAAKAFQAKAFAFAKQAGAMgBARIAAAwQABARgGALQgFALgKAFQgKAEgPAAQgsAAgBgwgAgSgbIAAA4QABAXARgBQAJAAAFgFQAEgGAAgLIAAg4QAAgLgEgGQgFgHgJABQgRAAgBAXg");
	this.shape_7.setTransform(-64.6,-2.3,1.819,1.819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBGIgXg3IgLANIAAAqIgbAAIAAiMIAbAAIAAA+IAgg+IAeAAIgkA+IAlBOg");
	this.shape_8.setTransform(-83.4,-2.3,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nnbnn, new cjs.Rectangle(-91.7,-15.6,183.5,31.3), null);


(lib.jjjjj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBDQADgRAggMIAtAAIAGgVIhJAAQAKgYAYgEIAvAAIAHgaIhNAAQAHgWAZgHIBXAAIglCFg");
	this.shape.setTransform(-51,-0.1,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E76720").s().p("AguAwQgTgUAAgcQAAgaATgVQATgTAbAAQAbAAAUATQATAUAAAbQAAAcgTAUQgUATgbAAQgbAAgTgTg");
	this.shape_1.setTransform(85.3,0.1,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABDQgHghgDgKQgIgOgHAAIgYAAIAJgcIAbAAQANABAGgQIAKghIAjAAIgRA3QgDALgPAGIATA9g");
	this.shape_2.setTransform(59.2,0.1,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBCIAkiDIAjAAIgkCDg");
	this.shape_3.setTransform(44.8,0,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANBDIAJgeIgxAAIAIgaIAwAAIAOgsIgeAAQgSAAgJAEQgJAGgEANIgXBMIghAAIAbhfQAEgSAQgKQANgJAQAAIBbAAIglCFg");
	this.shape_4.setTransform(25.3,0.1,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhRBDIAliFIB9AAIgUA3QgEALgLAGQgKAGgMAAIgpAAIAJgcIAbAAQAKAAAGgLQADgFAAgGIg2AAIgdBpg");
	this.shape_5.setTransform(-25.5,0.1,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBDQADgQAggNIAtAAIAGgVIhJAAQAKgYAYgFIAvAAIAHgZIhNAAQAHgWAagHIBWAAIgmCFg");
	this.shape_6.setTransform(-0.2,0.1,1.819,1.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBDQgIAAgFgEQgFgDAAgIIAAgDIAZhgQAEgKAIgFQAHgEAQAAIBHAAQgCALgOAKIgOAIIgiAAQgFAAgCADQgDABgDAFIgRBBIAJABIA8AAIgFAKQgEAKgHAFQgIAEgXAAg");
	this.shape_7.setTransform(-73.9,0.1,1.819,1.819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBDIAiiFIAjAAIgjCFg");
	this.shape_8.setTransform(-91,0.1,1.819,1.819);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AnsCBQhEAAgcg2QgIgRgEgVIgCgSIAAglQAAhEA3gcQAbgOAcAAIPZAAQBEAAAbA2QAOAcABAcIAAAlQAABEg2AcQgSAJgVADIgRACgAohhrQgxAZABBAIAAAlQAAAIACAKQACATAJAQQAZAxA/AAIPZAAQAIAAAJgCQATgDAQgIQAxgZAAhAIAAglQAAgcgNgZQgZgxg/AAIvZAAQgcAAgZANg");
	this.shape_9.setTransform(0,0,1.819,1.819);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AnsB9QhCAAgag1QgJgQgDgUIgCgRIAAglQAAhCA1gbQAbgNAaAAIPZAAQBCAAAbA1QANAaAAAbIAAAlQAABDg1AaQgQAIgUAEIgRABg");
	this.shape_10.setTransform(0,0,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.jjjjj, new cjs.Rectangle(-109.6,-23.5,219.4,47.1), null);


(lib.jjjhhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARA/IAAgvQAAgdAEgOIgiBaIgaAAIAAh9IAXAAIgCBPIgCALIAihaIAaAAIAAB9g");
	this.shape.setTransform(43.1,0,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA/IAAh9IAsAAQAIAAAJAGQAIAFAEAIQAEAJAAAJQAAALgFAIQgEAIgHAFQgHAEgLAAIgTAAIAAA0gAgOgGIALAAQARAAAAgTQAAgSgRAAIgLAAg");
	this.shape_1.setTransform(26.1,0,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnAWIAAgrQAAgPAFgJQAFgKAJgFQAJgDALAAQAMAAAKADQAIAFAGAJQAEAKAAAPIAAArQAAAQgEAJQgGAKgIAEQgIADgOAAQgnABAAgrgAgPgYIAAAyQAAATAPABQAIAAAEgGQAEgFAAgJIAAgyQAAgIgEgHQgEgFgIAAQgPAAAAAUg");
	this.shape_2.setTransform(8.7,0,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANA/IgTgzIgJANIAAAmIgYAAIAAh9IAYAAIAAA3IAbg3IAbAAIgfA3IAgBGg");
	this.shape_3.setTransform(-7.9,0,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAWIAAgrQABgNAFgLQAEgJAKgGQAKgDAKAAQANAAAIADQAJAFAGAJQAEALAAAOIAAArQAAAOgEALQgGAKgJAEQgHADgOAAQgoABAAgrgAgPgYIAAAyQAAATAPABQAJAAADgGQAEgEAAgKIAAgyQAAgKgEgFQgEgFgIAAQgPAAAAAUg");
	this.shape_4.setTransform(-25.6,0,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQA/IAAhqIgeAAIAABqIgYAAIAAh9IBNAAIAAB9g");
	this.shape_5.setTransform(-43.2,0,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.jjjhhh, new cjs.Rectangle(-50.3,-11.7,100.6,23.5), null);


(lib.jhjhj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcA9IAAgSIAIACQAGAAAEgKIgjhhIAbAAIASBBIAThBIAaAAIgiBkQgCAIgEAHQgFAGgCACQgFADgGAAQgJAAgGgDg");
	this.shape.setTransform(53.8,0,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQA+IAAg6IgfAAIAAA6IgXAAIAAh7IAXAAIAAAwIAfAAIAAgwIAXAAIAAB7g");
	this.shape_1.setTransform(36.4,-0.2,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARA+IAAgvQAAgbADgPIghBZIgaAAIAAh7IAWAAIAAA+IgDAbIAihZIAaAAIAAB7g");
	this.shape_2.setTransform(18.9,-0.2,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8A+IAAh7IAXAAIAABoIAaAAIAAhoIAXAAIAABoIAaAAIAAhoIAXAAIAAB7g");
	this.shape_3.setTransform(-2.7,-0.2,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmA+IAAh7IAsAAQAKAAAHAEQAIAFAEAJQAEAHAAALQAAALgEAIQgEAHgIAFQgIAGgJAAIgUAAIAAAygAgOgGIAMAAQARAAAAgSQAAgTgRAAIgMAAg");
	this.shape_4.setTransform(-23.6,-0.2,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggA+IAAh7IBBAAIAAAUIgqAAIAAAcIAnAAIAAARIgnAAIAAAnIAqAAIAAATg");
	this.shape_5.setTransform(-39.4,-0.2,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglA+IAAh7IAqAAQALAAAHADQAHAFADAGQAEAKAAAGQAAAFgDAHQgBAGgEAEQgEAEgFABQAJAEAEAGQAFAHAAAMQAAAMgDAHQgEAKgGAEQgHAEgIAAgAgOAsIAPAAQAHABADgFQADgEAAgLQAAgTgNAAIgPAAgAgOgLIANAAQANAAABgRQgBgIgCgEQgEgDgHAAIgNAAg");
	this.shape_6.setTransform(-55.1,-0.2,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.jhjhj, new cjs.Rectangle(-62,-11.5,124.2,23.1), null);


(lib.hhjjj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOA+IgUgxIgKAMIAAAlIgXAAIAAh7IAXAAIAAA2IAcg2IAbAAIgfA2IAgBFg");
	this.shape.setTransform(55.7,0,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUA+IgGggIgZAAIgIAgIgZAAIAfh7IAfAAIAbB7gAgIALIATAAIgKg5g");
	this.shape_1.setTransform(38.4,0,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggA+IAAh7IBBAAIAAAUIgqAAIAAAcIAmAAIAAASIgmAAIAAAmIAqAAIAAATg");
	this.shape_2.setTransform(22.8,0,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmA+IAAh7IAsAAQAKAAAHAEQAIAGAEAIQAEAJAAAJQAAAKgEAJQgFAHgHAGQgJAFgJAAIgTAAIAAAygAgOgGIAMAAQAQAAAAgTQAAgSgQAAIgMAAg");
	this.shape_3.setTransform(7,0,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggA+IAAh7IBBAAIAAAUIgqAAIAAAcIAmAAIAAASIgmAAIAAAmIAqAAIAAATg");
	this.shape_4.setTransform(-8.9,0,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdA2QgIgMAAgTIAAgsQAAgVAKgLQAKgLASAAQAMAAAIAEQAIAFAFAJQAEAIAAALIAAAGIgYAAIAAgDQAAgMgDgEQgDgFgIAAQgGAAgEAFQgDAFAAALIAAAxQAAALADAFQADAFAHAAQAHAAAEgFQADgFAAgLIAAgHIAYAAIAAAFQAAALgDAKQgEAKgIAGQgJAFgOAAQgUAAgJgLg");
	this.shape_5.setTransform(-24.7,0,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_6.setTransform(-36.6,0,1.819,1.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdA2QgIgLAAgUIAAgsQAAgXAJgJQALgLARAAQANAAAIAEQAIAFAFAJQAEAIAAALIAAAGIgXAAIAAgDQgBgLgDgFQgDgFgIAAQgGAAgEAFQgDAEAAAMIAAAxQAAAMADAEQADAFAHAAQAHAAAEgFQADgGABgKIAAgHIAXAAIAAAFQAAANgEAIQgDAKgIAGQgJAFgOAAQgUAAgJgLg");
	this.shape_7.setTransform(-56,0,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhjjj, new cjs.Rectangle(-62.9,-11.8,126,23.7), null);


(lib.hhjjhj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-114,-246);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhjjhj, new cjs.Rectangle(-114,-246,146,59), null);


(lib.hhhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhhh, new cjs.Rectangle(-120,-200,250,600), null);


(lib.h = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.h, new cjs.Rectangle(-120,-200,260,600), null);


(lib.ghj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._0();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghj, new cjs.Rectangle(-120,-200,260,600), null);


(lib.bvvbn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAGIgEAHIgFgEIAFgHIgJgCIADgGIAIADIAAgJIAFAAIAAAJIAIgDIADAGIgJACIAGAGIgGAFg");
	this.shape.setTransform(27.9,-12.1,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAUIAAgmQAAgNAEgJQAEgIAIgEQAJgEAJAAQALAAAIAEQAIAEAEAIQAEAJAAANIAAAmQAAANgEAJQgEAIgIADQgHAEgMAAQgiAAAAglgAgNgVIAAAsQAAARANAAQAHAAADgEQAEgFAAgIIAAgrQAAgJgEgFQgDgFgHAAQgNAAAAASg");
	this.shape_1.setTransform(57.6,-1.4,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXBCIAAgWIgtAAIAAAWIgUAAIAAgnIAHAAIAFgMIADgMIAChEIA9AAIAABcIAHAAIAAAngAgFgXQAAATgCAJIgHAWIAdAAIAAhLIgUAAg");
	this.shape_2.setTransform(41.4,0.6,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASA3IgGgdIgWAAIgHAdIgWAAIAbhtIAcAAIAYBtgAgHAKIARAAIgJgyg");
	this.shape_3.setTransform(18.9,-1.4,1.819,1.819);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMA3IgRgsIgIALIAAAhIgVAAIAAhtIAVAAIAAAwIAYgwIAXAAIgcAwIAdA9g");
	this.shape_4.setTransform(4.4,-1.4,1.819,1.819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXBCIAAgWIgtAAIAAAWIgUAAIAAgnIAHAAIAFgMIADgMQABgFAAgJIABg2IA9AAIAABcIAHAAIAAAngAgFgXQAAATgCAJQgCALgFALIAdAAIAAhLIgUAAg");
	this.shape_5.setTransform(-11.9,0.6,1.819,1.819);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPA3IAAgqQAAgWADgPIgeBPIgWAAIAAhtIAUAAIAAA3IgDAYIAehPIAWAAIAABtg");
	this.shape_6.setTransform(-28.2,-1.4,1.819,1.819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAMA3IgRgsIgIALIAAAhIgVAAIAAhtIAVAAIAAAwIAYgwIAXAAIgcAwIAdA9g");
	this.shape_7.setTransform(-42.9,-1.4,1.819,1.819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAvQgHgJAAgRIAAgnQAAgTAIgKQAJgJAQAAQAJAAAJAEQAGAEAFAHQAEAHgBALIAAAFIgUAAIAAgDQgBgJgCgFQgDgEgGAAQgHAAgCAEQgDAFAAAJIAAAqQAAALACAEQAEAFAGgBQAFABAEgFQADgEAAgLIAAgGIAUAAIAAAGQAAALgCAHQgDAJgIAEQgHAFgMAAQgSAAgIgKg");
	this.shape_8.setTransform(-57.8,-1.4,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bvvbn, new cjs.Rectangle(-63.9,-14.5,127.9,27), null);


(lib.bnn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOCRIB+khIAbAAIh+EhgAAyCCQgNgJgEgPQgDgQAAgUQAAgTADgSQAEgOANgJQANgJAZAAQAaAAAMAJQANAJAEAOQADAOAAAXQAAAXgDANQgEAPgNAJQgMAJgaAAQgZAAgNgJgABGAmQgEAIAAAYQAAAVAEAKQAFAKANAAQAOAAADgKQAFgJAAgWQAAgWgFgKQgEgKgNAAQgOAAgEAKgAh9gJQgNgJgEgPQgDgNAAgXQAAgXADgOQAEgNANgKQANgJAZAAQAaAAAMAJQANAKAEANQADAOAAAXQAAAXgDANQgEAPgNAJQgNAJgZAAQgZAAgNgJgAhlhqQgFAFgBAJQgCAIAAAPQAAAVAEALQAFAJAOAAQAOAAADgJQAEgLAAgVQAAgVgEgLQgEgKgNAAQgKAAgFAFg");
	this.shape.setTransform(35,-0.3,1.819,1.819);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmCIQgSgJgLgRQgKgRAAgWIAAiNQAAgWAKgQQALgRASgJQARgKAWAAQAXAAASAJQARAJAKARQAJAQAAAXIAACNQAAAWgJARQgKARgRAJQgSAJgXAAQgVAAgSgJgAgShdQgIAHAAAMIAACVQAAAMAIAIQAIAHALAAQAKAAAIgHQAIgIAAgMIAAiVQAAgMgHgHQgIgHgLAAQgLAAgIAHg");
	this.shape_1.setTransform(-11.7,0.7,1.819,1.819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6B8QgTgWAAgiIAAgQIAxAAIAAAKQAAApAbAAQARAAAFgLQAFgKAAgXQAAgagIgLQgGgLgSAAIgWAAIAAglIAPAAQAWAAAHgNQAHgOAAgTQAAgegYAAQgNAAgHAJQgHAJAAAQIAAAJIgwAAIAAgLQAAghAUgUQAVgVAiAAQAVAAASAJQARAIAJAQQAKAQAAAVQAAAbgKAPQgKAPgUAHQAsAKAAA9QAAAegJASQgKATgSAIQgRAJgbAAQgkAAgTgVg");
	this.shape_2.setTransform(-46.8,0.7,1.819,1.819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E76720").s().p("AjmDOQhIAAg0g0Qg0gzAAhJIAAg7QAAhIA0g0QA0g0BIAAIHNAAQBJAAA0A0QAzAzAABJIAAA7QAABJgzAzQg0A0hJAAg");
	this.shape_3.setTransform(0,0,1.819,1.819);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bnn, new cjs.Rectangle(-74,-37.4,148.1,74.9), null);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(278));

	// logo
	this.instance = new lib.jjjjj();
	this.instance.parent = this;
	this.instance.setTransform(81.2,540.5,0.658,0.066,0,0,0,0.3,2.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).to({regY:0.3,scaleY:0.66},8,cjs.Ease.get(1)).wait(67).to({regY:2.1,scaleY:0.07},6,cjs.Ease.get(1)).to({_off:true},1).wait(96));

	// Символ 15
	this.instance_1 = new lib.vbnvbn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(241.8,54.5,0.7,0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).to({scaleY:0.72,skewX:-13.7,x:76.5},5,cjs.Ease.get(1)).to({scaleY:0.7,skewX:0,x:80.8},2).wait(76).to({regX:0.1,scaleY:0.71,skewX:-10.4,x:77.3},0).to({regX:0,x:-83.6},6,cjs.Ease.get(1)).to({_off:true},1).wait(96));

	// Символ 14
	this.instance_2 = new lib.nnbnn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(242.8,80.5,0.7,0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({_off:false},0).to({scaleY:0.72,skewX:-14.4,x:77.5},5,cjs.Ease.get(1)).to({scaleY:0.7,skewX:0,x:81.8},2).wait(74).to({scaleY:0.72,skewX:-12.6},0).to({x:-79.1},6,cjs.Ease.get(1)).to({_off:true},2).wait(96));

	// Символ 13
	this.instance_3 = new lib.bnn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(241.2,78.8,0.8,0.8,0,0,0,0.6,0.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:0.7,regY:0.2,scaleY:0.81,skewX:-7.6,x:73.2,y:78.6},5,cjs.Ease.get(1)).to({regX:0,regY:0,scaleY:0.8,skewX:0,x:81.1},2,cjs.Ease.get(1)).wait(79).to({scaleY:0.8,skewX:-5.3,x:77.1},0).to({x:-86.8},7,cjs.Ease.get(1)).to({_off:true},1).wait(183));

	// Символ 12
	this.instance_4 = new lib.bvvbn();
	this.instance_4.parent = this;
	this.instance_4.setTransform(237.2,32.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.82,skewX:-13.6,x:73.2},5,cjs.Ease.get(1)).to({scaleY:0.8,skewX:0,x:81.2},2).wait(79).to({scaleY:0.82,skewX:-13.6,x:77.2},0).to({x:-86.8},7,cjs.Ease.get(1)).to({_off:true},1).wait(184));

	// Layer 1
	this.instance_5 = new lib.hhjjhj();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.3,371.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({x:120,y:371,alpha:1},8,cjs.Ease.get(1)).wait(74).to({x:120.3,y:371.5,alpha:0},7).to({_off:true},1).wait(183));

	// Символ 10
	this.instance_6 = new lib.hhjjj();
	this.instance_6.parent = this;
	this.instance_6.setTransform(232.5,90.6,0.8,0.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(184).to({_off:false},0).to({regX:0.1,scaleY:0.85,skewX:-18.7,x:77},7,cjs.Ease.get(1)).to({regX:0,scaleY:0.8,skewX:0,x:80.5},3,cjs.Ease.get(1)).wait(78).to({regX:0.1,scaleY:0.81,skewX:-9.6,x:76.6},0).to({regX:-0.1,scaleY:0.87,skewX:-23,x:-71.5},5).wait(1));

	// Символ 9
	this.instance_7 = new lib.jhjhj();
	this.instance_7.parent = this;
	this.instance_7.setTransform(232.9,60.6,0.8,0.8,0,0,0,0,1.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(183).to({_off:false},0).to({scaleY:0.86,skewX:-21.6,x:77.3},7,cjs.Ease.get(1)).to({regY:0,scaleY:0.8,skewX:0,x:80.9,y:60.5},3,cjs.Ease.get(1)).wait(78).to({scaleY:0.83,skewX:-14.6,x:76.9},0).to({scaleY:0.85,skewX:-19.1,x:-71.1},5).to({_off:true},1).wait(1));

	// Символ 8
	this.instance_8 = new lib.jjjhhh();
	this.instance_8.parent = this;
	this.instance_8.setTransform(232.4,30.2,0.8,0.8,0,0,0,0.1,1.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(182).to({_off:false},0).to({scaleY:0.81,skewX:-8.9,x:76.8},7,cjs.Ease.get(1)).to({regX:0,regY:0,scaleY:0.8,skewX:0,x:80.3},3,cjs.Ease.get(1)).wait(78).to({regX:0.1,scaleY:0.82,skewX:-12.1,x:76.4},0).to({regX:-0.1,scaleY:0.85,skewX:-18.9,x:-71.7},5).to({_off:true},1).wait(2));

	// Символ 3
	this.instance_9 = new lib.h();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,200);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:70,alpha:1},94).to({x:20,alpha:0},87).to({_off:true},1).wait(96));

	// Символ 2
	this.instance_10 = new lib.hhhh();
	this.instance_10.parent = this;
	this.instance_10.setTransform(75,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:30,alpha:0},94).to({_off:true},1).wait(87).to({_off:false,x:120},0).to({x:75,alpha:1},95).wait(1));

	// Символ 1
	this.instance_11 = new lib.ghj();
	this.instance_11.parent = this;
	this.instance_11.setTransform(20,200);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(95).to({_off:false},0).to({x:70},87).to({x:120,alpha:0},95).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35,299.5,333.3,601);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/legal.png", id:"legal"},
		{src:"images/160x600_atlas_NP_.jpg", id:"160x600_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;