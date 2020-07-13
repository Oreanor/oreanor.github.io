(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x250_atlas_", frames: [[0,252,300,250],[302,252,300,250],[0,0,300,250],[302,0,300,250],[604,0,300,250]]}
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


(lib.qqqqqqqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC082A").s().p("AgfAyIAAhjIA/AAIAAAQIgtAAIAAAXIAgAAIAAAOIggAAIAAAeIAsAAIAAAQg");
	this.shape.setTransform(121.6,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC082A").s().p("Ag2AyIAAhjIARAAIAABUIAdAAIAAhUIAQAAIAABUIAeAAIAAhUIARAAIAABjg");
	this.shape_1.setTransform(110.9,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC082A").s().p("AghAyIAAhjIARAAIAAAmIAOgBQAQAAAKAIQAKAIAAAPQAAAOgKAIQgKAJgQAAgAgQACIAAAhIAKAAQAWAAAAgRQAAgJgGgDQgFgFgKAAg");
	this.shape_2.setTransform(100.5,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC082A").s().p("AgqAiQAFAAAEgBQAEgCACgEQAEgEAFgNQAEgNACgOIAFggIAyAAIAABiIgSAAIAAhTIgUAAQgBAPgEAWQgEATgGAKQgFAKgIAEQgIAEgLAAg");
	this.shape_3.setTransform(90.8,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC082A").s().p("AggAlQgLgOABgXQAAgUALgQQAMgOATAAQAVAAALANQAMAOgBAXQAAAYgMANQgMAPgUAAQgVAAgKgPgAgSgZQgGAJAAAQQAAASAGAJQAGAJALAAQANAAAGgKQAHgIAAgSQAAgigZAAQgLAAgHAJg");
	this.shape_4.setTransform(81.4,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC082A").s().p("AghAyIAAhjIA7AAIAAAQIgpAAIAAAXIANAAQAQAAAKAIQAKAGAAAQQAAANgKAJQgKAIgQAAgAgPADIAAAgIAJAAQAMAAAEgEQAFgEAAgIQAAgHgEgFQgFgEgLAAg");
	this.shape_5.setTransform(72.6,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DC082A").s().p("AghAyIAAhjIARAAIAAAmIAOgBQAQAAAKAIQAKAIAAAPQAAAOgKAIQgKAJgQAAgAgQACIAAAhIALAAQAVAAAAgRQAAgJgGgDQgFgFgJAAg");
	this.shape_6.setTransform(60,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DC082A").s().p("AgJAyIAAhTIgfAAIAAgQIBRAAIAAAQIghAAIAABTg");
	this.shape_7.setTransform(51.1,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DC082A").s().p("AAYAzIgHgVIghAAIgHAVIgUAAIAohkIAHAAIAoBkgAgLARIAXAAIgMgkg");
	this.shape_8.setTransform(42.1,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DC082A").s().p("AAUAyIAAgtIgmAAIAAAtIgTAAIAAhjIATAAIAAAnIAmAAIAAgnIARAAIAABjg");
	this.shape_9.setTransform(32.9,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DC082A").s().p("AghAsIAIgQQAJAIAOAAQAHAAAGgDQAFgFAAgHQAAgJgGgEQgGgFgKAAIgKAAIAAgNIAKABQAJgBAEgDQAFgDAAgIQAAgFgEgDQgFgDgFAAQgJAAgLAFIgHgOQARgGALAAQAOgBAIAIQAJAHAAALQAAAHgEAGQgDAGgGACQAIAEAFAFQAEAHAAAJQAAAOgKAJQgKAHgRAAQgSAAgMgHg");
	this.shape_10.setTransform(24.2,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC082A").s().p("AghAiIADAAQAJAAAFgDQAGgDAEgGIgjhHIATAAIAaA5QALgWAJgjIASAAQgIAegNAZQgMAZgLAKQgMAJgTAAg");
	this.shape_11.setTransform(16.1,14.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AqmB7IgBgVIA0jLIAKgVQAPgVAcAAIS7AAQAhAAAHAYQAEAMgDANIg7DRQgDAHgIAIQgQAOgZAAIy7ABQgbAAgHgWg");
	this.shape_12.setTransform(68,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqqqqqqq, new cjs.Rectangle(0,0,136,28.9), null);


(lib.qqqqqqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjBIIgLgdIgwAAIgKAdIgcAAIA5iQIAKAAIA6CQgAgRAYIAiAAIgRg0g");
	this.shape.setTransform(135.4,54.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDBIIgdhOIgQBMIgYAAIAdiNIANAAIAeBfIAfhfIANAAIAdCNIgZAAIgOhMIgdBOg");
	this.shape_1.setTransform(121.3,54.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvA2QgPgUAAgiQAAgfARgVQARgVAcAAQAeAAAQATQARATAAAjQAAAhgSAVQgRAUgeAAQgdAAgQgUgAgbglQgJAOABAXQgBAZAJANQAIANARAAQATAAAJgNQAKgOAAgYQAAgygkAAQgRAAgKANg");
	this.shape_2.setTransform(106.5,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvBcIAAgpIhdAAIAAApIgWAAIAAg+IAKAAQAMgQALgZQAMgcALg0IBBAAIAAB5IAQAAIAAA+gAgKgMQgKAbgLAPIA8AAIAAhlIgZAAQgEAfgKAcg");
	this.shape_3.setTransform(92,56.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA2QgPgUAAgiQAAgfARgVQARgVAcAAQAeAAAQATQARATAAAjQgBAhgQAVQgSAUgeAAQgeAAgPgUgAgbglQgJAOAAAXQAAAZAJANQAJANAQAAQATAAAJgNQAKgOAAgYQAAgygkAAQgSAAgJANg");
	this.shape_4.setTransform(71.8,54.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBIIAAiOIBYAAIAAAWIg+AAIAAB4g");
	this.shape_5.setTransform(59.6,54.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBIIAAiOIBbAAIAAAWIhBAAIAAAiIAuAAIAAAUIguAAIAAArIBAAAIAAAXg");
	this.shape_6.setTransform(48.2,54.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhNBHIAAiNIAYAAIAAB4IAqAAIAAh4IAXAAIAAB4IArAAIAAh4IAXAAIAACNg");
	this.shape_7.setTransform(32.8,54.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAjBIIgLgdIgwAAIgKAdIgcAAIA6iQIAJAAIA6CQgAgQAYIAhAAIgRg0g");
	this.shape_8.setTransform(17.2,54.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvBIIAAiOIAogBQAWAAAMAJQANAKAAASQAAARgSAJQAaAJAAAdQAAATgOAMQgQALgWAAgAgWAEIAAAvIANABQAOAAAJgGQAIgFAAgOQAAgMgHgGQgHgGgRAAgAgWgxIAAAiIAMAAQAYAAAAgTQAAgQgVAAg");
	this.shape_9.setTransform(5.1,54.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNBIIAAh4IgtAAIAAgWIB1AAIAAAWIgwAAIAAB4g");
	this.shape_10.setTransform(109.6,31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBIIAAiOIAdgBQAgAAAQAKQARAKAAAXQAAAwg6AAIgMgBIAAA1gAgWgwIAAAuIALABQAQAAAJgGQAHgGABgOQAAgVgkAAIgIAAg");
	this.shape_11.setTransform(97.5,31);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguA1QgQgVAAggQAAgfARgVQARgVAcAAQAeAAAQATQARATAAAjQAAAhgSAVQgQAUgfAAQgdAAgPgVgAgaglQgJANAAAYQAAAYAIAOQAJANAQABQASgBAKgNQAKgOAAgYQAAgygkAAQgRAAgJANg");
	this.shape_12.setTransform(84.2,31.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLBMIAAgQQgcgCgPgQQgQgPAAgbQAAgYAQgQQAPgRAcgCIAAgQIAXAAIAAAQQAcACAQAQQAPAQAAAZQAAAZgQAQQgQARgbACIAAAQgAAMApQASgCAIgLQAJgKAAgSQAAgRgJgKQgJgLgRgCgAglgcQgJALAAARQAAARAJALQAJALARACIAAhRQgRABgJALg");
	this.shape_13.setTransform(69.3,31);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBJIgehPIgPBMIgYAAIAdiNIANAAIAeBfIAehfIANAAIAeCNIgZAAIgPhMIgdBPg");
	this.shape_14.setTransform(53.6,31.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguA2QgPgVAAghQgBggARgUQARgVAcAAQAfAAAPATQAQATABAjQAAAigRAUQgRAUgfAAQgdAAgPgUgAgaglQgJAOAAAXQAAAYAIAOQAKANAPAAQASAAAKgNQAKgOAAgYQAAgygkgBQgRAAgJAOg");
	this.shape_15.setTransform(38.8,31.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAYBDQgHgHgDgPQgEgVgJgIQgIgJgSAAIgBAAIAABBIgaAAIAAiPIAaAAIAAA5IACAAQARAAAIgIQAKgIACgPQADgOAGgGQAHgGAMgBIAKABIAAAXIgFgBQgDAAgDACQgBACgCAIQgDAMgIAKQgJAIgOAEQAPADAIAJQAJAKADARQABAIACAEQACACAFgBIAEAAIAAAXIgIABQgNgBgHgFg");
	this.shape_16.setTransform(25.6,31.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag3BKIAAiRIAaAAIAABgIBJhiIAMAAIAACRIgaAAIAAhgIhKBig");
	this.shape_17.setTransform(5.9,31.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAjBJIgLgdIgvAAIgKAdIgdAAIA5iQIAKAAIA6CQgAgQAYIAhAAIgRgzg");
	this.shape_18.setTransform(84.3,7.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNBIIAAh4IgtAAIAAgWIB1AAIAAAWIgvAAIAAB4g");
	this.shape_19.setTransform(71.4,7.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvA2QgPgVAAghQAAgfARgVQASgVAbAAQAeAAAQATQARATAAAjQAAAigSAUQgQAUgfAAQgdAAgQgUgAgaglQgJANAAAYQAAAaAIAMQAJAOAQgBQASABAKgOQAKgNAAgZQAAgzgkABQgRgBgJAOg");
	this.shape_20.setTransform(57.9,7.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNBIIAAh4IguAAIAAgWIB3AAIAAAWIgxAAIAAB4g");
	this.shape_21.setTransform(44.3,7.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglA3QgQgVAAghQAAgfASgWQASgVAcAAQAYAAAPAKIgKAVQgJgJgSAAQgSABgLAPQgLARAAAUQAAAWAKAOQALAOARAAQAUAAALgPIAMAVQgPAQgeAAQgdAAgRgTg");
	this.shape_22.setTransform(31.8,7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag3BKIAAiRIAaAAIAABgIBKhiIALAAIAACQIgaAAIAAhfIhJBig");
	this.shape_23.setTransform(18.5,7.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAYBHIAAg5QgMADgMABQgWgBgOgLQgNgLAAgVIAAgsIAaAAIAAAqQAAANAHAGQAHAGAMAAQAMAAAJgCIAAhBIAaAAIAACNg");
	this.shape_24.setTransform(5,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqqqqqq, new cjs.Rectangle(0,0,141.7,66), null);


(lib.qqqqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BKIAAiRIAaAAIAABgIBKhiIALAAIAACQIgaAAIAAheIhKBhg");
	this.shape.setTransform(70,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYBCQgIgHgCgOQgDgUgKgJQgIgJgSAAIgBAAIAABBIgZAAIAAiOIAZAAIAAA4IACAAQARAAAIgHQAKgIADgQQACgNAGgHQAGgGANAAIAJAAIAAAXIgEgBQgEAAgCADQgCABgBAIQgDANgJAJQgIAIgOADQAPAEAIAJQAIAKAEASQABAHACAEQACABAFAAIAEAAIAAAXIgIABQgNAAgHgHg");
	this.shape_1.setTransform(56.8,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBIIAAiOIAdgBQAgAAAQAKQAQAKABAXQgBAwg4AAIgMgBIAAA1gAgVgwIAAAuIAKAAQAQABAIgHQAIgEAAgPQAAgVgjAAg");
	this.shape_2.setTransform(44.6,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA2QgOgUAAgjQgBgeARgVQASgVAbAAQAeAAAQATQAQATAAAiQAAAjgQAUQgSAUgeAAQgdAAgQgUgAgaglQgJANAAAXQgBAaAKANQAIAOAQAAQATAAAJgOQAKgOAAgZQAAgxgkAAQgRAAgJANg");
	this.shape_3.setTransform(31.3,54.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvBHIAAiNIBVAAIAAAVIg8AAIAAAjIASgBQAYAAAOALQAOAKAAAWQAAAUgOAMQgOALgYAAgAgWAEIAAAvIAOAAQAQAAAHgGQAHgHAAgLQAAgKgHgHQgGgGgRAAg");
	this.shape_4.setTransform(18.6,54.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwAxIAEAAQANAAAIgEQAIgFAGgJIgzhmIAcAAIAlBSQAQggAOgyIAaAAQgNAtgSAiQgSAlgQAOQgRANgbAAg");
	this.shape_5.setTransform(6.1,54.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBIIAAiOIApgBQAVAAANAJQANAKAAASQAAARgTAKQAcAIgBAdQAAAUgPALQgOALgXAAgAgWAEIAAAvIANABQAPAAAHgGQAJgFAAgOQAAgMgHgGQgIgGgQAAgAgWgxIAAAiIANAAQAXAAAAgSQAAgRgVAAg");
	this.shape_6.setTransform(60.6,31);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguA2QgQgUAAgiQAAgfARgVQARgVAcAAQAeAAAQATQAQATAAAjQAAAigQAUQgSAUgeAAQgdAAgPgUgAgaglQgJAOAAAXQAAAZAIANQAKANAPABQASgBALgNQAJgOAAgYQAAgygkAAQgRAAgJANg");
	this.shape_7.setTransform(47.3,31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaBHIAAh3Ig0AAIAAB3IgZAAIAAiNIBnAAIAACNg");
	this.shape_8.setTransform(33.6,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3BKIAAiRIAaAAIAABgIBKhiIALAAIAACQIgZAAIAAhfIhKBig");
	this.shape_9.setTransform(19.9,31.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNBIIAAh4IgtAAIAAgWIB2AAIAAAWIgxAAIAAB4g");
	this.shape_10.setTransform(6.4,31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgBHIghgzIgfAzIgbAAIArhJIgnhEIAaAAIAdAwIAfgwIAaAAIgtBFIAwBIg");
	this.shape_11.setTransform(89.1,7.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtBHIAAiNIBbAAIAAAWIhCAAIAAAiIAvAAIAAAUIgvAAIAAArIBAAAIAAAWg");
	this.shape_12.setTransform(77.5,7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglA3QgRgUAAgiQAAgeATgWQASgWAcAAQAYAAAPAKIgKAVQgJgJgSABQgSAAgLAPQgLAPAAAWQAAAVAKAOQAKAOASABQAUgBAMgOIAMAVQgQAQgfAAQgcAAgRgTg");
	this.shape_13.setTransform(65.5,7.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBIIAAiOIAogBQAVAAANAJQANAKAAASQAAARgSAKQAaAIAAAdQAAAUgPALQgNALgYAAgAgWAzIANABQAOAAAJgGQAIgFAAgOQAAgMgHgGQgGgFgSAAIgNAAgAgWgxIAAAiIAMAAQAYAAAAgSQAAgRgVAAg");
	this.shape_14.setTransform(53.6,7.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag0BJIAAgYIAEABQAFAAABgDQACgDACgHQAFgYAXgJQgSgEgHgJQgIgIAAgNQABgSANgMQANgMAbAAQAVAAAVACIAACNIgZAAIAAg7IgGAAQgRAAgIAIQgKAJgDARQgDAPgGAGQgHAGgMAAgAgJguQgJAFAAAKQAAAYAgAAIAOAAIAAgrIgTgCQgLAAgHAGg");
	this.shape_15.setTransform(34.5,7.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag8AxQAHAAAFgCQAEgCAFgGQAFgGAGgSQAHgTADgVQAFgaADgUIBHAAIAACOIgZAAIAAh5IgcAAQgDAegFAZQgGAagIAPQgJAQgLAFQgLAFgPAAg");
	this.shape_16.setTransform(20.9,7.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAvBcIAAgpIhdAAIAAApIgWAAIAAg+IAJAAQAMgPAMgaQAMgbALg1IBBAAIAAB5IAQAAIAAA+gAgKgMQgJAZgMARIA8AAIAAhkIgZAAQgEAfgKAbg");
	this.shape_17.setTransform(7.1,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqqqq, new cjs.Rectangle(0,0,95.1,62.1), null);


(lib.qqqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BKIAAiRIAZAAIAABgIBKhiIAMAAIAACRIgaAAIAAhgIhKBig");
	this.shape.setTransform(85.2,35.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXBCQgGgGgDgPQgDgUgKgJQgJgJgRAAIgBAAIAABBIgZAAIAAiPIAZAAIAAA5IACAAQARAAAIgHQAKgIACgQQAEgNAFgHQAGgHANAAIAJABIAAAWIgDAAQgFAAgCACQgDAEAAAGQgDALgIALQgKAJgNADQANADAKAJQAJAKACASQADAJABACQACACAFAAIAFgBIAAAXIgJABQgOAAgHgHg");
	this.shape_1.setTransform(72,35.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBIIAAh4IgtAAIAAgXIB1AAIAAAXIgvAAIAAB4g");
	this.shape_2.setTransform(58.8,35.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglA2QgQgTAAgjQAAgdASgWQASgWAdAAQAXAAAQAKIgLAVQgIgJgTAAQgSAAgLAQQgLARAAATQAAAXAKAOQAKANASABQAUgBAMgOIALAVQgPAQgeAAQgdAAgRgUg");
	this.shape_3.setTransform(46.3,35.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BKIAAiRIAaAAIAABgIBKhiIALAAIAACRIgaAAIAAhgIhKBig");
	this.shape_4.setTransform(33,35.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYBIIAAg5QgKACgOAAQgXAAgNgLQgNgLAAgVIAAgtIAaAAIAAArQABAMAGAHQAIAHALAAQAKAAALgDIAAhCIAaAAIAACPg");
	this.shape_5.setTransform(19.5,35.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguA2QgQgUAAgiQAAgeARgWQARgVAcAAQAeAAAQATQARATAAAjQAAAigSAUQgQAUgfAAQgdAAgPgUgAgaglQgJAOAAAXQAAAYAIAPQAJAMAQAAQASABAKgOQAKgNAAgZQAAgzgkABQgRAAgJANg");
	this.shape_6.setTransform(6.3,35.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag3BgIAAiRIAZAAIAABgIBKhiIALAAIAACRIgZAAIAAhgIhKBigAgUhEQgLgJgCgNIAUgFQADASANAAQAOAAACgRIAUAEQgDAOgKAIQgJAIgPAAQgNAAgJgIg");
	this.shape_7.setTransform(167.2,9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguA2QgQgUAAgiQAAgeARgWQARgVAcAAQAeAAAQATQARATAAAjQAAAhgSAVQgQAUgfAAQgdAAgPgUgAgaglQgJAOAAAXQAAAYAIAOQAJANAQAAQASAAAKgNQAKgOAAgYQAAgzgkAAQgRAAgJAOg");
	this.shape_8.setTransform(153.1,11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYBCQgHgGgDgPQgDgUgKgJQgIgJgSAAIgBAAIAABBIgZAAIAAiPIAZAAIAAA5IACAAQARAAAIgHQAKgHADgRQACgNAGgHQAHgHAMAAIAJABIAAAWIgEAAQgEAAgCACQgCACgBAIQgDANgJAJQgIAJgOADQAOADAJAKQAIAKAEARQABAHACAEQACACAFAAIAEgBIAAAXIgIABQgOAAgGgHg");
	this.shape_9.setTransform(139.9,11.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsBIIAAiPIBZAAIAAAXIg/AAIAAB4g");
	this.shape_10.setTransform(128.2,11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgtBbIAAiOIBbAAIAAAWIhBAAIAAAhIAuAAIAAAWIguAAIAAArIA/AAIAAAWgAAOhDQgEgFAAgFQAAgFAEgEQADgEAGAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgEAAgFgEgAgdhDQgEgEAAgGQAAgGAEgDQADgEAGAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_11.setTransform(116.7,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag8AxQAFAAAHgCQAEgBAGgHQAGgJAFgPQAFgPAFgZIAGguIBIAAIAACOIgZAAIAAh4IgcAAQgCAcgGAaQgGAZgIAQQgJAPgLAGQgKAFgQAAg");
	this.shape_12.setTransform(103.1,11.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAjBJIgLgdIgwAAIgKAdIgcAAIA5iRIAKAAIA6CRgAgRAYIAhAAIgQg0g");
	this.shape_13.setTransform(84.3,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBJIgdhOIgQBMIgYAAIAdiPIANAAIAeBgIAehgIAOAAIAdCPIgZAAIgOhMIgdBOg");
	this.shape_14.setTransform(70.1,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtBIIAAiPIBbAAIAAAXIhBAAIAAAhIAuAAIAAAVIguAAIAAArIBAAAIAAAXg");
	this.shape_15.setTransform(56.8,11.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNBIIAAh4IgtAAIAAgXIB1AAIAAAXIgvAAIAAB4g");
	this.shape_16.setTransform(44.3,11.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglA2QgQgTAAgiQAAgeASgXQATgVAcAAQAYAAAPAKIgKAVQgKgJgSAAQgSAAgLAQQgLAQAAAUQAAAXALANQAJAOASAAQAUAAALgOIAMAVQgPAQgeAAQgcAAgSgUg");
	this.shape_17.setTransform(31.8,11.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag3BKIAAiRIAaAAIAABgIBKhiIALAAIAACRIgaAAIAAhgIhKBig");
	this.shape_18.setTransform(18.5,11.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglA2QgQgTAAgiQAAgfASgWQASgVAcAAQAYAAAPAKIgKAVQgIgJgTAAQgRAAgMAQQgLAPAAAVQAAAXAKANQAKAOASAAQAUAAALgOIANAVQgQAQgeAAQgdAAgRgUg");
	this.shape_19.setTransform(5.5,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqqq, new cjs.Rectangle(0,0,172.7,42.8), null);


(lib.qqq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjBJIgLgeIgwAAIgJAeIgdAAIA5iQIAKAAIA6CQgAgRAYIAhAAIgQg0g");
	this.shape.setTransform(121.5,54.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguBIIAAiOIAdgBQAhAAAPAKQAQALAAAWQAAAwg5AAIgLgBIAAA1gAgVgwIAAAuIAKABQAQAAAJgGQAHgHAAgMQAAgWgiAAg");
	this.shape_1.setTransform(109.6,54.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtBIIAAiPIBbAAIAAAXIhBAAIAAAiIAuAAIAAAUIguAAIAAArIA/AAIAAAXg");
	this.shape_2.setTransform(97.8,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAdBIIAAhBIg4AAIAABBIgaAAIAAiOIAaAAIAAA3IA4AAIAAg3IAZAAIAACOg");
	this.shape_3.setTransform(84.9,54.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BfIAAiQIAaAAIAABfIBKhhIAKAAIAACQIgZAAIAAhfIhKBhgAgUhEQgKgIgCgPIAUgEQACASANAAQAPAAACgSIATAEQgCAPgKAIQgJAHgQAAQgMAAgKgHg");
	this.shape_4.setTransform(70.7,52.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBHIAAiOIBbAAIAAAXIhBAAIAAAhIAuAAIAAAVIguAAIAAArIBAAAIAAAWg");
	this.shape_5.setTransform(58.2,54.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBHIAAh3IgtAAIAAgWIB1AAIAAAWIgvAAIAAB3g");
	this.shape_6.setTransform(45.6,54.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBHIAAhAIg4AAIAABAIgaAAIAAiOIAaAAIAAA5IA4AAIAAg5IAZAAIAACOg");
	this.shape_7.setTransform(32.3,54.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguA2QgQgUABgiQAAgfARgVQAQgVAcAAQAeAAAQATQARATAAAjQAAAjgSATQgRAUgeAAQgdAAgPgUgAgaglQgJAOAAAXQAAAYAJAOQAHANARAAQASAAAKgNQAKgNAAgZQAAgygkAAQgRAAgJANg");
	this.shape_8.setTransform(18.4,54.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXBCQgGgGgDgPQgDgUgKgJQgJgJgRAAIgBAAIAABBIgZAAIAAiOIAZAAIAAA4IACAAQARAAAIgHQAKgIACgPQAEgOAFgHQAGgHAOAAIAIABIAAAXIgEgBQgDAAgDACIgDAKQgCAMgKAKQgJAJgMADQAOADAIAKQAJAKACARQADAJACACQACACAFAAIADgBIAAAXIgIABQgOAAgHgHg");
	this.shape_9.setTransform(5.3,54.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwBHIAAiNIAZAAIAAA1IAVgBQAYAAANAMQAOALAAAWQAAAUgOAMQgNAMgYAAgAgXADIAAAwIAPAAQAfAAAAgZQAAgMgIgGQgHgHgPABIgQABg");
	this.shape_10.setTransform(138.2,31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNBIIAAh4IgtAAIAAgWIB1AAIAAAWIgvAAIAAB4g");
	this.shape_11.setTransform(125.3,31.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglA2QgQgTAAgjQAAgeASgWQASgVAcAAQAZAAAPAKIgLAVQgIgJgTABQgSgBgLAQQgLAPAAAWQAAAVAKAOQALAPARAAQAUAAAMgPIALAVQgPAQgeAAQgeAAgQgUg");
	this.shape_12.setTransform(112.8,31.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgvA2QgPgVAAghQABgfAQgVQARgVAcAAQAeAAAQATQARATAAAjQAAAigSAUQgRAUgeAAQgcAAgRgUgAgaglQgJANAAAYQAAAZAIANQAJAOAQAAQASAAAKgOQAKgNAAgZQAAgzgkABQgRAAgJANg");
	this.shape_13.setTransform(99.6,31.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBJIgdhOIgQBMIgYAAIAdiPIANAAIAeBgIAehgIAOAAIAdCPIgZAAIgOhMIgdBOg");
	this.shape_14.setTransform(84.7,31.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag2BKIAAiQIAZAAIAABfIBKhiIAKAAIAACRIgZAAIAAhgIhKBig");
	this.shape_15.setTransform(69.9,31);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNBIIAAh4IgtAAIAAgXIB1AAIAAAXIgvAAIAAB4g");
	this.shape_16.setTransform(56.4,31.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglA2QgRgTAAgiQAAgfASgWQATgVAcAAQAZAAAPAKIgLAVQgIgJgTABQgSgBgLAQQgLAOAAAWQAAAWAKAOQALAOARAAQAUAAALgOIANAUQgQARgfAAQgcAAgRgUg");
	this.shape_17.setTransform(43.9,31.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgtBIIAAiOIBbAAIAAAWIhBAAIAAAhIAuAAIAAAVIguAAIAAArIA/AAIAAAXg");
	this.shape_18.setTransform(32.1,31.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDBJIgehPIgPBNIgYAAIAciPIAOAAIAeBgIAfhgIANAAIAdCPIgZAAIgPhNIgcBPg");
	this.shape_19.setTransform(18.3,31.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgwBIIAAiOIAqgBQAUAAANAJQANAKAAASQAAAQgTAKQAbAJABAdQAAAUgQALQgOALgWAAgAgWAEIAAAvIANABQAPAAAIgGQAIgFAAgOQAAgMgHgGQgIgGgQAAgAgWgxIAAAiIANAAQAXAAAAgSQAAgRgWAAg");
	this.shape_20.setTransform(4.9,31);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag0BIIAAgWIADAAQAFAAACgDQADgCABgHQAFgZAXgJQgSgEgIgIQgHgKAAgMQAAgSAOgMQANgMAbAAIAqACIAACOIgZAAIAAg8IgHAAQgPAAgJAJQgJAHgEASQgDAPgGAGQgGAGgMAAIgJgBgAgKguQgIAGAAAKQAAAWAgABIAOAAIAAgrIgTgBQgMAAgHAFg");
	this.shape_21.setTransform(180.4,7.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAjBIIgKgcIgxAAIgKAcIgcAAIA5iQIAKAAIA6CQgAgQAYIAhAAIgRg0g");
	this.shape_22.setTransform(168,7.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAdBHIAAhAIg4AAIAABAIgaAAIAAiOIAaAAIAAA5IA4AAIAAg5IAZAAIAACOg");
	this.shape_23.setTransform(154.7,7.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgwBHIAAiOIAZAAIAAA2IAUgBQAYAAAOAMQAOALAAAWQAAAVgOALQgOAMgYAAgAgXADIAAAwIAPAAQAfAAAAgZQAAgMgIgGQgIgHgOABg");
	this.shape_24.setTransform(142.2,7.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag8AxQAHAAAEgCQAFgCAFgGQAFgGAHgSQAEgPAFgZQAFgaADgUIBHAAIAACOIgaAAIAAh5IgbAAQgDAegFAZQgGAagJAPQgJAPgKAGQgLAFgPAAg");
	this.shape_25.setTransform(128.2,7.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgtBIIAAiPIBbAAIAAAXIhBAAIAAAhIAuAAIAAAVIguAAIAAArIBAAAIAAAXg");
	this.shape_26.setTransform(116.3,7.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNBHIAAh3IgtAAIAAgXIB1AAIAAAXIgvAAIAAB3g");
	this.shape_27.setTransform(103.7,7.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag3BKIAAiQIAaAAIAABeIBKhhIALAAIAACQIgaAAIAAhfIhKBig");
	this.shape_28.setTransform(90.2,7.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAZBHIAAg4QgNADgMgBQgWABgOgMQgNgLAAgVIAAgtIAaAAIAAArQAAANAHAGQAHAGAMAAQAJABANgDIAAhCIAZAAIAACOg");
	this.shape_29.setTransform(76.7,7.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTA4QgOgSgBgfIgXAAIAABAIgZAAIAAiOIAZAAIAAA4IAYAAQAEgbAPgQQAPgPAWAAQAeAAAOAUQAQATAAAiQAAAggQAWQgRAUgcAAQgZAAgQgSgAgBgkQgIAPAAAVQAAAYAIAOQAHAOARAAQARAAAIgPQAJgOABgXQAAgzgjAAQgRAAgHAPg");
	this.shape_30.setTransform(61.4,7.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag8AxQAHAAAFgCQAFgCAFgGQAFgGAGgSQAFgPAFgZQAEgVACgZIBIAAIAACOIgZAAIAAh5IgcAAQgDAegFAZQgGAagIAPQgJAPgLAGQgLAFgPAAg");
	this.shape_31.setTransform(44.1,7.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAYBDQgHgHgCgPQgFgUgJgJQgIgKgSAAIgBAAIAABCIgaAAIAAiOIAaAAIAAA4IACAAQARAAAIgIQAKgIACgOQADgPAHgGQAFgHANABIAJAAIAAAWIgEAAQgEAAgCADQgCABgBAIQgDANgJAJQgIAJgNACQAOAEAIAJQAJALADARQABAJACACQADACAFAAIADgBIAAAXIgIAAQgNAAgHgFg");
	this.shape_32.setTransform(31.6,7.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AglA2QgQgUAAghQAAgfARgVQATgWAcAAQAZAAAPAKIgLAVQgJgJgTABQgRAAgLAPQgLAPAAAWQAAAWAKANQALAPAQAAQAUgBAMgOIANAVQgQAQgfAAQgcAAgRgUg");
	this.shape_33.setTransform(18.9,7.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag3BKIAAiQIAaAAIAABeIBKhhIALAAIAACRIgZAAIAAhfIhLBhg");
	this.shape_34.setTransform(5.6,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qqq, new cjs.Rectangle(0,0,185.7,62.1), null);


(lib.q = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsBIIAAiOIAZAAIAACOgAhEBIIAAiOIAYAAIAAA2IASgCQAZAAANAMQAOAKAAAXQAAATgOANQgNANgZAAgAgsADIAAAvIANABQATAAAGgIQAGgGAAgMQAAgLgGgGQgHgGgRAAg");
	this.shape.setTransform(101.1,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglA2QgQgTAAgiQAAgfARgVQATgWAcAAQAZAAAOAKIgKAVQgKgIgSAAQgRAAgLAPQgLAPAAAWQAAAVAKAPQALANARAAQAUAAALgOIANAVQgQAQgfAAQgdAAgQgUg");
	this.shape_1.setTransform(86.7,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguA2QgQgVAAgiQAAgdARgWQARgVAcAAQAeAAAQATQARATAAAiQAAAjgSAUQgQAUgfAAQgdAAgPgUgAgaglQgJAOAAAWQAAAZAIAOQAJANAQAAQASAAAKgNQAKgOAAgZQAAgxgkAAQgRAAgJANg");
	this.shape_2.setTransform(73.4,31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglA2QgQgTAAgiQgBgeATgWQASgWAcAAQAZAAAOAKIgKAVQgJgIgSAAQgSAAgLAPQgLAQAAAVQAAAVAKAPQAKANASAAQAUAAAMgOIALAVQgPAQgeAAQgeAAgQgUg");
	this.shape_3.setTransform(60.4,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtBIIAAiOIBbAAIAAAWIhBAAIAAAiIAuAAIAAAUIguAAIAAArIBAAAIAAAXg");
	this.shape_4.setTransform(48.6,31.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8AxQAIAAAEgCQAFgCAFgGQAFgGAGgSQAGgTAEgVQAEgVACgZIBIAAIAACOIgZAAIAAh5IgcAAQgDAegFAZQgGAagIAPQgJAPgLAGQgLAFgPAAg");
	this.shape_5.setTransform(35,31.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsBIIAAiOIAZAAIAACOgAhEBIIAAiOIAYAAIAAA2IATgCQAYAAANAMQAOAKAAAXQAAAUgOAMQgNANgZAAgAgsADIAAAvIAOABQASAAAHgIQAFgGAAgMQAAgLgGgGQgHgGgQAAg");
	this.shape_6.setTransform(20.2,31.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaBIIAAh4Ig0AAIAAB4IgZAAIAAiOIBnAAIAACOg");
	this.shape_7.setTransform(5.2,31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgtBIIAAiOIBbAAIAAAWIhBAAIAAAhIAuAAIAAAVIguAAIAAArIBAAAIAAAXg");
	this.shape_8.setTransform(170.7,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAsBIIAAiPIAZAAIAACPgAhEBIIAAiPIAZAAIAAA2IASgBQAZAAAMAMQAOALAAAVQAAAVgOANQgNAMgZAAgAgrADIAAAvIANABQASAAAHgIQAFgGAAgMQAAgKgGgHQgHgGgQAAg");
	this.shape_9.setTransform(156.3,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdBHIAAhAIg4AAIAABAIgaAAIAAiOIAaAAIAAA4IA4AAIAAg4IAZAAIAACOg");
	this.shape_10.setTransform(141,7.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdBHIAAhAIg4AAIAABAIgaAAIAAiOIAaAAIAAA4IA4AAIAAg4IAZAAIAACOg");
	this.shape_11.setTransform(127.3,7.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguA2QgPgUAAgiQAAgfAQgVQARgVAcAAQAeAAAQATQAQATABAjQgBAigRAUQgRAUgeAAQgdAAgPgUgAgaglQgJANAAAYQAAAZAJANQAIAOAQAAQASAAAKgOQALgOgBgYQAAgzgkAAQgRAAgJAOg");
	this.shape_12.setTransform(113.5,7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag2BKIAAiQIAZAAIAABfIBKhiIALAAIAACRIgaAAIAAhgIhKBig");
	this.shape_13.setTransform(99.4,7.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAkBcIAAgpIheAAIAAiOIAaAAIAAB4IAxAAIAAh4IAZAAIAAB4IARAAIAAA/g");
	this.shape_14.setTransform(86.1,9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAjBJIgLgdIgwAAIgKAdIgcAAIA5iQIALAAIA5CQgAgRAYIAiAAIgRgzg");
	this.shape_15.setTransform(72.4,7.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvBIIAAiOIAogBQAWAAAMAJQANAKAAASQAAARgSAKQAaAIAAAdQAAAUgOALQgPALgWAAgAgWAEIAAAvIANABQAOAAAJgGQAIgFAAgOQAAgMgHgGQgHgGgRAAgAgWgxIAAAiIANAAQAXAAAAgSQAAgRgVAAg");
	this.shape_16.setTransform(60.3,7.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgvA2QgOgVAAghQAAgfAQgVQARgVAcAAQAeAAAQATQAQATABAjQAAAigSAUQgRAUgeAAQgdAAgQgUgAgaglQgJANAAAYQAAAaAJAMQAIAOAQAAQASAAAKgOQAKgNAAgZQAAgzgkAAQgRAAgJAOg");
	this.shape_17.setTransform(47,7.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcBIIAAhBIg3AAIAABBIgaAAIAAiOIAaAAIAAA3IA3AAIAAg3IAaAAIAACOg");
	this.shape_18.setTransform(33.1,7.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAdBIIAAhBIg4AAIAABBIgaAAIAAiOIAaAAIAAA3IA4AAIAAg3IAZAAIAACOg");
	this.shape_19.setTransform(19.4,7.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BKIAAiQIAZAAIAABfIBJhiIALAAIAACRIgZAAIAAhgIhKBig");
	this.shape_20.setTransform(5.6,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.q, new cjs.Rectangle(0,0,175.3,38.5), null);


(lib.p5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5, new cjs.Rectangle(0,0,300,250), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,300,250), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,300,250), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,300,250), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,300,250), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkDD9QhshwAAiNQAAiXBshsQBshsCXAAQCYAABsBsQBsBrAACYQAACYhsBsQhsBsiYAAQiUAAhvhzg");
	mask.setTransform(73.6,73.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#D22D3E","#CB2D3C","#C92D3B","#B82B34","#B42B33","#AA2A2F","#A2292C","#992929","#75221C"],[0,0.047,0.051,0.082,0.161,0.439,0.502,0.694,0.835,1,1],26.2,26.2,-32.3,-32.3).s().p("ArfAAILfrfILgLfIrgLgg");
	this.shape.setTransform(73.6,73.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(36.8,36.8,73.7,73.6), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj9D+QhqhpAAiVQAAiUBqhpQBphqCUAAQCVAABpBqQBqBpAACUQAACVhqBpQhpBqiVAAQiUAAhphqg");
	mask.setTransform(70.3,70.3);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.514,0.671,0.973,1,1],-23.1,-31.3,33.6,45.6).s().p("Aq+hpIMopVIJVMoIsoJVg");
	this.shape.setTransform(70.3,70.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(34.4,34.4,71.9,71.9), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj4D6QhohoAAiSQAAiRBohoQBnhnCRAAQCSAABnBnQBoBoAACRQAACThoBnQhnBniSAAQiRAAhnhng");
	mask.setTransform(69,69);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.224,0.475,0.957,1,1],-22.6,-30.6,33.1,44.9).s().p("AqxhnIMZpKIJKMaIsZJJg");
	this.shape.setTransform(69,69);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(33.8,33.7,70.6,70.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxAJQgHgHADgPIATAAQAAAMAKgEQAFgBAFgHIARAAQgLAUgUAGIgJABQgHAAgFgFgAAWgNIAhAAIgLAFIgJABQgIAAgFgGg");
	mask.setTransform(7.2,6.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],33.4,20.2,-38.3,-23.2).s().p("AhFAIIAshJIBfA6IgsBJg");
	this.shape.setTransform(7,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],33.4,20.2,-38.3,-23.2).s().p("AhFAIIAshJIBfA6IgsBJg");
	this.shape_1.setTransform(7,6.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(1.7,5,11,2.8), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhhBGQgGgHADgRQADgRALgNQALgNAPgEIAJgBQAKAAAEAHQAFAIgDAOQgGAegYANgAhAAQQgNAEgDAVQgEAQAJAAIADgBQANgDAEgUQADgRgIAAIgEAAgAiHBGQAEgEADgMQADgTgMADQgNAFgEATIgBAIIgTAAIAAgCQAEgRALgOQALgNAPgEIAIgCQAKAAAFAJQAEAIgCAOQgDALgGAKgAgbgLIAWgHIACAqIAAAAIAVgzIAWgHIgmBVIgXAIgAAyglIAsgNIgEATIgXAJIgCAJIAUgHIgEATIgTAFIgCAKIAXgJIgEAVIgtAPgABzg5IApgMIAHgBQAPAAgEARQgDAPgLAHQAIABgCAOQgCANABADIgVAFIAAgKIABgKQgCgDgFABIgKABIgHAeIgWAGgACPgwIgKADIgEAPIAMgDQAJgDACgHQABgGgGAAIgEABg");
	mask.setTransform(23.7,22.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],28.2,17.1,-43.7,-26.4).s().p("AjtAhICckDIE/DDIidEBg");
	this.shape.setTransform(23.8,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],28.2,17.1,-43.7,-26.4).s().p("AjtAhICckDIE/DDIidEBg");
	this.shape_1.setTransform(23.8,22.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(6.3,15.6,35,14.1), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAhehegAhEAbIhADxQA+AfBGAAQB8AABYhYQBXhXAAh8QAAgrgNgqgAkbBeQARA0AiAqQAhApAuAbIA7jdIhNAYIgXBWIgaAIIAXhWgAj0irQg2BNAABeQAAAoALApIBegfIBZlJQhWAhg2BLgAhOkfIhYFJIBNgYIA0jEIAagHIg0DCIFZhsQgghZhMg2QhOg4hgAAQglAAgpALg");
	mask.setTransform(60.6,60.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],36.8,22.4,-34.9,-21.1).s().p("ApdCUIHJrxILyHJInJLyg");
	this.shape.setTransform(60.6,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],36.8,22.4,-34.9,-21.1).s().p("ApdCUIHJrxILyHJInJLyg");
	this.shape_1.setTransform(60.6,60.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(28.5,28.5,64.3,64.2), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(288));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOANIAGAAQAAAIAIAAQAKAAAAgKQAAgJgKgBIAAAAIAAgCIAAAAQAJAAAAgJQAAgKgJAAQgHAAgBAJIgFAAQABgHAEgDQAEgEAEAAQAGAAAEAFQAEADAAAGQAAAJgHACQAIACAAAJQAAAHgEAEQgEADgHAAQgNAAgBgMg");
	this.shape_1.setTransform(164.2,237.2,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAWQgDgEgBgFIAFAAQACAIAGAAQADAAADgCQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEAAQAFAAAEADQAEAEAAAIQAAAKgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_2.setTransform(159.9,237.3,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEAZIAAgIIgSAAIAAgEIARglIAFAAIgRAlIANAAIAAgOIAFAAIAAAOIAGAAIAAAEIgGAAIAAAIg");
	this.shape_3.setTransform(155.5,237.2,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNALIAAgWQAAgNANAAQAGAAAEADQADAEAAAGIAAAWQAAAHgDADQgEAEgGAAQgNAAAAgOgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_4.setTransform(151.1,237.3,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_5.setTransform(146.8,237.2,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_6.setTransform(142.3,237.3,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAVQgEgEAAgGQAAgFADgGIAMgYIAFAAIgKAWIAEgBQAGAAADADQAEAEAAAGQAAAHgEAEQgEAEgGAAQgFAAgEgEgAgIALQAAAKAIAAQAJAAAAgKQAAgKgJAAQgIAAAAAKg");
	this.shape_7.setTransform(137.9,237.3,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAZIAKgXIgEACQgGgBgDgDQgEgEAAgGQAAgOANAAQAOAAAAAOQAAAFgDAFIgMAZgAgIgKQAAAKAIAAQAJAAAAgKQAAgKgJABQgIgBAAAKg");
	this.shape_8.setTransform(133.6,237.2,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAZIAQgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgRAsg");
	this.shape_9.setTransform(129.3,237.2,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAZIAQgsIgQAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_10.setTransform(124.9,237.2,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAEAZIAAgIIgSAAIAAgEIARglIAFAAIgRAlIANAAIAAgOIAFAAIAAAOIAGAAIAAAEIgGAAIAAAIg");
	this.shape_11.setTransform(120.4,237.2,1.2,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAVQgFgDAAgHIAAgWQAAgNANAAQANAAAAANIAAAWQABAHgEADQgEAEgGAAQgFAAgDgEgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_12.setTransform(116,237.3,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_13.setTransform(111.4,237.2,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_14.setTransform(104.4,237.2,1.2,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIARAAQAQAAAAAPQAAAGgEADQgEAEgIABIgLAAIAAAUgAgKAAIALAAQALAAAAgJQAAgKgLAAIgLAAg");
	this.shape_15.setTransform(99.1,237.2,1.2,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgYAAIAAAsg");
	this.shape_16.setTransform(94.2,237.2,1.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMAUQgDgDgBgEIgBgNIABgMQABgEADgEQAFgEAHAAQAIAAAEAEQAGAGgBAOQABAPgGAFQgFAFgHAAQgGAAgGgFgAgIgQQgEAEAAAMQAAANAEAEQAEADAEAAQAFAAADgDQAEgEAAgNQAAgMgEgEQgDgEgFAAQgEAAgEAEg");
	this.shape_17.setTransform(88.7,237.3,1.2,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAWQgDgEgBgFIAFAAQABAIAHAAQADAAADgCQADgDAAgIQAAgLgJAAQgFAAgCAEIgFAAIAAgZIAZAAIAAAEIgUAAIAAAQQADgDAFAAQAFAAAEADQAEAEAAAIQAAAKgEAEQgFADgFAAQgGAAgDgDg");
	this.shape_18.setTransform(81.7,237.3,1.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_19.setTransform(77,237.2,1.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgHIAAgWQAAgNANAAQAGAAAEADQAEAEAAAGIAAAWQAAAHgEADQgEAEgGAAQgFAAgEgEgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_20.setTransform(72.9,237.3,1.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAZIAAgFIATgXQADgEgBgEQABgIgJAAQgIgBAAAKIgEAAQgBgOANAAQAGAAAEAEQAEADAAAGQAAAFgEAFIgQAVIAUAAIAAAFg");
	this.shape_21.setTransform(68.6,237.2,1.2,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_22.setTransform(63.8,237.2,1.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAWQgEgEABgFIAEAAQABAIAHAAQADAAADgCQADgDgBgIQAAgLgIAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEAAQAEAAAEADQAEAEABAIQgBAKgEAEQgDADgGAAQgGAAgDgDg");
	this.shape_23.setTransform(59.8,237.3,1.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgUAAIAAgEIARglIAGAAIgRAlIAOAAIAAgOIAEAAIAAAOIAHAAIAAAEIgHAAIAAAIg");
	this.shape_24.setTransform(55.4,237.2,1.2,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNALIAAgWQAAgNANAAQANAAAAANIAAAWQAAAHgDADQgEAEgGAAQgNAAAAgOgAgHgKIAAAVQgBAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAABAKg");
	this.shape_25.setTransform(51,237.3,1.2,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_26.setTransform(46.7,237.2,1.2,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAZIARgsIgRAAIAAAIIgFAAIAAgNIAbAAIAAAFIgQAsg");
	this.shape_27.setTransform(42.3,237.2,1.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_28.setTransform(35,237.2,1.2,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAXIAXAAIAAgXIAFAAIAAAxg");
	this.shape_29.setTransform(29.2,237.2,1.2,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AANAZIAAgoIgZAoIgFAAIAAgxIAFAAIAAAoIAZgoIAFAAIAAAxg");
	this.shape_30.setTransform(23.2,237.2,1.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAVQgFgEAAgGQAAgIAIgDQgHgDAAgIQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAIgHADQAIADAAAIQAAAGgFAEQgEAEgGAAQgFAAgEgEgAgGAEQgDADAAAEQAAAEADADQADADADAAQAEAAADgDQADgDAAgEQAAgKgKAAQgDAAgDADgAgIgLQAAAJAIAAQAJAAAAgJQAAgJgJAAQgIAAAAAJg");
	this.shape_31.setTransform(165.1,228.9,1.2,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_32.setTransform(159.7,231.4,1.2,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAWIAAgKIgZAAIAAAKIgFAAIAAgOIAEAAQAFgJAAgOIAAgHIAUAAIAAAeIAGAAIAAAOgAgDgKQAAAIgEAKIAOAAIAAgZIgKAAg");
	this.shape_33.setTransform(156.2,230.4,1.2,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_34.setTransform(150.7,232.1,1.2,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgJgYIAFAAQgBAGAFAAQAFAAABgGIAEAAQAAAJgKAAQgJAAAAgJg");
	this.shape_35.setTransform(147.2,228.9,1.2,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJACIAAgDIASAAIAAADg");
	this.shape_36.setTransform(143,229.6,1.2,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgYQACgDAAgFQAAgJgIAAQgIAAAAAJIgFAAQAAgNANAAQAOAAAAANQAAAFgEAFIgRAWIAVAAIAAAEg");
	this.shape_37.setTransform(139,228.8,1.2,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAIAZIAAgaIgQAaIgFAAIAAgiIAFAAIAAAaIAQgaIAGAAIAAAigAgKgYIAFAAQAAAGAFAAQAFAAABgGIAEAAQgBAJgJAAQgJAAgBgJg");
	this.shape_38.setTransform(132.3,228.9,1.2,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_39.setTransform(127.4,229.8,1.2,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAHARIgPgRIAOgQIAGAAIgOAQIAQARgAgNARIAAghIAFAAIAAAQIAAARgAgIAAg");
	this.shape_40.setTransform(123.3,229.8,1.2,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGABIAFAFIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_41.setTransform(118.8,229.8,1.2,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAIARIAAgPIgPAAIAAAPIgFAAIAAghIAFAAIAAAOIAPAAIAAgOIAFAAIAAAhg");
	this.shape_42.setTransform(114.3,229.8,1.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_43.setTransform(109.5,229.8,1.2,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATAWIAAgKIgqAAIAAgiIAFAAIAAAeIAOAAIAAgeIAEAAIAAAeIAOAAIAAgeIAFAAIAAAeIAFAAIAAAOg");
	this.shape_44.setTransform(103.9,230.4,1.2,1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQADgEAGAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgGAAgDgEgAgFgKQgDADAAAHQAAAIADADQACACADAAQAEAAADgCQACgDAAgIQAAgHgCgDQgDgCgEAAQgDAAgCACg");
	this.shape_45.setTransform(98,229.8,1.2,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIASAAQAGAAAFAEQAEAEAAAHQAAAGgEADQgFAFgGAAIgNAAIAAAUgAgLAAIAMAAQALAAAAgJQAAgKgLAAIgMAAg");
	this.shape_46.setTransform(93.5,228.8,1.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANAWIAAgKIgZAAIAAAKIgFAAIAAgOIAEAAQAFgJAAgOIAAgHIAVAAIAAAeIAFAAIAAAOgAgDgKQAAAKgEAIIAPAAIAAgZIgLAAg");
	this.shape_47.setTransform(86.1,230.4,1.2,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNANIADgEQAFAEAFAAQAIAAAAgGQAAgFgGAAIgFAAIAAgEIAFAAQAGAAAAgFQAAgFgIAAQgEAAgEADIgDgEQAFgEAGAAQANAAAAAKQAAAGgGABQAHACgBAGQAAAEgDADQgEADgGAAQgHAAgGgFg");
	this.shape_48.setTransform(81.8,229.8,1.2,1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNAAQAAgRANAAQAOAAAAARIAAABIgWAAQAAAMAJAAQAFAAAEgEIAEADQgGAGgHAAQgOAAAAgSgAgHgHIgBAGIARAAIgBgGQgDgFgFAAQgFAAgCAFg");
	this.shape_49.setTransform(77.7,229.8,1.2,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQAEgEAFAAQAHAAADAEQAEAFAAAIQAAAJgEAFQgDAEgHAAQgFAAgEgEgAgFgKQgDADAAAHQAAAIADADQADACACAAQAEAAACgCQADgDAAgIQAAgHgDgDQgCgCgEAAQgCAAgDACg");
	this.shape_50.setTransform(73.3,229.8,1.2,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgNAZIAAgxIAFAAIAAAEQAEgEAFAAQAFAAADADQAFAEAAALQAAAJgFAEQgCADgGAAQgFAAgEgEIAAATgAgIgGQAAAMAIAAQAIAAAAgMQAAgOgIAAQgIAAAAAOg");
	this.shape_51.setTransform(68.9,230.7,1.2,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAMAZIAAgsIgXAAIAAAsIgFAAIAAgxIAhAAIAAAxg");
	this.shape_52.setTransform(63.5,228.8,1.2,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_53.setTransform(57.4,232.1,1.2,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAPQgDgDAAgEQAAgJAMAAIAKAAIAAgEQAAgHgJAAQgFAAgDAEIgDgDQAEgGAHAAQAOAAAAAMIAAAWIgFAAIAAgDQgEAEgFAAQgHAAgDgDgAgIAIQAAAFAIAAQAFAAACgCQACgCAAgEIAAgEIgJAAQgIAAAAAHg");
	this.shape_54.setTransform(53.9,229.8,1.2,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMARIAAghIAOAAQALAAAAAJQAAAGgGABQAGACAAAGQAAAJgKAAgAgIANIAKAAQAGAAAAgGQAAgFgGAAIgKAAgAgIgCIAKAAQAGAAAAgFQAAgFgGAAIgKAAg");
	this.shape_55.setTransform(49.7,229.8,1.2,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAIARIgQgRIAPgQIAFAAIgOAQIAQARgAgNARIAAghIAFAAIAAAQIAAARgAgIAAg");
	this.shape_56.setTransform(45.6,229.8,1.2,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGABIAFAFIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_57.setTransform(41.2,229.8,1.2,1.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgJAOQgEgEAAgKQAAgJAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgKQgDADAAAHQAAAIADADQADACACAAQADAAADgCQADgDAAgIQAAgHgDgDQgDgCgDAAQgDAAgCACg");
	this.shape_58.setTransform(36.8,229.8,1.2,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAQAZIAAglIgOAdIgDAAIgOgdIAAAlIgFAAIAAgxIAFAAIAPAjIAQgjIAGAAIAAAxg");
	this.shape_59.setTransform(31.2,228.8,1.2,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDADIAAgFIAGAAIAAAFg");
	this.shape_60.setTransform(24.5,231.4,1.2,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAEIgQAAIAAAdg");
	this.shape_61.setTransform(22.3,229.8,1.2,1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_62.setTransform(130.5,223.7,1.2,1.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGAZIAKgWIgEAAQgGABgDgEQgEgEAAgGQAAgGAEgEQAEgEAFAAQAOAAAAAOQAAAFgDAGIgMAYgAgIgKQAAAKAIAAQAJAAAAgKQAAgJgJgBQgIABAAAJg");
	this.shape_63.setTransform(127.2,220.4,1.2,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_64.setTransform(122.6,220.4,1.2,1.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAEAZIAAgIIgSAAIAAgEIAQglIAFAAIgRAlIAOAAIAAgOIAFAAIAAAOIAGAAIAAAEIgGAAIAAAIg");
	this.shape_65.setTransform(118.5,220.4,1.2,1.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgFIAFAAQABAIAHAAQADAAADgCQADgEAAgHQAAgLgJAAQgGAAgBAEIgFAAIAAgZIAZAAIAAAEIgUAAIAAAQQADgDAFAAQAEAAAEADQAFAEAAAIQAAAKgEAEQgFADgFAAQgGAAgDgDg");
	this.shape_66.setTransform(114.1,220.5,1.2,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_67.setTransform(109.4,220.4,1.2,1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_68.setTransform(105,220.4,1.2,1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AABAJIAIgJIgIgHIAAgHIAOAOIgOAPgAgOAJIAIgJIgIgHIAAgHIAOAOIgOAPg");
	this.shape_69.setTransform(98.8,221.2,1.2,1.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_70.setTransform(95.2,223,1.2,1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgYAAIAAAsg");
	this.shape_71.setTransform(92,220.4,1.2,1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_72.setTransform(88.2,223,1.2,1.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_73.setTransform(84.1,220.4,1.2,1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_74.setTransform(80,223,1.2,1.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAOAAAEAOIgGAAQgDgKgJAAQgFAAgDAEQgDAEAAAMQAAANADAEQADADAFAAQAJAAADgKIAGAAQgEAPgOAAQgHAAgEgFg");
	this.shape_75.setTransform(76.3,220.5,1.2,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AANAZIAAgnIgZAnIgFAAIAAgxIAFAAIAAAoIAZgoIAFAAIAAAxg");
	this.shape_76.setTransform(68.5,220.4,1.2,1.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAQAfIAAgMIggAAIAAAMIgFAAIAAgQIAEAAQAHgKgBgSIAAgRIAbAAIAAAtIAGAAIAAAQgAgGgKQAAAQgFAJIAVAAIAAgoIgQAAg");
	this.shape_77.setTransform(62.5,221.2,1.2,1.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAMAZIAAgWIgXAAIAAAWIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_78.setTransform(56.7,220.4,1.2,1.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAOAZIgEgLIgUAAIgEALIgGAAIASgxIAEAAIATAxgAgJAJIASAAIgJgZg");
	this.shape_79.setTransform(51.3,220.4,1.2,1.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAKAZIgVgZIAUgYIAHAAIgVAYIAXAZgAgRAZIAAgxIAFAAIAAAxg");
	this.shape_80.setTransform(46.4,220.4,1.2,1.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AABAAIAOgOIAAAHIgIAHIAIAJIAAAGgAgOAAIAOgOIAAAHIgIAHIAIAJIAAAGg");
	this.shape_81.setTransform(40.9,221.2,1.2,1.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgMAUQgFgFAAgPQAAgOAFgGQAFgEAHAAQAIAAAFAEQAEAGAAAOQAAAPgEAFQgGAFgHAAQgHAAgFgFgAgIgQQgDADAAANQAAAOADADQAEADAEAAQAFAAADgDQAEgEAAgNQAAgMgEgEQgDgEgFAAQgEAAgEAEg");
	this.shape_82.setTransform(33.9,220.5,1.2,1.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgMAUQgEgFAAgPQAAgOAEgGQAFgEAHAAQAIAAAEAEQAFAGAAAOQAAAPgFAFQgEAFgIAAQgHAAgFgFgAgHgQQgEADAAANQAAAOAEADQADADAEAAQAFAAAEgDQADgEAAgNQAAgMgDgEQgEgEgFAAQgEAAgDAEg");
	this.shape_83.setTransform(28.4,220.5,1.2,1.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAHAAAGAEQAEAGAAAOQAAAPgEAFQgHAFgGAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQADADAFAAQAFAAADgDQAEgEAAgNQAAgMgEgEQgDgEgFAAQgFAAgDAEg");
	this.shape_84.setTransform(23,220.5,1.2,1.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#494948").s().p("AgZAZQgKgKAAgPQAAgOAKgLQAKgJAPgBQAPAAAKAKQAKALABAOQAAAPgLAKQgKALgPAAQgOAAgLgLgAgVgVQgJAJAAAMQAAANAJAJQAJAJAMAAQAMAAAJgJQAKgJAAgNQAAgLgKgKQgJgJgMAAQgMAAgJAJgAAKAUIAAgBIgBgCIAAgDQAAgHgDgBQgCgCgGAAIgFAAIAAAQIgHAAIAAgnIAOAAQAHAAADABQAGAEAAAGQAAAGgEACIgGACQAFABACACQACAEAAADIAAAFIABACIAAABgAgHAAIAHAAIAFgBQAEgBAAgFQAAgEgDgBQgCgCgFAAIgGAAg");
	this.shape_85.setTransform(276.2,224.8);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(243.6,191.9,1,1,0,0,0,60.6,60.6);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(254.5,193.2,1,1,0,0,0,23.8,22.7);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(242.2,201.8,1,1,0,0,0,7,6.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAhehegAhEAaIhBDyQA/AfBGAAQB8AABXhXQBYhYAAh8QAAgrgMgqgAkbBfQARAyAiAqQAhAqAuAbIA7jeIhNAZIgXBWIgbAHIAYhVgAj0irQg2BNAABeQAAArALAlIBegeIBYlJQhVAgg2BMgAhOkgIhZFKIBOgZIA0jDIAagHIg0DCIFYhtQgfhXhMg3QhOg4hgAAQgpAAglAKg");
	this.shape_86.setTransform(242.9,192.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhiBHQgGgIADgRQAEgRALgNQALgNAOgEQAPgEAHAHQAHAIgEARQgCAOgIAMQgIALgLAHgAhAARQgNAEgEATQgCALADAEQADADAFgBQAMgEAFgUQACgLgEgEQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAIgDABgAiHBHQAFgHABgJQADgLgEgEQgCgDgFACQgNAEgEATIgBAJIgTAAIAAgDQADgRALgNQAMgOAOgEQAPgEAHAIQAHAIgEARQgCAMgGAKgAgbgLIAWgGIACApIAVgyIAWgHIgnBUIgWAIgAAyglIAsgNIgEATIgXAJIgCAJIATgHIgDATIgUAFIgCAKIAYgJIgFAWIgtAOgAByg5IAqgLQAJgDAGAEQAFAEgCAKQgEAQgKAGQAIABgCAPIgBAPIgWAFIABgKIAAgJQgBgEgGABIgKABIgGAeIgXAGgACOgwIgKADIgDAPIALgDQAKgEACgGQABgGgGAAIgFABg");
	this.shape_87.setTransform(253.8,193.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgxAJQgHgHADgPIATAAQAAALAKgDQAGgCAEgGIARAAQgLAUgUAGIgJABQgHAAgFgFgAAWgNIAhAAIgLAFIgJABQgIAAgFgGg");
	this.shape_88.setTransform(241.7,201.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#75221E").s().p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAhehegAhEAaIhBDyQA/AfBGAAQB8AABXhYQBYhXAAh8QAAgrgNgqgAkbBeQARAzAiAqQAhAqAuAbIA7jdIhNAYIgXBWIgaAIIAWhWgAj0irQg2BNAABeQAAArALAlIBegeIBYlJQhVAhg2BLgAhOkgIhYFKIBMgZIA1jCIAagIIg0DCIFYhtQgehYhNg2QhOg4hgAAQglAAgpAKg");
	this.shape_89.setTransform(243.7,192.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#75221E").s().p("AhiBGQgGgHADgRQAEgRALgNQALgOAOgDQAPgEAHAHQAHAIgDARQgHAegXANgAhAAQQgNAEgEAUQgCALADAEQADADAFgBQANgEAEgUQACgLgEgEQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgDAAgAiHBGQAFgGABgJQADgLgEgEQgCgDgFABQgNAEgEAUIgBAIIgTAAIAAgCQAEgRALgNQALgOAOgEQAPgEAHAIQAHAIgEARQgCALgGAKgAgbgMIAWgGIACAqIAVgzIAWgHIgnBUIgWAIgAAyglIAsgNIgEATIgXAIIgCAKIATgIIgDAUIgUAFIgCAJIAYgJIgFAXIgtANgAByg5IAqgLQAJgDAGAEQAFADgCALQgDAPgLAGQAIACgCAOIgBAQIgWAFIABgKIAAgKQgBgEgGACIgKABIgGAdIgXAHgACOgwIgKADIgDAPIALgDQAKgDACgHQABgFgFAAIgGAAg");
	this.shape_90.setTransform(254.6,193.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#75221E").s().p("AgxAJQgHgHADgPIATAAQAAAGAEACQACACAEgCQAFgBAFgHIARAAQgMAVgTAFIgJABQgHAAgFgFgAAWgNIAhAAQgFADgGACIgJABQgIAAgFgGg");
	this.shape_91.setTransform(242.5,202.3);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(242.9,191.6,1,1,0,0,0,69,69);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(242.9,191.6,1,1,0,0,0,70.3,70.3);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(242.9,191.6,1,1,0,0,0,73.6,73.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AqFJNIE/yZIPLAAIAASZg");
	this.shape_92.setTransform(235.7,191.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(288));

	// uznat
	this.instance_6 = new lib.qqqqqqqq();
	this.instance_6.parent = this;
	this.instance_6.setTransform(74.3,59.5,1,1,0,0,0,68,14.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(232).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(44).to({alpha:0},4).wait(1));

	// Слой 14
	this.instance_7 = new lib.qqqqqqq();
	this.instance_7.parent = this;
	this.instance_7.setTransform(231.5,76.5,1,1,0,0,0,70.9,33);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(224).to({_off:false},0).to({x:221.5,alpha:1},7,cjs.Ease.get(1)).wait(52).to({alpha:0},4).wait(1));

	// Слой 13
	this.instance_8 = new lib.qqqqq();
	this.instance_8.parent = this;
	this.instance_8.setTransform(246.8,76.3,1,1,0,0,0,47.6,31.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(168).to({_off:false},0).to({x:236.8,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:226.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(56));

	// Слой 12
	this.instance_9 = new lib.qqqq();
	this.instance_9.parent = this;
	this.instance_9.setTransform(171.8,67.9,1,1,0,0,0,86.4,21.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(112).to({_off:false},0).to({x:161.8,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:151.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(112));

	// Слой 11
	this.instance_10 = new lib.qqq();
	this.instance_10.parent = this;
	this.instance_10.setTransform(203.8,74.7,1,1,0,0,0,92.9,31.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(56).to({_off:false},0).to({x:193.8,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:183.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(168));

	// Слой 2
	this.instance_11 = new lib.q();
	this.instance_11.parent = this;
	this.instance_11.setTransform(204.7,71.4,1,1,0,0,0,87.7,19.2);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:194.7,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:184.7,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(224));

	// 5.jpg
	this.instance_12 = new lib.p5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(224).to({_off:false},0).to({x:150,y:125,alpha:1},7,cjs.Ease.get(1)).wait(52).to({alpha:0},4).wait(1));

	// 4.jpg
	this.instance_13 = new lib.p4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(168).to({_off:false},0).to({x:150,y:125,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(56));

	// 3.jpg
	this.instance_14 = new lib.p3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(112).to({_off:false},0).to({x:150,y:125,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(112));

	// 2.jpg
	this.instance_15 = new lib.p2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(56).to({_off:false},0).to({x:150,y:125,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(168));

	// 1.jpg
	this.instance_16 = new lib.p1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(160,105,1,1,0,0,0,150,125);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:150,y:125,alpha:1},7,cjs.Ease.get(1)).wait(49).to({x:140,y:145,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(224));

	// Слой 15
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_93.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(288));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,105,317.1,285.2);
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