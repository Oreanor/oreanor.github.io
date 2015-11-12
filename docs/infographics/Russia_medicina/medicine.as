crits = new Array(
				  "Младенческая смертность",
				  "Смертность населения в трудоспособном возрасте",
				  "Смертность трудоспособного населения от болезней системы кровообращения",
				  "Смертность трудоспособного населения от злокачественных новообразований",
				  "Смертность трудоспособного населения от травм",
				  "Смертность в течение года после выявления рака",
				  "Доля здоровых или практически здоровых детей в школах",
				  "Выживаемость больных с раком в пятилетней перспективе",
				  "Выживаемость после инфаркта миокарда в пятилетней перспективе",
				  "Удовлетворенность населения медпомощью",
				  "Обеспеченность населения необходимой сложной медпомощью",				  
				  "Загруженность коечного фонда в пересчете на количество дней в году",
				  "Размер взноса из бюджета субъекта  на ОМС для неработающего населения",
				  "Дефицит региональной программы ОМС",
				  "Общий дефицит врачей",
				  "Дефицит врачей в поликлиниках",
				  "Дефицит врачей в стационарах",
				  "Дефицит врачей скорой помощи",
				  "Средняя зарплата медработников",
				  "Cреднегодовые производственные активы в расчете на одного сотрудника",
				  "Оснащенность рабочих мест",
				  "Количество медучреждений, прошедших плановый капремонт",
				  "Количество современно оснащенных медучреждений",
				  "Количество пациентов, у которых ведутся электронные медицинские карты",
				  "Возможность записи на прием к врачу через Интернет или специальные терминалы",
				  "Наличие электронного документооборота  в медучреждениях",
				  "Стимулирующие выплаты врачам узкого профиля в поликлиниках",
				  "Медсестры при врачах узких специальностей, получающие стимулирующие выплаты"
				  )

crits2 = new Array(
				   "Младенческая смертность",
				   "Смертность населения в трудоспособном возрасте",
				   "Смертность населения в трудоспособном возрасте от болезней системы кровообращения",
				   "Смертность населения в трудоспособном возрасте от злокачественных новообразований",
				   "Смертность населения в трудоспособном возрасте от травм",
				   "Смертность в течение года с момента установления диагноза злокачественного новообразования",
				   "Доля детей 1 и 2 группы здоровья, обучающихся в общеобразовательных учреждениях",
				   "Пятилетняя выживаемость больных со злокачественными новообразованиями с момента установления диагноза",
				   "Пятилетняя выживаемость больных, перенесших острый инфаркт миокарда с момента установления диагноза",
				   "Удовлетворенность населения медицинской помощью",
				   "Удовлетворенность потребности населения в высокотехнологичной медицинской помощи",
				   "Среднегодовая занятость койки в государственных (муниципальных) учреждениях здравоохранения",
				   "Размер страховых взносов на обязательное медицинское страхование неработающего населения",
				   "Размер дефицита территориальной программы государственных гарантий оказания гражданам Российской Федерации бесплатной медицинской помощи",
				   "Размер дефицита обеспеченности врачебными кадрами – всего",
				   "Размер дефицита обеспеченности врачебными кадрами, оказывающими амбулаторную медицинскую помощь",
				   "Размер дефицита обеспеченности врачебными кадрами, оказывающими стационарную медицинскую помощь",
				   "Размер дефицита обеспеченности врачебными кадрами, оказывающими скорую медицинскую помощь",
				   "Среднемесячная номинальная заработная плата медицинских работников",
				   "Фондовооруженность учреждения здравоохранения",
				   "Фондооснащенность учреждения здравоохранения",
				   "Количество зданий учреждения здравоохранения, прошедших капитальный ремонт из числа нуждающихся в нем",
				   "Количество учреждений здравоохранения, материально-техническое оснащение которых приведено в соответствие с порядками оказания медицинской помощи",
				   "Количество пациентов, у которых ведутся электронные медицинские карты",
				   "Количество государственных (муниципальных) учреждений здравоохранения, осуществляющих автоматизированную запись на прием к врачу с использованием сети Интернет и информационно-справочных сенсорных терминалов (инфоматов), к общему количеству государственных (муниципальных) учреждений здравоохранения",
				   "Количество государственных (муниципальных) учреждений здравоохранения, использующих  электронный документооборот при обмене медицинской информацией, от общего количества государственных (муниципальных) учреждений",
				   "Количество врачей-специалистов, оказывающих амбулаторную медицинскую помощь, которым были осуществлены денежные выплаты стимулирующего характера",
				   "Количество среднего медицинского персонала, работающего с врачами-специалистами, либо оказывающего амбулаторную медицинскую помощь самостоятельно, которым были осуществлены денежные выплаты стимулирующего характера"
				   )

var ones = new Array(
					 "случаев на 1000 родившихся живыми",
					 "случаев на 100 тысяч человек населения",
					 "случаев на 100 тысяч человек населения",
					 "случаев на 100 тысяч человек населения",
					 "случаев на 100 тысяч человек населения",
					 "случаев на 100 тысяч человек населения",
					 "%",
					 "%",
					 "%",
					 "%",
					 "%",
					 "дни",
					 "рублей в расчете на 1 человека",
					 "%",
					 "%",
					 "%",
					 "%",
					 "%",
					 "рублей",
					 "рублей на одного врача",
					 "рублей на один квадратный метр площади зданий и сооружений",
					 "%",
					 "единиц",
					 "%",
					 "%",
					 "%",
					 "%",
					 "%"
					)


fincrits = new Array(
						"Укрепление материально-технической базы медучреждений",
						"Внедрение современных информационных систем в здравоохранение",
						"Внедрение стандартов и повышение доступности амбулаторной медпомощи"
)

var good = new Array(
					 false,
					 false,
					 false,
					 false,
					 false,
					 false,
					 true,
					 true,
					 true,
					 true,
					 true,
					 false,
					 true,
					 false,
					 false,
					 false,
					 false,
					 false,
					 true,
					 true,
					 true,
					 true,
					 true)

var critnum = 28;

var dataXML:XML = new XML();
dataXML.ignoreWhite = true;

dataXML.onLoad = function(success:Boolean) {
	if(success) {
		init();
	} else {
		trace("Error connecting to server.");
	}
};
//dataXML.load("regions_data_fake.xml");
//dataXML.load("data_medicina2b.xml");
dataXML.load("http://vid-1.rian.ru/ig/rusmed/data_medicina2b.xml");


var regdata = new Array();

var min2011 = new Array();
var max2011 = new Array();

var min2013 = new Array();
var max2013 = new Array();

var percmin = new Array();
var percmax = new Array();

var fintotalmin:Number;
var fintotalmax:Number;


var minfin = new Array();
var maxfin = new Array();

minfin[0] = new Array();
minfin[1] = new Array();
minfin[2] = new Array();

maxfin[0] = new Array();
maxfin[1] = new Array();
maxfin[2] = new Array();

var minfinsum = new Array();//из 3 значений, по критериям
var maxfinsum = new Array();

mc1._visible = false;
mc2._visible = false;
mc3._visible = false;

function init(){
	total = 0;
	
	for(i=0;i<critnum;i++){
		min2011[i] = 10e10;
		max2011[i] = 0;
		min2013[i] = 10e10;
		max2013[i] = 0;
		percmin[i] = 10e10;
		percmax[i] = 0;
		
		
	}
	
	for(j=0;j<3;j++){
		minfinsum[j] = 10e10;
		maxfinsum[j] = 0;
		for(k=0;k<3;k++){
			minfin[j][k] = 10e10;
			maxfin[j][k] = 0;
		}
	}	
	
	fintotalmin = 10e10;
	fintotalmax = 0;
	
	for (var item = dataXML.firstChild.firstChild; item != null; item = item.nextSibling){
		total++;
		
		map["r"+item.attributes.id].id = item.attributes.id;

		regdata[item.attributes.id] = new Object();
		
		
		regdata[item.attributes.id].data2011 = new Array();
		regdata[item.attributes.id].data2013 = new Array();
		
		regdata[item.attributes.id].perc = new Array();
		
		regdata[item.attributes.id].findata = new Array();
		//regdata[item.attributes.id].findata2013 = new Array();
		
		regdata[item.attributes.id].findata[0] = new Array();
		regdata[item.attributes.id].findata[1] = new Array();
		regdata[item.attributes.id].findata[2] = new Array();
		
		regdata[item.attributes.id].findatasum = new Array();
		
		
		regdata[item.attributes.id].title = item.attributes.title;	
		
		
		ik=0
		for (var item1 = item.firstChild.firstChild; item1 != null; item1 = item1.nextSibling){
			
			val = Number(item1.firstChild.nodeValue);
			if(!val){val=0}
			regdata[item.attributes.id].data2011.push(val) //<----
			ik++;
		}
		
		if(ik!=28){trace("id="+item.attributes.id+" "+ik)}
		var i = 0;
		ik=0

		for (item1 = item.firstChild.nextSibling.firstChild; item1 != null; item1 = item1.nextSibling){
			val = Number(item1.firstChild.nodeValue);
			if(!val){val=0;}
			regdata[item.attributes.id].data2013.push(val);//<----
			//trace(item1.firstChild.nodeValue)
			perc = Math.round((regdata[item.attributes.id].data2013[i]-regdata[item.attributes.id].data2011[i])*1000/regdata[item.attributes.id].data2011[i])/10;
			if(regdata[item.attributes.id].data2013[i]==0){perc=0}
			if(regdata[item.attributes.id].data2011[i]==0){perc=0}
			regdata[item.attributes.id].perc.push(perc);//<----
			i++;
			ik++;
		}	
		//if(ik!=28){trace("id==="+item.attributes.id+" "+ik)}
		item1 = item.firstChild.nextSibling.nextSibling;
		
		var i = 0;
		
		cnt1 = 0;
		
		for (item1 = item.firstChild.nextSibling.nextSibling.firstChild; item1 != null; item1 = item1.nextSibling){
			val = Number(item1.attributes.par1/1000);
			
			if(!val){val=0}
			val = Math.round(val*10)/10;
			
			
			
			cnt1 += val;
			regdata[item.attributes.id].findata[i].push(val);
			
			val = Number(item1.attributes.par2/1000);

	
			if(!val){val=0}

			val = Math.round(val*10)/10;
			
			
			
			cnt1 += val;
			regdata[item.attributes.id].findata[i].push(val);
			
						
			val = Number(item1.attributes.par3/1000);

			if(!val){val=0}

			val = Math.round(val*10)/10;

			
			cnt1 += val;
			regdata[item.attributes.id].findata[i].push(val);
			
			i++;

		}
		
		i = 0;
		for (item1 = item.firstChild.nextSibling.nextSibling.nextSibling.firstChild; item1 != null; item1 = item1.nextSibling){
			val = Number(item1.attributes.par1/1000);
			if(!val){val=0}
			val = Math.round(val*10)/10;
			cnt1 += val;
			regdata[item.attributes.id].findata[i][0]+=val;//<----
			
			val = Number(item1.attributes.par2/1000);
			if(!val){val=0}
			val = Math.round(val*10)/10;
			cnt1 += val;
			regdata[item.attributes.id].findata[i][1]+=val;//<----
			
			val = Number(item1.attributes.par3/1000);
			if(!val){val=0}
			val = Math.round(val*10)/10;
			cnt1 += val;
			regdata[item.attributes.id].findata[i][2]+=val;//<----
			regdata[item.attributes.id].findatasum[i] = regdata[item.attributes.id].findata[i][0] + regdata[item.attributes.id].findata[i][1] + regdata[item.attributes.id].findata[i][2];
			i++;
			
		}
		
		
		var tmptotal = 0;
		for(j=0;j<3;j++){
			for(k=0;k<3;k++){
			tmptotal+=regdata[item.attributes.id].findata[j][k];
			}
		}
		regdata[item.attributes.id].fintotal = tmptotal;//<----

	}
	trace("total========="+total)

	
	//total = 83;
	
	for(i=0;i<total;i++){
		for(k=0;k<critnum;k++){
			if(min2011[k]>Number(regdata[i].data2011[k])){min2011[k]=Number(regdata[i].data2011[k])};
			if(min2013[k]>Number(regdata[i].data2013[k])){min2013[k]=Number(regdata[i].data2013[k])};
			if(max2011[k]<Number(regdata[i].data2011[k])){max2011[k]=Number(regdata[i].data2011[k])};
			if(max2013[k]<Number(regdata[i].data2013[k])){max2013[k]=Number(regdata[i].data2013[k])};
																								 
			if(percmin[k]>Number(regdata[i].perc[k])){percmin[k]=Number(regdata[i].perc[k])};
			if(percmax[k]<Number(regdata[i].perc[k])){percmax[k]=Number(regdata[i].perc[k])};
		}
		if(fintotalmin>Number(regdata[i].fintotal)){fintotalmin=Number(regdata[i].fintotal)};
		if(fintotalmax<Number(regdata[i].fintotal)){fintotalmax=Number(regdata[i].fintotal)};
		
		for(j=0;j<3;j++){
			for(k=0;k<3;k++){
				if(minfin[j][k]>Number(regdata[i].findata[j][k])){minfin[j][k]=Number(regdata[i].findata[j][k])};
				if(maxfin[j][k]<Number(regdata[i].findata[j][k])){maxfin[j][k]=Number(regdata[i].findata[j][k])};
			}
			if(minfinsum[j]>Number(regdata[i].findatasum[j])){minfinsum[j]=Number(regdata[i].findatasum[j])};
			if(maxfinsum[j]<Number(regdata[i].findatasum[j])){maxfinsum[j]=Number(regdata[i].findatasum[j])};
		}
		
	}
	trace("minfinsum==="+minfinsum);
	trace("maxfinsum==="+maxfinsum);

	for(i=1;i<=3;i++){
		this["b"+i].num = i;
		this["b"+i].onRollOver = function(){
			this.gotoAndStop(2);
		}
		this["b"+i].onRollOut = this["b"+i].onDragOut = function(){
			this.gotoAndStop(1);
		}
		this["b"+i].onRelease = function(){
			this._parent["b"+_root.curr].gotoAndStop(1);
			this._parent["b"+_root.curr].enabled = true;
			this._parent["mc"+_root.curr]._visible = false;
			_root.curr = this.num;
			this.gotoAndStop(3);
			this.enabled = false;
			this._parent["mc"+_root.curr]._visible = true;
			
		}
	}
	b1.onRelease();
	
	mc1.init();
	mc2.init();
	mc3.init();
}