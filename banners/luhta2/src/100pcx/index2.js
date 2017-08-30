(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.logo_rambler = function() {
	this.initialize(img.logo_rambler);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,135);// helper functions:

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


(lib.rr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AAAyvMAAAAlf");
	this.shape.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rr, new cjs.Rectangle(-1,-1,2,242), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_rambler();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,240,67.5), null);


(lib.btnMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguBIQAAgHACgFQADgKAIgJQAIgKAPgMQAXgTAIgKQAIgMAAgKQAAgKgHgHQgIgHgMAAQgLAAgIAHQgIAIAAANIgSgCQACgUAMgKQAMgLAUAAQAUAAAMALQAMAMAAARQAAAIgDAJQgEAIgIAIQgIAJgTAQIgTASIgIAKIBFAAIAAARg");
	this.shape.setTransform(49.4,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAlBHIhKhvIAABvIgSAAIAAiOIATAAIBKBwIAAhwIASAAIAACOg");
	this.shape_1.setTransform(36.8,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_2.setTransform(23.5,29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAGQANADAHAJQAHAJAAAMQAAAKgEAIQgEAKgHAEQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_3.setTransform(10.9,29.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AEsAAQAAB8hYBYQhXBYh9AAQh7AAhYhYQhYhYAAh8QAAh8BYhYQBYhXB7AAQB9AABXBXQBYBYAAB8g");
	this.shape_4.setTransform(30,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#315DF9").s().p("AguBIQAAgHACgFQADgKAIgJQAIgKAPgMQAXgTAIgKQAIgMAAgKQAAgKgHgHQgIgHgMAAQgLAAgIAHQgIAIAAANIgSgCQACgUAMgKQAMgLAUAAQAUAAAMALQAMAMAAARQAAAIgDAJQgEAIgIAIQgIAJgTAQIgTASIgIAKIBFAAIAAARg");
	this.shape_5.setTransform(49.4,29.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#315DF9").s().p("AAlBHIhKhvIAABvIgSAAIAAiOIATAAIBKBwIAAhwIASAAIAACOg");
	this.shape_6.setTransform(36.8,29.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#315DF9").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_7.setTransform(23.5,29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#315DF9").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAGQANADAHAJQAHAJAAAMQAAAKgEAIQgEAKgHAEQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_8.setTransform(10.9,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#315EFB").ss(2,1,1).p("AEsAAQAAB8hYBYQhXBYh9AAQh7AAhYhYQhYhYAAh8QAAh8BYhYQBYhXB7AAQB9AABXBXQBYBYAAB8g");
	this.shape_9.setTransform(30,30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#315DF9").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAGQANADAHAIQAHAKAAAMQAAAKgEAJQgEAIgHAFQgGAEgJADQgKADgOgBgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgDgNABIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgFQADgEAAgIQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_10.setTransform(10.9,31.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AkzE7IAAp1IJmAAIAAJ1g");
	this.shape_11.setTransform(30.8,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9,p:{y:30}},{t:this.shape_8},{t:this.shape_7,p:{y:29.8}},{t:this.shape_6,p:{y:29.8}},{t:this.shape_5,p:{y:29.7}}]},1).to({state:[{t:this.shape_9,p:{y:32}},{t:this.shape_10},{t:this.shape_7,p:{y:31.8}},{t:this.shape_6,p:{y:31.8}},{t:this.shape_5,p:{y:31.7}}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62,62);


(lib.logo_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-1380,57.8,1,1,0,0,0,120,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_mov, new cjs.Rectangle(-1500,24,240,67.5), null);


(lib.btn_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn2
	this.btn2 = new lib.btn2();
	this.btn2.parent = this;
	this.btn2.setTransform(-1380,162,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.btn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_mov, new cjs.Rectangle(-1411,131,62,64), null);


// stage content:
(lib.index2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (typeof(this.CS) == "undefined") {     
		
		    
			this.MainButton.addEventListener("click", function (e) {
		           window.click();
		    });
			
			this.btn2.addEventListener("click", function (e) {
		           window.click(2);
		    });
			
			
		    this.CS = true;
		}
	}
	this.frame_1 = function() {
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		var page_canvas = document.getElementsByTagName("canvas")[0];
		
		var this1 = this;
		
		
		page_canvas.width = 500;
		 
		window.onresize = function () {
			onResize();
		}
		
		function onResize() {
		
			
			
			
			 var newWidth = window.innerWidth;
			
			  this1.rr.x = newWidth;
			
			  this1.logo.x =  newWidth/4 +60
			  this1.btn2.x = newWidth - newWidth/5 +10
			  
			  if(newWidth > 2000) {
				  newWidth = 2000
			  }
			  this1.logo.scaleX = 0.9+ newWidth/1500
			  this1.logo.scaleY = 0.9+ newWidth/1500
			  
		
		};
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(129));

	// border
	this.ll = new lib.rr();
	this.ll.parent = this;
	this.ll.setTransform(0,45,1,1,0,0,0,0,45);

	this.rr = new lib.rr();
	this.rr.parent = this;
	this.rr.setTransform(2500,45,1,1,0,0,0,0,45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EDqYASwMnUvAAAEjqXgSvMHUvAAA");
	this.shape.setTransform(1500,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.rr},{t:this.ll}]}).wait(130));

	// btn2
	this.btn2 = new lib.btn_mov();
	this.btn2.parent = this;
	this.btn2.setTransform(1312,121.8,1.76,1.76,0,0,0,-1378.4,163.1);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(130));

	// btnMain
	this.MainButton = new lib.btnMain();
	this.MainButton.parent = this;
	this.MainButton.setTransform(1500,120,12.5,0.6,0,0,0,120,200);
	new cjs.ButtonHelper(this.MainButton, 0, 1, 2, false, new lib.btnMain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.MainButton).wait(130));

	// logo
	this.logo = new lib.logo_mov();
	this.logo.parent = this;
	this.logo.setTransform(991.7,120.1,1.365,1.365,0,0,0,-1380,57.8);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1499,119,3001.9,242);
// library properties:
lib.properties = {
	width: 3000,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo_rambler.png?1504129216908", id:"logo_rambler"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;