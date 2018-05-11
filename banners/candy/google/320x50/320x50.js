(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"320x50_atlas_P_", frames: [[0,87,62,80],[0,0,69,85]]},
		{name:"320x50_atlas_NP_", frames: [[0,0,240,90],[0,92,240,90],[0,184,133,50]]}
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



(lib.p0 = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p1 = function() {
	this.spriteSheet = ss["320x50_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p2 = function() {
	this.spriteSheet = ss["320x50_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["320x50_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["320x50_atlas_NP_"];
	this.gotoAndStop(2);
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


(lib.rgfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAcIAAgeIgSAeIgIAAIAAgoIAHAAIAAAeIATgeIAHAAIAAAogAgGgUQgDgDgBgEIAFAAIACADIADABIAFgBIACgDIAFAAQAAAEgDADQgEACgEABQgFgBgCgCg");
	this.shape.setTransform(55.1,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBQABgEACgDQACgDAFgBQAEgCAEAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgCAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_1.setTransform(50.6,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDAlIAAgUIgEAEIgGABQgGAAgFgGQgFgGAAgKQAAgIAFgHQAEgGAHAAQAEAAACACQACABACACIAAgUIAHAAIAAAUQABgCAEgBQACgCADAAQAHAAAEAHQAFAGAAAIQAAAKgFAGQgEAGgIAAIgEgBQgDgBgCgDIAAAUgAAGgLQgCAEAAAHQAAAKACADQADADADAAQAEAAAEgEQADgEAAgIQAAgHgDgEQgDgEgEAAQgFAAgCAEgAgTgLQgDAEAAAHQAAAIADAEQADAEAEAAQAFAAACgEQADgEgBgHQABgIgDgEQgDgEgEAAQgFAAgCAEg");
	this.shape_2.setTransform(45.1,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_3.setTransform(37.4,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAUIAAgFIADAAIADgBIABgCIAAgFIAAgbIAgAAIAAAoIgHAAIAAgiIgSAAIAAAUIAAAJQAAACgDACQgCACgEAAIgFgBg");
	this.shape_4.setTransform(32.6,7.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAJAVIAAgjIgRAAIAAAjIgHAAIAAgpIAfAAIAAApg");
	this.shape_5.setTransform(28.3,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAVIAAghIgMAhIgGAAIgLgiIAAAiIgHAAIAAgpIALAAIAKAgIAMggIAKAAIAAApg");
	this.shape_6.setTransform(23.4,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_7.setTransform(18.5,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgDgFgBQgGAAgEAEQgFADgCAGQgBAFAAAFQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgDACgIIAHACQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_8.setTransform(13.3,6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAADIgEAJIgFgDIAGgHIgJgCIACgFIAJADIgBgJIAFAAIgBAJIAJgDIACAFIgKACIAHAHIgFADIgFgJg");
	this.shape_9.setTransform(6.7,4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAADIgFAJIgEgDIAHgHIgKgCIACgFIAJADIgBgJIAEAAIAAAJIAJgDIACAFIgKACIAHAHIgFADIgFgJg");
	this.shape_10.setTransform(3.6,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rgfg, new cjs.Rectangle(0,0,59.5,12.9), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/IG0IAAtnMA+RAAAIAANng");
	mask.setTransform(199.3,43.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("AF3C9QgZgKgVgTQgVgUgNgfQgNgeAAgqIABgdQhcBFhAAgQhNAmgsAAQgeAAgVgMQgTgLgPgXQgNgVgGgXIgNgsQgKgugLAAQgUAAgfAkQgfAjhGBbQgFAKgOACQgHABgFgFQgFgFABgPIALhsQgnAlgyAfQh3BMhcg5QgkgWgggvQgzBTgrALQgZAGgOgRQgNgSAAgoIABgTQgQAOgOAKQg0AmgzAZQg0AbgyAOQg2APgoAAQg/AAgfhAQgfhAAUhrQAEgTANAAQAFAAAFADQASAKgDAXQgMBGAUArQATAoAkAAQAmAAAwgOQAtgOAzgaQAygbAvggQAwgjAngoIAFgFIAHgLQATgeAcgZQAbgXAXAAQAnAAALAtQAKAqgDAeQgFAXgQAAIgDAAQgIgBgEgFIAGAJQAcAxAiARQAjASAbAAQAyAAA9gnQA/goAyg2IABgBQAQgKAKAKQAQAKgCAWIgIBBQAhgmAigkQAogrAcAAQAgAAALAgIAQA2QAIAfARAhQAPAeAnAAQAoAABHgiQBGgiB1hbQANgeASgXQAXgdAYgRQAbgRATgEIAFAAQATAAABAeQABAWgIAHQgFAGgHAAQgRAEgRALQgSAMgRAWQgQAVgMAfQgNAfAAAlQAAAzAhAXQAiAWAiAAQBiAABSg9QBUg/A3hSIABgBQAFgKAHgJQATgeAcgZQAbgXAXAAQAnAAALAtQAKAqgDAeQgFAXgQAAIgDAAQgIgBgEgFIAGAJQAcAxAiARQAiASAcAAQAyAAA9gnQA9gnA0g3IABgBQAJgFAFAAQANAAAFASQAGAYgMAQQg4A8hEAqQhEAsg7AAQgsAAgogZQglgXgfguQgzBTgrALQgZAGgOgRQgNgSAAgoIAAgCQgpArgtAkQhcBFhoAAQgXAAgbgJgAM3hcQgUATgOAWQgRAbgLAZQgLAbAAAYQAAAFABACIAGgEIAMgKQAOgMAQgVQAPgQASgcQAPgXAOAGQAHADAGAIQgFgIAAgQQACgNgEgSQgDgNgKAAQgOAAgRAOgArChcQgUATgOAWQgRAbgLAZQgLAbAAAYQAAAFABACIAGgEIAMgKQAQgPAOgSQAQgSARgaQAPgXAOAGQAHADAGAIQgFgIAAgQQACgNgEgSQgDgNgKAAQgOAAgRAOg");
	this.shape.setTransform(272,55.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("AgyAVQgEgdAQgJIA8gaQAGgDAEAAQAQAAAEAaQADAegTAJIg8AaQgEACgEAAQgNAAgFgag");
	this.shape_1.setTransform(159.6,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("AjqGgQgQgSAAgeQAAgeAKgoQAJgoAQgvQASg0AUgvQAUgvAbg0QAXgrAeguQAbgqAdgfIABgCQALgIAKABQALABAIAJQAHAIABAJQABAKgGAJIgBADQgXAZgcApQgaApgYArQgWApgWAzQgVAwgPAtQgPAsgJAmQgIAnAAAVQAAAHABACIADAAQAaAAAxgMQAygLBDgWQA1gQBaggQBNgcBLgfQBSgjA/geQBDgfA2ggQA1gfAegbQAZgVgBgMQAAgKgUgJQgegNgwgGQg0gGg9gBIh9gBIhegBQgtAAgkgEQgmgFgVgJQgigNAAgeQABgSAPgTQANgQASgOQAVgSAVgPIBthKQAWgPAhgbQAWgSAPgTQAIgMACgHQgHgCgNAAQgmAAhAAPQhCAQhPAbQhPAbhaAmQheAnhTAoQhYArhOAtQhOAug9AsQg8AtghAoQgeAkAAAcQgBAHAGAHQAJAKgBANQgBALgKAIQgIAHgLAAQgLAAgJgJQgXgWAAggQAAguAqgzQAmgtBAgxQBDgyBOgtQBLgtBggvQBZgrBdgnQBYglBWgdQBTgdBFgQQBEgRAtAAQAiAAATALQAbAOAAAfQABAcgVAcQgQAWgdAaQgXATgmAcIhAArIgtAfIglAbQgPALgHAIQATAEAXABIBIADIBRABICKACQBGABA1AIQA6AIAmATQAuAXAAAsQgBAhgnAlQghAhg6AiQg8AlhEAgQhIAjhMAgQhKAfhTAeQhJAbhKAXQg/ATg8AOQg3ANgfAAQgdAAgSgUg");
	this.shape_2.setTransform(73.3,43.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,398.4,87.2), null);


(lib.hyjkhj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C454E").s().p("ABwBgQgFgGgBgGQAJgMgBgNQgBgOgQgEQgGgBgCgGQgCgGAFgFQATgQgKgTQgGgLgMgHQgNgIgNABQgEAAgDgCQgDgDgBgDQgDgPgWgMQgYgLgQAJQgMAHgEARIgCAEQgHAIgJgGQgTgPgSAKQgIAEgHAJQgGAJgCALIgSAIQgJACAIgVQAJgcAWgMQAYgNAZAMQAIgQAOgIQAbgPAjARQAZANAIAUQASABAPAKQAPAKAIAPQANAZgQAXQATALAAAWQAAAVgOARQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgDAAgEgEg");
	this.shape.setTransform(6.9,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C454E").s().p("Ag8AmQgDgDABgEQABgEAEgDIBqhCQAEAOAKAPIhtA3IgGABQgFAAgDgFg");
	this.shape_1.setTransform(-12.9,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C454E").s().p("Ag6A3QgEgDAAgEQAAgEAEgDIBdhiQALAOARALIhpBXQgEADgEAAQgEAAgEgDg");
	this.shape_2.setTransform(-17.7,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C454E").s().p("AgLCdQgSgHgNgNQgYgYAFgdQgSgEgSgJQgYgNgLgTQgLgWAMgWQgdgKgJgbQgIgbARgdQARgcAcgLQAhgNAfAUQAMgTAUgIQATgIAXAFQAUAEATANQAeAUAHAbQAXAFASARQASAPAHAVQAGAQgDAQQgDAQgMANQAWARgDAeQgEAbgVAUQgPANgTAGQgVAFgVgEQgPAZggABIgEAAQgQAAgPgGgAgdBCQAFAGgEAHQgMAUATAUQAUATAYgCQAUgBAFgSQACgGAGgCQAGgDAGACQAQAGAQgEQAPgDALgLQAQgOABgRQABgTgUgIQgIgDgBgIQgCgIAHgFQAbgRgJgbQgGgQgOgLQgQgNgQgBQgFAAgEgEQgEgDgBgFQgBgVgbgSQgLgIgOgDQgPgEgLAEQgRAHgIAWIgEAFQgEAEgGAAQgHAAgEgEQgXgXgYAKQgSAHgMATQgLAUAFARQAFATAeAEQAEAAAEADQAEAEAAAGQAAAFgEAEQgPAOAGAPQAFANATAKQAWAMATAAIABAAQAHAAAEAGg");
	this.shape_3.setTransform(0.3,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hyjkhj, new cjs.Rectangle(-24,-27.3,44.6,43.6), null);


(lib.hkhjk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgnBBIAAiBIAZAAQAVAAAJACQAJADAJAJQAGAIABAMQgBANgGAJQgHAIgMADQgMABgUAAIgKAAIAAA9gAgbgHIAWAAQANAAAGgDQAGgBAEgGQADgGAAgGQAAgHgDgFQgFgGgEgCQgGgCgMAAIgYAAg");
	this.shape.setTransform(57.8,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AAwBBIgUgrIg3AAIgUArIgOAAIA9iBIACAAIA8CBgAgVAKIArAAIgWgvg");
	this.shape_1.setTransform(45.6,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AAhBBIAAh0IhBAAIAAB0IgNAAIAAiBIBbAAIAACBg");
	this.shape_2.setTransform(32.8,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AAlBBIAAhiIhUBiIgDAAIAAiBIANAAIAABkIBVhkIADAAIAACBg");
	this.shape_3.setTransform(15,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgoBBIAAiBIAaAAQAVAAAJACQAJADAJAJQAGAIAAAMQAAANgGAJQgIAIgLADQgLABgVAAIgJAAIAAA9gAgagHIAVAAQAMAAAHgDQAFgBAFgGQADgGAAgGQAAgHgDgFQgFgGgEgCQgGgCgNAAIgWAAg");
	this.shape_4.setTransform(-1.7,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AgvAwQgUgTAAgcQAAgSAJgQQAKgQAOgJQAPgJATAAQAdAAATAUQAUATAAAcQAAAdgUATQgUAUgcAAQgcAAgTgUgAgbgvQgNAIgGAMQgIANAAAPQAAAWAQARQAPAPAXAAQAOAAANgHQANgHAHgNQAIgNgBgPQABgOgIgNQgHgNgNgHQgMgHgPAAQgNAAgOAHg");
	this.shape_5.setTransform(-15.1,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgFBBIAAh0IgdAAIAAgNIBGAAIAAANIgeAAIAAB0g");
	this.shape_6.setTransform(-26.7,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AgvAwQgUgTAAgcQAAgSAJgQQAKgQAOgJQARgJARAAQAdAAATAUQAUATAAAcQAAAdgTATQgVAUgcAAQgbAAgUgUgAgbgvQgMAHgHANQgIANAAAPQAAAWAQARQARAPAVAAQAOAAANgHQANgHAHgNQAIgMgBgQQABgPgIgMQgHgMgNgIQgNgHgOAAQgOAAgNAHg");
	this.shape_7.setTransform(-38.4,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AA8BBIgNhcIgtBcIgCAAIguhdIgNBdIgMAAIASiBIACAAIAzBpIA0hpIACAAIATCBg");
	this.shape_8.setTransform(-54.4,10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AAlBQIAAhiIhUBiIgDAAIAAiAIANAAIAABjIBVhjIADAAIAACAgAgUhCQgIgEgCgJIALAAQAEAFAEACQAFACAGAAQAIAAAEgCQAEgCAEgFIALAAQgBAHgJAGQgIAFgNABQgMgBgIgFg");
	this.shape_9.setTransform(58.4,-12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AArBBIAAiBIANAAIAACBgAg3BBIAAiBIAOAAIAAA4IAJAAQAaAAAJADQALABAHAIQAHAJgBAPQABANgHAJQgGAJgKADQgLACgXABgAgpA0IANAAQAWAAAGgCQAGgBAEgHQAEgGAAgIQAAgKgFgGQgEgFgIgCQgHgBgUgBIgLAAg");
	this.shape_10.setTransform(44.6,-11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AAhBBIAAg+IhBAAIAAA+IgNAAIAAiBIANAAIAAA2IBBAAIAAg2IANAAIAACBg");
	this.shape_11.setTransform(31.3,-11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AgoBBIAAiBIAaAAQAWABAHACQALABAHAKQAIAJgBAMQABAMgIAJQgGAIgNADQgHABgYAAIgJAAIAAA9gAgagHIAVAAQANAAAGgCQAGgDADgFQAEgFAAgHQAAgHgEgFQgDgFgGgDQgGgCgMAAIgWAAg");
	this.shape_12.setTransform(20.2,-11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AgvAwQgUgUAAgbQAAgSAJgQQAJgQAQgJQAPgJASAAQAcAAAUAUQAUATAAAcQAAAdgUATQgTAUgdAAQgcAAgTgUgAgagvQgNAIgHANQgIANAAAOQAAAWAQARQAQAPAWABQAPAAANgIQAMgHAIgNQAHgNAAgPQAAgOgHgNQgJgNgMgHQgMgHgPAAQgNAAgNAHg");
	this.shape_13.setTransform(6.7,-11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgFBBIAAh0IgeAAIAAgNIBGAAIAAANIgdAAIAAB0g");
	this.shape_14.setTransform(-4.9,-11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AgnBBIAAiBIAZAAQAXABAGACQALABAHAKQAHAJAAAMQAAAOgHAHQgGAIgMADQgIABgYAAIgJAAIAAA9gAgagHIAVAAQANAAAGgCQAHgEACgEQAEgFAAgHQAAgHgEgFQgDgFgGgDQgGgCgMAAIgWAAg");
	this.shape_15.setTransform(-13.8,-11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AgkBBIAAiBIBJAAIAAANIg8AAIAAAoIA7AAIAAANIg7AAIAAAyIA7AAIAAANg");
	this.shape_16.setTransform(-23.7,-11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AgmBBIAAiBIAaAAQAPAAAHAEQAJAEAEAHQAFAIAAAJQAAAIgEAIQgFAIgHADQALAFAEADQAGAFADAFQADAIAAAHQAAAOgMAMQgLALgSAAgAgZA0IAQAAQAMAAAIgDQAHgCADgHQAEgFAAgHQAAgIgFgHQgGgHgKgCQgFgCgRABIgHAAgAgZgKIAHAAQANAAAGgCQAGgCAEgGQAEgFAAgHQAAgJgGgFQgHgFgMAAIgPAAg");
	this.shape_17.setTransform(-33.9,-11);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AAhBBIAAg+IhBAAIAAA+IgNAAIAAiBIANAAIAAA2IBBAAIAAg2IANAAIAACBg");
	this.shape_18.setTransform(-45.5,-11);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AAlBBIAAhiIhUBiIgCAAIAAiBIAMAAIAABkIBVhkIACAAIAACBg");
	this.shape_19.setTransform(-58.2,-11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hkhjk, new cjs.Rectangle(-63.3,-20.5,126.8,37.9), null);


(lib.hhhj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAbBBIg4g8IAAA8IgOAAIAAiBIAOAAIAAAxIAygxIASAAIg9A7IBCBGg");
	this.shape.setTransform(51.2,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgnBBIAAiBIAaAAQAVAAAHACQALAEAHAIQAIAJAAAMQAAAMgIAJQgFAIgNADQgIACgYAAIgKAAIAAA8gAgbgHIAXAAQAMAAAGgCQAGgDAEgFQADgFAAgHQAAgHgDgFQgEgFgGgCQgGgDgLAAIgYAAg");
	this.shape_1.setTransform(40.2,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AAlBBIAAhiIhUBiIgDAAIAAiBIANAAIAABkIBVhkIADAAIAACBg");
	this.shape_2.setTransform(28,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AgGBBIAAh0IgcAAIAAgNIBFAAIAAANIgcAAIAAB0g");
	this.shape_3.setTransform(17.5,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AguAtQgQgTAAgaQAAgcAUgUQATgTAdAAQAUAAANAHQAOAHAKANIgKAIQgIgKgMgHQgMgFgOAAQgOAAgOAHQgNAIgHAMQgHAMgBAPQABAYAQAQQAQAPAXAAQAcAAASgVIAKAIQgIALgQAIQgPAHgRAAQghAAgUgXg");
	this.shape_4.setTransform(6.3,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhhj, new cjs.Rectangle(0,0,55.5,13.6), null);


(lib.hhggh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("Ag2A2QgWgVAAghQAAgUAKgRQALgTARgKQARgKAVAAQAhAAAWAWQAWAWAAAgQAAAggWAWQgXAXggAAQgfAAgXgXgAgeg2QgPAJgIAPQgIAOAAAQQAAAaASATQATASAYAAQARAAAOgJQAPgHAIgPQAIgQAAgQQAAgQgIgPQgIgOgPgJQgPgIgQAAQgQAAgOAIg");
	this.shape.setTransform(122.8,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AAmBJIAAhHIhKAAIAABHIgPAAIAAiSIAPAAIAAA+IBKAAIAAg+IAOAAIAACSg");
	this.shape_1.setTransform(106.9,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgrBJIAAiSIAdAAQAPABALADQAKAGAFAIQAFAHAAALQAAAKgEAIQgGAJgJAEQAMAFAGADQAHAHACAGQAEAHAAAJQAAASgNAMQgMAMgWAAgAgcA7IASAAQAPAAAHgDQAIgDAFgHQAEgHAAgHQAAgKgHgHQgGgIgLgCQgJgDgQAAIgIAAgAgcgLIAIAAQAPAAAGgDQAHgDAFgGQAEgGAAgIQAAgJgHgHQgIgFgOAAIgQAAg");
	this.shape_2.setTransform(94.4,7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AAqBJIAAhvIhfBvIgEAAIAAiSIAPAAIAAByIBghyIAEAAIAACSg");
	this.shape_3.setTransform(80.6,7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgGBJIAAiDIghAAIAAgPIBPAAIAAAPIggAAIAACDg");
	this.shape_4.setTransform(68.7,7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AArBJIAAhvIhgBvIgEAAIAAiSIAPAAIAAByIBhhyIADAAIAACSg");
	this.shape_5.setTransform(56.8,7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgnBIQgGgDgMgMIALgJQALALAEABIAHACQAGAAAEgDQAFgDAFgNIg2h1IARAAIArBjIAphjIAQAAIg4CDQgHASgUAAQgIAAgHgDg");
	this.shape_6.setTransform(42.6,7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AgGBJIAAiDIghAAIAAgPIBPAAIAAAPIggAAIAACDg");
	this.shape_7.setTransform(31.6,7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAmBJIAAhHIhLAAIAABHIgOAAIAAiSIAOAAIAAA+IBLAAIAAg+IAOAAIAACSg");
	this.shape_8.setTransform(20.3,7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AAqBJIAAhvIhgBvIgDAAIAAiSIAPAAIAAByIBghyIAEAAIAACSg");
	this.shape_9.setTransform(5.8,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhggh, new cjs.Rectangle(0,0,130.5,15.4), null);


(lib.ghjghjhjj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("AgeAoQgRgQAAgYQAAgWARgRQAPgQAXAAQAVAAARAPQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgLAKQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQgJgJgOAAQgNAAgLALQgKAKAAAOQAAAOAKALQALALANAAQAFAAAOgEIAAgOIgNAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgMQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAeAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAAAnIgBADIgLAFQgOAFgOAAQgXAAgPgQg");
	this.shape.setTransform(25.8,-1,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("AAoA4IhBhGIAABCQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgOAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAhoQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAEAAIA/BEIABAAIAAhAQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIAOAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAABoQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(15.5,-0.9,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("AgGA2QgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhmQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAIANAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIAABmQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_2.setTransform(7.8,-1,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("AAUA2IgDgBIgTgpIgSAAIAAAoQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAhmQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAIAsAAQAOABAKAJQAKAKAAAOQAAAVgXAKIAVAnIAAADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAgAgTgDIAYAAQAGAAAFgGQAEgEAAgHQAAgGgEgEQgFgFgGAAIgYAAg");
	this.shape_3.setTransform(1.3,-1,0.9,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("AgBA2QAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAhjIgdAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIBBAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAAADQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgdAAIAABjQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_4.setTransform(-11.8,-1,0.9,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("AAdA2QgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgXgoIgiAAIAAAnQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIAAhnQAAgBAAAAQABgBAAAAQAAAAAAAAQABgBAAAAIAmAAQAOAAAKAKQALAKAAAOQAAALgIAJQgHAIgLAEIAXAoQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAgAgdAGIAgAAQALAAAIgHQAIgIAAgLQAAgLgIgIQgIgHgMAAIgfAAg");
	this.shape_5.setTransform(-19.3,-1,0.9,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("AAtA3IgCgBIgNgdIg7AAIgMAdIgCABIgFAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAwhsIABgBIABAAIACABIAvBsQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAgAgaATIA1AAIgag+IgBAAg");
	this.shape_6.setTransform(-28.8,-1.1,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("AAAA4IgCgBIgfhdIgSBbQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgEAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAWhqIABgBIACAAIACABIAfBfIAghfIACgBIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIAWBqQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgDAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgShbIAAAAIggBdQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_7.setTransform(-39.4,-0.9,0.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("AggArQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIACgCQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAMAMAPAAQALAAAHgGQAJgGAAgIQAAgKgJgGQgHgGgOgFQgPgEgHgGQgIgHAAgNQAAgKAIgIQAJgJAQAAQAJAAAKAEIAIAEQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBACQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgGgEQgJgDgHAAQgMAAgIAHQgGAFAAAIQAAAKAHAFQAGAFANAEQARAGAIAGQAJAIAAAMQAAAMgKAIQgLAIgNAAQgTAAgNgNg");
	this.shape_8.setTransform(-49.1,-0.9,0.9,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("AijCkQhFhEAAhgQAAhfBFhEQBEhFBfAAQBgAABEBFQBFBEgBBfQABBghFBEQhEBEhgABQhfgBhEhEgAiYiYQhAA/AABZQAABZBABAQA/A/BZAAQBZAABAg/QA/hAAAhZQAAhZg/g/QhAhAhZABQhZgBg/BAg");
	this.shape_9.setTransform(13.8,-0.8,0.9,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAEIgEAIIgFgDIAGgIIgJgBIACgFIAJADIgBgJIAFAAIgBAJIAJgDIACAFIgKABIAHAIIgFADIgFgIg");
	this.shape_10.setTransform(51.2,-19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAEIgFAIIgEgDIAHgIIgKgBIACgFIAJADIgBgJIAEAAIAAAJIAJgDIACAFIgKABIAHAIIgFADIgFgIg");
	this.shape_11.setTransform(48.1,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-24.1,107.1,44.3);


(lib.ghjghj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAGIgHAFQgDACgGAAQgIAAgGgHgAgMgMQgFAFAAAHQAAAIAFAFIAGAEIAGACIAGgBIgFgJIgFAAIAAAGIgDAAIAAgcIAJAAQAEABACACQAEAEAAAEQAAAEgEADQgCADgCAAIAFAIIAEgDQAGgGAAgHQAAgHgGgFQgFgGgIAAQgGAAgGAGgAgEAFIAEAAQADAAADgCQACgCAAgDQAAgDgCgDQgCgCgEAAIgEAAg");
	this.shape.setTransform(59.3,-20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("AAjAmQAAgegWgVQgTgUgeAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBQABAAAAAAQABgBABAAQAgAAAWAYQAWAVAAAhQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_1.setTransform(52,-18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("AAcAeQAAgYgRgQQgQgRgZAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAbAAARASQATATAAAZQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_2.setTransform(51.2,-18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("AAWAXQAAgSgOgMQgMgOgSAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAQAUAAANAPQAOAOAAATQAAABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_3.setTransform(50.6,-17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("AADBTQANgBALgIQANgJAHgPIACgKIABgYIgHAHQgHAHgNAFQgLAFgMAAQgIAAgJgDQgKgDgGgFQgHgFgIgHQgEgHgFgJIgEgLIgBgMIAAg/IAEAAIABA+QAAALAFALQAEAJAHAHQAHAGALAFQAJADALAAQALAAAJgEQAKgEAHgHQAHgHAFgJQADgLAAgKIAAg9IAOAPIAABdQAAAMgFAMQgFANgHAHQgJAJgLAFQgLAEgMAAg");
	this.shape_4.setTransform(6,-4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("AAHBRQgLgFgHgJQgJgHgFgNQgEgLgBgNIAAhdIANgOIAABwIABALIAEAKQAGAPANAJQAKAHAOACIAAADQgMAAgMgEg");
	this.shape_5.setTransform(-3.4,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("AA5A/IAAg/QAAgJgEgLQgEgJgHgIQgHgHgKgFQgKgEgLAAQgQAAgNAJQgNAJgHAPQgCAEgBAGIgBBJIgNAAIAAg/QAAgMAFgKQAFgMAJgIQAHgIANgGQAKgGANAAQAOAAALAGQALAFAJAJQAIAIAGAMQAEAMAAALIAAA+g");
	this.shape_6.setTransform(-40.2,-6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("AAyA/IgBhJQAAgFgDgFQgHgQgNgIQgNgJgPAAQgLAAgLAEQgKAFgHAHQgIAJgDAIQgDAJAAALIAAA/IgHAAIAAg+QAAgLAEgMQAGgNAIgHQAIgIAMgGQALgGANAAQAOAAAKAGQAMAFAIAJQAIAHAGANQAFALAAALIAAA/g");
	this.shape_7.setTransform(-28.3,-6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("Ag2A6QAHAAAIgEQAKgEAHgHQAIgIAEgJQADgJABgHIAAgQQABgHADgKQADgKAGgGIAEgFIAJgHQAEgDAGgCIAMgFIANgBIAAAFQgHAAgJAEQgKAEgHAHQgHAHgEAKQgEAJAAAHIAAAQQgCAMgDAFQgDAKgFAGIgEAFIgJAHQgEADgGACIgMAFIgNABg");
	this.shape_8.setTransform(-55.5,-6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("Ag+BJIAAhfQAAgPAFgMQAFgKAJgJQAIgIAMgFQAMgEALAAQAJAAAJADQAJADAIAFQAGAEAHAIQAGAHAEAJQADAFABAHIABAMIgBANIgEALQgFALgIAIQgJAJgLAFQgNAFgMAAIgwAAIAAAugAgQhHQgKAFgHAHQgHAHgEAKQgFAKAAALIAAA1IA1AAIAKgBIALgDQAQgIAIgNQAJgMAAgQQAAgMgEgKQgFgKgHgHQgJgIgJgDQgIgEgMAAQgLAAgJAEg");
	this.shape_9.setTransform(-14.2,-4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A4A49").s().p("AgCAFIAAgIIAFAAIAAAIg");
	this.shape_10.setTransform(-48.1,-15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A4A49").s().p("AgGA/IAHh9IAGAAIAAB9g");
	this.shape_11.setTransform(-48.5,-6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A4A49").s().p("AAACmIAAlLIABAAIAAFLg");
	this.shape_12.setTransform(18.3,-6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A4A49").s().p("AgSATQgJgIABgLQgBgLAJgHQAIgJAKAAQAMAAAHAJQAJAHgBALQABALgJAIQgHAJgMgBQgKABgIgJg");
	this.shape_13.setTransform(48.6,-15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A4A49").s().p("AgXBNIAAiZIAvAAIAACZg");
	this.shape_14.setTransform(48.6,-2.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A4A49").s().p("AhTBwIAAjfICnAAIAAAtIh2AAIAAAuIBvAAIAAAtIhvAAIAABXg");
	this.shape_15.setTransform(34.5,-6.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAADIgFAJIgEgDIAHgIIgKgBIACgGIAJAFIgBgKIAEAAIAAAKIAJgFIACAGIgKABIAHAIIgFADIgFgJg");
	this.shape_16.setTransform(70.2,-19.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAADIgEAJIgFgDIAGgIIgJgBIACgGIAJAFIgBgKIAFAAIgBAKIAJgFIACAGIgKABIAHAIIgFADIgFgJg");
	this.shape_17.setTransform(67.1,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-24,135,34.4);


(lib.ghjgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A4A49").s().p("AB4CSIAAkDIgBAAIhrEDIgYAAIhqkDIgBAAIAAEDIgdAAIAAkjIAsAAIBoD3IBpj3IAsAAIAAEjg");
	this.shape.setTransform(28.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("AhqBrQgtgsAAg9QAAhCAwgsQAsgqA7AAQA9AAAtAsQAuAsAAA+QAAA/guAtQgtArg9AAQg8AAgugsgAhVhXQglAkAAA1QAAAyAlAkQAkAkAxAAQAzAAAkgkQAlgkgBg0QABgygkgkQglglgzAAQgxAAgkAkg");
	this.shape_1.setTransform(-4.2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("AhSBTQgjgiAAgwQAAgyAlgjQAiggAuAAQAwAAAiAhQAkAjAAAwQAAAxgkAjQgiAhgwAAQgvAAgjgigAhBhDQgeAcAAAoQAAAnAdAcQAcAcAmAAQAnAAAcgcQAdgbAAgoQAAgngdgdQgcgdgnABQglAAgcAcg");
	this.shape_2.setTransform(-20.7,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("AgoBDIAAgMIBAhtIg+AAIAAgMIBNAAIAAAMIhABtIBCAAIAAAMg");
	this.shape_3.setTransform(-38.2,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAADIgFAJIgEgDIAHgIIgKgBIACgGIAJAFIgBgKIAEAAIAAAKIAJgFIACAGIgKABIAHAIIgFADIgFgJg");
	this.shape_4.setTransform(52.2,-13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAADIgEAJIgFgDIAGgIIgJgBIACgGIAJAFIgBgKIAFAAIgBAKIAJgFIACAGIgKABIAHAIIgFADIgFgJg");
	this.shape_5.setTransform(49.1,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.3,-18.5,98.2,33.1);


(lib.ghj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-34,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghj, new cjs.Rectangle(-34,-39,69,85), null);


(lib.ghgfh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-66.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgfh, new cjs.Rectangle(-66.5,-25,133,50), null);


(lib.gghghg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgpBJIAAiRIBTAAIAAAOIhEAAIAAAuIBEAAIAAANIhEAAIAAA6IBEAAIAAAOg");
	this.shape.setTransform(125.9,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AAqBJIAAhvIhgBvIgDAAIAAiRIAPAAIAABxIBghxIAEAAIAACRg");
	this.shape_1.setTransform(112.4,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AAmBJIAAhHIhLAAIAABHIgOAAIAAiRIAOAAIAAA9IBLAAIAAg9IAOAAIAACRg");
	this.shape_2.setTransform(97.8,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AgpBJIAAiRIBTAAIAAAOIhEAAIAAAuIBDAAIAAANIhDAAIAAA6IBDAAIAAAOg");
	this.shape_3.setTransform(85.9,7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AAxBJIgxhwIgwBwIgQAAIBAiRIACAAIA/CRg");
	this.shape_4.setTransform(72.7,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AgrBJIAAiRIAdAAQAQAAAKADQAKAFAEAJQAGAIAAALQAAAKgFAHQgFAJgJAEQALAEAHAEQAGAGADAHQAEAJAAAHQAAASgNAMQgOAMgUAAgAgdA7IASAAQAPAAAIgDQAIgEAEgGQAFgHAAgIQAAgKgHgGQgGgIgMgDQgFgCgUAAIgIAAgAgdgLIAIAAQARAAAFgDQAHgDAFgGQADgGAAgHQAAgLgGgFQgHgGgPAAIgRAAg");
	this.shape_5.setTransform(60,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AA3BJIgXgwIg+AAIgXAwIgRAAIBGiRIACAAIBFCRgAgYALIAyAAIgZg1g");
	this.shape_6.setTransform(46.2,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AgtBJIAAiRIAeAAQAYAAAIABQAMAEAJAJQAIALAAANQAAAPgIAKQgIAJgOACQgLADgZAAIgKAAIAABEgAgegIIAZAAQAOAAAGgDQAIgCADgGQAFgGAAgJQAAgIgFgFQgEgGgGgCQgGgDgOAAIgaAAg");
	this.shape_7.setTransform(32.9,7.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAlBJIAAiEIhJAAIAACEIgPAAIAAiRIBnAAIAACRg");
	this.shape_8.setTransform(19.5,7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AgnBIQgHgDgLgMIALgJQALALAEABIAIACQAFAAAFgDQAEgEAFgMIg2h1IARAAIArBjIAohjIARAAIg4CDQgGASgUAAQgJAAgHgDg");
	this.shape_9.setTransform(5.9,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gghghg, new cjs.Rectangle(0,0,130.2,15.1), null);


(lib.ggggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ggggg, new cjs.Rectangle(-120,-52,240,90), null);


(lib.fg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape.setTransform(52.4,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_1.setTransform(48.5,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_2.setTransform(44.1,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_3.setTransform(39.3,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAVIAAgjIgOAAIAAgGIAhAAIAAAGIgNAAIAAAjg");
	this.shape_4.setTransform(32.4,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDACgCQADgBADAAQAFAAAEADQAFACACAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgCgCgCgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgEAFg");
	this.shape_5.setTransform(28.5,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIAAANIACAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQADACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_6.setTransform(23.9,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAVIAAghIgNAhIgEAAIgMgiIAAAiIgHAAIAAgpIALAAIAKAgIAMggIAKAAIAAApg");
	this.shape_7.setTransform(19,7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgDgFgBQgGAAgEAEQgFADgCAGQgBAFAAAFQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgDACgIIAHACQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_8.setTransform(13.3,6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAADIgEAJIgFgDIAGgHIgJgCIACgFIAJADIgBgJIAFAAIgBAJIAJgDIACAFIgKACIAHAHIgFADIgFgJg");
	this.shape_9.setTransform(6.7,4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAADIgFAJIgEgDIAHgHIgKgCIACgFIAJADIgBgJIAEAAIAAAJIAJgDIACAFIgKACIAHAHIgFADIgFgJg");
	this.shape_10.setTransform(3.6,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fg, new cjs.Rectangle(0,0,55.8,12.9), null);


(lib.eeee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p0();
	this.instance.parent = this;
	this.instance.setTransform(-30,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eeee, new cjs.Rectangle(-30,-47,62,80), null);


(lib.dfgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-107,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfg, new cjs.Rectangle(-107,-52,240,90), null);


(lib.dfdsf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAVIAAghIgNAhIgEAAIgMgiIAAAiIgHAAIAAgpIALAAIAKAgIAMggIAKAAIAAApg");
	this.shape.setTransform(22,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPAcIAAgGIADAAIAFgBIACgCIACgFIAAgCIgPgoIAHAAIAJAYIACAIIADgIIAJgYIAHAAIgQApIgDAJIgEAFQgDACgDAAIgFgBg");
	this.shape_1.setTransform(17.3,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAMIAHgCQABAFAEAEQADAEAFAAQAGAAAEgDQADgDAAgFQAAgFgDgCQgEgDgGAAIgDAAIAAgFIAHgBQADAAACgDQACgDAAgDQAAgDgDgDQgDgDgFAAQgDAAgDACQgDACgCAEIgBAFIgHgBQACgTARABQAJgBAEAFQAGAFAAAGQAAAIgIAFQAEAAADADQADAEAAAFQAAAHgGAGQgFAEgKAAQgPABgFgSg");
	this.shape_2.setTransform(12.8,6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAADIgEAJIgFgDIAGgHIgJgCIACgFIAJADIgBgJIAFAAIgBAJIAJgDIACAFIgKACIAHAHIgFADIgFgJg");
	this.shape_3.setTransform(6.7,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAADIgFAJIgEgDIAHgHIgKgCIACgFIAJADIgBgJIAEAAIAAAJIAJgDIACAFIgKACIAHAHIgFADIgFgJg");
	this.shape_4.setTransform(3.6,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfdsf, new cjs.Rectangle(0,0,27,12.9), null);


(lib.uuiui = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hhhj();
	this.instance.parent = this;
	this.instance.setTransform(60,-9.7,0.95,0.95,0,0,0,27.8,6.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgFBBIAAh0IgeAAIAAgNIBGAAIAAANIgdAAIAAB0g");
	this.shape.setTransform(81.2,10.9,0.95,0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgiA/QgGgDgKgKIAKgIQAJAJAEACQADABADAAQAGAAADgDQAEgCAEgLIgvhnIAPAAIAmBXIAkhXIAOAAIgxBzQgGAQgSAAQgHAAgGgDg");
	this.shape_1.setTransform(72,11,0.95,0.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AAhBBIAAg/IhBAAIAAA/IgNAAIAAiBIANAAIAAA2IBBAAIAAg2IANAAIAACBg");
	this.shape_2.setTransform(60.7,10.9,0.95,0.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AAlBBIAAhiIhUBiIgDAAIAAiBIANAAIAABkIBVhkIADAAIAACBg");
	this.shape_3.setTransform(48.6,10.9,0.95,0.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AA8BBIgNhcIgtBcIgDAAIguhdIgNBdIgMAAIATiBIACAAIAzBpIA0hpIACAAIATCBg");
	this.shape_4.setTransform(34.4,10.9,0.95,0.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AgXA9IAig1QgJADgEAAQgPAAgLgLQgLgLAAgQQAAgMAGgIQAFgJAJgGQAKgFAKAAQAKAAAKAFQAIAFAFAKQAGAJAAAKQAAAHgDAKQgDAIgJAMIgmA7gAgSgvQgIAJAAALQAAALAIAIQAIAIAKAAQALAAAJgIQAHgIAAgLQAAgLgHgJQgKgHgKgBQgKABgIAHg");
	this.shape_5.setTransform(17,10.9,0.95,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgcA4QgLgKgCgOIANAAQACAIADAEQADAEAHADQAFADAHAAQAMAAAJgKQAJgKAAgOQAAgNgIgHQgJgIgMAAQgLAAgRAHIAMhAIA3AAIAAAMIgtAAIgGAjQAHgCAHAAQARAAAMALQALAMAAASQAAAMgGALQgGALgKAFQgJAGgNAAQgPAAgLgKg");
	this.shape_6.setTransform(7.6,11,0.95,0.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AAwBBIgUgrIg2AAIgVArIgOAAIA9iBIACAAIA8CBgAgVAJIAsAAIgWgtg");
	this.shape_7.setTransform(-8.2,10.9,0.95,0.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AgXA+QgKgGgJgOIAKgGQAJANAIAEQAHAEAIAAQAMgBAJgGQAIgHAAgOQAAgIgCgFQgDgFgGgEQgFgEgFAAIgPgBIgCAAIAAgLIAEAAQAcAAAAgWQAAgMgGgFQgHgHgKAAQgLAAgNAMIgIgIQAOgQASAAQARAAAKAJQAKAKAAAOQAAAUgTAKQAZAHAAAaQAAARgLALQgNALgTAAQgMAAgLgGg");
	this.shape_8.setTransform(-19.5,10.9,0.95,0.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AgwAwQgTgUAAgcQAAgRAJgQQAKgQAPgJQAQgJARAAQAdAAATATQAUAUAAAcQAAAdgUATQgUAUgcAAQgaAAgWgUgAgbgvQgNAHgHANQgHANAAAOQAAAYAQAQQARAPAVAAQAQAAAMgHQAMgHAIgNQAGgNABgPQgBgOgGgNQgIgNgMgHQgOgIgOAAQgOAAgNAIg");
	this.shape_9.setTransform(-36.6,10.9,0.95,0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AgfBBIAAiBIA/AAIAAANIgzAAIAAB0g");
	this.shape_10.setTransform(-47.3,10.9,0.95,0.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AgkBBIAAiBIBJAAIAAANIg8AAIAAAoIA8AAIAAAMIg8AAIAAAzIA8AAIAAANg");
	this.shape_11.setTransform(-56.1,10.9,0.95,0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AgtAtQgRgSAAgbQAAgcAUgUQAUgTAcAAQASAAAPAHQAQAIAIANIgKAHQgIgLgNgFQgKgGgQAAQgNAAgOAHQgMAHgJANQgHANAAAOQABAXAPARQARAPAYABQAbAAASgWIAKAIQgKAMgOAHQgPAHgSAAQggAAgTgXg");
	this.shape_12.setTransform(-68,10.9,0.95,0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AgmBBIAAiBIAaAAQAPAAAHAEQAJAEAEAHQAFAJAAAIQAAAJgEAGQgDAHgJAFQAKAEAFADQAFAEADAIQAEAFAAAIQAAAQgMALQgLALgSAAgAgZA0IAQAAQANAAAHgDQAGgCAEgGQAEgHAAgHQAAgIgFgGQgHgHgJgCIgdgBgAgZgKIAHAAQANABAGgDQAHgDADgFQAEgGAAgGQAAgIgGgGQgHgFgMAAIgPAAg");
	this.shape_13.setTransform(-79.5,10.9,0.95,0.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AAwBBIgUgrIg3AAIgUArIgOAAIA9iBIACAAIA8CBgAgVAJIArAAIgWgtg");
	this.shape_14.setTransform(93,-9.7,0.95,0.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AAdBBIAAg8IgIAAIgtA8IgQAAIAtg8QgQAAgJgFQgIgCgFgJQgGgIAAgKQAAgMAHgJQAJgJAKgDQAHgCAVAAIAaAAIAACBgAgNgwQgFACgEAFQgDAFAAAHQAAAHADAFQADAEAHAEQAFACANAAIAXAAIAAgsIgYAAQgLAAgHADg");
	this.shape_15.setTransform(22.5,-9.7,0.95,0.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AAwBBIgUgrIg3AAIgUArIgOAAIA9iBIACAAIA8CBgAgVAJIArAAIgWgtg");
	this.shape_16.setTransform(11.7,-9.7,0.95,0.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AAhBBIAAg+IhBAAIAAA+IgNAAIAAiBIANAAIAAA2IBBAAIAAg2IANAAIAACBg");
	this.shape_17.setTransform(-0.5,-9.7,0.95,0.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AAhBBIAAg+IhBAAIAAA+IgNAAIAAiBIANAAIAAA2IBBAAIAAg2IANAAIAACBg");
	this.shape_18.setTransform(-12.2,-9.7,0.95,0.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AgkBBIAAiBIBJAAIAAANIg8AAIAAAoIA7AAIAAANIg7AAIAAAyIA7AAIAAANg");
	this.shape_19.setTransform(-22.1,-9.7,0.95,0.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgmBBIAAiBIAaAAQAPABAHADQAJAEAEAIQAFAHAAAJQAAAIgEAIQgEAHgIAFQAKACAFAFQAGAEADAHQADAGAAAHQAAARgMAKQgLALgSAAgAgZA0IAQAAQAMAAAIgCQAHgEADgFQAEgHAAgGQAAgJgFgGQgGgHgKgCQgFgBgRAAIgHAAgAgZgKIAHAAQANABAGgDQAGgCAEgGQAEgFAAgHQAAgIgGgGQgIgFgLAAIgPAAg");
	this.shape_20.setTransform(-31.8,-9.7,0.95,0.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AgFBBIAAh0IgeAAIAAgNIBGAAIAAANIgcAAIAAB0g");
	this.shape_21.setTransform(-40.6,-9.7,0.95,0.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AguAtQgQgTAAgaQAAgcAUgUQATgTAdAAQAUAAAOAHQANAHAKANIgKAIQgIgKgNgHQgLgFgOAAQgOAAgOAHQgOAIgGAMQgIANABAOQgBAYARAQQAQAPAXAAQAcAAASgVIAKAIQgJAMgPAHQgPAHgRAAQghAAgUgXg");
	this.shape_22.setTransform(-51.2,-9.6,0.95,0.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AgkBBIAAiBIBJAAIAAANIg8AAIAAAoIA7AAIAAANIg7AAIAAAyIA7AAIAAANg");
	this.shape_23.setTransform(-62.3,-9.7,0.95,0.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AAaBBIAAg9IgJAAQgTAAgIgCQgKgCgGgDQgGgFgEgJQgCgJAAgMIAAgaIANAAIAAAbQAAAQAGAHQAGAGAPAAIAYAAIAAg4IANAAIAACBg");
	this.shape_24.setTransform(-72.5,-9.7,0.95,0.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AAwBBIgUgrIg3AAIgUArIgOAAIA9iBIACAAIA8CBgAgVAJIArAAIgWgtg");
	this.shape_25.setTransform(-82.8,-9.7,0.95,0.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AAaBBIg3g8IAAA8IgOAAIAAiBIAOAAIAAAxIAzgxIARAAIg9A7IBBBGg");
	this.shape_26.setTransform(-93.6,-9.7,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uuiui, new cjs.Rectangle(-97.7,-16,196.7,33.4), null);


(lib.uu8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hhggh();
	this.instance.parent = this;
	this.instance.setTransform(-12,-12.2,1,1,0,0,0,65.3,7.7);

	this.instance_1 = new lib.gghghg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,12.5,1,1,0,0,0,65,7.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgpBJIAAiSIBTAAIAAAPIhEAAIAAAuIBEAAIAAANIhEAAIAAA6IBEAAIAAAOg");
	this.shape.setTransform(60.3,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uu8, new cjs.Rectangle(-77.3,-19.9,141.9,40), null);


(lib.jlkjl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hhggh();
	this.instance.parent = this;
	this.instance.setTransform(-68,20.7,0.876,0.877,0,0,0,65.2,7.7);

	this.instance_1 = new lib.hhhj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37,20.9,0.995,0.996,0,0,0,27.7,6.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAlBAIAAhhIhUBhIgDAAIAAh/IANAAIAABjIBUhjIADAAIAAB/g");
	this.shape.setTransform(71.7,20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AAlBQIAAhiIhUBiIgDAAIAAiAIANAAIAABkIBUhkIAEAAIAACAgAgUhBQgHgGgDgIIAMAAQACAFAGACQAFADAFgBQAFAAAGgBQAEgCAEgGIAMAAQgDAIgHAGQgHAEgOAAQgMAAgIgEg");
	this.shape_1.setTransform(-3.1,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgoBAIAAh/IAMAAIAAA3IAKAAQAXAAAMACQALADAHAIQAGAIAAAOQAAAPgGAIQgGAIgLAEQgIACgZAAgAgcA0IAOAAQAUAAAHgCQAHgCAEgGQAEgFAAgJQAAgKgFgGQgFgGgIgBIgbgBIgLAAg");
	this.shape_2.setTransform(43.3,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AArBAIgrhiIgqBiIgOAAIA4h/IACAAIA3B/g");
	this.shape_3.setTransform(31.3,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgkBAIAAh/IBJAAIAAAMIg8AAIAAApIA8AAIAAALIg8AAIAAAzIA8AAIAAAMg");
	this.shape_4.setTransform(20.7,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AA0BKIAAgUIhnAAIAAAUIgMAAIAAgfIAKAAIAzh0IADAAIA1B0IAKAAIAAAfgAgmArIBNAAIgnhZg");
	this.shape_5.setTransform(8.7,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgvAwQgUgTAAgdQAAgRAJgQQAKgRAPgHQAQgKARABQAdgBATAUQAUAUAAAbQAAAcgUAUQgTAUgdAAQgbAAgUgUgAgagvQgMAHgIANQgHALAAAQQAAAXAPAQQARAQAVAAQAPAAANgHQAMgHAHgNQAIgNAAgPQAAgOgIgNQgHgNgNgHQgNgHgOAAQgNAAgNAHg");
	this.shape_6.setTransform(-5.8,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AA8BAIgNhbIgtBbIgCAAIgvhbIgMBbIgNAAIATh/IACAAIAzBoIA0hoIACAAIATB/g");
	this.shape_7.setTransform(-21.8,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAcBAIAAg7IgHAAIgtA7IgQAAIAtg7QgPAAgJgEQgJgDgGgIQgEgJAAgKQAAgMAHgJQAHgJAMgCQAGgCAWAAIAZAAIAAB/gAgMgwQgGACgDAFQgEAFAAAHQAAAHAEAFQAEAGAFACQAHACALAAIAWAAIAAgsIgWAAQgMAAgGADg");
	this.shape_8.setTransform(-40.7,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AAwBAIgVgqIg2AAIgUAqIgOAAIA8h/IADAAIA8B/gAgVAKIArAAIgWgug");
	this.shape_9.setTransform(-52.1,-0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AgmBAIAAh/IAaAAQAPAAAIADQAIAEAEAIQAFAIABAIQAAAJgFAHQgEAHgIAEQAKAEAFADQAFAEADAHQAEAHAAAIQAAAPgMALQgKAKgTAAgAgZA0IAQAAQANAAAHgDQAHgDAEgGQADgFAAgHQABgIgGgHQgGgHgJgCQgGgBgRAAIgHAAgAgZgJIAHAAQANAAAHgDQAGgDAEgFQADgFAAgHQAAgIgGgGQgIgFgLAAIgPAAg");
	this.shape_10.setTransform(-63.6,-0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AgvAwQgUgTAAgdQAAgRAJgQQAKgRAPgHQAPgKASABQAcgBAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgcAAgTgUgAgagvQgOAIgGAMQgIAMAAAPQAAAXAQAQQAQAQAWAAQAPAAAMgHQANgIAHgMQAHgMAAgQQAAgPgHgMQgHgNgNgHQgNgHgOAAQgNAAgNAHg");
	this.shape_11.setTransform(-76.8,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AAhBAIAAg+IhBAAIAAA+IgMAAIAAh/IAMAAIAAA2IBBAAIAAg2IANAAIAAB/g");
	this.shape_12.setTransform(-90.7,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.jlkjl, new cjs.Rectangle(-125.1,-7.4,201.9,35.2), null);


(lib.hhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gghghg();
	this.instance.parent = this;
	this.instance.setTransform(-4.1,-12.7,1,1,0,0,0,65,7.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAlBJIAAhHIhJAAIAABHIgPAAIAAiRIAPAAIAAA9IBJAAIAAg9IAPAAIAACRg");
	this.shape.setTransform(80.6,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("Ag2A3QgWgXgBggQAAgUALgRQAKgTASgKQASgKAUAAQAhAAAWAWQAWAXAAAfQAAAhgWAVQgWAXggAAQghAAgWgWgAgeg1QgPAJgIANQgIAOAAARQAAAbASASQASASAZAAQAQAAAPgJQAPgIAIgOQAIgOAAgSQAAgRgIgOQgIgNgPgJQgPgJgQAAQgPAAgPAJg");
	this.shape_1.setTransform(64.7,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgGBJIAAgqIgQAAQgRAAgLgDQgLgDgIgKQgHgKgBgOQAAgTAOgNQAMgNAhABIAMAAIAAgTIAOAAIAAATIAKAAQAigBANANQANANAAATQAAAPgMANQgLAMgfAAIgQAAIAAAqgAAIASIAXAAQAOAAAJgJQAJgIgBgLQAAgNgJgJQgKgHgTgBIgQAAgAgzggQgLAIAAAOQAAAKAIAJQAKAJAPAAIAXAAIAAg6IgRAAQgSAAgKAIg");
	this.shape_2.setTransform(46.9,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AgHBJIAAiDIggAAIAAgOIBPAAIAAAOIghAAIAACDg");
	this.shape_3.setTransform(33.7,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgtBJIAAiRIAeAAQAXgBAKADQAMADAIAJQAIAKAAAPQAAAPgIAJQgHAJgOADQgKACgbAAIgKAAIAABEgAgegIIAZAAQAMAAAJgCQAGgEAFgFQAEgHAAgHQAAgHgEgGQgDgGgIgDQgHgDgNAAIgaAAg");
	this.shape_4.setTransform(23.6,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AA3BJIgXgwIg+AAIgXAwIgRAAIBGiRIACAAIBFCRgAgYALIAyAAIgag0g");
	this.shape_5.setTransform(9.6,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("ABFBJIgPhoIg0BoIgDAAIg0hpIgPBpIgOAAIAViRIADAAIA6B3IA7h3IADAAIAVCRg");
	this.shape_6.setTransform(-7.3,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("Ag0A0QgTgXAAgdQAAggAXgWQAXgWAhAAQAVAAAQAIQARAIAKAPIgMAJQgKgNgNgGQgNgGgQgBQgSABgOAIQgOAIgJAOQgIAPAAAQQAAAcASARQASASAcABQAeAAAVgZIAMAJQgKANgSAJQgPAHgVAAQgmAAgWgZg");
	this.shape_7.setTransform(-25.1,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AgaBHQgLgHgLgQIAMgHQAJAPAKAFQAJADAIAAQAOABAKgJQAJgIABgPQAAgIgEgHQgCgFgIgEQgGgFgFgBIgRgBIgCAAIAAgLIAEAAQAggBAAgaQAAgMgIgHQgIgIgKABQgOAAgNANIgKgJQAPgSAWAAQASAAAMALQAMAKAAARQAAAWgXALQAeAIAAAeQAAAUgNAMQgOAMgWAAQgPAAgLgGg");
	this.shape_8.setTransform(-45,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AgpBJIAAiRIBTAAIAAAOIhFAAIAAAuIBEAAIAAANIhEAAIAAA6IBEAAIAAAOg");
	this.shape_9.setTransform(-55.8,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AgtBJIAAiRIAdAAQAYgBAKADQAMADAIAJQAIALAAAOQAAAPgIAJQgHAJgOADQgJACgbAAIgLAAIAABEgAgegIIAYAAQAOAAAIgCQAGgEAFgFQADgGAAgIQAAgIgDgFQgDgGgIgDQgGgDgPAAIgZAAg");
	this.shape_10.setTransform(-67.6,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AgpBJIAAiRIBTAAIAAAOIhEAAIAAAuIBDAAIAAANIhDAAIAAA6IBDAAIAAAOg");
	this.shape_11.setTransform(-78.9,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AAeBJIAAhFIgKAAQgTAAgNgCQgJgBgJgGQgIgGgDgIQgDgJAAgPIAAgdIAPAAIAAAdQAAATAHAHQAIAIAQAAIAcAAIAAg/IAPAAIAACRg");
	this.shape_12.setTransform(-91.2,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhh, new cjs.Rectangle(-95.6,-20.2,181.5,39.6), null);


// stage content:
(lib._320x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_296 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(296).call(this.frame_296).wait(31));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(327));

	// Слой 3
	this.instance = new lib.dfdsf();
	this.instance.parent = this;
	this.instance.setTransform(264.3,42.7,0.9,0.9,0,0,0,13.5,6.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(128).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(57).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(129));

	// Слой 2
	this.instance_1 = new lib.rgfg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(315.9,43,0.9,0.9,0,0,0,70.6,6.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(57).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(193));

	// Слой 1
	this.instance_2 = new lib.fg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(276.9,43.1,0.9,0.9,0,0,0,27.9,6.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},6,cjs.Ease.get(1)).wait(57).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(257));

	// Слой 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAQQgDgCAAgGIABgEIADgEIAFgBIAGgBIAKgCIAAgCQAAgDgCgDQgCgBgFAAQgEgBgCACQgCACgBAEIgGgBQABgEACgCQACgDADgCIAIgBIAIABQADACABACIACADIAAAHIAAAHIABALIABAEIgGAAIgCgEIgGAEIgGACQgHgBgDgDgAgBACIgFACIgDABIAAADQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQABACAEAAQADgBADgBIAEgFIABgGIAAgCIgKACg");
	this.shape_1.setTransform(247.1,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAHATIgHgMQgBgDgCgBQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIAAASIgHAAIAAglIAHAAIAAARQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBIADgGIADgGIACgCIAFgBIABAAIAAAGIgBAAIgEAAIgCAFIgCAFIgDACQADABAEAGIAHAMg");
	this.shape_2.setTransform(243.8,43.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAIATIAAgRIgQAAIAAARIgGAAIAAglIAGAAIAAAQIAQAAIAAgQIAHAAIAAAlg");
	this.shape_3.setTransform(240,43.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKATIAAgPIgDAAIgGABQgBABgCAFIgGAIIgIAAIAHgKQADgFAEgBQgGAAgCgDQgDgDAAgEQAAgFAEgDQADgDAGAAIARAAIAAAlgAgFgLQAAABgBAAQAAABAAAAQAAABAAABQgBAAAAABQABADACABQACACAFAAIAHAAIAAgMIgJAAQgEAAgCABg");
	this.shape_4.setTransform(235.9,43.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPATIAAglIAHAAIAAAPIAIAAQAHAAAEADQAEACABAFQgBAFgDADQgEAEgIAAgAgIAOIAHAAQAEAAADgCQADgBAAgEQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBQgCgCgGAAIgHAAg");
	this.shape_5.setTransform(232.4,43.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAaIAAgzIAgAAIAAAGIgaAAIAAAQIAMAAIALABQAEACACACQACAEAAAFQAAAEgBADIgFAGQgEACgIAAgAgMAUIANAAQAGAAACgCQADgDAAgEQAAgDgBgCQgCgDgDAAIgIgBIgKAAg");
	this.shape_6.setTransform(228.1,42.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAADIgEAIIgEgDIAGgHIgJgBIACgFIAIAEIAAgJIAEAAIgBAJIAIgEIACAFIgJABIAGAHIgEADIgFgIg");
	this.shape_7.setTransform(222.2,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(327));

	// i3.png
	this.instance_3 = new lib.hyjkhj();
	this.instance_3.parent = this;
	this.instance_3.setTransform(124.1,25.1,0.594,0.594,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(193).to({_off:false},0).to({x:112.2,y:25.7,alpha:1},8,cjs.Ease.get(1)).wait(52).to({y:25.1},0).to({x:100.3,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(65));

	// i2.png
	this.instance_4 = new lib.ghjgh("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(69.3,37.3,0.535,0.535,0,0,0,0.1,0.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(129).to({_off:false},0).to({regX:0.2,x:57.7,alpha:1},8,cjs.Ease.get(0.96)).wait(52).to({x:58.6},0).to({regX:0.3,x:48,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(129));

	// i1.png
	this.instance_5 = new lib.ghjghj("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(69.2,40.2,0.535,0.535,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65).to({_off:false},0).to({regX:0.2,x:58.5,alpha:1},8,cjs.Ease.get(1)).wait(52).to({startPosition:0},0).to({regX:0.3,x:47.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(193));

	// i0.png
	this.instance_6 = new lib.ghjghjhjj("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(63.6,37.6,0.481,0.481,0,0,0,0.1,0.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({regX:0.2,x:53.9,alpha:1},8,cjs.Ease.get(1)).wait(52).to({startPosition:0},0).to({regX:0.3,x:44.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(257));

	// t4.png
	this.instance_7 = new lib.jlkjl();
	this.instance_7.parent = this;
	this.instance_7.setTransform(110.2,20,0.594,0.594,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(256).to({_off:false},0).to({x:86.3,alpha:1},8,cjs.Ease.get(1)).wait(52).to({x:78.3},0).to({x:66.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// t3.png
	this.instance_8 = new lib.hkhjk();
	this.instance_8.parent = this;
	this.instance_8.setTransform(65.6,25.1,0.594,0.594,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(192).to({_off:false},0).to({x:53.7,alpha:1},8,cjs.Ease.get(1)).wait(52).to({x:41.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(66));

	// t2.png
	this.instance_9 = new lib.uuiui();
	this.instance_9.parent = this;
	this.instance_9.setTransform(69.3,13.7,0.535,0.535,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(128).to({_off:false},0).to({regX:0.2,x:57.7,alpha:1},8,cjs.Ease.get(1)).wait(52).to({x:58.6},0).to({regX:0.3,x:48,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(130));

	// t1.png
	this.instance_10 = new lib.hhh();
	this.instance_10.parent = this;
	this.instance_10.setTransform(68.9,15.3,0.535,0.535,0,0,0,0.2,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(64).to({_off:false},0).to({regX:0.1,x:58.2,alpha:1},8,cjs.Ease.get(1)).wait(52).to({x:47.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(194));

	// t0.png
	this.instance_11 = new lib.uu8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(65.8,15.1,0.535,0.535,0,0,0,0.1,0.2);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:0.2,x:55.1,alpha:1},8,cjs.Ease.get(1)).wait(52).to({regX:0.3,x:44.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(258));

	// ffgh (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnYD/IAAn9IOxAAIAAH9g");
	mask.setTransform(157.5,26.1);

	// Слой 5
	this.instance_12 = new lib.ghgfh();
	this.instance_12.parent = this;
	this.instance_12.setTransform(172.5,25,0.8,0.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(130).to({_off:false},0).to({scaleX:1,scaleY:1,x:152.5,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:132.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(128));

	// p0.png - копия
	this.instance_13 = new lib.eeee();
	this.instance_13.parent = this;
	this.instance_13.setTransform(190.5,34.6,0.513,0.513,0,0,0,0.4,0.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(258).to({_off:false},0).to({regX:0.1,scaleX:0.64,scaleY:0.64,x:171.2,y:36,alpha:1},8,cjs.Ease.get(1)).wait(52).to({regX:0.2,scaleX:0.51,scaleY:0.51,x:152,y:34.6,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// p3.png
	this.instance_14 = new lib.ghj();
	this.instance_14.parent = this;
	this.instance_14.setTransform(187.9,32.3,0.549,0.549,0,0,0,0.3,0.3);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(194).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.69,scaleY:0.69,x:167.2,alpha:1},8,cjs.Ease.get(1)).wait(52).to({regX:0.2,regY:0.3,scaleX:0.55,scaleY:0.55,x:146.7,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(64));

	// p2.png
	this.instance_15 = new lib.dfgdfg();
	this.instance_15.parent = this;
	this.instance_15.setTransform(163,34,0.533,0.533,0,0,0,0.3,0.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(66).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.67,scaleY:0.67,x:141.9,y:35.4,alpha:1},8,cjs.Ease.get(1)).wait(52).to({regX:0.2,x:143.1},0).to({regX:0.3,regY:0.2,scaleX:0.53,scaleY:0.53,x:123,y:34,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(192));

	// p1.png
	this.instance_16 = new lib.ggggg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(170.8,28.5,0.445,0.444,0,0,0,0.1,0.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({_off:false},0).to({scaleX:0.56,scaleY:0.56,x:154.1,y:29.6,alpha:1},8,cjs.Ease.get(1)).wait(52).to({regX:0.2,scaleX:0.45,scaleY:0.44,x:137.5,y:28.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(256));

	// logo
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009FE3").s().p("Av9CSQhKhDArhjQAnhaB6gzQCIg5DcABQAxAAAtAFQAYADAhAFIAXAFIggA4QhGgTg5AAQhvAAhcAhQh7AsgTBYQgLA0AmAvQAxA8BrgFQAhgCBBgWQBPgbAugkIBwhiIAGgFIAQgIQAOgGASgBIB3AAIAmCmIBMikICEAAIBMB+IA4h+IB5AAIhqDnIh8AAIhPiFIg8CFIhMAAIAAABIiPAAIgFgpIiDAAIgrAmIhVAAQhiAkiCAAQi6AAhQhJgAldBiIBMgCIgHhAgAKtDOIBNhMIhNiwIB3AAIAhBeIBhhgICHABIjqDpQgLAMgIADIgSAEIgLABgAG+C5IjDAAIBqjnIDDAAQBeAAAiAsQAbAkgVAuQgTArgyAbQhBAjhnAAIgDAAgAGYB/IAiAAQAoAAAfgJQAygQAJglQAIgggfgNQgUgJgkAAIgiAAg");
	this.shape_8.setTransform(261.9,12.3,0.414,0.413);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#393938").s().p("AgFAiIADgcIgYAQIgGgLIAbgLIgbgLIAGgLIAYARIgDgcIALAAIgDAcIAXgRIAHALIgbALIAbALIgHALIgXgQIADAcg");
	this.shape_9.setTransform(287.2,27.2,0.364,0.364);

	this.instance_17 = new lib.ClipGroup();
	this.instance_17.parent = this;
	this.instance_17.setTransform(260.2,29.6,0.132,0.132,0,0,0,199.8,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.shape_9},{t:this.shape_8}]}).wait(327));

	// bg
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#BFBFBF"],[0,1],43.9,0,-43.9,0).s().p("Am3D6IAAnzINvAAIAAHzg");
	this.shape_10.setTransform(44,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AyHD6IAAnzMAkPAAAIAAHzg");
	this.shape_11.setTransform(204,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(327));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,321,51);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"320x50_atlas_P_.png", id:"320x50_atlas_P_"},
		{src:"320x50_atlas_NP_.jpg", id:"320x50_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;