(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"100pcx240_atlas_P_", frames: [[0,0,130,160],[132,0,122,160]]},
		{name:"100pcx240_atlas_NP_", frames: [[0,0,300,250],[0,252,300,250],[0,504,300,250]]}
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
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p1 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p2 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["100pcx240_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["100pcx240_atlas_NP_"];
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


(lib.mbnmbnm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#BFBFBF"],[0,1],149.4,0.1,-149.5,0.1).s().p("A3WTiMAAAgnDMAutAAAMAAAAnDg");
	this.shape.setTransform(149.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mbnmbnm, new cjs.Rectangle(0,0,299,250), null);


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


(lib.jjjj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(50.7,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEABgGQgBgGgDgDQgDgDgFAAQgEAAgCACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_1.setTransform(46.8,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(42.7,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAEgDQAEgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(38.9,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_4.setTransform(35,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQAAgJADgGQACgHADgDQAFgDAFAAQAFAAADACQADABADAEIADAIIABANQAAAKgCAGQgCAGgDAEQgFADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(31,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAJAAQAHAAAEAEQAEADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgDAFQgCAEgEADQgEACgFAAQgIAAgGgGgAgGABQgEADAAAGIABAHQACADADACQADABACAAQAEAAADgDQAEgEAAgGQAAgGgEgDQgDgDgEAAQgFAAgCADg");
	this.shape_6.setTransform(27,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(23.1,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(19.2,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAcQABgHACgJQACgKAFgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(15.2,18.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(11.1,18.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQgBgJACgGQADgHAEgDQADgDAGAAQAEAAAEACQAEABACAEIAEAIIAAANQAAAKgBAGQgCAGgFAEQgEADgGAAQgIAAgEgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(7.3,18.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(3,18.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(77.2,9.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgDgBIgHgBIgOAAg");
	this.shape_14.setTransform(72.2,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(68.1,9.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(63,9.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAFAAADgEQADgEAAgGQAAgGgDgDQgDgDgFAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAGgDAEAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgHAAgGgFg");
	this.shape_17.setTransform(56.5,9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(52.2,9.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHAAgQQAAgJADgGQACgHADgDQAFgDAFAAQAFAAADACQADABADAEIADAIIABANQAAAKgCAGQgCAGgDAEQgFADgGAAQgHAAgFgGgAgHgSQgDAFgBANQABAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(48.5,9.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQAEgEgBgEQAAgEgCgDQgEgDgFAAQgDAAgEADQgCADAAAGIgIgBQABgIAFgEQAEgFAIAAQAIAAAFAFQAEAEAAAHIAAAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_20.setTransform(44.5,9.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(40.3,9.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_22.setTransform(36.7,9.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(32.6,9.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgFgHAAgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQAEABACAEIAEAIIABANQgBAKgBAGQgDAGgEAEQgDADgHAAQgHAAgFgGgAgHgSQgEAFABANQgBAOAEAFQADAEAEAAQAFAAADgEQAEgFgBgOQABgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(28.8,9.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(24.9,9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_26.setTransform(20.9,9.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_27.setTransform(14.6,9.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_28.setTransform(9.3,9.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgIAAIAAg5IAHAAIAAAtIAegtIAHAAIAAA5g");
	this.shape_29.setTransform(4,9.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(66.1,3.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgCgDQgDgDAAgEQAAgHAFgEQAFgEAGAAQAIAAAEAEQAEAEAAAHQAAAEgBADQgCADgFABQAFACADADQADAEAAAFQAAAHgFAFQgGAFgIAAQgIAAgEgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgGgUQgDADAAADQAAAEADADQADADADAAQAEAAADgDQADgDgBgDQABgEgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(63.2,0.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(58.7,3.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgKAJIAUAAIAAgdIgOAAQgBAUgFAJg");
	this.shape_33.setTransform(55.6,2.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABAAQAAgBABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(51.1,3.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApgAgHgUQgDgDAAgFIAEAAIADAFIADABIAFgBIACgFIAFAAQgBAFgDADQgCACgGAAQgDAAgEgCg");
	this.shape_35.setTransform(48.3,0.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(45.2,1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAJgIQAIgIADgEQAEgEAAgEQgBgEgDgDQgCgDgGAAQgDAAgEADQgDADAAAGIgHgBQABgIAFgEQAFgFAHAAQAIAAAFAFQAFAEgBAHIgBAHQgBADgDADQgEAEgHAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_37.setTransform(42.1,0.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApgAgGgUQgDgDgBgFIAFAAIACAFIADABIAFgBIACgFIAFAAQgBAFgCADQgEACgEAAQgFAAgCgCg");
	this.shape_38.setTransform(36.6,0.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_39.setTransform(32.6,1.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(29.4,1.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(26,1.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(22.2,1.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_43.setTransform(18.3,1.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(13.4,2.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgFgFAAgLQAAgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEAAgIQAAgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_45.setTransform(8.2,1.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABAEACQACACACADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgHgBIgOAAg");
	this.shape_46.setTransform(3.9,0.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_47.setTransform(84.2,-6.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQABAEACACQADACACAAQAEAAADgCQACgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgBAAIAAgFIAEAAIAEgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgCgEAAQgFAAgCAHIgHgBQADgMALAAQAHAAAEAEQAEAEAAAFQgBAFgFADQAEAAACADQABADAAADQAAAGgEADQgEAEgIAAQgNAAgCgNg");
	this.shape_48.setTransform(80.6,-7.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgGAJAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQADAEAFAAQADAAADgCQADgCACgFIAHABQgCAHgFADQgEAEgHAAQgJAAgFgGgAgGgMQgEAEgBAFIAXAAQgBgFgCgDQgDgEgFAAQgFAAgCADg");
	this.shape_49.setTransform(77.1,-7.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgGgFABgLQgBgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgHAAgGgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_50.setTransform(73.1,-7.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQADACACAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(69.3,-6.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAPAdIAAgyIgdAAIAAAyIgHAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(64.6,-8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(59.4,-5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDACgDQABgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDAEgBQADgCAFAAQAFAAAEACQADABABACIADAFIAAAGIAAAIIABANIABAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_54.setTransform(56.6,-7.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQgBAGgEADQgDADgHAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgFAAIgJAAgAgJgCIAHAAIAFgBIADgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgDgCIgHgBIgHAAg");
	this.shape_55.setTransform(52.9,-7.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(49.6,-7.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(46.2,-7.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgFgFAAgLQAAgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEAAgIQAAgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_58.setTransform(42.4,-7.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(37.3,-8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(31.8,-5.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(29.9,-7.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(25.9,-5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(23.1,-8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(18.8,-8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(15,-8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgFgFg");
	this.shape_66.setTransform(11.3,-7.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(7,-8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(3,-8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(71.8,-16.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(69,-14.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgSAdIAAg5IAkAAIAAAHIgcAAIAAAyg");
	this.shape_71.setTransform(66.5,-16.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(63.5,-14.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(59.9,-16.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(56.5,-14.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgDAHgBQAIABAGAEQAGAEACAIIgHABQgCgFgEgEQgEgDgFAAQgGABgEADQgFADgCAFQgBAFAAAGQAAAGACAGQACAGAEACQAFADAEAAQAGAAAFgDQAEgEACgHIAHACQgCAJgGAEQgGAGgJgBQgJAAgFgDg");
	this.shape_75.setTransform(52.9,-16.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(46,-16.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAkIAAgOIglAAIAAAOIgHAAIAAgVIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAVgAgGgZIgBAUQgCAMgEAIIAaAAIAAgqIgTAAg");
	this.shape_77.setTransform(40.7,-16.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(35.8,-16.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(30.7,-16.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAKAdIgJgQQgDgGgDgDQgCgCgEAAIAAAbIgIAAIAAg5IAIAAIAAAaQAEAAACgCQADgCACgIIAEgIIAFgEQACgCAEAAIAEABIAAAGIgBAAIgCAAQgDAAgCACIgEAHQgDAIgCABIgEADQAFABAFAJIAMATg");
	this.shape_80.setTransform(26.5,-16.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(22.1,-16.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(15.6,-16.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(9.9,-16.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(4.2,-16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.jjjj, new cjs.Rectangle(-0.9,-23.2,98.9,48.5), null);


(lib.hyjkhj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C454E").s().p("ABwBgQgFgGgBgGQAJgMgBgNQgBgOgQgEQgGgBgCgGQgCgGAFgFQATgQgKgTQgGgLgMgHQgNgIgNABQgEAAgDgCQgDgDgBgDQgDgPgWgMQgYgLgQAJQgMAHgEARIgCAEQgHAIgJgGQgTgPgSAKQgIAEgHAJQgGAJgCALIgSAIQgJACAIgVQAJgcAWgMQAYgNAZAMQAIgQAOgIQAbgPAjARQAZANAIAUQASABAPAKQAPAKAIAPQANAZgQAXQATALAAAWQAAAVgOARQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgDAAgEgEg");
	this.shape.setTransform(6,-16.1,0.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C454E").s().p("Ag8AmQgDgDABgEQABgEAEgDIBqhCQAEAOAKAPIhtA3IgGABQgFAAgDgFg");
	this.shape_1.setTransform(-11.8,10.3,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C454E").s().p("Ag6A3QgEgDAAgEQAAgEAEgDIBdhiQALAOARALIhpBXQgEADgEAAQgEAAgEgDg");
	this.shape_2.setTransform(-16.1,6.9,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C454E").s().p("AgLCdQgSgHgNgNQgYgYAFgdQgSgEgSgJQgYgNgLgTQgLgWAMgWQgdgKgJgbQgIgbARgdQARgcAcgLQAhgNAfAUQAMgTAUgIQATgIAXAFQAUAEATANQAeAUAHAbQAXAFASARQASAPAHAVQAGAQgDAQQgDAQgMANQAWARgDAeQgEAbgVAUQgPANgTAGQgVAFgVgEQgPAZggABIgEAAQgQAAgPgGgAgdBCQAFAGgEAHQgMAUATAUQAUATAYgCQAUgBAFgSQACgGAGgCQAGgDAGACQAQAGAQgEQAPgDALgLQAQgOABgRQABgTgUgIQgIgDgBgIQgCgIAHgFQAbgRgJgbQgGgQgOgLQgQgNgQgBQgFAAgEgEQgEgDgBgFQgBgVgbgSQgLgIgOgDQgPgEgLAEQgRAHgIAWIgEAFQgEAEgGAAQgHAAgEgEQgXgXgYAKQgSAHgMATQgLAUAFARQAFATAeAEQAEAAAEADQAEAEAAAGQAAAFgEAEQgPAOAGAPQAFANATAKQAWAMATAAIABAAQAHAAAEAGg");
	this.shape_3.setTransform(0.1,-3.7,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hyjkhj, new cjs.Rectangle(-21.7,-25.1,40.1,39.3), null);


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


(lib.hjk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hjk, new cjs.Rectangle(-150,-125,300,250), null);


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
	this.shape.setTransform(38.5,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4A49").s().p("AAoA4IhBhGIAABCQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgOAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAhoQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAEAAIA/BEIABAAIAAhAQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIAOAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAIAABoQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(27.1,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A49").s().p("AgGA2QgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhmQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBABAAIANAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIAABmQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_2.setTransform(18.6,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A4A49").s().p("AAUA2IgDgBIgTgpIgSAAIAAAoQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgOAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAhmQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAIAsAAQAOABAKAJQAKAKAAAOQAAAVgXAKIAVAnIAAADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAgAgTgDIAYAAQAGAAAFgGQAEgEAAgHQAAgGgEgEQgFgFgGAAIgYAAg");
	this.shape_3.setTransform(11.3,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A49").s().p("AgBA2QAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAhjIgdAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAgCQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIBBAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIAAADQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgdAAIAABjQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_4.setTransform(-3.2,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A4A49").s().p("AAdA2QgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgXgoIgiAAIAAAnQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBIAAhnQAAgBAAAAQABgBAAAAQAAAAAAAAQABgBAAAAIAmAAQAOAAAKAKQALAKAAAOQAAALgIAJQgHAIgLAEIAXAoQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAgAgdAGIAgAAQALAAAIgHQAIgIAAgLQAAgLgIgIQgIgHgMAAIgfAAg");
	this.shape_5.setTransform(-11.6,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A4A49").s().p("AAtA3IgCgBIgNgdIg7AAIgMAdIgCABIgFAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAwhsIABgBIABAAIACABIAvBsQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAgAgaATIA1AAIgag+IgBAAg");
	this.shape_6.setTransform(-22.1,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A49").s().p("AAAA4IgCgBIgfhdIgSBbQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgEAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAWhqIABgBIACAAIACABIAfBfIAghfIACgBIABAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIAWBqQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgDAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgShbIAAAAIggBdQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAg");
	this.shape_7.setTransform(-33.9,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A4A49").s().p("AggArQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIACgCQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAMAMAPAAQALAAAHgGQAJgGAAgIQAAgKgJgGQgHgGgOgFQgPgEgHgGQgIgHAAgNQAAgKAIgIQAJgJAQAAQAJAAAKAEIAIAEQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBACQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgGgEQgJgDgHAAQgMAAgIAHQgGAFAAAIQAAAKAHAFQAGAFANAEQARAGAIAGQAJAIAAAMQAAAMgKAIQgLAIgNAAQgTAAgNgNg");
	this.shape_8.setTransform(-44.7,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A4A49").s().p("AijCkQhFhEAAhgQAAhfBFhEQBEhFBfAAQBgAABEBFQBFBEgBBfQABBghFBEQhEBEhgABQhfgBhEhEgAiYiYQhAA/AABZQAABZBABAQA/A/BZAAQBZAABAg/QA/hAAAhZQAAhZg/g/QhAhAhZABQhZgBg/BAg");
	this.shape_9.setTransform(25.3,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAEIgEAIIgFgDIAGgIIgJgBIACgFIAJADIgBgJIAFAAIgBAJIAJgDIACAFIgKABIAHAIIgFADIgFgIg");
	this.shape_10.setTransform(51.2,-19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAEIgFAIIgEgDIAHgIIgKgBIACgFIAJADIgBgJIAEAAIAAAJIAJgDIACAFIgKABIAHAIIgFADIgFgIg");
	this.shape_11.setTransform(48.1,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.1,-24.1,103.1,46.5);


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


(lib.ghj333 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-47,-62,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghj333, new cjs.Rectangle(-47,-62,97.6,128), null);


(lib.ghj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-61,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghj, new cjs.Rectangle(-61,-80,122,160), null);


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
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ggggg, new cjs.Rectangle(-150,-125,300,250), null);


(lib.fghgh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fghgh, new cjs.Rectangle(0,0,300,250), null);


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


(lib.eeee43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p0();
	this.instance.parent = this;
	this.instance.setTransform(-51,-62,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eeee43, new cjs.Rectangle(-51,-62,104,128), null);


(lib.eeee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p0();
	this.instance.parent = this;
	this.instance.setTransform(-65,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eeee, new cjs.Rectangle(-65,-80,130,160), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(139.8,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgFgFg");
	this.shape_1.setTransform(135.6,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(131.1,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAEgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(127,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgaAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(122.8,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAEgDQAEgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgBAGQgCAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(118.5,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAIAAQAIAAADAEQAFADABAHIgHABQgBgFgCgBQgDgDgEAAIgFABQgDADgCAEQgCAFAAAJQADgEADgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgCAFQgDAEgEADQgEACgFAAQgIAAgGgGgAgHABQgDADAAAGIACAHQABADADACQACABADAAQAEAAAEgDQACgEAAgGQAAgGgCgDQgEgDgFAAQgDAAgEADg");
	this.shape_6.setTransform(114.3,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(110,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_8.setTransform(105.8,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_9.setTransform(101.6,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(97.1,3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(93,3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(88.5,3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_13.setTransform(81.9,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgEgBIgGgBIgOAAg");
	this.shape_14.setTransform(76.6,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAdIAAg5IAkAAIAAAHIgcAAIAAAyg");
	this.shape_15.setTransform(72.2,3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(66.8,3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_17.setTransform(59.7,3.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(55.1,3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(51.1,3.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIAAgFIAGgIIAIgIQAJgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_20.setTransform(46.8,3.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(42.3,3.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEAAgGQAAgGgDgDQgEgDgEAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_22.setTransform(38.4,3.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(34,3.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAEgDQAEgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(29.9,3.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgcAAIAAgGIAlAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(25.7,3.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(21.4,3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_27.setTransform(14.5,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_28.setTransform(8.9,3.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_29.setTransform(3.3,3.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(245.4,-3.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgDgDQgCgDAAgEQABgHAEgEQAFgEAGAAQAIAAAEAEQAEAEABAHQAAAEgCADQgCADgFABQAGACACADQADAEAAAFQAAAHgFAFQgGAFgIAAQgIAAgEgFgAgHAEQgEADABAFIABAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgGgUQgDADAAADQAAAEADADQADADADAAQAEAAADgDQADgDgBgDQABgEgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(242.2,-6.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(237.1,-3.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgKAJIAUAAIAAgdIgOAAQgBAUgFAJg");
	this.shape_33.setTransform(233.7,-4.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(228.6,-3.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApgAgHgUQgDgDAAgEIAEAAIADADIADABIAFgBIACgDIAFAAQgBAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_35.setTransform(225.5,-6.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(222.1,-5.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIAAgFIAFgIIAKgIQAIgIADgEQADgEABgEQAAgEgEgDQgDgDgEAAQgFAAgCADQgEADAAAGIgGgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAFAEAAAHIgCAHQgBADgDADQgDAEgIAGIgHAHIgEAEIAcAAIAAAHg");
	this.shape_37.setTransform(218.7,-6.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApgAgHgUQgDgDAAgEIAEAAIADADIADABIAFgBIACgDIAFAAQgBAEgDADQgCADgGAAQgDAAgEgDg");
	this.shape_38.setTransform(212.6,-6.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_39.setTransform(208.3,-5.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(204.8,-5.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(201.1,-5.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(197,-5.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_43.setTransform(192.8,-5.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(187.6,-4.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_45.setTransform(182.1,-5.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgDgBIgHgBIgOAAg");
	this.shape_46.setTransform(177.5,-6.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_47.setTransform(170.5,-4.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQABAEACACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAGAAIACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgFAAgCAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(166.6,-5.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgEAAQgEAAgEADg");
	this.shape_49.setTransform(162.8,-5.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_50.setTransform(158.5,-5.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQACgDADgCQADgBADAAQAGAAADADQAEACADAFQACAFAAAGQAAAHgCAEQgDAFgEACQgFADgEAAQgDAAgDgBQgDgCgBgCIAAAUgAgIgSQgDAEAAAIQAAAHADAEQADADAFAAQAEAAAEgEQACgEAAgHQAAgIgCgEQgEgEgEAAQgEAAgEAFg");
	this.shape_51.setTransform(154.4,-4.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(149.4,-6.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(143.6,-3.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPASQgDgDAAgFQAAgDABgDQACgCACgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgDACQgCACgBAEIgHgBIADgHQADgDADgBQAEgCAFAAQAFAAADACQAEABACACIACAFIAAAGIAAAIIAAANIACAFIgHAAQgBgCgBgDIgHAEIgHACQgHAAgEgEgAAAADIgHABIgCACIgBAEQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQACACAEAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgKADg");
	this.shape_54.setTransform(140.5,-5.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQgBAGgEADQgDADgHAAgAgJAPIAJAAIAHgBQADgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgGAAIgIAAgAgJgCIAHAAIAGgBIACgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgDgCIgHgBIgHAAg");
	this.shape_55.setTransform(136.5,-5.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(132.9,-5.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(129.2,-5.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFABgLQAAgLAGgFQAFgFAHAAQAJAAAFAGQAFAGAAAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_58.setTransform(125.1,-5.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(119.7,-6.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(113.6,-3.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(111.4,-5.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(106.8,-3.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(103.7,-6.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(99.1,-6.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(95,-6.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_66.setTransform(91,-6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(86.4,-6.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(82.1,-6.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(76.2,-5.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(73.1,-3.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(70.3,-6.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(67,-3.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_73.setTransform(63.1,-6.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(59.4,-3.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgIAAgHQAAgIADgHQAEgHAGgDQAGgDAHgBQAIABAGAEQAGAEACAIIgHABQgCgFgEgEQgEgDgFAAQgGABgEADQgFADgCAFQgBAFAAAGQAAAGACAGQACAGAEACQAFADAEAAQAGAAAFgDQAEgEACgHIAHACQgCAJgGAEQgGAGgJgBQgJAAgFgDg");
	this.shape_75.setTransform(55.5,-6.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAdIAAgsIgdAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(48,-6.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAkIAAgOIglAAIAAAOIgHAAIAAgVIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAVgAgGgZIgBAUQgCAMgEAIIAaAAIAAgqIgTAAg");
	this.shape_77.setTransform(42.4,-5.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_78.setTransform(37.2,-6.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(31.8,-6.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAFABIAAAGIgBAAIgCAAQgDAAgCACIgEAHQgDAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(27.3,-6.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(22.6,-5.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(15.5,-6.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(9.5,-6.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(3.5,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(-1.6,-12.4,252,22.8), null);


(lib.dfgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfg, new cjs.Rectangle(-120,-97,300,250), null);


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


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bJxIAAzhMAu3AAAIAAThg");
	this.shape.setTransform(150,187.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#BFBFBF"],[0,1],-0.1,62.5,-0.1,-62.5).s().p("A3bJxIAAzhMAu3AAAIAAThg");
	this.shape_1.setTransform(150,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,250), null);


(lib.yyyyt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// qq
	this.instance = new lib.dfdsf();
	this.instance.parent = this;
	this.instance.setTransform(-7.5,-12.4,0.9,0.9,-90,0,0,13.5,6.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(128).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(57).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(128));

	// ww
	this.instance_1 = new lib.rgfg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.2,-64,0.9,0.9,-90,0,0,70.6,6.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(57).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(192));

	// ee
	this.instance_2 = new lib.fg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.1,-25,0.9,0.9,-90,0,0,27.9,6.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},6,cjs.Ease.get(1)).wait(57).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(256));

	// rr
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAEAQIgEgDIgBgFIgBgGIgCgKIgCAAQgDAAgCACQgCACAAAEQAAAFABACQABACAEABIAAAGQgEgBgCgCQgDgCgCgDIgBgIIABgIQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAgBIAFgCIAGAAIAHAAIALgBIAEgBIAAAGIgEACIAEAGIABAGQAAAHgDADQgDADgFAAIgEgBgAACACIACAFIACADIACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQACgBAAgEQgBgDgBgDIgFgEIgGgBIgCAAIACAKg");
	this.shape.setTransform(-15.6,-30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAOIAAgHIARAAQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgGgDIgGgDIgCgCIgBgFIAAgBIAGAAIAAABIAAAEIAFACIAFACIACADQABgDAGgEIAMgHIAAAHIgMAGQgDACgBACQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAIASAAIAAAHg");
	this.shape_1.setTransform(-15.6,-27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAPIAAgGIAQAAIAAgRIgQAAIAAgGIAlAAIAAAGIgRAAIAAARIARAAIAAAGg");
	this.shape_2.setTransform(-15.6,-23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJAJQgFgDgBgCQAAAFgDADQgDACgEAAQgFAAgDgEQgDgDAAgHIAAgQIAlAAIAAAGIgPAAIAAAFIABAEQABABAFADIAIAFIAAAIgAgMgBQAAAGABABQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAQADABABgDQACgCAAgFIAAgIIgMAAg");
	this.shape_3.setTransform(-15.6,-19.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAQIAAgHIAPAAIAAgIQAAgHADgEQACgFAFAAQAFAAADAEQAEAEAAAHIAAAQgAADgGQgCACAAAFIAAAIIANAAIAAgHQAAgFgCgCQgBgDgEAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_4.setTransform(-15.6,-16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZATIAAggIAGAAIAAAaIAQAAIAAgNIABgKQACgEACgCQAEgCAFAAQAEAAADABIAGAFQACAEAAAIIAAATgAAGgKQgDACAAADIgBAIIAAAKIASAAIAAgNQAAgGgCgCQgDgDgEAAQgDAAgCABg");
	this.shape_5.setTransform(-16.3,-11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAKIAEgIIgJAAIAAgEIAJABIgEgIIAFgCIACAJIAGgGIADAEIgIAEIAIAFIgDAEIgGgGIgCAJg");
	this.shape_6.setTransform(-17.9,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(326));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-50.1,20.7,50.2);


(lib.uuiui = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hhhj();
	this.instance.parent = this;
	this.instance.setTransform(63.1,-10.2,1,1,0,0,0,27.8,6.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgFBBIAAh0IgeAAIAAgNIBGAAIAAANIgdAAIAAB0g");
	this.shape.setTransform(85.4,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgiA/QgGgDgKgKIAKgIQAJAJAEACQADABADAAQAGAAADgDQAEgCAEgLIgvhnIAPAAIAmBXIAkhXIAOAAIgxBzQgGAQgSAAQgHAAgGgDg");
	this.shape_1.setTransform(75.7,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AAhBBIAAg/IhBAAIAAA/IgNAAIAAiBIANAAIAAA2IBBAAIAAg2IANAAIAACBg");
	this.shape_2.setTransform(63.8,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AAlBBIAAhiIhUBiIgDAAIAAiBIANAAIAABkIBVhkIADAAIAACBg");
	this.shape_3.setTransform(51,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AA8BBIgNhcIgtBcIgDAAIguhdIgNBdIgMAAIATiBIACAAIAzBpIA0hpIACAAIATCBg");
	this.shape_4.setTransform(36.1,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AgXA9IAig1QgJADgEAAQgPAAgLgLQgLgLAAgQQAAgMAGgIQAFgJAJgGQAKgFAKAAQAKAAAKAFQAIAFAFAKQAGAJAAAKQAAAHgDAKQgDAIgJAMIgmA7gAgSgvQgIAJAAALQAAALAIAIQAIAIAKAAQALAAAJgIQAHgIAAgLQAAgLgHgJQgKgHgKgBQgKABgIAHg");
	this.shape_5.setTransform(17.8,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgcA4QgLgKgCgOIANAAQACAIADAEQADAEAHADQAFADAHAAQAMAAAJgKQAJgKAAgOQAAgNgIgHQgJgIgMAAQgLAAgRAHIAMhAIA3AAIAAAMIgtAAIgGAjQAHgCAHAAQARAAAMALQALAMAAASQAAAMgGALQgGALgKAFQgJAGgNAAQgPAAgLgKg");
	this.shape_6.setTransform(7.9,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AAwBBIgUgrIg2AAIgVArIgOAAIA9iBIACAAIA8CBgAgVAJIAsAAIgWgtg");
	this.shape_7.setTransform(-8.7,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AgXA+QgKgGgJgOIAKgGQAJANAIAEQAHAEAIAAQAMgBAJgGQAIgHAAgOQAAgIgCgFQgDgFgGgEQgFgEgFAAIgPgBIgCAAIAAgLIAEAAQAcAAAAgWQAAgMgGgFQgHgHgKAAQgLAAgNAMIgIgIQAOgQASAAQARAAAKAJQAKAKAAAOQAAAUgTAKQAZAHAAAaQAAARgLALQgNALgTAAQgMAAgLgGg");
	this.shape_8.setTransform(-20.6,11.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AgwAwQgTgUAAgcQAAgRAJgQQAKgQAPgJQAQgJARAAQAdAAATATQAUAUAAAcQAAAdgUATQgUAUgcAAQgaAAgWgUgAgbgvQgNAHgHANQgHANAAAOQAAAYAQAQQARAPAVAAQAQAAAMgHQAMgHAIgNQAGgNABgPQgBgOgGgNQgIgNgMgHQgOgIgOAAQgOAAgNAIg");
	this.shape_9.setTransform(-38.6,11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AgfBBIAAiBIA/AAIAAANIgzAAIAAB0g");
	this.shape_10.setTransform(-49.9,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AgkBBIAAiBIBJAAIAAANIg8AAIAAAoIA8AAIAAAMIg8AAIAAAzIA8AAIAAANg");
	this.shape_11.setTransform(-59.1,11.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AgtAtQgRgSAAgbQAAgcAUgUQAUgTAcAAQASAAAPAHQAQAIAIANIgKAHQgIgLgNgFQgKgGgQAAQgNAAgOAHQgMAHgJANQgHANAAAOQABAXAPARQARAPAYABQAbAAASgWIAKAIQgKAMgOAHQgPAHgSAAQggAAgTgXg");
	this.shape_12.setTransform(-71.7,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AgmBBIAAiBIAaAAQAPAAAHAEQAJAEAEAHQAFAJAAAIQAAAJgEAGQgDAHgJAFQAKAEAFADQAFAEADAIQAEAFAAAIQAAAQgMALQgLALgSAAgAgZA0IAQAAQANAAAHgDQAGgCAEgGQAEgHAAgHQAAgIgFgGQgHgHgJgCIgdgBgAgZgKIAHAAQANABAGgDQAHgDADgFQAEgGAAgGQAAgIgGgGQgHgFgMAAIgPAAg");
	this.shape_13.setTransform(-83.8,11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AAwBBIgUgrIg3AAIgUArIgOAAIA9iBIACAAIA8CBgAgVAJIArAAIgWgtg");
	this.shape_14.setTransform(97.8,-10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AAdBBIAAg8IgIAAIgtA8IgQAAIAtg8QgQAAgJgFQgIgCgFgJQgGgIAAgKQAAgMAHgJQAJgJAKgDQAHgCAVAAIAaAAIAACBgAgNgwQgFACgEAFQgDAFAAAHQAAAHADAFQADAEAHAEQAFACANAAIAXAAIAAgsIgYAAQgLAAgHADg");
	this.shape_15.setTransform(23.6,-10.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AAwBBIgUgrIg3AAIgUArIgOAAIA9iBIACAAIA8CBgAgVAJIArAAIgWgtg");
	this.shape_16.setTransform(12.2,-10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AAhBBIAAg+IhBAAIAAA+IgNAAIAAiBIANAAIAAA2IBBAAIAAg2IANAAIAACBg");
	this.shape_17.setTransform(-0.6,-10.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AAhBBIAAg+IhBAAIAAA+IgNAAIAAiBIANAAIAAA2IBBAAIAAg2IANAAIAACBg");
	this.shape_18.setTransform(-12.9,-10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AgkBBIAAiBIBJAAIAAANIg8AAIAAAoIA7AAIAAANIg7AAIAAAyIA7AAIAAANg");
	this.shape_19.setTransform(-23.4,-10.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgmBBIAAiBIAaAAQAPABAHADQAJAEAEAIQAFAHAAAJQAAAIgEAIQgEAHgIAFQAKACAFAFQAGAEADAHQADAGAAAHQAAARgMAKQgLALgSAAgAgZA0IAQAAQAMAAAIgCQAHgEADgFQAEgHAAgGQAAgJgFgGQgGgHgKgCQgFgBgRAAIgHAAgAgZgKIAHAAQANABAGgDQAGgCAEgGQAEgFAAgHQAAgIgGgGQgIgFgLAAIgPAAg");
	this.shape_20.setTransform(-33.5,-10.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AgFBBIAAh0IgeAAIAAgNIBGAAIAAANIgcAAIAAB0g");
	this.shape_21.setTransform(-42.8,-10.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AguAtQgQgTAAgaQAAgcAUgUQATgTAdAAQAUAAAOAHQANAHAKANIgKAIQgIgKgNgHQgLgFgOAAQgOAAgOAHQgOAIgGAMQgIANABAOQgBAYARAQQAQAPAXAAQAcAAASgVIAKAIQgJAMgPAHQgPAHgRAAQghAAgUgXg");
	this.shape_22.setTransform(-54,-10.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AgkBBIAAiBIBJAAIAAANIg8AAIAAAoIA7AAIAAANIg7AAIAAAyIA7AAIAAANg");
	this.shape_23.setTransform(-65.6,-10.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AAaBBIAAg9IgJAAQgTAAgIgCQgKgCgGgDQgGgFgEgJQgCgJAAgMIAAgaIANAAIAAAbQAAAQAGAHQAGAGAPAAIAYAAIAAg4IANAAIAACBg");
	this.shape_24.setTransform(-76.4,-10.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AAwBBIgUgrIg3AAIgUArIgOAAIA9iBIACAAIA8CBgAgVAJIArAAIgWgtg");
	this.shape_25.setTransform(-87.3,-10.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AAaBBIg3g8IAAA8IgOAAIAAiBIAOAAIAAAxIAzgxIARAAIg9A7IBBBGg");
	this.shape_26.setTransform(-98.6,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uuiui, new cjs.Rectangle(-103,-17,207.1,35.2), null);


(lib.uu8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hhggh();
	this.instance.parent = this;
	this.instance.setTransform(-5.1,-12.2,1,1,0,0,0,65.3,7.7);

	this.instance_1 = new lib.gghghg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.1,12.5,1,1,0,0,0,65,7.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgpBJIAAiSIBTAAIAAAPIhEAAIAAAuIBEAAIAAANIhEAAIAAA6IBEAAIAAAOg");
	this.shape.setTransform(67.2,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uu8, new cjs.Rectangle(-70.4,-19.9,141.9,40), null);


(lib.jlkjl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hhggh();
	this.instance.parent = this;
	this.instance.setTransform(-43.3,10.1,0.876,0.877,0,0,0,65.2,7.7);

	this.instance_1 = new lib.hhhj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.7,10.4,0.995,0.996,0,0,0,27.7,6.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAlBAIAAhhIhUBhIgDAAIAAh/IANAAIAABjIBUhjIADAAIAAB/g");
	this.shape.setTransform(96.4,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AAlBQIAAhiIhUBiIgDAAIAAiAIANAAIAABkIBUhkIAEAAIAACAgAgUhBQgHgGgDgIIAMAAQACAFAGACQAFADAFgBQAFAAAGgBQAEgCAEgGIAMAAQgDAIgHAGQgHAEgOAAQgMAAgIgEg");
	this.shape_1.setTransform(21.6,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgoBAIAAh/IAMAAIAAA3IAKAAQAXAAAMACQALADAHAIQAGAIAAAOQAAAPgGAIQgGAIgLAEQgIACgZAAgAgcA0IAOAAQAUAAAHgCQAHgCAEgGQAEgFAAgJQAAgKgFgGQgFgGgIgBIgbgBIgLAAg");
	this.shape_2.setTransform(68,-11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AArBAIgrhiIgqBiIgOAAIA4h/IACAAIA3B/g");
	this.shape_3.setTransform(56,-11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgkBAIAAh/IBJAAIAAAMIg8AAIAAApIA8AAIAAALIg8AAIAAAzIA8AAIAAAMg");
	this.shape_4.setTransform(45.4,-11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AA0BKIAAgUIhnAAIAAAUIgMAAIAAgfIAKAAIAzh0IADAAIA1B0IAKAAIAAAfgAgmArIBNAAIgnhZg");
	this.shape_5.setTransform(33.4,-10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgvAwQgUgTAAgdQAAgRAJgQQAKgRAPgHQAQgKARABQAdgBATAUQAUAUAAAbQAAAcgUAUQgTAUgdAAQgbAAgUgUgAgagvQgMAHgIANQgHALAAAQQAAAXAPAQQARAQAVAAQAPAAANgHQAMgHAHgNQAIgNAAgPQAAgOgIgNQgHgNgNgHQgNgHgOAAQgNAAgNAHg");
	this.shape_6.setTransform(18.9,-11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AA8BAIgNhbIgtBbIgCAAIgvhbIgMBbIgNAAIATh/IACAAIAzBoIA0hoIACAAIATB/g");
	this.shape_7.setTransform(2.9,-11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAcBAIAAg7IgHAAIgtA7IgQAAIAtg7QgPAAgJgEQgJgDgGgIQgEgJAAgKQAAgMAHgJQAHgJAMgCQAGgCAWAAIAZAAIAAB/gAgMgwQgGACgDAFQgEAFAAAHQAAAHAEAFQAEAGAFACQAHACALAAIAWAAIAAgsIgWAAQgMAAgGADg");
	this.shape_8.setTransform(-16,-11.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AAwBAIgVgqIg2AAIgUAqIgOAAIA8h/IADAAIA8B/gAgVAKIArAAIgWgug");
	this.shape_9.setTransform(-27.4,-11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AgmBAIAAh/IAaAAQAPAAAIADQAIAEAEAIQAFAIABAIQAAAJgFAHQgEAHgIAEQAKAEAFADQAFAEADAHQAEAHAAAIQAAAPgMALQgKAKgTAAgAgZA0IAQAAQANAAAHgDQAHgDAEgGQADgFAAgHQABgIgGgHQgGgHgJgCQgGgBgRAAIgHAAgAgZgJIAHAAQANAAAHgDQAGgDAEgFQADgFAAgHQAAgIgGgGQgIgFgLAAIgPAAg");
	this.shape_10.setTransform(-38.9,-11.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AgvAwQgUgTAAgdQAAgRAJgQQAKgRAPgHQAPgKASABQAcgBAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgcAAgTgUgAgagvQgOAIgGAMQgIAMAAAPQAAAXAQAQQAQAQAWAAQAPAAAMgHQANgIAHgMQAHgMAAgQQAAgPgHgMQgHgNgNgHQgNgHgOAAQgNAAgNAHg");
	this.shape_11.setTransform(-52.1,-11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AAhBAIAAg+IhBAAIAAA+IgMAAIAAh/IAMAAIAAA2IBBAAIAAg2IANAAIAAB/g");
	this.shape_12.setTransform(-66,-11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.jlkjl, new cjs.Rectangle(-100.4,-18,201.9,35.2), null);


(lib.hhhhh2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p4
	this.instance = new lib.eeee43();
	this.instance.parent = this;
	this.instance.setTransform(19.2,-3.3,0.8,0.8,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(257).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:-2,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:-19.2,y:-3.3,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// p3.png
	this.instance_1 = new lib.ghj333();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,6,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(194).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:-0.5,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:-30,y:-9,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(64));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bKKIAA0TMAu3AAAIAAUTg");
	mask.setTransform(0.6,0);

	// Слой 4
	this.instance_2 = new lib.hjk();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30,4,0.8,0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:-29.9,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(127));

	// p2.png
	this.instance_3 = new lib.dfgdfg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-26,0.8,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,x:-30,y:-24,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:-60,y:-26,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(191));

	// p1.png
	this.instance_4 = new lib.ggggg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(30,2,0.8,0.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:4,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:-30,y:2,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(255));

	// Слой 2
	this.instance_5 = new lib.dfgdfg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-30,-24);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(326));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-121,300,250);


(lib.hhhhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p3.png
	this.instance = new lib.ghj();
	this.instance.parent = this;
	this.instance.setTransform(50,6,0.8,0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:-0.5,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:-30,y:-9,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(64));

	// p4
	this.instance_1 = new lib.eeee();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32,-4,0.8,0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(257).to({_off:false},0).to({scaleX:1,scaleY:1,x:2,y:-2,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:-28,y:-4,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_2 = new lib.hjk();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30,4,0.8,0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(130).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:-29.9,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(127));

	// p2.png
	this.instance_3 = new lib.dfgdfg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-26,0.8,0.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,x:-30,y:-24,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:-60,y:-26,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(191));

	// p1.png
	this.instance_4 = new lib.ggggg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(30,2,0.8,0.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,x:0,y:4,alpha:1},8,cjs.Ease.get(1)).wait(52).to({scaleX:0.8,scaleY:0.8,x:-30,y:2,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(255));

	// Слой 2
	this.instance_5 = new lib.dfgdfg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-30,-24);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(326));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-121,300,250);


(lib.hhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gghghg();
	this.instance.parent = this;
	this.instance.setTransform(-0.6,-12.7,1,1,0,0,0,65,7.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAlBJIAAhHIhJAAIAABHIgPAAIAAiRIAPAAIAAA9IBJAAIAAg9IAPAAIAACRg");
	this.shape.setTransform(84,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("Ag2A3QgWgXgBggQAAgUALgRQAKgTASgKQASgKAUAAQAhAAAWAWQAWAXAAAfQAAAhgWAVQgWAXggAAQghAAgWgWgAgeg1QgPAJgIANQgIAOAAARQAAAbASASQASASAZAAQAQAAAPgJQAPgIAIgOQAIgOAAgSQAAgRgIgOQgIgNgPgJQgPgJgQAAQgPAAgPAJg");
	this.shape_1.setTransform(68.2,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgGBJIAAgqIgQAAQgRAAgLgDQgLgDgIgKQgHgKgBgOQAAgTAOgNQAMgNAhABIAMAAIAAgTIAOAAIAAATIAKAAQAigBANANQANANAAATQAAAPgMANQgLAMgfAAIgQAAIAAAqgAAIASIAXAAQAOAAAJgJQAJgIgBgLQAAgNgJgJQgKgHgTgBIgQAAgAgzggQgLAIAAAOQAAAKAIAJQAKAJAPAAIAXAAIAAg6IgRAAQgSAAgKAIg");
	this.shape_2.setTransform(50.4,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AgHBJIAAiDIggAAIAAgOIBPAAIAAAOIghAAIAACDg");
	this.shape_3.setTransform(37.1,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AgtBJIAAiRIAeAAQAXgBAKADQAMADAIAJQAIAKAAAPQAAAPgIAJQgHAJgOADQgKACgbAAIgKAAIAABEgAgegIIAZAAQAMAAAJgCQAGgEAFgFQAEgHAAgHQAAgHgEgGQgDgGgIgDQgHgDgNAAIgaAAg");
	this.shape_4.setTransform(27,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AA3BJIgXgwIg+AAIgXAwIgRAAIBGiRIACAAIBFCRgAgYALIAyAAIgag0g");
	this.shape_5.setTransform(13.1,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("ABFBJIgPhoIg0BoIgDAAIg0hpIgPBpIgOAAIAViRIADAAIA6B3IA7h3IADAAIAVCRg");
	this.shape_6.setTransform(-3.9,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("Ag0A0QgTgXAAgdQAAggAXgWQAXgWAhAAQAVAAAQAIQARAIAKAPIgMAJQgKgNgNgGQgNgGgQgBQgSABgOAIQgOAIgJAOQgIAPAAAQQAAAcASARQASASAcABQAeAAAVgZIAMAJQgKANgSAJQgPAHgVAAQgmAAgWgZg");
	this.shape_7.setTransform(-21.6,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AgaBHQgLgHgLgQIAMgHQAJAPAKAFQAJADAIAAQAOABAKgJQAJgIABgPQAAgIgEgHQgCgFgIgEQgGgFgFgBIgRgBIgCAAIAAgLIAEAAQAggBAAgaQAAgMgIgHQgIgIgKABQgOAAgNANIgKgJQAPgSAWAAQASAAAMALQAMAKAAARQAAAWgXALQAeAIAAAeQAAAUgNAMQgOAMgWAAQgPAAgLgGg");
	this.shape_8.setTransform(-41.5,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AgpBJIAAiRIBTAAIAAAOIhFAAIAAAuIBEAAIAAANIhEAAIAAA6IBEAAIAAAOg");
	this.shape_9.setTransform(-52.4,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AgtBJIAAiRIAdAAQAYgBAKADQAMADAIAJQAIALAAAOQAAAPgIAJQgHAJgOADQgJACgbAAIgLAAIAABEgAgegIIAYAAQAOAAAIgCQAGgEAFgFQADgGAAgIQAAgIgDgFQgDgGgIgDQgGgDgPAAIgZAAg");
	this.shape_10.setTransform(-64.1,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AgpBJIAAiRIBTAAIAAAOIhEAAIAAAuIBDAAIAAANIhDAAIAAA6IBDAAIAAAOg");
	this.shape_11.setTransform(-75.5,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AAeBJIAAhFIgKAAQgTAAgNgCQgJgBgJgGQgIgGgDgIQgDgJAAgPIAAgdIAPAAIAAAdQAAATAHAHQAIAIAQAAIAcAAIAAg/IAPAAIAACRg");
	this.shape_12.setTransform(-87.7,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hhh, new cjs.Rectangle(-92.2,-20.2,181.5,39.6), null);


(lib.fghhh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009FE3").s().p("Av9CSQhKhDArhjQAnhaB6gzQCIg5DcABQAxAAAtAFQAYADAhAFIAXAFIggA4QhGgTg5AAQhvAAhcAhQh7AsgTBYQgLA0AmAvQAxA8BrgFQAhgCBBgWQBPgbAugkIBwhiIAGgFIAQgIQAOgGASgBIB3AAIAmCmIBMikICEAAIBMB+IA4h+IB5AAIhqDnIh8AAIhPiFIg8CFIhMAAIAAABIiPAAIgFgpIiDAAIgrAmIhVAAQhiAkiCAAQi6AAhQhJgAldBiIBMgCIgHhAgAKtDOIBNhMIhNiwIB3AAIAhBeIBhhgICHABIjqDpQgLAMgIADIgSAEIgLABgAG+C5IjDAAIBqjnIDDAAQBeAAAiAsQAbAkgVAuQgTArgyAbQhBAjhnAAIgDAAgAGYB/IAiAAQAoAAAfgJQAygQAJglQAIgggfgNQgUgJgkAAIgiAAg");
	this.shape.setTransform(0,-9.3,0.549,0.549);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#393938").s().p("AgFAiIADgcIgYAQIgGgLIAbgLIgbgLIAGgLIAYARIgDgcIALAAIgDAcIAXgRIAHALIgbALIAbALIgHALIgXgQIADAcg");
	this.shape_1.setTransform(33.7,10.4,0.483,0.484);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-2.5,13.9,0.176,0.176,0,0,0,200.2,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fghhh, new cjs.Rectangle(-58.6,-21.3,117.3,42.7), null);


(lib.fefdfdf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// i3.png
	this.instance = new lib.hyjkhj();
	this.instance.parent = this;
	this.instance.setTransform(87.9,5.6,0.9,0.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(194).to({_off:false},0).to({x:69.9,y:6.5,alpha:1},8,cjs.Ease.get(1)).wait(52).to({y:5.6},0).to({x:51.9,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(62));

	// i2.png
	this.instance_1 = new lib.ghjgh("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.4,2.9,0.81,0.81,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130).to({_off:false},0).to({x:93.2,alpha:1},8,cjs.Ease.get(0.96)).wait(52).to({startPosition:0},0).to({x:77,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(126));

	// i1.png
	this.instance_2 = new lib.ghjghj("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.3,9.6,0.693,0.693,0,0,0,0.2,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({x:82.5,alpha:1},8,cjs.Ease.get(1)).wait(52).to({startPosition:0},0).to({x:68.6,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(190));

	// i0.png
	this.instance_3 = new lib.ghjghjhjj("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(88.1,5,0.873,0.873,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:70.6,alpha:1},8,cjs.Ease.get(1)).wait(52).to({startPosition:0},0).to({x:53.2,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(254));

	// t4.png
	this.instance_4 = new lib.jlkjl();
	this.instance_4.parent = this;
	this.instance_4.setTransform(18.1,2.5,0.9,0.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(256).to({_off:false},0).to({x:0.1,alpha:1},8,cjs.Ease.get(1)).wait(52).to({x:-17.9,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// t3.png
	this.instance_5 = new lib.hkhjk();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9.8,5.6,0.9,0.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(192).to({_off:false},0).to({x:-27.8,alpha:1},8,cjs.Ease.get(1)).wait(52).to({x:-45.8,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(64));

	// t2.png
	this.instance_6 = new lib.uuiui();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-25.5,1.4,0.9,0.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(128).to({_off:false},0).to({x:-43.5,alpha:1},8,cjs.Ease.get(1)).wait(52).to({x:-61.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(128));

	// t1.png
	this.instance_7 = new lib.hhh();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-30.1,5.2,0.855,0.855,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({_off:false},0).to({x:-47.2,alpha:1},8,cjs.Ease.get(1)).wait(52).to({x:-64.3,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(192));

	// t0.png
	this.instance_8 = new lib.uu8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-25.5,4.5,0.873,0.873);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-42.9,alpha:1},8,cjs.Ease.get(1)).wait(52).to({x:-60.4,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(256));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-12.9,123.9,34.9);


// stage content:
(lib._100pcx240 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		 
		stage.addEventListener("resize", res);
		
		var bg0 = this.bg0;
		var bg1 = this.bg1;
		var bg2 = this.bg2;
		var legal = this.legal;
		var logo = this.logo;
		var pic = this.pic;
		var pic2 = this.pic2;
		var text = this.text;
		var addr = this.addr;
		var addr2 = this.addr2;
		
		
		function res() {
			
			var wdt = stage.canvas.width;
			var hgt = stage.canvas.height;
			
			legal.x = wdt-70;
			
			
			
			bg0.x = 0;
			bg0.scaleX = wdt/300;
			
			bg1.x = 0;
			bg1.scaleX = wdt/300;
			
		
			if(wdt<630){
				
				addr.x = 4;
				addr.visible = true;
				addr2.visible = false;
				
				logo.x = wdt/2;
				logo.y = 205;
				logo.scaleX = 0.8;
				logo.scaleY = 0.8;
				
				text.x = wdt/2;
				text.y = 25;
				text.scaleX = 1;
				text.scaleY = 1;
				
				pic2.x = wdt/2;
				pic2.y = 120;
				pic2.scaleX = 1;
				pic2.scaleY = 1;
				
				bg1.visible = true;
				bg2.visible = false;
				
				pic2.visible = true;
				pic.visible = false;
				
				
				
				
				
			} else if(wdt<1040){
				
				addr2.x = wdt/2;
				addr2.visible = true;
				addr.visible = false;
				
				
				logo.x = wdt*0.75;
				logo.y = 165;
				logo.scaleX = 1.4;
				logo.scaleY = 1.4;
				
				text.x = wdt*0.75;
				text.y = 70;
				text.scaleX = 1;
				text.scaleY = 1;
				
				pic.x = wdt*0.25;
				pic.y = 115;
				pic.scaleX = 1;
				pic.scaleY = 1;
				
				bg1.visible = true;
				bg2.visible = false;
				
				pic.visible = true;
				pic2.visible = false;
				
				
			} else {
				
				addr2.x = 4;
				addr2.visible = true;
				addr.visible = false;
				
				logo.x = wdt*0.8;
				logo.y = 120;
				logo.scaleX = 1.4;
				logo.scaleY = 1.4;
				
				text.x = wdt*0.18;
				text.y = 120;
				text.scaleX = 1.2;
				text.scaleY = 1.2;
				
				pic.x = wdt/2;
				pic.y = 115;
				pic.scaleX = 1;
				pic.scaleY = 1;
				
				bg2.visible = true;
				bg1.visible = false;
				
				pic.visible = true;
				pic2.visible = false;
			}
			
		
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(326));

	// Слой 1
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(155,227.3);

	this.addr = new lib.jjjj();
	this.addr.parent = this;
	this.addr.setTransform(52,212.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.addr},{t:this.addr2}]}).wait(326));

	// legal
	this.legal = new lib.yyyyt();
	this.legal.parent = this;
	this.legal.setTransform(227.7,239.1,1.2,1.2,90);

	this.timeline.addTween(cjs.Tween.get(this.legal).wait(326));

	// text
	this.text = new lib.fefdfdf();
	this.text.parent = this;
	this.text.setTransform(179.1,20.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(326));

	// pic2
	this.pic2 = new lib.hhhhh2();
	this.pic2.parent = this;
	this.pic2.setTransform(150.5,117);

	this.timeline.addTween(cjs.Tween.get(this.pic2).wait(326));

	// pic
	this.pic = new lib.hhhhh();
	this.pic.parent = this;
	this.pic.setTransform(151.1,117.1);

	this.timeline.addTween(cjs.Tween.get(this.pic).wait(326));

	// logo
	this.logo = new lib.fghhh();
	this.logo.parent = this;
	this.logo.setTransform(150,212.4);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(326));

	// bg2
	this.bg2 = new lib.mbnmbnm();
	this.bg2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg2).wait(326));

	// bg1
	this.bg1 = new lib.bg();
	this.bg1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg1).wait(326));

	// bg0
	this.bg0 = new lib.fghgh();
	this.bg0.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bg0).wait(326));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,116,405.4,254);
// library properties:
lib.properties = {
	width: 400,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/100pcx240_atlas_P_.png", id:"100pcx240_atlas_P_"},
		{src:"images/100pcx240_atlas_NP_.jpg", id:"100pcx240_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;