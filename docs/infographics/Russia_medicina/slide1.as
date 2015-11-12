import flash.filters.DropShadowFilter;
import flash.filters.GlowFilter;

var filterArray:Array = new Array();
var filter2:GlowFilter = new GlowFilter(0xFFFFFF, 1, 1, 1, 200, 3, false, false);
filterArray.push(filter2);
var filter:DropShadowFilter = new DropShadowFilter(5, 45, 0x000000, 0.7, 5, 5, 1, 3, false, false, false);
filterArray.push(filter);



var labels = new Array("","ВРП, млрд руб.","Население, млн. человек","Площадь, тыс. кв. км.","Уровень безработицы","Индекс пром. производства","Индекс сельского хозяйства","Индекс потребительских цен");

var colors = new Array(0xFFFFFF,0xE28026,0xE6A448,0xEAC96B,0xEEE78A,0xB1CC7F,0x92BA6E,0x72A65A)


var currSort:Number;
var currentCrit:Number;

var sortDirection:Boolean;

downlist._visible = false;

slider1.ones.autoSize = true;

bDown.onRelease = function(){
	downlist._visible = !downlist._visible;
}

for(i=1;i<=4;i++){
	this["s"+i]._visible = false;
	this["cr"+i].num = i;
	this["cr"+i].onRollOver = function(){
		clearInterval(setID1);
		setID1 = setInterval(moveHint3,25);
		
		hint3.gotoAndStop(this.num);
		if(currentCrit==0){
			hint3.gotoAndStop(5);
		}
		trace("currentCrit==="+currentCrit)
	}
	this["cr"+i].onRollOut = this["cr"+i].onDragOut = function(){
		clearInterval(setID1);
		hint3._y = -1000;
	}
	this["cr"+i].onRelease = this["cr"+i].onReleaseOutside = function(){
		cr0.gotoAndStop(1);
		cr0.sortedDown = true;
		if(currSort!=this.num){
			this.same = false;
			this.gotoAndStop(2);
			this._parent["s"+this.num]._visible = true;
			this.sortedDown = true;
			this._parent["cr"+currSort].gotoAndStop(1);
			this._parent["s"+currSort]._visible = false;
			currSort = this.num;
			//sortList(true);
		} else {
			this.same = true;
			if(this.sortedDown){
				this.gotoAndStop(3);
				this.sortedDown = false;
				this._parent["s"+this.num]._visible = true;
				//sortList(false);
			} else {
				this.gotoAndStop(2);
				this.sortedDown = true;
				this._parent["s"+this.num]._visible = true;
				//sortList(true);
			}
		}
		//this._parent.paintMap();
		if(this.num==0){
			slider1._visible = false;
			title2._visible = false; 
		} else {
			if(!this.same){
			slider1._visible = true;
			title2._visible = true;
			title2.gotoAndStop(this.num)
			
			switch(currSort){
				case 1:{
					slider1.setLimits(currentCrit, currSort, _root.min2011[currentCrit], _root.max2011[currentCrit]);
					break;
				}
				case 2:{
					slider1.setLimits(currentCrit, currSort, _root.min2013[currentCrit], _root.max2013[currentCrit]);
					break;
				}
				case 3:{
					slider1.setLimits(currentCrit, currSort, _root.percmin[currentCrit], _root.percmax[currentCrit]);
					break;
				}
				case 4:{
					slider1.setLimits(currentCrit, currSort, _root.fintotalmin, _root.fintotalmax);
				}
			}
			paintMap();
		}
		}
		sortList(this.sortedDown);
	}
}
cr0.sortedDown = true;
cr0.onRelease = function(){
	this.sortedDown = !this.sortedDown;
	
	if(this.sortedDown){
		this.gotoAndStop(3);
	} else {
		this.gotoAndStop(2);
	}
	sortNames(this.sortedDown);
}



function moveHint3(){
	hint3._x = _xmouse;
	hint3._y = _ymouse+20;
	if(hint3._x+hint3._width+_root.mc1._x>Stage.width){
		hint3._x = Stage.width - hint3._width - _root.mc1._x
	}
}


//-----------------------заполнение списка критериев----------------------
with(downlist){
	y0 = list1.crit1._y + list1.crit1._height+2;
	hint._visible = false;

	for(i=0;i<_root.crits.length;i++){
		list1.attachMovie("textcrit","t"+i,list1.getNextHighestDepth(), {_x:0,_y:y0});
		list1["t"+i].num = i;
		list1["t"+i].bg._visible = false;
		list1["t"+i].onRollOver = list1["t"+i].onDragOver = function(){
			this.bg._visible = true;
			hint.pole.txt.autoSize = true
			hint.pole.txt.htmlText = _root.crits2[this.num]+",<font color='#666666'> "+_root.ones[this.num]+"</font>";
			hint.pole.bg._height = hint.pole.txt.textHeight + 35;
			hint.pole.bg._width = hint.pole.txt.textWidth + 20;
			if(hint.pole.bg._width<250){hint.pole.bg._width = 250}
	
			hint._y = this._y+this._parent._y+10;
			hint.pole._y = 0;
			if(hint._y+hint.pole._height+hint.pole.bg._y>mask1._y+mask1._height+10){
				
				hint.pole._y= mask1._y+mask1._height-hint.pole._height-hint._y-hint.pole.bg._y+10;
				trace(hint.pole._y)
			}
			hint._visible = true;
	
			
		}
		list1["t"+i].onRollOut = list1["t"+i].onDragOut = function(){
			this.bg._visible = false;
			hint._visible = false;
		}
		
		list1["t"+i].onRelease = list1["t"+i].onReleaseOutside = function(){
			this._parent._parent._visible = false;
			this._parent._parent._parent.selectedcrit.text = _root.crits[this.num];
			this._parent._parent._parent.currentCrit = this.num;
			trace(this._parent._parent._parent)
			this._parent._parent._parent.setRegionsList();
			trace(this.num);
			csort = this._parent._parent._parent.currSort;
			
			switch(csort){
				case 0:break;
				case 1:{
					this._parent._parent._parent.slider1.setLimits(this.num, csort, _root.min2011[this.num], _root.max2011[this.num]);
					break;
				}
				case 2:{
					this._parent._parent._parent.slider1.setLimits(this.num, csort, _root.min2013[this.num], _root.max2013[this.num]);
					break;
				}
				case 3:{
					this._parent._parent._parent.slider1.setLimits(this.num, csort,  _root.percmin[this.num], _root.percmax[this.num]);
					break;
				}
				case 4:{
					this._parent._parent._parent.slider1.setLimits(this.num, csort, _root.fintotalmin, _root.fintotalmax);
				}
			}
			
			this._parent._parent._parent.slider1.ones.text = _root.ones[this.num]
			
			this._parent._parent._parent.paintMap();
			this._parent._parent._parent.sortList(this._parent._parent._parent["cr"+csort].sortedDown);
		}
		
		
		
		list1["t"+i].label.text = _root.crits[i];
		y0+=list1["t"+i]._height;
		if(i==10){
			list1.crit2._y = y0;
			y0 += list1.crit1._height+2
		}
		downlist.dlist = (list1._height - mask1._height)/40;
	}
}



function init(){
	y0 = 0;
	trace("_root.regdata.length"+_root.regdata.length)
	for(i=1;i<_root.regdata.length;i++){		
		list1.attachMovie("textitem","t"+i,list1.getNextHighestDepth(), {_x:0,_y:y0});
		list1["t"+i].num = i;
		list1["t"+i].useHandCursor = false;
		list1["t"+i].bg._visible = false;
		list1["t"+i].onRollOver = list1["t"+i].onDragOver = function(){
			this.bg._visible = true;
			map["r"+this.num].swapDepths(map.getNextHighestDepth());
			map["r"+this.num].filters = filterArray;
			
			hint2._x = map._x + map["r"+this.num]._x*0.55;
			hint2._y = map._y + map["r"+this.num]._y*0.55;
			hint2.label.text = _root.regdata[this.num].title;
			if(!_root.regdata[this.num].title){
				hint2.label.text = "Нет данных"
			}
			hint2.bg._width = hint2.label.textWidth+22;
			
		}
		list1["t"+i].onRollOut = list1["t"+i].onDragOut = function(){
			this.bg._visible = false;
			hint2._y = -1000;
			map["r"+this.num].filters = [];
		}
		
		list1["t"+i].onRelease = list1["t"+i].onReleaseOutside = function(){
			
			
		}
		
		list1["t"+i].title.autoSize = true;
		list1["t"+i].title.text = _root.regdata[i].title;
		if(_root.regdata[i].title==undefined){
			list1["t"+i].title.text = "---";
		}
		
		list1["t"+i].bg._height = list1["t"+i]._height;
		list1["t"+i].line._y = list1["t"+i].bg._height;
		y0+=list1["t"+i]._height+1;
		dlist = (list1._height - mask1._height)/40;
		
	}
	
	trace("map.r1==="+map.r1)
	for(i=1;i<=_root.total;i++){
		map["r"+i].useHandCursor = false;
		map["r"+i].id = i;
		map["r"+i].onRollOver = function(){
			this.swapDepths(this._parent.getNextHighestDepth());
			this.filters = filterArray;
			clearInterval(setID);
			setID = setInterval(moveHint,25);
			hint.title.text = _root.regdata[this.id].title;
			hint.d1.text = _root.regdata[this.id].data2011[currentCrit];
			hint.d2.text = _root.regdata[this.id].data2013[currentCrit];
			hint.d3.text = _root.regdata[this.id].perc[currentCrit];
			hint.d4.text = _root.regdata[this.id].fintotal;
			
			
		}
		map["r"+i].onRollOut = map["r"+i].onDragOut = function(){
			clearInterval(setID);
			hint._y = -1000;
			this.filters = []
		}
	}
	
	currentCrit = 0;
	currSort = 1;
	cr1.onRelease();
	downlist.list1.t0.onRelease();
}

function moveHint(){
	hint._x = Math.round(_xmouse)+5;
	hint._y = Math.round(_ymouse)-5;
	if(hint._y - hint._height<10){hint._y = 10+ hint._height}
	if(hint._x + hint._width>Stage.width-10){hint._x = Stage.width - hint._width-10}
	if(hint._y + hint._height>Stage.height-10){hint._y = Stage.height - hint._height-10}
}

//----------------------------------изменение цифр в списке регионов---------------------------------------------
function setRegionsList(){
	//trace("werwer"+currentCrit)
	for(i=0;i<_root.regdata.length;i++){
		list1["t"+i].par1.text = _root.regdata[i].data2011[currentCrit];
		list1["t"+i].par2.text = _root.regdata[i].data2013[currentCrit];
		list1["t"+i].par3.text = _root.regdata[i].perc[currentCrit];
		
		if(_root.regdata[i].data2011[currentCrit]==undefined){
			list1["t"+i].par1.text = "-";
		}
		if(_root.regdata[i].data2013[currentCrit]==undefined){
			list1["t"+i].par2.text = "-";
		}
		if(_root.regdata[i].perc[currentCrit]==undefined){
			list1["t"+i].par3.text = "-";
		}
		
		list1["t"+i].par4.text = _root.regdata[i].fintotal;
		if(!_root.regdata[i].fintotal){list1["t"+i].par4.text="-"}
	}
}

//----------------------------------раскраска карты---------------------------------------------
function paintMap(){
	for(i=1;i<=_root.total;i++){
		pr = false;
		var tempdat:Number;
		switch(currSort){
			case 1: {
					tempdat = _root.regdata[i].data2011[currentCrit];
					break;					
			}
			case 2: {
					tempdat = _root.regdata[i].data2013[currentCrit];
					break;
			}
			case 3: {
					tempdat = _root.regdata[i].perc[currentCrit];
					break;
			}
			case 4: {
					tempdat = _root.regdata[i].fintotal;
					break;
			}		
		}
		if((tempdat<slider1.currPos1)or((tempdat>slider1.currPos2))){pr = true;}
		
					
		if(pr){
			colornum = 0;
		} else {
			colornum = Math.ceil((tempdat - slider1.currPos1)*7/(slider1.currPos2 - slider1.currPos1));
			if(colornum == 0){
				colornum = 1;

			}
			if(!_root.good[currentCrit]){
				colornum = 8 - colornum;
				slider1.bar.colorbar._xscale = - 100;
			} else {
				slider1.bar.colorbar._xscale = 100;
			}
			if(colornum>7){colornum=7}
			if(!(colornum)or(colornum<0)or(slider1.currPos2 == slider1.currPos1)){
				trace("еще какая-то хуйня!=="+i);
				trace("colornum==="+colornum)
				colornum = 0;
				
			}
		}
		

		my_color = new Color(map["r"+i].bg);
		my_color.setRGB(colors[colornum])
		map["r"+i].enabled = (colornum!=0)
	}

}
//---------------------------сортировка списка---------------------------------
function sortList(pr2){

	if(pr2!=undefined){sortDirection = pr2;}
	var temparray = new Array();
	//temparray[0] = 0;
	for(var i=1;i<=_root.total;i++){
		pr = false;
		if(currSort==0){
			if(_root.regdata[i].title!=undefined)temparray.push(i);
		} else {
			var tempdat:Number;
			switch(currSort){
				case 1: {
						tempdat = _root.regdata[i].data2011[currentCrit];
						break;					
				}
				case 2: {
						tempdat = _root.regdata[i].data2013[currentCrit];
						break;
				}
				case 3: {
						tempdat = _root.regdata[i].perc[currentCrit];
						break;
				}
				case 4: {
						tempdat = _root.regdata[i].fintotal;
						break;
				}		
			}		

			if((tempdat<slider1.currPos1)or((tempdat>slider1.currPos2))){pr = true;}

			if(!_root.regdata[i].title){
				pr = true;
				//trace("_root.regdata[i].title==="+_root.regdata[i].title);
			}

			if(pr==false){
				temparray.push(i);
			}
		}
	}
	trace(temparray)
	for(i=0;i<temparray.length;i++){
		for(k=i;k<temparray.length;k++){
			
			switch(currSort){
					case 0: {
							tempdat1 = _root.regdata[temparray[i]].title;
							tempdat2 = _root.regdata[temparray[k]].title;
							break;					
					}
					case 1: {
							tempdat1 = _root.regdata[temparray[i]].data2011[currentCrit];
							tempdat2 = _root.regdata[temparray[k]].data2011[currentCrit];
							break;					
					}
					case 2: {
							tempdat1 = _root.regdata[temparray[i]].data2013[currentCrit];
							tempdat2 = _root.regdata[temparray[k]].data2013[currentCrit];
							break;
					}
					case 3: {
							tempdat1 = _root.regdata[temparray[i]].perc[currentCrit];
							tempdat2 = _root.regdata[temparray[k]].perc[currentCrit];
							break;
					}
					case 4: {
							tempdat1 = _root.regdata[temparray[i]].fintotal;
							tempdat2 = _root.regdata[temparray[k]].fintotal;
							break;
					}		
			}
			//trace("tempdat1==="+tempdat1);
			//trace("tempdat2==="+tempdat2);
			if(sortDirection){
				
				if(tempdat1>tempdat2){
					var tmptmp = temparray[k];
					temparray[k] = temparray[i];
					temparray[i] = tmptmp;
				}
			} else {
				if(tempdat1<tempdat2){
					var tmptmp = temparray[k];
					temparray[k] = temparray[i];
					temparray[i] = tmptmp;
				}
			}
		}
	}
	
	y0 = 0;
	
	for(var i=1;i<=_root.total;i++){
		list1["t"+i]._visible = false;
		list1["t"+i]._y = 0;

	}
	
	for(var i=0;i<temparray.length;i++){
		list1["t"+temparray[i]]._visible = true;
		list1["t"+temparray[i]]._y = y0;
		y0+=list1["t"+temparray[i]]._height;
		
	}
	runner._y = runner.ymin;
	runner._visible = runner_bg._visible = arr1._visible = arr2._visible = !(y0<mask1._height);
	list1._y = mask1._y;
	dlist = (list1._height - mask1._height)/100;
	
}

function sortNames(pr3:Boolean){
	var temparray = new Array();
	for(var i=1;i<=_root.total;i++){
		if(list1["t"+i]._visible){temparray.push(i);}
	}
	for(i=0;i<temparray.length;i++){
		for(k=i;k<temparray.length;k++){
			tempdat1 = _root.regdata[temparray[i]].title;
			tempdat2 = _root.regdata[temparray[k]].title;
			if(pr3){				
				if(tempdat1>tempdat2){
					var tmptmp = temparray[k];
					temparray[k] = temparray[i];
					temparray[i] = tmptmp;
				}
			} else {
				if(tempdat1<tempdat2){
					var tmptmp = temparray[k];
					temparray[k] = temparray[i];
					temparray[i] = tmptmp;
				}
			}
		}
	}
	y0 = 0;
	for(var i=0;i<temparray.length;i++){
		list1["t"+temparray[i]]._y = y0;
		y0+=list1["t"+temparray[i]]._height;
		
	}
}
//-------------------------------scroller---------------------------------------

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