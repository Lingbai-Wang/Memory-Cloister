$(document).ready(function(){

	$("#header_aside-btn").click(function(){
		if ($("#home").css("width")=="200px") {
			$("#home").css("width","60px");
			$("#home").find("span").css("display","none");
			$("#header_container").css("margin-left","60px");
			$("aside").css("width","60px");
			$("#aside_container").css("width","60px");
			$("#aside_wrap").css("width","80px");
			$("#aside_wrap>*").css("width","60px");
			$("#aside_userinfo>a:eq(0)").css({
				"width":"30px",
				"height":"30px",
				"margin-bottom":"15px",
			});
			$("#aside_userinfo>a:eq(1)").css("display","none");
			$("#aside_wrap>.aside_line").css("display","none");
			$("#aside_nav>ul>.aside_nav-title").css("display","none");
			$("#aside_nav>ul>li").css("height","50px");
			$("#aside_nav>ul>li>a").css({
				"padding":"0",
				"height":"100%",
			});
			$("#aside_nav>ul>li>a>i").css({
				"width":"100%",
				"height":"100%",
				"font-size":"1rem",
				"text-align":"center",
				"line-height":"50px",
			});
			$("#aside_nav>ul>li>a>span").css("display","none");
			$("#content").css("margin-left","60px");
			$("footer").css("margin-left","60px");
		}else{			
			$("#home").css("width","");
			$("#home").find("span").css("display","");
			$("#header_container").css("margin-left","");
			$("aside").css("width","");
			$("#aside_container").css("width","");
			$("#aside_wrap").css("width","");
			$("#aside_wrap>*").css("width","");
			$("#aside_userinfo>a:eq(0)").css({
				"width":"",
				"height":"",
				"margin-bottom":"",
			});
			$("#aside_userinfo>a:eq(1)").css("display","");
			$("#aside_wrap>.aside_line").css("display","");
			$("#aside_nav>ul>.aside_nav-title").css("display","");
			$("#aside_nav>ul>li").css("height","");
			$("#aside_nav>ul>li>a").css({
				"padding":"",
				"height":"",
			});
			$("#aside_nav>ul>li>a>i").css({
				"width":"",
				"height":"",
				"font-size":"",
				"text-align":"",
				"line-height":"",
			});
			$("#aside_nav>ul>li>a>span").css("display","");
			$("#content").css("margin-left","");
			$("footer").css("margin-left","");
		}
	});

	$("#header_user-btn").click(function(){
		if($("#aside_userinfo").css("display")=="block"){
			$("#aside_userinfo").css("display","none");
			$("#aside_wrap>.aside_line").css("display","none");
		}else{
			$("#aside_userinfo").css("display","");
			if($("#home").css("width")=="200px"){
				$("#aside_wrap>.aside_line").css("display","");
			}
		}
	});

	$("#panel_btn").click(function(){
		if($("#panel").css("right")=="-242px"){
			$("#panel").css("right","0px");
		}else{
			$("#panel").css("right","");
		}
	});

	$("#panel_btn-0").click(function(){
		var panelBtnStatus=new Array(true,true,false,false,true,true);
		$(".panel_toggle").each(function(i){
			if(($(">i:eq(0)",this).css("display")=="inline-block"&&panelBtnStatus[i]==true)
				||($(">i:eq(0)",this).css("display")=="none"&&panelBtnStatus[i]==false)){
				$(this).triggerHandler("click");
			}
		});
	});

	$("#panel_btn-header").click(function(){
		if($(">i:eq(0)",this).css("display")=="inline-block"){
			$(">i:eq(0)",this).css("display","none");
			$(">i:eq(1)",this).css("display","inline-block");
			$("header").css("position","");
			$("#home").css({
				"position":"",
				"z-index":"",
				"height":"",
			});
			$("#content").css("padding-top","");
			if($(">i:eq(0)","#panel_btn-sidebar").css("display")=="inline-block"){
				$("aside").css("top","");
			}
		}else{
			$(">i:eq(0)",this).css("display","inline-block");
			$(">i:eq(1)",this).css("display","none");
			$("header").css("position","static");
			$("#home").css({
				"position":"fixed",
				"z-index":"100",
				"height":"50px",
			});
			$("#content").css("padding-top","0");
			if($(">i:eq(0)","#panel_btn-sidebar").css("display")=="inline-block"){
				$("aside").css("top","-50px");
				$("#home").css("position","relative");
			}
		}
	});

	$("#panel_btn-box").click(function(){
		if($(">i:eq(0)",this).css("display")=="inline-block"){
			$(">i:eq(0)",this).css("display","none");
			$(">i:eq(1)",this).css("display","inline-block");
			$("#layout").css("width","");
			$("header").css("width","");
		}else{
			$(">i:eq(0)",this).css("display","inline-block");
			$(">i:eq(1)",this).css("display","none");
			$("#layout").css("width","100%");
			$("header").css("width","100%");
		}
	});

	$("#panel_btn-nav1,#panel_btn-nav2,#panel_btn-nav3").click(function(){
		if($(">i:eq(0)",this).css("display")=="inline-block"){
			$(">i:eq(0)",this).css("display","none");
			$(">i:eq(1)",this).css("display","inline-block");
			var temp1=$(this);
			var temp2=-1;
			$("#panel_body>div").each(function(){
				temp2++;
				if($(">span:eq(1)",this).is(temp1)==true){
					return false;
				}
			});
			for(var i=2;i<5;i++){
				if($("#panel_body>div").eq(i).find("span:eq(1)").is(temp1)==false){
					$("#panel_body>div").eq(i).find("span:eq(1)").find("i:eq(0)").css("display","inline-block");
					$("#panel_body>div").eq(i).find("span:eq(1)").find("i:eq(1)").css("display","none");
				}
			}
			$("aside,aside *").off();
			$("aside>.aside_nav-index1").remove();
			$("aside>.aside_nav-index2").remove();
			$("#aside_nav ul li a").removeAttr("on-off");
			$("#aside_nav ul").css({
				"display":"",
			});
			$("#aside_nav ul li a").css({
				"display":"",
			});
			$("#aside_nav ul li a span i").css({
				"display":"",
			});
			switch(temp2){
				case 2:
					$("aside").on("nav1",nav1());
					break;
				case 3:
					$("aside").on("nav2",nav2());
					break;
				case 4:
					$("aside").on("nav3",nav3());
					break;
			}
		}
	});

	$("#panel_btn-sidebar").click(function(){
		if($(">i:eq(0)",this).css("display")=="inline-block"){
			$(">i:eq(0)",this).css("display","none");
			$(">i:eq(1)",this).css("display","inline-block");
			$("aside").css({
				"position":"",
				"float":"",
				"height":"",
			});
			if($(">i:eq(0)","#panel_btn-header").css("display")=="inline-block"){
				$("aside").css("top","");
				$("#home").css("position","fixed");
			}
		}else{
			$(">i:eq(0)",this).css("display","inline-block");
			$(">i:eq(1)",this).css("display","none");
			$("aside").css({
				"position":"relative",
				"float":"left",
				"height":$("#layout").height(),
			});
			if($(">i:eq(0)","#panel_btn-header").css("display")=="inline-block"){
				$("aside").css("top","-50px");
				$("#home").css("position","relative");
			}
		}
	});

	$("#panel_btn-0").triggerHandler("click");

	$("#content_aside-tabs-top-1,#content_aside-tabs-top-2,#content_aside-tabs-top-3").click(function(){
		$("#content_aside-tabs-top ul li a").css("border-bottom","");
		$("#content_aside-tabs-bottom>div").css("display","");
		$(this).css("border-bottom","1px #23b7e5 solid");
		var temp1=$(this);
		var temp2=-1;
		$("#content_aside-tabs-top ul li a").each(function(){
			temp2++;
			if($(this).is(temp1)==true){
				return false;
			}
		});
		$("#content_aside-tabs-bottom>div").eq(temp2).css("display","block");
	});

	$("#content_aside-tabs-top-1").triggerHandler("click");

	$("#content_alert-btn").click(function(){
		$("#content_alert").css("display","none");
	});

});
