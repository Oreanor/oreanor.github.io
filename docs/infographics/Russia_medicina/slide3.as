var maxCircleSize = 0;

downlist._visible = false;

bDown.onRelease = function(){
	downlist._visible = !downlist._visible;
}
hint._y = -1000;

label0.autoSize = true;
label1.autoSize = true;
label2.autoSize = true;
label3.autoSize = true;

for(i=1;i<=3;i++){
	this["cr"+i].num = i;
	this["cr"+i].onRollOver = function(){
		clearInterval(setID1);
		setID1 = setInterval(moveHint,25);
		hint.gotoAndStop(this.num)
	}
	this["cr"+i].onRollOut = this["cr"+i].onDragOut = function(){
		clearInterval(setID1);
		hint._y = -1000;
	}
}

function moveHint(){
	hint._x = _xmouse;
	hint._y = _ymouse+20;
	if(hint._x+hint._width+_root.mc3._x>Stage.width){
		hint._x = Stage.width - hint._width - _root.mc3._x
	}
}

function init(){
	
	with(downlist){
	y0 = 0;

	var tmparr = new Array();
	
	
	
	for(i=1;i<_root.regdata.length;i++){
		
		
		tmptotal = 0
		for(j=0;j<3;j++){
			for(k=0;k<3;k++){
				tmptotal+=_root.regdata[i].findata[j][k];
				
			}
		}
		if(tmptotal>maxCircleSize){maxCircleSize = tmptotal}
		
		list1.attachMovie("textcrit3","t"+i,list1.getNextHighestDepth(), {_x:0,_y:y0});
		list1["t"+i].num = i;
		list1["t"+i].bg._visible = false;
		list1["t"+i].onRollOver = list1["t"+i].onDragOver = function(){
			this.bg._visible = true;
	
			
		}
		list1["t"+i].onRollOut = list1["t"+i].onDragOut = function(){
			this.bg._visible = false;
		}
		
		list1["t"+i].onRelease = list1["t"+i].onReleaseOutside = function(){
			this._parent._parent._visible = false;
			this._parent._parent._parent.selectedcrit.text = this.label.text;
			_root.currentRegion = this.num;
			this._parent._parent._parent.setCircles();
			this._parent._parent._parent.setCritList();
			
		}
		
		
		list1["t"+i].label.text = _root.regdata[i].title;
		
		if(_root.regdata[i].title==undefined){
			list1["t"+i].label.text = "---"+i;
		}
		
		y0+=list1["t"+i]._height;
		downlist.dlist = (list1._height - mask1._height)/40;
		
	}
	
	y0 = 0;
	
	tmparr = new Array();
	for(i=1;i<_root.regdata.length;i++){
		tmparr[i] = list1["t"+i];
	}
	
	for(i=1;i<_root.regdata.length;i++){
		
		for(j=i+1;j<_root.regdata.length;j++){
			if(tmparr[i].label.text>tmparr[j].label.text){
				tmptmp = tmparr[i];
				tmparr[i] = tmparr[j];
				tmparr[j] = tmptmp;
				
			}
		}
	}
	for(i=1;i<_root.regdata.length;i++){
		trace(tmparr[i]+"====="+tmparr[i].label.text)
		tmparr[i]._y = y0;
		y0+=tmparr[i]._height
	}
	
	tmparr[1].onRelease();
		
	}

	trace("maxCircleSize=="+maxCircleSize);
	
	y0 = list1.crit1._y + list1.crit1._height+8;
	
	for(i=0;i<_root.critnum;i++){
		list1.attachMovie("textitem3","t"+i,list1.getNextHighestDepth(), {_x:0,_y:y0});
		list1["t"+i].label.autoSize = true;
		list1["t"+i].label.htmlText = _root.crits[i]+",<font color='#666666'> "+_root.ones[i]+"</font>";
		y0+=list1["t"+i].label.textHeight+8;
		list1["t"+i].line._y = list1["t"+i].label.textHeight+6;
		if(i==10){
			list1.crit2._y = y0+4;
			y0 += list1.crit1._height+8;
		}
		
	}
	dlist = (list1._height - mask1._height)/40;
	//downlist.list1["t16"].onRelease();
	
	
}

function setCritList(){
	for(i=0;i<_root.critnum;i++){
		
		list1["t"+i].par2011.text = _root.regdata[_root.currentRegion].data2011[i];
		list1["t"+i].par2013.text = _root.regdata[_root.currentRegion].data2013[i];
		list1["t"+i].perc.text = _root.regdata[_root.currentRegion].perc[i];
		
		if(_root.regdata[_root.currentRegion].data2011[i]==undefined){
			list1["t"+i].par2011.text = "-";
		}
		if(_root.regdata[_root.currentRegion].data2013[i]==undefined){
			list1["t"+i].par2013.text = "-";
		}
		if(_root.regdata[_root.currentRegion].perc[i]==undefined){
			list1["t"+i].perc.text = "-";
		}
	}
}

function setCircles(){
	temptotal2 = 0;
	for(k=0;k<3;k++){
		temptotal = 0;
		for(i=0;i<3;i++){
			temptotal += _root.regdata[_root.currentRegion].findata[i][k]
		}
		trace(temptotal)
		temptotal2+=temptotal;
		this["label"+k].text = temptotal;
		this["circ"+k]._xscale = this["circ"+k]._yscale = 80*temptotal/maxCircleSize + 20;
		
		if(!temptotal){
			this["circ"+k]._xscale = this["circ"+k]._yscale = 100;
			this["label"+k].text = "-";
		}
	}
		label3.htmlText = "<b>"+temptotal2+"</b>";
		circ3._xscale = circ3._yscale = 80*temptotal2/maxCircleSize + 20
		if(!temptotal2){
			label3.htmlText = "-";
		circ3._xscale = circ3._yscale = 100;
		}
}




//-----------------------------------scroller-----------------------------------

runner.ymin = runner_bg._y+runner._height/2;
runner.ymax = runner_bg._y+runner_bg._height-runner._height/2;

runner.onPress = function(){
	this.gotoAndStop(2);
	clearInterval(setID);	
	setID = setInterval(this._parent,"moveRunner",25,this._ymouse);

}

runner.onRelease = runner.onReleaseOutside = function(){
	this.gotoAndStop(1);
	clearInterval(setID);
}


function moveRunner(dr:Number){
	runner._y = this._ymouse - dr;
	if(runner._y<runner.ymin){runner._y = runner.ymin}
	if(runner._y>runner.ymax){runner._y = runner.ymax}
	
	sliderPole = runner.ymax - runner.ymin;
	textPole = list1._height - mask1._height;
	sliderPos = runner._y  - runner.ymin;
	
	list1._y = mask1._y - textPole*sliderPos/sliderPole;
}





drunn = (runner.ymax - runner.ymin)/40;


function moveUp(){
	list1._y+=dlist;
	runner._y-=drunn;
	if(list1._y>mask1._y){list1._y=mask1._y}
	if(runner._y<runner.ymin){runner._y=runner.ymin}
}

function moveDown(){
	list1._y-=dlist;
	runner._y+=drunn;
	if(list1._y+list1._height<mask1._y + mask1._height){list1._y=mask1._y + mask1._height - list1._height}
	if(runner._y>runner.ymax){runner._y=runner.ymax}
}


function setList(num:Number){
	list1._y = - list1["p"+num]._y + mask1._y;
	if(list1._y+list1._height<mask1._y+mask1._height){
		list1._y=mask1._y+mask1._height-list1._height;
	}
	runner._y = runner.ymin + (runner.ymax - runner.ymin)*(mask1._y - list1._y)/(list1._height - mask1._height);
}


arr1.onPress = function(){
	this.gotoAndStop(2);
	clearInterval(setID1);
	setID1 = setInterval(moveUp,50);
}


arr1.onRelease = arr1.onReleaseOutside = function(){
	this.gotoAndStop(1);
	clearInterval(setID1);
}

arr2.onPress = function(){
	this.gotoAndStop(2);
	clearInterval(setID2);
	setID2 = setInterval(moveDown,50);
}

arr2.onRelease = arr2.onReleaseOutside = function(){
	this.gotoAndStop(1);
	clearInterval(setID2);
}


var mouseListener:Object = new Object();
mouseListener.onMouseWheel = function(delta:Number) {
		if(runner._visible){
			if(list1._height>mask1._height)
			if(delta>0){moveUp()} else {moveDown()}
		}

};

Mouse.addListener(mouseListener);