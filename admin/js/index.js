$(document).ready(function(){

	$("#header_aside-btn").click(function(){
		if ($("#home").css("width")=="200px") {
			$("#home").css("width","60px");
			$("#home").find("span").css("display","none");
			$("#header_container").css("margin-left","60px");
		}else{			
			$("#home").css("width","200px");
			$("#home").find("span").css("display","inline-block");
			$("#header_container").css("margin-left","200px");
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
	
	/*左侧导航-滑动*/
	// $("#aside_nav ul li a").click(function(){
	// 	$(this).next().stop().slideToggle(233);
	// 	if($(this).find("span i:eq(0)").css("display")=="inline-block"){
	// 		$(this).find("span i:eq(0)").css("display","none");
	// 		$(this).find("span i:eq(1)").css("display","inline-block");	
	// 	}else{
	// 		$(this).find("span i:eq(0)").css("display","inline-block");
	// 		$(this).find("span i:eq(1)").css("display","none");	
	// 	}
	// });
	
	/*左侧导航-零级菜单控制一级菜单-树形（固定）-点击*/
	// $("#aside_nav .aside_nav-index0 li a").click(function(){
	// 	$("aside>.aside_nav-index1").remove();
	// 	if($(this).find("span i:eq(0)").css("display")=="inline-block"){
	// 		$("#aside_nav .aside_nav-index0 li a").each(function(){
	// 			$(this).find("span i:eq(0)").css("display","inline-block");
	// 			$(this).find("span i:eq(1)").css("display","none");
	// 		});
	// 		$(this).find("span i:eq(0)").css("display","none");
	// 		$(this).find("span i:eq(1)").css("display","inline-block");
	// 		$(this).next().clone().appendTo($("aside"));
	// 		var index1=$("aside>.aside_nav-index1");
	// 		var h=document.documentElement.clientHeight||document.body.clientHeight;
	// 		var indexHeight=0;
	// 		index1.children().each(function(){
	// 			indexHeight+=$(this).height();
	// 		});
	// 		if(indexHeight>(h-50)){
	// 			index1.height(h-50);
	// 		}else{
	// 			index1.height(indexHeight);
	// 		}
	// 		var r1=$(this).get(0).getBoundingClientRect();
	// 		index1.css("left","100%");
	// 		index1.css("top",r1.top);
	// 		index1.css("bottom","auto");
	// 		var r2=index1.get(0).getBoundingClientRect();
	// 		if(r2.bottom>h){
	// 			index1.css("top","auto");
	// 			index1.css("bottom",0);
	// 		}
	// 	}else{
	// 		$(this).find("span i:eq(0)").css("display","inline-block");
	// 		$(this).find("span i:eq(1)").css("display","none");
	// 	}				
	// });
	
	/*左侧导航-零级菜单控制一级菜单-树形（固定）-移入移出*/
	$("#aside_nav .aside_nav-index0 li a").hover(function(){
		$("aside>.aside_nav-index1").remove();
		if($(this).next().length>0){
			$(this).find("span i:eq(0)").css("display","none");
			$(this).find("span i:eq(1)").css("display","inline-block");
			$(this).next().clone().appendTo($("aside"));
			var index=$("aside>.aside_nav-index1");
			var h=document.documentElement.clientHeight||document.body.clientHeight;
			var indexHeight=0;
			index.children().each(function(){
				indexHeight+=$(this).height();
			});
			if(indexHeight>(h-50)){
				index.height(h-50);
			}else{
				index.height(indexHeight);
			}
			var r1=$(this).get(0).getBoundingClientRect();
			index.css("left","100%");
			index.css("top",r1.top);
			index.css("bottom","auto");
			var r2=index.get(0).getBoundingClientRect();
			if(r2.bottom>h){
				index.css("top","auto");
				index.css("bottom",0);
			}
		}
	},function(){
		var thisTemp0=$(this);			
		$(this).find("span i:eq(0)").css("display","inline-block");
		$(this).find("span i:eq(1)").css("display","none");
		$("aside>.aside_nav-index1").css("display","none");

		$("aside>.aside_nav-index1").hover(function(){
			thisTemp0.find("span i:eq(0)").css("display","none");
			thisTemp0.find("span i:eq(1)").css("display","inline-block");
			$("aside>.aside_nav-index1").css("display","block");

			/*二级菜单第一次显示冲突，初始化开始*/
			$(this).one("mousemove",function(e){
				var r=$(this).get(0).getBoundingClientRect();
				var temp1=Math.floor((e.pageY-r.top)/39);
				var temp2=$(this).children().eq(temp1).children("a");
				console.log(temp1);

				$("aside>.aside_nav-index2").remove();
				if(temp2.next().length>0){
					temp2.find("span i:eq(0)").css("display","none");
					temp2.find("span i:eq(1)").css("display","inline-block");
					temp2.next().clone().appendTo($("aside"));
					var index=$("aside>.aside_nav-index2");
					var h=document.documentElement.clientHeight||document.body.clientHeight;
					var indexHeight=0;
					index.children().each(function(){
						indexHeight+=$(this).height();
					});
					if(indexHeight>(h-50)){
						index.height(h-50);
					}else{
						index.height(indexHeight);
					}
					var r1=temp2.get(0).getBoundingClientRect();
					index.css("left","calc(100% + 160px)");
					index.css("top",r1.top);
					index.css("bottom","auto");
					var r2=index.get(0).getBoundingClientRect();
					if(r2.bottom>h){
						index.css("top","auto");
						index.css("bottom",0);
					}
				}

			});
			/*二级菜单第一次显示冲突，初始化结束*/

			/*左侧导航-一级菜单控制二级菜单-树形（固定）-移入移出-开始*/
			$("aside>.aside_nav-index1 li a").hover(function(){
				$("aside>.aside_nav-index2").remove();
				if($(this).next().length>0){
					$(this).find("span i:eq(0)").css("display","none");
					$(this).find("span i:eq(1)").css("display","inline-block");
					$(this).next().clone().appendTo($("aside"));
					var index=$("aside>.aside_nav-index2");
					var h=document.documentElement.clientHeight||document.body.clientHeight;
					var indexHeight=0;
					index.children().each(function(){
						indexHeight+=$(this).height();
					});
					if(indexHeight>(h-50)){
						index.height(h-50);
					}else{
						index.height(indexHeight);
					}
					var r1=$(this).get(0).getBoundingClientRect();
					index.css("left","calc(100% + 160px)");
					index.css("top",r1.top);
					index.css("bottom","auto");
					var r2=index.get(0).getBoundingClientRect();
					if(r2.bottom>h){
						index.css("top","auto");
						index.css("bottom",0);
					}
				}
			},function(){
				var thisTemp1=$(this);			
				$(this).find("span i:eq(0)").css("display","inline-block");
				$(this).find("span i:eq(1)").css("display","none");
				$("aside>.aside_nav-index2").css("display","none");

				$("aside>.aside_nav-index2").hover(function(){
					thisTemp0.find("span i:eq(0)").css("display","none");
					thisTemp0.find("span i:eq(1)").css("display","inline-block");
					thisTemp1.find("span i:eq(0)").css("display","none");
					thisTemp1.find("span i:eq(1)").css("display","inline-block");
					$("aside>.aside_nav-index1").css("display","block");
					$("aside>.aside_nav-index2").css("display","block");

					/*三级菜单第一次显示冲突，初始化开始*/

					/*三级菜单第一次显示冲突，初始化结束*/

					/*左侧导航-二级菜单控制三级菜单-树形（固定）-移入移出-开始*/

					/*左侧导航-二级菜单控制三级菜单-树形（固定）-移入移出-结束*/

				},function(){
					thisTemp0.find("span i:eq(0)").css("display","inline-block");
					thisTemp0.find("span i:eq(1)").css("display","none");
					thisTemp1.find("span i:eq(0)").css("display","inline-block");
					thisTemp1.find("span i:eq(1)").css("display","none");
					$("aside>.aside_nav-index1").css("display","none");
					$("aside>.aside_nav-index2").css("display","none");
				});
				
			});
			/*左侧导航-一级菜单控制二级菜单-树形（固定）-移入移出-结束*/

		},function(){
			thisTemp0.find("span i:eq(0)").css("display","inline-block");
			thisTemp0.find("span i:eq(1)").css("display","none");
			$("aside>.aside_nav-index1").css("display","none");
		});
		
	});

			


});
