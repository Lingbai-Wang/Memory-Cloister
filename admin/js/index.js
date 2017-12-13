$(document).ready(function(){

	var i=0;
	$("#header_aside-btn").click(function(){
		if (i==0) {
			$("#home").css("width","200px");
			$("#home").find("span").css("display","inline-block");
			$("#header_container").css("margin-left","200px");
			i=1;
		}else{
			$("#home").css("width","60px");
			$("#home").find("span").css("display","none");
			$("#header_container").css("margin-left","60px");
			i=0;
		}
	});

	$("#header_user-btn").click(function(){
		if($("#aside_userinfo").css("display")=="block"){
			$("#aside_userinfo").css("display","none");
			$(".aside_line:eq(0)").css("display","none");
		}else{
			$("#aside_userinfo").css("display","block");
			$(".aside_line:eq(0)").css("display","block");
		}
	});
	
	$("#aside_nav ul li a").click(function(){
		$(this).next().stop().slideToggle(233);
		if($(this).find("span i:eq(0)").css("display")=="inline-block"){
			$(this).find("span i:eq(0)").css("display","none");
			$(this).find("span i:eq(1)").css("display","inline-block");	
		}else{
			$(this).find("span i:eq(0)").css("display","inline-block");
			$(this).find("span i:eq(1)").css("display","none");	
		}
	});

});
