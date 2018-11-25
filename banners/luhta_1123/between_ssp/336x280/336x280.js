(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"336x280_atlas_P_", frames: [[272,251,128,231],[142,0,129,243],[0,245,147,206],[0,0,140,241],[149,245,121,247],[273,0,122,249]]}
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



(lib.p2a = function() {
	this.spriteSheet = ss["336x280_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p2b = function() {
	this.spriteSheet = ss["336x280_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p3a = function() {
	this.spriteSheet = ss["336x280_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.p3b = function() {
	this.spriteSheet = ss["336x280_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.p4a = function() {
	this.spriteSheet = ss["336x280_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.p4b = function() {
	this.spriteSheet = ss["336x280_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.p5 = function() {
	this.initialize(img.p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,180);// helper functions:

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


(lib.tolko = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AA2CcIAAh4IgEAAQgHAAgJACIgJAFIgHAIIgmBLIgJANQgHAHgEADQgIAEgIABQgIACgOAAIhAAAIBFhoQAHgNAKgIQAJgIAOgFQgVgEgOgJQgOgIgJgLQgIgKgFgOQgDgMgBgMQAAgTAIgPQAHgRAQgNQAQgOAYgHQAagIAhAAIB5AAIAAE3gAAGhdQgHAEgFAFQgEAFgCAHIgBAOQgBASALALQAKALARAAIAeAAIAAhPIgeAAQgKAAgIAEg");
	this.shape.setTransform(82,10.4,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AiUDRIAAmbIA6AAQARAAAGAQIAHAXQAJgKAKgIQAJgIANgGQAMgGANgDQAQgEAOAAQAXAAAWALQAVALAPAVQAPAUAJAeQAIAfAAAkQAAAigKAeQgKAfgRAVQgRAWgZAMQgaANgdAAQgXAAgRgHQgPgHgPgMIAAB4gAgOiGQgKACgGADQgIAFgFAFIgMAMIAACEQALAMAMAEQAMAFAOAAQANAAAKgFQAKgFAJgMQAIgLAEgRQAFgSAAgaQAAgagEgQQgDgQgHgLQgHgKgIgFQgJgEgMAAQgKAAgHACg");
	this.shape_1.setTransform(71.4,12,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("Ag/DUQgdgKgWgaQgWgZgLgnQgMgoAAg5QAAgtAJgpQAJgoATggQAVgeAhgUQAigTAxgEIBvgHIAFAvQABAOgFALQgHAKgPABIhSAEQgZACgTAHQgSAJgMANQgMAOgGAQQgGARgCAYQAHgKALgJQAKgIAOgGQANgHAPgDQAQgEAPAAQAfAAAaALQAYALASAUQASAUAJAbQAKAeAAAgQAAAkgMAcQgLAcgVAVQgVATgdALQgdALgkAAQgiAAgegMgAgvAGQgPAUAAAsQAAAsAPAWQAPAWAhAAQAfAAAQgVQAQgWAAgsQAAgtgQgUQgPgVggAAQghAAgPAVg");
	this.shape_2.setTransform(58.8,8.1,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AhRCcQgRgGgMgKQgNgMgGgPQgHgQAAgWQAAgPAJgTQAIgQAVgPQAVgOAjgJQAigKA2gBIAAgNQAAgcgLgMQgMgMgVAAQgQAAgKADIgTAJIgQAIQgHADgLAAQgKAAgHgFQgHgFgDgGIgRgdQAdgZAigMQAigNAmAAQAdAAAXAKQAXAJAPAQQAQARAIAWQAJAXAAAbIAADCIgrAAQgOAAgGgEQgHgDgEgMIgHgRQgKAJgNAIQgLAIgLAFQgLAFgNADQgOADgPAAQgUAAgTgGgAAAAiQgSAEgKAGQgKAFgFAHQgEAIAAAHQAAAQAJAGQAIAHASAAQARAAANgGQAOgHAOgOIAAgrQgXAAgXAEg");
	this.shape_3.setTransform(46.5,10.3,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("ABZCcQgNAAgIgCQgKgBgGgFQgJgEgEgFQgGgGgEgHIgghPQgEgKgJgGQgKgFgKAAIgYAAIAACCIhdAAIAAk3IBdAAIAAB8IAUAAQAMAAAHgEQAGgFAFgJIAohTQAGgJAMgIQANgGAMAAIBJAAIhBBxQgIAOgIAHQgHAHgMAFQAPAEAKAJQAKAKAIAOIBBCAg");
	this.shape_4.setTransform(35.8,10.4,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AgxCWQgdgKgWgVQgVgUgNghQgMgfAAgpQAAgfAKgdQAMgdATgTQAUgVAdgNQAcgMAjAAQAgAAAZAKQAZAJATATQATATAKAaQAKAbAAAhIgBARQAAAGgDADQgCAEgEACQgFACgGgBIizAAQAFAnATATQAUARAdAAQAPAAANgEIAVgJIAQgJQAJgDAIAAQALgBAFAJIAcAhQgQASgQAJQgQALgSAFQgRAGgSACQgTADgPAAQggAAgcgLgAgghRQgPAPgFAdIB0AAQAAgLgDgKQgDgLgHgIQgFgIgMgGQgKgEgPAAQgZAAgQAOg");
	this.shape_5.setTransform(23.5,10.4,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("ABoDPIAAhmIjPAAIAABNQAAAFgBAEQgCAFgEADQgCAEgGADQgDABgIAAIg7AAIAAimIALAAIATgDQAKgEAIgHQAIgJAIgRQAIgPAGgcQAHgfADgkQAGgxACgxIDfAAIAAD1IA6AAIAACPQAAAMgHAHQgIAHgLAAgAgfgbQgLAsgOAYIBhAAIAAiyIg4AAQgGBAgKAug");
	this.shape_6.setTransform(11,12.2,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AhCDSQgdgMgUgUQgWgWgKgcQgKgcgBgjQAAhAAzhDIBjiGQAGgIANgGQANgHAQAAIBUAAIiNCpIAVgGQAKgCAPAAQAYAAAXAIQAYAIASAQQARAQAMAYQAMAYgBAiQABAfgMAcQgLAbgVAVQgWAWgdALQgdAMgjAAQgkAAgegMgAgdAMQgMAEgJAKQgHAJgGANQgEANgBAQQAAASAFALQADAOAIAJQAKAKALAEQAMAFARAAQAOAAAMgGQAMgFAKgJQAJgKAFgNQAFgMAAgQQAAgQgFgNQgEgNgKgKQgJgJgMgEQgMgFgQgBQgOABgMAFg");
	this.shape_7.setTransform(-6.9,8.2,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AhqDbIAAhDIBUAAIABj/IgxAqQgHAFgHABQgGABgFgBQgGgBgFgDQgEgCgDgDIgdgoICJhzIBMAAIAAFzIBIAAIAABDg");
	this.shape_8.setTransform(-19.4,8.1,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("Ag/CVQgdgLgWgVQgWgVgLgdQgMgeAAglQAAglAMgdQALgeAWgVQAWgVAdgLQAcgLAkAAQAkAAAdALQAeAMAUAUQAUAUAMAfQAMAdAAAlQAAAkgMAfQgMAfgUATQgUAVgeALQgeAMgjAAQgiAAgegMgAgvhEQgPAXAAAtQAAAtAPAYQAPAWAhABQAggBAPgWQAPgXAAguQAAgtgPgXQgPgXggAAQghAAgPAXg");
	this.shape_9.setTransform(-36.6,10.4,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AAwCcIAAj0IhfAAIAAD0IheAAIAAk3IEbAAIAAE3g");
	this.shape_10.setTransform(-48.9,10.4,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("Ah9DbICbk5IAOgWQAJgNAHgHIjAAAIgIgCQgEgBgDgDIgEgHIgCgIIAAg+IEzAAIAAAoQAAASgDAKIifFUQgHANgLAIQgMAKgTgBg");
	this.shape_11.setTransform(-66,8.1,0.353,0.353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AguCWQgbgLgTgUQgUgUgMgfQgLgfAAglQgBghAKgeQALgdATgWQATgUAfgOQAcgMAlAAQAlAAAcAMQAcALAWAXIgZAhIgIAIQgDADgIAAQgHAAgFgEIgNgHIgQgHQgJgDgOgBQgRABgMAGQgNAGgIAMQgHAMgFAQQgDAQAAAXQAAAtAQAXQASAYAeAAQARAAAIgEQAKgEAGgFIANgJQAFgFAIABQAMgBAFAJIAbAhQgNAQgRALQgQALgRAFQgQAGgRACQgTADgOAAQgbAAgagLg");
	this.shape_12.setTransform(-82.2,10.4,0.353,0.353);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AhACWQgcgLgXgWQgVgVgLgeQgMgcABgmQgBgmAMgcQAMgeAUgVQAYgWAbgKQAfgLAhAAQAjAAAfALQAbALAWAVQAVAUAMAfQALAeAAAkQAAAkgLAeQgMAggVATQgVAWgcALQgdALglAAQgjAAgdgLgAgvhEQgQAYAAAsQAAAuAQAXQAQAXAfAAQAhAAAPgXQAPgWAAgvQAAgtgPgXQgPgXghABQgfgBgQAXg");
	this.shape_13.setTransform(29.4,-13.8,0.353,0.353);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("ABaCcQgKAAgMgCQgJgCgIgEQgGgDgGgGIgKgOIgghOQgFgKgIgGQgJgFgLAAIgYAAIAACCIhdAAIAAk3IBdAAIAAB8IAUAAQANAAAFgFQAHgEAEgJIAphTQAHgLALgGQAMgGANAAIBJAAIhBBxQgJAOgHAHQgIAIgKAEQAOAFALAIQAIAJAJAPIBBCAg");
	this.shape_14.setTransform(18.1,-13.8,0.353,0.353);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("Ah/CcIAAk3IBZAAIAABuIAsAAQAiAAAWAIQAYAJAOANQAOAOAHARQAHASAAAUQAAAWgJATQgIATgPANQgRAPgVAHQgXAHgcAAgAgmBcIAtAAQATAAAJgLQAKgLAAgQQAAgHgDgGQgCgIgFgEQgEgEgHgEQgIgDgJAAIgtAAg");
	this.shape_15.setTransform(6.7,-13.8,0.353,0.353);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AieCbQgIgDAAgHIAAg3IATAAQAMgBAHgCQAJgCAJgJQAKgKAHgPQAIgSAHgaQAGgeAFglQAEgjAEg/IDiAAIAAE4IhdAAIAAjyIg5AAQgEA1gIAqQgHAmgLAdQgKAcgNAQQgNARgQAJQgPAJgPADQgTACgOAAQgWAAgIgDg");
	this.shape_16.setTransform(-6,-13.7,0.353,0.353);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AhACWQgcgLgWgWQgWgVgLgeQgMgdAAglQAAglAMgdQAMgeAVgVQAXgVAbgLQAfgLAiAAQAiAAAeALQAdALAWAVQAUAUAMAfQAMAeAAAkQAAAkgMAeQgMAggUATQgVAWgeALQgcALgkAAQgjAAgegLgAgvhEQgPAWAAAuQAAAvAPAWQAPAXAhAAQAgAAAPgXQAPgWAAgvQAAgtgPgXQgPgXggABQghgBgPAXg");
	this.shape_17.setTransform(-17.9,-13.8,0.353,0.353);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AgtCcIAAj0IhpAAIAAhDIEtAAIAABDIhoAAIAAD0g");
	this.shape_18.setTransform(-29.4,-13.8,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tolko, new cjs.Rectangle(-87,-19.4,174.1,39), null);


(lib.t4a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(0.1,-11.8,0.353,0.353,0,0,0,0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLEwQgggJgagTQgYgSgNgZQgNgYAAgeIAAgJIB7AAIAAAIQAAAVARAMQARAMAbAAQA8AAAAhLIAAhUQg1Atg0gBQg+ABgnglQgmgjAAhAIAAiQQAAgwAaggQAbgfAqgQQAqgPAvAAQAxAAApAPQAqAQAZAgQAaAgAAAyIAAE4QAAAygVAnQgVAmgpAWQgpAUg8AAQgqAAghgJgAg8ijIAAB3QAAAcASAPQASAPAYABQAYAAATgPQASgPAAgfIAAh1QAAgegQgPQgPgPgdgBQg9ABAAA8g");
	this.shape_1.setTransform(22.8,12.3,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLEwQghgJgZgTQgYgSgNgZQgNgZAAgdIAAgJIB7AAIAAAIQAAAUARANQASAMAaAAQA8AAAAhLIAAhUQg0Atg1gBQg+ABgmglQgngjAAhAIAAiQQAAgvAbghQAagfAqgQQAqgPAvAAQAyAAApAPQApAPAZAhQAaAgAAAyIAAE4QAAAygVAnQgUAmgqAWQgqAUg7AAQgpAAgigJgAg8ijIAAB3QAAAcASAPQATAPAXABQAZAAASgPQASgPAAgfIAAh1QAAgfgQgOQgPgPgdgBQg9ABAAA8g");
	this.shape_2.setTransform(7.1,12.3,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhmEuQASiKAviLQAuiJA9hgIkHAAIAAhdIGDAAIAABWQhBB0grB6QgrB8gLCbg");
	this.shape_3.setTransform(-8.9,12.3,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiOEMQgsgtAAhLIAAgjIB0AAIAAAUQABBbBBgBQAoABANgYQANgXAAgyQAAg5gRgXQgTgWgpAAIg3AAIAAhSIAlAAQA2AAARgeQASgdAAgqQgBhAg7AAQgfAAgRATQgSATAAAkIAAAUIhyAAIAAgaQAAhGAxgsQAwgtBTAAQA3AAApASQApATAWAhQAVAiAAAvQAAA7gXAgQgYAhgwAQQBqAVAACEQAABBgXAoQgWApgrASQgrAShAAAQhaAAgsgtg");
	this.shape_4.setTransform(-24.7,12.3,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6DtQgagHgUgOQgSgOgLgUQgKgUAAgWIAAgHIBhAAIAAAFQAAARANAKQANAJAVAAQAuAAAAg7IAAhBQgnAigqAAQgxAAgegcQgegbAAgyIAAhwQAAgmAVgZQAUgYAhgNQAigLAkAAQAmAAAhALQAgAMAUAZQAUAZAAAnIAAD1QAAAmgQAfQgRAeggAQQgiARgtAAQgdAAgdgIgAguiAIAABeQAAAVAOANQANALATAAQATAAAPgLQANgMAAgXIAAhdQAAgXgMgMQgMgMgWAAQgvAAAAAvg");
	this.shape_5.setTransform(17.5,-12.4,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6DtQgZgHgVgOQgTgPgKgTQgKgUABgWIAAgHIBfAAIAAAFQAAARAOAKQANAJAVAAQAvAAgBg7IAAhBQgoAigpAAQgyAAgdgcQgegbABgyIAAhwQAAgmAUgZQAVgZAggMQAhgLAlAAQAlAAAiALQAgAMAUAZQAUAaAAAmIAAD1QgBAogQAdQgPAdghARQghARguAAQgeAAgcgIgAgviAIAABeQAAAVAOANQAPALASAAQATAAAPgLQAOgMgBgXIAAhdQABgXgMgMQgNgMgWAAQgwAAAAAvg");
	this.shape_6.setTransform(5.2,-12.4,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiXDxIAAgZQAAguARglQAQglAXgaQAYgaAYgUIAxgoQAigfAKgRQAKgRAAgZQAAg8g1AAQgZAAgOAQQgNARAAAoIAAAZIhfAAIAAgcQAAguAVghQAWghAigPQAigRAkAAQAqAAAhAQQAjAQATAcQAUAdAAAlQAAAmgTAkQgSAlgiAcIg7AxQgaAXgSAWQgRAXgDAaIC1AAIAABJg");
	this.shape_7.setTransform(-7.5,-12.5,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhIDpQgfgLgUgaQgTgYAAgoIAAj0QAAglAQgfQARgeAggRQAhgRArAAQAqAAAhANQAiAOARAYQATAYAAAfIAAAGIhhAAIAAgFQAAgQgMgLQgMgKgWAAQgYAAgMAPQgLAPgBAjIAAA4QAOgNAYgKQAYgKAUAAQAgAAAZAMQAXAMAOAZQAPAXAAAiIAABxQAAA5goAbQgoAchBAAQgnAAgggMgAgggBQgPALAAAYIAABeQAAAwAuAAQAxAAgBgwIAAhgQAAgVgOgLQgNgNgTAAQgUAAgNAMg");
	this.shape_8.setTransform(-20.2,-12.4,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_9.setTransform(-30.6,-10.1,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AyNMlIAA5JMAkaAAAIAAZJg");
	this.shape_10.setTransform(0.1,0,0.353,0.353,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4a, new cjs.Rectangle(-41.2,-28.4,82.4,57), null);


(lib.t3b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(1.9,-11.9,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLEvQgjgKgXgSQgYgRgNgaQgNgZAAgdIAAgIIB7AAIAAAHQAAAVARANQARAMAbAAQA8AAAAhMIAAhSQg0Arg1AAQg+AAgngkQgmgjAAhBIAAiPQAAgwAbggQAaggAqgPQAogPAxAAQAxAAAqAPQAoAPAaAgQAaAiAAAwIAAE5QAAAygVAmQgVAogpAUQgpAVg8AAQgoAAgjgKgAg8ikIAAB4QAAAbASAQQASAPAYAAQAaAAARgPQASgPAAgeIAAh2QAAgegQgPQgPgPgdAAQg9AAAAA8g");
	this.shape_1.setTransform(32.1,12.3,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLEvQgjgKgXgSQgZgSgMgZQgNgYAAgeIAAgIIB8AAIAAAHQgBAVASANQAQAMAbAAQA7AAAAhMIAAhSQgzArg2AAQg9AAgngkQgmgjAAhBIAAiPQAAgwAbggQAaggAqgPQAogPAxAAQAwAAArAPQApAPAZAgQAaAhAAAxIAAE5QgBAzgUAlQgUAngqAVQgpAVg8AAQgoAAgjgKgAg7ikIAAB4QAAAbARAQQASAPAYAAQAZAAASgPQARgOAAgfIAAh2QAAgegPgPQgPgPgdAAQg8AAAAA8g");
	this.shape_2.setTransform(16.4,12.3,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAPEuIAAmfIiYAAIAAhUIARAAQBHAAAsgdQAqgdANguIBYAAIAAJbg");
	this.shape_3.setTransform(-1.8,12.3,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiOELQgsguAAhJIAAgkIB0AAIAAAVQAABaBCAAQAoAAANgXQANgYABgwQgBg6gRgXQgSgXgqAAIg3AAIAAhRIAkAAQA2AAASgdQASgdgBgrQAAhBg7AAQgfAAgRAUQgRATgBAjIAAAUIhyAAIAAgZQAAhHAxgsQAwgsBTAAQA4AAAoASQApASAWAiQAVAiAAAvQAAA8gXAfQgZAigvAOQBqAWAACEQAABAgWAqQgXAogrASQgrAShAAAQhZABgtgvg");
	this.shape_4.setTransform(-15.5,12.3,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQEuIAAmfIiZAAIAAhUIAQAAQBIAAAsgdQArgdAMguIBYAAIAAJbg");
	this.shape_5.setTransform(-34.4,12.3,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6DuQgcgJgSgNQgSgOgLgUQgKgUAAgWIAAgHIBgAAIAAAGQAAARAOAJQAOAKAUAAQAuAAAAg8IAAhAQgoAigqAAQgvAAgfgcQgegcAAgyIAAhwQAAgmAVgZQAVgZAggLQAhgMAlAAQAmAAAgAMQAgALAVAaQAUAaAAAmIAAD0QAAAngRAeQgPAeghARQggAQgvAAQggAAgagHgAgvh/IAABdQAAAVAOANQAOALATAAQAUAAANgLQAOgMAAgXIAAhcQAAgYgMgMQgMgMgWAAQgwAAAAAwg");
	this.shape_6.setTransform(30,-12.4,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6DuQgbgJgTgNQgTgPgJgTQgLgSAAgYIAAgHIBgAAIAAAGQAAARAOAJQANAKAVAAQAuAAABg8IAAhAQgpAigpAAQgwAAgfgcQgegcAAgyIAAhwQAAgnAVgYQAUgZAhgLQAhgMAlAAQAmAAAgAMQAhALATAaQAVAZAAAnIAAD0QAAAmgQAfQgRAeggARQggAQgvAAQgfAAgbgHgAgvh/IAABdQAAAWAPAMQANALATAAQAUAAANgLQAOgMABgXIAAhcQgBgYgMgMQgMgMgWAAQgwAAAAAwg");
	this.shape_7.setTransform(17.7,-12.4,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6DuQgcgJgSgNQgSgOgLgUQgKgUAAgWIAAgHIBgAAIAAAGQAAARAOAJQAOAKAUAAQAuAAAAg8IAAhAQgoAigqAAQgvAAgfgcQgegcAAgyIAAhwQAAgmAVgZQAVgZAggLQAhgMAlAAQAmAAAgAMQAgALAVAaQAUAaAAAmIAAD0QAAAngRAeQgPAeghARQggAQgvAAQggAAgagHgAgvh/IAABdQAAAVAOANQAOALATAAQAUAAANgLQAOgMAAgXIAAhcQAAgYgMgMQgMgMgWAAQgwAAAAAwg");
	this.shape_8.setTransform(5.4,-12.4,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAMDsIAAlEIh3AAIAAhCIANAAQA4AAAigXQAhgWAKgkIBFAAIAAHXg");
	this.shape_9.setTransform(-8.8,-12.4,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiXDxIAAgZQAAgvAQgjQAPgjAZgdQAbgdAVgRIAwgoQAjgfAJgQQAKgRAAgaQAAg8g0AAQgaAAgNAQQgOARAAAoIAAAaIheAAIAAgdQAAguAVggQAUghAjgRQAigQAlAAQAoAAAjAPQAiAQAUAdQAUAeAAAkQAAAlgTAlQgSAlgjAdIg7AwQgYAVgTAYQgSAXgDAaIC2AAIAABJg");
	this.shape_10.setTransform(-19.7,-12.6,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_11.setTransform(-30.4,-10.1,0.353,0.353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AzOMlIAA5JMAmdAAAIAAZJg");
	this.shape_12.setTransform(0.1,0,0.353,0.353,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3b, new cjs.Rectangle(-43.5,-28.4,87,56.9), null);


(lib.t3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(0.1,-11.8,0.353,0.353,0,0,0,0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLEwQgggJgagTQgXgRgOgaQgNgYAAgeIAAgJIB7AAIAAAIQAAAVARAMQASAMAaAAQA8AAAAhLIAAhUQg1Atg0gBQg+ABgnglQgmgjAAhAIAAiQQAAgwAaggQAbgfAqgQQAqgPAvAAQAxAAApAPQAqAQAZAgQAaAgAAAyIAAE4QAAAygVAnQgVAmgpAWQgpAUg8AAQgqAAghgJgAg8ijIAAB3QAAAcASAPQASAPAYABQAYAAATgPQASgPAAgfIAAh1QAAgegQgPQgPgPgdgBQg9ABAAA8g");
	this.shape_1.setTransform(23.2,12.3,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLEwQghgJgZgTQgYgSgNgZQgNgZAAgdIAAgJIB7AAIAAAIQAAAUARANQASAMAaAAQA8AAAAhLIAAhUQg0Atg1gBQg+ABgmglQgngjAAhAIAAiQQAAgvAbghQAagfAqgQQAqgPAvAAQAyAAApAPQApAPAZAhQAaAgAAAyIAAE4QAAAygVAnQgUAmgqAWQgqAUg7AAQgpAAgigJgAg8ijIAAB3QAAAcASAPQATAPAXABQAZAAASgPQASgPAAgfIAAh1QAAgfgQgOQgPgPgdgBQg9ABAAA8g");
	this.shape_2.setTransform(7.5,12.3,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhmEuQASiKAviLQAwiMA7hdIkGAAIAAhdIGBAAIAABWQhBB1gqB5QgrB8gLCbg");
	this.shape_3.setTransform(-8.4,12.3,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhmEuQASiKAuiLQAwiJA7hgIkFAAIAAhdIGCAAIAABWQhBB0grB6QgrB8gLCbg");
	this.shape_4.setTransform(-24.2,12.3,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6DtQgagHgTgOQgUgPgKgTQgJgUgBgWIAAgHIBhAAIAAAFQAAARANAKQANAJAVAAQAuAAAAg7IAAhBQgmAigsAAQgwAAgdgcQgfgbAAgyIAAhwQAAgmAVgZQAUgZAhgMQAigLAkAAQAlAAAhALQAgAMAVAZQAUAagBAmIAAD1QAAAogQAdQgPAeghAQQghARguAAQgeAAgcgIgAguiAIAABeQgBAVAOANQAPALASAAQAUAAAOgLQANgMAAgXIAAhdQAAgXgMgMQgMgMgWAAQgwAAABAvg");
	this.shape_5.setTransform(29,-12.4,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7DtQgYgHgVgOQgSgOgKgUQgKgTAAgXIAAgHIBfAAIAAAFQAAARAOAKQAMAJAWAAQAuAAABg7IAAhBQgoAigqAAQgxAAgegcQgdgbAAgyIAAhwQAAgnAUgYQAUgYAhgNQAigLAkAAQAlAAAhALQAhAMATAZQAVAZAAAnIAAD1QAAAmgQAfQgRAeggAQQghARguAAQgdAAgegIgAgviAIAABeQAAAVAPANQANALATAAQATAAAOgLQAOgMABgXIAAhdQAAgXgNgMQgNgMgVAAQgwAAAAAvg");
	this.shape_6.setTransform(16.8,-12.4,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6DtQgagHgUgOQgSgOgLgUQgKgUAAgWIAAgHIBgAAIAAAFQAAARAOAKQANAJAVAAQAuAAAAg7IAAhBQgnAigrAAQgwAAgegcQgegbAAgyIAAhwQAAgmAVgZQAUgZAhgMQAigLAkAAQAlAAAhALQAgAMAVAZQAUAaAAAmIAAD1QAAAngRAeQgQAeggAQQghARguAAQgeAAgcgIgAgviAIAABeQAAAVAOANQAPALASAAQATAAAPgLQANgMAAgXIAAhdQAAgXgMgMQgMgMgWAAQgwAAAAAvg");
	this.shape_7.setTransform(4.5,-12.4,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiXDxIAAgZQAAgvAQgkQAQgjAYgcQAagcAWgSIAwgoQAjgfAJgRQAKgQAAgaQAAg8g0AAQgaAAgNAQQgOARAAAoIAAAZIheAAIAAgcQAAguAVghQAVghAigPQAigRAlAAQApAAAiAQQAjAQATAcQAUAdAAAlQAAAkgTAmQgTAlgiAcIg7AxQgbAXgQAWQgSAXgDAaIC2AAIAABJg");
	this.shape_8.setTransform(-8.2,-12.5,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAMDsIAAlEIh3AAIAAhBIANAAQA4AAAigXQAigXAJgkIBFAAIAAHXg");
	this.shape_9.setTransform(-22.6,-12.4,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_10.setTransform(-31.3,-10.1,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AyMMlIAA5JMAkZAAAIAAZJg");
	this.shape_11.setTransform(0,0,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3a, new cjs.Rectangle(-41.2,-28.4,82.4,57), null);


(lib.t2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkkkI/HJJ");
	this.shape.setTransform(2.5,-11.9,0.353,0.353,0,0,0,0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLEvQgigJgYgSQgZgUgMgXQgNgZAAgdIAAgJIB8AAIAAAHQAAAWARAMQAQAMAbAAQA8AAgBhLIAAhTQgyArg3AAQg9AAgngjQglglgBhAIAAiPQAAgwAaggQAbggAqgPQArgOAuAAQAygBApAPQAoAOAaAiQAaAhgBAxIAAE5QABAygVAlQgUAngqAVQgpAVg8AAQgoAAgjgKgAg7ikIAAB4QAAAbARAQQASAPAYAAQAZAAASgOQARgPAAgfIAAh2QAAgegPgPQgPgPgdAAQg8AAAAA8g");
	this.shape_1.setTransform(31.3,13.2,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLEvQgigJgYgSQgZgUgMgXQgNgaAAgcIAAgJIB7AAIAAAHQAAAVARANQASAMAaAAQA8AAAAhLIAAhTQgzArg2AAQg+AAgmgjQgnglAAhAIAAiPQAAgwAbggQAagfAqgQQAqgOAvAAQAygBApAPQAoAOAaAiQAaAgAAAyIAAE5QAAAxgVAmQgVAngpAVQgpAVg8AAQgoAAgjgKgAg8ikIAAB4QAAAbASAQQASAPAYAAQAZAAASgOQASgQAAgeIAAh2QAAgegQgPQgPgPgdAAQg9AAAAA8g");
	this.shape_2.setTransform(15.6,13.2,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhLEvQgigJgYgSQgYgTgNgYQgNgZAAgdIAAgJIB7AAIAAAHQAAAWARAMQASAMAaAAQA8AAAAhLIAAhTQg0Arg1AAQg+AAgngjQgmglAAhAIAAiPQAAgwAaggQAbggAqgPQAqgOAvAAQAxgBApAPQApAOAaAiQAaAgAAAyIAAE5QAAAxgVAmQgVAngpAVQgpAVg8AAQgoAAgjgKgAg8ikIAAB4QAAAbASAQQARAPAZAAQAaAAARgOQASgPAAgfIAAh2QAAgdgQgQQgPgPgdAAQg9AAAAA8g");
	this.shape_3.setTransform(-0.1,13.2,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjBE0IAAggQAAg6AUgwQAVgtAegkQAggjAegXIA+g0QAsgnAMgWQANgWAAggQAAhNhDAAQghAAgRAVQgRAVAAAzIAAAhIh6AAIAAgkQAAg7AcgpQAbgrArgVQAsgUAvAAQA1AAArATQAsAVAZAlQAZAlAAAvQAAAwgYAvQgWAtgtAmIhMA/QggAbgXAeQgWAdgFAiIDpAAIAABdg");
	this.shape_4.setTransform(-16.4,13,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQEuIAAmfIiZAAIAAhTIAQAAQBIAAAsgeQArgeAMguIBYAAIAAJcg");
	this.shape_5.setTransform(-34.7,13.2,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6DuQgcgJgSgNQgSgOgLgUQgKgUAAgWIAAgHIBhAAIAAAGQAAARANAJQAOAKAUAAQAuAAAAg8IAAhAQgoAigpAAQgwAAgfgcQgegcAAgyIAAhwQAAgmAVgZQAVgZAggLQAhgMAlAAQAnAAAgAMQAfALAVAaQAUAaAAAmIAAD0QAAAngRAeQgPAeghARQggAQgvAAQggAAgagHgAguh/IAABdQAAAWANAMQAOALATAAQAUAAAOgLQANgMAAgXIAAhcQAAgYgMgMQgMgMgWAAQgvAAAAAwg");
	this.shape_6.setTransform(26.8,-12.4,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6DuQgcgJgSgNQgTgOgJgUQgLgSABgYIAAgHIBfAAIAAAGQAAARAOAJQANAKAVAAQAuAAABg8IAAhAQgqAigoAAQgxAAgegcQgegcABgyIAAhwQAAgnAUgYQAUgZAhgLQAhgMAlAAQAmAAAhAMQAgALATAaQAVAZAAAnIAAD0QAAAmgQAfQgQAdghASQggAQgvAAQgfAAgbgHgAgvh/IAABdQAAAWAOAMQAOALATAAQAUAAANgLQAOgMABgXIAAhcQAAgYgMgMQgNgMgWAAQgwAAAAAwg");
	this.shape_7.setTransform(14.5,-12.4,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag6DuQgcgJgSgNQgSgOgLgUQgKgUAAgWIAAgHIBhAAIAAAGQAAARANAJQAOAKAUAAQAuAAAAg8IAAhAQgoAigpAAQgwAAgfgcQgegcAAgyIAAhwQAAgmAVgZQAVgZAggLQAhgMAlAAQAnAAAgAMQAfALAVAaQAUAaAAAmIAAD0QAAAmgQAfQgRAeggARQggAQgvAAQgfAAgbgHgAguh/IAABdQAAAWANAMQAOALATAAQAUAAAOgLQANgMAAgXIAAhcQAAgYgMgMQgMgMgWAAQgvAAAAAwg");
	this.shape_8.setTransform(2.2,-12.4,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhJDmQghgQgUgcQgUgdAAglIAAjvQAAglAUgcQAUgeAhgOQAigQAoAAQArAAAiAPQAhAPASAdQASAcAAAmIAADvQAAAmgSAcQgSAdghAPQggAPgtAAQgpAAghgPgAgjifQgPALAAAWIAAD+QAAAUAPAMQAPAMAVAAQAVAAAOgMQAOgMAAgUIAAj+QAAgWgOgLQgOgMgVAAQgVAAgPAMg");
	this.shape_9.setTransform(-10.7,-12.4,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiXDxIAAgZQAAguAQgkQARgmAXgaQAZgbAXgTIAwgoQAigeAKgRQALgRAAgaQAAg8g1AAQgZAAgOAQQgNARAAAoIAAAaIhfAAIAAgdQAAguAVggQAVghAigRQAjgQAkAAQAoAAAjAPQAiAQAUAdQAUAdAAAlQAAAmgTAkQgSAlgiAdIg8AwQgaAYgRAVQgRAXgEAaIC2AAIAABJg");
	this.shape_10.setTransform(-23.8,-12.6,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_11.setTransform(-34.4,-10.1,0.353,0.353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AyNMlIAA5JMAkaAAAIAAZJg");
	this.shape_12.setTransform(0,0,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2b, new cjs.Rectangle(-41.2,-28.4,82.4,56.9), null);


(lib.t2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5).p("APkklI/HJK");
	this.shape.setTransform(0,-11.9,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLEwQgggJgagTQgYgSgNgZQgNgYAAgeIAAgJIB7AAIAAAIQAAAVARAMQARAMAbAAQA8AAAAhLIAAhUQg1Atg0gBQg+ABgnglQgmgjAAhAIAAiQQAAgwAaggQAbgfAqgQQAqgPAvAAQAxAAApAPQAqAQAZAgQAaAgAAAyIAAE4QAAAygVAnQgVAmgpAWQgpAUg8AAQgqAAghgJgAg8ijIAAB3QAAAcASAPQASAPAYABQAYAAATgPQASgPAAgfIAAh1QAAgegQgPQgPgPgdgBQg9ABAAA8g");
	this.shape_1.setTransform(23.6,12.3,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLEwQghgJgZgTQgYgSgNgZQgNgZAAgdIAAgJIB7AAIAAAIQAAAUARANQASAMAaAAQA8AAAAhLIAAhUQg0Atg1gBQg+ABgmglQgngjAAhAIAAiQQAAgvAbghQAagfAqgQQAqgPAvAAQAyAAApAPQApAPAZAhQAaAgAAAyIAAE4QAAAygVAnQgUAmgqAWQgqAUg7AAQgpAAgigJgAg8ijIAAB3QAAAcASAPQATAPAXABQAZAAASgPQASgPAAgfIAAh1QAAgfgQgOQgPgPgdgBQg9ABAAA8g");
	this.shape_2.setTransform(7.9,12.3,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiJEIQg0gsAAhUIAAgbIB4AAQAAA/AQAXQARAXAjAAQAXAAAPgIQANgJAIgWQAFgWAAgpIAAg6QAAhZhCABQgXAAgPALQgRAMgGATIh1AAIAPk/IFFAAIAABdIjeAAIgGCBQAqgoA0AAQBSABApAuQApAuAABUIAAA4QAAA0gLAlQgKAmgXAYQgWAZgjAMQgjAMgxAAQhbAAgygsg");
	this.shape_3.setTransform(-8.3,12.5,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLEwQgggJgagTQgXgRgOgaQgNgYAAgeIAAgJIB7AAIAAAIQAAAVARAMQASAMAaAAQA8AAAAhLIAAhUQg1Atg0gBQg+ABgnglQgmgjAAhAIAAiQQAAgwAaggQAbgfAqgQQAqgPAvAAQAxAAApAPQAqAQAZAgQAaAgAAAyIAAE4QAAAygVAnQgVAmgpAWQgpAUg8AAQgqAAghgJgAg8ijIAAB3QAAAcASAPQASAPAYABQAYAAATgPQASgPAAgfIAAh1QAAgegQgPQgPgPgdgBQg9ABAAA8g");
	this.shape_4.setTransform(-23.7,12.3,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6DtQgZgHgUgOQgUgPgJgTQgKgUAAgWIAAgHIBfAAIAAAFQAAARAOAKQANAJAVAAQAuAAABg7IAAhBQgnAigsAAQgwAAgdgcQgegbAAgyIAAhwQAAgmAUgZQAUgZAigMQAggLAlAAQAmAAAgALQAgAMAVAZQATAaAAAmIAAD1QAAAogPAdQgQAdghARQghARguAAQgeAAgcgIgAgviAIAABeQAAAVAPANQAOALASAAQATAAAOgLQAOgMABgXIAAhdQgBgXgMgMQgMgMgWAAQgvAAgBAvg");
	this.shape_5.setTransform(26.5,-12.4,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7DtQgYgHgVgOQgTgOgKgUQgKgTAAgXIAAgHIBhAAIAAAFQAAARAMAKQANAJAVAAQAvAAAAg7IAAhBQgoAigpAAQgyAAgdgcQgdgbgBgyIAAhwQAAgnAVgYQATgYAigNQAhgLAkAAQAmAAAiALQAgAMAUAZQATAZABAnIAAD1QgBAmgQAfQgQAeggAQQgiARgtAAQgeAAgdgIgAguiAIAABeQAAAVANANQAOALATAAQATAAAPgLQANgMAAgXIAAhdQAAgXgMgMQgMgMgXAAQgvAAABAvg");
	this.shape_6.setTransform(14.2,-12.4,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6DtQgagHgUgOQgTgPgKgTQgKgUAAgWIAAgHIBgAAIAAAFQAAARAOAKQANAJAVAAQAuAAAAg7IAAhBQgnAigrAAQgwAAgegcQgegbAAgyIAAhwQAAgmAVgZQAUgZAhgMQAigLAkAAQAlAAAhALQAgAMAVAZQAUAaAAAmIAAD1QAAAngRAeQgQAeggAQQghARguAAQgeAAgcgIgAgviAIAABeQAAAVAOANQAPALASAAQATAAAOgLQAOgMAAgXIAAhdQAAgXgMgMQgMgMgWAAQgwAAAAAvg");
	this.shape_7.setTransform(1.9,-12.4,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhsDOQgngiAAhBIAAgWIBdAAQAAAyANARQANASAbAAQATAAALgHQAKgGAGgSQAFgSAAgeIAAguQAAhEg1gBQgRABgNAIQgMAKgFAOIhbAAIALj5ID+AAIAABJIitAAIgFBkQAhgeAoAAQBAAAAgAkQAhAkAABBIAAAsQAAApgJAdQgIAegSATQgRATgbAJQgdAKglAAQhHAAgogjg");
	this.shape_8.setTransform(-10.7,-12.2,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANDsIAAlEIh4AAIAAhBIANAAQA3AAAkgXQAhgYAJgjIBFAAIAAHXg");
	this.shape_9.setTransform(-24.7,-12.4,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhfAdIAAg5IC/AAIAAA5g");
	this.shape_10.setTransform(-33.4,-10.1,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AyMMlIAA5JMAkaAAAIAAZJg");
	this.shape_11.setTransform(0,0,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2a, new cjs.Rectangle(-41.2,-28.4,82.4,57), null);


(lib.skidka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AhwEGQgzgTgmglQglglgUg1QgUg0AAhAQAAhBAUg0QAUg0AlglQAmgkAzgTQAzgTA+AAQA/AAAyATQAzATAlAkQAlAmAUAzQAUA0ABBBQgBBAgUA0QgUA0glAmQglAlgzATQgyATg/AAQg+AAgzgTgAhTh4QgbAoAABQQAABRAbAnQAbAoA5ABQA5gBAagoQAagmABhSQgBhRgagnQgagog5AAQg5AAgbAog");
	this.shape.setTransform(-59.5,21.8,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AC2FrIAAizIlrAAIAACGQAAALgDAGQgCAGgGAIQgGAHgIADQgHAEgNAAIhoAAIAAkkIATAAQASgBAQgEQAQgFAPgPQAPgPANgcQANgdALgvQALgzAIhEQAIhGAGhkIGHAAIAAGtIBlAAIAAD5QAAAVgNANQgNANgUAAgAg4gxQgRBKgaAuICrAAIAAk4IhkAAQgJBzgTBNg");
	this.shape_1.setTransform(-82.2,24.9,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AEPK8Qg+gagtgtQgtgugZhBQgahBAAhOQAAhRAahCQAZhDAtguQAuguA9gaQA+gaBKAAQBLAAA+AaQA+AZAvAvQAsAuAaBDQAaBCAABRQAABOgdBBQgcBBgvAuQguAtg+AaQg9AahFAAQhLAAg9gagAFsDWQgTAHgOAVQgNASgIAiQgIAgAAAxQAAAvAIAfQAIAgANARQANASAUAJQAUAIAXAAQAYAAAUgIQAVgJANgSQAPgSAIgfQAJggAAguQAAgwgJghQgIghgPgTQgOgUgUgIQgWgIgWAAQgWAAgVAIgAqzLEIQt1eQAPgRAVgOQAVgOAnAAIDcAAIwtVgQgQAUgVALQgWAMgfAAgAoggrQg9gXgvgwQgtgvgZhAQgahAAAhOQAAhRAahCQAZhCAtguQAuguA+gbQA9gZBLAAQBKAAA+AZQBAAbAtAuQAtAuAZBCQAaBCAABRQAABOgdBAQgbBAgwAvQguAug+AZQg+AahDAAQhLAAg9gagAnDoRQgUAIgOATQgNAUgIAgQgIAgAAAzQAAAvAIAfQAIAgANARQAPAUATAHQATAIAYAAQAYAAATgIQATgHAQgUQAOgRAIggQAJghAAgtQAAgwgJgjQgIgggOgUQgPgTgUgIQgUgIgXAAQgYAAgTAIg");
	this.shape_2.setTransform(61.7,23.9,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AjSKqQhggshHhaQhFhagoiIQgniHAAi7QAAi7AniHQAoiJBFhZQBHhaBggsQBggrBxAAQBwAABhArQBhAsBHBaQBFBXApCLQApCJAAC5QAAC5gpCJQgpCKhFBYQhHBZhhAtQhiAshvAAQhwAAhhgsgAhQnOQgnAUgcA1QgfA3gSBdQgSBeAACTQAACUASBdQASBeAfA2QAdA2AmAUQAmAUApAAQAnAAAngUQAmgTAfg3QAfg2ATheQAThggBiRQABiQgThhQgShdggg3Qgfg1gmgUQgngUgnAAQgpAAgmAUg");
	this.shape_3.setTransform(12.9,23.8,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("Ai5K/QhAgPg2gYQg2gZgwghQgugggmgmIBdh8QAOgTAUgLQAUgLAWAAQAdAAAaARIA5AjQAeASApARQApAPA9AAQA7AAArgUQAqgTAcgkQAbgiAMgvQAMgtAAg2QAAhng7g1Qg6g3hqAAQhgAAhbAkIi8gyIB5rGILXAAIAAB9QAAAegKAaQgKAbgVARQgUAUgjAKQgjAKgvAAIlSAAIgoDrQArgHAigDQAjgDAkgBQByAABUAjQBUAgA8A8QA7A9AdBNQAeBPAABbQAABygoBeQgpBehIBFQhHBDhlAmQhkAmh2AAQhFAAg/gPg");
	this.shape_4.setTransform(-27.5,24.1,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AEuG2QgWAAgNgKQgNgKgHgRIhCizIlpAAIhCCzQgFAQgOAKQgOALgVAAIh/AAIFZtrIClAAIFZNrgAgQjlQgGAWgKAZIhrEhIEXAAIhrkiQgJgVgHgZIgRg6g");
	this.shape_5.setTransform(78.7,-33.6,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("ADgG2QgWABgRgMQgQgPgMgVIi6knQgIgNgHgIQgKgJgIgFQgIgEgNgDQgMgBgPAAIhiAAIAAGBIijAAIAAtrICjAAIAAFvIBTAAQAYAAATgIQARgJAQgXIDAkcQAMgSARgNQAQgMAXAAICMAAIjvFgQgPAWgVAPQgUAQgYAIQAlALAZAUQAaAXAXAnIDlFxg");
	this.shape_6.setTransform(50.7,-33.6,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AFCIfIAAjRIqDAAIAACiQAAAWgOAMQgOANgYAAIhiAAIAAlOIBfAAQAQgIASgVQARgUAQglQAQglAOg3QAPg3ALhQQALhNAJhvQAIhsAEiOIIsAAIAALvICJAAIAAEfQAAAVgPANQgOANgXAAgAhXi7QgLBfgSBRQgPBIgVA5QgVA2gXAlIFwAAIAApxIjvAAQgHCEgNBhg");
	this.shape_7.setTransform(16.4,-30,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("ADOG2IABpkQACglAFgjQgKAcgQAiQgPAfgNATIlOIKIgNATQgGAHgLAIQgJAIgLAEQgLAEgLAAIh7AAIAAtrICkAAIgCJlQgCAogEAhQAMgjAOgcQAPgfANgVIFOoJIANgTQAHgHAKgJQAKgHAJgEQALgFAMABIB7AAIAANrg");
	this.shape_8.setTransform(-17.1,-33.6,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("ADgG2QgWABgRgMQgQgOgNgWIi5knQgIgNgHgIQgJgIgJgGQgIgEgOgDQgLgBgQAAIhhAAIAAGBIijAAIAAtrICjAAIAAFvIBTAAQAYAAATgIQASgJAPgXIDAkcQANgSAPgNQARgMAWAAICMAAIjuFgQgRAYgTANQgUAPgYAJQAkALAaAUQAZAXAXAnIDmFxg");
	this.shape_9.setTransform(-46.8,-33.6,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("Ah7GfQhNgig4g7Qg3g8gdhSQgdhTAAhhQgBhhAghTQAfhRA6g8QA5g8BPghQBQghBgAAQBfAABLAfQBKAgA0AzIg2BMQgFAHgIAFQgIAGgNAAQgIAAgKgGIgWgMIgagQQgOgJgVgIQgUgIgbgFQgbgFgigBQg7ABgvAUQgxAWgkAnQgkAqgSA4QgUA4AABJQAABKAWA6QAUA5AkAoQAkAnAwAVQAwAVA4AAQAdAAAfgEQAbgDAWgJQAVgGAXgNQAUgOAUgRQAGgGAHgDQAHgDAGgBQAOAAALALIA/BGQg1BBhOAkQhNAjhtAAQhiAAhOghg");
	this.shape_10.setTransform(-77.1,-33.6,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.skidka, new cjs.Rectangle(-93.8,-49.5,187.7,99), null);


(lib.sdf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3a();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sdf, new cjs.Rectangle(-73.5,-103,147,206), null);


(lib.qweww = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2b();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.qweww, new cjs.Rectangle(-64.5,-121.5,129,243), null);


(lib.qwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2a();
	this.instance.parent = this;
	this.instance.setTransform(-64,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.qwe, new cjs.Rectangle(-64,-115.5,128,231), null);


(lib.p5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p5();
	this.instance.parent = this;
	this.instance.setTransform(-120,-162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p5_1, new cjs.Rectangle(-120,-162,300,180), null);


(lib.m4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF6B1").s().p("AfPA3ImNB1IAAABIgCAAIgCAAIAAgBImNh1ImQB2ImRh2ImQB2ImPh2ImOB1IAAABIgBAAIgCAAIAAgBImNh1ImRB2ImQh2ImQB2IAAhdIBUgVIAAh2IhUgUIAAhdIGQB2IGQh2IGRB2IGNh1IAAgBIACABIABgBIAAABIGOB1IGPh2IGQB2IGRh2IGQB2IGNh1IAAgBIACABIACgBIAAABIGNB1IGQh2IAABdIhVAUIAAB2IBVAVIAABdgALMg7IAAB2IBVAVIBUgVIAAh2IhUgUgAhUg7IAAB2IBUAVIBVgVIAAh2IhVgUgAtyg7IAAB2IBUAVIBTgVIAAh2IhTgTgA6Sg7IAAB2IBUAVIBVgVIAAh2IhVgUgAXtg7IAAB2IBTAUIBTgUIAAh2IhTgTgEAgUAAAIAAABIC0ArIAAhXgAbVAsIC0grIAAgBIi0grgAT3AAIAAABIC0ArIAAhXgAO4AsIC0grIAAgBIi0grgAHWAAIAAABIC0ArIAAhXgACXAsIC0grIAAgBIi0grgAlKAAIAAABIC0ArIAAhXgAqJAsIC0grIAAgBIi0grgAxoAAIAAABIC0ArIAAhXgA2nAsIC0grIAAgBIi0grgA+JAAIAAABIC0ArIAAhXgEgjIAAsIC0grIAAgBIi0grg");
	this.shape.setTransform(239.9,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m4, new cjs.Rectangle(0,0,479.9,34.6), null);


(lib.m3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF6B1").s().p("EgleADiIAAhaMBK9AAAIAABagEgleABFIAAhlIEYhtIAAgBIkYAAIAAhTMBK9AAAIAABTIkYAAIAAABIEYBtIAABlgAa8gNIAAABIIlAAIAAgBIkShsgAOfgNIAAABIIkAAIAAgBIkShsgAB+gNIAAABIIlAAIAAgBIkThsgAqigNIAAABIIlAAIAAgBIkShsgA3AgNIAAABIIlAAIAAgBIkShsgEgjggANIAAABIIkAAIAAgBIkShsgAIIiNIEZBtIEYhtIAAgBIoxAAgAkXiNIEXBtIEYhtIAAgBIovAAgA9WiNIEYBtIEZhtIAAgBIoxAAgAUpiNIEXBtIEXhtIAAgBIouAAgAw1iNIEXBtIEXhtIAAgBIouAAg");
	this.shape.setTransform(239.9,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m3, new cjs.Rectangle(0,0,479.9,45.2), null);


(lib.m2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF6B1").s().p("AfPA3ImNB1IAAABIgCgBIgCABIAAgBImNh1ImQB2ImRh2ImQB2ImPh2ImOB1IAAABIgBgBIgCABIAAgBImNh1ImRB2ImQh2ImQB2IAAhdIBUgVIAAh1IhUgVIAAhdIGQB2IGQh2IGRB2IGNh1IAAgBIACABIABgBIAAABIGOB1IGPh2IGQB2IGRh2IGQB2IGNh1IAAgBIACABIACgBIAAABIGNB1IGQh2IAABdIhVAVIAAB1IBVAVIAABdgALMg6IAAB1IBVAVIBUgVIAAh1IhUgVgAhUg6IAAB1IBUAVIBVgVIAAh1IhVgVgAtyg6IAAB1IBUAVIBTgVIAAh1IhTgUgA6Sg6IAAB1IBUAVIBVgVIAAh1IhVgVgAXtg6IAAB1IBTAUIBTgUIAAh1IhTgUgEAgUAAAIAAABIC0ArIAAhXgAbVAsIC0grIAAgBIi0grgAT3AAIAAABIC0ArIAAhXgAO4AsIC0grIAAgBIi0grgAHWAAIAAABIC0ArIAAhXgACXAsIC0grIAAgBIi0grgAlKAAIAAABIC0ArIAAhXgAqJAsIC0grIAAgBIi0grgAxoAAIAAABIC0ArIAAhXgA2nAsIC0grIAAgBIi0grgA+JAAIAAABIC0ArIAAhXgEgjIAAsIC0grIAAgBIi0grg");
	this.shape.setTransform(239.9,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m2, new cjs.Rectangle(0,0,479.9,34.6), null);


(lib.m1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF6B1").s().p("EgleADFIAAhSIE/AAIAAgBIk/hPIAAhFIE/hPIAAgBIk/AAIAAhSMBK9AAAIAABSIk/AAIAAABIE/BPIAABFIk/BPIAAABIE/AAIAABSgAUCByIAAABIJ8AAIAAgBIk+hPgAHhByIAAABIJ/AAIAAgBIk/hPgAk+ByIAAABIJ+AAIAAgBIlAhPgAxdByIAAABIJ9AAIAAgBIk+hPgA99ByIAAABIJ/AAIAAgBIlAhPgAa0AAIAAAAIEbBBIEahBIAAAAIkag/gAOWAAIAAAAIEbBBIEbhBIAAAAIkbg/gAB2AAIAAAAIEaBBIEbhBIAAAAIkbg/gAqqAAIAAAAIEbBBIEahBIAAAAIkag/gA3IAAIAAAAIEbBBIEahBIAAAAIkag/gEgjpAAAIAAAAIEbBBIEbhBIAAAAIkbg/gAHhhxIFABPIE/hPIAAgBIp/AAgAk+hxIE+BPIFAhPIAAgBIp+AAgA99hxIE/BPIFAhPIAAgBIp/AAgAxdhxIE/BPIE+hPIAAgBIp9AAgAUChxIE+BOIE+hOIAAgBIp8AAg");
	this.shape.setTransform(239.9,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.m1, new cjs.Rectangle(0,0,479.9,39.4), null);


(lib.logo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ABmDNIgSguIioAAIgRAuIisAAICvmaIDFAAICwGagAAxA6IgxiKIAAAAIgwCKIBhAAg");
	this.shape.setTransform(74.1,-2.6,0.318,0.318);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhQDNIAAkyIiWAAIAAhoIHNAAIAABoIiWAAIAAEyg");
	this.shape_1.setTransform(50.2,-2.6,0.318,0.318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ABbDNIAAijIi2AAIAACjIiiAAIAAmZICiAAIAACPIC2AAIAAiPICiAAIAAGZg");
	this.shape_2.setTransform(24.4,-2.6,0.318,0.318);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("Ai4CwQg9gnAAhfIAAj+ICjAAIAAD4QAAAmAWARQATAPApAAQAqAAAUgPQAWgRAAgmIAAj4ICiAAIAAD+QAABfg8AnQg4AliCAAQiAAAg4glg");
	this.shape_3.setTransform(-2.9,-2.4,0.318,0.318);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AjODNIAAmaICiAAIAAEsID7AAIAABug");
	this.shape_4.setTransform(-27.6,-2.6,0.318,0.318);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AmUGVQioinAAjuQAAjsCoioQCoioDsAAQDtAACoCoQCoCoAADsQAADuioCnQioCojtAAQjsAAioiogAhBjKQgjAdgMAgIhsEuIFXAAQAzAAAmgcQAegXAGgZIlcAAIBsk8IgHAAQgeAAgkAdg");
	this.shape_5.setTransform(-64.6,-1,0.318,0.318);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("Ag0A1QgVgWAAgfQAAgeAVgWQAWgWAeAAQAfAAAWAWQAVAWAAAeQAAAfgVAWQgWAWgfAAQgeAAgWgWg");
	this.shape_6.setTransform(23.9,14.4,0.318,0.318);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AVcA8QgTgXAAglQAAgkATgXQAbggA/AAQA+AAAbAgQATAXABAkQgBAlgTAXQgbAgg+AAQg/AAgbgggAWIgnQgMAQgBAXQABAYAMAQQAQATAeAAQAdAAAQgTQANgQAAgYQAAgXgNgQQgQgTgdAAQgeAAgQATgALbBTQghgOAAglIA0AAQABAcAtAAQAlAAAAgVQAAgKgIgEQgGgEgQgCIgrgHQgcgEgNgIQgTgMAAgZQAAg2BXAAQBZAAADA3Ig0AAQgCgPgNgGQgLgEgSAAQgOAAgJAGQgJAGAAAJQAAAMAUAEIA7AJQAbAFAOAKQAPALAAAWQAAA7haAAQgrAAgWgJgAb4BXIhfh5IgBAAIAAB5IguAAIAAitIA4AAIBbB4IABAAIAAh4IAuAAIAACtgATRBXIAAitIAvAAIAACtgARPBXIAAhMIhiAAIAABMIgvAAIAAitIAvAAIAABBIBiAAIAAhBIAvAAIAACtgAJUBXIgPgkIhQAAIgOAkIg0AAIBNitIA6AAIBMCtgAI5ATIgchEIgbBEIA3AAgADvBXIAAitICdAAIAAAhIhtAAIAAAmIBlAAIAAAgIhlAAIAABGgAnBBXIAAitIBtAAQArAAAWAYQAUAWABAoQgBApgUAWQgVAYgpAAgAmSA2IA1AAQAuAAAAg3QgBg0gyAAIgwAAgApHBXIhgh5IAAAAIAAB5IguAAIAAitIA3AAIBcB4IAAAAIAAh4IAuAAIAACtgAtGBXIgPgkIhQAAIgOAkIgzAAIBMitIA6AAIBNCtgAthATIgbhEIgcBEIA3AAgAy0BXIAAitIAvAAIAACLIBrAAIAAAigA06BXIhfh5IAAAAIAAB5IgvAAIAAitIA4AAIBbB4IABAAIAAh4IAuAAIAACtgA5JBXIAAitIAvAAIAACtgA8rBXIAAitICdAAIAAAhIhuAAIAAAmIBmAAIAAAgIhmAAIAABGg");
	this.shape_7.setTransform(24.3,14.3,0.318,0.318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo2, new cjs.Rectangle(-82.8,-19.2,165.6,36.5), null);


(lib.logo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AD6K4IhBkmIlxAAIhBEmIkkAAIFx1vIFaAAIFwVvgAiHCsIEQAAIiHpxIgDAAg");
	this.shape.setTransform(70.6,29.7,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AiLK4IAA1vIEYAAIAAVvg");
	this.shape_1.setTransform(42.5,29.7,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("ACOK4IlWvOIgEAAIAAPOIkBAAIAA1vIFEAAIFSO4IAEAAIAAu4IEBAAIAAVvg");
	this.shape_2.setTransform(13.9,29.7,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AD5K4IhAkmIlxAAIhAEmIklAAIFw1vIFbAAIFwVvgAiICsIERAAIiHpxIgDAAg");
	this.shape_3.setTransform(-25.1,29.7,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AFpK4IAAxWIgEAAIj4RWIjZAAIj4xWIgEAAIAARWIkBAAIAA1vIGhAAIDHPWIADAAIDJvWIGfAAIAAVvg");
	this.shape_4.setTransform(-69.7,29.7,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AEKLnIhEk6ImLAAIhEE6Ik4AAIGJ3NIFxAAIGJXNgAiRC3IEjAAIiQqbIgDAAg");
	this.shape_5.setTransform(71.2,-28,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AiVLnIAAzXIlEAAIAAj2IOzAAIAAD2IlEAAIAATXg");
	this.shape_6.setTransform(37,-28,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("ACvLnIAAqUIldAAIAAKUIkrAAIAA3NIErAAIAAI4IFdAAIAAo4IErAAIAAXNg");
	this.shape_7.setTransform(-1.1,-28,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AiwLhQhVgQhDgzQhDg0gnhdQgnhdAAiWIAAwLIErAAIAAQLQAAA3AHAwQAIAvATAiQAVAiAiAUQAhAUA0AAQA3AAAggUQAigUATgiQAUgiAHgvQAIgvAAg4IAAwLIErAAIAAQLQAACOgnBcQgoBchCA2QhCA2hWATQhXAThaAAQhYAAhYgRg");
	this.shape_8.setTransform(-41.3,-27.6,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AmeLnIAA3NIErAAIAATXIISAAIAAD2g");
	this.shape_9.setTransform(-76.7,-28,0.353,0.353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo1, new cjs.Rectangle(-91.6,-54.3,183.2,108.7), null);


(lib.gh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p4b();
	this.instance.parent = this;
	this.instance.setTransform(-61,-124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gh, new cjs.Rectangle(-61,-124.5,122,249), null);


(lib.fghfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p4a();
	this.instance.parent = this;
	this.instance.setTransform(-60.5,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fghfg, new cjs.Rectangle(-60.5,-123.5,121,247), null);


(lib.dfrg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3b();
	this.instance.parent = this;
	this.instance.setTransform(-70,-120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfrg, new cjs.Rectangle(-70,-120.5,140,241), null);


(lib.mania = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m4
	this.instance = new lib.m4();
	this.instance.parent = this;
	this.instance.setTransform(159.9,146.4,1,1,0,0,0,239.9,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:239.9},49).wait(1));

	// m3
	this.instance_1 = new lib.m3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(239.9,103,1,1,0,0,0,239.9,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:159.9},49).wait(1));

	// m2
	this.instance_2 = new lib.m2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.9,60.1,1,1,0,0,0,239.9,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:239.9},49).wait(1));

	// m1
	this.instance_3 = new lib.m1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(239.9,19.7,1,1,0,0,0,239.9,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:159.9},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,0,559.9,163.7);


// stage content:
(lib._336x280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_305 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(305).call(this.frame_305).wait(66));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A6K1yMA0VAAAMAAAArlMg0VAAAg");
	this.shape.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(371));

	// logo2
	this.instance = new lib.logo2();
	this.instance.parent = this;
	this.instance.setTransform(163.9,247.4,1.12,1.12);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(58).to({alpha:0},7,cjs.Ease.get(1)).wait(1));

	// p5
	this.instance_1 = new lib.p5_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.9,196.4,1.12,1.12);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(296).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(58).to({alpha:0},7,cjs.Ease.get(1)).wait(3));

	// t4a
	this.instance_2 = new lib.t4a();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.6,71.2,0.806,0.806,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(226).to({_off:false},0).to({scaleX:1.01,scaleY:1.01,x:53,y:38,alpha:1},7,cjs.Ease.get(1)).wait(54).to({scaleX:0.81,scaleY:0.81,x:67.6,y:71.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},3).wait(74));

	// t4b
	this.instance_3 = new lib.t4a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(271.3,209.2,0.806,0.806,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(227).to({_off:false},0).to({regX:0,scaleX:1.01,scaleY:1.01,x:285.2,y:242.4,alpha:1},7,cjs.Ease.get(1)).wait(52).to({regX:0.1,scaleX:0.81,scaleY:0.81,x:271.3,y:209.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},4).wait(74));

	// p4a.png
	this.instance_4 = new lib.fghfg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(137.8,149.1,0.717,0.717,0,0,0,0.1,0.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(222).to({_off:false},0).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,x:129.7,y:149.2,alpha:1},7,cjs.Ease.get(1)).wait(60).to({regX:0.1,regY:0.2,scaleX:0.72,scaleY:0.72,x:137.8,y:149.1,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(74));

	// p4b.png
	this.instance_5 = new lib.gh();
	this.instance_5.parent = this;
	this.instance_5.setTransform(202,154.8,0.717,0.717,0,0,0,0.2,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(224).to({_off:false},0).to({regX:0.1,scaleX:0.9,scaleY:0.9,x:209.9,y:156.5,alpha:1},7,cjs.Ease.get(1)).wait(57).to({regX:0.2,scaleX:0.72,scaleY:0.72,x:202,y:154.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},2).wait(74));

	// t3a
	this.instance_6 = new lib.t3a();
	this.instance_6.parent = this;
	this.instance_6.setTransform(67.6,71.2,0.806,0.806,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(152).to({_off:false},0).to({scaleX:1.01,scaleY:1.01,x:53,y:38,alpha:1},7,cjs.Ease.get(1)).wait(54).to({scaleX:0.81,scaleY:0.81,x:67.6,y:71.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},3).wait(148));

	// t3b
	this.instance_7 = new lib.t3b();
	this.instance_7.parent = this;
	this.instance_7.setTransform(269.5,209.2,0.806,0.806,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(154).to({_off:false},0).to({scaleX:1.01,scaleY:1.01,x:282.9,y:242.4,alpha:1},7,cjs.Ease.get(1)).wait(51).to({scaleX:0.81,scaleY:0.81,x:269.5,y:209.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},4).wait(148));

	// p3a.png
	this.instance_8 = new lib.sdf();
	this.instance_8.parent = this;
	this.instance_8.setTransform(138.5,131.5,0.717,0.717,0,0,0,0.2,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(148).to({_off:false},0).to({regX:0.1,scaleX:0.9,scaleY:0.9,x:130.6,y:128.5,alpha:1},7,cjs.Ease.get(1)).wait(60).to({y:127.4},0).to({regX:0.2,scaleX:0.72,scaleY:0.72,x:138.5,y:131.5,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(148));

	// p3b.png
	this.instance_9 = new lib.dfrg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(204.1,156.8,0.717,0.717,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,x:212.6,y:158.9,alpha:1},7,cjs.Ease.get(1)).wait(57).to({scaleX:0.72,scaleY:0.72,x:204.1,y:156.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},2).wait(148));

	// t2a
	this.instance_10 = new lib.t2a();
	this.instance_10.parent = this;
	this.instance_10.setTransform(67.6,71.2,0.806,0.806,0,0,0,0,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(78).to({_off:false},0).to({regX:0.1,scaleX:1.01,scaleY:1.01,x:53.1,y:38,alpha:1},7,cjs.Ease.get(1)).wait(54).to({regX:0,scaleX:0.81,scaleY:0.81,x:67.6,y:71.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},3).wait(222));

	// t2b
	this.instance_11 = new lib.t2b();
	this.instance_11.parent = this;
	this.instance_11.setTransform(271.4,209.2,0.806,0.806,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(80).to({_off:false},0).to({regX:0,scaleX:1.01,scaleY:1.01,x:285.2,y:242.4,alpha:1},7,cjs.Ease.get(1)).wait(51).to({regX:0.1,scaleX:0.81,scaleY:0.81,x:271.4,y:209.2,alpha:0},7,cjs.Ease.get(1)).to({_off:true},4).wait(222));

	// p2a.png
	this.instance_12 = new lib.qwe();
	this.instance_12.parent = this;
	this.instance_12.setTransform(137.6,143,0.717,0.717,0,0,0,0.2,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(74).to({_off:false},0).to({regX:0.1,scaleX:0.9,scaleY:0.9,x:123.9,y:141.7,alpha:1},7,cjs.Ease.get(1)).wait(60).to({x:129.5},0).to({regX:0.2,scaleX:0.72,scaleY:0.72,x:137.6,y:143,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(222));

	// p2b.png
	this.instance_13 = new lib.qweww();
	this.instance_13.parent = this;
	this.instance_13.setTransform(201.2,158.4,0.717,0.717,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(76).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,x:209,y:161,alpha:1},7,cjs.Ease.get(1)).wait(57).to({scaleX:0.72,scaleY:0.72,x:201.2,y:158.4,alpha:0},7,cjs.Ease.get(1)).to({_off:true},2).wait(222));

	// skidka
	this.instance_14 = new lib.skidka();
	this.instance_14.parent = this;
	this.instance_14.setTransform(168.4,204,0.717,0.717,0,0,0,0.1,0.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({_off:false},0).to({regX:0,regY:0,scaleX:0.9,scaleY:0.9,x:168,y:223.7,alpha:1},7,cjs.Ease.get(1)).wait(56).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(296));

	// tolko
	this.instance_15 = new lib.tolko();
	this.instance_15.parent = this;
	this.instance_15.setTransform(164.2,143.6,0.806,0.806,0,0,0,0.3,0.3);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({_off:false},0).to({regY:0.1,scaleX:1.01,scaleY:1.01,x:162.8,y:145.6,alpha:1},7,cjs.Ease.get(1)).wait(56).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},3).wait(296));

	// logo1
	this.instance_16 = new lib.logo1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(175,84.7,0.717,0.717,0,0,0,0.1,0.1);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleX:0.9,scaleY:0.9,x:175.8,y:66,alpha:1},7,cjs.Ease.get(1)).wait(56).to({regX:0.3,scaleX:0.41,scaleY:0.41,x:287.3,y:35.5},7,cjs.Ease.get(1)).wait(220).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(73));

	// mania - копия
	this.instance_17 = new lib.mania();
	this.instance_17.parent = this;
	this.instance_17.setTransform(121.9,455.8,1.008,1.008,0,0,0,120,164.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},7,cjs.Ease.get(1)).wait(60).to({y:456.8,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(296));

	// mania
	this.instance_18 = new lib.mania();
	this.instance_18.parent = this;
	this.instance_18.setTransform(121.9,288.4,1.008,1.008,0,0,0,120,164.4);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({alpha:1},7,cjs.Ease.get(1)).wait(60).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(296));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC00").s().p("Eg1IBYlMAAAixJMBqSAAAMAAACxJg");
	this.shape_1.setTransform(168,140.1,0.494,0.247,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(371));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(88.3,139.5,564.3,455.5);
// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/p5.jpg", id:"p5"},
		{src:"images/336x280_atlas_P_.png", id:"336x280_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;