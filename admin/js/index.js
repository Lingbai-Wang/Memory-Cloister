$(document).ready(function(){

	$("#home_aside-btn").click(function(){
		if ($("#home").css("width")=="200px") {
			$("#home").css("width","50px");
			$("#home_logo").css("display","none");
			$("#home_aside-btn").css("float","none");
			$("#header_container").css("margin-left","50px");
			$("aside").css("width","50px");
			$("#aside_container").css("width","50px");
			$("#aside_wrap").css("width","70px");
			$("#aside_wrap>*").css("width","50px");
			$("#aside_userinfo>a:eq(0)").css({
				"width":"30px",
				"height":"30px",
				"margin-bottom":"15px",
			});
			$("#aside_userinfo>a:eq(1)").css("display","none");
			$("#aside_wrap>.aside_line").css("display","none");
			$("#aside_search").css("display","none");
			$("#aside_nav>ul>.aside_nav-title").css("display","none");
			if($(">i:eq(0)","#panel_btn-nav1").css("display")=="none"){
				$("#aside_nav ul li a").css({
					"padding":"0",
				});
				$("#aside_nav ul li a>i").css({
					"width":"100%",
					"font-size":"1rem",
					"text-align":"center",
					"line-height":"50px",
				});
				$("#aside_nav ul li a span").css("display","none");
			}else{
				$("#aside_nav>ul>li>a").css({
					"padding":"0",
				});
				$("#aside_nav>ul>li>a>i").css({
					"width":"100%",
					"font-size":"1rem",
					"text-align":"center",
					"line-height":"50px",
				});
				$("#aside_nav>ul>li>a>span").css("display","none");
			}
			$("#content").css("margin-left","50px");
			$("footer").css("margin-left","50px");
		}else{			
			$("#home").css("width","");
			$("#home_logo").css("display","");
			$("#home_aside-btn").css("float","");
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
			if($("#aside_userinfo").css("display")=="block"){
				$("#aside_wrap>.aside_line").css("display","");
			}
			$("#aside_search").css("display","");
			$("#aside_nav>ul>.aside_nav-title").css("display","");
			if($(">i:eq(0)","#panel_btn-nav1").css("display")=="none"){
				$("#aside_nav ul li a").css({
					"padding":"",
				});
				$("#aside_nav ul li a>i").css({
					"width":"",
					"font-size":"",
					"text-align":"",
					"line-height":"",
				});
				$("#aside_nav ul li a span").css("display","");
			}else{
				$("#aside_nav>ul>li>a").css({
					"padding":"",
				});
				$("#aside_nav>ul>li>a>i").css({
					"width":"",
					"font-size":"",
					"text-align":"",
					"line-height":"",
				});
				$("#aside_nav>ul>li>a>span").css("display","");
			}
			$("#content").css("margin-left","");
			$("footer").css("margin-left","");
		}
	});

	$("#header_user-btn").click(function(){
		if($("#aside_userinfo").css("display")=="block"){
			$("#aside_userinfo").css("display","none");
			$("#aside_wrap>.aside_line").css("display","none");
			$("#aside_search").css("margin-top","16px");
		}else{
			$("#aside_userinfo").css("display","");
			if($("#home").css("width")=="200px"){
				$("#aside_wrap>.aside_line").css("display","");
			}
			$("#aside_search").css("margin-top","");
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
		var panelBtnStatus=new Array(true,true,true,false,false,true);
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
				$("aside").css("height",$("#layout").height());
				$("#aside_container").css({
					"margin-top":$("header").height(),
					"height":"calc(100% - "+$("header").height()+"px)",
				});
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
				$("#home").css("position","");
				$("aside").css("height",$("#layout").height()-$("header").height());
				$("#aside_container").css({
					"margin-top":"",
					"height":"100%",
				});
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
			$("#aside_container").css({
				"position":"",
				"margin-top":"",
				"height":"",
			});
			if($(">i:eq(0)","#panel_btn-header").css("display")=="inline-block"){
				$("#home").css("position","fixed");
			}
		}else{
			$(">i:eq(0)",this).css("display","inline-block");
			$(">i:eq(1)",this).css("display","none");
			$("aside").css({
				"position":"static",
				"float":"left",
				"height":$("#layout").height(),
			});
			$("#aside_container").css({
				"position":"static",
				"margin-top":$("header").height(),
				"height":"calc(100% - "+$("header").height()+"px)",
			});
			if($(">i:eq(0)","#panel_btn-header").css("display")=="inline-block"){
				$("#home").css("position","static");
				$("aside").css("height",$("#layout").height()-$("header").height());
				$("#aside_container").css({
					"margin-top":"",
					"height":"100%",
				});
			}
		}
		if($(">i:eq(0)","#panel_btn-nav2").css("display")=="none"){
			$("#panel_btn-nav3").triggerHandler("click");
			$("#panel_btn-nav2").triggerHandler("click");
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
			if($(">i:eq(0)","#panel_btn-nav1").css("display")=="none" 
				&& $("#home").css("width")=="50px"){
				$("#aside_nav ul li a").css({
					"padding":"",
				});
				$("#aside_nav ul li a>i").css({
					"width":"",
					"font-size":"",
					"text-align":"",
					"line-height":"",
				});
				$("#aside_nav ul li a span").css("display","");

				$("#aside_nav>ul>li>a").css({
					"padding":"0",
				});
				$("#aside_nav>ul>li>a>i").css({
					"width":"100%",
					"font-size":"1rem",
					"text-align":"center",
					"line-height":"50px",
				});
				$("#aside_nav>ul>li>a>span").css("display","none");
			}
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
			for(var i=3;i<6;i++){
				if($("#panel_body>div").eq(i).find("span:eq(1)").is(temp1)==false){
					$("#panel_body>div").eq(i).find("span:eq(1)").find("i:eq(0)").css("display","inline-block");
					$("#panel_body>div").eq(i).find("span:eq(1)").find("i:eq(1)").css("display","none");
				}
			}
			$(window).off("scroll");
			$("aside,aside *").off();
			$("aside>.aside_nav-index1").remove();
			$("aside>.aside_nav-index2").remove();
			$("#aside_nav ul li a").removeAttr("on-off");
			aColor2($("#aside_nav ul li a"));
			$("#aside_nav ul").css({
				"display":"",
			});
			$("#aside_nav ul li a").css({
				"display":"",
			});
			$("#aside_nav ul li a span i").css({
				"display":"",
			});
			if($(">i:eq(0)","#panel_btn-nav1").css("display")=="none" 
				&& $("#home").css("width")=="50px"){
				$("#aside_nav ul li a").css({
					"padding":"",
				});
				$("#aside_nav ul li a>i").css({
					"width":"",
					"font-size":"",
					"text-align":"",
					"line-height":"",
				});
				$("#aside_nav ul li a span").css("display","");

				$("#aside_nav ul li a").css({
					"padding":"0",
				});
				$("#aside_nav ul li a>i").css({
					"width":"100%",
					"font-size":"1rem",
					"text-align":"center",
					"line-height":"50px",
				});
				$("#aside_nav ul li a span").css("display","none");
			}
			switch(temp2){
				case 3:
					$("aside").on("nav1",nav1());
					break;
				case 4:
					$("aside").on("nav2",nav2());
					break;
				case 5:
					$("aside").on("nav3",nav3());
					break;
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
