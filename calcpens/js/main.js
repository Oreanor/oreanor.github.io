$(document).ready(function(){


	var val0 = 0;
	var val1 = 0;
	var val2 = 0;
	var val3 = 0;


	var res0 = 0;
	var res1 = 0;
	var res2 = 0;

	$("#bHelp")
	.on("click",function(){
		$("#fader").css('visibility', "visible");
		$("#hint").css('visibility', "visible").css("opacity","0").clearQueue().animate({opacity:1},100);
	})
	$("#bClose")
	.on("click",function(){
		$("#fader").css('visibility', "hidden");
		$("#hint").css('visibility', "hidden");
	})
	$("#fader")
	.on("click",function(){
		$("#fader").css('visibility', "hidden");
		$("#hint").css('visibility', "hidden");
	})

	$(".vals").on("keyup",checkBtn);
	$(".vals").on("change",tryCalculate);
	$(".vals").on("focus",function(){
		var num = parseInt($(this).attr("id").substr(3,1));
		$("#pole"+num).css("color","#ffffff");
	});

	$(".vals").on("focusout",function(){
		var num = parseInt($(this).attr("id").substr(3,1));
		$("#pole"+num).css("color","#B7DDF0");
	});

	$(document).keypress(function(e) {
		if(e.which == 13) {
			console.log('You pressed enter!');
			tryCalculate();
		}
	});

	function checkBtn(){
		var val0 = parseInt($("#val0").val().replace(/\s/g, ''));
		var val1 = parseFloat($("#val1").val().replace(/\s/g, '').replace(",","."));
		var val2 = parseInt($("#val2").val().replace(/\s/g, ''));

		if(isNaN(val0)){val0=0}
		if(isNaN(val1)){val1=0}
		if(isNaN(val2)){val2=0}


		if(val0!=0||val1!=0||val2!=0){
			$("#bCalc").css("opacity","1").css("pointer-events","auto");

		} else {
			$("#bCalc").css("opacity","0.5").css("pointer-events","none");
		}
	}

	function tryCalculate(){

		var val0 = parseInt($("#val0").val().replace(/\s/g, ''));
		var val1 = parseFloat($("#val1").val().replace(/\s/g, '').replace(",","."));
		var val2 = parseInt($("#val2").val().replace(/\s/g, ''));
		var val3 = parseInt($("#val3").val().replace(/\s/g, ''));

		if(isNaN(val0)){val0=0}
		if(isNaN(val1)){val1=0}
		if(isNaN(val2)){val2=0}
		if(isNaN(val3)){val3=0}

		if(val0!=0||val1!=0||val2!=0){
			$("#bCalc").css("opacity","1").css("pointer-events","auto");

		} else {
			$("#bCalc").css("opacity","0.5").css("pointer-events","none");
		}

		$("#val0").val(formatNumber(val0));
		$("#val1").val(val1+"%");
		$("#val2").val(val2);
		$("#val3").val(formatNumber(val3));


		$("#bCalc").on("click",tryCalculate)



		var b7 = val0*12;
		var b8 = b7;
		if(b7>711000){b8=711000}
		var b9 = b8*0.06;
		var b10 = 19;

		val1/=100;


		//res0= b9*((1+val1)^val12-1)/((1+val1)-1)+val3*(1+val1)^val2;
		res0= b9*(Math.pow(1+val1, val2)-1)/((1+val1)-1)+val3*Math.pow(1+val1, val2);

		res1 = res0/b10/12;
		res2 = res0/10/12;

		if(isNaN(res0)){res0=0}
		if(isNaN(res1)){res1=0}
		if(isNaN(res2)){res2=0}

		res0 = Math.round(res0*100)/100;
		res1 = Math.round(res1*100)/100;
		res2 = Math.round(res2*100)/100;
	

		$("#res0").html(formatNumber(res0));
		$("#res1").html(formatNumber(res1));
		$("#res2").html(formatNumber(res2));

		console.log("tryCalculate " + res0);
		console.log("tryCalculate " + res1);
		console.log("tryCalculate " + res2);

		$("#bCalc").css("opacity","0.5").css("pointer-events","none");
	}

	function formatNumber(number) {
	   var comma = ' ',
	       string = Math.max(0, number).toFixed(0),
	       length = string.length,
	       end = /^\d{4,}$/.test(string) ? length % 3 : 0;
	   return (end ? string.slice(0, end) + comma : '') + string.slice(end).replace(/(\d{3})(?=\d)/g, '$1' + comma);
	  }




});

