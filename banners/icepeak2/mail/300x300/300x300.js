(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x300_atlas_NP_", frames: [[0,0,300,300],[0,302,300,300],[0,604,300,300]]}
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
	this.spriteSheet = ss["300x300_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.spriteSheet = ss["300x300_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x300_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,39);// helper functions:

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


(lib.wwww = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wwww, new cjs.Rectangle(-120,-200,300,300), null);


(lib.wewe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wewe, new cjs.Rectangle(-120,-200,300,300), null);


(lib.ssss = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ssss, new cjs.Rectangle(-62,-11.5,124.2,23.1), null);


(lib.s = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.s, new cjs.Rectangle(-91.7,-15.6,183.5,31.3), null);


(lib.qqqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._0();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqqq, new cjs.Rectangle(-120,-200,300,300), null);


(lib.ff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.legal();
	this.instance.parent = this;
	this.instance.setTransform(-114,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ff, new cjs.Rectangle(-114,-16,226,39), null);


(lib.fdfdd = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.fdfdd, new cjs.Rectangle(-62.9,-11.8,126,23.7), null);


(lib.f = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.f, new cjs.Rectangle(-63.9,-14.5,127.9,27), null);


(lib.dfdfsdf = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.dfdfsdf, new cjs.Rectangle(-109.6,-23.5,219.4,47.1), null);


(lib.ddsdfsd = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ddsdfsd, new cjs.Rectangle(-74,-37.4,148.1,74.9), null);


(lib.ddf = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.ddf, new cjs.Rectangle(-104.5,-16.3,209.1,32.8), null);


(lib.dddd = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.dddd, new cjs.Rectangle(-50.3,-11.7,100.6,23.5), null);


// stage content:
(lib._300x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3W3WMAutAAAMAAAAutMgutAAAg");
	this.shape.setTransform(150,149.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(248));

	// logo
	this.instance = new lib.dfdfsdf();
	this.instance.parent = this;
	this.instance.setTransform(150,256.5,1,0.1,0,0,0,0,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({regY:0,scaleY:1},8,cjs.Ease.get(1)).wait(57).to({regY:0.5,scaleY:0.11},6,cjs.Ease.get(1)).to({_off:true},1).wait(86));

	// Символ 15
	this.instance_1 = new lib.ddf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(382,134.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(82).to({_off:false},0).to({scaleY:1.03,skewX:-13.7,x:145.8},5,cjs.Ease.get(1)).to({scaleY:1,skewX:0,x:152},2).wait(66).to({scaleY:1.02,skewX:-10.4,x:147},0).to({x:-83},6,cjs.Ease.get(1)).to({_off:true},1).wait(86));

	// Символ 14
	this.instance_2 = new lib.s();
	this.instance_2.parent = this;
	this.instance_2.setTransform(383.5,171.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).to({scaleY:1.03,skewX:-14.4,x:147.3},5,cjs.Ease.get(1)).to({scaleY:1,skewX:0,x:153.5},2).wait(64).to({scaleY:1.02,skewX:-12.6},0).to({x:-76.5},6,cjs.Ease.get(1)).to({_off:true},2).wait(86));

	// Символ 13
	this.instance_3 = new lib.ddsdfsd();
	this.instance_3.parent = this;
	this.instance_3.setTransform(259.9,76.3,0.9,0.9,0,0,0,0.7,0.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:0.8,scaleY:0.91,skewX:-7.6,x:71,y:76.2},5,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleY:0.9,skewX:0,x:79.8,y:76.1},2,cjs.Ease.get(1)).wait(69).to({scaleY:0.9,skewX:-5.3,x:75.3},0).to({regX:-0.2,x:-109.2},7,cjs.Ease.get(1)).to({_off:true},1).wait(163));

	// Символ 12
	this.instance_4 = new lib.f();
	this.instance_4.parent = this;
	this.instance_4.setTransform(275.6,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.03,skewX:-13.6,x:70.6},5,cjs.Ease.get(1)).to({scaleY:1,skewX:0,x:80.6},2).wait(69).to({scaleY:1.03,skewX:-13.6,x:75.6},0).to({x:-129.4},7,cjs.Ease.get(1)).to({_off:true},1).wait(164));

	// Layer 1
	this.instance_5 = new lib.ff();
	this.instance_5.parent = this;
	this.instance_5.setTransform(152.3,271.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(64).to({alpha:0},7).to({_off:true},1).wait(163));

	// Символ 10
	this.instance_6 = new lib.fdfdd();
	this.instance_6.parent = this;
	this.instance_6.setTransform(270,98.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(169).to({_off:false},0).to({scaleY:1.06,skewX:-18.7,x:75.5},7,cjs.Ease.get(1)).to({scaleY:1,skewX:0,x:80},3,cjs.Ease.get(1)).wait(63).to({scaleY:1.01,skewX:-9.6,x:75},0).to({scaleY:1.09,skewX:-23,x:-110},5).wait(1));

	// Символ 9
	this.instance_7 = new lib.ssss();
	this.instance_7.parent = this;
	this.instance_7.setTransform(268.5,60.7,1,1,0,0,0,0,1.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(168).to({_off:false},0).to({scaleY:1.08,skewX:-21.6,x:74},7,cjs.Ease.get(1)).to({regY:0,scaleY:1,skewX:0,x:79.5},3,cjs.Ease.get(1)).wait(63).to({scaleY:1.03,skewX:-14.6,x:73.5},0).to({scaleY:1.06,skewX:-19.1,x:-111.5},5).to({_off:true},1).wait(1));

	// Символ 8
	this.instance_8 = new lib.dddd();
	this.instance_8.parent = this;
	this.instance_8.setTransform(257,22.8,1,1,0,0,0,0,1.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(167).to({_off:false},0).to({regX:0.1,scaleY:1.01,skewX:-8.9,x:62.6},7,cjs.Ease.get(1)).to({regX:0,regY:0,scaleY:1,skewX:0,x:67,y:22.7},3,cjs.Ease.get(1)).wait(63).to({scaleY:1.02,skewX:-12.1,x:62},0).to({scaleY:1.06,skewX:-18.9,x:-123},5).to({_off:true},1).wait(2));

	// Символ 3
	this.instance_9 = new lib.wwww();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,200);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},84,cjs.Ease.get(1)).wait(1).to({alpha:0},76,cjs.Ease.get(1)).to({_off:true},1).wait(86));

	// Символ 2
	this.instance_10 = new lib.wewe();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0},84,cjs.Ease.get(0.5)).to({_off:true},1).wait(78).to({_off:false},0).to({alpha:1},84,cjs.Ease.get(1)).wait(1));

	// Символ 1
	this.instance_11 = new lib.qqqq();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120,200);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(85).to({_off:false},0).wait(78).to({alpha:0},84,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,149.5,340.1,301);
// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/legal.png", id:"legal"},
		{src:"images/300x300_atlas_NP_.jpg", id:"300x300_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;