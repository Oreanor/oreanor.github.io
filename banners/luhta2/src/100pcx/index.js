(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 3000,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/logo_rambler.png", id:"logo_rambler"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.logo_rambler = function() {
	this.initialize(img.logo_rambler);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,135);


(lib.rr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("AAAyvMAAAAlf");
	this.shape.setTransform(0,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,242);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_rambler();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,67.5);


(lib.btnMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape.setTransform(120,200);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjBDIAfg5IAJgTIAEgLQACgGAAgFQAAgGgCgFQgDgGgGAAQgBAAgDADQgCACgBADQgCAFAAAJIABAIIgZAAIAAgHQAAgKACgHQABgIAEgFQAEgFAHgDQAHgDAIAAQAIAAAHACQAHACAEAEQAFAFACAGQADAGAAAJIgBALIgDAKIgKASIgUAlIAfAAIAAAXg");
	this.shape.setTransform(42.5,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQBCIgfhOQACAHAAAGIAABBIgbAAIAAiDIAZAAIAfBOQgCgKAAgGIAAg+IAbAAIAACDg");
	this.shape_1.setTransform(33,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBCIAAhrIgVAAIAAgYIBCAAIAAAYIgUAAIAABrg");
	this.shape_2.setTransform(24.5,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghBCIAAiDIAcAAQARAAAJAJQAFAFADAIQADAIAAAIIgBAKQgCAFgDAEQgFAFgGADQAJABAFAJIAEAKIABAIQAAAIgCAHQgDAHgFAFIgIAGIgJADQgGACgGAAgAgHArQAHAAADgEQAFgEAAgJQAAgEgBgEQgCgEgCgCQgDgEgHAAgAgHgKQAHgBADgEQAEgEAAgIQAAgIgEgEQgDgEgHAAg");
	this.shape_3.setTransform(16.9,30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AEsAAQAAB7hYBYQhYBZh8AAQh6AAhZhZQhYhYAAh7QAAh7BYhYQBZhYB6AAQB8AABYBYQBYBYAAB7g");
	this.shape_4.setTransform(30,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#315DF9").s().p("AgjBDIAfg5IAJgTIAEgLQACgGAAgFQAAgGgCgFQgDgGgGAAQgBAAgDADQgCACgBADQgCAFAAAJIABAIIgZAAIAAgHQAAgKACgHQABgIAEgFQAEgFAHgDQAHgDAIAAQAIAAAHACQAHACAEAEQAFAFACAGQADAGAAAJIgBALIgDAKIgKASIgUAlIAfAAIAAAXg");
	this.shape_5.setTransform(42.5,30.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#315DF9").s().p("AAQBCIgfhOQACAHAAAGIAABBIgbAAIAAiDIAZAAIAfBOQgCgKAAgGIAAg+IAbAAIAACDg");
	this.shape_6.setTransform(33,30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#315DF9").s().p("AgMBCIAAhrIgVAAIAAgYIBCAAIAAAYIgUAAIAABrg");
	this.shape_7.setTransform(24.5,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#315DF9").s().p("AghBCIAAiDIAcAAQARAAAJAJQAFAFADAIQADAIAAAIIgBAKQgCAFgDAEQgFAFgGADQAJABAFAJIAEAKIABAIQAAAIgCAHQgDAHgFAFIgIAGIgJADQgGACgGAAgAgHArQAHAAADgEQAFgEAAgJQAAgEgBgEQgCgEgCgCQgDgEgHAAgAgHgKQAHgBADgEQAEgEAAgIQAAgIgEgEQgDgEgHAAg");
	this.shape_8.setTransform(16.9,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#315EFB").ss(2,1,1).p("AEsAAQAAB7hYBYQhYBZh8AAQh6AAhZhZQhYhYAAh7QAAh7BYhYQBZhYB6AAQB8AABYBYQBYBYAAB7g");
	this.shape_9.setTransform(30,30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AkyE7IAAp1IJlAAIAAJ1g");
	this.shape_10.setTransform(30.8,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9,p:{y:30}},{t:this.shape_8,p:{y:30.3}},{t:this.shape_7,p:{y:30.3}},{t:this.shape_6,p:{y:30.3}},{t:this.shape_5,p:{y:30.2}}]},1).to({state:[{t:this.shape_9,p:{y:32}},{t:this.shape_8,p:{y:32.3}},{t:this.shape_7,p:{y:32.3}},{t:this.shape_6,p:{y:32.3}},{t:this.shape_5,p:{y:32.2}}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,62,62);


(lib.logo_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(-1380,57.8,1,1,0,0,0,120,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1500,24,240,67.5);


(lib.btn_mov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn2
	this.btn2 = new lib.btn2();
	this.btn2.setTransform(-1380,162,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.btn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1411,131,62,64);


// stage content:
(lib.index = function(mode,startPosition,loop) {
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
	this.ll.setTransform(0,45,1,1,0,0,0,0,45);

	this.rr = new lib.rr();
	this.rr.setTransform(2500,45,1,1,0,0,0,0,45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EjqWgSvMHUtAAAEDqXASwMnUtAAA");
	this.shape.setTransform(1500,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.rr},{t:this.ll}]}).wait(130));

	// btn2
	this.btn2 = new lib.btn_mov();
	this.btn2.setTransform(1312,121.8,1.76,1.76,0,0,0,-1378.4,163.1);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(130));

	// btnMain
	this.MainButton = new lib.btnMain();
	this.MainButton.setTransform(1500,120,12.5,0.6,0,0,0,120,200);
	new cjs.ButtonHelper(this.MainButton, 0, 1, 2, false, new lib.btnMain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.MainButton).wait(130));

	// logo
	this.logo = new lib.logo_mov();
	this.logo.setTransform(991.7,120.1,1.365,1.365,0,0,0,-1380,57.8);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1499,119,3001.9,242);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;