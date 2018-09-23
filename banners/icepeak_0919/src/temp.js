(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"temp_atlas_", frames: [[0,0,1997,1768],[0,5310,1997,1768],[0,1770,1997,1768],[0,3540,1997,1768],[1999,0,1272,1181],[1999,1183,1272,1181],[1999,2366,1272,1181],[1999,3549,1272,1181]]}
];


// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["temp_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["temp_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["temp_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["temp_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ICEPEAK_TOT_AW18_Freezone_PSO = function() {
	this.spriteSheet = ss["temp_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ICEPEAK_TOT_AW18_Freezone_PSOtif = function() {
	this.spriteSheet = ss["temp_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ICEPEAK_TOT_AW18_Freezone_PSOtif_0 = function() {
	this.spriteSheet = ss["temp_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ICEPEAK_TOT_AW18_Freezone_PSOtif_2 = function() {
	this.spriteSheet = ss["temp_atlas_"];
	this.gotoAndStop(7);
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


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1IBYlMAAAixJMBqRAAAMAAACxJg");
	mask.setTransform(872.1,646.9);

	// Слой 3
	this.instance = new lib.ICEPEAK_TOT_AW18_Freezone_PSOtif();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.198,1.198);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(532,80,680.3,1133.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1JBYlMAAAixJMBqSAAAMAAACxJg");
	mask.setTransform(872.2,646.9);

	// Слой 3
	this.instance = new lib.ICEPEAK_TOT_AW18_Freezone_PSOtif_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.198,1.198);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(532,80,680.3,1133.9), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1IBYlMAAAixJMBqRAAAMAAACxJg");
	mask.setTransform(872.1,646.9);

	// Слой 3
	this.instance = new lib.ICEPEAK_TOT_AW18_Freezone_PSO();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.198,1.198);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(532,80,680.3,1133.9), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1IBYlMAAAixJMBqRAAAMAAACxJg");
	mask.setTransform(1026.5,709.6);

	// Слой 3
	this.instance = new lib.ICEPEAK_TOT_AW18_Freezone_PSOtif_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.494,1.494);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(686.3,142.7,680.3,1133.9), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlNE4QAOhNCUg8IDVAAIAbhfIlWAAQAvhzBwgVIDdAAIAhh2IloAAQAchpB5ggIGVAAIitJvg");
	this.shape.setTransform(75,170.7,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6921").s().p("AjZDcQhbhbAAiBQAAiABbhbQBahcB/AAQCAAABaBcQBbBbAACAQAACBhbBbQhaBciAAAQh/AAhahcg");
	this.shape_1.setTransform(197.9,170.8,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAE4QgiiagUgsQgfhDgiAAIhzAAIApiFIB+AAIAlgHQAogRASgwQARgvAQg6IAMgwICiAAIhREBQgDAOgLASQgXAigqASIAHAVIAfBiIAyCjg");
	this.shape_2.setTransform(174.4,170.8,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AikE2ICsprICdAAIimJrg");
	this.shape_3.setTransform(161.4,170.7,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA8E4IApiNIjnAAIAkh6IDmAAIA8jOIiJAAQhZACgmAUQgsAWgRA/IhoFjIifAAIB/m7QAUhVBJgvQA/gpBLAAIGrAAIiuJvg");
	this.shape_4.setTransform(143.8,170.8,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Al5E4ICspvIJHAAIhhEAQgRA3gzAdQgvAcg6AAIi8AAIAmiJICCAAQAvAAAbgxQANgZAEgYIkAAAIiJHqg");
	this.shape_5.setTransform(98.1,170.8,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlNE4QAOhOCUg7IDVAAIAbhfIlWAAQAvh0BwgUIDdAAIAhh2IloAAQAchpB5ggIGVAAIitJvg");
	this.shape_6.setTransform(120.9,170.8,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkdElQgXgSABgfQAAgIACgLIB1m9QASgyAlgVQAhgUBKAAIFOAAQgKA1hBAvQghAYgfANIigAAQgXAAgOAKQgPAKgJAUIhREzQgCACArAAIEaAAIgUAuQgWA0ghATQgQAJguAFQgqAFgpAAIi/ABQgoAAgYgTg");
	this.shape_7.setTransform(54.3,170.8,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiiE4ICipvICiAAIihJvg");
	this.shape_8.setTransform(38.9,170.8,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#090A0D").s().p("EgjyAJGQkzAAh7j2QgnhNgPhcIgIhNIAAizQAAkzD2h7QB7g+B7AAMBHmAAAQEzAAB6D2QA+B7AAB7IAACzQAAEzj2B7QhMAnhdAPIhMAIg");
	this.shape_9.setTransform(121,170.7,0.353,0.353);

	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(81.2,221.6,0.353,0.353,0,0,0,762.1,707.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-187.8,-28.2,538,499.5), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQC7IAKhRIBWAAIgKBRgAhBBRIACgPQAEgdAHgSQAHgTAPgOIAigiQALgLAEgMQAFgPAAgHQACgOgEgKQgFgJgLAAQgGAAgFACQgEADgFAGQgEAIgDALQgDAMgDAWIhXAAQAFgjAKgXQALgXAQgPQAQgPAXgGQAZgHAZAAQA4AAAXAcQAXAbgGAvQgDAWgHASQgIASgPAPIgsApQgIAJgEAMQgEAMgCASg");
	this.shape.setTransform(166.9,187.4,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAvC3IgChAIhLAAIgSBAIhkAAICHltIB4AAIArFtgAgKAvIA1AAIgGiaIgBAAg");
	this.shape_1.setTransform(156.1,187.5,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaC3IAlkcIhHAAIAKhRIDvAAIgKBRIhJAAIglEcg");
	this.shape_2.setTransform(148.3,187.5,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNC3IAvltICPAAQAbAAAUAIQATAJALAPQALAPAEAVQADAXgDAWQgHA6gjAaQgiAdg7AAIghAAIgSCLgAgSgYIASAAQARAAALgLQALgLADgXQAGgtgmAAIgRAAg");
	this.shape_3.setTransform(138.5,187.5,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhUC0QgYgKgNgXQgMgWgDgkQgBgmAGgyQAHgyALglQALgjATgYQATgWAagLQAagLAkAAQAmAAAXALQAYALANAWQAMAYACAjQACAlgGAyQgHA1gMAjQgLAjgSAXQgTAXgaAKQgcAKgjAAQgkAAgYgKgAgBh2QgHAGgFAOQgFANgFAaQgEAXgFAlIgHA9QgCAXACAQQABAOAGAGQAGAGALAAQAKAAAHgGQAIgHAEgNQAGgSADgVQAFgYAEglIAHg8QACgYgBgPQgCgOgFgGQgHgGgKAAQgLAAgGAGg");
	this.shape_4.setTransform(128.5,187.5,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGC3IAlkfIg6AAIglEfIhgAAIAvltID6AAIgvFtg");
	this.shape_5.setTransform(118.2,187.5,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhVC0QgYgKgMgXQgLgWgBgkQgBgkAHg0QAHg0ALgkQALgkASgXQATgWAagLQAcgKAjAAQAgAAAWAJQAXAIALAPQANAQADAUQAEAWgEAaIgDAYIhdAAIADgVQAEgggFgLQgEgLgOAAQgLAAgHAGQgHAGgFAOQgEANgFAaIgJA8IgHA9QgCAaABANQACAOAGAGQAFAGALAAQAJAAAFgFQAHgEAEgKQAFgNADgPQAEgTADgYIBdAAIgEAbQgFAogNAXQgNAYgUAPQgTAOgWAFQgWAFgXAAQgnAAgagKg");
	this.shape_6.setTransform(108.2,187.5,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABBDaIAJhGIiYAAIgJBGIhYAAIASiUIAaAAQAOgXAJgVQAKgWAIgXQAHgWAGgdIAUiTIDpAAIglEfIAhAAIgTCUgAAShrQgCATgHAiQgHAggFASIgPAqQgIATgGANIBLAAIAcjTIgxAAg");
	this.shape_7.setTransform(91.9,188.8,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOC3IAcjaIhaDaIhqAAIAwltIBdAAIgbDMIBYjMIBrAAIgvFtg");
	this.shape_8.setTransform(81.4,187.5,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiMC3IAvltICQAAQA1AAAUAZQAWAYgGAqQgBANgGAPQgFANgIAMQgIAKgMAIQgMAIgQADIAAABQASACALAHQAMAHAHAMQAHANACANQACAOgCAPQgDAYgJAUQgJAUgPAOQgPAOgWAIQgWAIgeAAgAgjByIAbAAQANAAALgLQAMgLADgXQADgVgJgMQgJgLgOAAIgaAAgAgPgnIAWAAQAPAAAJgLQAJgKACgQQADgPgHgLQgGgMgPAAIgXAAg");
	this.shape_9.setTransform(70.5,187.5,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPDuIAcjbIhaDbIhrAAIAvluIBdAAIgaDNIBXjNIBrAAIgvFugAgdiwQgSgWADgnIAsAAQAAAkAiAAQAiAAAKgkIAtAAQgHAmgYAXQgYAWgoAAQgnAAgSgWg");
	this.shape_10.setTransform(210.4,165.8,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPC3IAcjaIhaDaIhrAAIAwltIBdAAIgbDMIBYjMIBrAAIgvFtg");
	this.shape_11.setTransform(199.6,167.8,0.353,0.353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOC3IgniAIgYAfIgNBhIhgAAIAwltIBgAAIgSCMIABAAIBYiMIBmAAIhyCgIBODNg");
	this.shape_12.setTransform(189.4,167.8,0.353,0.353);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhUC0QgZgLgMgWQgLgXgBgjQAAgkAGg0QAHgyALgmQALglATgWQARgWAcgLQAbgKAjAAQAgAAAXAJQAVAIAMAPQAMAOAEAWQAEAVgDAbIgDAXIhdAAIACgUQAFgegFgNQgFgLgOAAQgLAAgHAGQgGAFgFAPQgGAQgEAWQgEAZgFAkIgHA9QgCAXACAQQABAOAGAGQAGAGALAAQAIAAAGgFQAGgEAEgKQAEgKAEgSIAHgrIBdAAIgEAbQgEAmgOAZQgNAYgTAPQgTAOgXAFQgZAFgUAAQgoAAgYgKg");
	this.shape_13.setTransform(179.1,167.7,0.353,0.353);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAPDuIAcjbIhaDbIhrAAIAwluIBcAAIgaDNIBXjNIBsAAIgwFugAgdiwQgSgXADgmIAsAAQAAAkAiAAQAjAAAJgkIAtAAQgHAmgYAXQgYAWgoAAQgnAAgSgWg");
	this.shape_14.setTransform(168.8,165.8,0.353,0.353);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPC3IAcjaIhaDaIhrAAIAvltIBdAAIgaDMIBXjMIBsAAIgwFtg");
	this.shape_15.setTransform(157.9,167.8,0.353,0.353);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAGC3IAlkfIg6AAIglEfIhgAAIAvltID6AAIgvFtg");
	this.shape_16.setTransform(147.3,167.8,0.353,0.353);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA/C3IAjkQIgBAAIhWEQIhEAAIgQkQIgBAAIgkEQIhZAAIAvltICJAAIALDYIABAAIBCjYICJAAIgvFtg");
	this.shape_17.setTransform(135.1,167.8,0.353,0.353);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAPC3IAcjaIhaDaIhrAAIAvltIBdAAIgaDMIBXjMIBsAAIgwFtg");
	this.shape_18.setTransform(122.8,167.8,0.353,0.353);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AieC3IgJgCIAKhMIAMABQAGAAAKgCQAIgBAGgJQAGgJAGgSQAGgUAFgfIAejIIDmAAIgvFuIhhAAIAmkiIgtAAQgKBUgKA9QgLA3gQAiQgQAigVAMQgYANgjAAg");
	this.shape_19.setTransform(111.5,167.8,0.353,0.353);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhUC0QgZgLgLgWQgNgXgDgjQgBgmAHgyQAFgzANgkQALgkASgXQASgXAbgKQAbgLAjAAQAmAAAXALQAZALAMAWQAMAXADAkQABAmgHAxQgHA0gKAkQgLAigTAYQgSAWgbALQgcAKgiAAQglAAgYgKgAgBh2QgGAFgGAPQgGAQgDAWQgFAZgEAkIgHA9QgDAXACAQQACAOAFAGQAGAGALAAQALAAAGgGQAHgFAFgPQAGgRAEgWQAEgYAEglIAIg9QABgXgBgPQgCgPgFgFQgGgGgLAAQgLAAgGAGg");
	this.shape_20.setTransform(101.3,167.7,0.353,0.353);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPDuIAcjbIhaDbIhqAAIAuluIBdAAIgbDNIBYjNIBrAAIgvFugAgdiwQgRgXACgmIAsAAQABAkAhAAQAjAAAJgkIAtAAQgIAngXAWQgYAWgoAAQgoAAgRgWg");
	this.shape_21.setTransform(86.1,165.8,0.353,0.353);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABBC3IAvltIBhAAIgwFtgAjQC3IAwltIBgAAIgRCDIAmAAQA9AAAZAeQAZAegHA2QgFAkgNAWQgPAYgSANQgSAOgXAFQgWAGgWAAgAhnByIANAAQAbAAALgMQAMgLADgbQAEgcgLgKQgNgKgVAAIgMAAg");
	this.shape_22.setTransform(73.3,167.8,0.353,0.353);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiMC3IAvltICQAAQA0AAAVAYQAVAZgFAqQgCANgFAPQgFAOgJAKQgJAMgLAHQgLAIgRADIAAABQATACALAHQAMAIAHALQAHANABANQACAOgBAPQgDAXgJAVQgKAVgOANQgPAOgWAIQgXAIgdAAgAgkByIAbAAQANAAAMgLQALgLADgXQADgVgJgMQgJgLgNAAIgaAAgAgQgnIAXAAQAPAAAJgLQAJgMACgOQACgPgGgLQgHgMgPAAIgWAAg");
	this.shape_23.setTransform(60.6,167.8,0.353,0.353);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhUC0QgZgLgMgWQgMgXgCgjQgCgmAGgyQAHgzALgkQAMgkASgXQASgXAcgKQAagLAkAAQAlAAAXALQAZALALAWQANAXACAkQACAmgHAxQgFAwgNAoQgKAigTAYQgSAWgbALQgbAKgkAAQgkAAgYgKgAgBh2QgGAFgGAPQgGAQgEAWQgEAZgFAkIgHA9QgCAXACAQQABAOAGAGQAGAGALAAQAKAAAHgGQAGgFAGgPQAGgRADgWQAFgYAEglIAHg9QACgXgBgPQgCgPgFgFQgGgGgKAAQgMAAgGAGg");
	this.shape_24.setTransform(50.5,167.7,0.353,0.353);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAGC3IATiXIg6AAIgTCXIhgAAIAvltIBgAAIgRCGIA6AAIARiGIBgAAIgvFtg");
	this.shape_25.setTransform(40.2,167.8,0.353,0.353);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiFAlIAKhKIEBAAIgJBKg");
	this.shape_26.setTransform(25.5,169,0.353,0.353);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AinDyIA+njIERAAIgNBnIiTAAIgwF8g");
	this.shape_27.setTransform(185.7,142.3,0.353,0.353);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAIDyIAajHIhNAAIgaDHIh/AAIA+njICAAAIgXCyIBMAAIAXiyIB/AAIg+Hjg");
	this.shape_28.setTransform(172.8,142.3,0.353,0.353);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AATDyIAlkgIh3EgIiNAAIA+njIB8AAIgjEPIB0kPICOAAIg/Hjg");
	this.shape_29.setTransform(158.7,142.3,0.353,0.353);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ai6DyIA/njIC/AAQBFAAAbAhQAcAggGA4QgDAUgHARQgGARgMAPQgLAPgPAKQgPAJgWAFIAAACQAXABAQAKQAQALAJAPQAJARACASQADARgCAUQgFAigLAYQgLAagUATQgUATgeALQgdAKgoAAgAgvCXIAkAAQARAAAPgOQAQgOADgfQAEgdgMgPQgLgPgSAAIgjAAgAgVgzIAeAAQAUAAAMgPQANgPACgTQADgUgJgPQgIgPgUAAIgeAAg");
	this.shape_30.setTransform(144.3,142.3,0.353,0.353);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AATE6IAmkhIh4EhIiNAAIA/njIB6AAIgjEPIB0kPICPAAIg/HjgAgnjpQgWgdADgzIA6AAQAAAvAtAAQAtAAANgvIA7AAQgKAzgeAdQggAeg1AAQg1AAgXgeg");
	this.shape_31.setTransform(130.5,139.8,0.353,0.353);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AA/DyIgDhUIhkAAIgYBUIiFAAIC0njICeAAIA5HjgAgNA/IBHAAIgJjNIgBAAg");
	this.shape_32.setTransform(115.5,142.3,0.353,0.353);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABVEhIANhdIjKAAIgMBdIh0AAIAZjEIAhAAQASgdANgdQAOgfAJgeQAKghAHgiQAGgiAGgrIAPh2IE2AAIgyF9IArAAIgZDEgAAYiPQgEAlgIAiQgJApgIAaQgJAegKAZQgJAXgKAUIBkAAIAlkYIhAAAg");
	this.shape_33.setTransform(101.1,143.9,0.353,0.353);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AiqDzIgWgDIALheIAOABIAOABQAZAAAOgPQAOgPAHgTIhWlXICPAAIAXDUIABAAIBFjUICJAAIigFbQgPAjgRAcQgOAZgUATQgVASgZAIQgbAJglAAIgcgCg");
	this.shape_34.setTransform(89.1,142.4,0.353,0.353);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhwDuQgfgOgRgdQgQgdgDgxQgDgwAJhEQAJhDAPgwQAPgwAYgeQAZgeAjgOQAigOAxAAQAxAAAfAOQAfANARAfQARAfACAvQADAwgJBDQgJBEgPAwQgPAwgYAeQgYAdgkAOQgiANgwAAQgyAAgfgNgAgBidQgKAIgHATQgGARgGAiIgVChQgDAjACAQQACATAIAIQAHAHAPAAQAOAAAIgHQAKgIAHgTQAHgVAFgeIAVihQADgfgCgUQgCgTgIgIQgHgHgOAAQgPAAgIAHg");
	this.shape_35.setTransform(75.2,142.3,0.353,0.353);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAIDyIAZjHIhMAAIgaDHIh/AAIA+njIB/AAIgXCyIBNAAIAXiyIB/AAIg+Hjg");
	this.shape_36.setTransform(61.6,142.3,0.353,0.353);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhwDuQghgOgPgdQgPgegCgwQgBgxAJhDQAJhEAPgwQAPgxAYgdQAYgeAkgOQAkgNAvAAQAsAAAcALQAcALARAUQAQAUAFAcQAFAegFAiIgEAeIh7AAIAEgbQAFgpgGgPQgGgPgTAAQgPAAgJAHQgIAIgHATQgGARgHAiIgVChQgDAfADAUQABATAIAIQAIAHAOAAQAMAAAHgFQAIgHAGgNQAGgOAFgWQAEgXAFgiIB7AAIgFAkQgGAygTAhQgRAggZATQgZATgeAGQgdAHgfAAQg2AAgfgNg");
	this.shape_37.setTransform(48.2,142.3,0.353,0.353);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1D1B").s().p("EgunALDIAA2FMBdPAAAIAAWFg");
	this.shape_38.setTransform(119.9,177.8,0.353,0.353,0,0,0,0,-0.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1B").s().p("EgkxALqIAA3TMBJjAAAIAAXTg");
	this.shape_39.setTransform(115.8,149.2,0.353,0.353);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1D1B").s().p("AAJBvIAQiEIg1CEIg/AAIAcjdIA3AAIgQB7IA0h7IBAAAIgcDdg");
	this.shape_40.setTransform(127.4,312.5,0.353,0.353);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1D1B").s().p("AhvCuIADgeIgYAAIAGg3IAYAAIAEgmIgYAAIAHhAIAZAAIASigIB7AAQAaAAAQAJQASAKAJAPQAJAPADAVQADATgDAYQgGA3gdAbQgeAdg3AAIgYAAIgFAmIBIAAIgGA3IhIAAIgDAegAgFgNIAOAAQARAAAKgNQALgNACgVQACgVgHgNQgHgOgRAAIgPAAg");
	this.shape_41.setTransform(204.4,341.4,0.353,0.353);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1D1D1B").s().p("AhJBeIAEglIAMABQAJAAAFgGQAEgFAEgIIgjiFIA3AAIAKBSIABAAIAYhSIA1AAIhICfQgEAKgIAHQgGAGgLAFQgKACgPAAg");
	this.shape_42.setTransform(211,325.7,0.353,0.353);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1D1D1B").s().p("AAiBfIAQiMIgBAAIgqCMIgiAAIgLiMIAAAAIgQCMIguAAIAVi9IBHAAIAHBwIAAAAIAghwIBGAAIgVC9g");
	this.shape_43.setTransform(204.7,325.7,0.353,0.353);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1D1D1B").s().p("AAiBfIAQiMIgBAAIgqCMIgiAAIgLiMIAAAAIgQCMIguAAIAVi9IBHAAIAHBwIAAAAIAghwIBGAAIgVC9g");
	this.shape_44.setTransform(197.6,325.7,0.353,0.353);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1B").s().p("AhIBeIAEglIAKABQALAAAFgGQAFgHADgGIgjiFIA2AAIAKBSIABAAIAYhSIA1AAIg7CGIgMAZQgFAKgHAHQgHAGgLAFQgLACgOAAg");
	this.shape_45.setTransform(192,325.7,0.353,0.353);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D1D1B").s().p("AgpBdQgNgGgGgLQgGgMgBgTQAAgQADgdQADgcAFgRQAFgSAKgMQAIgMAPgFQANgFASAAQARAAALAFQALADAGAIQAHAJACAKQACALgCAOIgBAMIgwAAIACgLQABgRgCgFQgDgGgHAAQgFAAgEADQgCAEgDAHIgMBSIAAAUQABAHADADQAEADAFAAQAEAAACgCQAEgCACgFQACgFABgKQACgGACgQIAvAAIgBAOQgCATgHAOQgHAMgKAIQgKAHgLACQgLADgLAAQgUAAgNgFg");
	this.shape_46.setTransform(186.7,325.6,0.353,0.353);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D1D1B").s().p("AAZBfIgCghIgmAAIgJAhIg0AAIBEi9IA8AAIAYC9gAgFAYIAaAAIgEhPIAAAAg");
	this.shape_47.setTransform(178.8,325.7,0.353,0.353);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1D1D1B").s().p("AAFBfIAJhOIgeAAIgIBOIgyAAIAVi9IAyAAIgIBGIAdAAIAIhGIAxAAIgWC9g");
	this.shape_48.setTransform(173.9,325.7,0.353,0.353);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1D1D1B").s().p("AhIBeIADglIALABQALAAAEgGQAFgFADgIIgjiFIA3AAIAKBSIABAAIAYhSIA1AAIhICfQgEAKgIAHQgHAGgKAFQgKACgPAAg");
	this.shape_49.setTransform(166.7,325.7,0.353,0.353);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1D1D1B").s().p("AAjBxIAEgkIhNAAIgFAkIgtAAIAJhNIANAAIAMgWQAEgJAEgOQAEgOACgNIAKhMIB3AAIgRCUIARAAIgJBNgAAJg3QgCAOgDAOIgMAvIgHAQIAmAAIAMhsIgYAAg");
	this.shape_50.setTransform(160.6,326.3,0.353,0.353);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1D1D1B").s().p("AAyBfIgQhEIgNAWIgFAuIgvAAIAGguIgJgWIgfBEIg2AAIA8huIgghPIAzAAIAXBJIAIhJIAuAAIgIBJIAnhJIA0AAIgyBPIAiBug");
	this.shape_51.setTransform(154,325.7,0.353,0.353);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1D1D1B").s().p("AhCBfIAWi9IBvAAIgFApIg+AAIgDAgIA6AAIgFAmIg5AAIgFAlIBAAAIgEApg");
	this.shape_52.setTransform(148,325.7,0.353,0.353);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1D1D1B").s().p("AAjBxIAEgkIhOAAIgEAkIgtAAIAJhNIANAAQAHgMAEgKQAGgLADgMQAEgOACgNIAKhMIB3AAIgRCUIAQAAIgIBNgAAEgbIgFAaQgDAKgEALIgIAQIAnAAIAMhsIgZAAg");
	this.shape_53.setTransform(142.3,326.3,0.353,0.353);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1D1D1B").s().p("AgpBdQgNgGgGgLQgIgNAAgSQgBgSACgbQADgXAGgVQAFgSAKgNQAKgMAMgFQAPgFARAAQATAAAMAFQAMAFAHAMQAHAMABATQABASgCAaQgEAbgGASQgEATgKAMQgJALgOAGQgOAFgRAAQgSAAgNgFgAgBg9QgEAEgCAHQgDAHgCANIgHA+IAAAUQABAHADADQADADAGAAQAFAAADgDQADgCADgIIAFgUIAHg+QABgNgBgHQgBgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_54.setTransform(137.1,325.6,0.353,0.353);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1D1D1B").s().p("AhRDBQgZgJgNgWQgOgXgEgnQgDgnAGg8QAHg7ANgnQAMgnATgXQATgXAbgJQAZgJAjAAQAjAAAYAJQAYAJAOAXQANAWAEAoQAEAngHA7QgGA8gNAnQgNAngTAXQgTAWgaAJQgaAIgiAAQgjAAgYgIgAgJh4QgIAOgGAqIgOCCQgFApAFAQQAGAPAQAAQAPAAAJgPQAJgOAFgrIAPiCQAEgqgFgOQgFgPgRAAQgPAAgJAPg");
	this.shape_55.setTransform(190.5,340.8,0.353,0.353);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1D1D1B").s().p("AhRDBQgYgJgOgWQgOgXgEgnQgDgkAHg/QAGg6ANgoQANgnATgXQATgXAagJQAZgJAjAAQAkAAAXAJQAXAIAPAYQAOAYAEAmQAEAngHA7QgIBAgMAjQgMAngTAXQgUAXgaAIQgZAIgjAAQgjAAgYgIgAgIh4QgKAQgEAoIgPCCQgFAqAGAPQAGAPAQAAQAPAAAJgPQAJgOAEgrIAPiCQAFgqgGgOQgFgPgQAAQgQAAgIAPg");
	this.shape_56.setTransform(180.3,340.8,0.353,0.353);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1D1D1B").s().p("AhRDBQgYgIgOgXQgOgYgEgmQgEgoAIg7QAHg+AMgkQAMgnATgXQAUgYAagIQAZgJAjAAQAkAAAXAJQAXAIAPAYQAOAYAEAmQADAogHA6QgGA7gNAoQgMAngTAXQgUAXgaAIQgZAIgjAAQgjAAgYgIgAgJh4QgJAPgEApIgPCCQgFArAGAOQAFAPAQAAQAQAAAJgPQAJgQAEgpIAPiCQAFgpgGgPQgFgPgQAAQgQAAgJAPg");
	this.shape_57.setTransform(170,340.8,0.353,0.353);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1D1D1B").s().p("AhRDBQgZgJgNgWQgOgXgEgnQgDgnAGg8QAHg7ANgnQALglAUgZQATgXAbgJQAZgJAjAAQAjAAAYAJQAYAJAOAXQANAWAEAoQAEAngHA7QgGA8gNAnQgMAngUAXQgTAXgaAIQgaAIgiAAQgjAAgYgIgAgJh4QgJAPgEApIgPCCQgFApAFAQQAGAPAQAAQAPAAAJgPQAJgOAFgrIAPiCQAFgogGgQQgGgPgQAAQgPAAgJAPg");
	this.shape_58.setTransform(154.7,340.8,0.353,0.353);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1D1D1B").s().p("Ah4DCQAIgjAOgrQAOgpASglQATgpAWgiQAVgiAdglIieAAIAKhVIEBAAIgJBOQgYAhgWAmQgXAngRAmQgTApgNApQgNAugGAhg");
	this.shape_59.setTransform(144.9,340.8,0.353,0.353);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_60.setTransform(175.7,275.1,0.353,0.353);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhFBGQgegdAAgpQAAgoAegdQAdgeAoAAQApAAAdAeQAeAdAAAoQAAApgeAdQgdAegpAAQgoAAgdgegAgtgtQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATg");
	this.shape_61.setTransform(172.1,278.8,0.353,0.353);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhPDBQgagBgVgIQgUgIgOgPQgPgOgIgUQgHgVgCgaIgBhQIABhPQACgaAHgVQAIgUAPgOQAOgPAUgIQAVgHAagCIBPgBIBQABQAaACAVAHQAUAIAOAPQAPAOAIAUQAIAVABAaIABBPIgBBQQgBAagIAVQgIAUgPAOQgOAPgUAIQgVAIgaABIhQABIhPgBgAhNidQgWABgOAGQgMAEgLAKQgKALgEAMQgGAPgBAVIgBBNIABBOQABAWAGAOQAEAMAKALQALAKAMAEQAOAGAWABIBNABIBOgBQAVgBAPgGQAMgEALgKQAKgLAEgMQAGgOABgWIABhOIgBhNQgBgVgGgPQgEgMgKgLQgLgKgMgEQgPgGgVgBIhOgBIhNABg");
	this.shape_62.setTransform(172.1,278.8,0.353,0.353);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1D1D1B").s().p("AAOERIAkj7IhsD7Ih6AAIA9mkIBqAAIgiDrIBojrIB8AAIg9GkgAgdjKQgUgZAEgtIAyAAQAAApAmAAQAoAAALgpIA0AAQgIAsgcAaQgcAaguAAQguAAgTgag");
	this.shape_63.setTransform(213.9,307.6,0.353,0.353);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1D1D1B").s().p("AA3DSIgBhKIhXAAIgWBKIh0AAICimjICLAAIAqGjgAgIA2IA8AAIgEixIgBAAg");
	this.shape_64.setTransform(200.8,309.8,0.353,0.353);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1D1D1B").s().p("AilDSIA9mjIClAAQAgAAAVAKQAVAJANASQANASADAXQAEAZgEAaQgJBCgpAfQgnAhhFAAIglAAIgXCggAgUgcIAUAAQAVAAAMgMQANgNAEgaQAHg0gqAAIgUAAg");
	this.shape_65.setTransform(190.3,309.8,0.353,0.353);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1D1D1B").s().p("AiUDSIA8mjIDtAAIgNBZIh/AAIgvFKg");
	this.shape_66.setTransform(180.6,309.8,0.353,0.353);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1D1D1B").s().p("AANDSIAlj6IhsD6Ih6AAIA9mjIBqAAIgiDrIBpjrIB7AAIg9Gjg");
	this.shape_67.setTransform(169.2,309.8,0.353,0.353);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1D1D1B").s().p("ABIDSIA8mjIBuAAIg9GjgAjyDSIA9mjIBuAAIgVCWIArAAQBHAAAcAjQAbAigIA/QgGAngRAbQgOAagYARQgWAPgYAHQgdAGgXAAgAh4CDIAOAAQAfAAANgOQAOgNAEgeQAFghgNgLQgMgMgZAAIgPAAg");
	this.shape_68.setTransform(154.6,309.8,0.353,0.353);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1D1D1B").s().p("AikDSIA9mjICmAAQA7AAAYAcQAYAdgHAvQgCARgGAPQgGAPgKAOQgJAMgPAJQgOAJgSAEIAAABQATABAPAJQANAJAIANQAIAOACAQQACAOgDATQgDAbgLAXQgKAWgSARQgSARgZAJQgZAJgjAAgAgqCDIAfAAQAOAAAOgMQANgNAEgbQAEgYgKgNQgKgNgPAAIgeAAgAgQgtIAZAAQARAAALgMQALgNACgRQADgRgHgOQgHgNgRAAIgaAAg");
	this.shape_69.setTransform(139.9,309.8,0.353,0.353);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1D1D1B").s().p("AhQBtIAfjZIA4AAIgKBOIAVAAQAmAAAOASQAOASgEAgQgDATgJAPQgHANgNAJQgKAHgOAEQgQAEgKAAgAgRBEIAHAAQAOAAAIgHQAHgIACgPQACgRgGgGQgHgGgMAAIgHAAg");
	this.shape_70.setTransform(202.8,293.8,0.353,0.353);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1D1D1B").s().p("Ag0BrQgOgFgHgOQgGgNAAgWQAAgZAEgcQAEgcAHgXQAIgWAKgNQAMgNAPgHQARgFAUAAQASAAAOAEQAOAGAGAJQAIAJABAMQADANgDAPIgCAOIg3AAIACgMQADgTgDgGQgDgHgIAAQgHAAgEADQgDADgDAJQgEAJgCAOIgLBIQgBAQAAAHQABAIADAEQAEADAGAAQAGAAACgDQADgCAEgGIAFgRIAEgZIA3AAIgCAQQgDAWgJAPQgIAPgLAJQgLAIgOACQgNADgNABQgYgBgPgFg");
	this.shape_71.setTransform(197.1,293.8,0.353,0.353);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1D1D1B").s().p("AAHBtIATiBIg3CBIhAAAIAgjZIA3AAIgRB5IA1h5IBAAAIgfDZg");
	this.shape_72.setTransform(191,293.8,0.353,0.353);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1D1D1B").s().p("AiEBtIAfjZIA5AAIgZCqIAhAAIAYiqIA4AAIgYCqIAgAAIAYiqIA5AAIgfDZg");
	this.shape_73.setTransform(183.1,293.8,0.353,0.353);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1D1D1B").s().p("AAHBtIATiBIg3CBIhAAAIAgjZIA3AAIgSB5IA2h5IA/AAIgeDZg");
	this.shape_74.setTransform(175.3,293.8,0.353,0.353);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1D1D1B").s().p("AACBtIAZirIgiAAIgZCrIg5AAIAfjZICUAAIgfDZg");
	this.shape_75.setTransform(169,293.8,0.353,0.353);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1D1D1B").s().p("AAkCBIAGgpIhaAAIgGApIg0AAIANhYIAPAAQAJgOAFgLIALgbIAIgeIAOhXICKAAIgZCpIATAAIgNBYgAAMg/QgCAPgEAQQgFAUgCAKQgFAPgFAJIgIATIAsAAIASh8IgcAAg");
	this.shape_76.setTransform(161.9,294.5,0.353,0.353);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1D1D1B").s().p("AgzBrQgOgFgIgOQgHgPgBgUQgBgXAFgeQAEgcAHgWQAIgWALgOQAKgNARgGQARgHATABQAVgBAPAHQAPAGAGANQAHANACAXQAAATgEAfQgEAegHAXQgIAWgLANQgLAOgQAFQgPAFgVABQgWgBgOgFgAAAhGQgDADgEAJQgDAKgCANIgLBIIgBAXQABAIADAEQAEADAGAAQAHAAADgDQAEgEADgIQAEgIACgPIALhIQABgPAAgIQgBgJgEgDQgDgDgGAAQgHAAgEADg");
	this.shape_77.setTransform(155.9,293.8,0.353,0.353);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1D1D1B").s().p("AACBtIAYirIgiAAIgYCrIg5AAIAfjZICUAAIgfDZg");
	this.shape_78.setTransform(149.8,293.8,0.353,0.353);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgyBTQgMgIgKgJQgJgIgEgKQgDgLACgJQABgKAIgOIAEgFIApAZIgDAEQgGAKABAHQABAHAGADQAHAEAGgCQAGgCAFgHQAEgIgBgIQgDgIgFgHIgLgRQgHgHgEgLQgEgLABgLQAAgLAKgPQAPgYAUgGQAVgEAbAQQAbARAGAUQAEAVgQAZIgngZIACgDQAFgIAAgHQAAgGgGgEQgGgFgHADQgFACgEAGQgFAIACAIQADAIAFAIIAMAQQAHAJAEAKQAEAKgBANQAAALgJAQQgRAbgVACIgFAAQgUAAgYgPg");
	this.shape_79.setTransform(197.2,270.1,0.353,0.353);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgXBqQgNgEgNgGQgNgFgLgJQgKgIgEgKQgEgMACgNQACgOAJgSIA1hxIAsAVIg6B8QgGANACAGQABAFAHAEQAFADAHgDQAGgDAFgMIA6h8IAtAVIg2BxQgIASgKAKQgKALgJADQgHADgHAAIgJgBg");
	this.shape_80.setTransform(192.8,267.3,0.353,0.353);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgFBfQgBgDABgGIAKgnIADgMQABgHgBgCQAAgEgDgCIgGgEIgNgEIgXBJIgvgQIA7i0IBJAYQAMAEAJAHQAIAHAFAIQADAIAAAKQgBAMgDAIQgFARgLAJQgLAKgSgDIAAAAQARAIADALQADANgGASIgLAlIAAAFIABADIACAFIgBACgAgDgTIAIADQAKAEAHgFQAGgEAEgKQAEgLgDgHQgDgHgLgDIgJgCg");
	this.shape_81.setTransform(187.2,265.5,0.353,0.353);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AABBhIgPhHIgOAOIgJAxIgxgJIAki7IAxAKIgOBIIABAAIAxhBIA0AKIg/BJIAgBzg");
	this.shape_82.setTransform(182.2,264.2,0.353,0.353);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAYBgIgCgiIgngDIgIAhIgzgEIA7i7IA9AFIAhDBgAgJAWIAbACIgIhRIAAAAg");
	this.shape_83.setTransform(176.4,263.5,0.353,0.353);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ag8hcIBvgFIACApIg/ADIACAgIA6gDIACAnIg6ADIACAmIBAgDIABAoIhxAFg");
	this.shape_84.setTransform(171.6,263.3,0.353,0.353);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhEhXIBIgMQANgCAMADQALADAIAHQAJAHAEAJQAEAJADAOQAEAegNAQQgOARgeAEIgQADIAKBIIgwAIgAgFg9IgJACIAHAuIAJgCQAJgBAEgHQAEgFgCgNQgDgUgOAAIgFAAg");
	this.shape_85.setTransform(166.2,264,0.353,0.353);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AhQhMIBsgeIALAnIg9ARIAKAgIA3gQIALAkIg5AQIAKAlIA/gSIALAoIhuAeg");
	this.shape_86.setTransform(161.6,264.9,0.353,0.353);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgVBbQgMgIgJgQQgIgPgMgbQgLgbgDgQQgEgSADgPQADgOAKgJQAMgLAQgGQAPgGANgBQAMAAAKAEQAJAFAIAJQAHAKAFAMIAFALIgtASIgDgKQgHgQgEgDQgFgFgHADQgFACgCAEQgCADABAJIARAwIAVAwQAEAGAFABQAEACAFgCQADgBADgEQACgEgBgFIgDgOIgIgVIAtgRIAFAMQAIATAAANQgBAQgFAIQgFAKgKAHQgIAGgNAFQgVAIgMAAIgCAAQgLAAgMgIg");
	this.shape_87.setTransform(156.7,266.5,0.353,0.353);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhAhJIAsgXIBVCqIgsAXg");
	this.shape_88.setTransform(153.1,268.2,0.353,0.353);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgXBjQgSgEgRgKQgQgMgLgQQgMgSgDgTQgEgTAEgSQADgSALgRQAMgRAQgLQAPgKAUgGQASgFAQABQARABAPAIQAPAIAKAQQAKAPABAOQACAOgDAOQgDAMgHALQgHALgKAGQgEADgGAAQgFAAgEgFIgBABQAAAGgFAIQgEAGgIAFQgGAFgIABQgJACgHgCQgJgDgHgEQgGgFgHgJQgHgMgCgJQgDgLABgLQABgMAGgJQAFgKAKgGQAJgGAJgBQAIgCAKAEIgCgKIATgNIAcBAQADAFAEgCQADgCACgFQACgFAAgFQAAgFgCgJQgCgIgHgJQgJgNgJgGQgLgHgMAAQgKgCgOAEQgNAEgNAIQgOAKgIAMQgIAMgDAOQgDAMAEAPQACAMAKAQQAKAOAMAJQAMAIAPACQANADAOgEQAPgEAPgJQANgKAIgJQAJgMADgLIAZgQQgBAYgMAUQgLATgcATQgSAMgTADQgJACgJAAQgJAAgKgCgAgOgTQgFAEgCAEQgDAEgBAGIABAJIAEAJQAFAIAHACQAHACAHgFQAFgDADgFIAEgKQABgFgBgEQgBgFgDgFQgGgIgHgBIgDgBQgGAAgGAEg");
	this.shape_89.setTransform(148.7,270.7,0.353,0.353);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EC6921").s().p("ApKVtQkOhzjRjQQjRjRhykOQh2kYAAkzQAAkyB2kYQBykODRjRQDRjREOhyQEYh3EyAAQEzAAEYB3QEPByDQDRQDRDQByEPQB3EYAAEyQAAEzh3EYQhyEOjRDRQjQDQkPBzQkYB2kzAAQkyAAkYh2g");
	this.shape_90.setTransform(173.4,308.8,0.353,0.353);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgDAlIAAg2IAHAAIAAA2gAgDgaIAAgKIAHAAIAAAKg");
	this.shape_91.setTransform(192.4,391.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgDAlIAAgvIgIAAIAAgHIAIAAIAAgFIABgIQABgDABgBQADgCAFAAIACAAIACAAIAAAGIgBAAIgCAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAIgBAFIAAAGIAIAAIAAAHIgIAAIAAAvg");
	this.shape_92.setTransform(189.9,391.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape_93.setTransform(187.3,394.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAJAlIgMgbIgGAIIAAATIgIAAIAAhJIAIAAIAAAsIASgZIAJAAIgRAUIARAig");
	this.shape_94.setTransform(184.1,391.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgOAZQgEgEAAgHQAAgFABgDQACgDADgCQADgCAFgBIADgCIAEgBIACgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIABgEQgBgFgBgCQgCgBgEAAQgEAAgCACQgCACAAAFIgHAAQABgIAEgEQADgEAIAAQAEAAAEACQADACACADQABADABAEIAAAfIAAADQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAIABAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgCgFIAAAAQgCAEgCACQgDADgEAAQgHAAgDgEgAAAAAIgEADIgEAEQgBACgBAEQAAAEACACQACADAEAAQACAAADgCQACgCABgCIABgFIAAgNIgHACg");
	this.shape_95.setTransform(179.4,392.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgDgGABgLIABgKQAAgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIABAKIgaAAIAAALQABAEACADQACACAEAAQAEAAABgCIADgFIABgGIAIAAQAAAFgDAFQgBAEgEADQgDADgGAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_96.setTransform(174.8,392.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_97.setTransform(170.2,393.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgDgGABgLIABgKQAAgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIABAKIgaAAIAAALQABAEACADQACACAEAAQAEAAABgCIADgFIABgGIAIAAQAAAFgDAFQgBAEgEADQgDADgGAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_98.setTransform(165.4,392.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgIAaQgDgCgCgEQgCgEgBgFIgBgKIABgKQABgFACgFQACgEAEgCQADgDAFAAQAGAAADADQAEACACAEQACAEAAAGIgHAAIgBgGIgDgFQgCgBgEAAQgDAAgDADQgCADgBAGIgBAKIABAHIABAHQABADACACQACACADAAQAEAAACgCQACgCABgDIABgHIAHAAIgCAKQgBAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_99.setTransform(160.9,392.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgDAlIAAg2IAHAAIAAA2gAgDgaIAAgKIAHAAIAAAKg");
	this.shape_100.setTransform(157.6,391.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape_101.setTransform(155.2,394.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAJAbIgJgtIgIAtIgJAAIgMg2IAHAAIAKAwIAJgwIAHAAIAJAwIAAAAIAKgwIAHAAIgMA2g");
	this.shape_102.setTransform(150.7,392.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAJAbIgJgtIgHAtIgKAAIgNg2IAIAAIAKAwIAJgwIAHAAIAJAwIAAAAIAKgwIAHAAIgMA2g");
	this.shape_103.setTransform(144.1,392.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAJAbIgJgtIgHAtIgKAAIgNg2IAIAAIAKAwIAJgwIAHAAIAJAwIAAAAIAKgwIAHAAIgMA2g");
	this.shape_104.setTransform(137.6,392.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgDAbIAAgKIAIAAIAAAKgAgDgQIAAgKIAIAAIAAAKg");
	this.shape_105.setTransform(130.6,392.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgCgGgBgLIABgKQABgFACgEQACgEADgCQAEgDAEAAQAGAAADADQAEACACAFIACAKIAAAKIgaAAIABALQABAEACADQACACADAAQAFAAABgCIADgFIAAgGIAIAAQAAAFgBAFQgCAEgEADQgDADgGAAQgFAAgEgDgAAJgEIgBgIQAAgEgCgDQgCgCgEAAQgDAAgCADQgCACgBAEIgBAIIASAAIAAAAg");
	this.shape_106.setTransform(127.1,392.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_107.setTransform(122.4,393.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_108.setTransform(117.4,392.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgDAbIAAgvIgOAAIAAgHIAjAAIAAAHIgOAAIAAAvg");
	this.shape_109.setTransform(112.9,392.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgOAZQgEgEAAgHQAAgFABgDQACgDADgCQADgCAFgBIADgCIAEgBIACgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgEQAAgFgBgCQgCgBgEAAQgEAAgCACQgCACAAAFIgGAAQAAgIADgEQAEgEAIAAQAFAAADACQADACACADQABADAAAEIAAAfIABADQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAIABAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgCgFIAAAAQgBAEgDACQgDADgEAAQgHAAgDgEgAAAAAIgEADIgEAEQgBACgBAEQAAAEACACQACADADAAQAEAAACgCQACgCAAgCIABgFIAAgNIgGACg");
	this.shape_110.setTransform(108.8,392.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgLAYQgFgEgBgKIAIAAQABAHACADQACACAEAAQAEAAADgCQADgCAAgGQAAgFgDgCQgCgDgFAAIgCAAIAAgGIACAAQAEAAACgCQADgDgBgEIgBgEIgCgDIgFgBQgEAAgCACQgCADgBAEIgHAAQABgEACgEQACgEADgCQAEgCAEAAQAEAAAEACQAEACACADQACADAAAEQAAAFgCAEQgDADgFABIAGACQACABACADQACADgBAEQABAIgFAEQgEAFgJAAQgHAAgEgFg");
	this.shape_111.setTransform(104.2,392.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_112.setTransform(99.6,392.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAKAbIAAgZIgTAAIAAAZIgIAAIAAg2IAIAAIAAAYIATAAIAAgYIAHAAIAAA2g");
	this.shape_113.setTransform(94.6,392.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgPAZQgDgEAAgHQAAgFABgDQACgDADgCQADgCAFgBIAEgCIACgBIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIABgEQAAgFgDgCQgBgBgEAAQgEAAgCACQgCACAAAFIgHAAQAAgIAFgEQAEgEAHAAQAFAAADACQAEACABADQACADAAAEIAAAfIAAADQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAAAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgBgFIgBAAQgCAEgDACQgCADgEAAQgHAAgEgEgAABAAIgFADIgEAEQgCACAAAEQAAAEACACQACADAEAAQACAAACgCQADgCABgCIABgFIAAgNIgGACg");
	this.shape_114.setTransform(90,392.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgOAbIAAg2IAdAAIAAAHIgVAAIAAAvg");
	this.shape_115.setTransform(86,392.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_116.setTransform(81.5,393.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_117.setTransform(76.4,392.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgIAjQgEgDgCgGQgCgGgBgLIABgKQABgFACgEQACgEAEgCQADgDAEAAQAGAAADADQAEACACAFIACAJIABALIgaAAIAAALQABAEACADQACACADAAQAEAAACgCIADgFIAAgGIAJAAQAAAFgCAFQgCAEgEADQgEADgFAAQgFAAgEgDgAAJAEIAAgHQgBgEgCgDQgCgCgEAAQgDAAgCADQgCACAAAEIgBAHIARAAIAAAAgAAEgbIAAgKIAIAAIAAAKgAgJgbIAAgKIAIAAIAAAKg");
	this.shape_118.setTransform(69.3,391.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgCgGgBgLIABgKQABgFACgEQACgEAEgCQADgDAEAAQAGAAADADQAEACACAFIACAKIABAKIgaAAIAAALQABAEACADQACACADAAQAEAAACgCIADgFIAAgGIAJAAQAAAFgCAFQgCAEgEADQgEADgFAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgEAAQgDAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_119.setTransform(64.8,392.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_120.setTransform(57.5,392.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_121.setTransform(49.9,392.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_122.setTransform(45.3,392.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAKAbIAAgZIgSAAIAAAZIgIAAIAAg2IAIAAIAAAYIASAAIAAgYIAIAAIAAA2g");
	this.shape_123.setTransform(40.3,392.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgCgGAAgLIABgKQAAgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIAAAKIgaAAIABALQABAEACADQACACAEAAQAEAAABgCIADgFIABgGIAHAAQAAAFgCAFQgBAEgEADQgDADgGAAQgFAAgEgDgAAJgEIgBgIQAAgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgCAIIASAAIAAAAg");
	this.shape_124.setTransform(35.6,392.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAQAjIAAgPIgfAAIAAAPIgHAAIAAgWIAFAAIADgJIACgIIABgLIAAgTIAdAAIAAAvIAFAAIAAAWgAgEgMIAAAKIgCAHIgDAIIATAAIAAgoIgOAAg");
	this.shape_125.setTransform(30.7,393.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgDgGABgLIAAgKQABgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIABAKIgaAAIAAALQABAEACADQACACAEAAQADAAACgCIADgFIABgGIAIAAQAAAFgCAFQgCAEgEADQgDADgGAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_126.setTransform(26,392.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgQAbIAAg2IARAAQAEAAADADQAEABACADQABACAAAFQAAAFgBAEQgDADgEABQAFAAACAEQADADAAAGQAAAEgCAEQgCADgDABQgDACgDAAgAgIAVIAIAAQAFAAACgDQACgCAAgEQAAgGgDgBQgCgDgEAAIgIAAgAgIgDIAIAAQADAAACgCQADgCAAgFQAAgEgDgCQgBgBgEgBIgIAAg");
	this.shape_127.setTransform(21.5,392.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_128.setTransform(16.6,392.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_129.setTransform(11.8,393.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAKAbIAAgvIgSAAIAAAvIgJAAIAAg2IAjAAIAAA2g");
	this.shape_130.setTransform(6.7,392.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgDgGABgLIAAgKQABgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIABAKIgaAAIAAALQABAEACADQACACAEAAQADAAACgCIADgFIABgGIAIAAQAAAFgCAFQgCAEgEADQgDADgGAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_131.setTransform(224.4,381.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAJAbIgMgbIgGAIIAAATIgIAAIAAg2IAIAAIAAAaIASgaIAJAAIgRAWIARAgg");
	this.shape_132.setTransform(220.1,381.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAQAjIAAgPIgfAAIAAAPIgHAAIAAgWIAFAAIADgJIACgIIABgLIAAgTIAdAAIAAAvIAFAAIAAAWgAgEgMIAAAKIgCAHIgDAIIATAAIAAgoIgOAAg");
	this.shape_133.setTransform(215.1,381.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_134.setTransform(210,381.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_135.setTransform(205.5,382);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_136.setTransform(200.4,381.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAKAbIAAgvIgSAAIAAAvIgIAAIAAg2IAiAAIAAA2g");
	this.shape_137.setTransform(195.5,381.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDAIQAAAAAAgBQABAAAAAAQABAAAAgBQAAAAAAgBIABgDIAAgDIgDAAIAAgKIAIAAIAAALQgBAEgCADQgCAEgDABg");
	this.shape_138.setTransform(189.4,384);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AANAbIgNgWIgMAWIgIAAIARgbIgQgbIAIAAIALAWIAMgWIAIAAIgPAbIAQAbg");
	this.shape_139.setTransform(185.9,381.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_140.setTransform(181.1,381.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_141.setTransform(176.5,381.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgQAbIAAg2IARAAQAEAAADADQADABADADQABACABAFQgBAFgBAEQgDADgEABQAFAAADAEQACADAAAGQAAAEgCAEQgCADgDABQgDACgDAAgAgIAVIAIAAQAFAAACgDQACgCAAgEQAAgGgDgBQgCgDgEAAIgIAAgAgIgDIAIAAQAEAAACgCQACgCAAgFQAAgEgCgCQgCgBgEgBIgIAAg");
	this.shape_142.setTransform(171.7,381.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_143.setTransform(166.8,381.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgRAcIgDgBIAAgGIACAAIACAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIACgHIABgNIAAgbIAfAAIAAA2IgIAAIAAgvIgQAAIAAAVIgBAOQgBAGgCADQgDAEgFAAIgCAAg");
	this.shape_144.setTransform(161.5,381.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgIAaQgDgCgCgEQgCgEgBgFIgBgKIABgKQABgFACgFQACgEAEgCQADgDAFAAQAGAAADADQAEACACAEQACAEAAAGIgHAAIgBgGIgDgFQgCgBgEAAQgDAAgDADQgCADgBAGIgBAKIABAHIABAHQABADACACQACACADAAQAEAAACgCQACgCABgDIABgHIAHAAQAAAFgCAFQgBAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_145.setTransform(157.2,381.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgSAkIAAgHIADABIADAAQAEAAACgDIAEgIIgSg3IAIAAIAMArIABAAIAMgrIAIAAIgRA3IgEAJQAAAEgEACQgDADgFAAIgGgBg");
	this.shape_146.setTransform(152.8,382);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgLAiQgEgEgCgHQgCgHAAgLQAAgLACgHQADgIADgEQAEgEAGgCIAHgCQAEgBAAgDIAHAAQgBAGgEACQgEADgHABQgFACgDAEQgDAEgBAHQACgEAEgCQADgCADAAQAJAAAFAHQAEAGABAMQAAAOgFAIQgFAHgKAAQgGAAgFgEgAgFgHQgDACgBAFQgCADAAAGQAAALADAFQADAGAFAAQAGAAADgGQACgFAAgLIgBgJIgEgHQgCgDgEAAQgDAAgCADg");
	this.shape_147.setTransform(145.6,380.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_148.setTransform(140.6,381.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_149.setTransform(133.1,381.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_150.setTransform(128.5,381.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AANAjIAAgPIggAAIAAg2IAIAAIAAAvIASAAIAAgvIAIAAIAAAvIAFAAIAAAWg");
	this.shape_151.setTransform(123.7,381.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgOAZQgEgEAAgHQAAgFACgDQABgDADgCQADgCAFgBIADgCIAEgBIABgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgEQAAgFgCgCQgBgBgEAAQgEAAgCACQgCACAAAFIgGAAQAAgIADgEQAEgEAIAAQAEAAAEACQADACACADQACADgBAEIAAAfIABADQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAIABAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgCgFIAAAAQgBAEgDACQgDADgEAAQgHAAgDgEgAABAAIgFADIgEAEQgBACgBAEQAAAEACACQACADADAAQADAAADgCQACgCAAgCIABgFIAAgNIgFACg");
	this.shape_152.setTransform(118.8,381.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AARAbIAAgvIgPAvIgDAAIgOgvIgBAAIAAAvIgHAAIAAg2IANAAIAJAkIABAFIAAAGIABAAIAAgGIABgFIAKgkIAMAAIAAA2g");
	this.shape_153.setTransform(113.4,381.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_154.setTransform(107.9,382);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_155.setTransform(102.8,381.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgDAuIAAgYIgFAFQgDACgEAAQgHAAgEgEQgDgEgCgHQgBgHAAgHQAAgHABgHQACgGAEgEQAEgDAHAAQADAAADABQADACACAEIAAgZIAHAAIAAAZQACgEADgCQADgBADAAQAHAAAEADQAEAEACAGQABAHAAAHQAAAHgBAHQgCAHgEAEQgEAEgHAAQgEAAgCgCIgFgFIAAAYgAAJgTQgCACgBAEIgCAHIAAAGIAAALIADAIQADAEAEAAQAGAAADgGQACgGAAgLIAAgGIgCgHIgDgGQgCgCgEAAQgDAAgCACgAgTgTQgCACgBAEIgCAHIAAAGIAAALIADAIQADAEAEAAQAGAAADgGQACgGAAgLIAAgGIgCgHIgDgGQgCgCgEAAQgDAAgCACg");
	this.shape_156.setTransform(96.5,381);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAKAbIAAgZIgSAAIAAAZIgIAAIAAg2IAIAAIAAAYIASAAIAAgYIAIAAIAAA2g");
	this.shape_157.setTransform(90.2,381.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_158.setTransform(85.2,381.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_159.setTransform(77.6,381.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgOAZQgEgEAAgHQAAgFACgDQABgDADgCQADgCAFgBIADgCIAEgBIABgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgEQAAgFgCgCQgBgBgEAAQgEAAgCACQgCACAAAFIgGAAQAAgIADgEQAEgEAIAAQAFAAADACQADACACADQACADgBAEIAAAfIABADQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAIABAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgCgFIAAAAQgBAEgDACQgDADgEAAQgHAAgDgEgAABAAIgFADIgEAEQgBACgBAEQAAAEACACQACADADAAQADAAADgCQACgCAAgCIABgFIAAgNIgFACg");
	this.shape_160.setTransform(73.4,381.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAKAbIAAgZIgTAAIAAAZIgIAAIAAg2IAIAAIAAAYIATAAIAAgYIAHAAIAAA2g");
	this.shape_161.setTransform(68.6,381.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgLAiQgEgEgCgHQgCgHAAgLQAAgLACgHQADgIADgEQAEgEAGgCIAHgCQAEgBAAgDIAHAAQgBAGgEACQgEADgHABQgFACgDAEQgDAEgBAHQACgEAEgCQADgCADAAQAJAAAFAHQAEAGABAMQAAAOgFAIQgFAHgKAAQgGAAgFgEgAgFgHQgDACgBAFQgCADAAAGQAAALADAFQADAGAFAAQAGAAADgGQACgFAAgLIgBgJIgEgHQgCgDgEAAQgDAAgCADg");
	this.shape_162.setTransform(63.6,380.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_163.setTransform(58.7,381.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_164.setTransform(53.8,382);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAQAjIAAgPIgfAAIAAAPIgHAAIAAgWIAFAAIADgJIACgIIABgLIAAgTIAdAAIAAAvIAFAAIAAAWgAgEgMIAAAKIgCAHIgDAIIATAAIAAgoIgOAAg");
	this.shape_165.setTransform(48.7,381.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_166.setTransform(43.7,381.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAOAlIAAhBIgbAAIAABBIgJAAIAAhJIAsAAIAABJg");
	this.shape_167.setTransform(38.2,380.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_168.setTransform(31.5,383.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgOAbIAAg2IAcAAIAAAHIgUAAIAAAvg");
	this.shape_169.setTransform(28.7,381.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgOAgQgFgGAAgKQAAgGACgEQACgEAEgCQADgCADgBQgEAAgCgDQgEgCgBgEIgBgHQABgEABgEQACgEAEgDQAEgCAFgBQAHABADACQAEADADAEQABAEAAAEIgBAHQgBAEgDACQgCADgEAAIAGADQAEACABAEQACAEAAAGQAAAKgFAGQgFAGgKAAQgJAAgFgGgAgGADQgCACgBADIgBAHIABAIQAAAEADABQADACADAAQAFAAADgCQACgBABgEIAAgIIgBgHQgBgDgCgCQgCgCgFgBQgDABgDACgAgGgaQgDADABAFQgBAGADADQADADAEAAQADAAACgCIADgEIAAgGQAAgFgBgDQgCgDgGAAQgEAAgCADg");
	this.shape_170.setTransform(21.6,380.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAEAlIAAg1IgPAAIAAgHIAJgBQADgBACgCQACgDABgGIAGAAIAABJg");
	this.shape_171.setTransform(16.1,380.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgKAiQgEgDgCgGQgCgFgBgHIAAgNIAAgLIADgMQACgGAEgEQAEgDAGgBQAHABAEADQAEAEACAGQACAFABAHIAAALIAAANQgBAHgCAFQgCAGgEADQgEAEgHAAQgGAAgEgEgAgFgaQgDACgBAFQgBAEAAAGIgBAJIABALQAAAGABAEQABAEADADQACACADAAQAEAAACgCIAEgHIABgKIABgLIgBgJIgBgKIgEgHQgCgDgEAAQgDAAgCADg");
	this.shape_172.setTransform(11.7,380.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgTAlIABgJIACgIIAGgHIAJgJIAFgEIAFgHQACgEAAgFQAAgFgDgEQgCgDgGAAQgEAAgCACQgDACgBAEIAAAKIgIAAIAAgEQAAgGACgFQACgFAEgDQAEgDAGAAQAGAAAFADQAEADACAEQACAFAAAFQAAAGgCAEQgBAEgDADIgHAHIgIAIIgFAFIgCAEIgBAEIAeAAIAAAIg");
	this.shape_173.setTransform(6.7,380.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAKAcIAAgYIgIAAIgKAYIgJAAIAMgZQgFgBgCgDQgDgEAAgFQAAgIAEgEQAEgEAHAAIASAAIAAA2gAgFgRQgCACAAAFQAAAEACACQACADAEAAIAJAAIAAgSIgIAAQgFAAgCACg");
	this.shape_174.setTransform(213,369.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgSAlIAAhIIAIAAIAAAGQACgEADgCIAFgBQAHgBAEAEQAEAEACAGQACAGgBAIQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAYgAgFgcQgCACgBADIgCAHIAAAIIABAJQAAAFADAEQACADAEAAQAGAAACgFQACgHAAgKIAAgGIgBgHQgBgEgDgCQgCgCgDAAQgDAAgCACg");
	this.shape_175.setTransform(208.5,370.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgLAiQgEgEgCgHQgCgHAAgLQAAgLACgHQADgIADgEQAEgEAGgCIAHgCQAEgBAAgDIAHAAQgBAGgEACQgEADgHABQgFACgDAEQgDAEgBAHQACgEAEgCQADgCADAAQAJAAAFAHQAEAGABAMQAAAOgFAIQgFAHgKAAQgGAAgFgEgAgFgHQgDACgBAFQgCADAAAGQAAALADAFQADAGAFAAQAGAAADgGQACgFAAgLIgBgJIgEgHQgCgDgEAAQgDAAgCADg");
	this.shape_176.setTransform(203.5,369);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAKAcIAAgYIgIAAIgKAYIgJAAIAMgZQgFgBgCgDQgDgEAAgFQAAgIAEgEQAEgEAHAAIASAAIAAA2gAgFgRQgCACAAAFQAAAEACACQACADAEAAIAJAAIAAgSIgIAAQgFAAgCACg");
	this.shape_177.setTransform(198.5,369.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgDAcIAAgvIgOAAIAAgHIAjAAIAAAHIgOAAIAAAvg");
	this.shape_178.setTransform(194.4,369.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAJAcIgMgcIgGAIIAAAUIgIAAIAAg2IAIAAIAAAaIASgaIAJAAIgRAVIARAhg");
	this.shape_179.setTransform(190.4,369.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_180.setTransform(185.4,369.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAEAlIAAg1IgPAAIAAgGIAJgBQADgBACgDQACgDABgGIAGAAIAABJg");
	this.shape_181.setTransform(177.4,368.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgCgGQgCgFAAgHIAIAAIABAIQABAEACACQADACAEAAQAGAAADgDQADgEAAgGQAAgGgCgEQgCgDgDgBQgEgBgFAAIAAgGQAEAAADgCQADgBACgCQACgDAAgFQAAgGgDgDQgCgDgFAAQgDAAgDACQgCACgBADIgBAHIgIAAQAAgGACgFQACgFAFgDQAEgDAFAAQAIABAFAEQAFAFAAAJQAAAGgCAEQgDAFgGACQAGABAEAEQADAFAAAHQAAAGgCAFQgCAFgFADQgEADgHAAQgGAAgFgDg");
	this.shape_182.setTransform(173,369);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_183.setTransform(165.6,369.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AAKAcIAAgvIgSAAIAAAvIgJAAIAAg2IAjAAIAAA2g");
	this.shape_184.setTransform(160.6,369.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgCgGQgCgFAAgHIAIAAIABAIQABAEACACQADACAEAAQAGAAADgDQADgEAAgGQAAgGgCgEQgCgDgDgBQgEgBgFAAIAAgGQAEAAADgCQADgBACgCQACgDAAgFQAAgGgDgDQgCgDgFAAQgDAAgDACQgCACgBADIgBAHIgIAAQAAgGACgFQACgFAFgDQAEgDAFAAQAIABAFAEQAFAFAAAJQAAAGgCAEQgDAFgGACQAGABAEAEQADAFAAAHQAAAGgCAFQgCAFgFADQgEADgHAAQgGAAgFgDg");
	this.shape_185.setTransform(153.2,369);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgIAaQgDgCgCgEQgCgEgBgFIgBgKIABgKQABgFACgFQACgEAEgCQADgDAFAAQAGAAADADQAEACACAEQACAEAAAGIgHAAIgBgGIgDgFQgCgBgEAAQgDAAgDADQgCADgBAGIgBAKIABAHIABAHQABADACACQACACADAAQAEAAACgCQACgCABgDIABgHIAHAAIgCAKQgBAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_186.setTransform(146.1,369.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAKAcIAAgpIABgDIAAgBIAAgDIAAADIgBACIAAACIgSApIgJAAIAAg2IAIAAIAAApIgBADIAAADIAAAAIABgEIABgCIARgpIAJAAIAAA2g");
	this.shape_187.setTransform(138.8,369.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAKAcIAAgpIABgDIAAgBIAAgDIAAADIgBACIAAACIgSApIgJAAIAAg2IAIAAIAAApIgBADIAAADIAAAAIABgEIABgCIARgpIAJAAIAAA2g");
	this.shape_188.setTransform(133.7,369.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AANAjIAAgPIggAAIAAg2IAIAAIAAAwIASAAIAAgwIAIAAIAAAwIAFAAIAAAVg");
	this.shape_189.setTransform(128.9,370.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAJAcIgMgcIgGAIIAAAUIgIAAIAAg2IAIAAIAAAaIASgaIAJAAIgRAVIARAhg");
	this.shape_190.setTransform(124.2,369.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgOAZQgEgEAAgHQAAgFABgDQACgDADgCQADgCAFgBIADgCIAEgBIACgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIABgEQgBgFgBgCQgCgBgEAAQgEAAgCACQgCACAAAFIgHAAQABgIAEgEQADgEAIAAQAEAAAEACQADACACADQABADABAEIAAAfIAAADQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAIABAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgCgFIAAAAQgCAEgCACQgDADgEAAQgHAAgDgEgAAAAAIgEADIgEAEQgBACgBAEQAAAEACACQACADAEAAQACAAADgCQACgCABgCIABgFIAAgNIgHACg");
	this.shape_191.setTransform(119.5,369.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAKAcIAAgYIgIAAIgKAYIgJAAIAMgZQgFgBgCgDQgDgEAAgFQAAgIAEgEQAEgEAHAAIASAAIAAA2gAgFgRQgCACAAAFQAAAEACACQACADAEAAIAJAAIAAgSIgIAAQgFAAgCACg");
	this.shape_192.setTransform(112.2,369.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AAKAcIAAgpIABgDIAAgBIAAgDIAAADIgBACIAAACIgSApIgJAAIAAg2IAIAAIAAApIgBADIAAADIAAAAIABgEIABgCIARgpIAJAAIAAA2g");
	this.shape_193.setTransform(107.5,369.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAKAcIAAgaIgTAAIAAAaIgIAAIAAg2IAIAAIAAAWIATAAIAAgWIAHAAIAAA2g");
	this.shape_194.setTransform(102.5,369.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgCgGgBgLIABgKQABgFACgEQACgEADgCQAEgDAEAAQAGAAADADQAEACACAFIACAKIAAAKIgaAAIABALQABAEACADQACACADAAQAFAAABgCIADgFIAAgGIAIAAQAAAFgBAFQgCAEgEADQgDADgGAAQgFAAgEgDgAAJgEIgBgIQAAgEgCgDQgCgCgEAAQgDAAgCADQgCACgBAEIgBAIIASAAIAAAAg");
	this.shape_195.setTransform(97.8,369.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AAQAjIAAgPIgfAAIAAAPIgHAAIAAgVIAFAAIADgKIACgIIABgMIAAgSIAdAAIAAAwIAFAAIAAAVgAgEgLIAAAJIgCAHIgDAJIATAAIAAgpIgOAAg");
	this.shape_196.setTransform(93,370.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgCgGAAgLIABgKQAAgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIAAAKIgaAAIABALQABAEACADQACACAEAAQAEAAABgCIADgFIABgGIAHAAQAAAFgCAFQgBAEgEADQgDADgGAAQgFAAgEgDgAAJgEIgBgIQAAgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgCAIIASAAIAAAAg");
	this.shape_197.setTransform(88.2,369.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgQAcIAAg2IARAAQAEAAADABQADACADADQACACAAAEQAAAGgCADQgDAEgEABQAEAAAEADQACAEAAAFQAAAGgCACQgCAEgDACQgDABgEABgAgIAVIAIAAQAGAAACgDQABgCAAgFQAAgEgCgDQgCgCgFAAIgIAAgAgIgEIAIAAQAEAAACgCQACgCAAgEQAAgEgCgCQgCgBgEAAIgIAAg");
	this.shape_198.setTransform(83.8,369.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_199.setTransform(78.9,369.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgSAlIAAhIIAIAAIAAAGQACgEADgCIAFgBQAHgBAEAEQAEAEACAGQACAGgBAIQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAYgAgFgcQgCACgBADIgCAHIAAAIIABAJQAAAFADAEQACADAEAAQAGAAACgFQACgHAAgKIAAgGIgBgHQgBgEgDgCQgCgCgDAAQgDAAgCACg");
	this.shape_200.setTransform(74,370.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAKAcIAAgvIgSAAIAAAvIgIAAIAAg2IAiAAIAAA2g");
	this.shape_201.setTransform(69,369.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AAKAcIAAgpIABgDIAAgBIAAgDIAAADIgBACIAAACIgSApIgJAAIAAg2IAIAAIAAApIgBADIAAADIAAAAIABgEIABgCIARgpIAJAAIAAA2g");
	this.shape_202.setTransform(61.5,369.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAJAcIgMgcIgGAIIAAAUIgIAAIAAg2IAIAAIAAAaIASgaIAJAAIgRAVIARAhg");
	this.shape_203.setTransform(56.9,369.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_204.setTransform(51.9,369.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgSAlIAAhIIAIAAIAAAGQACgEADgCIAFgBQAHgBAEAEQAEAEACAGQACAGgBAIQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAYgAgFgcQgCACgBADIgCAHIAAAIIABAJQAAAFADAEQACADAEAAQAGAAACgFQACgHAAgKIAAgGIgBgHQgBgEgDgCQgCgCgDAAQgDAAgCACg");
	this.shape_205.setTransform(47.1,370.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgKAjQgFgEgCgGQgDgGAAgHIgBgMIABgNIADgMQACgGAFgDQAFgDAGgBQAHABAFADQAFADACAFQACAFAAAHIgIAAQAAgEgBgEQgBgEgDgCQgDgCgFAAQgFAAgCADQgDADgCAFQgBAFAAAFIgBAJIABAKIACALQABAEADADQADADAEAAQAFAAADgDQADgCABgFIABgLIAIAAQAAAJgCAGQgCAGgEAEQgFADgIABQgHgBgEgDg");
	this.shape_206.setTransform(41.7,368.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape_207.setTransform(35.3,372.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AAKAcIAAgYIgIAAIgKAYIgJAAIAMgZQgFgBgCgDQgDgEAAgFQAAgIAEgEQAEgEAHAAIASAAIAAA2gAgFgRQgCACAAAFQAAAEACACQACADAEAAIAJAAIAAgSIgIAAQgFAAgCACg");
	this.shape_208.setTransform(31.5,369.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AAKAcIAAgpIABgDIAAgBIAAgDIAAADIgBACIAAACIgSApIgJAAIAAg2IAIAAIAAApIgBADIAAADIAAAAIABgEIABgCIARgpIAJAAIAAA2g");
	this.shape_209.setTransform(26.8,369.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AANAjIAAgPIggAAIAAg2IAIAAIAAAwIASAAIAAgwIAIAAIAAAwIAFAAIAAAVg");
	this.shape_210.setTransform(22,370.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAJAcIgMgcIgGAIIAAAUIgIAAIAAg2IAIAAIAAAaIASgaIAJAAIgRAVIARAhg");
	this.shape_211.setTransform(17.3,369.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AARAlIgFgVIgXAAIgFAVIgJAAIAVhJIAKAAIAUBJgAAKAIIgKgmIAAAAIgJAmIATAAg");
	this.shape_212.setTransform(12,368.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAAAFIgGAJIgFgCIAIgJIgLgEIABgEIAMAEIAAgMIAEAAIAAALIAKgDIACAEIgLADIAHAKIgEADg");
	this.shape_213.setTransform(6.7,366.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAWgGAeIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgJAEgWIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_214.setTransform(109.4,353,0.353,0.353);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AhYB2IAnjlIBIAAIgFAlIABAAQAJgVAQgLQAQgLARAAIAMAAIgMBHIgKgBIgJAAQgUAAgNAJQgNAJgDAXIgVB8g");
	this.shape_215.setTransform(103.4,353,0.353,0.353);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("Ag+ByQgSgGgJgPQgJgOgBgXQgBgXAGggQAGghAJgWQAKgYANgOQAOgOAUgHQATgGAaAAQAYAAAPAFQAPAFAKAOQAJAMADAWQACAVgFAfIgEAWIhwAAIgFAfQgDATAFAFQAFAHAIAAQAKAAAGgJQAHgIAEgXIBFAAQgIAqgYAWQgaAVgtAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIABgKQADgTgCgIQgDgJgNAAQgMAAgEAJg");
	this.shape_216.setTransform(97,353,0.353,0.353);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AADCXIAaiXQACgOgDgGQgDgGgKAAQgKAAgFAGQgFAHgCANIgaCXIhMAAIAzktIBLAAIgRBjIABAAQANgTAQgHQAPgGAOAAQAMAAALADQALAEAGAGQAHAHADANQADAMgDARIgeCsg");
	this.shape_217.setTransform(89.3,351.8,0.353,0.353);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgnCUQgMgCgHgGQgHgGgBgLQgCgMADgTIAVh6IgZAAIAJgzIAZAAIALhDIBLAAIgLBDIAeAAIgJAzIgeAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgpABQgRAAgMgBg");
	this.shape_218.setTransform(83.8,351.9,0.353,0.353);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgnCUQgLgCgHgGQgHgGgCgLQgCgMADgTIAVh6IgZAAIAJgzIAZAAIAMhDIBKAAIgLBDIAeAAIgJAzIgdAAIgTBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgVAAIgUABQgRAAgMgBg");
	this.shape_219.setTransform(79.1,351.9,0.353,0.353);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AhRBzQgLgDgHgHQgGgGgDgNQgDgMADgSIAeisIBMAAIgaCWQgCAPADAGQADAGAKAAQALAAAEgGQAFgGACgPIAaiWIBMAAIgnDkIhIAAIADgcIAAAAQgTAhgpAAQgMAAgLgCg");
	this.shape_220.setTransform(72.4,353.2,0.353,0.353);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AhGBvQgSgJgHgRQgIgQABgWQACgbAEgUQADgVAIgWQAHgWAMgRQAOgRAUgKQAVgKAgAAQAhAAASAJQASAKAGAQQAIARgCAWQAAARgFAdQgCASgJAaQgHAWgMAQQgOARgUAKQgWAKgeAAQghAAgSgJgAAChDQgEADgEAIQgEAJgDANQgDAJgEAaIgFAjQgCAOACAIQAAAHAEAEQAEADAGAAQAGAAAFgDQADgDAEgIQADgFAEgRIANhGQABgNgBgJQgBgIgEgDQgDgDgHAAQgGAAgEADg");
	this.shape_221.setTransform(64.7,353,0.353,0.353);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AhuB7QgKgdAKhAQAHgiAIgUQAJgYALgMQAMgNAOgHQANgFAQAAQARgBAKAIQAMAGADASIABAAIAQhjIBNAAIg0EuIhIAAIAFggIgBAAQgKAUgOAJQgOAIgUAAQgmAAgKgfgAgNgaQgFAEgEAGQgDAIgDAMIgLA9QgBAPABAFQABAGAEAEQAEADAGAAQAHAAAFgDQAEgCAEgIQADgGACgOIAGgfQAEgSABgMQABgLgBgJQgBgGgEgEQgDgDgGAAQgHAAgEADg");
	this.shape_222.setTransform(57.4,351.9,0.353,0.353);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAVgGAfIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgJAEgWIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_223.setTransform(49.7,353,0.353,0.353);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgnCUQgLgCgIgGQgGgGgCgLQgBgMACgTIAVh6IgZAAIAJgzIAZAAIAMhDIBKAAIgLBDIAeAAIgJAzIgeAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgpABQgRAAgMgBg");
	this.shape_224.setTransform(44.2,351.9,0.353,0.353);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AhUBlQgRgTAGgmIBDAAIgBANQABAHACADQAEAIAKAAQAJAAAHgGQAGgEADgKQABgKgHgGQgHgGgLgDIgZgJQgMgEgMgJQgLgIgGgNQgGgNAEgWQACgOAIgOQAJgOAMgJQANgKARgFQARgFAYAAQBWAAgNBIIhCAAQADgOgEgGQgFgGgKAAQgJAAgFAFQgGAFgBAIQgCAKAIAFQAGAFAMAEIAZAIQANADALAJQALAHAGANQAGANgEAWQgDATgIAMQgJAPgNAKQgPALgRAEQgTAFgTAAQgwAAgSgTg");
	this.shape_225.setTransform(37.8,353,0.353,0.353);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAVgGAfIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgIAEgXIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_226.setTransform(30.9,353,0.353,0.353);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgnCUQgLgCgIgGQgGgGgCgLQgCgMAEgTIAUh6IgZAAIAIgzIAaAAIALhDIBMAAIgMBDIAeAAIgIAzIgfAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgoABQgSAAgMgBg");
	this.shape_227.setTransform(25.4,351.9,0.353,0.353);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgXCTIAVhJIgmAAIgWBJIguAAIAWhJIgfAAIAIgxIAlAAIAPgxIgfAAIAIgxIAlAAIAWhJIAuAAIgWBJIAlAAIAWhJIAvAAIgWBJIAfAAIgIAxIglAAIgPAxIAfAAIgIAxIglAAIgWBJgAgZAZIAlAAIAOgxIglAAg");
	this.shape_228.setTransform(18.8,351.9,0.353,0.353);

	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(81.2,221.6,0.353,0.353,0,0,0,762.1,707.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-187.8,-28.2,538,499.5), null);


// stage content:
(lib.temp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(973.1,221.6,1,1,0,0,0,81.2,221.6);

	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(680.8,221.6,1,1,0,0,0,81.2,221.6);

	this.instance_2 = new lib.Image();
	this.instance_2.parent = this;
	this.instance_2.setTransform(285,2,0.075,0.075);

	this.instance_3 = new lib.Image_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-19,0,0.103,0.103);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AAJBvIAQiEIg1CEIg/AAIAcjdIA3AAIgQB7IA0h7IBAAAIgcDdg");
	this.shape.setTransform(1018.5,312.5,0.353,0.353);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhvCuIADgeIgYAAIAGg3IAYAAIAEgmIgYAAIAHhAIAZAAIASigIB7AAQAaAAAQAJQASAKAJAPQAJAPADAVQADATgDAYQgGA3gdAbQgeAdg3AAIgYAAIgFAmIBIAAIgGA3IhIAAIgDAegAgFgNIAOAAQARAAAKgNQALgNACgVQACgVgHgNQgHgOgRAAIgPAAg");
	this.shape_1.setTransform(1095.6,341.4,0.353,0.353);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AhIBeIADglIALABQAKAAAFgGQAEgFAEgIIgjiFIA3AAIAKBSIABAAIAYhSIA1AAIhICfQgEAKgIAHQgGAGgLAFQgKACgPAAg");
	this.shape_2.setTransform(1102.2,325.7,0.353,0.353);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AAiBfIAQiMIgBAAIgqCMIgiAAIgLiMIAAAAIgQCMIguAAIAVi9IBHAAIAHBwIAAAAIAghwIBGAAIgVC9g");
	this.shape_3.setTransform(1095.9,325.7,0.353,0.353);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AAiBfIAQiMIgBAAIgqCMIgiAAIgLiMIAAAAIgQCMIguAAIAVi9IBHAAIAHBwIAAAAIAghwIBGAAIgVC9g");
	this.shape_4.setTransform(1088.8,325.7,0.353,0.353);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AhABfIgJgBIAFglIAKABQAKAAAGgGIAIgNIgjiFIA3AAIAJBSIABAAIAZhSIA1AAIg8CGIgMAZQgEAKgJAHQgFAGgMAFQgLACgOAAIgLAAg");
	this.shape_5.setTransform(1083.2,325.7,0.353,0.353);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AgpBdQgNgGgGgLQgGgMgBgTQAAgQADgdQADgcAFgRQAFgSAKgMQAIgMAPgFQANgFASAAQARAAALAFQALADAGAIQAHAJACAKQACALgCAOIgBAMIgwAAIACgLQABgRgCgFQgDgGgHAAQgFAAgEADQgCAEgDAHIgMBSIAAAUQABAHADADQAEADAFAAQAEAAACgCQAEgCACgFQACgFABgKQACgGACgQIAvAAIgBAOQgCATgHAOQgHAMgKAIQgKAHgLACQgLADgLAAQgUAAgNgFg");
	this.shape_6.setTransform(1077.9,325.6,0.353,0.353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AAYBfIgBghIgmAAIgJAhIg0AAIBEi9IA8AAIAYC9gAgFAYIAaAAIgEhPIgBAAg");
	this.shape_7.setTransform(1070,325.7,0.353,0.353);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("AAFBfIAJhOIgeAAIgJBOIgxAAIAVi9IAyAAIgIBGIAdAAIAIhGIAxAAIgWC9g");
	this.shape_8.setTransform(1065.1,325.7,0.353,0.353);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1B").s().p("AhJBeIAFglIAKABQALAAAEgGQAFgFADgIIgjiFIA3AAIAKBSIABAAIAZhSIA1AAIhICfQgFAKgIAHQgHAGgLAFQgJACgPAAg");
	this.shape_9.setTransform(1057.9,325.7,0.353,0.353);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1B").s().p("AAjBxIAEgkIhNAAIgFAkIgtAAIAJhNIANAAIAMgWQAEgJAEgOQAEgOACgNIAKhMIB3AAIgRCUIARAAIgJBNgAAJg3QgCAOgDAOIgFAaIgOAlIAmAAIAMhsIgYAAg");
	this.shape_10.setTransform(1051.7,326.3,0.353,0.353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1B").s().p("AAyBfIgQhEIgNAWIgFAuIgvAAIAGguIgJgWIgfBEIg2AAIA8huIgghPIAzAAIAXBJIAIhJIAuAAIgIBJIAnhJIA0AAIgyBPIAiBug");
	this.shape_11.setTransform(1045.2,325.7,0.353,0.353);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1D1B").s().p("AhCBfIAWi9IBvAAIgFApIg+AAIgDAgIA6AAIgFAmIg5AAIgFAlIBAAAIgEApg");
	this.shape_12.setTransform(1039.2,325.7,0.353,0.353);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1D1B").s().p("AAjBxIAEgkIhOAAIgEAkIgtAAIAJhNIANAAQAHgMAEgKQAGgLADgMQAEgOACgNIAKhMIB3AAIgRCUIAQAAIgIBNgAAEgbIgFAaQgDAKgEALIgIAQIAnAAIAMhsIgZAAg");
	this.shape_13.setTransform(1033.5,326.3,0.353,0.353);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1D1B").s().p("AgpBdQgNgGgHgLQgGgNgBgSQgBgSADgbQADgXAFgVQAFgSAKgNQAJgMAOgFQAOgFARAAQATAAAMAFQAMAFAHAMQAHAMABATQACASgDAaQgDAbgGASQgGATgJAMQgJALgOAGQgOAFgRAAQgSAAgNgFgAgBg9QgEAEgCAHQgDAHgBANIgIA+IAAAUQABAHADADQADADAFAAQAGAAACgDQAEgCADgIIAFgUIAGg+QACgNgCgHQAAgHgDgEQgDgDgGAAQgFAAgDADg");
	this.shape_14.setTransform(1028.3,325.6,0.353,0.353);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1D1B").s().p("AhRDBQgZgJgNgWQgOgXgEgnQgDgnAGg8QAHg7ANgnQAMgnATgXQATgXAbgJQAZgJAjAAQAjAAAYAJQAYAJAOAXQANAWAEAoQAEAngHA7QgGA8gNAnQgNAngTAXQgTAWgaAJQgaAIgiAAQgjAAgYgIgAgJh4QgIAOgGAqIgOCCQgFApAFAQQAGAPAQAAQAPAAAJgPQAJgOAFgrIAPiCQAEgqgFgOQgFgPgRAAQgPAAgJAPg");
	this.shape_15.setTransform(1081.7,340.8,0.353,0.353);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1D1B").s().p("AhRDBQgYgJgOgWQgOgXgEgnQgDgkAHg/QAGg6ANgoQANgnATgXQATgXAagJQAZgJAjAAQAkAAAXAJQAXAIAPAYQAOAYAEAmQAEAngHA7QgIBAgMAjQgMAngTAXQgUAXgaAIQgZAIgjAAQgjAAgYgIgAgIh4QgKAQgEAoIgPCCQgFAqAGAPQAGAPAQAAQAPAAAJgPQAJgOAEgrIAPiCQAFgqgGgOQgFgPgQAAQgQAAgIAPg");
	this.shape_16.setTransform(1071.4,340.8,0.353,0.353);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1D1B").s().p("AhRDBQgYgIgOgXQgOgYgEgmQgEgoAIg7QAHg+AMgkQAMgnATgXQAUgYAagIQAZgJAjAAQAkAAAXAJQAXAIAPAYQAOAYAEAmQADAogHA6QgGA7gNAoQgMAngTAXQgUAXgaAIQgZAIgjAAQgjAAgYgIgAgJh4QgJAPgEApIgPCCQgFArAGAOQAFAPAQAAQAQAAAJgPQAJgQAEgpIAPiCQAFgpgGgPQgFgPgQAAQgQAAgJAPg");
	this.shape_17.setTransform(1061.2,340.8,0.353,0.353);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1D1B").s().p("AhRDBQgZgJgNgWQgOgXgEgnQgDgnAGg8QAHg7ANgnQALglAUgZQATgXAbgJQAZgJAjAAQAjAAAYAJQAYAJAOAXQANAWAEAoQAEAngHA7QgGA8gNAnQgMAngUAXQgTAXgaAIQgaAIgiAAQgjAAgYgIgAgJh4QgJAPgEApIgPCCQgFApAFAQQAGAPAQAAQAPAAAJgPQAJgOAFgrIAPiCQAFgogGgQQgGgPgQAAQgPAAgJAPg");
	this.shape_18.setTransform(1045.8,340.8,0.353,0.353);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("Ah4DCQAIgjAOgrQAOgpASglQATgpAWgiQAVgiAdglIieAAIAKhVIEBAAIgJBOQgYAhgWAmQgXAngRAmQgTApgNApQgNAugGAhg");
	this.shape_19.setTransform(1036.1,340.8,0.353,0.353);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_20.setTransform(1066.9,275.1,0.353,0.353);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhFBGQgegdAAgpQAAgoAegdQAdgeAoAAQApAAAdAeQAeAdAAAoQAAApgeAdQgdAegpAAQgoAAgdgegAgtgtQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATg");
	this.shape_21.setTransform(1063.3,278.8,0.353,0.353);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhPDBQgagBgVgIQgUgIgOgPQgPgOgIgUQgHgVgCgaIgBhQIABhPQACgaAHgVQAIgUAPgOQAOgPAUgIQAVgHAagCIBPgBIBQABQAaACAVAHQAUAIAOAPQAPAOAIAUQAIAVABAaIABBPIgBBQQgBAagIAVQgIAUgPAOQgOAPgUAIQgVAIgaABIhQABIhPgBgAhNidQgWABgOAGQgMAEgLAKQgKALgEAMQgGAPgBAVIgBBNIABBOQABAWAGAOQAEAMAKALQALAKAMAEQAOAGAWABIBNABIBOgBQAVgBAPgGQAMgEALgKQAKgLAEgMQAGgOABgWIABhOIgBhNQgBgVgGgPQgEgMgKgLQgLgKgMgEQgPgGgVgBIhOgBIhNABg");
	this.shape_22.setTransform(1063.3,278.8,0.353,0.353);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AAOERIAkj7IhsD7Ih6AAIA9mkIBqAAIgiDrIBojrIB8AAIg9GkgAgdjKQgUgZAEgtIAyAAQAAApAmAAQAoAAALgpIA0AAQgIAsgcAaQgcAaguAAQguAAgTgag");
	this.shape_23.setTransform(1105,307.6,0.353,0.353);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AA2DSIAAhKIhXAAIgWBKIh0AAICimjICLAAIApGjgAgIA2IA8AAIgEixIgBAAg");
	this.shape_24.setTransform(1092,309.8,0.353,0.353);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AilDSIA9mjIClAAQAgAAAVAKQAVAJANASQANASADAXQAEAZgEAaQgJBCgpAfQgnAhhFAAIglAAIgXCggAgUgcIAUAAQAVAAAMgMQANgNAEgaQAHg0gqAAIgUAAg");
	this.shape_25.setTransform(1081.5,309.8,0.353,0.353);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AiUDSIA9mjIDsAAIgMBZIiAAAIgvFKg");
	this.shape_26.setTransform(1071.8,309.8,0.353,0.353);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AANDSIAlj6IhsD6Ih6AAIA9mjIBqAAIgiDrIBpjrIB7AAIg9Gjg");
	this.shape_27.setTransform(1060.4,309.8,0.353,0.353);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("ABIDSIA8mjIBvAAIg+GjgAjxDSIA8mjIBvAAIgXCWIAsAAQBHAAAcAjQAcAigKA/QgFAngRAbQgPAagWARQgXAPgZAHQgcAGgXAAgAh4CDIAPAAQAeAAANgOQAOgNAFgeQAEghgNgLQgMgMgZAAIgPAAg");
	this.shape_28.setTransform(1045.8,309.8,0.353,0.353);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1B").s().p("AikDSIA9mjICmAAQA7AAAYAcQAYAdgHAvQgCARgGAPQgGAPgKAOQgJAMgPAJQgOAJgSAEIAAABQATABAPAJQANAJAIANQAIAOACAQQACAOgDATQgDAbgLAXQgKAWgSARQgSARgZAJQgZAJgjAAgAgqCDIAfAAQAOAAAOgMQANgNAEgbQAEgYgKgNQgKgNgPAAIgeAAgAgQgtIAZAAQARAAALgMQALgNACgRQADgRgHgOQgHgNgRAAIgaAAg");
	this.shape_29.setTransform(1031.1,309.8,0.353,0.353);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1B").s().p("AhQBtIAfjZIA4AAIgKBOIAVAAQAmAAAOASQAOASgEAgQgDATgJAPQgHANgNAJQgKAHgOAEQgQAEgKAAgAgRBEIAHAAQAOAAAIgHQAHgIACgPQACgRgGgGQgHgGgMAAIgHAAg");
	this.shape_30.setTransform(1094,293.8,0.353,0.353);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1B").s().p("Ag0BrQgOgFgHgOQgGgNAAgWQAAgZAEgcQAEgcAHgXQAIgWAKgNQAMgNAPgHQARgFAUAAQASAAAOAEQAOAGAGAJQAIAJABAMQADANgDAPIgCAOIg3AAIACgMQADgTgDgGQgDgHgIAAQgHAAgEADQgDADgDAJQgEAJgCAOIgLBIQgBAQAAAHQABAIADAEQAEADAGAAQAGAAACgDQADgCAEgGIAFgRIAEgZIA3AAIgCAQQgDAWgJAPQgIAPgLAJQgLAIgOACQgNADgNABQgYgBgPgFg");
	this.shape_31.setTransform(1088.3,293.8,0.353,0.353);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1B").s().p("AAHBtIATiBIg3CBIhAAAIAgjZIA3AAIgRB5IA1h5IBAAAIggDZg");
	this.shape_32.setTransform(1082.1,293.8,0.353,0.353);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AiEBtIAfjZIA5AAIgZCqIAhAAIAYiqIA4AAIgYCqIAgAAIAYiqIA5AAIgfDZg");
	this.shape_33.setTransform(1074.3,293.8,0.353,0.353);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1B").s().p("AAHBtIATiBIg3CBIhAAAIAgjZIA4AAIgSB5IA1h5IBAAAIggDZg");
	this.shape_34.setTransform(1066.5,293.8,0.353,0.353);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1B").s().p("AACBtIAYirIghAAIgZCrIg5AAIAfjZICUAAIgfDZg");
	this.shape_35.setTransform(1060.1,293.8,0.353,0.353);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1B").s().p("AAkCBIAGgpIhaAAIgGApIg0AAIANhYIAPAAQAJgOAFgLIALgbIAIgeIAOhXICKAAIgZCpIATAAIgNBYgAAMg/QgCAPgEAQQgFAUgCAKQgFAPgFAJIgIATIAsAAIASh8IgcAAg");
	this.shape_36.setTransform(1053.1,294.5,0.353,0.353);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AgzBrQgOgFgIgOQgHgPgBgUQgBgXAFgeQAEgcAHgWQAIgWALgOQAKgNARgGQARgHATABQAVgBAPAHQAPAGAGANQAHANACAXQAAATgEAfQgEAegHAXQgIAWgLANQgLAOgQAFQgPAFgVABQgWgBgOgFgAAAhGQgDADgEAJQgDAKgCANIgLBIIgBAXQABAIADAEQAEADAGAAQAHAAADgDQAEgEADgIQAEgIACgPIALhIQABgPAAgIQgBgJgEgDQgDgDgGAAQgHAAgEADg");
	this.shape_37.setTransform(1047.1,293.8,0.353,0.353);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1D1B").s().p("AACBtIAYirIgiAAIgYCrIg5AAIAfjZICUAAIgfDZg");
	this.shape_38.setTransform(1041,293.8,0.353,0.353);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgyBTQgMgIgKgJQgJgIgEgKQgDgLACgJQABgKAIgOIAEgFIApAZIgDAEQgGAKABAHQABAHAGADQAHAEAGgCQAGgCAFgHQAEgIgBgIQgDgIgFgHIgLgRQgHgHgEgLQgEgLABgLQAAgLAKgPQAPgYAUgGQAVgEAbAQQAbARAGAUQAEAVgQAZIgngZIACgDQAFgIAAgHQAAgGgGgEQgGgFgHADQgFACgEAGQgFAIACAIQADAIAFAIIAMAQQAHAJAEAKQAEAKgBANQAAALgJAQQgRAbgVACIgFAAQgUAAgYgPg");
	this.shape_39.setTransform(1088.3,270.1,0.353,0.353);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXBqQgNgEgNgGQgNgFgLgJQgKgIgEgKQgEgMACgNQACgOAJgSIA1hxIAsAVIg6B8QgGANACAGQABAFAHAEQAFADAHgDQAGgDAFgMIA6h8IAtAVIg2BxQgIASgKAKQgKALgJADQgHADgHAAIgJgBg");
	this.shape_40.setTransform(1084,267.3,0.353,0.353);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgFBfQgBgDABgGIACgKIAIgdIADgMQABgHgBgCQAAgEgDgCIgGgEIgNgEIgXBJIgvgQIA7i0IBJAYQAMAEAJAHQAIAHAFAIQADAIAAAKQgBAMgDAIQgFARgLAJQgLAKgSgDIAAAAQARAIADALQADANgGASIgLAlIAAAFIABADIACAFIgBACgAgDgTIAIADQAKAEAHgFQAGgEAEgKQAEgLgDgHQgDgHgLgDIgJgCg");
	this.shape_41.setTransform(1078.4,265.5,0.353,0.353);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AABBhIgPhHIgOAOIgJAxIgxgJIAki7IAxAKIgOBIIABAAIAxhBIA0AKIg/BJIAgBzg");
	this.shape_42.setTransform(1073.4,264.2,0.353,0.353);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAYBgIgDgiIgmgDIgIAhIgzgEIA7i7IA9AFIAhDBgAgJAWIAbACIgIhRIAAAAg");
	this.shape_43.setTransform(1067.6,263.5,0.353,0.353);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag9hcIBwgFIACApIg/ADIACAgIA6gDIACAnIg7ADIADAmIBAgDIABAoIhyAFg");
	this.shape_44.setTransform(1062.7,263.3,0.353,0.353);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhEhXIBIgMQANgCAMADQALADAIAHQAJAHAEAJQAEAJADAOQAEAegNAQQgOARgeAEIgQADIAKBIIgwAIgAgFg9IgJACIAHAuIAJgCQAJgBAEgHQAEgFgCgNQgDgUgOAAIgFAAg");
	this.shape_45.setTransform(1057.4,264,0.353,0.353);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhQhMIBrgeIAMAnIg8ARIAJAgIA3gQIALAkIg4AQIAJAlIA/gSIALAoIhuAeg");
	this.shape_46.setTransform(1052.7,264.9,0.353,0.353);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVBbQgMgIgJgQQgIgPgMgbQgLgbgDgQQgEgSADgPQADgOAKgJQAMgLAQgGQAPgGANgBQAMAAAKAEQAJAFAIAJQAHAKAFAMIAFALIgtASIgDgKQgHgQgEgDQgFgFgHADQgFACgCAEQgCADABAJIAdBOIAJASQAEAGAFABQAEACAFgCQADgBADgEQACgEgBgFIgDgOIgIgVIAtgRIAFAMQAIATAAANQgBAQgFAIQgFAKgKAHQgIAGgNAFQgVAIgMAAIgCAAQgLAAgMgIg");
	this.shape_47.setTransform(1047.9,266.5,0.353,0.353);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhAhJIAsgXIBVCqIgsAXg");
	this.shape_48.setTransform(1044.3,268.2,0.353,0.353);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXBjQgSgEgRgKQgQgMgLgQQgMgSgDgTQgEgTAEgSQADgSALgRQAMgRAQgLQAPgKAUgGQASgFAQABQARABAPAIQAPAIAKAQQAKAPABAOQACAOgDAOQgDAMgHALQgHALgKAGQgEADgGAAQgFAAgEgFIgBABQAAAGgFAIQgEAGgIAFQgGAFgIABQgJACgHgCQgJgDgHgEQgGgFgHgJQgHgMgCgJQgDgLABgLQABgMAGgJQAFgKAKgGQAJgGAJgBQAIgCAKAEIgCgKIATgNIAcBAQADAFAEgCQADgCACgFQACgFAAgFQAAgFgCgJQgCgIgHgJQgJgNgJgGQgLgHgMAAQgKgCgOAEQgNAEgNAIQgOAKgIAMQgIAMgDAOQgDAMAEAPQACAMAKAQQAKAOAMAJQAMAIAPACQANADAOgEQAPgEAPgJQANgKAIgJQAJgMADgLIAZgQQgBAYgMAUQgLATgcATQgSAMgTADQgJACgJAAQgJAAgKgCgAgOgTQgFAEgCAEQgDAEgBAGIABAJIAEAJQAFAIAHACQAHACAHgFQAFgDADgFQACgDACgHQABgFgBgEQgBgFgDgFQgGgIgHgBIgDgBQgGAAgGAEg");
	this.shape_49.setTransform(1039.9,270.7,0.353,0.353);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EC6921").s().p("ApKVtQkOhzjRjQQjQjRhzkOQh2kYAAkzQAAkyB2kYQBzkODQjRQDRjREOhyQEYh3EyAAQEyAAEZB3QEPByDQDRQDQDQBzEPQB3EYAAEyQAAEzh3EYQhzEOjQDRQjQDQkPBzQkZB2kyAAQkyAAkYh2g");
	this.shape_50.setTransform(1064.6,308.8,0.353,0.353);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgDAlIAAg2IAHAAIAAA2gAgDgaIAAgKIAHAAIAAAKg");
	this.shape_51.setTransform(957.5,402.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAlIAAgvIgIAAIAAgHIAIAAIAAgEIABgIQABgEABgCQADgBAFAAIACAAIACAAIAAAHIgBAAIgCAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgBAGIAAAFIAIAAIAAAHIgIAAIAAAvg");
	this.shape_52.setTransform(954.9,402.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape_53.setTransform(952.4,405.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAJAlIgMgcIgGAIIAAAUIgIAAIAAhJIAIAAIAAAsIASgZIAJAAIgRAVIARAhg");
	this.shape_54.setTransform(949.1,402.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOAZQgEgEAAgHQAAgFABgDQACgDADgCQADgCAFgBIADgCIAEgBIACgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgEQAAgFgBgCQgCgBgEAAQgEAAgCACQgCACAAAFIgGAAQAAgIAEgEQADgEAIAAQAEAAAEACQADACACADQABADAAAEIAAAfIABADQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAIABAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgCgFIAAAAQgBAEgDACQgDADgEAAQgHAAgDgEgAAAAAIgEADIgEAEQgBACgBAEQAAAEACACQACADADAAQADAAADgCQACgCAAgCIABgFIAAgNIgGACg");
	this.shape_55.setTransform(944.5,403.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgDgGABgLIABgKQAAgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIABAKIgaAAIAAALQABAEACADQACACAEAAQADAAACgCIADgFIABgGIAIAAQAAAFgCAFQgCAEgEADQgDADgGAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_56.setTransform(939.9,403.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgSAlIAAhIIAIAAIAAAGQACgEADgCIAFgBQAHgBAEAEQAEAEACAGQACAHgBAHQABAJgCAFQgCAHgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAYgAgFgcQgCACgBADIgCAIIAAAHIABAJQAAAFADAEQACAEAEgBQAGAAACgFQACgHAAgKIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_57.setTransform(935.3,404.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgDgGABgLIAAgKQABgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIABAKIgaAAIAAALQABAEACADQACACAEAAQADAAACgCIADgFIABgGIAIAAQAAAFgCAFQgCAEgEADQgDADgGAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_58.setTransform(930.5,403.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgIAaQgDgCgCgEQgCgEgBgFIgBgKIABgKQABgFACgFQACgEAEgCQADgDAFAAQAGAAADADQAEACACAEQACAEAAAGIgHAAIgBgGIgDgFQgCgBgEAAQgDAAgDADQgCADgBAGIgBAKIABAHIABAHQABADACACQACACADAAQAEAAACgCQACgCABgDIABgHIAHAAIgCAKQgBAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_59.setTransform(926,403.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDAlIAAg2IAHAAIAAA2gAgDgaIAAgKIAHAAIAAAKg");
	this.shape_60.setTransform(922.6,402.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgDAFIAAgJIAIAAIAAAJg");
	this.shape_61.setTransform(920.3,405.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAJAcIgJguIgIAuIgJAAIgMg2IAHAAIAKAvIAJgvIAHAAIAJAvIABAAIAJgvIAHAAIgMA2g");
	this.shape_62.setTransform(915.8,403.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAJAcIgJguIgHAuIgKAAIgNg2IAIAAIAKAvIAJgvIAHAAIAJAvIAAAAIAKgvIAHAAIgMA2g");
	this.shape_63.setTransform(909.2,403.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAJAcIgJguIgIAuIgJAAIgMg2IAHAAIAKAvIAJgvIAHAAIAJAvIAAAAIAKgvIAHAAIgMA2g");
	this.shape_64.setTransform(902.7,403.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgEAbIAAgKIAIAAIAAAKgAgEgQIAAgKIAIAAIAAAKg");
	this.shape_65.setTransform(1061.8,392.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgDgGABgLIAAgKQABgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIABAKIgaAAIAAALQABAEACADQACACAEAAQADAAACgCIADgFIABgGIAIAAQAAAFgCAFQgCAEgEADQgDADgGAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_66.setTransform(1058.3,392.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_67.setTransform(1053.6,393.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_68.setTransform(1048.6,392.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgDAbIAAgvIgOAAIAAgHIAjAAIAAAHIgOAAIAAAvg");
	this.shape_69.setTransform(1044.1,392.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgOAZQgEgEAAgHQAAgFABgDQACgDADgCQADgCAFgBIADgCIAEgBIACgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgEQAAgFgBgCQgCgBgEAAQgEAAgCACQgCACAAAFIgGAAQAAgIADgEQAEgEAIAAQAEAAAEACQADACACADQACADgBAEIAAAfIABADQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAIABAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgCgFIAAAAQgBAEgDACQgDADgEAAQgHAAgDgEgAABAAIgFADIgEAEQgBACgBAEQAAAEACACQACADADAAQADAAADgCQACgCAAgCIABgFIAAgNIgFACg");
	this.shape_70.setTransform(1040,392.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgMAYQgEgEgBgKIAIAAQABAHACADQACACAEAAQAEAAADgCQADgCAAgGQAAgFgDgCQgCgDgFAAIgCAAIAAgGIACAAQAEAAACgCQADgDgBgEIgBgEIgCgDIgFgBQgEAAgCACQgCADgBAEIgHAAQAAgEADgEQACgEADgCQAEgCAEAAQAEAAAEACQAEACACADQACADAAAEQAAAFgCAEQgDADgFABIAGACQADABABADQABADAAAEQABAIgFAEQgEAFgJAAQgHAAgFgFg");
	this.shape_71.setTransform(1035.4,392.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_72.setTransform(1030.8,392.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAKAbIAAgZIgSAAIAAAZIgIAAIAAg2IAIAAIAAAYIASAAIAAgYIAIAAIAAA2g");
	this.shape_73.setTransform(1025.8,392.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgPAZQgDgEAAgHQAAgFABgDQACgDADgCQADgCAFgBIAEgCIACgBIADgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIABgEQAAgFgCgCQgCgBgEAAQgEAAgCACQgCACAAAFIgHAAQAAgIAFgEQAEgEAHAAQAFAAADACQAEACABADQACADAAAEIAAAfIAAADQAAABABAAQAAAAAAAAQAAABABAAQAAAAAAAAIABAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgBgFIgBAAQgBAEgEACQgCADgEAAQgHAAgEgEgAAAAAIgEADIgEAEQgCACAAAEQAAAEACACQABADAFAAQACAAACgCQADgCABgCIABgFIAAgNIgHACg");
	this.shape_74.setTransform(1021.1,392.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOAbIAAg2IAcAAIAAAHIgUAAIAAAvg");
	this.shape_75.setTransform(1017.2,392.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_76.setTransform(1012.7,393.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_77.setTransform(1007.6,392.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgIAjQgEgDgCgGQgCgGgBgLIABgKQABgFACgEQACgEADgCQAEgDAEAAQAGAAADADQAEACACAFIACAJIABALIgaAAIAAALQABAEACADQACACADAAQAEAAACgCIADgFIAAgGIAJAAQgBAFgBAFQgCAEgEADQgEADgFAAQgFAAgEgDgAAJAEIAAgHQgBgEgCgDQgCgCgEAAQgDAAgCADQgCACgBAEIAAAHIARAAIAAAAgAAEgbIAAgKIAIAAIAAAKgAgJgbIAAgKIAIAAIAAAKg");
	this.shape_78.setTransform(1000.4,391.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgCgGgBgLIABgKQABgFACgEQACgEADgCQAEgDAEAAQAGAAADADQAEACACAFIACAKIAAAKIgZAAIAAALQABAEACADQACACADAAQAEAAACgCIADgFIAAgGIAIAAQAAAFgBAFQgCAEgEADQgEADgFAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgEAAQgDAAgCADQgCACgBAEIAAAIIARAAIAAAAg");
	this.shape_79.setTransform(995.9,392.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_80.setTransform(988.6,392.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_81.setTransform(981.1,392.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_82.setTransform(976.4,392.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAKAbIAAgZIgSAAIAAAZIgIAAIAAg2IAIAAIAAAYIASAAIAAgYIAIAAIAAA2g");
	this.shape_83.setTransform(971.4,392.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgCgGAAgLIABgKQAAgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIABAKIgaAAIAAALQABAEACADQACACAEAAQAEAAABgCIADgFIABgGIAIAAQgBAFgCAFQgBAEgEADQgDADgGAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_84.setTransform(966.7,392.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAQAjIAAgPIgfAAIAAAPIgHAAIAAgWIAFAAIADgJIACgIIABgLIAAgTIAdAAIAAAvIAFAAIAAAWgAgEgMIAAAKIgCAHIgDAIIATAAIAAgoIgOAAg");
	this.shape_85.setTransform(961.9,393.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgCgGAAgLIABgKQAAgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIAAAKIgaAAIABALQABAEACADQACACAEAAQAEAAABgCIADgFIABgGIAHAAQAAAFgCAFQgBAEgEADQgEADgFAAQgFAAgEgDgAAJgEIgBgIQAAgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgCAIIASAAIAAAAg");
	this.shape_86.setTransform(957.2,392.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgQAbIAAg2IARAAQAEAAADADQAEABABADQACACAAAFQAAAFgCAEQgCADgEABQAEAAADAEQADADAAAGQAAAEgCAEQgCADgDABQgDACgDAAgAgIAVIAIAAQAFAAACgDQACgCAAgEQAAgGgDgBQgCgDgEAAIgIAAgAgIgDIAIAAQADAAACgCQADgCAAgFQAAgEgDgCQgBgBgEgBIgIAAg");
	this.shape_87.setTransform(952.7,392.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_88.setTransform(947.8,392.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_89.setTransform(942.9,393.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAKAbIAAgvIgSAAIAAAvIgIAAIAAg2IAiAAIAAA2g");
	this.shape_90.setTransform(937.9,392.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgCgGAAgLIABgKQAAgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIABAKIgaAAIAAALQABAEACADQACACAEAAQAEAAABgCIADgFIABgGIAIAAQgBAFgCAFQgBAEgEADQgDADgGAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_91.setTransform(930.7,392.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAJAbIgMgbIgGAIIAAATIgIAAIAAg2IAIAAIAAAaIASgaIAJAAIgRAWIARAgg");
	this.shape_92.setTransform(926.4,392.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAQAjIAAgPIgfAAIAAAPIgHAAIAAgWIAFAAIADgJIACgIIABgLIAAgTIAdAAIAAAvIAFAAIAAAWgAgEgMIAAAKIgCAHIgDAIIATAAIAAgoIgOAAg");
	this.shape_93.setTransform(921.4,393.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_94.setTransform(916.3,392.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_95.setTransform(911.8,393.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_96.setTransform(906.8,392.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAKAbIAAgvIgTAAIAAAvIgHAAIAAg2IAhAAIAAA2g");
	this.shape_97.setTransform(901.8,392.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgEAIQABAAAAgBQABAAAAAAQABAAAAgBQAAAAAAgBIABgDIAAgDIgEAAIAAgKIAIAAIAAALQABAEgDADQgCAEgEABg");
	this.shape_98.setTransform(1117.1,384);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AANAbIgNgWIgMAWIgIAAIARgbIgQgbIAIAAIALAWIANgWIAIAAIgQAbIAQAbg");
	this.shape_99.setTransform(1113.7,381.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_100.setTransform(1108.9,381.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_101.setTransform(1104.2,381.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgQAbIAAg2IARAAQAEAAADADQADABADADQACACAAAFQAAAFgCAEQgDADgEABQAFAAADAEQACADAAAGQAAAEgCAEQgCADgDABQgDACgEAAgAgIAVIAIAAQAFAAADgDQABgCAAgEQAAgGgCgBQgCgDgFAAIgIAAgAgIgDIAIAAQAEAAACgCQACgCAAgFQAAgEgCgCQgDgBgDgBIgIAAg");
	this.shape_102.setTransform(1099.5,381.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_103.setTransform(1094.6,381.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgRAcIgDgBIAAgGIACAAIACAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIACgHIABgNIAAgbIAfAAIAAA2IgIAAIAAgvIgQAAIAAAVIgBAOQgBAGgCADQgDAEgFAAIgCAAg");
	this.shape_104.setTransform(1089.3,381.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgIAaQgDgCgCgEQgCgEgBgFIgBgKIABgKQABgFACgFQACgEAEgCQADgDAFAAQAGAAADADQAEACACAEQACAEAAAGIgHAAIgBgGIgDgFQgCgBgEAAQgDAAgDADQgCADgBAGIgBAKIABAHIABAHQABADACACQACACADAAQAEAAACgCQACgCABgDIABgHIAHAAIgCAKQgBAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_105.setTransform(1084.9,381.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgSAkIAAgHIADABIADAAQAEAAACgDIAEgIIgSg3IAIAAIAMArIABAAIAMgrIAIAAIgRA3IgEAJQAAAEgEACQgDADgFAAIgGgBg");
	this.shape_106.setTransform(1080.5,382);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgLAiQgEgEgCgHQgCgHAAgLQAAgLACgHQADgIADgEQAEgEAGgCIAHgCQAEgBAAgDIAHAAQgBAGgEACQgEADgHABQgFACgDAEQgDAEgBAHQACgEAEgCQADgCADAAQAJAAAFAHQAEAGABAMQAAAOgFAIQgFAHgKAAQgGAAgFgEgAgFgHQgDACgBAFQgCADAAAGQAAALADAFQADAGAFAAQAGAAADgGQACgFAAgLIgBgJIgEgHQgCgDgEAAQgDAAgCADg");
	this.shape_107.setTransform(1073.3,380.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_108.setTransform(1068.4,381.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_109.setTransform(1060.9,381.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_110.setTransform(1056.2,381.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AANAjIAAgPIggAAIAAg2IAIAAIAAAvIASAAIAAgvIAIAAIAAAvIAFAAIAAAWg");
	this.shape_111.setTransform(1051.4,381.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgPAZQgDgEAAgHQAAgFACgDQABgDADgCQADgCAFgBIAEgCIACgBIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgEQAAgFgCgCQgBgBgEAAQgEAAgCACQgCACAAAFIgGAAQAAgIADgEQAFgEAHAAQAFAAADACQADACACADQABADAAAEIAAAfIABADQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAAAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgBgFIgBAAQgCAEgDACQgCADgEAAQgHAAgEgEgAABAAIgFADIgEAEQgCACAAAEQAAAEACACQABADAEAAQAEAAABgCQADgCAAgCIABgFIAAgNIgFACg");
	this.shape_112.setTransform(1046.6,381.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAQAbIAAgvIgNAvIgFAAIgNgvIgBAAIAAAvIgHAAIAAg2IAMAAIAKAkIABAFIAAAGIAAAAIABgGIABgFIAKgkIAMAAIAAA2g");
	this.shape_113.setTransform(1041.1,381.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_114.setTransform(1035.6,382);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_115.setTransform(1030.6,381.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgDAuIAAgYIgFAFQgDACgEAAQgHAAgEgEQgDgEgCgHQgBgHAAgHQAAgHABgHQACgGAEgEQAEgDAHAAQADAAADABQADACACAEIAAgZIAHAAIAAAZQACgEADgCQADgBADAAQAHAAAEADQAEAEACAGQABAHAAAHQAAAHgBAHQgCAHgEAEQgEAEgHAAQgEAAgCgCIgFgFIAAAYgAAJgTQgCACgBAEIgCAHIAAAGIAAALIADAIQADAEAEAAQAGAAADgGQACgGAAgLIAAgGIgCgHIgDgGQgCgCgEAAQgDAAgCACgAgTgTQgCACgBAEIgCAHIAAAGIAAALIADAIQADAEAEAAQAGAAADgGQACgGAAgLIAAgGIgCgHIgDgGQgCgCgEAAQgDAAgCACg");
	this.shape_116.setTransform(1024.3,381);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAKAbIAAgZIgTAAIAAAZIgIAAIAAg2IAIAAIAAAYIATAAIAAgYIAIAAIAAA2g");
	this.shape_117.setTransform(1018,381.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAKAbIAAgoIABgEIAAgBIAAgCIAAACIgBADIAAACIgSAoIgJAAIAAg2IAIAAIAAApIgBADIAAAEIAAAAIABgEIABgDIARgpIAJAAIAAA2g");
	this.shape_118.setTransform(1012.9,381.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_119.setTransform(1005.4,381.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgPAZQgDgEAAgHQAAgFACgDQABgDADgCQADgCAFgBIAEgCIACgBIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIABgEQgBgFgCgCQgBgBgEAAQgEAAgCACQgCACAAAFIgGAAQgBgIAEgEQAFgEAHAAQAFAAADACQADACACADQABADAAAEIAAAfIABADQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAAAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgBgFIgBAAQgCAEgDACQgCADgEAAQgHAAgEgEgAABAAIgFADIgEAEQgCACAAAEQAAAEACACQABADAEAAQAEAAABgCQADgCAAgCIACgFIAAgNIgGACg");
	this.shape_120.setTransform(1001.1,381.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAKAbIAAgZIgTAAIAAAZIgIAAIAAg2IAIAAIAAAYIATAAIAAgYIAHAAIAAA2g");
	this.shape_121.setTransform(996.4,381.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgLAiQgEgEgCgHQgCgHAAgLQAAgLACgHQADgIADgEQAEgEAGgCIAHgCQAEgBAAgDIAHAAQgBAGgEACQgEADgHABQgFACgDAEQgDAEgBAHQACgEAEgCQADgCADAAQAJAAAFAHQAEAGABAMQAAAOgFAIQgFAHgKAAQgGAAgFgEgAgFgHQgDACgBAFQgCADAAAGQAAALADAFQADAGAFAAQAGAAADgGQACgFAAgLIgBgJIgEgHQgCgDgEAAQgDAAgCADg");
	this.shape_122.setTransform(991.4,380.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_123.setTransform(986.4,381.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_124.setTransform(981.6,382);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAQAjIAAgPIgfAAIAAAPIgHAAIAAgWIAFAAIADgJIACgIIABgLIAAgTIAdAAIAAAvIAFAAIAAAWgAgEgMIAAAKIgCAHIgDAIIATAAIAAgoIgOAAg");
	this.shape_125.setTransform(976.5,381.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_126.setTransform(971.5,381.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAOAlIAAhBIgbAAIAABBIgJAAIAAhJIAsAAIAABJg");
	this.shape_127.setTransform(966,380.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgDAFIAAgJIAIAAIAAAJg");
	this.shape_128.setTransform(959.3,383.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgNAbIAAg2IAcAAIAAAHIgVAAIAAAvg");
	this.shape_129.setTransform(956.4,381.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgOAgQgFgGAAgKQAAgGACgEQACgEAEgCQADgCADgBQgEAAgCgDQgDgCgCgEIgBgHQAAgEACgEQACgEAEgDQADgCAGgBQAGABAEACQAFADABAEQACAEAAAEIgBAHQgBAEgCACQgDADgEAAIAHADQACACACAEQACAEAAAGQAAAKgFAGQgFAGgKAAQgJAAgFgGgAgFADQgEACgBADIgBAHIABAIQABAEADABQACACAEAAQAFAAACgCQADgBABgEIABgIIgCgHQgBgDgCgCQgDgCgEgBQgDABgCACgAgGgaQgCADAAAFQAAAGACADQACADAEAAQAEAAACgCIADgEIAAgGQAAgFgCgDQgCgDgFAAQgEAAgCADg");
	this.shape_130.setTransform(949.3,380.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAEAlIAAg1IgPAAIAAgHIAJgBQADgBACgCQACgDABgGIAGAAIAABJg");
	this.shape_131.setTransform(943.8,380.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgKAiQgEgDgCgGQgCgFgBgHIAAgNIAAgLIADgMQACgGAEgEQAEgDAGgBQAHABAEADQAEAEACAGQACAFABAHIAAALIAAANQgBAHgCAFQgCAGgEADQgEAEgHAAQgGAAgEgEgAgFgaQgDACgBAFQgBAEAAAGIgBAJIABALQAAAGABAEQABAEADADQACACADAAQAEAAACgCIAEgHIABgKIABgLIgBgJIgBgKIgEgHQgCgDgEAAQgDAAgCADg");
	this.shape_132.setTransform(939.4,380.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgTAlIABgJIACgIIAGgHIAJgJIAFgEIAFgHQACgEAAgFQAAgFgDgEQgCgDgGAAQgEAAgCACQgDACgBAEIAAAKIgIAAIAAgEQAAgGACgFQACgFAEgDQAEgDAGAAQAGAAAFADQAEADACAEQACAFAAAFQAAAGgCAEQgBAEgDADIgHAHIgIAIIgFAFIgCAEIgBAEIAeAAIAAAIg");
	this.shape_133.setTransform(934.4,380.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_134.setTransform(929.5,381.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgSAmIAAhKIAIAAIAAAHQACgEADgCIAFgCQAHABAEADQAEAEACAGQACAHgBAHQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAZgAgFgcQgCACgBAEIgCAHIAAAHIABAKQAAAFADADQACADAEABQAGAAACgHQACgFAAgLIAAgGIgBgHQgBgDgDgDQgCgCgDAAQgDAAgCACg");
	this.shape_135.setTransform(925,382);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgLAiQgEgEgCgHQgCgHAAgLQAAgLACgHQADgIADgEQAEgEAGgCIAHgCQAEgBAAgDIAHAAQgBAGgEACQgEADgHABQgFACgDAEQgDAEgBAHQACgEAEgCQADgCADAAQAJAAAFAHQAEAGABAMQAAAOgFAIQgFAHgKAAQgGAAgFgEgAgFgHQgDACgBAFQgCADAAAGQAAALADAFQADAGAFAAQAGAAADgGQACgFAAgLIgBgJIgEgHQgCgDgEAAQgDAAgCADg");
	this.shape_136.setTransform(919.9,380.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAKAbIAAgWIgIAAIgKAWIgJAAIAMgXQgFgCgCgDQgDgEAAgGQAAgHAEgEQAEgEAHgBIASAAIAAA2gAgFgSQgCADAAAEQAAAFACADQACACAEAAIAJAAIAAgTIgIAAQgFAAgCACg");
	this.shape_137.setTransform(914.9,381.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDAbIAAgvIgOAAIAAgHIAjAAIAAAHIgOAAIAAAvg");
	this.shape_138.setTransform(910.8,381.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAJAbIgMgbIgGAIIAAATIgIAAIAAg2IAIAAIAAAaIASgaIAJAAIgRAWIARAgg");
	this.shape_139.setTransform(906.8,381.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_140.setTransform(901.8,381.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAEAlIAAg1IgPAAIAAgGIAJgBQADgBACgDQACgDABgGIAGAAIAABJg");
	this.shape_141.setTransform(1072.5,368.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgCgGQgCgFAAgHIAIAAIABAIQABAEACACQADACAEAAQAGAAADgDQADgEAAgGQAAgGgCgEQgCgDgDgBQgEgBgFAAIAAgGQAEAAADgCQADgBACgCQACgDAAgFQAAgGgDgDQgCgDgFAAQgDAAgDACQgCACgBADIgBAHIgIAAQAAgGACgFQACgFAFgDQAEgDAFAAQAIABAFAEQAFAFAAAJQAAAGgCAEQgDAFgGACQAGABAEAEQADAFAAAHQAAAGgCAFQgCAFgFADQgEADgHAAQgGAAgFgDg");
	this.shape_142.setTransform(1068.1,369);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_143.setTransform(1060.7,369.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAKAcIAAgvIgTAAIAAAvIgIAAIAAg2IAiAAIAAA2g");
	this.shape_144.setTransform(1055.7,369.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgLAjQgEgDgCgGQgCgFAAgHIAIAAIABAIQABAEACACQADACAEAAQAGAAADgDQADgEAAgGQAAgGgCgEQgCgDgDgBQgEgBgFAAIAAgGQAEAAADgCQADgBACgCQACgDAAgFQAAgGgDgDQgCgDgFAAQgDAAgDACQgCACgBADIgBAHIgIAAQAAgGACgFQACgFAFgDQAEgDAFAAQAIABAFAEQAFAFAAAJQAAAGgCAEQgDAFgGACQAGABAEAEQADAFAAAHQAAAGgCAFQgCAFgFADQgEADgHAAQgGAAgFgDg");
	this.shape_145.setTransform(1048.3,369);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgIAaQgDgCgCgEQgCgEgBgFIgBgKIABgKQABgFACgFQACgEAEgCQADgDAFAAQAGAAADADQAEACACAEQACAEAAAGIgHAAIgBgGIgDgFQgCgBgEAAQgDAAgDADQgCADgBAGIgBAKIABAHIABAHQABADACACQACACADAAQAEAAACgCQACgCABgDIABgHIAHAAIgCAKQgBAFgEADQgEADgGAAQgFAAgEgDg");
	this.shape_146.setTransform(1041.2,369.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAKAcIAAgpIABgDIAAgBIAAgDIAAADIgBACIAAACIgSApIgJAAIAAg2IAIAAIAAApIgBADIAAADIAAAAIABgEIABgCIARgpIAJAAIAAA2g");
	this.shape_147.setTransform(1033.9,369.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAKAcIAAgpIABgDIAAgBIAAgDIAAADIgBACIAAACIgSApIgJAAIAAg2IAIAAIAAApIgBADIAAADIAAAAIABgEIABgCIARgpIAJAAIAAA2g");
	this.shape_148.setTransform(1028.8,369.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AANAjIAAgPIggAAIAAg2IAIAAIAAAwIASAAIAAgwIAIAAIAAAwIAFAAIAAAVg");
	this.shape_149.setTransform(1024,370.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAJAcIgMgcIgGAIIAAAUIgIAAIAAg2IAIAAIAAAaIASgaIAJAAIgRAVIARAhg");
	this.shape_150.setTransform(1019.3,369.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgPAZQgDgEAAgHQAAgFACgDQABgDADgCQADgCAFgBIAEgCIACgBIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIABgEQgBgFgCgCQgBgBgEAAQgEAAgCACQgCACAAAFIgGAAQgBgIAEgEQAFgEAHAAQAFAAADACQADACACADQABADAAAEIAAAfIABADQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAAAAIABgBIAAAGIgBABIgCAAIgEgBIgDgCIgBgFIgBAAQgCAEgDACQgCADgEAAQgHAAgEgEgAABAAIgFADIgEAEQgCACAAAEQAAAEACACQABADAEAAQAEAAABgCQADgCAAgCIACgFIAAgNIgGACg");
	this.shape_151.setTransform(1014.6,369.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAKAcIAAgYIgIAAIgKAYIgJAAIAMgZQgFgBgCgDQgDgEAAgFQAAgIAEgEQAEgEAHAAIASAAIAAA2gAgFgRQgCACAAAFQAAAEACACQACADAEAAIAJAAIAAgSIgIAAQgFAAgCACg");
	this.shape_152.setTransform(1007.3,369.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAKAcIAAgpIABgDIAAgBIAAgDIAAADIgBACIAAACIgSApIgJAAIAAg2IAIAAIAAApIgBADIAAADIAAAAIABgEIABgCIARgpIAJAAIAAA2g");
	this.shape_153.setTransform(1002.6,369.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAKAcIAAgaIgSAAIAAAaIgJAAIAAg2IAJAAIAAAWIASAAIAAgWIAIAAIAAA2g");
	this.shape_154.setTransform(997.6,369.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgDgGABgLIABgKQAAgFACgEQACgEAEgCQADgDAEAAQAGAAAEADQADACABAFIADAKIABAKIgaAAIAAALQABAEACADQACACAEAAQAEAAABgCIADgFIABgGIAIAAQAAAFgDAFQgBAEgEADQgDADgGAAQgFAAgEgDgAAJgEIAAgIQgBgEgCgDQgCgCgDAAQgEAAgCADQgCACAAAEIgBAIIARAAIAAAAg");
	this.shape_155.setTransform(992.9,369.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAQAjIAAgPIgfAAIAAAPIgHAAIAAgVIAFAAIADgKIACgIIABgMIAAgSIAdAAIAAAwIAFAAIAAAVgAgEgLIAAAJIgCAHIgDAJIATAAIAAgpIgOAAg");
	this.shape_156.setTransform(988.1,370.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgIAaQgEgDgCgGQgCgGgBgLIABgKQABgFACgEQACgEADgCQAEgDAEAAQAGAAADADQAEACACAFIACAKIAAAKIgaAAIABALQABAEACADQACACADAAQAEAAACgCIADgFIAAgGIAIAAQAAAFgBAFQgCAEgEADQgEADgFAAQgFAAgEgDgAAJgEIgBgIQAAgEgCgDQgCgCgEAAQgDAAgCADQgCACgBAEIgBAIIASAAIAAAAg");
	this.shape_157.setTransform(983.3,369.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgQAcIAAg2IARAAQAEAAAEABQADACABADQACACAAAEQAAAGgCADQgCAEgEABQAEAAADADQADAEAAAFQAAAGgCACQgCAEgDACQgDABgDABgAgIAVIAIAAQAGAAABgDQACgCAAgFQAAgEgDgDQgCgCgEAAIgIAAgAgIgEIAIAAQADAAACgCQADgCAAgEQAAgEgDgCQgCgBgDAAIgIAAg");
	this.shape_158.setTransform(978.9,369.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_159.setTransform(974,369.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgSAlIAAhIIAIAAIAAAGQACgEADgCIAFgBQAHgBAEAEQAEAEACAGQACAGgBAIQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAYgAgFgcQgCACgBADIgCAHIAAAIIABAJQAAAFADAEQACADAEAAQAGAAACgFQACgHAAgKIAAgGIgBgHQgBgEgDgCQgCgCgDAAQgDAAgCACg");
	this.shape_160.setTransform(969.1,370.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAKAcIAAgvIgTAAIAAAvIgIAAIAAg2IAiAAIAAA2g");
	this.shape_161.setTransform(964.1,369.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAKAcIAAgpIABgDIAAgBIAAgDIAAADIgBACIAAACIgSApIgJAAIAAg2IAIAAIAAApIgBADIAAADIAAAAIABgEIABgCIARgpIAJAAIAAA2g");
	this.shape_162.setTransform(956.6,369.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAJAcIgMgcIgGAIIAAAUIgIAAIAAg2IAIAAIAAAaIASgaIAJAAIgRAVIARAhg");
	this.shape_163.setTransform(952,369.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgJAaQgFgCgCgHQgDgGAAgLQAAgNAFgIQAFgHAJAAQAKAAAFAHQAFAIAAANQAAALgDAGQgCAHgFACQgEADgGAAQgFAAgEgDgAgGgTQgCACgBAFQgCAFAAAHIABAMQABAFADACQACADAEAAQAFAAACgDQADgCABgFIAAgMIgBgMQgBgFgCgCQgDgCgEAAQgDAAgDACg");
	this.shape_164.setTransform(947,369.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgSAlIAAhIIAIAAIAAAGQACgEADgCIAFgBQAHgBAEAEQAEAEACAGQACAGgBAIQABAIgCAHQgCAGgDAEQgEAEgHAAQgDAAgDgCIgFgFIAAAYgAgFgcQgCACgBADIgCAHIAAAIIABAJQAAAFADAEQACADAEAAQAGAAACgFQACgHAAgKIAAgGIgBgHQgBgEgDgCQgCgCgDAAQgDAAgCACg");
	this.shape_165.setTransform(942.2,370.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgKAjQgFgEgCgGQgDgGAAgHIgBgMIABgNIADgMQACgGAFgDQAFgDAGgBQAHABAFADQAFADACAFQACAFAAAHIgIAAQAAgEgBgEQgBgEgDgCQgDgCgFAAQgFAAgCADQgDADgCAFQgBAFAAAFIgBAJIABAKIACALQABAEADADQADADAEAAQAFAAADgDQADgCABgFIABgLIAIAAQAAAJgCAGQgCAGgEAEQgFADgIABQgHgBgEgDg");
	this.shape_166.setTransform(936.8,368.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgDAFIAAgJIAIAAIAAAJg");
	this.shape_167.setTransform(930.4,372.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAKAcIAAgYIgIAAIgKAYIgJAAIAMgZQgFgBgCgDQgDgEAAgFQAAgIAEgEQAEgEAHAAIASAAIAAA2gAgFgRQgCACAAAFQAAAEACACQACADAEAAIAJAAIAAgSIgIAAQgFAAgCACg");
	this.shape_168.setTransform(926.6,369.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAKAcIAAgpIABgDIAAgBIAAgDIAAADIgBACIAAACIgSApIgJAAIAAg2IAIAAIAAApIgBADIAAADIAAAAIABgEIABgCIARgpIAJAAIAAA2g");
	this.shape_169.setTransform(921.9,369.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AANAjIAAgPIggAAIAAg2IAIAAIAAAwIASAAIAAgwIAIAAIAAAwIAFAAIAAAVg");
	this.shape_170.setTransform(917.1,370.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAJAcIgMgcIgGAIIAAAUIgIAAIAAg2IAIAAIAAAaIASgaIAJAAIgRAVIARAhg");
	this.shape_171.setTransform(912.4,369.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AARAlIgFgVIgXAAIgFAVIgJAAIAVhJIAKAAIAUBJgAAKAIIgKgmIAAAAIgJAmIATAAg");
	this.shape_172.setTransform(907.1,368.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAAAFIgGAJIgFgCIAIgJIgLgEIABgEIAMAEIAAgMIAEAAIAAALIAKgDIACAEIgLADIAHAKIgEADg");
	this.shape_173.setTransform(901.8,366.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AhQC7IAKhRIBWAAIgKBRgAhBBRIACgPQAEgdAHgSQAHgTAPgOIAigiQALgLAEgMQAFgPAAgHQACgOgEgKQgFgJgLAAQgGAAgFACQgEADgFAGQgEAIgDALQgDAMgDAWIhXAAQAFgjAKgXQALgXAQgPQAQgPAXgGQAZgHAZAAQA4AAAXAcQAXAbgGAvQgDAWgHASQgIASgPAPIgsApQgIAJgEAMQgEAMgCASg");
	this.shape_174.setTransform(467.5,187.4,0.353,0.353);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAvC3IgChAIhLAAIgSBAIhkAAICHltIB4AAIAqFtgAgKAvIA1AAIgGiaIgBAAg");
	this.shape_175.setTransform(456.7,187.5,0.353,0.353);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AhZC3IAlkcIhIAAIALhRIDuAAIgLBRIhIAAIglEcg");
	this.shape_176.setTransform(448.9,187.5,0.353,0.353);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AiNC3IAvltICPAAQAbAAAUAIQATAJALAPQALAPAEAVQADAXgDAWQgHA6gjAaQgiAdg7AAIghAAIgSCLgAgSgYIASAAQARAAALgLQALgLADgXQAGgtgmAAIgRAAg");
	this.shape_177.setTransform(439.1,187.5,0.353,0.353);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AhUC0QgYgKgNgXQgMgWgDgkQgBgmAGgyQAHgyALglQALgjATgYQATgWAagLQAagLAkAAQAmAAAXALQAYALANAWQAMAYACAjQACAlgGAyQgHA1gMAjQgLAjgSAXQgTAXgaAKQgcAKgjAAQgkAAgYgKgAgBh2QgHAGgFAOQgFANgFAaQgEAXgFAlIgHA9QgCAXACAQQABAOAGAGQAGAGALAAQAKAAAHgGQAIgHAEgNQAGgSADgVQAFgYAEglIAHg8QACgYgBgPQgCgOgFgGQgHgGgKAAQgLAAgGAGg");
	this.shape_178.setTransform(429.2,187.5,0.353,0.353);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAGC3IAlkfIg6AAIglEfIhgAAIAvltID6AAIgvFtg");
	this.shape_179.setTransform(418.9,187.5,0.353,0.353);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AhVC0QgYgKgMgXQgLgWgBgkQgBgkAHg0QAHg0ALgkQALgkASgXQATgWAagLQAcgKAjAAQAgAAAWAJQAXAIALAPQANAQADAUQAEAWgEAaIgDAYIhdAAIADgVQAEgggFgLQgEgLgOAAQgLAAgHAGQgHAGgFAOQgEANgFAaIgJA8IgHA9QgCAaABANQACAOAGAGQAFAGALAAQAJAAAFgFQAHgEAEgKQAFgNADgPQAEgTADgYIBdAAIgEAbQgFAogNAXQgNAYgUAPQgTAOgWAFQgWAFgXAAQgnAAgagKg");
	this.shape_180.setTransform(408.8,187.5,0.353,0.353);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("ABADaIAKhGIiZAAIgJBGIhYAAIAUiUIAYAAQAPgXAJgVQALgWAHgXQAHgWAFgdIAViTIDqAAIgmEfIAgAAIgTCUgAAShrQgCATgHAiQgHAggFASIgPAqQgHATgIANIBNAAIAbjTIgwAAg");
	this.shape_181.setTransform(392.5,188.8,0.353,0.353);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAPC3IAcjaIhaDaIhrAAIAvltIBdAAIgaDMIBXjMIBsAAIgwFtg");
	this.shape_182.setTransform(382,187.5,0.353,0.353);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AiMC3IAvltICQAAQA1AAAUAZQAWAYgGAqQgBANgGAPQgFANgIAMQgIAKgMAIQgMAIgQADIAAABQASACALAHQAMAHAHAMQAHANACANQACAOgCAPQgDAYgJAUQgJAUgPAOQgPAOgWAIQgWAIgeAAgAgjByIAbAAQANAAALgLQAMgLADgXQADgVgJgMQgJgLgOAAIgaAAgAgPgnIAWAAQAPAAAJgLQAJgKACgQQADgPgHgLQgGgMgPAAIgXAAg");
	this.shape_183.setTransform(371.2,187.5,0.353,0.353);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AAPDuIAcjbIhaDbIhqAAIAuluIBdAAIgaDNIBXjNIBrAAIgvFugAgdiwQgRgWACgnIAsAAQAAAkAiAAQAiAAAKgkIAtAAQgHAmgYAXQgYAWgoAAQgnAAgSgWg");
	this.shape_184.setTransform(511,165.8,0.353,0.353);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AAPC3IAcjaIhaDaIhrAAIAwltIBdAAIgbDMIBYjMIBrAAIgvFtg");
	this.shape_185.setTransform(500.2,167.8,0.353,0.353);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAOC3IgniAIgYAfIgNBhIhgAAIAwltIBfAAIgSCMIACAAIBYiMIBmAAIhyCgIBODNg");
	this.shape_186.setTransform(490.1,167.8,0.353,0.353);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AhUC0QgZgLgMgWQgLgXgBgjQAAgkAGg0QAHgyALgmQALglATgWQARgWAcgLQAbgKAjAAQAgAAAXAJQAVAIAMAPQAMAOAEAWQAEAVgDAbIgDAXIhdAAIACgUQAFgegFgNQgFgLgOAAQgLAAgHAGQgGAFgFAPQgGAQgEAWQgEAZgFAkIgHA9QgCAXACAQQABAOAGAGQAGAGALAAQAIAAAGgFQAGgEAEgKQAEgKAEgSIAHgrIBdAAIgEAbQgEAmgOAZQgNAYgTAPQgTAOgXAFQgZAFgUAAQgoAAgYgKg");
	this.shape_187.setTransform(479.8,167.7,0.353,0.353);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAPDuIAcjbIhaDbIhrAAIAwluIBcAAIgaDNIBXjNIBsAAIgwFugAgdiwQgSgXADgmIAsAAQAAAkAiAAQAjAAAJgkIAtAAQgHAmgYAXQgYAWgoAAQgnAAgSgWg");
	this.shape_188.setTransform(469.4,165.8,0.353,0.353);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AAPC3IAcjaIhaDaIhrAAIAvltIBdAAIgaDMIBXjMIBsAAIgwFtg");
	this.shape_189.setTransform(458.6,167.8,0.353,0.353);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAGC3IAlkfIg6AAIglEfIhgAAIAvltID6AAIgvFtg");
	this.shape_190.setTransform(447.9,167.8,0.353,0.353);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AA/C3IAjkQIgBAAIhWEQIhEAAIgQkQIgBAAIgkEQIhZAAIAvltICJAAIALDYIABAAIBCjYICJAAIgvFtg");
	this.shape_191.setTransform(435.8,167.8,0.353,0.353);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAOC3IAcjaIhaDaIhqAAIAwltIBdAAIgbDMIBYjMIBrAAIgwFtg");
	this.shape_192.setTransform(423.4,167.8,0.353,0.353);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AieC3IgJgCIAKhMIAMABQAHAAAJgCQAIgBAGgJQAGgJAGgSQAGgUAGgfIAdjIIDmAAIgwFuIhfAAIAlkiIgsAAQgLBUgLA9QgJA3gRAiQgPAigXAMQgYANghAAg");
	this.shape_193.setTransform(412.1,167.8,0.353,0.353);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AhUC0QgZgLgMgWQgMgXgCgjQgCgmAGgyQAHgzALgkQAMgkASgXQASgXAcgKQAagLAkAAQAlAAAXALQAZALALAWQANAXACAkQACAmgHAxQgGA0gMAkQgKAigTAYQgSAWgbALQgbAKgkAAQgkAAgYgKgAgBh2QgGAFgGAPQgGAQgEAWQgEAZgFAkIgHA9QgBAXABAQQABAOAGAGQAGAGALAAQAKAAAHgGQAGgFAGgPQAGgRADgWQAFgYAEglIAHg9QACgXgBgPQgCgPgFgFQgFgGgMAAQgLAAgGAGg");
	this.shape_194.setTransform(401.9,167.7,0.353,0.353);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAPDuIAcjbIhaDbIhrAAIAvluIBdAAIgaDNIBXjNIBsAAIgwFugAgdiwQgSgXADgmIAsAAQAAAkAiAAQAiAAAJgkIAtAAQgHAngXAWQgYAWgnAAQgoAAgSgWg");
	this.shape_195.setTransform(386.7,165.8,0.353,0.353);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("ABBC3IAvltIBhAAIgwFtgAjQC3IAwltIBgAAIgRCDIAmAAQA9AAAZAeQAZAegHA2QgFAkgNAWQgPAYgSANQgSAOgXAFQgWAGgWAAgAhnByIANAAQAbAAALgMQAMgLADgbQAEgcgLgKQgNgKgVAAIgMAAg");
	this.shape_196.setTransform(374,167.8,0.353,0.353);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AiMC3IAvltICQAAQA0AAAVAYQAVAZgFAqQgCANgFAPQgFAOgJAKQgJAMgLAHQgLAIgRADIAAABQATACALAHQAMAIAHALQAHANABANQACAOgBAPQgDAXgJAVQgKAVgOANQgPAOgWAIQgXAIgdAAgAgkByIAbAAQANAAAMgLQALgLADgXQADgVgJgMQgJgLgNAAIgaAAgAgQgnIAXAAQAPAAAJgLQAJgMACgOQACgPgGgLQgHgMgPAAIgWAAg");
	this.shape_197.setTransform(361.2,167.8,0.353,0.353);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AhUC0QgZgLgLgWQgNgXgDgjQgBgmAHgyQAFgzANgkQALgkASgXQATgXAagKQAbgLAjAAQAmAAAXALQAZALAMAWQAMAXACAkQACAmgGAxQgGAwgMAoQgMAigSAYQgSAWgbALQgcAKgiAAQglAAgYgKgAgBh2QgGAFgGAPQgGAQgDAWQgFAZgEAkIgHA9QgCAXABAQQABAOAGAGQAGAGALAAQAKAAAHgGQAGgFAGgPQAGgRAEgWQAEgYAFglIAHg9QABgXgBgPQgBgPgGgFQgFgGgMAAQgLAAgGAGg");
	this.shape_198.setTransform(351.1,167.7,0.353,0.353);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AAGC3IATiXIg6AAIgTCXIhgAAIAvltIBgAAIgRCGIA6AAIARiGIBgAAIgvFtg");
	this.shape_199.setTransform(340.8,167.8,0.353,0.353);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AiFAlIAKhKIEBAAIgKBKg");
	this.shape_200.setTransform(326.1,169,0.353,0.353);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AinDyIA+njIERAAIgNBnIiTAAIgwF8g");
	this.shape_201.setTransform(486.3,142.3,0.353,0.353);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AAIDyIAajHIhNAAIgaDHIh/AAIA+njICAAAIgXCyIBMAAIAXiyIB/AAIg+Hjg");
	this.shape_202.setTransform(473.4,142.3,0.353,0.353);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AATDyIAlkgIh3EgIiNAAIA+njIB7AAIgjEPIB0kPICPAAIg/Hjg");
	this.shape_203.setTransform(459.3,142.3,0.353,0.353);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("Ai6DyIA/njIC/AAQBFAAAbAhQAcAggGA4QgDAUgHARQgGARgMAPQgLAPgPAKQgPAJgWAFIAAACQAXABAQAKQAQALAJAPQAJARACASQADARgCAUQgFAigLAYQgLAagUATQgUATgeALQgdAKgoAAgAgvCXIAkAAQARAAAPgOQAQgOADgfQAEgdgMgPQgLgPgSAAIgjAAgAgVgzIAeAAQAUAAAMgPQANgPACgTQADgUgJgPQgIgPgUAAIgeAAg");
	this.shape_204.setTransform(445,142.3,0.353,0.353);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AAUE6IAlkhIh4EhIiMAAIA+njIB6AAIgjEPIB1kPICNAAIg+HjgAgnjpQgXgdAEgzIA7AAQAAAvAsAAQAtAAANgvIA8AAQgLAzgeAdQggAeg0AAQg2AAgXgeg");
	this.shape_205.setTransform(431.1,139.8,0.353,0.353);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AA+DyIgBhUIhkAAIgYBUIiGAAICznjICgAAIA4HjgAgMA/IBGAAIgIjNIgCAAg");
	this.shape_206.setTransform(416.2,142.3,0.353,0.353);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("ABWEhIALhdIjJAAIgMBdIh1AAIAajEIAhAAQATgdAMgdQAOgfAKgeQAKghAGgiQAHgiAFgrIAPh2IE1AAIgxF9IArAAIgZDEgAAYiPQgEAlgIAiQgKApgGAaQgJAegLAZQgJAXgKAUIBlAAIAkkYIhAAAg");
	this.shape_207.setTransform(401.8,143.9,0.353,0.353);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AiqDzIgXgDIANheIANABIAPABQAZAAANgPQANgPAIgTIhVlXICOAAIAWDUIACAAIBEjUICJAAIieFbQgQAjgRAcQgOAZgVATQgUASgZAIQgbAJglAAIgcgCg");
	this.shape_208.setTransform(389.7,142.4,0.353,0.353);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AhwDuQgfgOgRgdQgQgdgDgxQgDgwAJhEQAJhDAPgwQAPgwAYgeQAZgeAjgOQAigOAxAAQAxAAAfAOQAfANARAfQARAfACAvQADAwgJBDQgJBEgPAwQgPAwgYAeQgYAdgkAOQgiANgwAAQgyAAgfgNgAgBidQgKAIgHATQgGARgGAiIgVChQgDAfACAUQACATAIAIQAHAHAPAAQAOAAAIgHQAKgIAHgTQAHgVAFgeIAVihQADgfgCgUQgCgTgIgIQgHgHgOAAQgPAAgIAHg");
	this.shape_209.setTransform(375.8,142.3,0.353,0.353);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAIDyIAZjHIhMAAIgaDHIh/AAIA+njIB/AAIgXCyIBNAAIAXiyIB/AAIg+Hjg");
	this.shape_210.setTransform(362.2,142.3,0.353,0.353);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AhwDuQghgOgPgdQgPgegCgwQgBgxAJhDQAJhEAPgwQAPgxAYgdQAYgeAkgOQAkgNAvAAQAsAAAcALQAcALARAUQAQAUAFAcQAFAegFAiIgEAeIh7AAIAEgbQAFgpgGgPQgGgPgTAAQgPAAgJAHQgIAIgHATQgGARgHAiIgVChQgDAfADAUQABATAIAIQAIAHAOAAQAMAAAHgFQAIgHAGgNQAGgOAFgWQAEgXAFgiIB7AAIgFAkQgGAygTAhQgRAggZATQgZATgeAGQgdAHgfAAQg2AAgfgNg");
	this.shape_211.setTransform(348.9,142.3,0.353,0.353);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#1D1D1B").s().p("EgunALDIAA2FMBdPAAAIAAWFg");
	this.shape_212.setTransform(420.5,177.8,0.353,0.353,0,0,0,0,-0.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#1D1D1B").s().p("EgknALqIAA3TMBJPAAAIAAXTg");
	this.shape_213.setTransform(415.3,149.2,0.353,0.353);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("Ag+ByQgSgGgJgPQgJgOgBgXQgBgXAGggQAFghAKgWQAJgXAOgPQAOgOAUgHQATgGAaAAQAYAAAPAFQAPAFAKAOQAKANACAVQACAVgFAfIgEAWIhwAAIgFAfQgEASAGAGQAFAHAIAAQAKAAAGgJQAHgIAEgXIBFAAQgIAqgYAWQgaAVgtAAQgbAAgSgGgAgDhAQgFAJgEASIgBAKIApAAIABgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_214.setTransform(105.5,353,0.353,0.353);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AhYB2IAnjlIBJAAIgHAlIABAAQAKgVAQgLQAQgLARAAIAMAAIgMBHIgKgBIgJAAQgUAAgNAJQgMAJgFAXIgUB8g");
	this.shape_215.setTransform(99.5,353,0.353,0.353);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("Ag+ByQgSgGgJgPQgIgMgCgZQgBgXAGggQAGghAJgWQAKgXAOgPQAOgOATgHQATgGAaAAQAYAAAPAFQAQAFAJAOQAKANACAVQACAVgFAfIgEAWIhwAAIgFAfQgDATAFAFQAFAHAIAAQAKAAAHgJQAGgIAFgXIBEAAQgIAqgYAWQgaAVgtAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgNAAQgLAAgFAJg");
	this.shape_216.setTransform(93.1,353,0.353,0.353);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AADCXIAaiXQACgOgDgGQgDgGgKAAQgKAAgFAGQgFAHgCANIgaCXIhMAAIAzktIBLAAIgQBjIAAAAQANgTAQgHQAPgGAPAAQALAAALADQAKADAHAHQAIAIACAMQADAMgDARIgeCsg");
	this.shape_217.setTransform(85.4,351.8,0.353,0.353);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgnCUQgMgCgHgGQgGgFgCgMQgCgNAEgSIAUh6IgZAAIAJgzIAZAAIALhDIBMAAIgMBDIAeAAIgJAzIgeAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgoABQgSAAgMgBg");
	this.shape_218.setTransform(79.9,351.9,0.353,0.353);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgnCUQgMgCgHgGQgGgGgCgLQgCgMAEgTIAVh6IgaAAIAJgzIAZAAIALhDIBLAAIgLBDIAeAAIgIAzIgfAAIgSBtQgBAKADAEQAEAEAJAAIAMAAIgJAzIgVAAIgTABQgSAAgMgBg");
	this.shape_219.setTransform(75.2,351.9,0.353,0.353);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AhRBzQgKgCgIgIQgGgGgDgNQgDgMAEgSIAdisIBMAAIgaCWQgCAPADAGQADAGAKAAQALAAAEgGQAFgGADgPIAZiWIBMAAIgnDkIhIAAIAEgcIgBAAQgTAhgpAAQgMAAgLgCg");
	this.shape_220.setTransform(68.5,353.2,0.353,0.353);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AhHBvQgRgJgHgRQgIgQACgWQABgYAEgXQADgVAHgWQAHgUANgTQAOgRAUgKQAVgKAfAAQAiAAASAJQASAKAGAQQAIARgCAWQgBAXgEAXQgDAWgHAWQgIAXgMAPQgNARgVAKQgWAKgeAAQghAAgTgJgAABhDQgDADgEAIQgEAJgDANIgMBGQgCANABAJQACAIADADQAEADAGAAQAGAAAFgDQADgCAEgJQAEgJADgNIAMhGQACgNgBgJQgBgIgEgDQgDgDgHAAQgGAAgFADg");
	this.shape_221.setTransform(60.8,353,0.353,0.353);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AhuB7QgKgfALg+QAEgeAKgYQAJgWALgOQAMgNAOgHQAOgFAPAAQARgBAKAIQAMAGADASIABAAIARhjIBMAAIg0EuIhIAAIAFggIgBAAQgKATgOAKQgOAIgUAAQgmAAgKgfgAgNgaQgFAEgEAGQgEALgCAJIgGAeQgEAUAAALQgCALABAJQACAIADACQAEADAHAAQAGAAAFgDQAEgDAEgHIAGgUIAGgfQADgUABgKQABgLgBgJQgBgGgEgEQgDgDgGAAQgHAAgEADg");
	this.shape_222.setTransform(53.5,351.9,0.353,0.353);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("Ag+ByQgSgGgJgPQgJgOgBgXQgBgXAGggQAGghAJgWQAKgYANgOQAOgOAUgHQATgGAaAAQAYAAAPAFQAPAFAKAOQAJAMADAWQACAVgFAfIgEAWIhwAAIgFAfQgDATAFAFQAFAHAIAAQAKAAAGgJQAHgIAEgXIBFAAQgIAqgYAWQgaAVgtAAQgbAAgSgGgAgChAQgGAJgDASIgCAKIApAAIABgKQADgSgDgJQgDgJgMAAQgMAAgEAJg");
	this.shape_223.setTransform(45.8,353,0.353,0.353);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgmCUQgNgCgGgGQgIgGgBgLQgBgMADgTIAUh6IgZAAIAIgzIAaAAIALhDIBMAAIgMBDIAeAAIgIAzIgeAAIgTBtQgBAKADAEQADAEAKAAIAMAAIgIAzIgpABQgSAAgLgBg");
	this.shape_224.setTransform(40.3,351.9,0.353,0.353);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AhUBlQgSgTAHgmIBCAAIAAANQAAAFACAFQAEAIALAAQAIAAAHgGQAIgEABgKQACgKgHgGQgIgGgKgDIgZgJQgNgEgMgJQgKgIgGgNQgGgNADgWQAEgRAHgLQAIgNAMgKQANgJASgGQARgFAXAAQBWAAgMBIIhCAAQADgPgFgFQgEgGgKAAQgIAAgGAFQgGAFgBAIQgDAKAIAFQAHAFALAEIAZAIQAPAEAKAIQAKAHAHANQAGANgEAWQgCARgKAOQgIAOgOALQgPALgQAEQgTAFgUAAQgvAAgSgTg");
	this.shape_225.setTransform(33.9,353,0.353,0.353);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("Ag+ByQgSgGgJgPQgJgOgBgXQgBgXAGggQAGghAJgWQAKgYANgOQAOgOAUgHQATgGAaAAQAYAAAPAFQAPAFAKAOQAJAMADAWQACAVgFAfIgEAWIhwAAIgFAfQgDATAFAFQAFAHAIAAQAKAAAGgJQAHgIAEgXIBFAAQgIAqgYAWQgaAVgtAAQgbAAgSgGgAgChAQgGAJgDASIgCAKIApAAIABgKQADgTgCgIQgDgJgNAAQgMAAgEAJg");
	this.shape_226.setTransform(27,353,0.353,0.353);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgnCUQgMgCgHgGQgHgGgBgLQgCgMADgTIAVh6IgZAAIAIgzIAaAAIALhDIBLAAIgLBDIAeAAIgJAzIgeAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgpABQgRAAgMgBg");
	this.shape_227.setTransform(21.5,351.9,0.353,0.353);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgXCTIAVhJIgmAAIgVBJIgvAAIAWhJIgfAAIAIgxIAlAAIAPgxIgfAAIAIgxIAlAAIAWhJIAuAAIgWBJIAmAAIAVhJIAvAAIgWBJIAfAAIgIAxIglAAIgPAxIAfAAIgIAxIglAAIgWBJgAgZAZIAlAAIAOgxIglAAg");
	this.shape_228.setTransform(14.9,351.9,0.353,0.353);

	this.instance_4 = new lib.ClipGroup();
	this.instance_4.parent = this;
	this.instance_4.setTransform(92.9,261.2,0.353,0.353,0,0,0,950.3,882.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("Ag+ByQgSgGgJgPQgIgMgCgZQgBgYAGgfQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQACATgFAhIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgJAEgWIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_229.setTransform(404.7,353,0.353,0.353);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AhYB2IAnjlIBJAAIgHAlIABAAQAKgVAQgLQAQgLARAAIAMAAIgMBHIgJgBIgKAAQgUAAgNAJQgNAJgEAXIgTB8g");
	this.shape_230.setTransform(398.7,353,0.353,0.353);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("Ag+ByQgSgGgJgPQgJgOgBgXQgBgXAGggQAFghAKgWQAJgXAOgPQAOgOAUgHQATgGAaAAQAYAAAPAFQAPAFAKAOQAKANACAVQACAVgFAfIgEAWIhwAAIgFAfQgEASAGAGQAFAHAIAAQAKAAAGgJQAHgIAEgXIBFAAQgIAqgYAWQgaAVgtAAQgbAAgSgGgAgDhAQgFAKgDARIgCAKIApAAIABgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_231.setTransform(392.3,353,0.353,0.353);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AADCXIAaiXQACgOgDgGQgDgGgKAAQgKAAgFAGQgFAGgDAOIgZCXIhMAAIAzktIBLAAIgRBjIABAAQANgTAQgHQAPgGAOAAQAMAAALADQALAEAGAGQAHAHADANQADAMgEARIgdCsg");
	this.shape_232.setTransform(384.6,351.8,0.353,0.353);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgnCUQgMgCgHgGQgHgGgBgLQgCgMADgTIAVh6IgZAAIAIgzIAaAAIALhDIBLAAIgLBDIAeAAIgJAzIgeAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgpABQgRAAgMgBg");
	this.shape_233.setTransform(379.1,351.9,0.353,0.353);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgnCUQgMgCgGgGQgIgFgBgMQgBgMADgTIAUh6IgZAAIAIgzIAaAAIALhDIBMAAIgMBDIAeAAIgIAzIgeAAIgUBtQgBAKAEAEQADAEAKAAIAMAAIgJAzIgVAAIgTABQgSAAgMgBg");
	this.shape_234.setTransform(374.4,351.9,0.353,0.353);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AhRBzQgLgDgHgHQgGgGgDgNQgDgMADgSIAeisIBMAAIgaCWQgCAPADAGQADAGAKAAQALAAAEgGQAFgGACgPIAaiWIBMAAIgnDkIhIAAIADgcIAAAAQgTAhgpAAQgMAAgLgCg");
	this.shape_235.setTransform(367.7,353.2,0.353,0.353);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AhHBvQgSgJgGgRQgIgQACgWQAAgUAFgbQADgVAIgWQAGgWAOgRQANgRAVgKQAUgKAgAAQAhAAASAJQASAKAGAQQAIARgBAWQgBARgFAdQgFAYgFAUQgIAWgMAQQgOARgUAKQgVAKgfAAQggAAgUgJgAABhDQgDADgEAIIgHAWIgNBGQgBAOABAIQABAIAEADQAEADAGAAQAGAAAFgDQAEgDADgIQADgFAFgRIALhGQACgNgBgJQAAgIgFgDQgDgDgHAAQgGAAgFADg");
	this.shape_236.setTransform(360,353,0.353,0.353);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AhuB7QgKgdALhAQAGgiAIgUQAKgXAKgNQAMgNAOgHQAOgFAQAAQARgBAKAIQALAGADASIABAAIARhjIBMAAIgzEuIhJAAIAFggIgBAAQgJATgPAKQgOAIgUAAQgmAAgKgfgAgNgaQgFAEgDAGQgEAIgDAMIgKA9QgBAPABAFQABAHADADQAEADAHAAQAGAAAFgDQAEgCAEgIQADgGADgOIAKg9QACgMgCgIQAAgGgEgEQgEgDgFAAQgHAAgFADg");
	this.shape_237.setTransform(352.7,351.9,0.353,0.353);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAWgGAeIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgJAEgWIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_238.setTransform(345,353,0.353,0.353);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgnCUQgMgCgGgGQgIgFgBgMQgBgMACgTIAVh6IgZAAIAIgzIAaAAIAMhDIBKAAIgLBDIAeAAIgJAzIgdAAIgTBtQgCAKAEAEQAEAEAJAAIAMAAIgJAzIgpABQgRAAgMgBg");
	this.shape_239.setTransform(339.5,351.9,0.353,0.353);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AhUBlQgRgTAGgmIBDAAIgBANIACAKQAFAIAKAAQAJAAAGgGQAIgEABgKQACgKgHgGQgHgGgLgDIgZgJQgMgEgMgJQgLgIgGgNQgGgMAEgXQACgOAIgOQAJgOALgJQAOgKARgFQARgFAYAAQBWAAgNBIIhCAAQADgOgEgGQgFgGgKAAQgJAAgFAFQgGAFgBAIQgCAKAIAFQAHAFALAEIAZAIQANADALAJQALAHAGANQAGANgEAWQgDATgIAMQgJAPgNAKQgPALgRAEQgTAFgTAAQgwAAgSgTg");
	this.shape_240.setTransform(333.1,353,0.353,0.353);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAWgGAeIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgJAEgWIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_241.setTransform(326.2,353,0.353,0.353);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgnCUQgLgCgIgGQgGgFgCgMQgBgMACgTIAVh6IgZAAIAJgzIAZAAIAMhDIBKAAIgLBDIAeAAIgJAzIgeAAIgSBtQgCAKAEAEQAEAEAJAAIAMAAIgJAzIgpABQgRAAgMgBg");
	this.shape_242.setTransform(320.7,351.9,0.353,0.353);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgYCTIAWhJIgmAAIgWBJIguAAIAWhJIgfAAIAIgxIAlAAIAPgxIgfAAIAIgxIAlAAIAWhJIAuAAIgWBJIAlAAIAWhJIAvAAIgWBJIAfAAIgIAxIglAAIgPAxIAfAAIgIAxIglAAIgWBJgAgZAZIAkAAIAPgxIglAAg");
	this.shape_243.setTransform(314.1,351.9,0.353,0.353);

	this.instance_5 = new lib.ClipGroup_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(380.1,221.6,0.353,0.353,0,0,0,761.9,707.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAWgGAeIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgJAEgWIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_244.setTransform(995,353,0.353,0.353);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AhYB2IAnjlIBIAAIgGAlIACAAQAJgVAQgLQAQgLARAAIAMAAIgMBHIgKgBIgJAAQgUAAgNAJQgNAJgDAXIgVB8g");
	this.shape_245.setTransform(989,353,0.353,0.353);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("Ag+ByQgSgGgJgPQgJgOgBgXQgBgXAGggQAGghAJgWQAKgYANgOQAOgOAUgHQATgGAaAAQAYAAAPAFQAPAFAKAOQAJAMADAWQACAVgFAfIgEAWIhwAAIgFAfQgDATAFAFQAFAHAIAAQAKAAAGgJQAHgIAEgXIBFAAQgIAqgYAWQgaAVgtAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIABgKQADgTgCgIQgDgJgNAAQgMAAgEAJg");
	this.shape_246.setTransform(982.5,353,0.353,0.353);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AADCXIAaiXQACgOgDgGQgDgGgKAAQgKAAgFAGQgFAHgCANIgaCXIhMAAIAzktIBLAAIgRBjIABAAQANgTAQgHQAPgGAOAAQAMAAALADQALAEAGAGQAHAHADANQADAMgDARIgeCsg");
	this.shape_247.setTransform(974.9,351.8,0.353,0.353);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgnCUQgMgCgHgGQgHgGgBgLQgCgMADgTIAVh6IgZAAIAJgzIAZAAIALhDIBLAAIgLBDIAeAAIgJAzIgeAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgVAAIgUABQgRAAgMgBg");
	this.shape_248.setTransform(969.3,351.9,0.353,0.353);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgnCUQgLgCgHgGQgHgGgCgLQgCgMADgTIAVh6IgZAAIAJgzIAZAAIAMhDIBKAAIgLBDIAeAAIgJAzIgdAAIgTBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgpABQgRAAgMgBg");
	this.shape_249.setTransform(964.6,351.9,0.353,0.353);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AhRBzQgLgDgHgHQgGgGgDgNQgDgMADgSIAeisIBMAAIgaCWQgCAPADAGQADAGAKAAQALAAAEgGQAFgGACgPIAaiWIBMAAIgnDkIhIAAIADgcIAAAAQgTAhgpAAQgMAAgLgCg");
	this.shape_250.setTransform(958,353.2,0.353,0.353);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AhGBvQgSgJgHgRQgIgQABgWQACgbAEgUQADgVAHgWQAHgWANgRQAOgRAVgKQAUgKAgAAQAhAAASAJQASAKAGAQQAIARgBAWQgBARgFAdQgCASgJAaQgGAWgNAQQgOARgUAKQgWAKgeAAQggAAgTgJgAAChDQgEADgEAIQgEAJgDANQgDAJgEAaIgFAjQgCAOACAIQAAAHAEAEQAEADAGAAQAGAAAFgDQADgDAEgIQADgFAEgRIANhGQABgNgBgJQgBgIgEgDQgDgDgHAAQgGAAgEADg");
	this.shape_251.setTransform(950.2,353,0.353,0.353);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AhuB7QgKgdAKhAQAHgiAIgUQAJgYALgMQAMgNAOgHQANgFAQAAQARgBAKAIQAMAGADASIABAAIAQhjIBNAAIg0EuIhIAAIAFggIgBAAQgKAUgOAJQgOAIgUAAQgmAAgKgfgAgNgaQgFAEgEAGQgDAIgDAMIgLA9QgBAPABAFQABAGAEAEQAEADAGAAQAHAAAFgDQAEgCAEgIQADgGACgOIAGgfQAEgSABgMQABgLgBgJQgBgGgEgEQgDgDgGAAQgHAAgEADg");
	this.shape_252.setTransform(942.9,351.9,0.353,0.353);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAVgGAfIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgJAEgWIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_253.setTransform(935.2,353,0.353,0.353);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgnCUQgLgCgIgGQgGgGgCgLQgBgMACgTIAVh6IgZAAIAJgzIAZAAIAMhDIBKAAIgLBDIAeAAIgJAzIgeAAIgSBtQgCAKAEAEQAEAEAJAAIAMAAIgJAzIgVAAIgUABQgRAAgMgBg");
	this.shape_254.setTransform(929.7,351.9,0.353,0.353);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AhUBlQgRgTAGgmIBDAAIgBANQABAHACADQAEAIAKAAQAJAAAHgGQAGgEADgKQABgKgHgGQgHgGgLgDIgZgJQgMgEgMgJQgLgIgGgNQgGgNAEgWQACgOAIgOQAJgOAMgJQANgKARgFQARgFAYAAQBWAAgNBIIhCAAQADgOgEgGQgFgGgKAAQgJAAgFAFQgGAFgBAIQgCAKAIAFQAGAFAMAEIAZAIQANADALAJQALAHAGANQAGANgEAWQgDATgIAMQgJAPgNAKQgPALgRAEQgTAFgTAAQgwAAgSgTg");
	this.shape_255.setTransform(923.3,353,0.353,0.353);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("Ag+ByQgRgGgJgPQgJgOgBgXQgCgXAGggQAGghAJgWQAJgXAPgPQAOgOAUgHQATgGAZAAQAYAAAPAFQAPAFALAOQAJANACAVQADAVgGAfIgEAWIhwAAIgFAfQgDASAFAGQAFAHAIAAQAKAAAHgJQAHgIAEgXIBEAAQgIArgYAVQgZAVguAAQgaAAgTgGgAgChAQgGAJgDASIgCAKIApAAIACgKQADgSgDgJQgDgJgMAAQgMAAgFAJg");
	this.shape_256.setTransform(916.4,353,0.353,0.353);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgnCUQgMgCgHgGQgGgGgCgLQgCgMAEgTIAVh6IgaAAIAIgzIAaAAIALhDIBMAAIgMBDIAeAAIgIAzIgfAAIgSBtQgCAKAEAEQADAEAKAAIAMAAIgJAzIgoABQgSAAgMgBg");
	this.shape_257.setTransform(910.9,351.9,0.353,0.353);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgXCTIAVhJIgmAAIgWBJIguAAIAWhJIgfAAIAIgxIAlAAIAPgxIgfAAIAIgxIAlAAIAWhJIAuAAIgWBJIAlAAIAWhJIAvAAIgWBJIAfAAIgIAxIglAAIgPAxIAfAAIgIAxIglAAIgWBJgAgZAZIAlAAIAOgxIglAAg");
	this.shape_258.setTransform(904.4,351.9,0.353,0.353);

	this.instance_6 = new lib.Image_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(878,2,0.075,0.075);

	this.instance_7 = new lib.Image_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(585,2,0.075,0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.instance_5},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.instance_4},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.4,149.7,1484.6,623);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/temp_atlas_.png?1537713254780", id:"temp_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;