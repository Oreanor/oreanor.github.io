(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"300x500_atlas_", frames: [[302,0,300,600],[0,0,300,600],[0,1204,300,600],[0,602,300,600]]}
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
	this.spriteSheet = ss["300x500_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["300x500_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["300x500_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["300x500_atlas_"];
	this.gotoAndStop(3);
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
	this.shape.graphics.f("#FFFFFF").s().p("AAbBMIgng+IgRgBIAAA/IgcAAIAAiVIAqgCQA4AAAAAtQAAAMgIALQgIALgMAEIAtBEgAgdgyIAAApIALABQARAAAHgEQAHgFAAgOQAAgLgIgEQgHgFgSAAg");
	this.shape.setTransform(74.2,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhFAAIAAAjIAyAAIAAAVIgyAAIAAAtIBEAAIAAAYg");
	this.shape_1.setTransform(61.3,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBMIg5iXIAeAAIAiBkIAkhkIAdAAIg7CXg");
	this.shape_2.setTransform(48.4,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwA5QgRgVAAgkQAAggASgXQASgWAdAAQAgAAARAUQARAVAAAkQAAAjgSAVQgSAWggAAQgeAAgQgVgAgbgnQgKAOAAAZQAAAZAJAPQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_3.setTransform(34.5,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxA5QgPgWAAgjQAAggARgXQASgWAdAAQAgAAAQAUQASAUgBAlQAAAkgRAUQgSAWggAAQgeAAgRgVgAgbgnQgKAPAAAYQAAAZAJAPQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgRAAgKAOg");
	this.shape_4.setTransform(19.7,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgbAAIAAiVIAbAAIAAA7IA7AAIAAg7IAbAAIAACVg");
	this.shape_5.setTransform(5.2,33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBLIAAiVIAbAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAbAAANAMQAOALAAAYQAAAVgOANQgPANgZAAgAguADIAAAxIAOABQATABAHgJQAGgGAAgNQAAgLgGgHQgIgHgRAAg");
	this.shape_6.setTransform(105.6,7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgjQAAggATgXQATgXAeAAQAZAAAQALIgLAWQgJgJgUAAQgSAAgMAQQgMARAAAWQAAAWALAPQAKAPATAAQAVAAAMgPIANAVQgQASggAAQgeAAgSgVg");
	this.shape_7.setTransform(90.5,7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxA4QgQgUAAgkQAAghASgVQASgXAdAAQAfAAASAUQAQATABAmQgBAkgRAVQgSAVggAAQgfAAgQgWgAgcgnQgJAOAAAZQAAAaAJAOQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgRAAgLAOg");
	this.shape_8.setTransform(76.6,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnA5QgRgUAAgkQAAggATgXQATgXAeAAQAaAAAPALIgLAWQgJgJgTAAQgTAAgMAQQgMARAAAWQABAXAKAOQAKAPAUAAQAUAAAMgPIANAVQgRASgfAAQgeAAgSgVg");
	this.shape_9.setTransform(62.9,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhFAAIAAAiIAyAAIAAAWIgyAAIAAAtIBEAAIAAAYg");
	this.shape_10.setTransform(50.6,7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/AzQAGAAAGgCQAGgCAFgGQAFgHAGgSQAGgSAFgZQAFgbACgVIBLAAIAACVIgaAAIAAh+IgdAAQgDAZgGAgQgHAcgIAPQgJAQgLAGQgMAGgQAAg");
	this.shape_11.setTransform(36.3,7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAvBLIAAiVIAaAAIAACVgAhHBLIAAiVIAZAAIAAA4IATgBQAbAAAMAMQAPALAAAYQAAAVgPANQgOANgZAAgAguADIAAAxIAOABQASABAJgJQAFgHABgMQgBgLgGgHQgJgHgQAAg");
	this.shape_12.setTransform(20.8,7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAbBLIAAh9Ig2AAIAAB9IgbAAIAAiVIBsAAIAACVg");
	this.shape_13.setTransform(5,7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAlBMIgLgeIgzAAIgKAeIgeAAIA8iXIAKAAIA9CXgAgRAZIAjAAIgSg2g");
	this.shape_14.setTransform(142.4,121.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBMIgfhSIgQBQIgaAAIAfiVIAOAAIAfBkIAghkIAOAAIAfCVIgaAAIgQhQIgeBSg");
	this.shape_15.setTransform(127.5,121.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgxA5QgQgWAAgjQAAgfASgXQASgXAdAAQAfAAARAUQASAVAAAkQAAAkgSAVQgSAVggAAQgeAAgRgVgAgbgnQgKAOAAAZQAAAaAJAOQAKAOAQAAQASAAALgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_16.setTransform(112,121.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAxBgIAAgqIhhAAIAAAqIgYAAIAAhBIALAAQANgQALgbQANgdALg2IBFAAIAAB+IARAAIAABBgAgKgNQgLAdgMAPIA/AAIAAhpIgZAAQgFAfgKAeg");
	this.shape_17.setTransform(96.9,123.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgxA5QgQgWAAgjQAAgfASgXQASgXAdAAQAfAAARAUQASAVAAAkQAAAkgSAVQgSAVggAAQgeAAgRgVgAgbgnQgKAOAAAZQAAAaAJAOQAKAOAQAAQASAAALgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_18.setTransform(75.6,121.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AguBLIAAiVIBdAAIAAAXIhCAAIAAB+g");
	this.shape_19.setTransform(62.9,121.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAXIhEAAIAAAkIAxAAIAAAVIgxAAIAAAtIBDAAIAAAYg");
	this.shape_20.setTransform(50.9,121.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhRBLIAAiVIAZAAIAAB/IAsAAIAAh/IAZAAIAAB/IAsAAIAAh/IAZAAIAACVg");
	this.shape_21.setTransform(34.8,121.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAlBMIgLgeIgzAAIgKAeIgeAAIA8iXIALAAIA8CXgAgRAZIAjAAIgSg2g");
	this.shape_22.setTransform(18.3,121.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgyBMIAAiVIArgCQAWAAAOAKQAMAKAAATQABASgUAKQAcAIAAAfQAAAVgPAMQgPAMgYAAgAgXA2IANAAQAQAAAIgGQAJgFAAgPQAAgNgHgGQgIgFgRAAIgOAAgAgXg0IAAAkIANAAQAZAAAAgTQAAgSgWAAIgQABg");
	this.shape_23.setTransform(5.7,121.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgOBLIAAh+IgvAAIAAgXIB7AAIAAAXIgyAAIAAB+g");
	this.shape_24.setTransform(115.3,95.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgxBMIAAiVIAggBQAiAAAQAKQARALAAAYQAAAyg8AAIgMAAIAAA3gAgWgyIAAAwIALAAQARAAAIgGQAJgGAAgOQAAgXglAAIgIABg");
	this.shape_25.setTransform(102.6,95.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgxA5QgQgWAAgjQAAggASgWQASgXAdAAQAfAAARAUQASAVAAAkQAAAkgSAVQgSAVggAAQgeAAgRgVgAgbgnQgKAOAAAZQAAAaAJAOQAKAOAQAAQASAAALgOQALgPAAgZQAAg1gmAAQgSAAgJAOg");
	this.shape_26.setTransform(88.7,95.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMBPIAAgQQgdgDgQgQQgRgQAAgcQAAgZARgSQARgRAcgCIAAgQIAZAAIAAAQQAdACAQARQARAQAAAbQAAAZgRASQgRASgcACIAAAQgAAMArQATgCAJgLQAJgLAAgTQAAgSgJgLQgKgLgSgCgAgngdQgKALAAASQAAARAKANQAJALASACIAAhVQgRABgKAMg");
	this.shape_27.setTransform(73,95.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEBMIgehSIgQBQIgaAAIAfiVIANAAIAgBkIAghkIAOAAIAeCVIgaAAIgPhQIgeBSg");
	this.shape_28.setTransform(56.6,95.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgwA5QgRgVABgkQAAggARgWQARgXAeAAQAfAAARAUQASAUgBAlQABAkgTAVQgRAVggAAQgeAAgQgVgAgbgnQgKAOAAAZQAAAaAJAOQAKAOAQAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_29.setTransform(41,95.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAZBFQgIgHgCgPQgDgVgLgKQgIgJgTAAIgBAAIAABEIgbAAIAAiVIAbAAIAAA7IACAAQAQAAALgIQAKgIACgQQADgPAGgHQAGgGAPAAIAJAAIAAAYIgFAAQgEAAgCACQgCACgBAIQgEANgIAKQgKAJgOADQAQAEAIAKQAJAKADASQADAKACACQABACAGAAIAEAAIAAAXIgJABQgOAAgHgHg");
	this.shape_30.setTransform(27.2,95.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag5BNIAAiXIAaAAIAABkIBOhnIALAAIAACYIgbAAIAAhkIhNBmg");
	this.shape_31.setTransform(6.5,95.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAlBMIgMgeIgyAAIgKAeIgeAAIA8iXIALAAIA8CXgAgRAZIAjAAIgSg2g");
	this.shape_32.setTransform(88.7,69.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOBLIAAh+IgvAAIAAgXIB7AAIAAAXIgyAAIAAB+g");
	this.shape_33.setTransform(75.2,69.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgwA5QgQgWgBgjQAAgfASgXQARgXAeAAQAfAAASAUQARAUAAAlQAAAkgSAVQgSAVggAAQgfAAgPgVgAgcgnQgJAPAAAYQAAAaAJAOQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgKAOg");
	this.shape_34.setTransform(61,69.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNBLIAAh+IgwAAIAAgXIB7AAIAAAXIgyAAIAAB+g");
	this.shape_35.setTransform(46.8,69.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgmA5QgSgUAAgkQAAggATgXQATgXAeAAQAZAAAQALIgLAWQgJgJgTAAQgTAAgMAQQgLARgBAWQABAXAKAOQALAPATAAQAUAAAMgPIANAWQgPARghAAQgeAAgRgVg");
	this.shape_36.setTransform(33.7,69.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag5BOIAAiYIAbAAIAABkIBNhnIALAAIAACYIgaAAIAAhkIhOBng");
	this.shape_37.setTransform(19.7,69.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAaBLIAAg7QgNACgNAAQgYAAgOgMQgNgLAAgWIAAgvIAbAAIAAAtQAAANAIAHQAGAGANABQAKgBANgDIAAhEIAbAAIAACVg");
	this.shape_38.setTransform(5.6,69.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-0.5,0,149.5,133.4), null);


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBMIgng+IgRgBIAAA/IgcAAIAAiVIAqgCQA4AAAAAtQAAANgIAKQgHAKgNAFIAtBEgAgdgyIAAApIALABQARAAAHgEQAIgGAAgNQAAgLgJgEQgHgFgSAAg");
	this.shape.setTransform(75.4,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhEAAIAAAjIAxAAIAAAVIgxAAIAAAtIBDAAIAAAYg");
	this.shape_1.setTransform(62.5,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBMIg5iXIAeAAIAiBkIAkhkIAdAAIg7CXg");
	this.shape_2.setTransform(49.6,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxA5QgPgVgBgkQAAghASgWQASgWAdAAQAgAAARAUQAQAUABAlQgBAjgRAVQgTAWgfAAQgfAAgQgVgAgcgnQgJAOAAAZQAAAZAJAPQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgRAAgLAOg");
	this.shape_3.setTransform(35.8,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwA5QgRgVAAgkQAAggASgXQASgWAdAAQAgAAAQAUQASAVAAAkQAAAjgSAVQgSAWggAAQgeAAgQgVgAgbgnQgKAOAAAZQAAAYAJAQQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_4.setTransform(21,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgbAAIAAiVIAbAAIAAA7IA7AAIAAg7IAbAAIAACVg");
	this.shape_5.setTransform(6.4,33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAvBLIAAiVIAaAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAbAAANAMQAOALAAAYQAAAVgOANQgPANgZAAgAguADIAAAxIAOABQATABAIgJQAFgHABgMQgBgLgGgHQgIgHgRAAg");
	this.shape_6.setTransform(106.9,7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgjQAAggATgXQATgXAeAAQAZAAAQALIgLAWQgJgJgUAAQgSAAgMAQQgLAQAAAXQAAAXAKAOQALAPASAAQAWAAAMgPIAMAVQgQASggAAQgeAAgSgVg");
	this.shape_7.setTransform(91.7,7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxA4QgQgVAAgjQABggARgWQASgXAdAAQAgAAAQAUQARATABAmQgBAkgRAVQgSAVggAAQgfAAgQgWgAgbgnQgKAPAAAYQAAAaAJAOQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_8.setTransform(77.8,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgjQAAggATgXQATgXAeAAQAaAAAPALIgLAWQgJgJgUAAQgSAAgLAQQgMARgBAWQABAWAKAPQAKAPAUAAQAVAAALgPIANAVQgQASgfAAQgfAAgSgVg");
	this.shape_9.setTransform(64.1,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhEAAIAAAiIAwAAIAAAWIgwAAIAAAtIBDAAIAAAYg");
	this.shape_10.setTransform(51.8,7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/AzQAGAAAHgCQAFgDAFgFQAFgGAGgTQAGgSAFgZQAEgUADgcIBLAAIAACVIgaAAIAAh+IgdAAQgDAZgGAgQgHAcgIAPQgJAQgLAGQgLAGgRAAg");
	this.shape_11.setTransform(37.5,7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAvBLIAAiVIAaAAIAACVgAhHBLIAAiVIAaAAIAAA4IATgBQAaAAAMAMQAPALAAAYQAAAVgPANQgNANgaAAgAgtADIAAAxIANABQATABAHgJQAHgHAAgMQgBgMgGgGQgJgHgQAAg");
	this.shape_12.setTransform(22,7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBLIAAh9Ig3AAIAAB9IgbAAIAAiVIBsAAIAACVg");
	this.shape_13.setTransform(6.2,7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag1BPIAAidIAcAAIAAA7IAWgBQAbAAAPANQAQAMAAAZQAAAWgQAOQgPANgbAAgAgZACIAAA2IAQAAQAjAAgBgcQABgMgJgHQgJgIgPAAg");
	this.shape_14.setTransform(190.9,96.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOBPIAAiFIgzAAIAAgYICDAAIAAAYIg1AAIAACFg");
	this.shape_15.setTransform(176.6,96.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpA8QgSgVAAgnQAAghAUgYQAUgYAgAAQAbAAAQALIgMAYQgJgKgVAAQgUAAgMARQgMARAAAXQAAAZALAQQAMAPATAAQAWAAANgQIANAXQgRASghAAQghAAgSgWg");
	this.shape_16.setTransform(162.7,96.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzA8QgRgXAAglQAAgiASgYQATgXAfAAQAhAAASAVQASAVAAAnQAAAmgSAWQgUAWghAAQggAAgRgWgAgdgpQgKAPAAAaQAAAcAKAOQAKAPARAAQAUAAALgPQALgOAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_17.setTransform(148,96.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAgBPIAAhHIg+AAIAABHIgcAAIAAidIAcAAIAAA+IA+AAIAAg+IAbAAIAACdg");
	this.shape_18.setTransform(132.7,96.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag0BQIAAidIAtgCQAYAAANALQAOAKAAAUQAAATgUALQAdAIAAAhQAAAWgPAMQgSANgYAAgAgYAEIAAA1IAOAAQARAAAIgGQAKgGgBgQQABgNgJgGQgHgGgTAAgAgYg3IAAAmIANAAQAbAAAAgUQAAgTgYAAIgQABg");
	this.shape_19.setTransform(118.8,96.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag8BSIAAigIAcAAIAABpIBRhsIAMAAIAACgIgcAAIAAhqIhSBtg");
	this.shape_20.setTransform(104.1,96.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOBPIAAiFIgzAAIAAgYICDAAIAAAYIg1AAIAACFg");
	this.shape_21.setTransform(89.1,96.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAdBPIAAiFIg5AAIAACFIgcAAIAAidIBxAAIAACdg");
	this.shape_22.setTransform(74.5,96.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAnBRIgMghIg1AAIgLAhIggAAIBAigIALAAIBACggAgSAbIAlAAIgTg6g");
	this.shape_23.setTransform(60,96.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA0BmIAAgtIhnAAIAAAtIgZAAIAAhFIALAAQAOgRAMgdQAOgfALg5IBJAAIAACGIASAAIAABFgAgLgOQgLAdgNASIBDAAIAAhvIgbAAQgFAhgLAfg");
	this.shape_24.setTransform(44.8,98.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAnBRIgMghIg2AAIgKAhIggAAIBAigIALAAIBACggAgTAbIAmAAIgTg6g");
	this.shape_25.setTransform(29.8,96.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag8BSIAAigIAcAAIAABpIBShsIALAAIAACgIgcAAIAAhqIhSBtg");
	this.shape_26.setTransform(8.2,96.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag2BPIAAidIAdAAIAAA7IAWgBQAbAAAPANQAQAMAAAZQAAAWgQAOQgPANgbAAgAgZADIAAA1IAQAAQAjAAAAgcQAAgMgJgHQgJgHgQAAIgRABg");
	this.shape_27.setTransform(179.8,70);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOBPIAAiFIgzAAIAAgYICDAAIAAAYIg1AAIAACFg");
	this.shape_28.setTransform(165.5,70);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgpA8QgSgWAAglQAAgiAUgYQAUgYAfAAQAbAAARALIgMAYQgJgKgVAAQgTAAgNARQgMARAAAYQAAAYALAPQALAQAUAAQAWAAANgQIANAXQgRASghAAQghAAgSgWg");
	this.shape_29.setTransform(151.7,70);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgzA7QgRgVAAgmQAAgiASgYQATgXAfAAQAhAAASAVQASAVAAAnQAAAlgTAXQgTAWghAAQghAAgQgXgAgdgpQgKAPAAAaQAAAaAJARQAKAOASAAQATAAAMgOQALgPAAgcQAAg4goAAQgTAAgKAPg");
	this.shape_30.setTransform(137,70);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAfBPIAAhHIg+AAIAABHIgcAAIAAidIAcAAIAAA+IA+AAIAAg+IAcAAIAACdg");
	this.shape_31.setTransform(121.6,70);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAgBPIAAhHIg+AAIAABHIgdAAIAAidIAdAAIAAA+IA+AAIAAg+IAbAAIAACdg");
	this.shape_32.setTransform(106.4,70);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgyBPIAAidIBlAAIAAAYIhIAAIAAAmIAzAAIAAAXIgzAAIAAAvIBHAAIAAAZg");
	this.shape_33.setTransform(92.8,70);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag0BQIAAidIAhgCQAjAAATAMQARALAAAZQAAA1g/ABIgMgBIAAA6gAgXg1IAAAzIALAAQASAAAJgGQAJgGAAgPQAAgYgngBIgIABg");
	this.shape_34.setTransform(79.9,69.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag1BQIAAidIAtgCQAYAAAOALQAOAKAAAUQAAATgUAKQAeAKgBAgQAAAWgQANQgRAMgYAAgAgZAEIAAA1IAPAAQAQAAAJgGQAJgGAAgPQAAgOgIgGQgIgHgSABgAgZg3IAAAmIAPAAQAaABAAgVQAAgSgZgBg");
	this.shape_35.setTransform(66.8,69.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgyBPIAAidIBlAAIAAAYIhIAAIAAAmIAzAAIAAAXIgzAAIAAAvIBGAAIAAAZg");
	this.shape_36.setTransform(53.7,70);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAgBPIAAhHIg+AAIAABHIgcAAIAAidIAcAAIAAA+IA+AAIAAg+IAcAAIAACdg");
	this.shape_37.setTransform(39.4,70);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAnBRIgMghIg2AAIgKAhIgfAAIA/igIALAAIA/CggAgTAbIAmAAIgTg6g");
	this.shape_38.setTransform(24.8,69.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEBQIgghWIgRBUIgbAAIAgidIAPAAIAhBqIAihqIAPAAIAgCdIgbAAIgRhUIggBWg");
	this.shape_39.setTransform(9.1,70.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(0.8,0,195.6,108.7), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBMIgng+IgRgBIAAA/IgcAAIAAiVIAqgCQA4AAAAAtQAAANgIAKQgIALgMAEIAsBEgAgdgyIAAApIALABQARAAAGgEQAJgFgBgOQAAgLgIgEQgHgFgSAAg");
	this.shape.setTransform(74.7,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhEAAIAAAjIAwAAIAAAVIgwAAIAAAtIBDAAIAAAYg");
	this.shape_1.setTransform(61.8,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBMIg4iXIAdAAIAjBkIAkhkIAdAAIg7CXg");
	this.shape_2.setTransform(48.9,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxA5QgQgWAAgjQAAggASgXQASgWAdAAQAfAAASAUQAQAUABAlQAAAjgSAVQgSAWggAAQgeAAgRgVgAgcgnQgJAPAAAYQAAAZAJAPQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgRAAgLAOg");
	this.shape_3.setTransform(35,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxA5QgQgVAAgkQAAghASgWQASgWAdAAQAfAAARAUQARAUABAlQgBAjgRAVQgSAWggAAQgeAAgRgVgAgcgnQgJAOAAAZQAAAZAJAPQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgRAAgLAOg");
	this.shape_4.setTransform(20.3,33.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA7IA7AAIAAg7IAaAAIAACVg");
	this.shape_5.setTransform(5.7,33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBLIAAiVIAbAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAaAAAOAMQAOALAAAYQAAAVgPANQgNANgaAAgAguADIAAAxIAOABQATABAHgJQAGgHAAgMQAAgMgHgGQgHgHgRAAg");
	this.shape_6.setTransform(106.1,7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnA5QgRgUAAgkQAAghATgWQATgXAdAAQAbAAAPALIgLAWQgJgJgUAAQgSAAgMAQQgMARAAAWQAAAXAMAOQAJAPATAAQAWAAAMgPIAMAVQgRASgfAAQgfAAgRgVg");
	this.shape_7.setTransform(91,7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxA4QgQgVAAgjQAAggASgWQASgXAdAAQAfAAARAUQASAUAAAlQAAAkgSAVQgSAVggAAQgeAAgRgWgAgbgnQgKAOAAAZQAAAaAJAOQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_8.setTransform(77.1,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgjQAAggATgXQATgXAeAAQAZAAAQALIgLAWQgJgJgUAAQgSAAgMAQQgLAQAAAXQAAAXAKAOQALAPASAAQAWAAAMgPIAMAVQgQASggAAQgeAAgSgVg");
	this.shape_9.setTransform(63.4,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhEAAIAAAiIAxAAIAAAWIgxAAIAAAtIBDAAIAAAYg");
	this.shape_10.setTransform(51.1,7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/AzQAFAAAIgCQAEgCAGgGQAEgGAHgTQAHgSAEgZQAFgbACgVIBLAAIAACVIgaAAIAAh+IgeAAQgDAfgFAaQgGAcgJAPQgIAPgNAHQgKAGgRAAg");
	this.shape_11.setTransform(36.8,7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAuBLIAAiVIAbAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAbAAANAMQAOALAAAYQAAAVgPANQgNANgaAAgAguADIAAAxIAOABQATABAHgJQAGgHAAgMQAAgMgHgGQgHgHgRAAg");
	this.shape_12.setTransform(21.3,7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBLIAAh9Ig3AAIAAB9IgaAAIAAiVIBrAAIAACVg");
	this.shape_13.setTransform(5.5,7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2BLIAAgXIAEAAQAFAAACgDQADgEABgGQAFgZAYgKQgTgEgIgJQgHgKAAgMQAAgTAOgMQAPgNAbAAIArACIAACUIgaAAIAAg+IgGAAQgRAAgJAIQgKAKgDARQgDAOgHAIQgHAGgMAAIgJgBgAgKgwQgIAGAAAKQAAAYAhAAIAOABIAAguIgTgBQgMAAgIAGg");
	this.shape_14.setTransform(132.5,94.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5BNIAAiWIAbAAIAABjIBNhmIALAAIAACWIgaAAIAAhjIhOBmg");
	this.shape_15.setTransform(118.9,94.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAeBKIAAhCIg7AAIAABCIgaAAIAAiTIAaAAIAAA6IA7AAIAAg6IAaAAIAACTg");
	this.shape_16.setTransform(103.5,94.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAlBLIgMgdIgyAAIgKAdIgeAAIA8iWIAKAAIA9CWgAgSAZIAjAAIgRg2g");
	this.shape_17.setTransform(31,94.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAkBLIgLgdIgyAAIgKAdIgeAAIA8iWIALAAIA8CWgAgSAZIAjAAIgRg2g");
	this.shape_18.setTransform(89.7,94.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgyBLIAAiUIArgBQAXAAAMAKQANAKAAASQABASgUAKQAcAIAAAfQAAAUgPAMQgPAMgYAAgAgXAEIAAAxIANABQAPAAAJgGQAJgFgBgPQAAgNgGgGQgIgGgRAAgAgXg0IAAAkIANABQAZAAAAgUQAAgRgXAAg");
	this.shape_19.setTransform(76.3,94.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAuBKIAAiTIAaAAIAACTgAhHBKIAAiTIAZAAIAAA4IATgCQAaAAAOAMQAOAMAAAXQAAAVgOANQgNAMgbAAgAguACIAAAzIAPAAQATAAAHgIQAFgIAAgKQAAgMgHgHQgHgGgQgBg");
	this.shape_20.setTransform(60,94.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgjQAAggATgXQATgWAeAAQAZAAAQALIgLAWQgJgKgUAAQgSAAgMARQgLAQAAAWQAAAXAKAOQAMAPARAAQAVAAAMgPIANAVQgQARggAAQgfAAgRgUg");
	this.shape_21.setTransform(45,94.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmA5QgSgWAAgiQAAggATgXQAUgWAdAAQAZAAAQALIgLAWQgJgKgUAAQgSAAgMARQgLAQAAAWQAAAXALAOQAKAPASAAQAVAAAMgPIANAVQgQARggAAQgeAAgRgUg");
	this.shape_22.setTransform(17.4,94.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgyBLIAAiUIArgBQAXAAANAKQAMAKAAASQABASgUAKQAcAIAAAfQAAAUgPAMQgPAMgYAAgAgXAEIAAAxIAOABQAOAAAJgGQAJgGAAgOQAAgNgIgGQgHgGgRAAgAgXg0IAAAkIANABQAZAAAAgUQAAgRgWAAg");
	this.shape_23.setTransform(5.1,94.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgyBKIAAiTIAaAAIAAA4IAVgCQAaAAAOAMQAOAMAAAXQAAAVgOANQgOAMgaAAgAgYACIAAAzIAPAAQAhAAAAgaQAAgMgIgHQgJgGgOgBg");
	this.shape_24.setTransform(215.1,69.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNBKIAAh8IgwAAIAAgXIB7AAIAAAXIgyAAIAAB8g");
	this.shape_25.setTransform(201.6,69.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgnA5QgRgUAAgkQAAghATgWQATgWAeAAQAaAAAOALIgKAWQgJgKgUAAQgSAAgMARQgLAPAAAXQAAAXAKAOQALAPASAAQAVAAAMgPIANAVQgQARggAAQgfAAgRgUg");
	this.shape_26.setTransform(188.6,69.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgwA4QgQgVAAgjQAAggARgWQASgWAdAAQAfAAARAUQARATAAAlQAAAjgSAVQgRAVggAAQgeAAgQgVgAgbgmQgKAOAAAYQAAAaAJAOQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgRAAgKAPg");
	this.shape_27.setTransform(174.7,69.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAeBKIAAhCIg6AAIAABCIgbAAIAAiTIAbAAIAAA6IA6AAIAAg6IAaAAIAACTg");
	this.shape_28.setTransform(160.3,69.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ABCBgIAAgrIibAAIAAiUIAZAAIAAB+IAsAAIAAh+IAYAAIAAB+IAsAAIAAh+IAaAAIAAB9IAQAAIAABCg");
	this.shape_29.setTransform(143.7,71.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgwA4QgQgVAAgjQAAggARgWQASgWAdAAQAfAAARAUQARATAAAlQAAAjgSAVQgRAVggAAQgeAAgQgVgAgbgmQgKAOAAAYQAAAaAJAOQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgRAAgKAPg");
	this.shape_30.setTransform(125.8,69.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDBMIgfhSIgQBPIgZAAIAeiTIAOAAIAfBjIAghjIAOAAIAeCTIgZAAIgQhPIgeBSg");
	this.shape_31.setTransform(110.3,69.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag2BLIAAgXIAEAAQAFAAACgDQACgCABgIQAGgZAYgKQgUgEgHgJQgHgJAAgNQAAgTAOgMQAPgNAbAAIArACIAACUIgaAAIAAg+IgHAAQgQAAgJAIQgKAJgDASQgDAPgHAHQgHAGgMAAIgJgBgAgKgwQgJAGABAKQAAAYAgAAIAPABIAAguIgTgBQgMAAgIAGg");
	this.shape_32.setTransform(88.9,69.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAkBLIgKgeIgzAAIgKAeIgdAAIA7iVIALAAIA7CVgAgRAZIAjAAIgSg2g");
	this.shape_33.setTransform(75.9,69.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAYBFQgGgHgEgPQgDgWgKgJQgJgJgSAAIgCAAIAABDIgaAAIAAiUIAaAAIAAA7IADAAQARAAAJgIQAKgHADgRQADgOAGgHQAGgHAOAAIAJABIAAAXIgEAAQgEAAgDACQgCACgBAIQgCANgKAKQgJAJgNADQAOAEAJAKQAJALADARQACAIACADQADADAEAAIAFgBIAAAYIgJABQgNAAgJgHg");
	this.shape_34.setTransform(62.9,69.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgwA4QgQgUAAgkQAAghARgVQASgWAdAAQAfAAARAUQARAUAAAkQAAAjgSAVQgSAVgfAAQgeAAgQgVgAgbgmQgKAOAAAYQAAAaAJAOQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgJAPg");
	this.shape_35.setTransform(48.6,69.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgmA5QgSgVAAgjQAAggATgXQAUgWAdAAQAZAAAQALIgLAWQgJgKgTAAQgTAAgMARQgLAQAAAWQAAAWALAPQAKAPATAAQAVAAALgPIANAVQgQARggAAQgeAAgRgUg");
	this.shape_36.setTransform(34.9,69.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAuBKIAAiTIAaAAIAACTgAhHBKIAAiTIAZAAIAAA4IATgCQAZAAAPAMQAOAMAAAXQAAAVgOANQgOAMgaAAgAguACIAAAzIAOAAQAUAAAHgIQAFgHABgLQgBgLgGgIQgJgHgQAAg");
	this.shape_37.setTransform(19.7,69.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgyBLIAAiUIArgBQAXAAANAKQAMAKAAASQABASgUAKQAcAIAAAfQAAAUgPAMQgPAMgYAAgAgXA1IAOABQAOAAAJgGQAJgGAAgOQAAgNgIgGQgGgFgSAAIgOAAgAgXg0IAAAkIANABQAZAAAAgUQAAgRgWAAg");
	this.shape_38.setTransform(5.1,69.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(0,0,220.2,102.1), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBMIgng+IgRgBIAAA/IgcAAIAAiWIAqgBQA4AAAAAsQAAAOgIALQgIAKgMAEIAtBEgAgdgyIAAAqIALAAQARAAAHgFQAHgEAAgOQAAgLgIgFQgHgEgSAAg");
	this.shape.setTransform(74.7,59.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAYIhFAAIAAAjIAxAAIAAAVIgxAAIAAAtIBEAAIAAAYg");
	this.shape_1.setTransform(61.8,59.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBMIg4iXIAeAAIAiBkIAkhkIAdAAIg7CXg");
	this.shape_2.setTransform(48.9,59.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxA5QgQgWAAgjQAAggASgXQASgWAdAAQAgAAAQAUQASAVAAAkQAAAjgSAVQgSAWggAAQgeAAgRgVgAgbgnQgKAOAAAZQAAAaAJAOQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_3.setTransform(35,59.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxA5QgPgWAAgjQAAggARgXQARgWAeAAQAgAAAQAUQASAUgBAlQAAAjgRAVQgSAWggAAQgeAAgRgVgAgbgnQgKAPAAAYQAAAZAJAPQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_4.setTransform(20.2,59.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBLIAAhEIg7AAIAABEIgaAAIAAiVIAaAAIAAA7IA7AAIAAg7IAaAAIAACVg");
	this.shape_5.setTransform(5.7,59.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBLIAAiVIAbAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAbAAANANQAOALAAAXQAAAWgPAMQgNANgaAAgAguADIAAAyIAOAAQAUAAAGgHQAGgHAAgMQAAgMgHgHQgHgGgRAAg");
	this.shape_6.setTransform(106.1,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA5QgSgUAAgkQAAggATgXQAUgXAdAAQAaAAAPALIgLAWQgJgJgUAAQgSAAgMAQQgLARAAAWQAAAXALAOQAKAPASAAQAWAAAMgPIAMAVQgQASggAAQgeAAgRgVg");
	this.shape_7.setTransform(91,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxA4QgQgUAAgkQAAghASgWQASgWAdAAQAfAAASAUQAQATABAmQgBAjgRAWQgTAVgfAAQgfAAgQgWgAgcgnQgJAOAAAZQAAAaAJAOQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgRAAgLAOg");
	this.shape_8.setTransform(77.1,33.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnA5QgRgUAAgkQAAghATgWQATgXAeAAQAZAAAQALIgLAWQgJgJgTAAQgTAAgMAQQgMARAAAWQAAAXALAOQALAPATAAQAUAAAMgPIANAVQgRASgfAAQgfAAgRgVg");
	this.shape_9.setTransform(63.4,33.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAXIhFAAIAAAkIAyAAIAAAVIgyAAIAAAtIBEAAIAAAYg");
	this.shape_10.setTransform(51.1,33.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/AzQAFAAAHgCQAGgCAFgGQAFgHAGgSQAGgSAFgZQAFgcACgUIBLAAIAACWIgaAAIAAh/IgdAAQgEAhgFAYQgHAdgIAPQgJAOgMAHQgLAGgQAAg");
	this.shape_11.setTransform(36.8,33.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAuBLIAAiVIAbAAIAACVgAhIBLIAAiVIAaAAIAAA4IATgBQAbAAANANQAOALAAAXQAAAVgOANQgPANgZAAgAguADIAAAyIAOAAQAUAAAGgHQAGgHAAgMQAAgMgGgHQgIgGgRAAg");
	this.shape_12.setTransform(21.2,33.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBLIAAh+Ig3AAIAAB+IgaAAIAAiVIBrAAIAACVg");
	this.shape_13.setTransform(5.4,33.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAXIhEAAIAAAkIAwAAIAAAVIgwAAIAAAtIBCAAIAAAYg");
	this.shape_14.setTransform(158,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAvBLIAAiVIAaAAIAACVgAhHBLIAAiVIAZAAIAAA4IAUgBQAaAAAMANQAPAKAAAYQAAAVgPANQgNANgaAAgAguADIAAAyIAOAAQAUAAAHgHQAFgIABgLQgBgMgGgHQgIgGgRAAg");
	this.shape_15.setTransform(142.9,7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAeBLIAAhDIg7AAIAABDIgaAAIAAiVIAaAAIAAA7IA7AAIAAg7IAaAAIAACVg");
	this.shape_16.setTransform(126.9,7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAxBhIAAgrIhhAAIAAArIgYAAIAAhBIAKAAQAMgQANgcQANgdALg3IBFAAIAACAIARAAIAABBgAgKgNQgLAcgMARIA/AAIAAhqIgaAAQgEAhgKAcg");
	this.shape_17.setTransform(112,9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgwA4QgRgUABgkQAAghARgWQARgWAeAAQAfAAASAUQAQATAAAmQABAjgTAWQgRAVggAAQgfAAgPgWgAgcgnQgJAOAAAZQAAAaAJAOQAJAOARAAQATAAAKgOQALgOAAgaQAAg1gmAAQgSAAgKAOg");
	this.shape_18.setTransform(97,7.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgyBMIAAiVIArgCQAWAAANAKQAOALAAASQAAASgTAKQAcAJAAAeQAAAVgQAMQgPAMgYAAgAgXAEIAAAyIANAAQARAAAHgGQAJgFAAgPQAAgNgHgGQgIgFgSgBgAgXg0IAAAkIANAAQAZABAAgUQAAgSgXAAg");
	this.shape_19.setTransform(83.7,7.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgxA4QgPgUAAgkQAAghARgWQARgWAeAAQAgAAAQAUQASATgBAmQAAAjgSAWQgSAVgfAAQgfAAgQgWgAgbgnQgKAOAAAZQAAAaAJAOQAJAOARAAQATAAALgOQAKgOAAgaQAAg1gmAAQgSAAgJAOg");
	this.shape_20.setTransform(69.7,7.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgxBMIAAiWIAfgBQAiAAARALQARALAAAXQAAAzg8AAIgMgBIAAA4gAgWgyIAAAwIAKAAQARAAAJgGQAIgGAAgOQAAgXgkAAIgIABg");
	this.shape_21.setTransform(56.5,7.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAcBLIAAh+Ig2AAIAAB+IgbAAIAAiVIBsAAIAACVg");
	this.shape_22.setTransform(43,7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnA5QgRgUAAgkQAAggATgXQATgXAeAAQAaAAAPALIgLAWQgJgJgUAAQgSAAgMAQQgLARAAAWQAAAXALAOQAKAPASAAQAWAAAMgPIAMAVQgQASgfAAQgfAAgSgVg");
	this.shape_23.setTransform(29.7,7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgvBLIAAiVIBfAAIAAAXIhEAAIAAAkIAwAAIAAAVIgwAAIAAAtIBDAAIAAAYg");
	this.shape_24.setTransform(17.4,7.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgyBLIAAiVIBaAAIAAAXIg/AAIAAAkIATgBQAZAAAPAMQAPALAAAXQAAAUgPANQgPAMgZAAgAgXAFIAAAwIAOAAQARAAAHgGQAIgGAAgNQAAgKgHgHQgHgHgRAAg");
	this.shape_25.setTransform(5.1,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(0,0,162.8,67.6), null);


(lib.p4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4, new cjs.Rectangle(0,0,300,600), null);


(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3, new cjs.Rectangle(0,0,300,600), null);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2, new cjs.Rectangle(0,0,300,600), null);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p1, new cjs.Rectangle(0,0,300,600), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj7D8QhphoAAiUQAAiTBphoQBohpCTAAQCUAABoBpQBpBoAACTQAACUhpBoQhoBpiUAAQiTAAhohpgAhLAdIhIEMQBFAjBOAAQCJAABihhQBhhhAAiKQAAgwgOgvgAk6BpQASA5AmAuQAlAuAzAfIBBj2IhVAbIgaBfIgdAJIAahfgAkPi+Qg8BWAABoQAAAvAMAqIBpghIBiluQhgAkg7BUgAhXk/IhiFuIBWgcIA6jYIAdgJIg6DYIF/h5QgjhhhVg9QhWg+hrAAQgtAAgqAMg");
	mask.setTransform(67.3,67.3);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],41.4,25.1,-39.3,-23.8).s().p("AqgClIH8tFINFH8In7NFg");
	this.shape.setTransform(67.3,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],41.4,25.1,-39.3,-23.8).s().p("AqgClIH8tFINFH8In7NFg");
	this.shape_1.setTransform(67.3,67.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(31.7,31.7,71.4,71.4), null);


(lib.ClipGroup_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkgEZQh4h8AAidQAAipB4h3QB3h4CpAAQCpAAB4B4QB4B3AACpQAACph4B5Qh4B3ipAAQilAAh7iAg");
	mask.setTransform(81.8,81.8);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#D22D3E","#CB2D3C","#C92D3B","#B82B34","#B42B33","#AA2A2F","#A2292C","#992929","#75221C"],[0,0.047,0.051,0.082,0.161,0.439,0.502,0.694,0.835,1,1],29.5,29.5,-36.3,-36.3).s().p("AsxAAIMxsxIMyMxIsyMyg");
	this.shape.setTransform(81.8,81.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_3, new cjs.Rectangle(40.9,40.9,81.8,81.8), null);


(lib.ClipGroup_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkaEaQh0h0gBimQABikB0h2QB2h0CkgBQCmABB0B0QB2B2gBCkQABCmh2B0Qh0B2imgBQikABh2h2g");
	mask.setTransform(78.2,78.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.514,0.671,0.973,1,1],-26,-35.3,37.8,51.3).s().p("AsMh1IOCqXIKXOCIuCKXg");
	this.shape.setTransform(78.1,78.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_3, new cjs.Rectangle(38.2,38.2,79.9,79.9), null);


(lib.ClipGroup_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkUEVQhzhyAAijQAAiiBzhyQByhzCiAAQCjAAByBzQBzByAACiQAACjhzByQhyBzijAAQiiAAhyhzg");
	mask.setTransform(76.7,76.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D32D3E","#C42C39","#9D292B","#992929","#75221C"],[0,0.224,0.475,0.957,1,1],-25.4,-34.5,37.2,50.4).s().p("Ar+hzINyqLIKKNyItxKKg");
	this.shape.setTransform(76.7,76.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_3, new cjs.Rectangle(37.5,37.5,78.4,78.4), null);


(lib.ClipGroup_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag3AKQgHgIADgQIAVAAQABALAKgCQAHgCAEgHIATAAQgNAWgVAGQgGABgFAAQgIAAgFgFgAAZgOIAkAAIgMAFIgJABQgKAAgFgGg");
	mask.setTransform(8,7.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],37.6,22.8,-43,-26.1).s().p("AhNAJIAxhRIBqBBIgxBQg");
	this.shape.setTransform(7.8,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],37.6,22.8,-43,-26.1).s().p("AhNAJIAxhRIBqBBIgxBQg");
	this.shape_1.setTransform(7.8,7.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_3, new cjs.Rectangle(1.9,5.6,12.2,3.1), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhsBPQgHgKADgSQAEgSAMgPQANgPAQgEIAKgBQALAAAFAIQAFAIgDAQQgHAggaARgAhHASQgOAFgFAWQgDATAKAAIADgBQAOgEAFgXQACgMgEgEQgCgCgDAAIgDAAgAiWBPQAFgIACgKQAEgWgNAEQgGABgEAFQgGAIgDAMIgBAKIgVAAIAAgEQAEgSAMgPQAMgPARgFQADgBAGAAQAMAAAEAJQAFAJgDAQQgCANgHALgAgegNIAYgGIADAuIAXg4IAZgIIgrBdIgZAJgAA4gpIAxgPIgFAWIgaAJIgBAKIAVgIIgEAWIgWAFIgCALIAbgKIgGAYIgyAQgAB/g/IAugNIAIgCQAQAAgDATQgEAQgMAIQAJACgCAQQgCAPABACIgZAGIABgMQABgIgBgCQgBgFgGACIgLABIgHAhIgZAHgACfg1IgMADIgDAQIAMgDQALgCACgJQABgGgGAAIgFABg");
	mask.setTransform(26.4,25.2);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(195,195,195,0)","#C3C3C3","#A8A8A8","#888887","#636361","#3A3A38","#1C1C1A","#1C1C1A"],[0,0.933,0.933,0.949,0.961,0.976,0.988,0.992,1],31.9,19.3,-49,-29.7).s().p("AkIAkICvkfIFiDYIivEfg");
	this.shape.setTransform(26.5,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#FFFFFF","#F7F7F7","#E3E3E3","#C2C2C2","#ACACAC","#E7E7E7","#FFFFFF","#FCFCFC","#F6F6F6","#EAEAEA","#D9D9D9","#C3C3C3","rgba(195,195,195,0)","rgba(0,0,0,0)"],[0,0.02,0.075,0.157,0.259,0.314,0.596,0.733,0.831,0.871,0.894,0.914,0.933,0.933,1],31.9,19.3,-49,-29.7).s().p("AkIAkICvkfIFiDYIivEfg");
	this.shape_1.setTransform(26.5,25.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(7,17.3,38.8,15.7), null);


// stage content:
(lib._300x500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() { window.callClick(); });
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(237));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,250,1,0.833);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(237));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAMIAFAAQABAJAIAAQAKAAAAgKQAAgJgKAAIAAAAIAAgEIAAAAQAJAAAAgJQAAgJgJAAQgHAAgBAIIgFAAQABgMAMAAQAOAAAAANQAAAIgHADQAIACAAAJQAAAHgEAEQgEADgHAAQgNAAgBgNg");
	this.shape_1.setTransform(150.9,485.1,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAVQgDgCgBgGIAFAAQACAHAGAAQAEAAACgBQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEgBQAFABAEADQAEAEAAAIQAAAKgEADQgFAEgFAAQgFAAgEgEg");
	this.shape_2.setTransform(146.6,485.2,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgFIARgkIAFAAIgRAkIAOAAIAAgNIAFAAIAAANIAFAAIAAAFIgFAAIAAAIg");
	this.shape_3.setTransform(142.2,485.1,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgGIAAgXQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGIAAAXQAAAGgEAEQgEADgGAAQgFAAgEgDgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_4.setTransform(137.8,485.1,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAZIAQgtIgQAAIAAAIIgFAAIAAgMIAbAAIAAAEIgRAtg");
	this.shape_5.setTransform(133.5,485.1,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgGIAAgXQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGIAAAXQAAAGgEAEQgEADgGAAQgFAAgEgDgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_6.setTransform(129,485.1,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAKQAAgFADgFIAMgYIAFAAIgKAWIAEgBQAGAAADADQAEAEAAAGQAAAGgEAFQgEAEgGAAQgNAAAAgPgAgIAKQAAAKAIAAQAJAAAAgKQAAgKgJAAQgIAAAAAKg");
	this.shape_7.setTransform(124.7,485.2,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAZIALgWQgDABgCAAQgGAAgDgEQgEgDAAgHQAAgGAEgEQADgEAGAAQAOAAAAAOQAAAFgEAFIgLAZgAgIgKQAAAKAIAAQAJAAAAgKQAAgKgJAAQgIAAAAAKg");
	this.shape_8.setTransform(120.2,485.1,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAZIARgtIgRAAIAAAIIgFAAIAAgMIAbAAIAAAEIgRAtg");
	this.shape_9.setTransform(116,485.1,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAZIAQgtIgQAAIAAAIIgFAAIAAgMIAbAAIAAAEIgQAtg");
	this.shape_10.setTransform(111.6,485.1,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgFIARgkIAFAAIgRAkIAOAAIAAgNIAFAAIAAANIAFAAIAAAFIgFAAIAAAIg");
	this.shape_11.setTransform(107.1,485.1,1.2,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAWQgEgEgBgGIAAgXQABgGAEgDQADgEAFAAQAGAAAEAEQADADAAAGIAAAXQAAAGgDAEQgEADgGAAQgFAAgDgDgAgIgKIAAAVQABAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAgBAKg");
	this.shape_12.setTransform(102.7,485.1,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_13.setTransform(98.1,485.1,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_14.setTransform(91.1,485.1,1.2,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIARAAQAHAAAFAEQAEAEAAAHQAAAGgEADQgFAEgHAAIgMAAIAAAVgAgLAAIAMAAQALAAAAgJQAAgKgLAAIgMAAg");
	this.shape_15.setTransform(85.8,485.1,1.2,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgYAAIAAAsg");
	this.shape_16.setTransform(80.8,485.1,1.2,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLAUQgEgDgBgEIAAgNIAAgMQABgEAEgEQAEgEAHAAQAIAAAEAEQAEAEABAEIAAAMIAAANQgBAEgEADQgFAFgHAAQgGAAgFgFgAgIgQQgDAEAAAMQAAANADAEQAFAEADAAQAEAAAFgEQADgEAAgNQAAgMgDgEQgFgEgEAAQgDAAgFAEg");
	this.shape_17.setTransform(75.4,485.1,1.2,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAVQgEgDAAgFIAFAAQABAHAHAAQAEAAACgBQADgEAAgHQAAgLgJAAQgGAAgBAEIgFAAIAAgZIAZAAIAAAEIgUAAIAAAQQADgDAFgBQAFABAEADQAEAEAAAIQAAAKgEADQgFAEgFAAQgGAAgDgEg");
	this.shape_18.setTransform(68.4,485.2,1.2,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_19.setTransform(63.7,485.1,1.2,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJAWQgEgEAAgGIAAgXQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGIAAAXQAAAGgEAEQgEADgGAAQgFAAgEgDgAgIgKIAAAVQAAAKAIAAQAJAAAAgKIAAgVQAAgKgJAAQgIAAAAAKg");
	this.shape_20.setTransform(59.6,485.1,1.2,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgYQADgEAAgEQAAgJgJAAQgHAAAAAJIgGAAQAAgNANAAQAOAAAAANQAAAGgEAEIgQAWIAUAAIAAAEg");
	this.shape_21.setTransform(55.2,485.1,1.2,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_22.setTransform(50.6,485.1,1.2,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJAVQgDgCgBgGIAGAAQABAHAGAAQAEAAACgBQADgDAAgIQAAgLgJAAQgFAAgCAEIgEAAIAAgZIAYAAIAAAEIgUAAIAAAQQAEgDAEgBQAFABAEADQAEAEAAAIQAAAKgEADQgEAEgGAAQgFAAgEgEg");
	this.shape_23.setTransform(46.5,485.2,1.2,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgTAAIAAgFIARgkIAFAAIgRAkIAOAAIAAgNIAEAAIAAANIAGAAIAAAFIgGAAIAAAIg");
	this.shape_24.setTransform(42.1,485.1,1.2,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIAWQgFgEAAgGIAAgXQAAgGAFgDQADgEAFAAQAGAAAEAEQAEADgBAGIAAAXQABAGgEAEQgEADgGAAQgFAAgDgDgAgHgKIAAAVQAAAKAHAAQAJAAAAgKIAAgVQAAgKgJAAQgHAAAAAKg");
	this.shape_25.setTransform(37.7,485.1,1.2,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAZIARgtIgRAAIAAAIIgFAAIAAgMIAbAAIAAAEIgQAtg");
	this.shape_26.setTransform(33.4,485.1,1.2,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAZIARgtIgRAAIAAAIIgFAAIAAgMIAbAAIAAAEIgQAtg");
	this.shape_27.setTransform(29,485.1,1.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_28.setTransform(21.7,485.1,1.2,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_29.setTransform(15.9,485.1,1.2,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAMAZIAAgoIgYAoIgFAAIAAgxIAFAAIAAAoIAZgoIAFAAIAAAxg");
	this.shape_30.setTransform(9.9,485.1,1.2,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAVQgFgDAAgHQAAgIAIgDQgHgEAAgHQAAgGAEgEQAEgDAFAAQAGAAAEADQAEAEAAAGQAAAHgHAEQAIADAAAIQAAAHgFADQgEAEgGAAQgFAAgEgEgAgGAEQgDADAAAEQAAAKAJAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgDAAgDADgAgIgLQAAAJAIAAQAJAAAAgJQAAgJgJAAQgIAAAAAJg");
	this.shape_31.setTransform(151.8,476.7,1.2,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAGAAIAAAFg");
	this.shape_32.setTransform(146.4,479.3,1.2,1.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AANAXIAAgLIgZAAIAAALIgEAAIAAgPIADAAQAFgKAAgNIAAgGIAUAAIAAAdIAGAAIAAAPgAgDgKQAAAIgEAKIAOAAIAAgZIgKAAg");
	this.shape_33.setTransform(142.9,478.3,1.2,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_34.setTransform(137.4,479.9,1.2,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgJgYIAFAAQgBAGAFgBQAFABABgGIAEAAQAAAJgKAAQgJAAAAgJg");
	this.shape_35.setTransform(133.9,476.8,1.2,1.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJACIAAgDIASAAIAAADg");
	this.shape_36.setTransform(129.7,477.5,1.2,1.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAZIAAgEIATgZQADgCAAgFQAAgIgJgBQgHABAAAIIgFAAQAAgNAMAAQAOAAAAANQAAAGgEAEIgQAWIAUAAIAAAEg");
	this.shape_37.setTransform(125.7,476.7,1.2,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAJAZIAAgaIgRAaIgFAAIAAgiIAFAAIAAAaIARgaIAFAAIAAAigAgJgYIAEAAQABAGAEgBQAGABAAgGIAEAAQAAAJgKAAQgJAAAAgJg");
	this.shape_38.setTransform(119,476.8,1.2,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_39.setTransform(114.1,477.6,1.2,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAIARIgQgRIAOgQIAHAAIgPAQIAQARgAgNARIAAghIAFAAIAAAQIAAARg");
	this.shape_40.setTransform(110,477.6,1.2,1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAQAEAAACACQACAAADAEIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_41.setTransform(105.5,477.6,1.2,1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAIARIAAgPIgPAAIAAAPIgFAAIAAghIAFAAIAAAOIAPAAIAAgOIAFAAIAAAhg");
	this.shape_42.setTransform(101,477.6,1.2,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAJARIAAgZIgRAZIgFAAIAAghIAFAAIAAAZIARgZIAFAAIAAAhg");
	this.shape_43.setTransform(96.2,477.6,1.2,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATAXIAAgLIgqAAIAAghIAFAAIAAAdIAOAAIAAgdIAEAAIAAAdIAOAAIAAgdIAFAAIAAAdIAFAAIAAAPg");
	this.shape_44.setTransform(90.6,478.3,1.2,1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgJAOQgEgEAAgKQAAgJAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgJQgDADAAAGQAAAIADADQADACACAAQADAAADgCQADgDAAgIQAAgHgDgCQgCgDgEAAQgCAAgDADg");
	this.shape_45.setTransform(84.7,477.6,1.2,1.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgQAZIAAgxIASAAQAGAAAEAEQAFAEAAAHQAAAGgFADQgEAEgGAAIgNAAIAAAVgAgLAAIAMAAQALAAAAgJQAAgKgLAAIgMAAg");
	this.shape_46.setTransform(80.2,476.7,1.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AANAXIAAgLIgZAAIAAALIgFAAIAAgPIAEAAQAFgKAAgNIAAgGIAVAAIAAAdIAFAAIAAAPgAgDgKQAAAKgEAIIAOAAIAAgZIgKAAg");
	this.shape_47.setTransform(72.8,478.3,1.2,1.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgNANIAEgDQADADAGAAQAIAAABgGQgBgFgGAAIgFAAIAAgEIAFAAQAGAAAAgFQAAgFgIAAQgEAAgEADIgDgEQAEgEAIAAQAMAAgBAKQAAAFgFACQAGABAAAHQAAAEgDADQgFADgFAAQgHAAgGgFg");
	this.shape_48.setTransform(68.5,477.6,1.2,1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgNAAQAAgRANAAQAOAAAAARIAAABIgWAAQAAAMAJAAQAFAAAEgEIAEADQgGAGgHAAQgOAAAAgSgAgHgHIgBAGIARAAIgBgGQgCgFgGAAQgEAAgDAFg");
	this.shape_49.setTransform(64.4,477.6,1.2,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJAOQgEgFAAgJQAAgIAEgFQADgEAGAAQAGAAAEAEQAEAFAAAIQAAAJgEAFQgEAEgGAAQgGAAgDgEgAgFgJQgDADAAAGQAAAIADADQACACADAAQAEAAACgCQADgDAAgIQAAgGgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_50.setTransform(60,477.6,1.2,1.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMAZIAAgxIAEAAIAAAEQAEgEAFAAQAFAAADADQAFAEAAALQAAAJgFAEQgDADgFAAQgFAAgEgEIAAATgAgIgGQAAAMAIAAQAIAAAAgMQAAgOgIAAQgIAAAAAOg");
	this.shape_51.setTransform(55.6,478.5,1.2,1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAMAZIAAgsIgXAAIAAAsIgFAAIAAgxIAhAAIAAAxg");
	this.shape_52.setTransform(50.3,476.7,1.2,1.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAKIgFAFg");
	this.shape_53.setTransform(44.1,479.9,1.2,1.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgKAPQgDgEAAgDQAAgJAMAAIAKAAIAAgEQAAgHgJAAQgFAAgDAEIgDgDQAEgGAHAAQAOAAAAAMIAAAWIgFAAIAAgDQgEAEgFAAQgGAAgEgDgAgIAIQAAAFAIAAQAFAAACgCQACgBAAgFIAAgEIgJAAQgIAAAAAHg");
	this.shape_54.setTransform(40.7,477.6,1.2,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMARIAAghIAOAAQALAAAAAJQAAAFgFACQAFABABAHQAAAJgLAAgAgIANIAKAAQAGAAABgGQgBgFgGAAIgKAAgAgIgBIAJAAQAHAAAAgGQAAgFgHAAIgJAAg");
	this.shape_55.setTransform(36.4,477.6,1.2,1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAHARIgPgRIAOgQIAHAAIgPAQIAQARgAgNARIAAghIAFAAIAAAQIAAARgAgIAAg");
	this.shape_56.setTransform(32.3,477.6,1.2,1.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgMAAQAAgRAOAAIAGACQADABACADIgDADIgEgDIgEgBQgJAAAAAMQAAANAJAAIAEAAIAEgEIADAEIgFAEIgGABQgOAAAAgSg");
	this.shape_57.setTransform(27.9,477.6,1.2,1.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgJAOQgEgEAAgKQAAgJAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAJQAAAKgEAEQgEAEgGAAQgFAAgEgEgAgFgJQgDADAAAGQAAAIADADQADACACAAQADAAADgCQADgDAAgIQAAgHgDgCQgDgDgDAAQgCAAgDADg");
	this.shape_58.setTransform(23.5,477.6,1.2,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAQAZIAAglIgNAdIgFAAIgNgdIAAAlIgGAAIAAgxIAGAAIAPAiIAQgiIAGAAIAAAxg");
	this.shape_59.setTransform(17.9,476.7,1.2,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_60.setTransform(11.2,479.3,1.2,1.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgKARIAAghIAVAAIAAAEIgQAAIAAAdg");
	this.shape_61.setTransform(9,477.6,1.2,1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgCgHIAFAAIAAAJIgFAGg");
	this.shape_62.setTransform(117.2,471.5,1.2,1.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGAZIAKgXQgCACgCAAQgNAAAAgNQAAgPANAAQAOAAAAAOQAAAFgDAGIgMAYgAgIgJQAAAJAIAAQAJAAAAgJQAAgKgJAAQgIAAAAAKg");
	this.shape_63.setTransform(113.9,468.3,1.2,1.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_64.setTransform(109.2,468.3,1.2,1.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAFAZIAAgIIgUAAIAAgFIARgkIAGAAIgRAkIAOAAIAAgNIAEAAIAAANIAHAAIAAAFIgHAAIAAAIg");
	this.shape_65.setTransform(105.1,468.3,1.2,1.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgJAWQgEgDAAgGIAFAAQABAIAHAAQAEAAACgDQACgDAAgHQAAgLgIAAQgGAAgBAEIgFAAIAAgZIAYAAIAAAEIgTAAIAAAQQADgEAFAAQAFAAADAEQAFAEAAAIQAAAJgEAFQgFADgFAAQgGAAgDgDg");
	this.shape_66.setTransform(100.8,468.4,1.2,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_67.setTransform(96.1,468.3,1.2,1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AACAZIAAgrIgIAIIAAgGIAIgIIAFAAIAAAxg");
	this.shape_68.setTransform(91.7,468.3,1.2,1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AABAJIAIgJIgIgHIAAgHIAOAOIgOAPgAgOAJIAIgJIgIgHIAAgHIAOAOIgOAPg");
	this.shape_69.setTransform(85.5,469.1,1.2,1.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_70.setTransform(81.9,470.9,1.2,1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgOAZIAAgxIAdAAIAAAFIgXAAIAAAsg");
	this.shape_71.setTransform(78.7,468.3,1.2,1.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_72.setTransform(74.9,470.9,1.2,1.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_73.setTransform(70.8,468.3,1.2,1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgCADIAAgFIAFAAIAAAFg");
	this.shape_74.setTransform(66.8,470.9,1.2,1.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgLAUQgGgFAAgPQAAgOAGgGQAEgEAHAAQAPAAACAOIgFAAQgDgKgJAAQgEAAgEAEQgDADAAANQAAAOADADQAEAEAEAAQAJAAADgLIAFAAQgCAPgPAAQgHAAgEgFg");
	this.shape_75.setTransform(63,468.3,1.2,1.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAMAZIAAgoIgYAoIgFAAIAAgxIAFAAIAAAoIAZgoIAFAAIAAAxg");
	this.shape_76.setTransform(55.2,468.3,1.2,1.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAQAfIAAgMIggAAIAAAMIgFAAIAAgRIAEAAQAHgKgBgRIAAgRIAbAAIAAAsIAGAAIAAARgAgFgKQAAAPgGAJIAWAAIAAgnIgQAAg");
	this.shape_77.setTransform(49.2,469.1,1.2,1.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAMAZIAAgXIgXAAIAAAXIgFAAIAAgxIAFAAIAAAWIAXAAIAAgWIAFAAIAAAxg");
	this.shape_78.setTransform(43.4,468.3,1.2,1.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAPAZIgEgLIgVAAIgEALIgGAAIATgxIADAAIATAxgAgIAJIARAAIgJgZg");
	this.shape_79.setTransform(38,468.3,1.2,1.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAKAZIgVgZIAUgYIAHAAIgVAYIAXAZgAgRAZIAAgxIAGAAIAAAYIAAAZgAgLAAg");
	this.shape_80.setTransform(33.1,468.3,1.2,1.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAAAAIAPgOIAAAHIgIAHIAIAJIAAAGgAgOAAIAOgOIAAAHIgIAHIAIAJIAAAGg");
	this.shape_81.setTransform(27.6,469.1,1.2,1.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgLAUQgEgDgBgEIgBgNIABgMQABgEAEgEQAEgEAHAAQAHAAAGAEQAEAGAAAOQAAAPgEAFQgHAFgGAAQgHAAgEgFgAgIgQQgDADAAANQAAAOADADQAEAEAEAAQAEAAAEgEQAEgEAAgNQAAgMgEgEQgEgEgEAAQgEAAgEAEg");
	this.shape_82.setTransform(20.6,468.3,1.2,1.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgMAUQgDgDgBgEIAAgNIAAgMQABgEADgEQAFgEAHAAQAIAAAEAEQAGAGAAAOQAAAPgGAFQgFAFgHAAQgGAAgGgFgAgIgQQgEAEAAAMQAAANAEAEQAFAEADAAQAEAAAFgEQADgEAAgNQAAgMgDgEQgFgEgEAAQgDAAgFAEg");
	this.shape_83.setTransform(15.1,468.3,1.2,1.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgLAUQgEgDgBgEIgBgNIABgMQABgEAEgEQAEgEAHAAQAHAAAGAEQAEAGAAAOQAAAPgEAFQgHAFgGAAQgHAAgEgFgAgIgQQgDAEAAAMQAAANADAEQAEAEAEAAQAEAAAEgEQAEgEAAgNQAAgMgEgEQgEgEgEAAQgEAAgEAEg");
	this.shape_84.setTransform(9.7,468.3,1.2,1.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#494948").s().p("AgbAcQgMgMAAgQQAAgPAMgNQAMgLAPAAQARAAALALQAMANAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMgAgYgXQgKAJABAOQgBAOAKAKQAKAKAOAAQAOAAAKgKQAKgJAAgPQAAgOgKgJQgKgLgOAAQgOAAgKALgAALAWIAAgHQgBgHgEgCQgCgBgFAAIgGAAIAAARIgJAAIAAgrIAQAAQAIAAADACQAHACAAAIQAAAGgFADIgGABQAFABACAEQADACAAAEIAAAGIABADIAAABgAgHAAIAHAAIAGgBQAEgCABgFQgBgFgCgBQgEgCgFAAIgGAAg");
	this.shape_85.setTransform(273.2,471);

	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(237,434.4,1,1,0,0,0,67.3,67.3);

	this.instance_1 = new lib.ClipGroup_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(249.1,435.8,1,1,0,0,0,26.4,25.2);

	this.instance_2 = new lib.ClipGroup_2_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.5,445.4,1,1,0,0,0,7.8,7.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("Aj7D8QhphoAAiUQAAiTBphoQBohpCTAAQCUAABoBpQBpBpAACSQAACUhpBoQhoBpiUAAQiTAAhohpgAhLAdIhIENQBGAiBNAAQCJAABihhQBhhhAAiKQAAgygOgtgAk6BpQASA5AmAuQAlAuAyAfIBCj2IhVAbIgaBfIgdAJIAZhfgAkPi+Qg8BWAABoQAAAvAMAqIBpghIBiluQhgAkg7BUgAhXk/IhiFuIBVgcIA7jYIAdgIIg6DXIF/h5QgjhhhVg9QhWg+hrAAQgqAAgtAMg");
	this.shape_86.setTransform(236.2,434.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhsBOQgHgIAEgTQAEgTALgOQANgPAQgEQAQgFAIAIQAIAJgEATQgGAhgbAPgAhHASQgOAEgFAXQgCAMAEAEQADAEAFgCQAOgEAFgXQACgMgEgEQgBgCgDAAIgEAAgAiWBOQAGgGABgLQADgMgEgFQgDgDgFABQgPAFgEAWIAAAJIgWAAIAAgDQAEgSAMgPQAMgPARgFQAQgFAHAJQAJAJgEATQgCALgHANgAgegNIAYgHIADAuIAAAAIAXg4IAZgHIgrBdIgZAJgAA4gpIAxgPIgFAVIgaAKIgBAKIAWgIIgFAWIgVAFIgCALIAagKIgFAZIgzAPgAB/hAIAugMQALgDAGAEQAGAEgCAMQgEARgMAHQAIABgBARQgCAPABACIgYAFIABgLQAAgIAAgCQgCgFgGACIgLABIgHAhIgZAHgACfg1IgMADIgDAQIANgDQAKgDACgIQABgGgGAAIgFABg");
	this.shape_87.setTransform(248.3,435.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("Ag2AKQgIgIADgRIAWAAQAAANAKgEQAHgCAFgHIATAAQgNAWgWAHIgKACQgIAAgFgGgAAZgPIAkAAQgGAEgFABIgKACQgKAAgFgHg");
	this.shape_88.setTransform(234.9,445.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#75221E").s().p("Aj8D8QhohoAAiUQAAiTBohoQBphpCTAAQCUAABoBpQBpBoAACTQAACUhpBoQhoBpiUAAQiTAAhphpgAhLAdIhIEMQBFAjBOAAQCKAABhhhQBhhiAAiJQAAgzgOgsgAk6BpQASA5AmAuQAlAuAyAfIBDj3IhWAcIgaBfIgcAJIAZhfgAkPi+Qg8BWAABoQAAAvAMAqIBpghIBiluQhgAkg7BUgAhWlAIhjFvIBVgcIA7jYIAdgJIg6DYIF/h5QgjhhhUg9QhXg+hrAAQgtAAgpALg");
	this.shape_89.setTransform(237.2,435.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#75221E").s().p("AhsBOQgGgJACgSQAFgTAMgPQAMgPAQgDQARgFAHAIQAIAJgEATQgHAggaAQgAhHASQgPAFgDAWQgDAMAEAEQADADAGgBQAOgEAEgXQADgMgEgEQgDgDgDAAIgDABgAiWBOQAFgHADgKQAEgWgOADQgPAEgEAXIAAAJIgXAAIABgDQAEgTAMgOQAMgPAQgFQARgFAIAJQAHAJgEATQgBALgIANgAgegNIAZgHIABAuIABAAIAXg4IAZgIIgrBeIgZAJgAA4gpIAwgPIgEAVIgaAKIgBAKIAVgIIgDAVIgXAGIgCALIAbgKIgGAYIgxAQgACAhAIAugMQAKgDAGAEQAGAEgCAMQgEAQgMAIQAJABgCAQQgCAQABACIgZAFIABgLQACgIgCgCQgBgFgGACIgLABIgHAhIgZAHgACeg2IgLAEIgDAQIAMgDQAMgEABgHQABgGgGAAIgGAAg");
	this.shape_90.setTransform(249.3,436.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#75221E").s().p("Ag2AKQgIgIADgQIAWAAQAAALAKgCQAHgCAFgHIATAAQgNAWgWAGQgGABgEAAQgIAAgFgFgAAZgOIAkAAIgLAFIgLABQgJAAgFgGg");
	this.shape_91.setTransform(235.8,446);

	this.instance_3 = new lib.ClipGroup_3_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(236.4,434.1,1,1,0,0,0,76.7,76.7);

	this.instance_4 = new lib.ClipGroup_4_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(236.3,434,1,1,0,0,0,78.1,78.1);

	this.instance_5 = new lib.ClipGroup_5_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(236.3,434.1,1,1,0,0,0,81.8,81.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("ArMKOIFi0bIQ3AAIAAUbg");
	this.shape_92.setTransform(228.3,434.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(237));

	// t4
	this.instance_6 = new lib.t4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(120.8,37.3,0.9,0.9,0,0,0,62.5,22.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(171).to({_off:false},0).to({x:102.8,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:84.8,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_7 = new lib.t3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(146.9,37.3,0.9,0.9,0,0,0,92.5,22.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114).to({_off:false},0).to({x:128.9,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:110.9,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// t2
	this.instance_8 = new lib.t2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(152.5,35.4,0.9,0.9,0,0,0,97.7,20.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(57).to({_off:false},0).to({x:134.5,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:116.5,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// t1
	this.instance_9 = new lib.t1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(137.9,47.1,0.9,0.9,0,0,0,81.5,33.8);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:119.9,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:101.9,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// 4.jpg
	this.instance_10 = new lib.p4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(160,215,1,1,0,0,0,150,300);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(171).to({_off:false},0).to({x:150,y:235,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:255,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// 3.jpg
	this.instance_11 = new lib.p3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(160,215,1,1,0,0,0,150,300);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(114).to({_off:false},0).to({x:150,y:235,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:255,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(57));

	// 2.jpg
	this.instance_12 = new lib.p2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(160,215,1,1,0,0,0,150,300);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(57).to({_off:false},0).to({x:150,y:235,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:255,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// 1.jpg
	this.instance_13 = new lib.p1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(160,215,1,1,0,0,0,150,300);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:150,y:235,alpha:1},8,cjs.Ease.get(1)).wait(49).to({x:140,y:255,alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// Слой 8
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_93.setTransform(150,250,1,0.833);

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(237));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,165,318.6,600.8);
// library properties:
lib.properties = {
	width: 300,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x500_atlas_.jpg", id:"300x500_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;