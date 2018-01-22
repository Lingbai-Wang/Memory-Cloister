$(document).ready(function(){

	function countdown(e){
		var now = new Date();
		var future = new Date(2018,1,16,0,0,0,0);
		var interval = future - now;

		if(interval >= 0){
			var day = Math.floor(interval / 1000 / 60 / 60 / 24);
			var hour = Math.floor(interval / 1000 / 60 / 60 % 24);
			var minute = Math.floor(interval / 1000 / 60 % 60);
			var second = Math.floor(interval / 1000 % 60);
			var millisecond = Math.floor(interval % 1000);
		}else{
			var day = Math.ceil(interval / 1000 / 60 / 60 / 24);
			var hour = Math.ceil(interval / 1000 / 60 / 60 % 24);
			var minute = Math.ceil(interval / 1000 / 60 % 60);
			var second = Math.ceil(interval / 1000 % 60);
			var millisecond = Math.ceil(interval % 1000);
		}

		day = format1(day);
		hour = format2(hour);
		minute = format2(minute);
		second = format2(second);
		millisecond = format3(millisecond);

		document.getElementById(e).innerHTML = day+" "+hour+":"+minute+":"+second+":"+millisecond;

		if(interval <= 0){
			window.clearInterval(countdownInterval1);
			/*由于机器运算速度达不到精度，因此手动归零，大概会有3毫秒的延迟*/
			document.getElementById(e).innerHTML = "0"+" "+"00"+":"+"00"+":"+"00"+":"+"000";
			/*以下三行代码作用是：倒计时归零后，将正常时间覆盖到已归零的倒计时上，如不需要此功能，可移除*/
			// var countdownInterval2 = setInterval(function(){
			// 	block(e);
			// },1);
		}
	}

	function block(e){
		var month1 = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
		var month2 = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
		var day1 = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
		var day2 = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var date = now.getDate();
		var day = day1[now.getDay()];
		var hour = now.getHours();
		var minute = now.getMinutes();
		var second = now.getSeconds();
		var millisecond = now.getMilliseconds();

		month = format2(month);
		date = format2(date);
		hour = format2(hour);
		minute = format2(minute);
		second = format2(second);
		millisecond = format3(millisecond);

		document.getElementById(e).innerHTML = year+"-"+month+"-"+date+" "+day+" "+hour+":"+minute+":"+second+":"+millisecond;
	}

	/*一位数不需要补零*/
	function format1(i){
		if(i < 0){
			// i = Math.abs(i);
		}
		return i;
	}

	/*二位数自动补零*/
	function format2(i){
		if(i <= -10 && i >= -99){
			// i = Math.abs(i);
		}else if(i < 0){
			i = Math.abs(i);
			i = "-0" + i;
		}else if(i <= 9){
			i = "0" + i;
		}else if(i <= 99){
			
		}
		return i;
	}

	/*三位数自动补零*/
	function format3(i){
		if(i <= -100 && i >= -999){
			// i = Math.abs(i);
		}else if(i <= -10){
			i = Math.abs(i);
			i = "-0" + i;
		}else if(i < 0){
			i = Math.abs(i);
			i = "-00" + i;
		}else if(i <= 9){
			i = "00" + i;
		}else if(i <= 99){
			i = "0" + i;
		}else if(i <= 999){

		}
		return i;
	}
	
	var countdownInterval1 = setInterval(function(){
		countdown("content_aside-time-countdown");
	},1);
	var blockInterval = setInterval(function(){
		block("content_aside-time-clock");
	},1);

});