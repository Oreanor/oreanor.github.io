
//-------------физические размеры шкалы-----------------
var x0 = 5;
var range = 314;

//-------------------------
var xmin:Number;
var xmax:Number;

//----------------максимум-минимум----------------
//--------|lim1sc------|lim1---------------------------------|lim2----|lim2sc-------
var lim1:Number;
var lim2:Number;

var lim1sc:Number;
var lim2sc:Number;


//----------------текущее положение----------------
var currPos1:Number;
var currPos2:Number;

arr1.label._visible = false;
arr2.label._visible = false;
arr1.label.txt.autoSize = true;
arr2.label.txt.autoSize = true;

bar.useHandCursor = false;
bar.onPress = function(){

	this._parent._parent.paintMap(); //раскраска карты
	this._parent._parent.sortList(); //сортировка списка

}

arr1.onPress = function(){
	this.label._visible = true;
	this.gotoAndStop(2);
	clearInterval(setID1);
	setID1 = setInterval(this._parent,"moveArr1",25);
}

arr1.onRelease = arr1.onReleaseOutside = function(){
	this.label._visible = false;
	this.gotoAndStop(1);
	clearInterval(setID1);
	
}

function moveArr1(){
	var xt = _xmouse;
	if(xt<xmin){xt=xmin}
	if(xt>xmax){xt=xmax}
	if(xt>arr2._x){xt=arr2._x}
	arr1._x = xt;
	bar._x = arr1._x;
	bar._width = arr2._x - arr1._x;

	currPos1 = Math.round(lim1sc + (lim2sc - lim1sc)*((arr1._x-x0)/range));
	if(xt==xmin){currPos1=lim1}
	arr1.label.txt.text = currPos1.toString();
	this._parent.paintMap();
	this._parent.sortList();
}

arr2.onPress = function(){
	//_root.currFilter = this._parent;
	//_root.isFiltered = true;
	//_root.colorFilterBars();
	this.label._visible = true;
	this.gotoAndStop(2);
	clearInterval(setID1);
	setID2 = setInterval(this._parent,"moveArr2",25);
	
	//_root.currFilter.bar.gotoAndStop("active");
}

arr2.onRelease = arr2.onReleaseOutside = function(){
	this.label._visible = false;
	this.gotoAndStop(1);
	clearInterval(setID2);
	
}

function moveArr2(){
	
	var xt = _xmouse;
	if(xt<xmin){xt=xmin}
	if(xt<arr1._x){xt=arr1._x}
	if(xt>xmax){xt=xmax}
	
	arr2._x = xt;
	bar._width = arr2._x - arr1._x;
	
	currPos2 = Math.round(lim1sc + (lim2sc - lim1sc)*((arr2._x-x0)/range));
	if(xt==xmax){currPos2=lim2}
	
	arr2.label.txt.text = currPos2.toString();
	this._parent.paintMap();
	this._parent.sortList();
	//if(_root.currFilter!=undefined)_root.cloneFilter();
}

function setLimits(critnum:Number,currSort:Number,l1:Number,l2:Number){
	trace("________setLimits_________")
	
	this.title1.gotoAndStop(critnum+1);
	if(currSort==3)this.title1.gotoAndStop("par3");
	if(currSort==4)this.title1.gotoAndStop("par4");
	//this.label.text = str;
	//trace("l1==="+l1)
	//trace("l2==="+l2)
	lim1 = l1;
	lim2 = l2;
	
	
	
	var ltemp = Math.ceil((l2-l1)/5)*1;

	lim1sc = Math.floor(l1/10)*10;
	lim2sc = lim1sc+5*ltemp;
	
	//trace("ltemp=="+ltemp);
	//trace("lim1sc=="+lim1sc);
	//trace("lim2sc=="+lim2sc);
	
	if(lim2sc<l2){
		//ltemp+=1;
		//lim2sc = lim1sc+5*ltemp;
		lim2temp=Math.ceil(l2);
		lim1sc += lim2temp-lim2sc;
		lim2sc = lim2temp
	}
	
	
	for(var i=0;i<7;i++){
		//this["d"+i].autoSize = true
		this["d"+i].text = lim1sc+i*ltemp;
	}
	xmin = x0 + range*((l1-lim1sc)/(lim2sc-lim1sc));
	xmax = x0 + range*((l2-lim1sc)/(lim2sc-lim1sc));
	
	
	//trace("xmin=="+xmin);
	//trace("xmax=="+xmax);
	arr1._x=xmin;
	arr2._x=xmax;
	bar._x = arr1._x;
	bar._width = arr2._x - arr1._x;
	
	currPos1 = lim1;
	arr1.label.txt.text = currPos1.toString();
	currPos2 = lim2;
	arr2.label.txt.text = currPos2.toString();
	
	
	mid2._x = mid._x = bar._x+bar._width/2;
	mid2.midtext.text = (lim1 + lim2)/2
}

