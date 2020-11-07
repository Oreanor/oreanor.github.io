(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"240x400_atlas_P_", frames: [[0,0,317,121],[319,0,168,172]]},
		{name:"240x400_atlas_NP_", frames: [[242,200,240,197],[242,0,240,198],[0,0,240,200]]}
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



(lib.Image_3 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p1 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.p2 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(1);
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


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("AAVAvIAAg8IgpA8IgWAAIAAhdIAWAAIAAA8IApg8IAWAAIAABdg");
	this.shape.setTransform(21.4,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5F5F5").s().p("AARAvIAAgnIgiAAIAAAnIgWAAIAAhdIAWAAIAAAjIAiAAIAAgjIAXAAIAABdg");
	this.shape_1.setTransform(11.2,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5F5F5").s().p("AgZAoQgJgJABgQIAWAAQAAAHAEADQADAEAFAAQAFAAADgDQACgCABgFQAAgFgDgCQgCgDgFAAIgEAAIAAgSIADAAQAFAAACgDQADgCAAgFQAAgEgDgCQgCgDgFAAQgDAAgDADQgDADAAAEIgXAAQABgNAIgJQAJgJAOAAQAOAAAJAHQAJAHAAAMQAAAIgEAFQgFAFgGACQAHACAFAGQAFAGAAAIQAAAPgKAIQgJAIgQAAQgQAAgJgKg");
	this.shape_2.setTransform(2.4,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F5").s().p("AAVAvIAAg8IgpA8IgXAAIAAhdIAXAAIAAA8IApg8IAWAAIAABdg");
	this.shape_3.setTransform(-6.8,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F5F5").s().p("AAqAvIgfgtIAAAtIgWAAIAAgtIgeAtIgaAAIAigwIghgtIAbAAIAcArIAAgrIAWAAIAAArIAdgrIAbAAIghAtIAiAwg");
	this.shape_4.setTransform(-19.2,20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5F5F5").s().p("AgiAkQgPgPAAgVQAAgTAPgPQAOgPAUAAQAWAAAOAPQAOAPAAATQAAAVgOAPQgPAOgVAAQgUAAgOgOgAgTgTQgIAIABALQgBAMAIAIQAIAJALAAQAMAAAIgIQAHgJABgMQgBgLgHgIQgIgJgMAAQgLAAgIAJg");
	this.shape_5.setTransform(71.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F5F5").s().p("AgjAvIAAhdIApAAQALAAAIAHQAHAHABALQAAAGgFAFQgDAFgHADQAIACAFAFQAFAGAAAIQAAAMgJAIQgIAIgPAAgAgMAcIAPAAQAGAAACgDQADgDAAgEQAAgEgDgDQgDgCgFAAIgPAAgAgMgKIANAAQAEAAACgCQACgCABgEQAAgEgCgCQgDgDgEAAIgNAAg");
	this.shape_6.setTransform(62.1,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F5F5").s().p("AgKAvIAAhJIgXAAIAAgUIBDAAIAAAUIgXAAIAABJg");
	this.shape_7.setTransform(53.9,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("AghAkQgPgOAAgWQAAgUAOgPQAPgOAVAAQARAAANAJQANAKAEAPIgZAAQgEgGgFgDQgHgEgGAAQgNAAgHAJQgIAIAAALQAAANAIAIQAIAIAMAAQAHAAAGgDQAGgEADgFIAZAAQgFAPgMAJQgMAJgRAAQgWAAgOgOg");
	this.shape_8.setTransform(44.9,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F5F5").s().p("AgiAkQgOgPAAgUQAAgUAOgPQAOgPAVAAQAVAAANAOQAOAOABAVIgBAKIhJAAQACAJAHAFQAFAFAKAAQAIAAAEgCQAFgDADgEIAaAAQgFAOgNAIQgNAIgPAAQgTAAgPgOgAgPgXQgGAFgEAJIAzAAQgCgIgIgGQgGgFgJAAQgIAAgIAFg");
	this.shape_9.setTransform(34.1,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5F5F5").s().p("AAOAvIAAggIgOAAQgSAAgJgHQgJgHABgUIAAgbIAWAAIAAAbQAAAKAEACQAEADAFAAIAOAAIAAgqIAWAAIAABdg");
	this.shape_10.setTransform(24.1,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("AgjAlQgNgOAAgWQAAgVANgPQAOgOATAAQAJAAAIAEQAIAEAFAIIABAAIAAgNIAUAAIAABdIgUAAIAAgNIgBAAQgGAJgIADQgJAEgHAAQgTAAgOgNgAgSgTQgIAIAAAMQAAAMAIAIQAIAIALAAQAMAAAIgIQAHgIAAgNQAAgLgHgJQgIgIgMAAQgLAAgIAJg");
	this.shape_11.setTransform(13.9,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5F5F5").s().p("AAOAvIghgtIAAAtIgWAAIAAhdIAWAAIAAArIAhgrIAbAAIgmAsIAnAxg");
	this.shape_12.setTransform(3.9,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5F5F5").s().p("AARAvIAAgkIgbAkIgcAAIAcghQgLgBgHgJQgHgHAAgMQAAgNAJgJQAJgIAQgBIAoAAIAABdgAgJgXQgDAEAAAFQAAAFADADQADAEAGAAIARAAIAAgYIgRAAQgFAAgEADg");
	this.shape_13.setTransform(-10.1,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F5F5F5").s().p("AgjAlQgOgOABgWQgBgVAOgPQAPgOASAAQAJAAAJAEQAIAEAEAIIAAgNIAWAAIAABdIgWAAIAAgNQgFAIgJAEQgJAEgHAAQgTAAgOgNgAgSgTQgIAIAAAMQAAAMAIAIQAHAIAMAAQAMAAAIgIQAHgIAAgNQAAgLgHgJQgIgIgMAAQgMAAgHAJg");
	this.shape_14.setTransform(-20.3,1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5F5F5").s().p("Ag+AvIAAhdIAYAAIAABJIAcAAIAAhJIAWAAIAABJIAcAAIAAhJIAWAAIAABdg");
	this.shape_15.setTransform(-32.8,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5F5F5").s().p("AAOAvIAAggIgNAAQgTAAgIgHQgKgIAAgTIAAgbIAXAAIAAAbQAAAKAEACQAEADAGAAIANAAIAAgqIAXAAIAABdg");
	this.shape_16.setTransform(-44.5,1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F5F5F5").s().p("AgeA/IASgpIgjhUIAaAAIAVA8IAWg8IAaAAIg1B9g");
	this.shape_17.setTransform(-53.8,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F5F5F5").s().p("AAXAvIgXg+IgWA+IgaAAIAnhdIATAAIAnBdg");
	this.shape_18.setTransform(-63.6,1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F5F5F5").s().p("AgeA/IASgpIgjhUIAaAAIAVA8IAWg8IAaAAIg1B9g");
	this.shape_19.setTransform(-71.7,3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F5F5F5").s().p("AgKAMQAEAAADgDQACgCAAgFIAAgCIgKAAIAAgWIAXAAIAAAWQgBAGgBAEIgFAHQgDADgDACIgJABg");
	this.shape_20.setTransform(67.2,-12.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F5F5F5").s().p("AARAvIAAgkIgbAkIgcAAIAcghQgLgBgHgJQgHgHAAgMQAAgNAJgJQAJgIAQgBIAoAAIAABdgAgJgXQgDAEAAAFQAAAFADADQADAEAGAAIARAAIAAgYIgRAAQgFAAgEADg");
	this.shape_21.setTransform(60,-17.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F5F5F5").s().p("AAiAvIAAhEIgZBEIgRAAIgahEIAABEIgWAAIAAhdIAhAAIAXBCIAYhCIAhAAIAABdg");
	this.shape_22.setTransform(49,-17.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F5F5F5").s().p("AgiAkQgOgPAAgUQAAgUAOgPQAOgPAVAAQAVAAANAOQAOAOABAVIgBAKIhJAAQADAJAGAFQAGAFAJAAQAHAAAFgCQAFgDAEgEIAZAAQgFAOgNAIQgNAIgPAAQgTAAgPgOgAgOgXQgIAFgCAJIAxAAQgBgIgIgGQgGgFgJAAQgIAAgHAFg");
	this.shape_23.setTransform(37,-17.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5F5F5").s().p("AgwBAIAAh9IAVAAIAAANQAFgIAHgDQAIgFAJABQATgBAPAOQANAPAAAWQAAAUgMAOQgOAPgVAAQgHAAgIgDQgIgEgEgHIgBAAIAAAqgAgTgiQgIAIAAANQAAANAIAHQAHAIAMAAQALgBAIgHQAIgIAAgNQAAgMgIgIQgIgIgLAAQgMAAgHAIg");
	this.shape_24.setTransform(26.1,-16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F5F5F5").s().p("AgjAvIAAhdIApAAQALAAAIAHQAIAHAAALQgBAHgEAEQgDAFgGADQAHACAFAFQAFAGAAAIQAAAMgIAIQgIAIgQAAgAgNAcIAQAAQAGAAACgDQADgDAAgEQAAgEgDgDQgEgCgEAAIgQAAgAgNgKIAOAAQAFAAACgCQADgDgBgDQABgEgDgCQgDgDgEAAIgOAAg");
	this.shape_25.setTransform(16.3,-17.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F5F5F5").s().p("AARAvIAAgkIgbAkIgcAAIAcghQgLgBgHgJQgHgHAAgMQAAgNAJgJQAJgIAQgBIAoAAIAABdgAgJgXQgDAEAAAFQAAAFADADQADAEAGAAIARAAIAAgYIgRAAQgFAAgEADg");
	this.shape_26.setTransform(3,-17.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F5F5F5").s().p("AAiAvIAAhEIgZBEIgRAAIgahEIAABEIgWAAIAAhdIAhAAIAXBCIAYhCIAhAAIAABdg");
	this.shape_27.setTransform(-8,-17.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F5F5F5").s().p("AgjAkQgOgPAAgVQAAgTAOgPQAPgPAUAAQAVAAAPAPQAOAPAAATQAAAVgOAPQgPAOgVAAQgUAAgPgOgAgTgTQgHAIgBALQABAMAHAIQAIAJALAAQAMAAAHgIQAJgJgBgMQABgLgJgIQgHgJgMAAQgLAAgIAJg");
	this.shape_28.setTransform(-20,-17.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F5F5F5").s().p("AASAvIAAgnIgiAAIAAAnIgXAAIAAhdIAXAAIAAAjIAiAAIAAgjIAWAAIAABdg");
	this.shape_29.setTransform(-30.4,-17.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F5F5F5").s().p("AgiAkQgPgPAAgVQAAgTAPgPQAOgPAUAAQAWAAANAPQAPAOAAAUQAAAVgPAPQgOAOgVAAQgUAAgOgOgAgTgTQgHAJgBAKQAAAMAIAIQAIAJALAAQAMAAAIgIQAIgJAAgMQAAgLgIgIQgIgJgMAAQgLAAgIAJg");
	this.shape_30.setTransform(-40.8,-17.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F5F5F5").s().p("AAOAvIghgtIAAAtIgWAAIAAhdIAWAAIAAArIAhgrIAbAAIgmAsIAoAxg");
	this.shape_31.setTransform(-50.9,-17.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F5F5F5").s().p("AgmA3QgOgKgIgRIAbAAQAFAHAJAEQAJAEAJAAQAOAAALgJQALgIADgQIg3AAIAAgUIA3AAQgEgQgLgIQgLgIgNAAQgJAAgKAEQgHAEgHAHIgaAAQAGgRAQgLQAQgKAUABQAbAAASASQASATAAAbQAAAcgSASQgTAUgbgBQgTAAgQgKg");
	this.shape_32.setTransform(-62.7,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-76.4,-25.5,152.9,51.1), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("AASAvIAAgnIgiAAIAAAnIgXAAIAAhdIAXAAIAAAiIAiAAIAAgiIAWAAIAABdg");
	this.shape.setTransform(25.2,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5F5F5").s().p("AgiAkQgOgOAAgVQAAgUAOgPQAOgPAVAAQAVAAANAOQAOAPAAAUIAAAKIhJAAQACAIAHAGQAHAFAIAAQAHAAAFgDQAFgCAEgEIAZAAQgGAOgMAIQgMAIgQAAQgUAAgOgOgAgPgXQgHAGgCAIIAyAAQgDgJgHgFQgGgFgJAAQgIAAgIAFg");
	this.shape_1.setTransform(46.7,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5F5F5").s().p("AAVAvIAAg8IgpA8IgXAAIAAhdIAXAAIAAA8IApg8IAXAAIAABdg");
	this.shape_2.setTransform(36,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F5").s().p("AgiAkQgOgPAAgUQAAgUAOgPQAPgPAUAAQAVAAAOAOQANAPAAAUIAAAGIAAAEIhJAAQADAJAGAFQAHAFAIAAQAHAAAFgDQAGgCADgEIAZAAQgGAOgMAIQgMAIgPAAQgUAAgPgOgAgOgXQgHAFgDAJIAyAAQgCgIgHgGQgHgFgJAAQgIAAgHAFg");
	this.shape_3.setTransform(14.2,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F5F5").s().p("AAXAvIgXg+IgXA+IgZAAIAnhdIATAAIAnBdg");
	this.shape_4.setTransform(3.9,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5F5F5").s().p("AgjAvIAAhdIAoAAQAMAAAIAHQAIAHAAAKQgBAJgDADQgEAGgGACQAIACAEAFQAFAHAAAHQAAAMgIAIQgIAIgQAAgAgNAcIAQAAQAFAAADgDQADgDAAgDQAAgFgDgCQgDgDgFAAIgQAAgAgNgKIAPAAQAEAAACgCQADgDAAgDQAAgEgDgCQgCgCgEAAIgPAAg");
	this.shape_5.setTransform(-5,9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F5F5").s().p("AgjAkQgNgNAAgWQAAgVANgPQAOgOAUAAQAIAAAIAEQAIAEAFAIIABAAIAAgNIAUAAIAABdIgUAAIAAgNIgBAAQgFAHgJAFQgHADgJABQgTAAgOgOgAgSgTQgIAJAAALQAAAMAIAIQAIAIALAAQAMAAAIgIQAHgIAAgNQAAgLgHgJQgIgIgMAAQgMAAgHAJg");
	this.shape_6.setTransform(-15.4,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F5F5").s().p("AgwBAIAAh8IAVAAIAAAMIAAAAQAEgHAIgEQAJgEAIAAQAUAAANAOQAPAOAAAWQAAATgOAPQgMAPgWAAQgHAAgHgDQgIgDgGgHIAAApgAgTgiQgIAJAAAMQAAANAIAHQAHAIAMAAQALAAAHgJQAJgGgBgNQAAgMgHgJQgIgIgLAAQgMAAgHAIg");
	this.shape_7.setTransform(-26.1,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("AARAvIAAhJIgiAAIAABJIgWAAIAAhdIBPAAIAABdg");
	this.shape_8.setTransform(-36.9,9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F5F5").s().p("AgeA/IASgoIgjhVIAaAAIAVA8IAWg8IAaAAIg1B9g");
	this.shape_9.setTransform(-46.8,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5F5F5").s().p("AgiAkQgOgOAAgVQAAgUAOgPQAOgPAVAAQAVAAANAOQAOAPAAAUIAAAKIhJAAQACAIAHAGQAHAFAIAAQAHAAAFgDQAFgCAEgEIAZAAQgGAOgMAIQgMAIgQAAQgUAAgOgOgAgPgXQgHAGgCAIIAyAAQgDgJgHgFQgGgFgJAAQgIAAgIAFg");
	this.shape_10.setTransform(63.3,-9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("AgjAkQgOgPAAgVQAAgUAOgOQAPgPAUAAQAWAAAOAPQAOAOAAAUQAAAVgOAPQgPAOgVAAQgUAAgPgOgAgTgTQgIAIABALQgBAMAIAIQAIAJALAAQAMAAAIgJQAHgIAAgMQAAgLgHgIQgIgJgMAAQgMAAgHAJg");
	this.shape_11.setTransform(52.4,-9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5F5F5").s().p("AARAvIAAgnIgiAAIAAAnIgWAAIAAhdIAWAAIAAAiIAiAAIAAgiIAXAAIAABdg");
	this.shape_12.setTransform(42,-9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5F5F5").s().p("AASAvIAAgnIgiAAIAAAnIgXAAIAAhdIAXAAIAAAiIAiAAIAAgiIAWAAIAABdg");
	this.shape_13.setTransform(32.2,-9.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F5F5F5").s().p("AgjAkQgOgPAAgVQAAgUAOgOQAPgPAUAAQAWAAAOAPQAOAOAAAUQAAAVgOAPQgPAOgVAAQgUAAgPgOgAgTgTQgIAIABALQgBAMAIAIQAIAJALAAQAMAAAIgJQAHgIAAgMQAAgLgHgIQgIgJgMAAQgMAAgHAJg");
	this.shape_14.setTransform(21.8,-9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5F5F5").s().p("AAVAvIAAg8IgpA8IgXAAIAAhdIAXAAIAAA8IApg8IAWAAIAABdg");
	this.shape_15.setTransform(11.1,-9.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5F5F5").s().p("AAZA7IAAgYIhHAAIAAhdIAWAAIAABJIAiAAIAAhJIAXAAIAABJIAOAAIAAAsg");
	this.shape_16.setTransform(0.9,-8.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F5F5F5").s().p("AASAvIAAgnIgiAAIAAAnIgXAAIAAhdIAXAAIAAAiIAiAAIAAgiIAWAAIAABdg");
	this.shape_17.setTransform(-9.7,-9.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F5F5F5").s().p("AgjAkQgOgOABgVQAAgVANgPQAPgOASAAQAJAAAIAEQAJAEAEAIIAAgNIAWAAIAABdIgWAAIAAgNQgEAHgKAFQgHADgJABQgTAAgOgOgAgSgTQgIAIAAAMQgBAMAJAIQAHAIAMAAQAMAAAIgIQAHgIAAgNQAAgLgHgJQgIgIgMAAQgMAAgHAJg");
	this.shape_18.setTransform(-20.4,-9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F5F5F5").s().p("AgKAvIAAhJIgXAAIAAgUIBDAAIAAAUIgXAAIAABJg");
	this.shape_19.setTransform(-29.4,-9.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F5F5F5").s().p("AgiAkQgPgOAAgWQAAgVAPgOQAOgOAWAAQARAAANAJQAMAJAFAQIgZAAQgDgGgHgDQgEgEgJAAQgLAAgIAIQgHAJAAALQAAAMAHAIQAHAJAMAAQAIAAAFgDQAHgDADgHIAZAAQgFAQgNAJQgMAJgRAAQgUAAgQgOg");
	this.shape_20.setTransform(-38.4,-9.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F5F5F5").s().p("AAVAvIAAg8IgpA8IgXAAIAAhdIAXAAIAAA8IApg8IAXAAIAABdg");
	this.shape_21.setTransform(-49.1,-9.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F5F5F5").s().p("AAuBLIAAgYIhaAAIAAAYIgYAAIAAgvIANAAIAuhmIATAAIAvBmIALAAIAAAvgAgeAcIA9AAIgfhGg");
	this.shape_22.setTransform(-61.3,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-68.2,-17.3,136.4,34.7), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("AAfAvIAAhdIAXAAIAABdgAg1AvIAAhdIAXAAIAAAhIAUAAQANAAAJAIQAJAHAAAPQAAAOgJAIQgJAIgNAAgAgeAbIASAAQAGAAACgCQADgEAAgEQAAgFgDgDQgDgDgFAAIgSAAg");
	this.shape.setTransform(26,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5F5F5").s().p("AAiA7IAAgYIhDAAIAAAYIgWAAIAAgsIALAAIAihJIAUAAIAjBJIALAAIAAAsgAgSAPIAlAAIgTgrg");
	this.shape_1.setTransform(14,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5F5F5").s().p("AgeA/IASgoIgjhVIAaAAIAVA8IAWg8IAaAAIg1B9g");
	this.shape_2.setTransform(4.5,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F5").s().p("AghAkQgPgOAAgWQAAgUAOgPQAPgOAVAAQASAAAMAJQANAJAEAQIgZAAQgDgGgGgEQgFgCgIAAQgMgBgIAJQgIAIAAALQAAAMAIAIQAIAJAMAAQAHAAAGgDQAFgDAEgGIAZAAQgFAOgMAKQgMAJgRAAQgVAAgPgOg");
	this.shape_3.setTransform(-5.9,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F5F5").s().p("AgjAkQgOgPAAgVQAAgTAOgQQAPgOAUAAQAVAAAOAOQAPAPAAAUQAAAWgPAOQgOAOgVAAQgVAAgOgOgAgTgTQgHAJAAAKQAAAMAHAIQAJAJAKAAQAMAAAIgJQAHgHAAgNQAAgKgHgJQgIgIgMAAQgLAAgIAIg");
	this.shape_4.setTransform(-16.7,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5F5F5").s().p("AARAvIAAhJIgiAAIAABJIgWAAIAAhdIBPAAIAABdg");
	this.shape_5.setTransform(-27.1,9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F5F5").s().p("AgjAvIAAhdIAoAAQAMAAAIAHQAHAHAAAKQAAAHgDAGQgEAFgHACQAJACAEAFQAFAGAAAIQAAALgJAJQgIAIgPAAgAgMAcIAPAAQAFAAADgDQADgCAAgFQAAgEgDgDQgCgBgGgBIgPAAgAgMgJIANAAQAEAAACgDQADgCABgEQAAgDgDgEQgCgBgFAAIgNAAg");
	this.shape_6.setTransform(72.6,-9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F5F5").s().p("AgjAkQgOgPAAgVQAAgTAOgPQAPgPAUAAQAVAAAPAPQAOAPAAATQAAAWgOAOQgOAOgWAAQgVAAgOgOgAgTgTQgHAIAAALQAAANAHAHQAIAJALAAQAMAAAIgJQAIgHgBgNQABgLgIgIQgHgJgNABQgLgBgIAJg");
	this.shape_7.setTransform(62.6,-9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("AgLAvIAAhJIgWAAIAAgUIBDAAIAAAUIgWAAIAABJg");
	this.shape_8.setTransform(53.6,-9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F5F5").s().p("AAOAvIghgtIAAAtIgWAAIAAhdIAWAAIAAArIAhgrIAaAAIglAsIAnAxg");
	this.shape_9.setTransform(45.3,-9.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5F5F5").s().p("AgiAkQgOgPAAgUQAAgTAOgQQAPgPAUAAQAWAAANAPQANAOAAAUIAAAKIhJAAQADAJAGAFQAHAFAIAAQAGAAAGgCQAGgDADgEIAZAAQgGAOgMAIQgLAIgQAAQgVAAgOgOgAgOgXQgHAGgDAIIAyAAQgCgJgHgFQgHgEgJAAQgJAAgGAEg");
	this.shape_10.setTransform(34.7,-9.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("AAXAvIgXg+IgWA+IgaAAIAnhdIATAAIAnBdg");
	this.shape_11.setTransform(24.3,-9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5F5F5").s().p("AARAvIAAhJIgiAAIAABJIgWAAIAAhdIBPAAIAABdg");
	this.shape_12.setTransform(14.5,-9.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5F5F5").s().p("AAiAvIAAhEIgYBEIgTAAIgYhEIAABEIgXAAIAAhdIAhAAIAXBBIAYhBIAhAAIAABdg");
	this.shape_13.setTransform(2.9,-9.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F5F5F5").s().p("AgjAkQgOgOAAgWQAAgTAOgPQAPgPAUAAQAVAAAPAPQAOAPAAATQAAAVgOAPQgOAOgWAAQgVAAgOgOgAgTgTQgIAIABALQgBANAIAHQAHAJAMAAQAMAAAIgJQAHgHAAgNQAAgLgHgIQgIgJgMABQgMgBgHAJg");
	this.shape_14.setTransform(-9.1,-9.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5F5F5").s().p("AAOAvIghgtIAAAtIgXAAIAAhdIAXAAIAAArIAhgrIAaAAIglAsIAoAxg");
	this.shape_15.setTransform(-19.3,-9.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5F5F5").s().p("AgeA0QgMgNAAgTQAAgJACgGQABgGAGgHIAjg3IAaAAIgcAqIADAAIADAAQAQAAAKALQALAMAAASQAAATgLANQgMAMgUAAQgTAAgLgMgAgOAFQgGAGAAAJQAAAKAGAHQAGAGAIAAQAJAAAGgGQAGgGAAgLQAAgKgGgFQgGgGgJAAQgKAAgEAGg");
	this.shape_16.setTransform(-33.2,-10.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F5F5F5").s().p("AAKA/IAAhdIgZAhIgRgNIAng0IAaAAIAAB9g");
	this.shape_17.setTransform(-43.3,-11.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F5F5F5").s().p("AgjAkQgOgOAAgWQAAgTAOgPQAPgPAUAAQAVAAAPAPQAOAPAAATQAAAVgOAPQgOAOgWAAQgVAAgOgOgAgTgTQgIAIABALQgBANAIAHQAHAJAMAAQAMAAAIgJQAHgHAAgNQAAgLgHgIQgIgJgMABQgMgBgHAJg");
	this.shape_18.setTransform(-56.8,-9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F5F5F5").s().p("AAtBLIAAgYIhZAAIAAAYIgYAAIAAgvIAMAAIAvhmIATAAIAvBmIAMAAIAAAvgAgeAcIA9AAIgfhGg");
	this.shape_19.setTransform(-69.3,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-76.1,-17.3,152.3,34.7), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F5").s().p("AARAvIAAgnIgiAAIAAAnIgWAAIAAhdIAWAAIAAAjIAiAAIAAgjIAXAAIAABdg");
	this.shape.setTransform(69.1,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5F5F5").s().p("AAVAvIAAg8IgpA8IgXAAIAAhdIAXAAIAAA8IApg8IAXAAIAABdg");
	this.shape_1.setTransform(58.9,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5F5F5").s().p("AAiAvIAAhEIgZBEIgRAAIgahEIAABEIgWAAIAAhdIAgAAIAYBCIAYhCIAhAAIAABdg");
	this.shape_2.setTransform(47,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F5").s().p("AgcBAIAcgrIgCABIgDAAQgQAAgLgLQgLgLAAgTQAAgTANgMQAMgNASAAQATAAAMANQAMANAAASQABAHgDAJQgDAIgGAJIghAygAgOgkQgGAHAAAJQAAAMAGAFQAGAEAIABQAIAAAHgGQAGgFAAgLQAAgJgGgHQgGgFgJAAQgJAAgFAFg");
	this.shape_3.setTransform(31.6,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F5F5").s().p("AgdA2QgMgLgBgSIAXAAQABAJAFAFQAFAFAIAAQAJAAAFgGQAGgGAAgIQAAgLgGgFQgFgFgNgBIgEAAIAAgUIAEAAQAHAAAEgDQAEgFAAgGQAAgEgDgEQgDgDgFAAQgEAAgDADQgDAEAAAEIgXAAQAAgOAKgJQAJgKAOABQAPgBAJAKQAKAIAAAQQAAAGgDAGQgCAGgGAFQAJADAGAIQAFAKAAALQAAASgNAMQgNALgRAAQgRAAgMgLg");
	this.shape_4.setTransform(21.9,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F5F5F5").s().p("AgjAlQgNgOAAgWQAAgVANgPQAOgOATAAQAJAAAIAEQAIAEAFAIIABAAIAAgNIAUAAIAABdIgUAAIAAgNIgBAAQgGAJgIADQgJAEgHAAQgTAAgOgNgAgSgTQgIAIAAAMQAAAMAIAIQAIAIALAAQAMAAAIgIQAHgIAAgNQAAgLgHgJQgIgIgMAAQgLAAgIAJg");
	this.shape_5.setTransform(7.5,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5F5F5").s().p("AgZAoQgIgIAAgRIAWAAQAAAGAEAEQADAEAFAAQAFAAADgDQADgDAAgEQAAgFgDgDQgCgCgFAAIgFAAIAAgSIAEAAQAEAAAEgDQACgCAAgFQAAgEgCgCQgEgDgDAAQgEAAgDADQgDACAAAFIgXAAQABgOAIgIQAJgJAOAAQAOAAAJAHQAJAHAAAMQAAAHgEAGQgEAFgHACQAHACAFAGQAFAGAAAIQgBAOgIAJQgLAIgOAAQgRAAgJgKg");
	this.shape_6.setTransform(-1.7,19.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F5F5").s().p("AAfAvIAAhdIAXAAIAABdgAg1AvIAAhdIAXAAIAAAhIAUAAQANAAAJAIQAJAHAAAOQAAAPgJAIQgJAIgNAAgAgeAbIASAAQAFAAADgDQADgDAAgFQAAgEgDgDQgDgDgFAAIgSAAg");
	this.shape_7.setTransform(-15.9,19.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("AAiA7IAAgYIhDAAIAAAYIgWAAIAAgrIALAAIAjhKIATAAIAjBKIALAAIAAArgAgSAQIAlAAIgTgrg");
	this.shape_8.setTransform(-28,20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5F5F5").s().p("AgeA/IASgpIgjhUIAaAAIAVA8IAWg8IAaAAIg1B9g");
	this.shape_9.setTransform(-37.5,20.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5F5F5").s().p("AgiAkQgOgOAAgWQAAgVAOgOQAPgOAVAAQARAAANAJQAMAJAFAQIgZAAQgEgHgFgCQgHgEgHAAQgMAAgHAJQgIAIAAALQAAANAIAIQAIAIALAAQAHAAAGgDQAGgDAEgHIAZAAQgGARgLAIQgMAJgRAAQgVAAgQgOg");
	this.shape_10.setTransform(-47.8,19.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("AgjAkQgOgPAAgVQAAgTAOgPQAOgPAVAAQAWAAANAPQAPAPAAATQAAAVgPAPQgOAOgVAAQgVAAgOgOgAgTgTQgIAIAAALQAAAMAIAIQAHAJAMAAQAMAAAIgJQAHgIAAgMQAAgLgHgIQgIgJgMAAQgMAAgHAJg");
	this.shape_11.setTransform(-58.6,19.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5F5F5").s().p("AASAvIAAhJIgjAAIAABJIgWAAIAAhdIBPAAIAABdg");
	this.shape_12.setTransform(-69,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5F5F5").s().p("AgjAlQgNgOAAgWQAAgVANgPQAOgOATAAQAJAAAIAEQAIAEAFAIIABAAIAAgNIAUAAIAABdIgUAAIAAgNIgBAAQgGAJgIADQgJAEgHAAQgTAAgOgNgAgSgTQgIAIAAAMQAAAMAIAIQAIAIALAAQAMAAAIgIQAHgIAAgNQAAgLgHgJQgIgIgMAAQgLAAgIAJg");
	this.shape_13.setTransform(64.9,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F5F5F5").s().p("AAOAvIghgtIAAAtIgXAAIAAhdIAXAAIAAArIAhgrIAbAAIgmAsIAoAxg");
	this.shape_14.setTransform(54.8,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5F5F5").s().p("Ag+AvIAAhdIAXAAIAABJIAdAAIAAhJIAVAAIAABJIAcAAIAAhJIAYAAIAABdg");
	this.shape_15.setTransform(42.6,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5F5F5").s().p("AgeA/IASgoIgjhVIAaAAIAVA8IAWg8IAaAAIg1B9g");
	this.shape_16.setTransform(30.4,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F5F5F5").s().p("AgiAkQgOgPAAgVQAAgVAOgOQAPgOAVAAQARAAANAJQANAJAEAQIgZAAQgEgHgFgCQgHgEgHAAQgMAAgHAJQgIAIAAALQAAANAIAIQAIAIALAAQAIAAAFgDQAGgDAEgHIAZAAQgGARgLAIQgMAJgRAAQgVAAgQgOg");
	this.shape_17.setTransform(20.1,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F5F5F5").s().p("AAVAvIAAg8IgpA8IgXAAIAAhdIAXAAIAAA8IApg8IAWAAIAABdg");
	this.shape_18.setTransform(5.4,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F5F5F5").s().p("AgjAlQgNgOAAgWQAAgVANgPQAOgOATAAQAJAAAIAEQAIAEAFAIIAAgNIAVAAIAABdIgVAAIAAgNQgGAIgIAEQgJAEgHAAQgTAAgOgNgAgSgTQgIAIAAAMQAAAMAIAIQAHAIAMAAQAMAAAHgIQAIgIAAgNQAAgLgIgJQgHgIgMAAQgLAAgIAJg");
	this.shape_19.setTransform(-9.7,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F5F5F5").s().p("AAOAvIghgtIAAAtIgXAAIAAhdIAXAAIAAArIAhgrIAaAAIglAsIAnAxg");
	this.shape_20.setTransform(-19.7,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F5F5F5").s().p("AAVBAIAAg9IgpA9IgWAAIAAhdIAWAAIAAA8IApg8IAWAAIAABdgAgSgvQgIgGgBgKIARAAQABAEADABQADACADAAQAEAAADgCQADgBABgEIARAAQgBAKgIAGQgHAHgMAAQgLAAgHgHg");
	this.shape_21.setTransform(-30.2,-1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F5F5F5").s().p("AgiAkQgPgPAAgVQAAgTAPgPQAOgPAUAAQAWAAAOAPQAOAPAAATQAAAVgOAPQgPAOgVAAQgUAAgOgOgAgTgTQgIAIABALQgBAMAIAIQAIAJALAAQAMAAAIgJQAIgIAAgMQAAgLgIgIQgIgJgMAAQgLAAgIAJg");
	this.shape_22.setTransform(-40.9,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F5F5F5").s().p("AAjAvIAAhEIgaBEIgRAAIgZhEIAABEIgXAAIAAhdIAhAAIAXBCIAZhCIAgAAIAABdg");
	this.shape_23.setTransform(-53,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5F5F5").s().p("AgXAKIAAgTIAvAAIAAATg");
	this.shape_24.setTransform(-67.1,-0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F5F5F5").s().p("AgbBAIAcgrIgDABIgDAAQgQABgLgNQgLgLAAgSQAAgTAMgNQAMgMATAAQAUAAALAMQANAOAAATQAAAGgDAJQgDAHgGAKIghAygAgOgkQgGAGAAALQAAAKAGAGQAGAEAIAAQAJABAGgGQAGgGAAgJQAAgJgGgIQgGgFgJgBQgJABgFAFg");
	this.shape_25.setTransform(32.8,-20.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F5F5F5").s().p("AgdA2QgMgMgBgRIAXAAQABAJAFAFQAFAFAIAAQAIAAAGgGQAGgGAAgJQAAgJgGgGQgFgFgNgBIgEAAIAAgUIAEAAQAGAAAFgEQAEgDAAgHQAAgFgDgDQgDgDgFAAQgDAAgEADQgDAEAAAEIgXAAQAAgOAJgJQAKgJAOAAQAOAAAKAJQAKAIAAAQQAAAGgDAGQgCAGgGAFQAJADAFAIQAGAJAAAMQAAARgNANQgNALgRAAQgRAAgMgLg");
	this.shape_26.setTransform(23.1,-20.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F5F5F5").s().p("AAqA/IAAhdIggBdIgTAAIgfhdIAABdIgYAAIAAh9IAgAAIAgBfIAhhfIAgAAIAAB9g");
	this.shape_27.setTransform(7,-20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F5F5F5").s().p("AguAvQgTgTAAgcQAAgaATgTQATgUAbABQAdgBASAUQATASAAAbQAAAcgTATQgTASgcAAQgaAAgUgSgAgdgeQgNANAAARQAAASANAMQAMANARAAQATAAAMgNQAMgNAAgRQAAgRgMgNQgMgMgTAAQgRAAgMAMg");
	this.shape_28.setTransform(-7.8,-20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F5F5F5").s().p("AguAvQgUgTABgcQAAgbATgSQASgUAcABQAcgBATAUQATATAAAaQAAAcgTATQgTASgcAAQgbAAgTgSgAgegeQgMANAAARQAAASAMAMQANANARAAQASAAAMgNQANgNAAgRQAAgRgNgNQgLgMgTAAQgSAAgMAMg");
	this.shape_29.setTransform(-22.1,-20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F5F5F5").s().p("AgmA/IAAgXIAvhPIgsAAIAAgXIBIAAIAAAXIgvBPIAxAAIAAAXg");
	this.shape_30.setTransform(-33.4,-20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-73,-26.9,146.1,54), null);


(lib.p4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p4();
	this.instance.parent = this;
	this.instance.setTransform(-84,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4_1, new cjs.Rectangle(-84,-86,168,172), null);


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(-120,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_1, new cjs.Rectangle(-120,-100,240,200), null);


(lib.p2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2();
	this.instance.parent = this;
	this.instance.setTransform(-120,-99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_1, new cjs.Rectangle(-120,-99,240,198), null);


(lib.p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p1();
	this.instance.parent = this;
	this.instance.setTransform(-120,-98.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(-120,-98.5,240,197), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(279));

	// p4
	this.instance = new lib.p4_1();
	this.instance.parent = this;
	this.instance.setTransform(140,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(204).to({_off:false},0).to({x:120,alpha:1},6).wait(62).to({x:100,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// p3
	this.instance_1 = new lib.p3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(140,200);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(136).to({_off:false},0).to({x:120,alpha:1},6).wait(62).to({x:100,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// p2
	this.instance_2 = new lib.p2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(140,200);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(68).to({_off:false},0).to({x:120,alpha:1},6).wait(62).to({x:100,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(136));

	// p1
	this.instance_3 = new lib.p1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(140,200);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:120,alpha:1},6).wait(62).to({x:100,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(204));

	// t4
	this.instance_4 = new lib.t4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120.7,337,0.8,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(204).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.8},6,cjs.Ease.get(1)).wait(62).to({scaleX:0.8,scaleY:0.8,x:120.7,alpha:0},6,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_5 = new lib.t3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.7,337,0.8,0.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(136).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.8},6,cjs.Ease.get(1)).wait(62).to({scaleX:0.8,scaleY:0.8,x:120.7,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// t2
	this.instance_6 = new lib.t2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120.7,337,0.8,0.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(68).to({_off:false},0).to({scaleX:1,scaleY:1,x:120.8},6,cjs.Ease.get(1)).wait(62).to({scaleX:0.8,scaleY:0.8,x:120.7,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(136));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(120.7,337,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,x:120.8},6,cjs.Ease.get(1)).wait(62).to({scaleX:0.8,scaleY:0.8,x:120.7,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(204));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAWIgBgBIgBgBIgDgKIgSAAIgFAKIAAABIgBABIgGAAIASgrIAFAAIASArgAAAgMIgBACIgGAPIAPAAIgGgPIgBgCIgBgDg");
	this.shape_1.setTransform(27.3,393);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIANAAIAGABIAGACIACAEIABAFIAAADIgCACIgDADIgDABQAEAAADADQADACgBAEIgBAFIgCAEIgGADIgGABgAgIARIAIAAIAEgBIADgCQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABgDQAAgDgCgCQgCgCgFAAIgIAAgAgIgBIAHAAIAEgBIACgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIABgDQAAgDgDgCQgBgCgFAAIgHAAg");
	this.shape_2.setTransform(23.5,393);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAWIgCgBIgBgBIgDgKIgSAAIgFAKIAAABIgCABIgEAAIARgrIAFAAIARArgAAAgMIAAACIgHAPIAPAAIgHgPIAAgCIgBgDg");
	this.shape_3.setTransform(19.4,393);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIANAAIAGABIAGADIACAEIABAGIgBAFIgCAEIgGADIgGABIgGAAIAAAQgAgHABIAGAAIAEgBIACgBIACgDIABgDIgBgEIgBgCIgDgCIgEgBIgGAAg");
	this.shape_4.setTransform(16,393);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIAbAAIAAAFIgVAAIAAAOIAIAAIAGABIAFABIADAEIABAFIgBAFIgDAEIgFADIgGABgAgIARIAIAAIAEgBIADgCIABgCIABgDIgBgDIgBgCIgDgCIgEAAIgIAAg");
	this.shape_5.setTransform(12.3,393);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAKIAAgIIgCABIgFADIgBgCIAFgDIABgBIABAAIgHgDIABgCIAFADIACABIAAgIIABAAIAAAHIAAABIACgBIAFgDIABACIgHADIACABIAFADIgBACIgFgDIgBAAIgBgBIAAACIAAAGg");
	this.shape_6.setTransform(7.5,391.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAVIgEgCIgDgEIgCgEIADgBIABAAIACABIABACIACABIACACIADABIADgBIADgCIACgCIABgDIgBgDQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgDgCIgEAAIAAgEIAEgBIACgBIACgCIABgDIgBgEIgBgBIgDgCIgCAAIgDAAIgCACIgBABIgBADIgBABIgDAAIgDAAIACgFQABgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAIADgDIAFAAIAFAAIAEADIACAEIABAEIAAAEIgBACIgDACIgDABQAEABACADQACADAAADIgBAFIgDAFQgCABgDABIgFABg");
	this.shape_7.setTransform(174.9,385.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAVIgDgBIgDgBIgCgCIACgDIABAAIACAAIABABIADABIADABIADgBIADgCIACgDIABgEIgBgEIgBgDIgDAAIgDgBIgHABIgEgBIAEgUIATAAIAAACIAAACIgDABIgMAAIgCALIAFgBIAGABIAEADIADADIABAFQAAAEgCADQAAADgDABQgCADgDAAIgFACg");
	this.shape_8.setTransform(171.4,385.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgTAAIgBgBIAAgDIATgbIAGAAIAAAbIAGAAIAAADIAAABIgGAAIAAAMgAgJAGIAOAAIAAgSIAAgCg");
	this.shape_9.setTransform(167.9,385.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAVIgFgFQgDgDAAgDQgCgEAAgGQAAgEACgFQAAgEADgDIAFgEIAFgBIAGABIAFAEIAEAHIABAJIgBAKIgEAGIgFAFIgGABQgCAAgDgBgAgDgPIgDACIgCAGIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgGIgDgCIgEgBg");
	this.shape_10.setTransform(164.4,385.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAWIARgjIACgCIgWAAIgBgBIAAgFIAcAAIAAAFIAAABIgRAjIgBABIgCABg");
	this.shape_11.setTransform(161,385.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgGIgBgKIABgJIAEgHIAFgEIAFgBIAGABIAFAEIADAHQACAFAAAEQAAAGgCAEIgDAGIgFAFQgDABgDAAIgFgBgAgDgPIgDACIgCAGIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgGIgDgCIgEgBg");
	this.shape_12.setTransform(157.5,385.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAUQgDAAgCgCIgDgFIgBgGIACgGQAAgCAEgEIAJgPIACgBIAGAAIgLAQIgBABIgBACIADgCIADAAIAFAAIAEADIADADIABAFQAAAEgCACQAAADgDABQgBADgDAAIgGACIgFgCgAgDAAIgDACIgCACIAAAEIAAADIACADIADACIADABIADgBIADgCIACgDIABgDIgBgEIgCgDIgCgBIgEAAg");
	this.shape_13.setTransform(154,385.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIAWIAOgVIgEACIgDABIgFgBIgDgCIgDgDIgBgFQAAgDABgDIADgEIAFgDIAEgBIAGABQACABACACIADAEIABAGIAAAEIgDAFIgLASIgBABIgCABgAgCgQIgDACIgCADIAAADQAAAEACACQACACADAAIAEAAIACgCIACgDIABgDIgBgDIgCgDIgCgCIgEAAg");
	this.shape_14.setTransform(150.5,385.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAWIARgjIACgCIgVAAIgBgBIgBgBIAAgEIAdAAIAAADIgBADIgRAjIgBABIgCABg");
	this.shape_15.setTransform(147.1,385.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAWIATglIgVAAIgBgBIgBgBIAAgEIAdAAIAAAFIgBABIgQAjIgCABIgCABg");
	this.shape_16.setTransform(143.6,385.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgTAAIgBgBIAAgDIATgbIAGAAIAAAbIAGAAIAAADIAAABIgGAAIAAAMgAgJAGIAOAAIAAgSIAAgCg");
	this.shape_17.setTransform(140,385.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgDgGQgCgEAAgGQAAgEACgFIADgHIAFgEIAFgBIAGABIAFAEIAEAHIABAJIgBAKIgEAGIgFAFIgGABQgCAAgDgBgAgDgPIgDACIgCAGIgBAHIABAIIACAGIADACIADABIAEgBIADgCIACgGIABgIIgBgHIgCgGIgDgCIgEgBg");
	this.shape_18.setTransform(136.6,385.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAWIAAgFIAJAAIAAgbIABgDIgIAGIgBABIAAAAIgBgBIgBAAIgBgCIAMgMIAFAAIAAAmIAIAAIAAAFg");
	this.shape_19.setTransform(133.2,385.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgrIAHAAIAAATIAVAAIAAgTIAGAAIAAArg");
	this.shape_20.setTransform(127.6,385.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIAUABIAFADIADAEIABAGQAAADgCACQAAACgDACIgFACIgGABIgGAAIAAARgAgHABIAGAAIAEgBIADgBIACgDIAAgDIAAgEIgCgCIgDgCIgEgBIgGAAg");
	this.shape_21.setTransform(123.6,385.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMAWIAAgrIAZAAIAAAFIgTAAIAAAmg");
	this.shape_22.setTransform(120.3,385.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHAUQgEgBgEgEQgCgCgCgFQgCgDAAgFQAAgEACgEIAEgHIAIgFQAEgBADAAQAFAAAEABQADACADADIAFAHQABAFAAADQAAADgBAFIgFAHQgDAEgDABQgFACgEAAQgDAAgEgCgAgFgOQgDAAgCACQgCACgBAEIgBAGIABAHQABACACADIAFADIAFABIAGgBIAFgDIADgFIABgHIgBgGIgDgGQgDgCgCAAQgCgCgEAAQgCAAgDACg");
	this.shape_23.setTransform(116,385.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAVIgEgBIgDgBIgCgCIACgDIABAAIAGACIADABIAEgBIACgCIACgDIABgEIgBgEIgCgDIgCAAIgDgBIgHABIgEgBIAEgUIAUAAIAAACIgBACIgDABIgMAAIgCALIAFgBIAGABIAFADIACADIABAFQAAAEgBADIgEAEIgEADQgDACgDAAg");
	this.shape_24.setTransform(110.3,385.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgHAGIgBABIgBAAIgBgBIAAAAIgCgCIAMgMIAFAAIAAAmIAIAAIAAAFg");
	this.shape_25.setTransform(106.9,385.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgGIgBgKIABgJIAEgHIAFgEIAFgBIAGABIAFAEIADAHQACAFAAAEQAAAGgCAEIgDAGIgFAFQgDABgDAAIgFgBgAgDgPIgDACIgCAGIgBAHIABAIIACAGQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAIADABIAEgBIADgCIACgGIABgIIgBgHIgCgGIgDgCIgEgBg");
	this.shape_26.setTransform(103.4,385.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNAWIAAgCIAAgCIABgBIAQgRIACgCIABgDIABgEIgBgDIgBgCIgCgCIgEAAIgCAAIgCACIgBACIgCACIgBACIgCAAIgCgBIABgFIADgEIAFgCIADgBIAGABIAEACIADAEQABABAAAEIgBAFIgCADIgDADIgNAPIADgBIAPAAIABABIABABIAAAEg");
	this.shape_27.setTransform(99.9,385.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKAWIAAgFIAJAAIAAgbIABgDIgHAGIgCABIAAAAIgBgBIgBAAIgBgCIAMgMIAEAAIAAAmIAJAAIAAAFg");
	this.shape_28.setTransform(96.5,385.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAVIgEgBIgCgBIgDgCIACgDIACAAIAFACIAEABIADgBIADgCIACgDIAAgEIAAgEIgCgDIgDAAIgDgBIgHABIgDgBIADgUIAUAAIAAACIgBACIgDABIgMAAIgCALIAFgBIAGABIAEADIADADIABAFIgBAHQgCADgCABQgBACgDABQgDACgDAAg");
	this.shape_29.setTransform(92.9,385.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgTAAIgBgBIAAgDIAUgbIAFAAIAAAbIAGAAIAAAEIgGAAIAAAMgAgJAGIAOAAIAAgUg");
	this.shape_30.setTransform(89.4,385.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgEgGIgBgKIABgJIAEgHIAFgEIAFgBIAGABIAFAEIADAHQACAFAAAEQAAAGgCAEIgDAGQgCADgDACQgCABgEAAIgFgBgAgDgPIgDACIgCAGIgBAHIABAIIACAGQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAIADABIAEgBIADgCIACgGIABgIIgBgHIgCgGIgDgCIgEgBg");
	this.shape_31.setTransform(86,385.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKAWIATglIgVAAIgBgBIgBgBIAAgEIAdAAIAAADIgBADIgRAjIgBABIgCABg");
	this.shape_32.setTransform(82.5,385.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKAWIARgjIACgCIgVAAIgBgBIgBgBIAAgEIAdAAIAAAFIgBABIgQAjIgCABIgCABg");
	this.shape_33.setTransform(79,385.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgHAAIAAgrIAHAAIAAATIAVAAIAAgTIAHAAIAAArg");
	this.shape_34.setTransform(73.5,385.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AALAWIAAgUIgVAAIAAAUIgGAAIAAgrIAGAAIAAATIAVAAIAAgTIAHAAIAAArg");
	this.shape_35.setTransform(68.9,385.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AALAWIAAghIABgCIgBACIgBACIgTAdIgBABIgCABIgEAAIAAgrIAFAAIAAAjIADgEIATgdIAAgBIACgBIAFAAIAAArg");
	this.shape_36.setTransform(64.3,385.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgIAGIAAABIgBAAIgBgBIAAAAIgCgCIAMgMIAFAAIAAAmIAIAAIAAAFg");
	this.shape_37.setTransform(231.4,377.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAVIgFgFIgDgGIgBgKIABgJIADgHIAFgEIAFgBIAGABIAFAEIADAHIABAJIgBAKIgDAGQgCADgDACQgCABgEAAIgFgBgAgDgPQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIgCAGIgBAHIABAIIACAFIADADIADABIAEgBIADgDIACgFIABgIIgBgHIgCgGQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAIgEgBg");
	this.shape_38.setTransform(227.9,377.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAVIgFgFQgDgDAAgDQgCgEAAgGQAAgFACgEQAAgEADgDIAFgEIAFgBIAGABIAFAEQADADAAAEQACAEAAAFQAAAGgCAEQAAADgDADIgFAFQgDABgDAAIgFgBgAgDgPIgDACIgCAGIgBAHIABAIIACAFIADADIADABIAEgBIADgDIACgFIABgIIgBgHIgCgGIgDgCIgEgBg");
	this.shape_39.setTransform(224.4,377.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgHAGIgBABIgBAAIgBgBIAAAAIgCgCIAMgMIAFAAIAAAmIAIAAIAAAFg");
	this.shape_40.setTransform(220.9,377.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AABAPIgFAAIgDgDIgEgGIgBgGIABgFQABgDADgCIAEgDIAFgBIAFABQAEABABABIgBACIgBABIgBAAIgCgBIgCgBIgCAAIgEAAIgDADIgBAEIAAADIAAAFIACADIACACIADACIADgBIACgBIACgBIABgBIABABIABACIgCACIgDACIgDAAg");
	this.shape_41.setTransform(216.3,378.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAIAPIAAgWIgBACIgBABIgCACIgCADIgJANIAAABIgCAAIgDAAIAAgdIAGAAIAAAUIgBACIACgDIAAAAIACgDIALgPIABgBIABAAIADAAIAAAdg");
	this.shape_42.setTransform(213,378.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgCAbIAAgLIgGgBIgGgDIgDgFIgBgGIABgFIADgFQACgCAEgBQADgCADAAIAAgMIAFAAIAAAMQADAAADACQAEABACACIADAFIABAFIgBAGIgDAFIgGADIgGABIAAALgAADAMIAEgBIADgCIADgEIAAgEIAAgEIgDgDIgDgDIgEgBgAgJgGQgDADAAAEQAAAFADADQACACAGABIAAgWQgGABgCADg");
	this.shape_43.setTransform(209.2,378.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgFAPQgDgBgCgCQgCgDgBgDIAAgGIAAgFQABgDACgDIAFgCIAFgBIAGABIAFACQACADAAADIABAFIgBAGQAAADgCADQgCACgDABIgGAAIgFAAgAgFgHQgDADAAAEQAAAFADADQACADADABQAEgBACgDQACgCAAgGQAAgFgCgCQgCgDgEAAQgDAAgCADg");
	this.shape_44.setTransform(205.4,378.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgCAGIAAAAIAAgBIABgBIABgDIAAgBIAAAAIgBAAIgBgBIAAgBIgBgBIABgDIACgBIACABIACACIAAACIgBACIgBACIgBADIgCADg");
	this.shape_45.setTransform(201.4,380);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgFAVIgEgCIgEgFIgBgEQAAgFADgCQADgDADAAQgDgBgCgDQgCgCAAgEIABgEIADgEIADgDIAFAAIAGAAIADADIADAEIABAEQAAAEgCACQgBACgDACQACAAADADQADACAAAFIgCAEIgDAFQgCABgCABIgGABgAgCACIgDABIgCACIgBAFIABADIABACIAEABIACACIAEgCIADgBQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIABgDIgBgFIgCgCIgDgBIgDAAgAgCgQIgDACIgBABIgBADIABADIABACIADACIACAAIADAAIADgCIABgCIABgDIgBgDIgBgBIgDgCIgDgBg");
	this.shape_46.setTransform(199,377.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAAADIgCAAIAAgBIgBgCIABgCIACgBIABAAIABABIABABIABABIgBACIgCABIgBABg");
	this.shape_47.setTransform(195.1,379.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AANAVIAAgLIgYAAIAAAIIgBACIgBABIgEAAIAAgQIACAAIACAAIACgBIABgDIADgLIABgKIASAAIAAAZIAGAAIAAANIgBACIgBABgAgCgHIgCAGQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABIgCACIAOAAIAAgUIgJAAg");
	this.shape_48.setTransform(192.4,379);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDAGIAAAAIACgCIAAgBIABgCIAAgBIgBAAIgCgCIAAgBIABgDIACgBIABABIACABIAAABIABACIgBACIgBACIgCADIgBADg");
	this.shape_49.setTransform(188.4,380);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAIAVIAAgWIgBACIgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBABIgCADIgJANIAAABIgCAAIgDAAIAAgdIAGAAIAAAVIgBABIACgCIAAgBIACgCIALgPIABgBIABgBIADAAIAAAdgAgCgNIgDgBIgCgCIAAgDIAAgBIABgBIADAAIAAACIABADIABAAIABABIAEgBIABgDIAAgCIADAAIABABIAAABIAAADIgCACIgDABIgEAAg");
	this.shape_50.setTransform(186,377.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgHACIAAgDIAPAAIAAADg");
	this.shape_51.setTransform(183.2,378.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgOAWIAAgCIABgCIAAgBIAQgRIADgCIABgDIABgEIgBgDIgCgCIgCgCIgCAAIgDAAIgCACIgBACIgBACIgBACIgDAAIgDgBIACgFIADgEIAEgCIAFgBIAFABIAEACIACAEQABABAAAEIAAAFIgCADIgGAHIgKALIACgBIAPAAIACABIAAABIAAAEg");
	this.shape_52.setTransform(180.3,377.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAIAVIAAgWIgCADIgCACIgCADIgJANIAAABIgCAAIgDAAIAAgdIAGAAIAAAVIgBABIACgCIAAgBIACgCIALgPIABgBIABgBIADAAIAAAdgAgCgNIgDgBIgCgCIAAgDIAAgBIABgBIADAAIAAACIABADIABAAIABABIADgBIABAAIABgDIAAgCIADAAIABABIAAABIAAADIgCACIgDABIgEAAg");
	this.shape_53.setTransform(175.3,377.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAHAPIAAgTIABgBIAAgCIgBACIgBABIgNASIgBABIgBAAIgDAAIAAgdIAGAAIAAATIgBABIAAACIABgDIABAAIACgDIALgPIABgBIABAAIADAAIAAAdg");
	this.shape_54.setTransform(171.8,378.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAJAPIgCAAIgBgCIgGgJIgBgCIgCgBIgEAAIAAAOIgFAAIAAgdIAFAAIAAANIAEAAIABgBIACgBIAFgKIABgBIACAAIAFAAIgKANIgCABIADAAIACACIAHANg");
	this.shape_55.setTransform(168.7,378.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AABAPIgFAAIgDgDQgCgCgBgEIgCgGIACgFIACgFIAEgDIAGgBIAGABIAEACIgCACIAAABIgCAAIgBgBIgCgBIgDAAIgCAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIgBADIABAFIABADIAEACIACACIADgBIACgBIACgBIABgBIAAABIACACIgCACIgDACIgDAAg");
	this.shape_56.setTransform(165.6,378.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAHAPIAAgOIgNAAIAAAOIgGAAIAAgdIAGAAIAAAMIANAAIAAgMIAGAAIAAAdg");
	this.shape_57.setTransform(162.4,378.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAIAPIAAgWIgBACIgBABIgNASIAAABIgCAAIgDAAIAAgdIAGAAIAAAUIgBACIABgDIABAAIACgDIALgPIABgBIABAAIADAAIAAAdg");
	this.shape_58.setTransform(159,378.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AASAVIAAgLIgpAAIAAgeIAHAAIAAAZIALAAIAAgZIAFAAIAAAZIAMAAIAAgZIAGAAIAAAZIAFAAIAAANIAAACIgCABg");
	this.shape_59.setTransform(154.8,379);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgFAPQgCgBgDgCIgCgGIgBgGIABgFIACgGIAFgCIAFgBIAGABIAFACQACADABADIAAAFIAAAGQgBADgCADQgCACgDABIgGAAIgFAAgAgFgHQgDADAAAEQAAAFADADQACADADABQAEgBACgDQACgCAAgGQAAgFgCgCQgCgDgEAAQgDAAgCADg");
	this.shape_60.setTransform(150.4,378.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOAVIAAgqIATABIAFADIADAEIABAGIgBAFQAAACgDACIgFACIgFABIgHAAIAAAQgAgHABIAHAAIADgBIADgBIACgDIABgDIgBgEIgCgDIgDgBIgDgBIgHAAg");
	this.shape_61.setTransform(147.2,377.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAMAVIAAgLIgYAAIAAAIIAAACIgBABIgEAAIAAgQIABAAIACAAIACgBIACgDIACgEIACgRIASAAIAAAZIAGAAIAAANIgBACIgBABgAgEgBIgBAEIgCACIAOAAIAAgUIgJAAg");
	this.shape_62.setTransform(141.8,379);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgCAPIgDAAIgDgCIgCgCIABgCIABgBIABABIACABIACABIADABIACgBIACgBIACgCIAAgCIgCgDQgBgCgDAAIgEAAIAAgCIAEAAIAEgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgBgCIgBgBIgCgBIgFAAIgCABIgBAAIgBABIgBAAIAAgBIgCgCQACgCADAAIAFgBIAEAAIAEACIACACIABADIAAADIgBABIgCACIgDABQADAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAEIgDAEIgEABIgEAAg");
	this.shape_63.setTransform(138.5,378.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AABAPIgEAAQgDgBgDgCIgCgGIgBgGIABgFQABgEABgBIAFgDIAFgBIAFABIAEACIACAEIACAGIAAABIgCAAIgTAAIABAFIACADIADACIACACIAEgBIADgBIABgBIABgBIABABIACACIgDACIgCACIgDAAgAgEgJQgDADAAAEIAPAAIAAgDIgBgDIgDgCIgDgBQgCAAgDACg");
	this.shape_64.setTransform(135.7,378.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgFAPQgDgBgCgCQgCgDAAgDIgBgGIABgFQAAgDACgDIAFgCIAFgBIAGABIAFACQACADABADIAAAFIAAAGQgBADgCADQgCACgDABIgGAAIgFAAgAgFgHQgCACgBAFQABAGACACQACADADABQAEgBACgDQADgDAAgFQAAgEgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_65.setTransform(132.4,378.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgNAUIAAgnIAEAAIACABIAAADQACgDACAAQADgBACAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIAFACIABAFIABAHIgBAFIgCAFIgEAEIgFAAIgFAAIgDgCIAAAMgAgEgOIgDAEIAAANIADACIAEACQADgBACgDQADgCAAgFIgBgFQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBIgCgCIgDAAg");
	this.shape_66.setTransform(129.1,379);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAKAVIAAglIgUAAIAAAlIgGAAIAAgqIAhAAIAAAqg");
	this.shape_67.setTransform(125.1,377.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgCAGIAAAAIAAgBIABgBIABgDIAAgBIAAAAIgCgBIAAgBIgBgBIABgDIACgBIABABIACABIAAABIABACIgBACIgDAFIgBADg");
	this.shape_68.setTransform(120.7,380);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgGAPIgDgBIgCgDIAAgEIABgDQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAIAGgBIAHgBIAAgCQAAgDgBgDQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgDAAIgFADIgCgBIgBgCIAGgEIAFgBIAFABIADACIACAEIABAFIAAASIgCAAIgCAAIgBgEIgFADIgCABIgDABgAgDADIgCACIgBACIABACIABACIADABIAEgBIACgCIABgBIAAgHg");
	this.shape_69.setTransform(118.4,378.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgLAPIAAgdIALAAIAEAAIAEACIACACIAAADIgBAEIgCACIgDABQADAAADABIACAFIgBAEIgDADIgDACIgFAAgAgFALIAFAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgCIgBgBIgCgBIgDgBIgFAAgAgFgBIAFAAIACgBIACgBIABgBIAAgCIAAgCIgBgBIgCgBIgCgBIgFAAg");
	this.shape_70.setTransform(115.6,378.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAJAPIgCAAIgBgCIgGgJIgBgCIgCgBIgDAAIAAAOIgGAAIAAgdIAGAAIAAANIACAAIADgBIABgBIAFgKIACgBIABAAIAFAAIgKANIgCABIADAAIACACIAHANg");
	this.shape_71.setTransform(112.6,378.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AABAPIgEAAIgFgDIgCgGIgBgGIAAgFIADgFIAFgDIAFgBIAGABIAEACIgBACIgBABIgCAAIgDgCIgDAAIgDAAIgCADIgCAEIgBADIABAFIACADIACACIADACIADgBIACgBIACgBIABgBIABABIABACIgCACIgDACIgDAAg");
	this.shape_72.setTransform(109.5,378.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgFAPIgFgDIgDgGIgBgGIABgFIADgGIAFgCIAFgBIAGABIAFACIADAGIABAFIgBAGIgDAGIgFADIgGAAIgFAAgAgGgHQgCACAAAFQAAAGACACQADADADABQAFgBACgDQACgCAAgGQAAgFgCgCQgCgDgFAAQgDAAgDADg");
	this.shape_73.setTransform(106.3,378.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AARAVIAAghIgOAaIgBABIgBAAIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIgOgaIAAAhIgGAAIAAgqIAGAAIABABIAPAdIABgCIABgCIAOgZIABgBIAGAAIAAAqg");
	this.shape_74.setTransform(101.9,377.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgBADIgBAAIgBgBIAAgCIABgCIACgBIACAAIABABIABABIAAABIAAACIgCABIgCABg");
	this.shape_75.setTransform(96.9,379.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgJAPIAAgdIATAAIAAAEIgNAAIAAAZg");
	this.shape_76.setTransform(95.5,378.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgCAGIAAAAIAAgBIABgBIABgDIAAgBIAAAAIgBAAIgBgBIAAgBIgBgBIABgDIACgBIACABIACACIAAACIgBACIgBACIgDAGg");
	this.shape_77.setTransform(91.8,380);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgJAWIAPgVIgEACIgDABIgFgBIgDgCIgDgDIgBgFIABgGIADgEIAEgDIAFgBIAGABQACABACACIADAEIABAGIAAAEIgDAFIgLASIgCABIgBABgAgCgQIgDACIgCADIAAADQAAAEACACQACACADAAIAEAAIACgCIACgDIABgDIgBgDIgCgDIgCgCIgEAAg");
	this.shape_78.setTransform(89.4,377.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgHAGIgBABIgBAAIAAgBIgBAAIgCgCIAMgMIAEAAIAAAmIAJAAIAAAFg");
	this.shape_79.setTransform(86,377.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAFAWIAAgMIgTAAIgBgBIAAgDIAUgbIAFAAIAAAbIAGAAIAAAEIgGAAIAAAMgAgJAGIAOAAIAAgUg");
	this.shape_80.setTransform(82.4,377.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgEAVIgEgBIgCgBIgDgCIACgDIABAAIACAAIAEACIAEABIADgBIADgCIABgDIABgEIAAgEIgCgDIgDAAIgDgBIgHABIgEgBIAEgUIAUAAIAAACIgBACIgDABIgMAAIgCALIAFgBIAGABIAEADIADADIABAFIgBAHQgCADgCABQgCADgDAAQgCACgDAAg");
	this.shape_81.setTransform(78.9,377.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgHAGIgBABIgBAAIAAgBIgBAAIgCgCIAMgMIAEAAIAAAmIAJAAIAAAFg");
	this.shape_82.setTransform(75.5,377.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgJAWIAAgFIAJAAIAAgeIgHAGIgBABIgBAAIgBgBIAAAAIgCgCIAMgMIAFAAIAAAmIAIAAIAAAFg");
	this.shape_83.setTransform(72,377.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAAALIAAgBIAAgBIAEgIIABgBIgBAAIgEgIIAAgBIAAgCIACAAIAIALIAAAAIgIAMgAgIALIgBgBIABgBIAEgIIABgBIgBAAIgEgIIgBgBIABgCIACAAIAHALIAAAAIgHAMg");
	this.shape_84.setTransform(67.5,378.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAAADIgCAAIgBgBIAAgDIABgBIACgBIAAAAIACAAIABABIABABIAAADIgCABIgCABg");
	this.shape_85.setTransform(65.4,379.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgMAVIAAgqIAZAAIAAAFIgTAAIAAAlg");
	this.shape_86.setTransform(63.9,377.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgBADIgCgBIAAgDIABgBIABgBIABAAIABAAIACABIABABIAAADIgBABIgCAAIgBABg");
	this.shape_87.setTransform(61.4,379.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AALAVIAAgTIgVAAIAAATIgHAAIAAgqIAHAAIAAATIAVAAIAAgTIAGAAIAAAqg");
	this.shape_88.setTransform(58.4,377.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgBADIgCgBIAAgDIABgBIABgBIABAAIADABIABACIgBACIAAABIgCAAIgBABg");
	this.shape_89.setTransform(55.4,379.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgFAUQgEgCgCgDQgEgDgBgDQgBgEAAgFQAAgEABgEIAFgHIAGgFQAEgBAEAAQAEAAAEABQAEACACADIgCACIgBABIgCgBIgCgBIgCgBIgFgBQgDAAgCACQgCAAgDACIgDAGIgBAGIABAHIADAFIAFADIAEABIAHgBIACgBIACgBIABAAIABgBIABABIACACQgDAEgEABQgEACgFAAQgDAAgEgCg");
	this.shape_90.setTransform(52.8,377.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AALAVIAAgcIABgEIAAgDIgDAGIgTAcIgBABIgBAAIgFAAIAAgqIAGAAIAAAgIAAADIACgEIATgdIABgBIACgBIAEAAIAAAqg");
	this.shape_91.setTransform(46.9,377.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AARAbIAAgLIghAAIAAAJIgBABIgBABIgEAAIAAgQIAFAAIABgBIACgDIACgFIABgGIACgWIAZAAIAAAlIAHAAIAAAOIgBABIgBABgAgGAAIgCAHIgCAEIAUAAIAAggIgNAAg");
	this.shape_92.setTransform(42.1,378.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAMAVIAAgTIgXAAIAAATIgFAAIAAgqIAFAAIAAATIAXAAIAAgTIAFAAIAAAqg");
	this.shape_93.setTransform(37.5,377.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAQAVIgCAAIgBgBIgDgKIgTAAIgDAKIgBABIgBAAIgFAAIARgqIAFAAIARAqgAAAgNIAAACIgHAQIAPAAIgHgQIgBgEg");
	this.shape_94.setTransform(33.2,377.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAMAVIgCAAIgLgRIgCgCIgCAAIgFAAIAAATIgGAAIAAgqIAGAAIAAATIAFAAIACgBIABgBIALgRIAHAAIgNASIgDADIACAAIADADIAMASg");
	this.shape_95.setTransform(29.4,377.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAHgLIACAAIAAACIAAABIgFAIIAAAAIAAABIAFAIIAAABIAAABIgCABgAgIAAIAAAAIAHgLIABAAIAAACIAAABIgEAIIAAAAIAAABIAEAIIAAABIAAABIgBABg");
	this.shape_96.setTransform(25.8,378.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgIAUQgEgCgCgDQgDgDgCgDQgBgEAAgFQAAgEABgEIAFgHQACgDAEgCQAEgBAEAAQAFAAAEABQAEACACADQAEAEABADQABAEAAAEQAAAFgBAEQgBADgEADQgCADgEACQgFACgEAAQgDAAgFgCgAgFgOQgDABgCABIgDAGIgBAGIABAHIADAFIAFADIAFABIAGgBIAFgDQACgDABgCIABgHIgBgGQgBgEgCgCQgCgBgDgBQgDgCgDAAIgFACg");
	this.shape_97.setTransform(20.6,377.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgIAUQgEgBgDgEIgEgGQgBgEAAgFQAAgEABgEIAEgHQADgDAEgCQAEgBAEAAIAJABQADACADADQAEAEABADQABAEAAAEQAAAFgBAEQgBADgEADQgDAEgDABIgJACQgDAAgFgCgAgFgOQgDAAgCACIgDAGIgBAGIABAHIADAFIAFADIAFABIAGgBIAFgDQACgDABgCIABgHIgBgGQgBgEgCgCIgFgCQgDgCgDAAIgFACg");
	this.shape_98.setTransform(15.8,377.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgHAUQgEgBgDgEQgDgDgCgDQgBgEgBgFQABgEABgEIAFgHIAHgFQAEgBADAAQAFAAADABQAFACACADIAFAHQABAEABAEQgBAFgBAEIgFAGQgCAEgFABQgFACgDAAQgCAAgFgCgAgFgOQgDAAgCACIgDAGIgBAGIABAHIADAFIAFADIAFABIAGgBIAFgDIADgFIABgHIgBgGIgDgGQgDgCgCAAQgCgCgEAAQgCAAgDACg");
	this.shape_99.setTransform(11,377.9);

	this.instance_8 = new lib.Image_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(59,47,0.363,0.363);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("ApGBTQgrgmAZg4QAWgzBGgdQBOghB9AAQAcAAAZADIAhAFIANADIgSAgQgqgLgeAAQhAAAg0ASQhHAZgKAyQgHAeAWAbQAcAiA9gDQAUgBAkgMQAtgQAagUIBAg3QAGgFAHgDIAMgDIAGgBIBEAAIAWBeIArhdIBLAAIArBHIAghHIBFAAIg8CDIhHAAIgthMIgiBMIgrAAIAAABIhSAAIgDgYIhLAAIgYAWIgwAAQg5AVhJAAQhrAAgtgqgAjHA4IArgBIgDglgAGHB1IAsgrIgshkIBEAAIASA1IA4g2IBNAAIiFCFIgEADQgFAEgDABQgFACgLABgAD+BpIhvAAIA9iDIBvAAQA1AAAUAZQAPAUgMAaQgLAZgcAPQglAUg6AAIgDAAgADpBIIATAAQAXAAARgFQAdgJAFgVQAFgSgSgIQgMgFgUAAIgTAAg");
	this.shape_100.setTransform(119.6,30.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00A8E1").s().p("AyyfaMAAAg+zMAllAAAMAAAA+zg");
	this.shape_101.setTransform(120.3,201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.instance_8},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(279));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119.5,199.5,260.5,402.5);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/240x400_atlas_P_.png", id:"240x400_atlas_P_"},
		{src:"images/240x400_atlas_NP_.jpg", id:"240x400_atlas_NP_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;