(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"240x400_atlas_P_", frames: [[0,91,100,73],[152,0,50,225],[0,0,150,89]]},
		{name:"240x400_atlas_NP_", frames: [[0,0,160,224],[0,226,220,153]]}
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



(lib.hoov2 = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic1 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic2a = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic2b = function() {
	this.spriteSheet = ss["240x400_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pic3 = function() {
	this.spriteSheet = ss["240x400_atlas_NP_"];
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


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgbAgQgNgLABgVQAAgRAMgOQALgMAQAAQATAAAKAMQALANAAATIAAAEIhDAAQACANAIAIQAJAIAKgBQAPAAAMgMIAIAIQgOAQgVAAQgRAAgMgNgAgSgZQgHAJgCAMIA2AAQgBgNgHgIQgIgIgLAAQgKAAgIAIg");
	this.shape.setTransform(36.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AAYArIAAgmIgwAAIAAAmIgMAAIAAhVIAMAAIAAAlIAwAAIAAglIANAAIAABVg");
	this.shape_1.setTransform(26.1,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AAZA8IAAhDIgyBDIgMAAIAAhVIAMAAIAABDIAzhDIAMAAIAABVgAgPgqQgHgHgBgIIAJgCQADAMALAAQALAAADgMIAJACQgCAIgGAHQgHAFgIAAQgIAAgHgFg");
	this.shape_2.setTransform(15.8,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgbAlQgJgHAAgNQAAgOAKgFQAKgIAQAAQANAAAMAEIAAgDQAAgLgHgGQgGgGgMAAQgMAAgNAGIgEgKQAQgHAOAAQASAAAJAJQAKAJgBAQIAAAzIgMAAIAAgMQgLAOgTAAQgNAAgJgHgAgRAEQgGAFgBAIQAAAIAHAEQAFAFAKAAQALAAAIgHQAIgGAAgKIAAgIQgOgDgKAAQgLAAgHAEg");
	this.shape_3.setTransform(5.5,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AghAgIAGgKQAMALAPAAQAJAAAGgDQAHgFAAgGQgBgIgFgDQgGgEgKAAIgKAAIAAgJIAKAAQAIAAAGgEQAGgFAAgGQAAgGgGgDQgFgEgIABQgOAAgLAIIgHgJQAPgKASAAQAOAAAIAFQAIAHAAAKQAAAOgNAGQAPAEAAAQQAAALgJAHQgIAIgQAAQgTAAgPgNg");
	this.shape_4.setTransform(-3.4,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AAZArIAAhDIgxBDIgNAAIAAhVIANAAIAABDIAxhDIANAAIAABVg");
	this.shape_5.setTransform(-12.7,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AAjA1IAAgVIhEAAIgDAVIgKAAIAAggIAJAAQAMgVAAglIAAgQIA7AAIAABKIANAAIgCAggAgNgdQAAAfgKATIAtAAIAAg+IgjAAg");
	this.shape_6.setTransform(-23,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAZArIAAhDIgyBDIgMAAIAAhVIANAAIAABDIAxhDIANAAIAABVg");
	this.shape_7.setTransform(-38,20.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAaArIgagjIgaAjIgOAAIAhgrIgfgqIAOAAIAYAhIAZghIAOAAIgfAqIAhArg");
	this.shape_8.setTransform(54.3,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AAZArIAAgfIgYAAIgWAfIgQAAIAaghQgLgDgFgHQgHgFAAgKQAAgMAJgHQAJgIAPAAIAnAAIAABVgAgQgaQgFADAAAIQAAAIAGAEQAGAEAJAAIAZAAIAAggIgaAAQgJAAgGAFg");
	this.shape_9.setTransform(44.4,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAZArIAAhDIgxBDIgNAAIAAhVIANAAIAABDIAxhDIANAAIAABVg");
	this.shape_10.setTransform(34.7,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AgcArIAAhVIA5AAIAAALIgsAAIAABKg");
	this.shape_11.setTransform(26.2,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgeAgQgNgOgBgSQABgRANgOQANgNARAAQATAAANANQAMAOAAARQAAATgMAMQgNAOgTAAQgSAAgMgNgAgVgXQgJAKAAANQAAAOAJAJQAJAKAMAAQAOAAAJgJQAJgKAAgOQgBgNgIgKQgJgJgOAAQgNAAgIAJg");
	this.shape_12.setTransform(16.5,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgqAqIABgLIAGABIAGgBQADgBACgDQADgEABgHQADgKAAgKIABgmIA8AAIAABUIgNAAIAAhJIgjAAIAAACQAAATgCANQgBAPgCAHQgDAIgEAEQgDAEgEABIgJABg");
	this.shape_13.setTransform(5.4,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AgeAgQgOgOAAgSQAAgRAOgOQANgNARAAQATAAANANQAMAOAAARQAAATgMAMQgOAOgSAAQgSAAgMgNgAgVgXQgJAKAAANQAAAOAJAJQAJAKAMAAQAOAAAJgJQAJgKAAgOQgBgNgIgKQgKgJgNAAQgNAAgIAJg");
	this.shape_14.setTransform(-4.1,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#706F6F").s().p("AAZArIAAgmIgxAAIAAAmIgMAAIAAhVIAMAAIAAAlIAxAAIAAglIAMAAIAABVg");
	this.shape_15.setTransform(-14.6,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706F6F").s().p("AAaArIgagjIgaAjIgOAAIAigrIghgqIAPAAIAYAhIAZghIAPAAIghAqIAiArg");
	this.shape_16.setTransform(-24.5,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#706F6F").s().p("AgbAgQgMgMAAgUQAAgTALgMQANgNAPAAQASAAAMANQAKANAAATIAAAEIhDAAQACANAIAIQAJAHAKAAQAQAAALgMIAIAIQgOAQgVAAQgQAAgNgNgAgSgZQgHAJgCAMIA2AAQAAgMgIgJQgGgIgNAAQgKAAgIAIg");
	this.shape_17.setTransform(-33.7,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#706F6F").s().p("AgGArIAAhKIgeAAIAAgLIBJAAIAAALIgeAAIAABKg");
	this.shape_18.setTransform(-42.4,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#706F6F").s().p("AgkArIAAhVIAoAAQANAAAIAGQAHAGAAAJQAAAOgOAGQATAEAAAQQAAALgIAGQgKAHgNAAgAgXAgIAbAAQAJAAAGgEQAFgEAAgHQAAgGgGgDQgFgEgKAAIgaAAgAgXgFIAZAAQAJAAAEgEQAEgDAAgHQAAgFgEgEQgEgDgJAAIgZAAg");
	this.shape_19.setTransform(-56.1,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#706F6F").s().p("AAkArIAAhVIAMAAIAABVgAgwArIAAhVIANAAIAAAgIAXAAQAOAAAJAHQAKAFAAANQAAANgJAHQgJAIgOAAgAgjAgIAXAAQALAAAEgFQAFgEAAgIQAAgHgGgEQgFgEgJAAIgXAAg");
	this.shape_20.setTransform(56.5,-18.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#706F6F").s().p("AAjA2IAAgWIhEAAIgDAWIgKAAIAAghIAJAAQALgVAAgmIAAgOIA8AAIAABJIANAAIgCAhgAgNgdQAAAfgKATIAtAAIAAg+IgjAAg");
	this.shape_21.setTransform(45.2,-17.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#706F6F").s().p("AAZArIAAgmIgwAAIAAAmIgNAAIAAhVIANAAIAAAlIAwAAIAAglIAMAAIAABVg");
	this.shape_22.setTransform(35.1,-18.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#706F6F").s().p("AgbAgQgMgMAAgUQAAgSALgMQALgNARgBQATAAAKANQALAOABARIgBAFIhDAAQABAMAJAJQAJAIALAAQAPgBALgMIAIAHQgPAQgUAAQgRAAgMgMgAgSgZQgIAJgBAMIA2AAQgBgNgHgIQgHgIgMAAQgJAAgJAIg");
	this.shape_23.setTransform(25.2,-18.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#706F6F").s().p("AgqA5IAAhvIANAAIAAARQAMgTATAAQARAAAMAMQAMANAAAUQAAASgMANQgMAMgRAAQgTAAgMgSIAAArgAgVgjQgJAKAAAOQAAANAJAJQAJAKAMAAQANAAAIgJQAJgJAAgOQAAgQgJgIQgJgKgMAAQgLAAgKAKg");
	this.shape_24.setTransform(15,-17.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#706F6F").s().p("AgFArIAAhJIgfAAIAAgMIBJAAIAAAMIgfAAIAABJg");
	this.shape_25.setTransform(5.1,-18.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#706F6F").s().p("AAfArIAAhAIgfAqIgfgqIAABAIgMAAIAAhVIAMAAIAfAsIAggsIAMAAIAABVg");
	this.shape_26.setTransform(-9.8,-18.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#706F6F").s().p("AgbAtQgMgMAAgTQAAgTALgMQAMgNARAAQASAAALAMQAKAOAAASIAAAEIhDAAQACANAIAIQAJAIALAAQAPAAALgMIAIAHQgOAQgVAAQgRAAgMgNgAgRgLQgIAHgCANIA2AAQAAgMgIgIQgHgIgMAAQgJgBgIAJgAAHgpIAAgQIAPAAIAAAQgAgVgpIAAgQIAOAAIAAAQg");
	this.shape_27.setTransform(-20.5,-20);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#706F6F").s().p("AgbAlQgKgHAAgNQABgNAJgGQALgIAQAAQANAAAMAEIAAgDQAAgLgGgGQgHgGgMAAQgMAAgNAGIgEgKQARgHANAAQASAAAKAJQAJAJAAAQIAAAzIgNAAIAAgMQgMAOgRAAQgOAAgJgHgAgRAEQgHAFABAIQAAAIAFAEQAHAFAJAAQALAAAIgHQAIgGAAgKIAAgIQgNgDgMAAQgLAAgGAEg");
	this.shape_28.setTransform(-30.4,-18.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#706F6F").s().p("AAjA2IAAgWIhEAAIgDAWIgKAAIAAghIAJAAQAMgVAAgmIAAgOIA7AAIAABJIANAAIgCAhgAgNgdQAAAfgKATIAtAAIAAg+IgjAAg");
	this.shape_29.setTransform(-40,-17.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#706F6F").s().p("AgbAlQgKgHAAgNQAAgNAKgGQAKgIARAAQANAAAMAEIAAgDQAAgLgHgGQgGgGgMAAQgMAAgNAGIgEgKQARgHANAAQASAAAKAJQAJAJAAAQIAAAzIgNAAIAAgMQgMAOgSAAQgMAAgKgHgAgRAEQgHAFAAAIQAAAIAGAEQAHAFAJAAQALAAAIgHQAIgGAAgKIAAgIQgNgDgMAAQgLAAgGAEg");
	this.shape_30.setTransform(-49.9,-18.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#706F6F").s().p("AgsApIAIgJQASARAWAAQALAAAIgHQAIgGAAgKQAAgKgIgGQgKgFgNAAIgMAAIAAgKIAMAAQAMAAAIgGQAIgGAAgKQAAgIgHgGQgHgGgMAAQgTAAgOANIgHgJQAKgIAIgEQALgEALAAQASAAALAJQAKAJABANQAAATgWAJQALACAHAHQAGAIAAAKQAAAOgLAJQgLAKgSAAQgbAAgVgTg");
	this.shape_31.setTransform(-59.9,-20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text3, new cjs.Rectangle(-64.3,-26.2,125.7,53.6), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AAZArIAAhDIgyBDIgMAAIAAhVIANAAIAABDIAyhDIAMAAIAABVg");
	this.shape.setTransform(18.1,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AAXArIgdgnIgSASIAAAVIgNAAIAAhVIANAAIAAAxIAtgxIAQAAIgkAlIAlAwg");
	this.shape_1.setTransform(8.8,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgqA5IAAhvIANAAIAAARQAMgTATAAQARAAAMAMQAMANAAAUQAAASgMANQgMAMgRAAQgTAAgMgSIAAArgAgVgjQgJAKAAAOQAAANAJAJQAJAKAMAAQANAAAIgJQAJgJAAgOQAAgQgJgIQgJgJgMAAQgMAAgJAJg");
	this.shape_2.setTransform(-1.7,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgfAgQgNgOAAgSQAAgRAOgNQAMgOASAAQATAAANAOQAMAMAAASQAAASgMAOQgOAMgSAAQgSAAgNgMgAgVgWQgKAIABAOQgBAOAKAJQAIAKANAAQAOAAAJgKQAIgJABgOQAAgNgJgJQgLgKgMAAQgNAAgIAKg");
	this.shape_3.setTransform(-12.7,19.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AgfAvQgMgMAAgXIAAgNIACgMIADgMIAFgKQAEgFAFgDQAFgDAIgCIAvgLIACALIgtALQgMADgHAIQgFAHgBAMQAMgSAWAAQARAAANAMQALANAAAQQAAASgMANQgMANgTAAQgSAAgNgNgAgVgFQgIAIAAAOQAAANAIAKQAJAJAMAAQAOAAAIgJQAIgJAAgOQAAgNgIgJQgKgKgMAAQgNAAgIAKg");
	this.shape_4.setTransform(-23.3,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgmA0IAEgKQAHADAGAAQAFAAAFgEQADgCAFgKIgnhUIAOAAIAeBGIAbhGIAOAAIgkBXQgFAOgGAFQgHAFgJAAQgJAAgJgEg");
	this.shape_5.setTransform(-33.7,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgkArIAAhVIAoAAQAMAAAJAGQAHAGAAAJQAAAOgOAGQATAFAAAPQAAALgJAGQgHAHgPAAgAgYAgIAcAAQAJAAAFgEQAGgEAAgHQAAgGgGgDQgFgEgLAAIgaAAgAgYgFIAaAAQAIAAAFgEQAEgEAAgGQABgFgFgEQgEgDgJAAIgaAAg");
	this.shape_6.setTransform(51.3,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AgfAgQgMgNgBgTQAAgSANgMQANgOASAAQATAAANANQANAOAAARQgBASgNANQgMAOgTAAQgSAAgNgNgAgWgXQgIAKgBANQABAOAIAKQAKAJAMAAQANAAAJgJQAJgKAAgOQAAgNgJgKQgJgJgNAAQgNAAgJAJg");
	this.shape_7.setTransform(40.9,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAYArIAAhKIgwAAIAABKIgMAAIAAhVIBJAAIAABVg");
	this.shape_8.setTransform(30.4,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AAZArIAAhDIgyBDIgMAAIAAhVIANAAIAABDIAyhDIAMAAIAABVg");
	this.shape_9.setTransform(20.1,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AgGArIAAhKIgeAAIAAgLIBJAAIAAALIgeAAIAABKg");
	this.shape_10.setTransform(10.7,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAaArIgagjIgaAjIgOAAIAigrIghgqIAPAAIAYAhIAZghIAOAAIggAqIAiArg");
	this.shape_11.setTransform(-3.1,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgbAgQgMgMAAgUQAAgTALgMQANgNAQAAQARAAAMANQAKANAAATIAAAEIhDAAQACANAIAIQAJAIALAAQAPAAALgNIAIAIQgOAQgVAAQgQAAgNgNgAgRgZQgIAIgCANIA2AAQAAgMgIgJQgGgIgNAAQgKAAgHAIg");
	this.shape_12.setTransform(-12.4,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgaAfQgMgMAAgTQAAgSAMgMQANgOASAAQAUAAAOAQIgIAIQgMgMgPAAQgLAAgJAJQgJAKAAANQAAAOAJAKQAJAJAMAAQAOAAAMgNIAIAIQgPARgTAAQgSAAgNgOg");
	this.shape_13.setTransform(-21.9,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AgkArIAAhVIApAAQALAAAIAGQAIAGAAAJQAAAOgOAGQATAFAAAPQAAALgJAGQgHAHgPAAgAgYAgIAcAAQAJAAAFgEQAGgEAAgHQgBgGgFgDQgFgEgKAAIgbAAgAgYgFIAaAAQAJAAAEgEQAEgEAAgGQABgFgFgEQgFgDgHAAIgbAAg");
	this.shape_14.setTransform(-31.3,-0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#706F6F").s().p("AAZArIAAgfIgYAAIgWAfIgQAAIAaghQgKgCgGgIQgHgFAAgKQAAgMAJgHQAJgIAPAAIAnAAIAABVgAgQgaQgFADAAAIQAAAIAGAEQAGAEAJAAIAZAAIAAggIgaAAQgJAAgGAFg");
	this.shape_15.setTransform(-46.6,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706F6F").s().p("AgrAqIACgLIAGABIAGgBQADgBACgDQADgEACgHIACgTIABgnIA8AAIAABUIgNAAIAAhJIgjAAIAAACQAAATgCANQgBAPgCAHQgDAIgEAEQgDAEgEABIgJABg");
	this.shape_16.setTransform(-56.8,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#706F6F").s().p("AAjA1IAAgVIhEAAIgDAVIgKAAIAAggIAJAAQAMgVAAglIAAgPIA7AAIAABJIANAAIgCAggAgNgdQAAAfgKATIAtAAIAAg+IgjAAg");
	this.shape_17.setTransform(-66.2,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#706F6F").s().p("AAZArIAAhDIgxBDIgNAAIAAhVIANAAIAABDIAxhDIANAAIAABVg");
	this.shape_18.setTransform(71.1,-20.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#706F6F").s().p("AgqAqIABgLIAGACIAGgBIAFgGQADgEABgHQACgHABgLIABggIAAgHIA7AAIAABUIgMAAIAAhJIgjAAIgBAiQgCANgCAIQgCAJgEADQgFAFgDABQgEACgFgBg");
	this.shape_19.setTransform(60.1,-20);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#706F6F").s().p("AgbAgQgNgLAAgVQAAgSAMgNQALgNASABQASgBALANQALAOgBASIAAAEIhDAAQACANAIAIQAJAIALAAQAOAAANgNIAIAHQgPAQgVABQgRAAgMgNgAgRgZQgIAJgCAMIA3AAQgCgNgHgIQgHgIgMAAQgKAAgHAIg");
	this.shape_20.setTransform(50.9,-20.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#706F6F").s().p("AAjA1IAAgVIhFAAIgCAVIgKAAIAAggIAJAAQALgUAAgnIAAgOIA8AAIAABJIANAAIgCAggAgNgdQAAAfgKATIAsAAIAAg+IgiAAg");
	this.shape_21.setTransform(40.9,-19);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#706F6F").s().p("AgfAfQgNgMABgTQgBgRANgOQANgNATABQASgBANANQANANAAASQAAATgNAMQgOANgSABQgSgBgNgNgAgWgXQgIAKgBANQAAANAKAKQAJAKANAAQANAAAJgKQAIgJAAgOQAAgNgJgKQgIgKgOAAQgNAAgJAKg");
	this.shape_22.setTransform(30.9,-20.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#706F6F").s().p("AAfArIAAhAIgfAqIgfgqIAABAIgMAAIAAhVIAMAAIAfAsIAfgsIANAAIAABVg");
	this.shape_23.setTransform(20.1,-20.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#706F6F").s().p("AAfArIAAhAIgfAqIgfgqIAABAIgMAAIAAhVIAMAAIAfAsIAggsIAMAAIAABVg");
	this.shape_24.setTransform(3.5,-20.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#706F6F").s().p("AgbAgQgNgMABgUQgBgSAMgNQALgNASABQASgBALANQALANgBATIAAAEIhDAAQACANAIAIQAJAIALAAQAPAAAMgNIAIAHQgPAQgUABQgSAAgMgNgAgSgZQgHAJgCAMIA2AAQAAgMgHgJQgIgIgLAAQgKAAgJAIg");
	this.shape_25.setTransform(-7.2,-20.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#706F6F").s().p("AgbAlQgJgHAAgNQgBgOALgFQAKgIAQAAQAKAAAPAEIAAgDQAAgLgHgGQgGgGgMAAQgMAAgNAGIgEgKQAQgHAOAAQASAAAJAJQAKAJgBAQIAAAzIgMAAIAAgMQgLAOgTAAQgNAAgJgHgAgRAEQgGAFgBAIQAAAIAHAEQAFAFAKAAQALAAAIgHQAIgGAAgKIAAgIQgNgDgMAAQgLAAgGAEg");
	this.shape_26.setTransform(-17.2,-20.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#706F6F").s().p("AgcArIAAhVIA5AAIAAAMIgtAAIAABJg");
	this.shape_27.setTransform(-24.4,-20.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#706F6F").s().p("AgbAlQgJgHAAgNQgBgOAKgFQALgIAQAAQAKAAAPAEIAAgDQAAgLgHgGQgGgGgMAAQgMAAgOAGIgDgKQAQgHAOAAQASAAAJAJQAJAJAAAQIAAAzIgMAAIAAgMQgMAOgSAAQgMAAgKgHgAgRAEQgHAFAAAIQAAAHAGAFQAGAFAKAAQALAAAIgHQAIgGAAgKIAAgIQgNgDgMAAQgLAAgGAEg");
	this.shape_28.setTransform(-33.7,-20.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#706F6F").s().p("AgqAqIABgLIAGACIAGgBIAFgGQADgDABgIIADgSIABgnIA7AAIAABUIgNAAIAAhJIgiAAIAAACQAAATgBANIgEAVQgCAIgEAEQgFAFgDABQgEACgFgBg");
	this.shape_29.setTransform(-44,-20);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#706F6F").s().p("AAjA1IAAgVIhFAAIgCAVIgKAAIAAggIAJAAQALgUAAgnIAAgOIA8AAIAABJIANAAIgCAggAgNgdQAAAfgKATIAsAAIAAg+IgiAAg");
	this.shape_30.setTransform(-53.4,-19);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#706F6F").s().p("AgbAgQgMgLAAgVQAAgSALgNQALgNARABQAUgBAKANQAKAOABASIgBAEIhDAAQABAMAJAJQAJAIALAAQAPAAAMgNIAIAHQgQAQgUABQgRAAgMgNgAgSgZQgIAJgBAMIA2AAQgBgNgHgIQgHgIgMAAQgJAAgJAIg");
	this.shape_31.setTransform(-63.1,-20.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#706F6F").s().p("AgqA5IAAhvIANAAIAAARQAMgTATAAQARAAAMAMQAMANAAAUQAAASgMANQgMAMgRAAQgTAAgMgSIAAArgAgVgjQgJAKAAAOQAAANAJAJQAJAKAMAAQANAAAIgJQAJgJAAgOQAAgPgJgJQgJgJgMAAQgMAAgJAJg");
	this.shape_32.setTransform(-73.3,-18.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#706F6F").s().p("AAgA6IAAhnIhAAAIAABnIgMAAIAAhzIBaAAIAABzg");
	this.shape_33.setTransform(-85.2,-21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(-89.8,-27.4,164.6,53.9), null);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgGAJIAAgRIANAAIAAARg");
	this.shape.setTransform(26.2,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgcArIAAhVIA5AAIAAAMIgsAAIAABJg");
	this.shape_1.setTransform(22.3,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgeAyQgMgJAAgOQgBgLAHgGQAFgHAMgEQgUgJAAgSQAAgNAMgJQAMgJAPABQAQgBAMAJQAMAJgBANQAAASgTAJQAYAIgBAUQAAAOgMAJQgMAKgTgBQgSABgMgKgAgVALQgJAGAAAKQAAAJAJAGQAIAGANAAQANAAAJgGQAIgGAAgJQAAgLgIgFQgKgHgMAAQgMAAgJAHgAgSgpQgIAGABAJQgBAIAIAGQAHAHALAAQALAAAIgHQAHgGABgJQgBgJgHgFQgIgGgLAAQgLAAgHAGg");
	this.shape_2.setTransform(7.9,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgiAqQgOgRAAgZQAAgYAOgRQANgSAVAAQAWAAANARQAOASAAAYQAAAZgOARQgNASgWAAQgVAAgNgSgAgZghQgJAOAAATQAAATAKAPQAJAOAPAAQAQAAAKgOQAJgNAAgVQAAgSgKgPQgJgOgQAAQgPAAgKAOg");
	this.shape_3.setTransform(-3.3,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AgnAuIAHgLQAOANAPAAQAOAAAJgOQAKgOAAgUIAAgCQgMASgUAAQgRAAgMgLQgLgJAAgQQAAgQAMgMQALgLATAAQATAAAMAOQAMANAAAeQAAAbgNARQgNASgVAAQgSAAgRgOgAgVgnQgIAIAAALQAAAMAIAGQAIAGANAAQAMAAAHgHQAIgHAAgLQAAgLgIgIQgIgHgMAAQgNAAgHAIg");
	this.shape_4.setTransform(-14.5,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AAGA6IAAhmIgVAHIgDgKIAbgKIAKAAIAABzg");
	this.shape_5.setTransform(-23.4,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgkArIAAhVIApAAQAMAAAIAGQAHAGAAAKQAAANgOAGQATAFAAAPQAAALgJAGQgIAHgOAAgAgYAgIAcAAQAKAAAEgEQAGgEAAgHQAAgFgGgEQgFgEgLAAIgaAAgAgYgFIAaAAQAHAAAGgEQAEgDAAgHQABgFgFgDQgEgEgJAAIgaAAg");
	this.shape_6.setTransform(-35.3,21.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AgZAgQgNgOgBgSQABgRANgNQAMgOARAAQAVAAAOAPIgJAKQgLgNgPAAQgMAAgIAKQgKAJABANQgBAOAKAKQAIAKANAAQAOAAAMgNIAIAHQgOAQgVAAQgSABgLgNg");
	this.shape_7.setTransform(25.4,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AgfAgQgMgNAAgTQAAgRAMgNQANgOASAAQATAAAMAOQANANABARQgBASgNAOQgMANgTgBQgTABgMgNgAgWgWQgJAJAAANQABAOAIAKQAJAKANAAQANAAAJgKQAJgJAAgPQAAgNgJgJQgJgKgNAAQgNAAgJAKg");
	this.shape_8.setTransform(15.3,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgaAgQgMgOAAgSQAAgRAMgNQANgOASAAQAUAAAOAPIgIAKQgMgNgPAAQgLAAgJAKQgJAJAAANQAAAOAJAKQAJAKAMAAQANAAANgNIAIAHQgOAQgUAAQgSABgNgNg");
	this.shape_9.setTransform(5.3,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AgbAhQgMgNAAgUQAAgTALgLQANgOAPAAQASAAAMAOQAKAMAAATIAAAFIhDAAQACAMAIAIQAJAHAKABQAQAAALgMIAIAGQgOARgVgBQgQABgNgMgAgSgZQgHAJgCAMIA2AAQAAgMgIgJQgGgHgNAAQgKAAgIAHg");
	this.shape_10.setTransform(-4.4,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AgqAqIABgLIAHABIAFgBQACAAAEgEQACgGABgFQACgKABgKIABgfIAAgHIA7AAIAABUIgMAAIAAhJIgjAAIAAACQAAATgBANQgCAPgCAHQgCAHgEAFIgIAFIgJABg");
	this.shape_11.setTransform(-15.1,1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AAkArIAAhVIAMAAIAABVgAgwArIAAhVIANAAIAAAgIAXAAQAOAAAJAHQAJAFAAANQAAAMgIAIQgJAIgNAAgAgjAfIAXAAQAKAAAEgEQAFgEABgIQAAgHgGgEQgEgEgLAAIgWAAg");
	this.shape_12.setTransform(-25.7,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AAYArIAAhKIgwAAIAABKIgMAAIAAhVIBJAAIAABVg");
	this.shape_13.setTransform(-37.1,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AAZArIAAhDIgyBDIgMAAIAAhVIANAAIAABDIAyhDIAMAAIAABVg");
	this.shape_14.setTransform(38.7,-18.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#706F6F").s().p("AgqAqIABgLIAGABIAGgBQACgBADgDQADgFABgGQADgJAAgLIABgnIA7AAIAABVIgMAAIAAhJIgjAAIAAACQAAATgCANQgBAPgCAHQgDAIgDAEQgEAEgEABQgEACgFAAg");
	this.shape_15.setTransform(27.8,-18);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706F6F").s().p("AgbAlQgKgHABgNQAAgOAKgGQAJgHARAAQANAAAMAEIAAgDQAAgLgGgGQgHgGgMAAQgMAAgNAGIgEgKQAOgHAQAAQATAAAIAJQAKAJAAAQIAAAzIgNAAIAAgMQgLAOgTAAQgNAAgJgHgAgRAEQgGAFgBAIQAAAIAHAEQAGAFAIAAQAMAAAIgHQAIgGAAgKIAAgIQgOgDgLAAQgLAAgGAEg");
	this.shape_16.setTransform(18.4,-18.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#706F6F").s().p("AAjA2IAAgWIhFAAIgCAWIgKAAIAAghIAJAAQALgUAAgmIAAgQIA8AAIAABKIANAAIgCAhgAgNgdQAAAegKAUIAsAAIAAg+IgiAAg");
	this.shape_17.setTransform(8.8,-17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#706F6F").s().p("AgiAgIAHgJQAOALANgBQAJAAAGgDQAHgFAAgHQAAgGgGgEQgGgEgKAAIgKAAIAAgJIAKAAQAIAAAGgFQAFgDAAgHQAAgGgFgDQgFgDgIAAQgPgBgKAJIgGgJQANgLATAAQAOABAIAFQAJAIAAAJQAAAOgOAGQAQAEAAAPQAAALgKAIQgJAHgPAAQgTAAgQgMg");
	this.shape_18.setTransform(-0.5,-18.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#706F6F").s().p("AgfAgQgMgOAAgSQAAgSAMgMQANgOASAAQATAAAMAOQANAMABASQgBASgNAOQgNANgSgBQgSABgNgNgAgWgXQgJAJAAAOQABAOAIAKQAJAJANAAQAOAAAIgJQAJgKAAgOQAAgNgJgJQgJgKgNAAQgNgBgJAKg");
	this.shape_19.setTransform(-9.5,-18.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#706F6F").s().p("AgaAgQgMgOAAgSQAAgSAMgMQANgOARAAQAVAAAOAPIgIAJQgMgNgPABQgMgBgIAKQgJAKAAANQAAAOAJAKQAJAJAMAAQAOAAAMgNIAIAIQgPAQgUAAQgRABgNgNg");
	this.shape_20.setTransform(-19.5,-18.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#706F6F").s().p("AAkArIAAhVIANAAIAABVgAgwArIAAhVIANAAIAAAgIAXAAQAOAAAJAHQAKAFAAANQAAANgJAHQgJAIgOAAgAgjAgIAXAAQAKAAAFgFQAFgEAAgIQAAgHgGgEQgEgEgKAAIgXAAg");
	this.shape_21.setTransform(-35.5,-18.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#706F6F").s().p("AArA6IAAhdIgrA9IAAAAIgqg9IAABdIgMAAIAAhzIANAAIApA+IAqg+IANAAIAABzg");
	this.shape_22.setTransform(-49,-19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(-54.5,-25.4,97.1,51.4), null);


(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hoov2();
	this.instance.parent = this;
	this.instance.setTransform(-21,32);

	this.instance_1 = new lib.pic2a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-97,-112.5);

	this.instance_2 = new lib.pic2b();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-53,-70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-97,-112.5,194,225), null);


(lib.pic1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AskPZIAA+xIZJAAIAAexg");
	mask.setTransform(0.5,-13.5);

	// Слой 1
	this.instance = new lib.pic1();
	this.instance.parent = this;
	this.instance.setTransform(-80,-121);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic1_1, new cjs.Rectangle(-80,-112,160,197.1), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlsFtQiXiXgBjWQABjVCXiXQCXiXDVgBQDWABCXCXQCYCXAADVQAADWiYCXQiXCXjWABQjVgBiXiXgAhuAqIhnGEQBjAzByAAQDHAACNiNQCMiNABjHQgBhGgThEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliKgAmIkUQhYB9AACXQAABDASA+ICXgwICPoTQiLA0hVB6gAh+nPIiPITIB8goIBVk6IAqgMIhUE4IIrivQgziOh6hXQh+haiaAAQhAAAg+ARg");
	mask.setTransform(51.7,51.7);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, null, null);


(lib.ClipGroup_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmhGXQhShVguhpQguhrAAhuQAAj0CuitQCtiuD0AAQD2AACtCuQCtCtAAD0QAAD2itCtQitCtj2AAQjvAAiyi5g");
	mask.setTransform(118.4,118.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D52E3F","#D52E3F","#CE2E3D","#CC2E3C","#BA2E36","#B72C35","#AC2B30","#A62A2E","#9B2829","#76231D"],[0,0.047,0.047,0.078,0.161,0.439,0.502,0.694,0.835,1,1],43,42.9,-52.8,-52.9).s().p("AyfAAISfyfISgSfIygSgg");
	this.shape.setTransform(118.4,118.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_1, new cjs.Rectangle(59.2,59.2,118.4,118.4), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmYGZQipiqAAjvQAAjuCpiqQCqipDuAAQDvAACqCpQCqCqgBDuQABDviqCqQiqCqjvgBQjuABiqiqg");
	mask.setTransform(113.1,113.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D52E3F","#C82D3A","#A5292D","#9B2829","#76231D"],[0,0.514,0.663,0.933,1,1],-37.8,-51.3,55.1,74.6).s().p("AxqiqIUVvAIPAUVI0VPAg");
	this.shape.setTransform(113.1,113.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(55.3,55.3,115.7,115.7), null);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmRGRQimimAAjrQAAjqCminQCnilDqAAQDrAACmClQCnCnAADqQAADrinCmQimCnjrAAQjqAAining");
	mask.setTransform(111,111);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D52E3F","#C82D3A","#A5292D","#9B2829","#76231D"],[0,0.224,0.459,0.89,1,1],-37,-50.2,54.1,73.3).s().p("AxVinIT9uuIOuT8Iz9Ovg");
	this.shape.setTransform(111,111);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, new cjs.Rectangle(54.3,54.3,113.6,113.5), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPAPQgLgMAEgYIAfAAQABARAPgEQAJgCAHgLIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAIgRAHQgIACgHAAQgNAAgIgJg");
	mask.setTransform(8.8,2.2);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, null, null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AidBxQgKgNAFgaQAFgbASgVQASgWAXgGQAIgCAHAAQAQAAAHAMQAHANgEAWQgFAWgMATQgNATgSAKgAhnAaQgVAHgGAgQgFAbAOAAIAFgBQAVgGAGggQADgSgFgGQgDgEgEAAIgFABgAjZBxQAHgJADgQQADgRgFgHQgEgFgIADQgIACgHAIQgJAKgDASQgCAJABAEIggAAIABgEQAGgbARgVQASgWAYgHQAIgCAGAAQAQAAAHANQAHANgEAXQgEASgJAQgAgsgTIAjgKIADBDIABAAIAihRIAkgLIg/CHIgkANgABRg8IBGgVIgGAfIglANIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hcIBDgTIALgBQALAAAFAGQAFAHgDANQgFAYgSALQANACgDAYIgBAMQgBAJABADIgjAJIABgRQABgLgBgEQgCgHgJADIgQABIgKAxIgkAKgADlhOIgQAFIgFAYIASgFQAPgEADgMQACgJgIAAIgJABg");
	mask.setTransform(28.2,11.3);

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, null, null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjvfnMAAAg/NIHfAAMAAAA/Ng");
	mask.setTransform(241.5,202.3);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(184,184,184,0.2)").p("AROAAMgibAAA");
	this.shape.setTransform(118.4,231.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(183,183,183,0.271)").p("AROAAMgibAAA");
	this.shape_1.setTransform(118.4,214.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(182,182,182,0.345)").p("AROAAMgibAAA");
	this.shape_2.setTransform(118.4,197.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(181,181,181,0.416)").p("AROAAMgibAAA");
	this.shape_3.setTransform(118.4,180.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(180,180,180,0.49)").p("AROAAMgibAAA");
	this.shape_4.setTransform(118.4,163.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(179,179,179,0.561)").p("AROAAMgibAAA");
	this.shape_5.setTransform(118.4,147);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(178,178,178,0.635)").p("AROAAMgibAAA");
	this.shape_6.setTransform(118.4,130.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(177,177,177,0.706)").p("AROAAMgibAAA");
	this.shape_7.setTransform(118.4,113.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(176,176,176,0.78)").p("AROAAMgibAAA");
	this.shape_8.setTransform(118.4,96.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(175,175,175,0.851)").p("AROAAMgibAAA");
	this.shape_9.setTransform(118.4,79.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(174,174,174,0.925)").p("AROAAMgibAAA");
	this.shape_10.setTransform(118.4,62.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#ADADAD").p("AROAAMgibAAA");
	this.shape_11.setTransform(118.4,45.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFF9ED","#FFFCE8","#FFFFE5","#F8F8E1","#E4E5D5","#CECFC7"],[0.161,0.314,0.643,0.737,0.878,1],-110.6,0,110.6,0).s().p("AvJfMQg4AAgogoQgogpAAg5MAAAg6DQAAg5AogpQAogoA4AAMAgbAAAMAAAA+Xg");
	this.shape_12.setTransform(118,200.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BDC8A2","#C7D1AC","#E0E5C5","#F1F4D7","#FCFCE2","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.196,0.298,0.404,0.514,0.643,0.831,1],-110.6,0,110.6,0).s().p("AvJfMQg5AAgngoQgogpAAg5MAAAg6DQAAg5AogpQAngoA5AAMAgbAAAMAAAA+Xg");
	this.shape_13.setTransform(116.9,200.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFF9ED","#FFFCE8","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.314,0.643,0.831,1],-110.6,0,110.6,0).s().p("AvJfMQg4AAgogoQgogpAAg5MAAAg6DQAAg5AogpQAogoA4AAMAgbAAAMAAAA+Xg");
	this.shape_14.setTransform(116.1,200.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#BDC8A2","#C7D1AC","#E0E5C5","#F1F4D7","#FCFCE2","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.196,0.298,0.404,0.514,0.643,0.831,1],-110.6,0,110.6,0).s().p("AvJfMQg4AAgogoQgogpAAg5MAAAg6DQAAg5AogpQAogoA4AAMAgbAAAMAAAA+Xg");
	this.shape_15.setTransform(115.4,200.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFF9ED","#FFFCE8","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.314,0.643,0.831,1],-110.6,0,110.6,0).s().p("AvJfMQg4AAgogoQgogpAAg5MAAAg6DQAAg5AogpQAogoA4AAMAgbAAAMAAAA+Xg");
	this.shape_16.setTransform(114.6,200.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#BDC8A2","#C7D1AC","#E0E5C5","#F1F4D7","#FCFCE2","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.196,0.298,0.404,0.514,0.643,0.831,1],-110.6,0,110.6,0).s().p("AvJfMQg5AAgngoQgogpAAg5MAAAg6DQAAg5AogpQAngoA5AAMAgbAAAMAAAA+Xg");
	this.shape_17.setTransform(113.9,200.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FFF9ED","#FFFCE8","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.314,0.643,0.831,1],-110.6,0,110.6,0).s().p("AvJfMQg5AAgngoQgogpAAg5MAAAg6DQAAg5AogpQAngoA5AAMAgbAAAMAAAA+Xg");
	this.shape_18.setTransform(113,200.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#BDC8A2","#C7D1AC","#E0E5C5","#F1F4D7","#FCFCE2","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.196,0.298,0.404,0.514,0.643,0.831,1],-110.6,0,110.6,0).s().p("AvJfMQg5AAgogoQgngpAAg5MAAAg6DQAAg5AngpQAogoA5AAMAgbAAAMAAAA+Xg");
	this.shape_19.setTransform(112.4,200.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FFF9ED","#FFFCE8","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.314,0.643,0.831,1],-113.7,0,113.7,0).s().p("AvofMQg5AAgngoQgogpAAg5MAAAg6DQAAg5AogpQAngoA5AAMAhZAAAMAAAA+Xg");
	this.shape_20.setTransform(114.4,200.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#BDC8A2","#C7D1AC","#E0E5C5","#F1F4D7","#FCFCE2","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.196,0.298,0.404,0.514,0.643,0.831,1],-113.7,0,113.7,0).s().p("AvofMQg4AAgogoQgogpAAg5MAAAg6DQAAg5AogpQAogoA4AAMAhZAAAMAAAA+Xg");
	this.shape_21.setTransform(113.7,200.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(217.5,1,12.2,399.3), null);


(lib.ghghj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAAIAFgHQADgHAFAFIABABQAFAEABADQAAACgFAFQgGAGgHAAQgFgGADgGg");
	this.shape.setTransform(-0.4,-22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAQIgBgCQgHgHAFgIIAEgIQAEgGAEAAIAHADIABABQAHAGAAAEQABAFgHAGQgGAGgKAAg");
	this.shape_1.setTransform(-0.4,-22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFAPQgKgNAFgKIACgCIAKgGQAEgDADAEQADADAAAHIgGATQgBAEgEAAIgBAAQgCAAgDgDgAAAACQAFgEgDgGQgDAFABAFg");
	this.shape_2.setTransform(-1.4,-11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIASQgMgPAGgMIABgBIADgEIAKgGIAFgCQAEAAAEAEQADAFABAIIAAAAIgBABIgBAEIgFAQQgDAHgHAAQgEAAgEgFg");
	this.shape_3.setTransform(-1.4,-11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbBHIAlhkIgHgBQgDAAgDgEQgCgDACgFQAKgSALgKQAEgCACACQAEABAAAEQAAAKgFARQgHAXgLAXIgeA9IgCADgAAGgnIAAAEIAFABIAGgUIgBgBQgGAFgEALg");
	this.shape_4.setTransform(-35.4,-19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggBIIAlhiIgBAAIgBgFIAAAFQgGAAgDgHQgEgGAFgFQAIgSANgLQADgDAEAAIADABQAHACAAAIQAAAGgEASIgBADQgHAWgLAZIgeA+IgCACIAAAAIgDAEg");
	this.shape_5.setTransform(-35.5,-19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZBBIADgHIAGgOIAKgeIAGgOIAKgdIgGgBQgNgBAHgNIAOgTIAFgFQADgEAEACQAFACgBAEIgFAaQgFATgOAdIgcA6IgDAEQAAgDACgEgAAGgmQgBAGAGgCIAGgTIgBgBQgIAHgCAJg");
	this.shape_6.setTransform(43.9,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfBGQgBgEAEgIIACgEIAehRIgBAAQgHgCgDgGQgDgFAFgIIANgUIAGgFQAEgFAEAAIAEABQAHAFgBAHIgFAaQgEASgPAeIgcA7IgEAFIgHAGg");
	this.shape_7.setTransform(43.9,6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiA1QgJgNgBgLIgEg0IAAgCIAAgPQgBgIgEgGQAIgHADAJQADAGAAAGIAGBIQAAAFADAGQAEAGAHgFQAGgGAHgLIAKgSIAPgaQAJgPAPgSIAHgFIADAAIABACIgLAOIglA+QgGAMgJAMQgCADgIAGQgDACgDAAQgFAAgEgFg");
	this.shape_8.setTransform(1,-56.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglA4QgKgOgBgMIgEg1IAAAAIAAgCIAAgFQABgPgFgHIgCgDIADgCQAEgEAEAAQAHAAADAIQACAFABAIIAFBIQABAFADADQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIADgBQAEgEAHgMIADgDIAXgpQAJgQAPgRIAIgHIADAAIAGAAIACAHIgBABIgLAOIgkA/QgGALgKANQgEAFgHAEQgDADgGAAQgHAAgFgGg");
	this.shape_9.setTransform(0.9,-56.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjA9QgKgCgHgIQgGgHgBgKQgBgTAKgWQAHgRATgcQAGgIAIgBQAHAAADAEQAEAEgBAHIgFAXQgCALgHAFIgCgBIAEgMQAFgQAAgJIgBgHQgJAFgDAEQgaAigGAbQgBAIABAJQACAKAIAFQAJAEAJgEQASgIATgRIAogbQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIgGAFIg2AsIgOAKQgHAFgHAAIgHgBg");
	this.shape_10.setTransform(33.6,3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4A2QgIgHgBgNQgBgUAKgXQAIgSATgbQAHgKAKgBIACAAQAJAAADAFQAFAGgCAJIgDAPIgCAIQgCALgIAIIgCABIgIgDIAGgQIAAgBQAFgQgBgHIAAAAIgGAFQgYAggGAbQgBAHABAIQACAOANAAQAEAAADgCQARgIATgQIAmgaIACgBQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIADABIAHACIgKAKIg2AtIgPAKQgIAFgJAAQgQAAgKgMg");
	this.shape_11.setTransform(33.8,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgyBGIAAgPIAAgDQAAgGABgIIACgOQADglgCgQIAAgMQAAgDAEgCQADgBACADIAFALQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQgCAGAAAHIgBAOIgEApIgBAVQAOgSAGgKIANgYIAQgeIAUgdIANgVQADgEACAAQABAAADAGIgSAbQgUAggIAQQgIATgPAYIgVAdIgEAEQgGgDgBgGg");
	this.shape_12.setTransform(10.2,-19.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AguBSQgIgEAAgIIgBgSQAAgIACgLIACgKIAAgFQADgfgCgQIgBgIIABgFQgBgFAHgDIADgBQAFAAACAFIAGAKQABAEgBADQgDAGAAAMIgFA3QAJgKADgGIARgfIAMgYIAUgdIADgGIADgEIABgDIAGgIQAEgFAEAAQAFgBADAJIACACIgWAhQgTAfgHANQgIASgPAZQgFAJgKAMIgGAIIgHAGg");
	this.shape_13.setTransform(10.3,-19.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYA/QgMgCgHgLIgDgGIgGAHIgHgBQABgGAGgHQACgDABgGIABgUQACgIAKgQQAKgOALgMQANgPALgEQAFgCAFAEQAHAGABAFQABAFgCADQgFAMgEAFQgNATgTARIgXAVIACAJQAGANANgCQALgCAFgFIAUgPIATgPQANgKAGgGIACgBQABADgCACIgzAvQgLALgRAAIgDAAgAAHgzQgPANgFAGIgGAIQgJALgIAQQgEAJAAAMIATgRQARgQALgOQAEgFAIgPQAEgFgFgEQgBgBgIAAg");
	this.shape_14.setTransform(14.2,-62.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYBCQgNAAgJgOIgDADIgDAAIgFAAIgGgCIAAgEQABgIAHgHQACgDAAgDIACgVQABgKALgPQAJgOAMgNQAOgPAMgGIAFAAQAFAAAEAEQAIAGABAHQACAGgCAFQgGAMgEAFQgNATgUASIgVAUIAAAAIABAEQAFAJAHAAIADAAQAKgBAEgEIAkgcIAWgRIACgCIADgBIACADQAFAEgGAFIgzAvQgMAMgSAAgAAKgwQgMAKgHAIIgGAIQgJAMgIAPIgDAIIALgKQARgQALgNQAFgHAFgJIACgDQAAgBAAAAQAAgBAAAAQABgBgBAAQAAAAAAgBIgFAAg");
	this.shape_15.setTransform(14.1,-62.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgzDgIgBgNQACgmAHglIAIgsIAXh4IAGgcIAFgYIALg+QALgiADgSIAFgOQAFgIABgFIAIgJIAKADQgCAFgHACIgFALQgIAWgEAQIhCFQQgGAhgBAfIAAACQgEgCgBgFg");
	this.shape_16.setTransform(-40.9,-54.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgxDqQgGgEAAgGIAAgCIgBgLQABglAIgnIALhAIABgDIAdiWIAahxQABgGAFgJIAFgNIADgEIAIgIIAPAEIgBAFQgBAGgIADIgEAJQgIAVgEAQIhCFQQgGAfgBAhIgBADIAAABIgDADg");
	this.shape_17.setTransform(-40.9,-54.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag1CSIAGg1IABgNIAVilQABgOAAgPQAAgEAFgGQABgCAEACQAHADAHgFIARgHIAcgQIADgCQABAAAAAAQABAAAAAAQABAAAAAAQABABABAAQAAABABAAQAAABAAABQAAAAAAABQgBAAAAABIgEAEIgrAZQgLAIgJgDIgMBlIgDAeIgNByIAAAGIAGAAIAsgQQAJgDAGgFIAFgEIAHAIIgEADQgRAKgUAFIgVAIIgTAGIgDAAQgFAAABgGg");
	this.shape_18.setTransform(-45.3,-1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag3CaQgDgDABgGIAGg0IAAgGIAVitQACgPAAgNQAAgGAFgGQACgDAEAAIAJACQADAAAEgCIAIgFIAIgDIAfgRQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAEAAACADQAFAGgFAFIgFAFIgrAYQgJAHgIAAIgBAAIgbDxIAsgPQAHgDAGgFIAEgCIACgBIADgDIAMAOIgDADIgCABIgDADQgSAKgUAFIgnAOIgEABQgFAAgCgDg");
	this.shape_19.setTransform(-45.3,-1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgyCQIAwgcQAIgGAJACIALhkIADgdIANh0IAAgGIgDAAIg0ATQgEABgEAEQgEAEgCgBIgFgEIgCgDIAEgDIBNgdQAIgCgBAIIgVCsIAAABIgIBYQAAAEgFAFQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgIgDgHAFIgRAHIgdAQIgDADQgJgEAHgFg");
	this.shape_20.setTransform(35.1,-28);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgzCcQgGgDAAgFQgBgFAGgDIAwgdQAGgFAIAAIABAAIABgOIAajhIAAgCIgxASIgHAFQgEAEgFAAQgDAAgEgFIgBgBIgCgCIgBgCIgBgCIADgEIAEgDIACAAIAXgKIA0gSIAEgBQAEAAADADQADAEgBAEIgUCsIAAABIgJBYQAAAHgGAFQgCACgDAAIgJgCIgGACIgJAEIgIAEIgiATg");
	this.shape_21.setTransform(35.1,-27.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhqBQQgEgCADgEQAFgJAEgUIAEgNIABgCIABgKQABgGACgEQACgDABgGIACgKIALg1QACgIAHgCIANgGQAKgFAJAFQAHACABAIQACAJgDAIQgGARgPAPIgXAYIgJAIIgDADIACACIAVAEIANAFQAKAEAdADQAcADAogBIAvgBIAAABIgDABIglAEQgRADghABQgWAAgQgDIgfgHIgYgGIgIgCIgCACIgQA1IgGgCgAhCguIACAHQgBAHgCABQgCABgDAHIgEAVQAGgCADgEIAageQAIgJABgPQABgEgCgCQgCgDgDAAQgLgBgEAHQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQgFACgBACQgBACAAAFIAFACQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQgCACgDAAIgEgBIgCAAg");
	this.shape_22.setTransform(31.6,-65.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhnBVIgFgCQgDgCgBgEQgBgCACgEQADgFACgKIAIgaIAAgBIABgBIAAgGQABgKADgFQACgCACgJIAMg7QACgLAKgDIALgFIABAAQAGgDAGAAQAEAAAHACQAKAEABALQABALgDAHQgGAQgPASIgeAdIgBABIAdAIQANAFAUACIAFAAQAQADAaAAIBJgCIADAAIACAIIgEABIAAAAIgDABIglAFQgYADgbAAIgFAAQgQAAgSgDIg8gOIgRA3gAg8gnQAAAIgFADIgCAEIAAABIgDALIAageQAGgHACgOQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAIgBgBIgCAAQgHAAgDAEQgCAEgEAAQgEABAAADIABAAQAHACABAEIABADIgCACQgCADgEAAIgCAAg");
	this.shape_23.setTransform(31.6,-65.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag3BUQgCgJACgLIAehYQAFgQAAgDQAAgDADgGQACgDADABQAEACAAACIACATQABAJgKgDIgeBYQgDAIADAIQADACADgEQAQgVADgFIAYgvIAVglIAIgTQABgEgBgFQAAgDACgCQAFgFAFgNQACgFACAAQADgBAFAEIgEAOIgPAkIgHAPIgGAVQgFAQADAcQABAGADADQADACAIgCIADAAIgCAEQgEAEgHABQgHAAgEgFQgDgEgBgJIgEgcIgFAKQgHAQgVAfQgEAFgJAIQgCADgFABIgEABQgFAAgCgHg");
	this.shape_24.setTransform(-13.1,-14.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag8BUQgCgKADgLIAdhYIACgFQADgJAAgEQAAgEADgFIABgCQACgFAFAAIADAAQAHAEAAAEIABAFIAAAFIABAJQABAFgDAEQgDADgDAAIgDgBIgBAEIgbBRQgCAFABAFIASgaIAcg1IAQgeIAIgSQABgDgBgFQAAgGAEgDQAFgFAEgLQADgHAGgBQADAAAGAEIADACIgGARIgVAzIgGAVQgFAPADAbQABAHADgBIAFAAIACgBIACAAIAGgBIgCAHIAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgFAGgKAAQgJABgFgHQgDgEgCgKIgCgQQgHARgUAdQgFAHgIAIQgDADgGABIgFAAQgJAAgDgKg");
	this.shape_25.setTransform(-13,-14.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag7BgQgMgDgDgLQgFgRADgZQAAgFAEgBQAGgCAGgFIAMgJQAbgUAUgIIAPgIQADgDAAgCQAGgdAAgLQAAgJgDgGQgEgGgGgCQgGgCgHAFQgNAIgNAOQgIAHgDAIQgCAFABACQABACAFAEQgDACgEgBIgGgDQgFgCADgHQAGgRAKgHIAUgSQAIgGAIgDQAEgCAIADQAIADADAFQAFAJABAKQABARgCAKIgDAOIAzgUQgCADgGADIgmAVQgIAFgCALQgGAVgLAVIgFAKQgUAagPANQgJAIgKAAIgFAAgAABgBQgaANgHAGIghAaQgCACgBADQgCANAFAQQABAFAFACQAEADAFgCQAJgCAJgJIAQgSQAPgTAHgWQAGgNABgJgAgaAIIABACIABgDIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_26.setTransform(23.9,-25.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag+BkQgPgEgDgMQgFgTACgZQABgIAGgCQAHgCAKgJIAGgEQAbgUAVgJQAGgCAIgGQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIACgJQADgSAAgMQAAgJgCgEQgDgGgHAAQgEAAgDADQgNAIgMANQgHAGgDAHIgBAFIAEADIAHAEIgGADQgEADgEAAQgDAAgGgEIgBAAQgJgEAFgLQAHgRAKgJIAIgHIAMgKQAIgGAKgEIAFgBQAGAAAGADQAIAEADAFQAFAJACAMQABARgDALIgBAGIABgBIA0gUIgEAJQgDAGgGADIgBAAIgfARIgDACIgEACQgGAEgCAJQgFAWgMAVIgBADIgEAIQgWAcgOAMQgLAJgLAAgAgGAGQgRAJgIAGIgiAaIgBADQgBALAEAQQABAGAGAAIADgBQAHgCAJgIIAPgRQAQgUAGgUIAFgPg");
	this.shape_27.setTransform(24.1,-25.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag3B8QABgFgDgMIAEgKIAFgJIADgHIANgtIAPguIAKgjIAMgzQABgFABgSQAAgEAEgEQACgEADACQADABABAEIABAJQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQgDADgBAFIgCAJIgaBjQgBAEABACIAJgKQALgRAVgRQAIgGAEgBQAMgCADAMQAEAOgEASQgKAigJAUQgMAZgGAbQgBAFACAEQAAABgBABQAAABgBAAQAAAAgBAAQgBAAgBgBQgEgDAAgDQgBgFABgEIAMgmIAMgbIANgwQACgLgFgLIgGACIgPAMQgRAPgOAWQgEAHgEAFQgFAHgEALIgPAzIgGAWIgEAIQgHgCABgEg");
	this.shape_28.setTransform(-29.1,-13.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgyCGQgLgDACgJQABgFgDgHIAAgDIgBgBIABgBIAFgLQACgHADgDIAehgIABgDIAVhSQACgJAAgMIAAgCQAAgGAFgFQADgDAEAAIADABQAFADABAEIABAJIAAABQAAAFgCACQgDADgBAHIgXBcIAAABQAKgQAUgQIACgBQAGgFAGgCIAFAAQAMAAAEANQAEASgFARQgJAfgKAXQgMAZgGAaQgBAEACADIABABIgBACQgCAFgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgFgEgCgFQAAgDABgIIABgBIALglIAMgbIANgvQABgIgCgIIgCAAIgOALQgVATgJASIgJANQgFAGgDAKIgUBJIgEAHIgBACIgCADg");
	this.shape_29.setTransform(-29.1,-13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAADcQgLgJgFgMQgGgOAAgVIgBgbQAAgRAEgjIAEgtIAFgdIABgGIgFABIgOALIgnAXQgJAFgCAFIgDACIgFgIQgDgEAEgBIAQgIIAGgEQAEgEARgIQAJgFAGgEIARgNQADgCACgIIAKgsQACgLAFgPIAIgZQAFgVALgUIAig+QACgGAGABIAJAAQADAFgGACQgIADgFALIgeA5QgHAOgKAkIgIAXIgMAvIAAAEQAGgCAGgFIALgIIAVgPIAVgSIABABQgDAGgLALIgvAmQgHAFgCAIIgHAoIgHBOIgBAmIAAAQIAEAXQADAJAIAIIAFAEIgCACIgDgBg");
	this.shape_30.setTransform(-32,-57.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgCDfQgMgIgGgOQgGgMgBgZIAAgbQAAgNADgnIAAgBIAJhHIgKAIIgeASIgKAFQgIAEgBADQgBACgDACIgBAAIgEADIgCgEIgCgCIgDgGIgBgGQACgEADgBIAPgIIACgBIADgCQAIgGAJgEIAFgDQAHgDAHgGIARgMQACgCACgFIAAgBIADgMIAGggQACgLAHgVIAGgTQAGgVALgVIAig+QADgHAIAAIACAAIALAAIABADQACAEgBADQgCAEgEABQgGACgGAKIgdA5QgHAOgJAfIgSBAIgBAFIAygmIAIgIIAHAGIgBADQgDAHgLAKIgBABIgcAYIgTAOIgBABQgFAEgCAFIgHApIgHBNIAAAaIAAARQgBAGABAEQABANACAJQACAIAHAHIAJAIIgCADQgDADgDAAIgFgCg");
	this.shape_31.setTransform(-32,-57.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhTBRQgMAAgGgOQgGgMACgLQABgEgBgFQgCgNAMgMIAZgXQAIgHAKgFQAKgEAJAHQALAHgBAPQAAAUgOATIgSAcQAKgEAJgIQANgLAZgfIAQgUQAJgMgDgOQgBgNAIgMQAFgHAKgEIANgHQANgHALAFIAIAFIAJAIQAEAEABAGQADAIgCAIQgDAOgIALQgTAYgSAKIgKAEQgIABgHgFQgGgFgBgJIgCgKQgFABgFAGIgSAZIgNAQQgIAJgSAPQgGAEgNAGQgJADgIAAIgEAAgAhXAWIgBABQgLAQAFAUQABAGAHAGQABABAEAAQAMgDAGgIIALgOQASgVAFgXIABgJQgBgHgGgDQgHgEgGADQgQAJgGAHIgCACQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIADAGIgEABIgDgBQgIAAgEALgAAggLIADAPQABAHAFADQAFADAHgEQANgJANgNQAKgJAFgLIAEgLQADgNgIgIQgPgQgTAKIgKAGQgKAFgFAPQAKACgGAHQgGAKAGAIIgCAAQgEAAAAADg");
	this.shape_32.setTransform(-17.5,-51.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhTBWQgOgBgIgQQgGgOABgMIABgIQgCgPANgNIAGgHIATgRQAIgGAMgGQAEgCAFAAQAHAAAGAFQAMAIAAASQAAAVgOAVIgJAMIADgCQANgLAZgeIABgBIAPgUQAHgKgCgNQgCgNAKgPQAGgJAKgDIANgIQAIgDAIAAQAHAAAFACQAGACADAEIADADQALAIACAJQACAJgCAJQgDAPgIAMQgUAZgTAKQgHADgEABIgEAAQgJABgHgHQgHgGgBgJIAAgGIgiAtIgBAAQgIAKgTAPQgFAEgPAHQgIAEgLAAgAhUAYIAAABQgKAPAEASQACAGAFAEIABAAQAKgCAFgHIALgPQASgVAFgVIAAgIQAAgDgDgDQgDgDgDAAIgDACIgCABQgOAHgGAFIgBABIABACIACAEIAAABIACAFIgGACIgDABIgDAAQgEgBgFAJgAAmgGIABAKQABAGAGAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQALgHAPgOQAJgKAFgJIAAgCIAEgIQADgLgHgGQgIgJgIAAQgFAAgIADIgKAHQgIAEgDAIQADACACADQACAGgFAFQgFAGAEAHIAGAIIgKgCg");
	this.shape_33.setTransform(-17.5,-51);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhMBRQgJgDgDgIQgFgNADgPQACgSAJgVQAHgOAKgMQALgNASAFQAHACACAGIADAHIgFAFIgCgGQgFgHgLADQgKADgJANQgIAJgFAQQgIAbABAKQABAHADAEQAEAIALgDQAKgEANgMQAHgGAegiQAIgKAAgIQAAgEAEgLQALggAagZQAQgQATALQAEACAEAHQAGANgDAUQgGAZgSAWQgQATgJAGQgHAFgIACQgGABgIgFQgIgFgBgGIgBgGIgEAEQgIALgSASIgQAQQgHAFgLAGIgHABQgEAAgEgCgAANAWQACAKAKABQAGAAAFgFIATgSQASgRAIgbQAFgPgFgOQgEgKgKABQgIAAgKAIQgEADABAFQAAADgCAFQgHAPgEAFQgJAMAIAOIALANQAEADgBACQgIgCgGgHIgKgMQgMALADAQg");
	this.shape_34.setTransform(16.6,11.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhSBUQgHgFgDgHQgFgMACgTQADgTAJgVQAHgNAKgNQAJgMAOAAIALACQAKADACAIIAEAJIgLAMIgDgGIAAgDIgBgCQgCgDgFgBIgFACQgIACgJALQgHAKgFAOIgBAFQgGAWABAJQAAAFACAFQACACAFAAIAEgBQAIgCANgLQAPgPAPgRIAHgJQAHgKAAgFQAAgEADgKIABgCQALghAbgaQAKgKANAAQAIAAAJAEQAEADAFAJQAIAOgEAWQgFAYgUAYQgPASgLAIQgGAGgKACIgDAAQgHgBgIgEQgIgGgCgGQgGAKgSASIgGAFQgFAGgGAFQgGAEgNAHQgDACgFgBQgHAAgHgDgAARAWQACAGAHABIAAAAQAEAAADgEIAHgGQgKgEgJgOQgGAJACAMgABDhDQgHgBgIAIQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABAEgDAHIgCAEIgJARQgIALAHAKIAIAJIADADIAAABIACACIADgEQARgQAIgaQAEgPgFgLQgCgHgGAAg");
	this.shape_35.setTransform(16.6,11.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AheBWQgIgCgEgIQgEgIADgIQAGgQAOgQIAGgEQAFgDAFAEQAEADgDAHIgGAWQgCAEgCAAQgFABgBgDQgDgEADgDQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAFgNIgDABQgMAOgDAJQgBAEABAJQAAAEAGAAQAHgBAEgCIALgIIAZgaQAIgIACgJQAGghAbgiIADgGQAFgHAGADQAGADgCAIQgBAJgKARIgHAPQgIAMgIAIQgKALgBAKQAAAMAFAFQADAEADAAQADAAAEgCQAIgEAMgNQAQgQAHgJIANgQQADgDAAgEQACghARgeIAMgNQAGgEAHADQAGADAAAIQAAAIgHALQgGAMgKAPQgGAKgHAIQgFAGABAKQABALAGAFQAGAEAFgBQAIgCAEgDIAUgKQgBAEgFAEQgMAKgLAEQgOAEgHgJQgJgKgBgHQgDACgKAMQgUAagQANQgIAGgIAAQgHAAgEgEQgJgKAAgHIgBgCIgBAAIgTATQgJAKgGAEQgIAGgJAAIgFAAgAgTAIQAYgeAEgVQgUAXgIAcgABXhKQgIAFgCAEQgJAMgHAcIAAADIABABIAagnQAFgIgCgHQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABg");
	this.shape_36.setTransform(-4.4,19.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhgBaQgKgCgFgJQgFgKAEgKQAHgSAOgQQACgDAEgCQAEgCADAAQAEAAAFAEQAFAFgDAJIgHAWIAAAAQgDAHgEABIgCAAQgFAAgEgFIgBgDIgBADIgBAMIABAAQAIgBADgCQAEgCAFgFIAagaQAHgHABgIQAHgiAbgjIACgCIACgEQAEgGAGAAIAGABQAIAFgCALQgBAJgHAMIgMAVQgHANgIAIQgKAKAAAIQAAAKADAEQABABAAAAQABABAAAAQABAAAAABQABAAAAAAIAFgCQAHgDALgMIABgBQAOgOAIgLIALgNIACgCQACgCAAgEQACggASggIAKgLIADgDQAFgEAEAAQAEAAAEACQAJAEAAALQgBAIgGANQgIAPgJANIgNASQgFAFABAIQABAJAFADQAEADACAAIANgFIAQgIIACgBIACgBIAJgEIgDAJQgCAFgFAFIgBAAQgMAKgMAFIgKABQgJAAgHgHIgCgCQgEgEgDgGIgHAJQgWAbgQAMQgIAHgJAAIgBAAQgIAAgFgFQgHgHgDgHIgeAdQgKAHgKAAgABPg/QgIAKgEAOIACgCIAOgWIACgGg");
	this.shape_37.setTransform(-4.3,19.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AidBxQgDgBgBgDIABgGIAHgUIAYhgIACgHQACgEADAAQADAAACAEQADAFgDAGQgFALgHAiIABACIAFgIIATgeIAegjQAHgHAIgCQAOgEADAPQACAOgDAPIgNBLIABAIQABAHAFABQAEACAFgFIARgTIAVgdQAUgiALgXIALgVIAZgxQACgFAEACQAFACgCAFIgEAJQgJARgCAQIAjgdIARgMIApgaQAEgCAEACQACABAAAEIgDANIgSA6IgMAyIAAAFQAAAFACACQABACAFABQAAABAAABQABABgBAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAgBAAQgGAAgEgHQgFgLAFgTQAJgoAHgTIAJgfIABgGIgBgBIgnAZQgJAFgXATQgDAEgDAIQgCACADAEIANAWQAGAKgEAOQgEAMgGAMQgHALgNgBQgGAAgEgEQgHgIgBgMQAAgPAGglIgBgFIgYAvIgNAWQgHANgGAJIgNAPIgHAJQgIAJgGADQgMAIgHgMQgFgIAAgIQgBgVAJgpQAHgVgCgRQAAgGgDgEQgHABgIAIQgUAVgIALQgSAagOAdIgSArIgFAIQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBgBgAA3giQgFAWgCAjQAAAFACAEQADAGAFABQAGABAEgGQAJgLACgLQACgHgDgHQgDgMgHgLIgLgPg");
	this.shape_38.setTransform(-55.2,69.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AifB1QgEgDgCgEQgBgEACgEIASg5QAFgQADgQIAFgbIAAgCIACgGQADgGAFAAIABAAQAGABADAFQADAHgDAIQgFAJgDARIAAAAQAIgOAGgGIAbgiIADgCQAIgJAJgCIAFgBQAOAAADAPQADAOgEARIgMBIIAAACIAAAHQABAFADAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAQAKgKAHgJIACgCQAOgRAFgJQATghALgYIAhhBIADgFQADgGAFAAIAEABQAIADgDAJIgEAKQgGAKgDAKIABgBIAZgUIA7gmQACgCAEAAIAFABQAGACgBAIQgBAJgCAEIgSA6QgFARgEATIgDAOIAAAEIABAEIAEACIADABIAAADQABAGgCACQgCACgEAAQgKAAgEgKQgHgMAFgUIABgBQAJgpAHgRIAHgXIACgGIghAUQgJAGgRAOIgFAEIgFAKIAAAAIAOAZQAHAMgFAPQgFAOgGALQgIAMgNAAIgDAAQgHAAgFgGQgJgJAAgNQAAgRAEgWIgEAHIgMAYIgFAJQgOAagHAKIgSAVIgCADQgIAKgHADQgFADgFAAQgJAAgGgJQgFgIAAgKQgBgYAJgnQAGgVgBgPIgBgGQgEABgFAGQgTATgJAMQgVAegLAYIgSAsIgEAGIgBACQgDAFgEAAIgEgBgAA1AXIABAHQACAEADAAQADAAADgDQAGgIAEgMQABgFgCgHQgFgOgFgHIgFgIQgFAYgBAdg");
	this.shape_39.setTransform(-55.2,69.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AiuCGQgDgEABgFIAMgmIAXhYIAHgaQABgDADgCQAEgCAEAGIACAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgCAEIgBADQgEAEgDAIIgDALIgJAjIACACIACgEQANgYAkglIAagbIAGgEQAFgDAEACQAEACACAFQAEAMgDAOIgQA2IgIAfQgBADABAHQABAHAHgDQAEgBACgCQAMgLAIgIQANgPAhgtIAOgTQgEgFABgCQAAgCAEgEIAQgQQAEgEAFgKQAKgWAHgJIACgCQAEgEADACQAFACgEAHIgMATQgCADABADIBIgvIAKgGIAPgPQAEgEAFABQADAAABACQAAAEgBABQgHAGgCAEIgJAPIgPAlIgVA4QgEAJgCAVQAAAFABABIAGACQgBAJgHgEQgIgFABgKQACgXAFgOIAOglIASgxIgBgBIg5AnIgZARQgMAKgDALQgBAHAEADIAEACQAHAEAIAKQAIAJgDARQgEAOgMAJQgFAFgHgBQgIgBgFgHQgGgKABgLQADgWADgJIABgJIgEAEIgYAhIgfAoQgKANgJAIQgKAKgIACQgLACgFgJQgEgJACgKIAJgfIAJgfIAIgdQACgKgFgGIgGADQgUASgLANIgTAWQgbAigOAiQgDAHgEAQIgCAFQgEAIAAAEQAAADgFAIIgCABIgDgBgAAnAcQABAGAEAFQADAFAGgDQANgIAEgRIgBgFQgCgIgNgKIgHgFQgIAYAAAQg");
	this.shape_40.setTransform(-32.8,30.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AixCJQgFgGACgHIAIgcIADgKIAJgfIAWhTQABgFAFgDIAEAAQAFgBAEAHIABABQAFAGgGAGIgBADIAAABIgCAEQgEAEgDAMIgGAUQALgQAdgfIAbgcQADgDAEgCIAHgCQALAAADALQAFAMgEAQIgYBVQgBAEABAFIABABIABAAQAEgBABgDIACgBIASgRQARgTAYgjIAQgVQgCgGABgDQAAgEAFgEIADgCIANgOQAEgDAEgJQALgYAHgJIABgCIABAAQAEgEAEAAIAEABQADACABADQABAFgDAFIgIAOIABgBIA8goIAFgDIAFgDQAGgFAJgKQAEgEAGAAIADAAQAHADAAACQABAGgDADIgIAJIgJAQIgPAkIgVA4QgDAIgCAVIAAADIAGABIAAADQgBAKgIAAQgDAAgDgCQgKgFACgOQACgXAFgOIAdhMIAAAAIg4AmIgRAMQgLAIgCAKQgBAEACACIADACQAIAEAIAKQAKALgEAUQgDANgOAMQgGAFgHAAQgMAAgGgLQgHgLABgMIABgFIADgTIhDBVQgLAMgJACIgGAAQgKAAgGgKQgFgLADgLQACgKAIgaIAIgaIAAgBIAHgcQACgFgCgFIgBABQgSAQgMAQIgTAVQgcAhgNAiIgIAZIgCAGIgCAHQgBAFgEAGIgBACQgDAEgDAAQgDAAgDgDgAAsAbQAAAFAEAFIABABIACgBQALgGAEgQIgBgBIAAgCQgCgHgMgIIgCgCQgGAQABAQg");
	this.shape_41.setTransform(-32.8,30.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AjyCaQgFgFgBgFQgDgNAFgJIAJgTIAEgFQAEgGAHACQAJAEABAHIgBAKQgBALABACQACAEgFABIgFABQgFAAAAgFIAFgUIAAgGIgGAGIgLASQgCAFABAIQABAGAFACQAEACAGgDQAFgDAEgEIAOgQQAJgKAFgIIAagnIAIgXIAHgXQACgGAEgBQAFgBADAEQADADgCAFIgNAbQgDAGgCAJQgEAOADAQQACANAKgIIAOgNIAPgQIANgPQALgJABgSQABgRAEgQQACgMAMgVQAEgGAIABQAGACAGAFQAFAGABAGIgBAIQgDAKgJAKQgKAOgFAJIgIAJIgEAHQgDAIACANQAEAUAUgJIANgJIBMhCQACgCACgHIAGggQACgKALgTIAIgOIAGgFQAEgEAGAEQAGAEABAIQACALgCAMQgEABgBgDQgEgJAAgIIAAgFQgMAFgJAWQgKAVABARQAGgDAKgJQAKgJAHgDIgCADIgdAbQgGAEADAIIACADQAEANAOgFQALgFAKgKIAagcQAZgeAGgMIAEgFQAFgHAFgMQAHgVAHgQQANgZAagFQAFgBAMACQAHACAEAGQAEAGABAHQACARgKAVQgFANgKANIgVAbQgGAIgLAJQgIAHgJgCQgHgCgDgHQgFgJAAgJIAAgLIgDADIgWAeIgXAbIgRAQQgGAHgPAGQgPAGgJgPIgGgLQgDABgEADIgFAFIgsAqQgRAPgOAKQgGAFgNAAQgJAAgGgLIgEgKIgCgGIgLAKIgbAeQgFAFgHAEQgGAEgHgDQgGgDgCgHIgEgTIgEADIgIAQIgLAOIgcAhQgHAIgOAAQgFAAgEgEgAhDgIIgHAhIAAAEQAIgHAGgIIAOgUQAFgJgBgFQgBgDgIgGQgLAHgFAOgACng7QgBAMACAIQADAJAJgDQAEgBACgCIARgSQARgSAMgWQALgWgBgRQAAgOgPgBQgOAAgPALQgHAFABAIQAAABgDAJIgDAGQgEAIACAEQAFAMAJAEIAEAEQgIABgHgFIgLgMQgGAOgDATg");
	this.shape_42.setTransform(-10.8,52.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AjpCiQgGAAgGgFQgFgFgCgHQgEgNAGgMIAJgTIADgEIABgBQAFgHAHAAIAFABQAMAFAAAKIgBAKIAAADQgBAGABADIAAAAIAGgGIARgWQAQgYAGgKQADgFADgLIAJgdQABgIAIgCIADAAQAHAAADAFQAEAFgDAHIgHAOIgGANQgDAFgCAKQgEAMADAPIACAEIADgCIAOgMIARgTIALgMQAJgIACgQQABgTADgPQADgNAMgVQAFgHAIAAIAEAAQAHACAHAGQAGAHABAHQABAFgCAFQgDALgJALIgPAWIgIAKIgEAFQgCAJACALQABAJAHAAQADAAAGgCQAFgCAHgHIBMhBQACgBABgFIAGghQACgLAJgPIALgTIAGgGQAEgCAEAAQADAAAEACQAIAHACAIQABALgCAOIAAADIgDABIgDAAQgFAAgCgGQgEgJAAgGQgIAHgGAPQgGAOgCANIAJgHQALgJAHgEIANgHIgIANIAAABIgDAEIgcAaQgEACACAFIABABIABADQACAGAFAAIAFgBQALgFAJgJIAagcIAEgFQATgYAIgMIADgFIABgBQAFgGADgLQAIgWAHgPQANgbAdgGIAHAAIAMABQAIACAFAHQAGAGAAAKQACASgKAWQgFAMgLAPIgEAFQgIANgIAJQgKALgIAHQgIAGgHAAQgNAAgGgMQgFgLAAgIIgLAPIgCADIgJALIgTAWIgRAQQgHAIgPAGQgFACgFAAQgMAAgHgNIgFgHIAAgBIggAeIgBACIgGAGIgMAMIggAZQgHAFgNAAQgNAAgHgNIgDgIIgBgDIgGAGIgbAeQgGAGgHAEQgEADgGAAQgGAAgFgEQgFgEgBgHIgCgJIgRAYIgVAZIgIAJQgIAJgOAAgAjqCBQgBAEABAGQAAAGAEAAQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAgBIAHgFIgCABIAAAAQgEAAgDgDQgCgCAAgFQAAgEACgGIAAAAgAg+gGIgGAWIAAABIAEgFIAOgUQAEgHAAgDQgBgCgEgEQgIAGgDAMgACrg6QgBAJACAJQACAEADAAIACgBIAEgCIARgSQAPgQANgXQALgUgBgQQAAgLgLAAIgCAAQgKAAgPAJQgFAEABAFQABADgDAHIgBACQAAADgCACIgBACQgDAGABACQAFALAHADIANAKIgOACQgKAAgLgMQgEAJgDARg");
	this.shape_43.setTransform(-10.8,52.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Aj+C2QgHAAgFgFQgGgEgBgHQgFgZAEgUQAFgbAJgPQAKgQAIgHQAHgEAHABQAHABADAGIABAGIgCAPQAAAEgEgBQgGgBABgHIABgHIAAgIIgIADQgJAFgIAOQgKARgEAcQgCATAEAPQABAFADADQAGAFAFgCQAKgDAJgKIARgSQALgLATgcIASgeIAGgOIAMghQABgHAGABQAEABACACQABACgBADQgDAMgEAGQgLAVgCAQIgDASQABAEACABQACABAEgCQAHgFAGgHIAsg5QACgDABgGIAIgaIAHgQIADAAQAHgBACADQACACgCAHQgCAIgMAXQgDAGgCANQgBAJAGANIACADQAFgBAFgEIAHgHQAOgOAKgMQADgGAKgKIAWgcIAKgMQAKgLACgTQABgJAIgIQAFgEAFAFIgDADQgEAEAAAHQAAAEgHAUIgIAaIACABIASgkQATghAKgLQAGgHAHgGQAEgDAHgCQACgBADACQADABABADQAEAIgBAGQgDAdgCAFIgBAFIAEgFIAVghIASgWQAFgGAIgGIAFgDQAHgDABAHQACAKgBAHIgHAjIgCASQAPgNADgEQAFgJANgPQAFgFAHgOIAEgHIAMgTQAHgLADgIIAPgbQAFgHADADQACACgCAGIgKATIgOAmIgEASIgEAcQAAADACAGQABAFAFADQAFACAFgCQAPgGAGgIQADgEgCgEIgFgIQgEgGgJgFIgFgDQgDgDACgDQABgDAEABIAJACIANAQIAFAGQACADgBADQgBAKgHAHQgKALgOADQgKADgGgFQgHgGgBgKIAAgSIABgDQACgGABgKIACgPIgBgFIgDACIgQAYIgNAWIgTAcQgHAIgCABQgHAEgEgFIgBgFQACgXAEgMIAEgXQABgIgDgEIgEACQgZAegGAJIgLATIgFAMIgGAMIgKAXIgDAHIgIAMQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQgEgDACgFQAEgHACgLIAFgUQAFgSAEgRIACgNQABgIgDgGQgGAAgGAFQgTASgMAWIgmBSQgEANgEAEQgFgCgBgCQgBgCABgEIAMgwIAAgEIgBgBIgpA0IgIAKIgXAZQgDACgFACQgJAEgGgIIgFgOIgEgLIgnAyQgFAHgHAGQgGAGgJgDQgIgDgBgLIAAgKIgEACQgKATgNASIgSAVIgWAWQgIAJgKAAIgDgBg");
	this.shape_44.setTransform(43,28.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Aj/C7QgIgBgGgGQgHgFgBgIQgFgaAEgVQAFgcAJgQQAMgRAIgGQAGgFAHAAQAMAAAFAKQACAFgBADIgCAPQgBAHgGAAIgCAAQgKgCACgKIABgHIAAgCIgCABQgIAFgIAMQgJARgDAaQgDAUAEANIADAGQACACADAAIACAAQAJgDAIgJIAIgIIAJgKQAMgMANgUIAEgHIATgeIAOgmIACgHQACgJAIAAIADAAQAGABADAEQACADgBAFIgBACQgDALgEAHQgLASgCAQIgCAPIAAABIgBABIABACIABgBQAIgFAFgGIAWgcIAWgdIABgEIABgDIAIgaIAIgSIACgBIAHgBQAGAAADAEQADAEgCAJQgCAJgJARIgEAGQgDAGgBAMQgBAGAGANQADgBAGgGIAEgDQANgNAJgNIAIgJIAGgGIAWgdIACgDIAIgJQAIgJADgSQABgMAJgIQADgDAEAAQAFAAADADIAEADIgDADIAAABIgDADQgCADgBAFQAAAGgCAFIABgCQAQgcALgNIAOgOQAFgDAIgCIADgBQAIAAADAIQAEAKgBAGIgCATIANgUIALgNIAIgJQAHgKAHgEIABgBIAEgCIAFgBQAIAAACAJQABALgBAGIgIArQAIgHABgDIATgXQAFgHACgGIAEgGIAOgXQAHgLAFgLIAPgbIABAAQADgHAGAAIAEABQAFAEgDAJIgKAUIgHAUIgGASIgFAQIgEAcQAAAEACADQABAHAGAAIADgBQANgEAHgJQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgFgHQgDgGgIgFIgFgDQgGgEADgHQACgFAFAAIACABIAHABIAEABIAKAMIABABIADAFIADADQAGAHgBAFQgCALgIAIQgLAMgOADIgIABQgJAAgGgGQgHgHAAgKIABgXQADgGAAgLIAAgFIgQAaIgIANIgTAbIgBABQgFAHgEADQgEACgDAAQgGAAgDgFQgCgDAAgEQACgYADgMIAFgbIgHAIQgSAVgEAHIgGAKIgQAhIgIAQIgGAOIgHAMQgBABAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAQgEAAgCgCQgHgFAEgIQAFgIACgPIAEgOIAJgjIAAgDQACgNgBgFIgGADQgUAUgKATIgQAeIgXA3QgDAKgFAFIgCACIgDgBQgGgDgBgDQgCgDACgHIACgKIAAgBIAGgcIgoA1IgXAZQgDADgGACQgDACgEAAQgIAAgFgIQgEgGgCgHIgBgBIgBgEIgBABIggArIgNANQgGAFgHAAIgHgBQgJgEgCgNQgIAPgMAQIgGAHIgiAkQgLAKgLAAg");
	this.shape_45.setTransform(43,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghghj, new cjs.Rectangle(-71.8,-80.2,142.9,162), null);


(lib.ghggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AAfArIAAhEIgfAsIAAAAIgfgsIAABEIgJAAIAAhVIAKAAIAeAuIAfguIAKAAIAABVg");
	this.shape.setTransform(88,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D5D5D").s().p("AAhArIAAhVIAJAAIAABVgAgpArIAAhVIAKAAIAAAiIAVAAQAOAAAJAFQAJAHAAAMQAAANgJAGQgIAIgOAAgAgfAiIAWAAQAKAAAGgFQAFgFAAgIQAAgIgGgFQgGgDgJAAIgWAAg");
	this.shape_1.setTransform(77.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D5D5D").s().p("AAZArIAAgnIgxAAIAAAnIgJAAIAAhVIAJAAIAAAmIAxAAIAAgmIAJAAIAABVg");
	this.shape_2.setTransform(67.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D5D5D").s().p("AAYArIAAgnIgvAAIAAAnIgKAAIAAhVIAKAAIAAAmIAvAAIAAgmIAKAAIAABVg");
	this.shape_3.setTransform(58,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5D5D").s().p("AgeAfQgMgMAAgTQAAgRAMgNQANgNARAAQATAAAMANQAMANAAARQAAATgMAMQgNANgSAAQgSAAgMgNgAgXgYQgJAKAAAOQAAAPAJAKQAKAKANAAQAPAAAJgKQAJgKAAgPQAAgOgJgKQgKgKgOAAQgOAAgJAKg");
	this.shape_4.setTransform(48.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D5D5D").s().p("AAZArIAAhGIgyBGIgJAAIAAhVIAKAAIAABGIAyhGIAJAAIAABVg");
	this.shape_5.setTransform(38.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5D5D").s().p("AAeA0IAAgTIhEAAIAAhUIAJAAIAABLIAwAAIAAhLIAJAAIAABLIALAAIgBAcg");
	this.shape_6.setTransform(29.6,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D5D5D").s().p("AAhArIgKgXIgtAAIgLAXIgJAAIAmhVIAIAAIAnBVgAgTAMIAmAAIgTgrg");
	this.shape_7.setTransform(19.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D5D5D").s().p("AghArIAAhVIAjAAQAPABAHAHQAGAGAAAIQAAANgOAHQASAEAAAQQAAAKgIAHQgIAFgPABgAgYAiIAcAAQAJAAAGgEQAGgFAAgGQAAgIgGgDQgGgEgLAAIgaAAgAgYgEIAYAAQAIAAAHgDQAFgFAAgHQAAgGgFgEQgFgEgJAAIgZAAg");
	this.shape_8.setTransform(11,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D5D5D").s().p("AgeAfQgMgMAAgTQAAgRAMgNQANgNARAAQATAAAMANQAMAOAAAQQAAASgMANQgMANgTAAQgRAAgNgNgAgXgYQgJAKAAAOQAAAOAJALQAKAKANAAQAOAAAKgKQAJgLAAgOQAAgNgJgLQgKgKgOAAQgNAAgKAKg");
	this.shape_9.setTransform(1.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D5D5D").s().p("AAZArIAAgnIgwAAIAAAnIgKAAIAAhVIAKAAIAAAmIAwAAIAAgmIAJAAIAABVg");
	this.shape_10.setTransform(-8.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D5D5D").s().p("AAYArIAAgnIgvAAIAAAnIgKAAIAAhVIAKAAIAAAmIAvAAIAAgmIAKAAIAABVg");
	this.shape_11.setTransform(-17.8,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5D5D5D").s().p("AAZArIAAhGIgxBGIgKAAIAAhVIAKAAIAABGIAyhGIAJAAIAABVg");
	this.shape_12.setTransform(-27.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5D5D5D").s().p("AAZArIAAgnIgxAAIAAAnIgJAAIAAhVIAJAAIAAAmIAxAAIAAgmIAJAAIAABVg");
	this.shape_13.setTransform(-40,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D5D5D").s().p("AgeA0IAAhUIA8AAIAAAJIgyAAIAAAcIAtAAIAAAJIgtAAIAAAdIAzAAIAAAJgAAFgnIAAgMIALAAIAAAMgAgPgnIAAgMIALAAIAAAMg");
	this.shape_14.setTransform(-48.4,-0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D5D5D").s().p("AAjA0IAAgTIhEAAIgCATIgIAAIAAgcIAIAAQAOgUAAgoIAAgPIA2AAIAABLIALAAIgBAcgAgMgfQAAARgDAOQgDAPgGAJIAwAAIAAhCIgkAAg");
	this.shape_15.setTransform(-57.3,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5D5D5D").s().p("AAzArIgdgqIgRATIAAAXIgJAAIAAgXIgRgTIgdAqIgMAAIAjgwIghglIAMAAIAsAyIAAgyIAJAAIAAAyIAsgyIAMAAIghAlIAjAwg");
	this.shape_16.setTransform(-68.5,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5D5D5D").s().p("AgeAfQgMgMAAgTQAAgRAMgNQANgNARAAQATAAAMANQAMANAAARQAAATgMAMQgNANgSAAQgSAAgMgNgAgXgYQgJAKAAAOQAAAPAJAKQAKAKANAAQAPAAAJgKQAJgKAAgPQAAgOgJgKQgJgKgPAAQgOAAgJAKg");
	this.shape_17.setTransform(-79.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5D5D5D").s().p("AgfArIAAhVIAfAAQAPABAIAHQAJAHAAAMQAAAOgKAGQgJAHgOAAIgUAAIAAAfgAgVAEIAVAAQAJAAAHgEQAGgGAAgIQAAgIgGgGQgGgEgKgBIgVAAg");
	this.shape_18.setTransform(-88.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghggg, new cjs.Rectangle(-91.9,-6.1,184,12.3), null);


(lib.dfs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAVIAAghIgNAhIgFAAIgLgiIAAAiIgHAAIAAgpIALAAIAKAgIAMggIAKAAIAAApg");
	this.shape.setTransform(33.2,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAVIAAgpIAHAAIAAApgAgWAVIAAgpIAHAAIAAAQIAJAAQAHAAAFAEQAFACAAAGQAAAFgEAEQgEAEgIAAgAgPAPIAHAAQAHAAACgCQACgBAAgEQAAgCgCgDQgBgCgHAAIgIAAg");
	this.shape_1.setTransform(27.5,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_2.setTransform(22.5,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_3.setTransform(18.1,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_4.setTransform(13.6,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_5.setTransform(9.2,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANAbIAAgMIgfAAIAAgpIAHAAIAAAjIATAAIAAgjIAGAAIAAAjIAFAAIAAASg");
	this.shape_6.setTransform(4.8,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_7.setTransform(0.1,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQABgCAAgDIAAgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_8.setTransform(-4.1,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAQQgGgFABgLQAAgLAGgFQAFgFAHAAQAJAAAFAGQAFAGAAAJQABAHgDAFQgDAFgEACQgFADgFAAQgIAAgFgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEgBgIQABgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_9.setTransform(-8.6,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_10.setTransform(-13,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_11.setTransform(-17.4,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKAVIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApg");
	this.shape_12.setTransform(-21.8,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_13.setTransform(-28.4,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAFgGAIAAQAJAAAFAGQAFAGAAAJIAAACIgeAAQAAAHAEADQAEAEADAAQAFAAADgCQACgCABgFIAIABQgCAHgFADQgEAEgIAAQgIAAgFgGgAgHgMQgDAEAAAFIAWAAQAAgFgDgDQgEgEgFAAQgDAAgEADg");
	this.shape_14.setTransform(-32.9,0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIADAAQAIgJAAgaIAbAAIAAAjIAFAAIAAASgAgLAJIAVAAIAAgdIgOAAQgBAUgGAJg");
	this.shape_15.setTransform(-37.5,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AATAVIgHgNIgFgFIgDgBIAAATIgHAAIAAgTIgEABIgEAFIgIANIgHAAIAHgNQAFgHAEgBQgDgBgBgCIgEgIIgCgCIgCgBIgCAAIAAgGIABAAIAFABIADACIADAGQADAHABABQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAAgSIAHAAIAAASQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgBACgHIAEgHQADgCAEAAIACAAIAAAGIgCAAIgDABIgDAFIgDAGIgEACQAEABAFAHIAIANg");
	this.shape_16.setTransform(-42.4,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAFgFAHAAQAJAAAFAGQAGAGAAAJQAAAHgDAFQgDAFgEACQgFADgFAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAFAAAEgEQADgEABgIQgBgHgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_17.setTransform(-47.3,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABADACQAEACABADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgBgCgEgBIgGgBIgOAAg");
	this.shape_18.setTransform(-52.1,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAADIgEAJIgFgDIAHgIIgKgBIACgGIAJAFIgBgKIAFAAIgBAKIAJgFIACAGIgKABIAHAIIgFADIgFgJg");
	this.shape_19.setTransform(-56.4,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfs, new cjs.Rectangle(-60,-6.4,100.1,12.9), null);


(lib.dfgdfggg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAZQgFgFgBgHIAHgBQABAGADADQADACAEAAQAEAAAEgDQADgDAAgGQAAgEgDgDQgDgEgFAAIgEABIABgFIABAAQADAAAEgCQAEgDAAgFQAAgDgDgDQgDgCgDAAQgEAAgDACQgCADgBAFIgHgBQABgHAFgEQAEgEAHAAQAEAAAEACQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAFQAAAIgGAFQgFAFgIAAQgHAAgFgEg");
	this.shape.setTransform(225.5,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAYQgEgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgFgFg");
	this.shape_1.setTransform(221.1,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_2.setTransform(216.4,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQACgHAFgDQADgDAGAAQAEAAAEACQAEABACAEIADAIIABANQAAAKgBAGQgCAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_3.setTransform(212.1,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_4.setTransform(207.7,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAXQgFgHgBgQQAAgJACgGQADgHADgDQAEgDAGAAQAEAAAEACQADABADAEIADAIIABANQAAAKgCAGQgBAGgFAEQgEADgGAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQAEgFAAgOQAAgNgEgFQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(203.2,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAXQgFgHAAgPQAAgPAGgIQAFgGAIAAQAIAAADAEQAFADABAHIgHABQgBgFgCgBQgCgDgFAAIgFABQgDADgCAEQgCAFAAAJQACgEAEgCIAHgCQAHAAAFAFQAFAEAAAJQAAAFgCAFQgDAEgEADQgEACgFAAQgIAAgGgGgAgHABQgDADAAAGIACAHQABADADACQACABADAAQAEAAAEgDQACgEAAgGQAAgGgCgDQgDgDgFAAQgEAAgEADg");
	this.shape_6.setTransform(198.8,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_7.setTransform(194.3,4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAcQAAgHADgJQACgKAFgIQAEgIAGgHIgcAAIAAgGIAlAAIAAAFQgGAGgGAKQgFAIgCALQgCAHgBAIg");
	this.shape_8.setTransform(189.9,4.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJAcQgBgHADgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgFAKQgGAIgCALQgCAHAAAIg");
	this.shape_9.setTransform(185.5,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_10.setTransform(180.8,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAEgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_11.setTransform(176.5,4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_12.setTransform(171.8,4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_13.setTransform(164.8,4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAIABQAFABACACQADACACADQACAEAAAEQAAAHgFAEQgFAFgLAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgBgDQgCgCgEgBIgGgBIgOAAg");
	this.shape_14.setTransform(159.3,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_15.setTransform(154.7,4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_16.setTransform(149.1,4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQAEgEAAgGQAAgGgEgDQgEgDgEAAQgEAAgCACQgDABgCACIgGgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgIAAgEgFg");
	this.shape_17.setTransform(141.6,4.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_18.setTransform(136.8,4.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJABgGQACgHAFgDQAEgDAFAAQAFAAADACQADABADAEIAEAIIABANQAAAKgCAGQgCAGgFAEQgDADgHAAQgHAAgFgGgAgHgSQgDAFAAANQAAAOADAFQADAEAEAAQAFAAADgEQADgFAAgOQAAgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_19.setTransform(132.6,4.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAEgFAIAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_20.setTransform(128.1,4.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_21.setTransform(123.4,4.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAYQgGgEAAgHIAHgBQABAGADACQADADAEAAQAFAAADgEQAEgEgBgGQABgGgEgDQgDgDgFAAQgEAAgCACQgDABgBACIgHgBIAGgdIAbAAIAAAHIgWAAIgDAPQAFgDAFAAQAHAAAGAFQAFAEAAAIQAAAIgEAGQgGAHgJAAQgHAAgFgFg");
	this.shape_22.setTransform(119.3,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_23.setTransform(114.7,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAXQgGgHABgQQAAgJACgGQABgHAEgDQAFgDAFAAQAEAAAEACQADABADAEIAEAIIABANQAAAKgDAGQgCAGgDAEQgFADgGAAQgIAAgEgGgAgHgSQgEAFAAANQAAAOAEAFQADAEAEAAQAFAAADgEQADgFABgOQgBgNgDgFQgDgEgFAAQgEAAgDAEg");
	this.shape_24.setTransform(110.4,4.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJAcQAAgHACgJQADgKAEgIQAEgIAGgHIgbAAIAAgGIAkAAIAAAFQgGAGgFAKQgGAIgCALQgCAHgBAIg");
	this.shape_25.setTransform(106,4.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKAcQABgHACgJQADgKAEgIQAEgIAFgHIgbAAIAAgGIAkAAIAAAFQgFAGgGAKQgFAIgCALQgCAHAAAIg");
	this.shape_26.setTransform(101.5,4.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_27.setTransform(94.2,4.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_28.setTransform(88.4,4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_29.setTransform(82.6,4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_30.setTransform(76.5,7.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAYQgGgFAAgHQAAgGADgEQADgCAFgCQgEgBgCgDQgDgDAAgEQAAgHAFgEQAFgEAGAAQAHAAAFAEQAEAEAAAHQAAAEgBADQgCADgFABQAFACADADQADAEAAAFQAAAHgFAFQgGAFgIAAQgIAAgEgFgAgHAEQgDADAAAFIABAGIAEAEIAFABQAFAAADgDQAEgDAAgFQAAgFgEgDQgDgEgFAAQgEAAgDAEgAgGgUQgDADAAADQAAAEADADQADADADAAQAEAAADgDQADgDgBgDQABgEgDgDQgDgCgEAAQgDAAgDACg");
	this.shape_31.setTransform(73.1,4.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_32.setTransform(67.6,7.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAQAbIAAgMIgfAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgPAAQgBAUgGAJg");
	this.shape_33.setTransform(64,6.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAHQAAgBABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_34.setTransform(58.5,7.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAdIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApgAgGgUQgDgDgBgEIAEAAIADADIADABIAFgBIACgDIAFAAQAAAEgDADQgDACgFABQgEgBgDgCg");
	this.shape_35.setTransform(55.2,4.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_36.setTransform(51.6,5.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAdIABgFIAEgIIAJgIQAJgIADgEQADgEAAgEQAAgEgCgDQgDgDgFAAQgEAAgEADQgCADAAAGIgHgBQAAgIAFgEQAFgFAHAAQAIAAAFAFQAEAEABAHIgBAHQgCADgEADQgDAEgHAGIgIAHIgCAEIAbAAIAAAHg");
	this.shape_37.setTransform(48,4.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAKAdIAAgfIgTAfIgHAAIAAgpIAHAAIAAAfIASgfIAIAAIAAApgAgHgUQgDgDAAgEIAEAAIADADIADABIAFgBIACgDIAFAAQgBAEgDADQgDACgFABQgEgBgDgCg");
	this.shape_38.setTransform(41.5,4.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_39.setTransform(37,5.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_40.setTransform(33.3,5.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_41.setTransform(29.4,5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAVIAAgTIgTAAIAAATIgHAAIAAgpIAHAAIAAASIATAAIAAgSIAHAAIAAApg");
	this.shape_42.setTransform(25.1,5.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAVIAAgfIgSAfIgIAAIAAgpIAHAAIAAAfIATgfIAHAAIAAApg");
	this.shape_43.setTransform(20.7,5.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAbIAAgMIgzAAIAAgpIAHAAIAAAjIAQAAIAAgjIAGAAIAAAjIAQAAIAAgjIAHAAIAAAjIAFAAIAAASg");
	this.shape_44.setTransform(15.3,6.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEABgIQgBgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_45.setTransform(9.6,5.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVAdIAAg5IAVAAIAJABQADABAEACQACACACADQACAEAAAEQAAAHgFAEQgEAFgMAAIgOAAIAAAYgAgNAAIAOAAQAHAAADgDQADgDAAgFQAAgDgCgDQgCgCgCgBIgHgBIgOAAg");
	this.shape_46.setTransform(4.8,4.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAbIAAgMIggAAIAAAMIgGAAIAAgSIAEAAQAHgJAAgaIAcAAIAAAjIAEAAIAAASgAgLAJIAWAAIAAgdIgQAAQAAAUgGAJg");
	this.shape_47.setTransform(180.7,-1.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgPAJIAHgBQAAAEADACQADACADAAQADAAACgCQADgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIgFAAIgCAAIAAgFIAFAAIADgCQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgDAAQgEAAgDAHIgHgBQAEgMALAAQAGAAAEAEQAEAEgBAFQAAAFgEADQACAAACADQACADAAADQAAAGgEADQgFAEgGAAQgOAAgCgNg");
	this.shape_48.setTransform(176.6,-2.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAQQgFgGAAgKQAAgJAFgGQAGgGAIAAQAHAAAGAGQAFAGAAAJIAAACIgeAAQABAHADADQAEAEAEAAQADAAAEgCQACgCABgFIAIABQgCAHgFADQgEAEgHAAQgIAAgGgGgAgGgMQgEAEgBAFIAXAAQAAgFgDgDQgEgEgEAAQgFAAgCADg");
	this.shape_49.setTransform(172.6,-2.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAQQgFgFgBgLQABgLAGgFQAGgFAGAAQAIAAAGAGQAGAGgBAJQAAAHgCAFQgDAFgEACQgEADgGAAQgHAAgGgGgAgIgLQgDAEAAAHQAAAIADAEQAEAEAEAAQAGAAADgEQAEgEAAgIQAAgHgEgEQgDgEgGAAQgEAAgEAEg");
	this.shape_50.setTransform(168.1,-2.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAdIAAg4IAGAAIAAAFQADgDADgCQACgBADAAQAFAAAFADQAEACABAFQADAFAAAGQAAAHgDAEQgCAFgEACQgEADgFAAQgDAAgCgBQgDgCgCgCIAAAUgAgHgSQgEAEAAAIQAAAHAEAEQADADAEAAQAEAAADgEQAEgEAAgHQAAgIgEgEQgDgEgEAAQgEAAgDAFg");
	this.shape_51.setTransform(163.8,-1.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAOAdIAAgyIgcAAIAAAyIgIAAIAAg5IAsAAIAAA5g");
	this.shape_52.setTransform(158.6,-3.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_53.setTransform(152.4,-0.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOASQgEgDAAgFQAAgDACgDQAAgCADgCIAFgBIAGgBIAMgDIAAgBQAAgFgCgBQgDgDgFAAQgEAAgCACQgDACgBAEIgHgBIADgHQADgDAEgBQAEgCAEAAQAFAAAEACQADABABACIACAFIABAGIAAAIIABANIABAFIgHAAQgCgCABgDIgIAEIgHACQgHAAgDgEgAgBADIgGABIgDACIgBAEQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQABACAFAAQADAAADgCQADgBACgDQABgDAAgEIAAgDIgLADg");
	this.shape_54.setTransform(149.1,-2.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAVIAAgpIAQAAIAIABQADABACADQACADAAADIgBAFIgEAEQADAAACADQACACAAAEQAAAGgFADQgDADgIAAgAgJAPIAJAAIAIgBQACgCAAgDIgBgEQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIgJAAgAgJgCIAIAAIAEgBIAEgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgDgCgCIgHgBIgIAAg");
	this.shape_55.setTransform(144.9,-2.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAIAVIgIgNIgDgFIgEgBIAAATIgHAAIAAgpIAHAAIAAASQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQABgBACgHIADgGIADgCIAFgBIACAAIAAAGIgCAAIgEABIgCAFIgDAGIgDACQADABAFAHIAHANg");
	this.shape_56.setTransform(141.1,-2.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgMAQQgFgFAAgLQAAgGACgFQACgFAFgCQAEgDAFAAQAHAAAEAEQAEADABAGIgGACQgBgFgDgCQgCgCgEAAQgEAAgEAEQgDAEAAAHQAAAIADAEQAEAEAEAAQAEAAADgDQACgCABgFIAHAAQgBAIgFAEQgEAEgHAAQgIAAgFgGg");
	this.shape_57.setTransform(137.2,-2.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgNAQQgGgFAAgLQAAgLAHgFQAGgFAGAAQAIAAAGAGQAFAGABAJQgBAHgCAFQgCAFgFACQgEADgGAAQgIAAgFgGgAgHgLQgEAEAAAHQAAAIAEAEQADAEAEAAQAGAAADgEQADgEAAgIQAAgHgDgEQgDgEgGAAQgEAAgDAEg");
	this.shape_58.setTransform(132.9,-2.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUAdIAAgvIgRAvIgFAAIgRgwIAAAwIgHAAIAAg5IALAAIAOAoIABAJIADgKIAOgnIAKAAIAAA5g");
	this.shape_59.setTransform(127.3,-3.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_60.setTransform(120.8,-0.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgLAVIAAgpIAXAAIAAAGIgQAAIAAAjg");
	this.shape_61.setTransform(118.4,-2.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgDAHQAAAAABgBQAAAAABgBQAAAAABAAQAAgBAAAAIAAgFIgDAAIAAgIIAHAAIAAAIQAAAEgBACQgCADgCACg");
	this.shape_62.setTransform(113.4,-0.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgMAaQgEgEgBgHIAHgBQABAFACACQADACADAAQADAAACgBIAEgEIADgHIABgIIAAgCQgCAEgEACQgEACgDAAQgHAAgFgFQgFgEAAgJQAAgJAFgFQAFgFAIAAQAFAAAEADQAFADACAFQADAGAAAKQAAAKgDAHQgCAGgFAEQgEADgGAAQgGAAgFgDgAgHgTQgEAEAAAGQAAAGAEADQADADAEAAQAFAAADgDQADgDAAgGQAAgGgDgEQgEgDgEAAQgEAAgDADg");
	this.shape_63.setTransform(110.1,-3.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_64.setTransform(105.3,-3.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAFAdIAAgOIgYAAIAAgGIAZglIAGAAIAAAlIAIAAIAAAGIgIAAIAAAOgAgMAJIARAAIAAgZg");
	this.shape_65.setTransform(101,-3.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgMAYQgFgEgBgHIAHgBQABAGADACQADADAEAAQAEAAAEgEQADgEABgGQgBgGgDgDQgEgDgEAAQgDAAgDACQgDABgCACIgGgBIAFgdIAcAAIAAAHIgWAAIgDAPQAFgDAFAAQAIAAAEAFQAGAEAAAIQAAAIgFAGQgFAHgJAAQgIAAgEgFg");
	this.shape_66.setTransform(96.8,-3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_67.setTransform(92,-3.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAEAdIAAgsIgGAFIgIADIAAgGQAGgDAEgEQAEgEACgEIAFAAIAAA5g");
	this.shape_68.setTransform(87.5,-3.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBASIAKgSIgKgRIAFAAIANARIgNASgAgQASIALgSIgLgRIAGAAIALARIgLASg");
	this.shape_69.setTransform(81.2,-2.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_70.setTransform(77.9,-0.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAdIAAg5IAkAAIAAAHIgdAAIAAAyg");
	this.shape_71.setTransform(74.9,-3.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_72.setTransform(71.4,-0.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAYIAdAAIAAgYIAIAAIAAA5g");
	this.shape_73.setTransform(67.3,-3.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_74.setTransform(63.4,-0.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgMAaQgGgEgDgHQgDgHAAgIQAAgJADgGQAEgHAGgEQAGgCAHAAQAIAAAGADQAGAFACAIIgHACQgCgHgEgCQgEgDgFgBQgGAAgEAEQgFADgCAGQgBAFAAAFQAAAGACAGQACAFAEADQAFADAEAAQAGAAAFgEQAEgDACgIIAHACQgCAJgGAGQgGAEgJAAQgJAAgFgDg");
	this.shape_75.setTransform(59.3,-3.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAQAdIAAgsIgeAsIgHAAIAAg5IAGAAIAAAtIAegtIAIAAIAAA5g");
	this.shape_76.setTransform(51.4,-3.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATAjIAAgNIglAAIAAANIgHAAIAAgUIAFAAQAHgKAAgfIAAgJIAhAAIAAAyIAGAAIAAAUgAgGgZIgBAVQgCALgEAIIAaAAIAAgrIgTAAg");
	this.shape_77.setTransform(45.6,-2.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAYIAdAAIAAgYIAHAAIAAA5g");
	this.shape_78.setTransform(40.2,-3.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AASAdIgHgSIgXAAIgGASIgIAAIAWg5IAHAAIAYA5gAgDgLIgGAQIASAAIgGgPIgDgLIgDAKg");
	this.shape_79.setTransform(34.6,-3.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AALAdIgKgQQgDgGgDgDQgDgCgEAAIAAAbIgHAAIAAg5IAHAAIAAAaQAGAAABgCQADgCACgIIAEgIIAFgEQACgCADAAIAGABIAAAGIgCAAIgCAAQgDAAgCACIgFAHQgCAIgCABIgEADQAEABAGAJIAMATg");
	this.shape_80.setTransform(29.9,-3.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AALASIgLgSIALgRIAGAAIgKARIAKASgAgDASIgNgSIANgRIAFAAIgJARIAJASg");
	this.shape_81.setTransform(25,-2.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_82.setTransform(17.5,-3.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_83.setTransform(11.3,-3.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgNAaQgHgEgDgHQgDgHAAgHQAAgNAHgIQAIgJALAAQAIAAAGAEQAHAEADAHQADAHAAAHQAAAJgDAHQgEAHgGADQgHAEgHAAQgHAAgGgEgAgNgQQgGAFAAAMQAAAKAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgLQAAgGgDgFQgCgFgFgDQgEgDgGAAQgHAAgGAGg");
	this.shape_84.setTransform(5.1,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dfgdfggg, new cjs.Rectangle(0,-9.4,229.9,20.8), null);


(lib.hgj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F70").s().p("AgoApQgRgRAAgYQAAgXARgRQARgQAXgBQAYAAARARQARARAAAXQAAAYgRARQgQARgZAAQgXAAgRgRgAgigjQgPAQAAATQAAAUAPAQQAOAOAUAAQAUAAAPgOQAPgQAAgUQAAgTgPgQQgPgOgUAAQgTAAgPAOgAAQAgIgBgBIAAgIQAAgLgGgEQgDgBgIAAIgJAAIAAAZIgLAAIAAg/IAWAAQALAAAFADQAKADAAANQAAAHgGAFQgDABgGABQAHABADAFQAEAFAAAFIAAAFIABAHIAAACgAgLAAIAKAAQAGgBAEgBQAFgCABgHQAAgIgEgCQgEgDgJAAIgJAAg");
	this.shape.setTransform(53.4,53.4);

	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(1,0.5,1,1,0,0,0,51.6,51.6);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.6,2.5,1,1,0,0,0,28.2,11.3);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.9,16.1,1,1,0,0,0,8.8,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlsFtQiYiXABjWQgBjVCYiYQCXiWDVgBQDWABCXCWQCYCYAADVQAADWiYCXQiXCYjWgBQjVABiXiYgAhuAqIhoGEQBlAyBxAAQDHAACNiMQCNiNAAjHQAAhGgVhEgAnHCYQAbBSA2BDQA1BDBKAsIBflkIh8AnIglCKIgqANIAliJgAmIkUQhYB9AACXQAABCASA/ICXgwICOoSQiKAzhVB6gAh+nPIiPISIB8gnIBVk6IAqgMIhUE4IIrivQgziNh6hYQh9haibAAQhAAAg+ARg");
	this.shape_1.setTransform(-0.1,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AidBxQgJgMAEgbQAGgbASgWQASgWAXgFQAXgHALAMQAMANgGAbQgEAWgNATQgNATgRAKgAhnAaQgVAHgGAgQgDARAFAHQAEAEAIgCQAVgGAGggQAEgSgGgGQgDgDgEAAIgFAAgAjZBxQAIgJACgQQAEgSgGgGQgEgFgIACQgHADgHAIQgJAKgEASQgBAJAAAEIgfAAIABgEQAFgbASgVQASgWAXgHQAXgHAMANQALANgGAcQgEASgJAQgAgsgUIAkgJIADBDIAAAAIAihRIAkgMIg+CIIglANgABRg8IBHgWIgHAgIglANIgCAPIAfgMIgGAfIggAJIgDAPIAngOIgIAkIhJAWgAC5hdIBCgSQAQgEAIAGQAJAGgDARQgFAXgSAMQANABgDAYIgCANQgBAJABADIgjAJQAAgHABgKQACgLgBgEQgCgHgJADIgQABIgLAwIgkALgADmhOIgQAFIgGAYIATgFQAPgEADgMQABgHgDgBIgFgBIgIABg");
	this.shape_2.setTransform(17.4,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhPAPQgLgMAEgYIAfAAQABAJAFADQAEADAGgCQAKgEAGgJIAcAAQgTAggfAJQgIACgHAAQgMAAgHgHgAAkgVIA1AAQgKAFgHACQgJACgHAAQgNAAgHgJg");
	this.shape_3.setTransform(-2,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#77231F").s().p("AlsFtQiYiXABjWQgBjVCYiXQCXiYDVAAQDWAACYCYQCXCXAADVQAADWiXCXQiYCYjWAAQjVAAiXiYgAhuAqIhoGFQBlAyBxAAQDHAACNiNQCNiNAAjHQAAhHgVhDgAnHCYQAbBSA2BDQA2BDBJAsIBflkIh8AnIglCKIgpANIAkiJgAmIkUQhYB8AACYQAABCASA/ICYgwICNoSQiKA0hVB5gAh+nPIiPISIB9gnIBUk6IAqgMIhUE5IIriwQgziNh6hYQh9haibAAQhCAAg8ARg");
	this.shape_4.setTransform(1.3,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#77231F").s().p("AjPBYQAEgSgGgGQgEgFgIACQgVAGgGAhIgBANIgfAAIAAgEQAGgbARgVQASgWAYgHQAXgHALANQAMANgGAbQgDATgKAQIgdAAQAIgLACgOgAidBxQgKgNAFgaQAGgbARgWQASgWAYgFQAXgHALAMQALANgFAbQgEAWgNATQgNATgSAKgAhnAaQgIACgHAIQgJALgDASQgEARAGAGQAEAFAIgCQAVgHAGggQAEgRgGgGQgDgDgFAAIgEAAgAgsgUIAjgJIAEBDIAihSIAkgLIg+CIIglANgABRg8IBGgWIgGAfIglAOIgDAPIAfgMIgFAfIggAJIgDAPIAmgOIgIAkIhIAWgAC4hdIBDgSQAQgEAIAGQAJAGgDARQgFAXgTAMQAOABgDAYQgEAVACAEIgjAJQAAgHABgKQACgLgBgEQgCgHgKADIgQABIgKAwIgkALgADmhOIgRAFIgFAYIASgFQAQgFACgMQACgIgIAAIgIABg");
	this.shape_5.setTransform(18.8,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#77231F").s().p("AhPAPQgLgMAEgZIAfAAQAAAKAFADQAEADAGgCQAJgDAIgLIAcABQgTAggfAJQgIADgHAAQgMAAgHgIgAAkgWIA0AAQgIAGgJACQgIACgGAAQgOAAgHgKg");
	this.shape_6.setTransform(-0.6,17.3);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,1,1,0,0,0,111,111);

	this.instance_4 = new lib.ClipGroup_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,0,0,0,113.1,113.1);

	this.instance_5 = new lib.ClipGroup_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1,1,0,0,0,118.4,118.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hgj, new cjs.Rectangle(-118.4,-118.4,236.8,236.8), null);


(lib.ghgf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgj();
	this.instance.parent = this;
	this.instance.setTransform(0,-23.5,0.95,0.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(75.4,48.8,0.95,0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(63.5,48.8,0.95,0.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(54.8,48.8,0.95,0.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(47.1,48.8,0.95,0.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(36.8,48.7,0.95,0.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(25.8,48.8,0.95,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(13.4,48.8,0.95,0.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(-0.1,48.8,0.95,0.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(-13.1,48.8,0.95,0.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(-22.1,48.8,0.95,0.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-36.1,48.8,0.95,0.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-48.2,48.8,0.95,0.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-61.5,48.8,0.95,0.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-74,48.8,0.95,0.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ghgf, new cjs.Rectangle(-120,-200,240,400), null);


(lib.logo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgj();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-28.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape.setTransform(78.9,47.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_1.setTransform(66.4,47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_2.setTransform(57.3,47.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_3.setTransform(49.2,47.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_4.setTransform(38.3,47.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_5.setTransform(26.7,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_6.setTransform(13.7,47.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_7.setTransform(-0.5,47.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(-14.3,47.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_9.setTransform(-23.7,47.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_10.setTransform(-38.5,47.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_11.setTransform(-51.2,47.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_12.setTransform(-65.2,47.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_13.setTransform(-78.4,47.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo3, new cjs.Rectangle(-118.8,-146.8,236.8,236.8), null);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Ayq/KMAlVAAAMAAAA+VMglVAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// legal
	this.addr2 = new lib.dfgdfggg();
	this.addr2.parent = this;
	this.addr2.setTransform(3.5,388.2);
	this.addr2.alpha = 0;
	this.addr2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.addr2).wait(303).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(41).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// born
	this.born2 = new lib.dfs();
	this.born2.parent = this;
	this.born2.setTransform(76,389.7);

	this.timeline.addTween(cjs.Tween.get(this.born2).to({_off:true},298).wait(62));

	// Слой 19
	this.instance = new lib.ghggg();
	this.instance.parent = this;
	this.instance.setTransform(120,356.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(298).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// final
	this.instance_1 = new lib.ghgf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(51).to({alpha:0},6,cjs.Ease.get(1)).wait(1));

	// logo
	this.instance_2 = new lib.hgj();
	this.instance_2.parent = this;
	this.instance_2.setTransform(125.5,331.2,0.45,0.45,0,0,0,0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape_1.setTransform(161.1,365.4,0.45,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_2.setTransform(155.4,365.4,0.45,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_3.setTransform(151.4,365.4,0.45,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_4.setTransform(147.7,365.4,0.45,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_5.setTransform(142.8,365.3,0.45,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_6.setTransform(137.6,365.4,0.45,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_7.setTransform(131.7,365.4,0.45,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_8.setTransform(125.3,365.4,0.45,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_9.setTransform(119.2,365.4,0.45,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_10.setTransform(114.9,365.4,0.45,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_11.setTransform(108.3,365.4,0.45,0.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_12.setTransform(102.6,365.4,0.45,0.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_13.setTransform(96.2,365.4,0.45,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_14.setTransform(90.3,365.4,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2}]},74).to({state:[]},224).wait(62));

	// Слой 24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_1 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_2 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_3 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_4 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_5 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_6 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_7 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");
	var mask_graphics_8 = new cjs.Graphics().p("A9lfKMAANg+aMA6+AAMMgVxA+Vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-104.1,y:197.3}).wait(1).to({graphics:mask_graphics_1,x:-52.5,y:197.3}).wait(1).to({graphics:mask_graphics_2,x:-7.8,y:197.3}).wait(1).to({graphics:mask_graphics_3,x:30,y:197.3}).wait(1).to({graphics:mask_graphics_4,x:60.9,y:197.3}).wait(1).to({graphics:mask_graphics_5,x:85,y:197.3}).wait(1).to({graphics:mask_graphics_6,x:102.2,y:197.3}).wait(1).to({graphics:mask_graphics_7,x:112.5,y:197.3}).wait(1).to({graphics:mask_graphics_8,x:115.9,y:197.3}).wait(352));

	// mask-out (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_62 = new cjs.Graphics().p("A9cfQMAAAg+aMA6+AAAMgVkA+ag");
	var mask_1_graphics_63 = new cjs.Graphics().p("A5HfQMAAAg+aMAyPAAAMgSYA+ag");
	var mask_1_graphics_64 = new cjs.Graphics().p("A1KfQMAAAg+aMAqVAAAMgPfA+ag");
	var mask_1_graphics_65 = new cjs.Graphics().p("AxofQMAAAg+aMAjRAAAMgM5A+ag");
	var mask_1_graphics_66 = new cjs.Graphics().p("AugfQMAAAg+aIdBAAMgKnA+ag");
	var mask_1_graphics_67 = new cjs.Graphics().p("Ar0fQMAAAg+aIXpAAMgIqA+ag");
	var mask_1_graphics_68 = new cjs.Graphics().p("AphfQMAAAg+aITDAAMgG+A+ag");
	var mask_1_graphics_69 = new cjs.Graphics().p("AnpfQMAAAg+aIPTAAMgFmA+ag");
	var mask_1_graphics_70 = new cjs.Graphics().p("AmMfQMAAAg+aIMZAAMgEiA+ag");
	var mask_1_graphics_71 = new cjs.Graphics().p("AlKfQMAAAg+aIKVAAMgDyA+ag");
	var mask_1_graphics_72 = new cjs.Graphics().p("AkifQMAAAg+aIJFAAMgDVA+ag");
	var mask_1_graphics_73 = new cjs.Graphics().p("AkjfQMAAAg+aIIqAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_1_graphics_62,x:189,y:200}).wait(1).to({graphics:mask_1_graphics_63,x:151.1,y:200}).wait(1).to({graphics:mask_1_graphics_64,x:116.5,y:200}).wait(1).to({graphics:mask_1_graphics_65,x:85.6,y:200}).wait(1).to({graphics:mask_1_graphics_66,x:58.4,y:200}).wait(1).to({graphics:mask_1_graphics_67,x:34.7,y:200}).wait(1).to({graphics:mask_1_graphics_68,x:14.7,y:200}).wait(1).to({graphics:mask_1_graphics_69,x:-1.6,y:200}).wait(1).to({graphics:mask_1_graphics_70,x:-14.3,y:200}).wait(1).to({graphics:mask_1_graphics_71,x:-23.4,y:200}).wait(1).to({graphics:mask_1_graphics_72,x:-28.9,y:200}).wait(1).to({graphics:mask_1_graphics_73,x:-29.2,y:200}).wait(287));

	// ghghj
	this.instance_3 = new lib.ghghj();
	this.instance_3.parent = this;
	this.instance_3.setTransform(123,131.8,0.95,0.95);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({_off:true},65).wait(286));

	// hgj
	this.instance_4 = new lib.logo3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(124,280,0.85,0.85,0,0,0,-0.4,-28.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(0.98)).to({_off:true},60).wait(286));

	// mask-in-out (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_62 = new cjs.Graphics().p("A9ffNMAVlg+ZMAlaAAAMAAAA+Zg");
	var mask_2_graphics_63 = new cjs.Graphics().p("A8xfNMASag+ZMAnIAAAMAAAA+Zg");
	var mask_2_graphics_64 = new cjs.Graphics().p("A8HfNMAPig+ZMAotAAAMAAAA+Zg");
	var mask_2_graphics_65 = new cjs.Graphics().p("A7ifNMAM/g+ZMAqGAAAMAAAA+Zg");
	var mask_2_graphics_66 = new cjs.Graphics().p("A7BfNMAKug+ZMArVAAAMAAAA+Zg");
	var mask_2_graphics_67 = new cjs.Graphics().p("A6kfNMAIwg+ZMAsZAAAMAAAA+Zg");
	var mask_2_graphics_68 = new cjs.Graphics().p("A6MfNMAHGg+ZMAtTAAAMAAAA+Zg");
	var mask_2_graphics_69 = new cjs.Graphics().p("A54fNMAFvg+ZMAuDAAAMAAAA+Zg");
	var mask_2_graphics_70 = new cjs.Graphics().p("A5pfNMAEsg+ZMAunAAAMAAAA+Zg");
	var mask_2_graphics_71 = new cjs.Graphics().p("A5efNMAD8g+ZMAvBAAAMAAAA+Zg");
	var mask_2_graphics_72 = new cjs.Graphics().p("A5YfNMADfg+ZMAvSAAAMAAAA+Zg");
	var mask_2_graphics_73 = new cjs.Graphics().p("A5WfNMADWg+ZMAvXAAAMAAAA+Zg");
	var mask_2_graphics_137 = new cjs.Graphics().p("A9cfQMAAAg+aMA6+AAAMgVkA+ag");
	var mask_2_graphics_138 = new cjs.Graphics().p("A5HfQMAAAg+aMAyPAAAMgSYA+ag");
	var mask_2_graphics_139 = new cjs.Graphics().p("A1KfQMAAAg+aMAqVAAAMgPfA+ag");
	var mask_2_graphics_140 = new cjs.Graphics().p("AxofQMAAAg+aMAjRAAAMgM5A+ag");
	var mask_2_graphics_141 = new cjs.Graphics().p("AugfQMAAAg+aIdBAAMgKnA+ag");
	var mask_2_graphics_142 = new cjs.Graphics().p("Ar0fQMAAAg+aIXpAAMgIqA+ag");
	var mask_2_graphics_143 = new cjs.Graphics().p("AphfQMAAAg+aITDAAMgG+A+ag");
	var mask_2_graphics_144 = new cjs.Graphics().p("AnpfQMAAAg+aIPTAAMgFmA+ag");
	var mask_2_graphics_145 = new cjs.Graphics().p("AmMfQMAAAg+aIMZAAMgEiA+ag");
	var mask_2_graphics_146 = new cjs.Graphics().p("AlKfQMAAAg+aIKVAAMgDyA+ag");
	var mask_2_graphics_147 = new cjs.Graphics().p("AkifQMAAAg+aIJFAAMgDVA+ag");
	var mask_2_graphics_148 = new cjs.Graphics().p("AkjfQMAAAg+aIIqAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_2_graphics_62,x:428.4,y:200.3}).wait(1).to({graphics:mask_2_graphics_63,x:377.8,y:200.3}).wait(1).to({graphics:mask_2_graphics_64,x:332,y:200.3}).wait(1).to({graphics:mask_2_graphics_65,x:291,y:200.3}).wait(1).to({graphics:mask_2_graphics_66,x:254.9,y:200.3}).wait(1).to({graphics:mask_2_graphics_67,x:223.5,y:200.3}).wait(1).to({graphics:mask_2_graphics_68,x:197,y:200.3}).wait(1).to({graphics:mask_2_graphics_69,x:175.4,y:200.3}).wait(1).to({graphics:mask_2_graphics_70,x:158.5,y:200.3}).wait(1).to({graphics:mask_2_graphics_71,x:146.4,y:200.3}).wait(1).to({graphics:mask_2_graphics_72,x:139.2,y:200.3}).wait(1).to({graphics:mask_2_graphics_73,x:136.8,y:200.3}).wait(1).to({graphics:null,x:0,y:0}).wait(63).to({graphics:mask_2_graphics_137,x:189,y:200}).wait(1).to({graphics:mask_2_graphics_138,x:151.1,y:200}).wait(1).to({graphics:mask_2_graphics_139,x:116.5,y:200}).wait(1).to({graphics:mask_2_graphics_140,x:85.6,y:200}).wait(1).to({graphics:mask_2_graphics_141,x:58.4,y:200}).wait(1).to({graphics:mask_2_graphics_142,x:34.7,y:200}).wait(1).to({graphics:mask_2_graphics_143,x:14.7,y:200}).wait(1).to({graphics:mask_2_graphics_144,x:-1.6,y:200}).wait(1).to({graphics:mask_2_graphics_145,x:-14.3,y:200}).wait(1).to({graphics:mask_2_graphics_146,x:-23.4,y:200}).wait(1).to({graphics:mask_2_graphics_147,x:-28.9,y:200}).wait(1).to({graphics:mask_2_graphics_148,x:-29.2,y:200}).wait(212));

	// logo
	this.instance_5 = new lib.hgj();
	this.instance_5.parent = this;
	this.instance_5.setTransform(125.5,331.2,0.45,0.45,0,0,0,0.1,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#706F6F").s().p("AgrBHIAAiNIBWAAIAAAOIhHAAIAAAyIA/AAIAAAMIg/AAIAAAzIBIAAIAAAOg");
	this.shape_15.setTransform(161.1,365.4,0.45,0.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_16.setTransform(155.4,365.4,0.45,0.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#706F6F").s().p("AgHBHIAAiNIAPAAIAACNg");
	this.shape_17.setTransform(151.4,365.4,0.45,0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#706F6F").s().p("AgHBHIAAh/IgnAAIAAgOIBdAAIAAAOIgoAAIAAB/g");
	this.shape_18.setTransform(147.7,365.4,0.45,0.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#706F6F").s().p("AAtBHIgNglIg/AAIgOAlIgQAAIA2iNIAOAAIA3CNgAgaAUIA1AAIgbhHg");
	this.shape_19.setTransform(142.8,365.3,0.45,0.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#706F6F").s().p("AgGBHIgziNIARAAIAoB3IAqh3IAQAAIgzCNg");
	this.shape_20.setTransform(137.6,365.4,0.45,0.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_21.setTransform(131.7,365.4,0.45,0.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_22.setTransform(125.3,365.4,0.45,0.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAPAAIBJBvIAAhvIAPAAIAACNg");
	this.shape_23.setTransform(119.2,365.4,0.45,0.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#706F6F").s().p("AgHBHIAAiNIAOAAIAACNg");
	this.shape_24.setTransform(114.9,365.4,0.45,0.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#706F6F").s().p("AAnBHIhLhxIAABxIgPAAIAAiNIAOAAIBKBvIAAhvIAPAAIAACNg");
	this.shape_25.setTransform(108.3,365.4,0.45,0.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#706F6F").s().p("AAgBHIgig3IghAAIAAA3IgPAAIAAiNIAxAAQAYAAAMANQALAMAAARIAAABQAAAfgiAJIAnA6gAgjACIAfAAQAQAAAKgHQAJgIAAgOQAAgdghAAIghAAg");
	this.shape_26.setTransform(102.6,365.4,0.45,0.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#706F6F").s().p("AgrA1QgRgUAAggIAAgBQAAgfARgVQARgUAaAAQAbAAARAUQARAUAAAgIAAABQAAAfgRAVQgRAUgbAAQgaAAgRgUgAgggqQgMAQAAAaIAAABQAAAZAMARQAOAQASAAQAUAAAMgQQANgQAAgaIAAgBQAAgZgNgRQgMgQgUAAQgTAAgNAQg");
	this.shape_27.setTransform(96.2,365.4,0.45,0.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#706F6F").s().p("AgwBHIAAiNIAwAAQAWAAAMAMQAJAKAAAOQAAAYgXAJQAdAIAAAZIAAABQAAASgNAKQgOAKgWAAgAghA5IAhAAQAQAAAJgGQAJgHAAgMIAAgBQAAgZgiAAIghAAgAghgGIAfAAQANAAAIgHQAJgHAAgMQAAgMgIgGQgIgGgNAAIggAAg");
	this.shape_28.setTransform(90.3,365.4,0.45,0.45);

	var maskedShapeInstanceList = [this.instance_5,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_5}]},62).to({state:[]},12).to({state:[]},75).wait(211));

	// pic1
	this.instance_6 = new lib.pic1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(125,202);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// text1
	this.instance_7 = new lib.text1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(128.8,51.7);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(62).to({_off:false},0).to({_off:true},87).wait(211));

	// mask-in-out - копия (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_137 = new cjs.Graphics().p("A9ffNMAVlg+ZMAlaAAAMAAAA+Zg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A8xfNMASag+ZMAnIAAAMAAAA+Zg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A8HfNMAPig+ZMAotAAAMAAAA+Zg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A7ifNMAM/g+ZMAqGAAAMAAAA+Zg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A7BfNMAKug+ZMArVAAAMAAAA+Zg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A6kfNMAIwg+ZMAsZAAAMAAAA+Zg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A6MfNMAHGg+ZMAtTAAAMAAAA+Zg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A54fNMAFvg+ZMAuDAAAMAAAA+Zg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A5pfNMAEsg+ZMAunAAAMAAAA+Zg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A5efNMAD8g+ZMAvBAAAMAAAA+Zg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A5YfNMADfg+ZMAvSAAAMAAAA+Zg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A5WfNMADWg+ZMAvXAAAMAAAA+Zg");
	var mask_3_graphics_211 = new cjs.Graphics().p("A9cfQMAAAg+aMA6+AAAMgVkA+ag");
	var mask_3_graphics_212 = new cjs.Graphics().p("A5HfQMAAAg+aMAyPAAAMgSYA+ag");
	var mask_3_graphics_213 = new cjs.Graphics().p("A1KfQMAAAg+aMAqVAAAMgPfA+ag");
	var mask_3_graphics_214 = new cjs.Graphics().p("AxofQMAAAg+aMAjRAAAMgM5A+ag");
	var mask_3_graphics_215 = new cjs.Graphics().p("AugfQMAAAg+aIdBAAMgKnA+ag");
	var mask_3_graphics_216 = new cjs.Graphics().p("Ar0fQMAAAg+aIXpAAMgIqA+ag");
	var mask_3_graphics_217 = new cjs.Graphics().p("AphfQMAAAg+aITDAAMgG+A+ag");
	var mask_3_graphics_218 = new cjs.Graphics().p("AnpfQMAAAg+aIPTAAMgFmA+ag");
	var mask_3_graphics_219 = new cjs.Graphics().p("AmMfQMAAAg+aIMZAAMgEiA+ag");
	var mask_3_graphics_220 = new cjs.Graphics().p("AlKfQMAAAg+aIKVAAMgDyA+ag");
	var mask_3_graphics_221 = new cjs.Graphics().p("AkifQMAAAg+aIJFAAMgDVA+ag");
	var mask_3_graphics_222 = new cjs.Graphics().p("AkjfQMAAAg+aIIqAAMgDLA+ag");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_3_graphics_137,x:428.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_138,x:377.8,y:200.3}).wait(1).to({graphics:mask_3_graphics_139,x:332,y:200.3}).wait(1).to({graphics:mask_3_graphics_140,x:291,y:200.3}).wait(1).to({graphics:mask_3_graphics_141,x:254.9,y:200.3}).wait(1).to({graphics:mask_3_graphics_142,x:223.5,y:200.3}).wait(1).to({graphics:mask_3_graphics_143,x:197,y:200.3}).wait(1).to({graphics:mask_3_graphics_144,x:175.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_145,x:158.5,y:200.3}).wait(1).to({graphics:mask_3_graphics_146,x:146.4,y:200.3}).wait(1).to({graphics:mask_3_graphics_147,x:139.2,y:200.3}).wait(1).to({graphics:mask_3_graphics_148,x:136.8,y:200.3}).wait(1).to({graphics:null,x:0,y:0}).wait(62).to({graphics:mask_3_graphics_211,x:189,y:200}).wait(1).to({graphics:mask_3_graphics_212,x:151.1,y:200}).wait(1).to({graphics:mask_3_graphics_213,x:116.5,y:200}).wait(1).to({graphics:mask_3_graphics_214,x:85.6,y:200}).wait(1).to({graphics:mask_3_graphics_215,x:58.4,y:200}).wait(1).to({graphics:mask_3_graphics_216,x:34.7,y:200}).wait(1).to({graphics:mask_3_graphics_217,x:14.7,y:200}).wait(1).to({graphics:mask_3_graphics_218,x:-1.6,y:200}).wait(1).to({graphics:mask_3_graphics_219,x:-14.3,y:200}).wait(1).to({graphics:mask_3_graphics_220,x:-23.4,y:200}).wait(1).to({graphics:mask_3_graphics_221,x:-28.9,y:200}).wait(1).to({graphics:mask_3_graphics_222,x:-29.2,y:200}).wait(138));

	// pic2
	this.instance_8 = new lib.pic2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(134,185.5,0.9,0.9);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// text2
	this.instance_9 = new lib.text2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(129.5,53.8);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(137).to({_off:false},0).to({_off:true},86).wait(137));

	// mask-in-out - копия: 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_211 = new cjs.Graphics().p("A9ffNMAVlg+ZMAlaAAAMAAAA+Zg");
	var mask_4_graphics_212 = new cjs.Graphics().p("A8xfNMASag+ZMAnIAAAMAAAA+Zg");
	var mask_4_graphics_213 = new cjs.Graphics().p("A8HfNMAPig+ZMAotAAAMAAAA+Zg");
	var mask_4_graphics_214 = new cjs.Graphics().p("A7ifNMAM/g+ZMAqGAAAMAAAA+Zg");
	var mask_4_graphics_215 = new cjs.Graphics().p("A7BfNMAKug+ZMArVAAAMAAAA+Zg");
	var mask_4_graphics_216 = new cjs.Graphics().p("A6kfNMAIwg+ZMAsZAAAMAAAA+Zg");
	var mask_4_graphics_217 = new cjs.Graphics().p("A6MfNMAHGg+ZMAtTAAAMAAAA+Zg");
	var mask_4_graphics_218 = new cjs.Graphics().p("A54fNMAFvg+ZMAuDAAAMAAAA+Zg");
	var mask_4_graphics_219 = new cjs.Graphics().p("A5pfNMAEsg+ZMAunAAAMAAAA+Zg");
	var mask_4_graphics_220 = new cjs.Graphics().p("A5efNMAD8g+ZMAvBAAAMAAAA+Zg");
	var mask_4_graphics_221 = new cjs.Graphics().p("A5YfNMADfg+ZMAvSAAAMAAAA+Zg");
	var mask_4_graphics_222 = new cjs.Graphics().p("A5WfNMADWg+ZMAvXAAAMAAAA+Zg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(211).to({graphics:mask_4_graphics_211,x:428.4,y:200.3}).wait(1).to({graphics:mask_4_graphics_212,x:377.8,y:200.3}).wait(1).to({graphics:mask_4_graphics_213,x:332,y:200.3}).wait(1).to({graphics:mask_4_graphics_214,x:291,y:200.3}).wait(1).to({graphics:mask_4_graphics_215,x:254.9,y:200.3}).wait(1).to({graphics:mask_4_graphics_216,x:223.5,y:200.3}).wait(1).to({graphics:mask_4_graphics_217,x:197,y:200.3}).wait(1).to({graphics:mask_4_graphics_218,x:175.4,y:200.3}).wait(1).to({graphics:mask_4_graphics_219,x:158.5,y:200.3}).wait(1).to({graphics:mask_4_graphics_220,x:146.4,y:200.3}).wait(1).to({graphics:mask_4_graphics_221,x:139.2,y:200.3}).wait(1).to({graphics:mask_4_graphics_222,x:136.8,y:200.3}).wait(1).to({graphics:null,x:0,y:0}).wait(137));

	// pic3
	this.instance_10 = new lib.pic3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(21,127);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(211).to({_off:false},0).to({_off:true},87).wait(62));

	// text3
	this.instance_11 = new lib.text3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(122.5,54.2);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(211).to({_off:false},0).to({_off:true},87).wait(62));

	// Слой 2
	this.instance_12 = new lib.ClipGroup();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-84,202.2,1,1,0,0,0,132.7,202.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(212,212,212,0.2)").p("AxNAAMAibAAA");
	this.shape_29.setTransform(121.7,231.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(212,212,212,0.271)").p("AxNAAMAibAAA");
	this.shape_30.setTransform(121.7,214.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(212,212,212,0.345)").p("AxNAAMAibAAA");
	this.shape_31.setTransform(121.7,197.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(212,212,212,0.416)").p("AxNAAMAibAAA");
	this.shape_32.setTransform(121.7,180.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(212,212,212,0.49)").p("AxNAAMAibAAA");
	this.shape_33.setTransform(121.7,163.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(212,212,212,0.561)").p("AxNAAMAibAAA");
	this.shape_34.setTransform(121.7,146.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(212,212,212,0.635)").p("AxNAAMAibAAA");
	this.shape_35.setTransform(121.7,130.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(212,212,212,0.706)").p("AxNAAMAibAAA");
	this.shape_36.setTransform(121.7,113.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(212,212,212,0.78)").p("AxNAAMAibAAA");
	this.shape_37.setTransform(121.7,96.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(212,212,212,0.851)").p("AxNAAMAibAAA");
	this.shape_38.setTransform(121.7,79.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(212,212,212,0.925)").p("AxNAAMAibAAA");
	this.shape_39.setTransform(121.7,62.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#D4D4D4").p("AxNAAMAibAAA");
	this.shape_40.setTransform(121.7,45.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#FFF9ED","#FFFCE8","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.314,0.643,0.831,1],110.6,0,-110.6,0).s().p("AxRfMMAAAg+XMAgbAAAQA5AAAoAoQAnApAAA5MAAAA6DQAAA5gnApQgoAog5AAg");
	this.shape_41.setTransform(122.6,200.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#BDC8A2","#C7D1AC","#E0E5C5","#F1F4D7","#FCFCE2","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.196,0.298,0.404,0.514,0.643,0.831,1],110.6,0,-110.6,0).s().p("AxRfMMAAAg+XMAgbAAAQA5AAAnAoQAoApAAA5MAAAA6DQAAA5goApQgnAog5AAg");
	this.shape_42.setTransform(123.2,200.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FFF9ED","#FFFCE8","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.314,0.643,0.831,1],110.6,0,-110.6,0).s().p("AxRfMMAAAg+XMAgbAAAQA5AAAnAoQAoApAAA5MAAAA6DQAAA5goApQgnAog5AAg");
	this.shape_43.setTransform(124.1,200.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#BDC8A2","#C7D1AC","#E0E5C5","#F1F4D7","#FCFCE2","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.196,0.298,0.404,0.514,0.643,0.831,1],110.6,0,-110.6,0).s().p("AxRfMMAAAg+XMAgbAAAQA5AAAnAoQAoApAAA5MAAAA6DQAAA5goApQgnAog5AAg");
	this.shape_44.setTransform(124.8,200.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FFF9ED","#FFFCE8","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.314,0.643,0.831,1],110.6,0,-110.6,0).s().p("AxRfMMAAAg+XMAgbAAAQA4AAAoAoQAoApAAA5MAAAA6DQAAA5goApQgoAog4AAg");
	this.shape_45.setTransform(125.6,200.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#BDC8A2","#C7D1AC","#E0E5C5","#F1F4D7","#FCFCE2","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.196,0.298,0.404,0.514,0.643,0.831,1],110.6,0,-110.6,0).s().p("AxRfMMAAAg+XMAgbAAAQA4AAAoAoQAoApAAA5MAAAA6DQAAA5goApQgoAog4AAg");
	this.shape_46.setTransform(126.3,200.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FFF9ED","#FFFCE8","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.314,0.643,0.831,1],110.6,0,-110.6,0).s().p("AxRfMMAAAg+XMAgbAAAQA5AAAnAoQAoApAAA5MAAAA6DQAAA5goApQgnAog5AAg");
	this.shape_47.setTransform(127.2,200.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#BDC8A2","#C7D1AC","#E0E5C5","#F1F4D7","#FCFCE2","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.196,0.298,0.404,0.514,0.643,0.831,1],110.6,0,-110.6,0).s().p("AxRfMMAAAg+XMAgbAAAQA5AAAnAoQAoApAAA5MAAAA6DQAAA5goApQgnAog5AAg");
	this.shape_48.setTransform(127.8,200.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#FFF9ED","#FFFCE8","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.314,0.643,0.831,1],113.7,0,-113.7,0).s().p("AxwfMMAAAg+XMAhZAAAQA5AAAnAoQAoApAAA5MAAAA6DQAAA5goApQgnAog5AAg");
	this.shape_49.setTransform(125.8,200.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#BDC8A2","#C7D1AC","#E0E5C5","#F1F4D7","#FCFCE2","#FFFFE5","#F9F8E1","#F1EDDB"],[0.161,0.196,0.298,0.404,0.514,0.643,0.831,1],113.7,0,-113.7,0).s().p("AxwfMMAAAg+XMAhZAAAQA5AAAnAoQAoApAAA5MAAAA6DQAAA5goApQgnAog5AAg");
	this.shape_50.setTransform(126.5,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_12}]}).wait(360));

	// bg
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape_51.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.7,198.4,457.4,406.2);
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