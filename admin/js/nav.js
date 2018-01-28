/*左侧导航-切换-点击-开始*/
function nav1(){
	$("#aside_nav ul li a").click(function(){
		var temp=$(this);
		$("li a",$(this).parents(":eq(1)")).each(function(){
			if($(this).is(temp)==false){
				$(">span>i:eq(0)",this).css("display","");
				$(">span>i:eq(1)",this).css("display","");
				$(this).next().hide();
			}
		});
		$(this).next().toggle();
		if($(">span>i:eq(0)",this).css("display")=="inline-block"){
			$(">span>i:eq(0)",this).css("display","none");
			$(">span>i:eq(1)",this).css("display","inline-block");	
		}else{
			$(">span>i:eq(0)",this).css("display","");
			$(">span>i:eq(1)",this).css("display","");	
		}
	});
}
/*左侧导航-切换-点击-结束*/

/*左侧导航-树形-点击-开始*/
function nav2(){
	/*core1-开始*/
	function core1(aThis,index,indexLeft,indexWidth,clean){
		if(aThis.next().length>0){
			if(aThis.attr("on-off")=="off"){
				clean.each(function(){
					$(">span>i:eq(0)",this).css("display","inline-block");
					$(">span>i:eq(1)",this).css("display","none");
					$(this).attr("on-off","off");
				});
				$(">span>i:eq(0)",aThis).css("display","none");
				$(">span>i:eq(1)",aThis).css("display","inline-block");
				aThis.attr("on-off","on");
				aThis.next().clone().appendTo($("aside"));
				var h=document.documentElement.clientHeight||document.body.clientHeight;
				var indexHeight=0;
				$(index).children().each(function(){
					indexHeight+=$(this).height();
				});
				var headerHeight=$("header").height();
				if($(">i:eq(0)","#panel_btn-header").css("display")=="inline-block" 
					&& $(">i:eq(0)","#panel_btn-sidebar").css("display")=="inline-block"){
					headerHeight=0;
				}
				if(indexHeight>(h-headerHeight)){
					$(index).height(h-headerHeight);
					$(index).width(indexWidth-$(index).width()+indexWidth);
					/*extra-begin*/
					$(index).css("left",indexLeft);
					$(index).css("top","auto");
					$(index).css("bottom",0);
					return false;
					/*extra-end*/
				}
				var r1=aThis.get(0).getBoundingClientRect();
				$(index).css("left",indexLeft);
				$(index).css("top",r1.top);
				$(index).css("bottom","auto");
				var r2=$(index).get(0).getBoundingClientRect();
				/*original-begin*/
				// if(r2.bottom>h){
				// 	$(index).css("top","auto");
				// 	$(index).css("bottom",0);
				// }
				/*original-end*/
				/*extra-begin*/
				if(aThis.offset().top>($("#layout").height()-indexHeight)){
					$(index).css("top","auto");
					$(index).css("bottom",-($("#layout").height()-(window.pageYOffset+h)));
				}
				/*extra-end*/
			}else{
				$(">span>i:eq(0)",aThis).css("display","inline-block");
				$(">span>i:eq(1)",aThis).css("display","none");
				aThis.attr("on-off","off");
			}
		}else{
			clean.each(function(){
				$(">span>i:eq(0)",this).css("display","inline-block");
				$(">span>i:eq(1)",this).css("display","none");
				$(this).attr("on-off","off");
			});
		}
	}
	/*core1-结束*/

	/*core2-开始*/
	function core2(index,controllers){
		if(index.length>0){
			var h=document.documentElement.clientHeight||document.body.clientHeight;
			var h1=index.height();
			var controller;
			controllers.each(function(){
				if($(this).attr("on-off")=="on"){
					controller=$(this);
				}
			});
			var r1=controller.get(0).getBoundingClientRect();
			var r2=index.get(0).getBoundingClientRect();
			var headerHeight=$("header").height();
			if($(">i:eq(0)","#panel_btn-header").css("display")=="inline-block" 
				&& $(">i:eq(0)","#panel_btn-sidebar").css("display")=="inline-block"){
				headerHeight=0;
			}
			/*original-begin*/
			// if(index.height()<(h-headerHeight)){
			// 	if(r1.top<headerHeight){
			// 		index.css("top",headerHeight);
			// 		index.css("bottom","auto");
			// 	}else if(r1.top>(h-h1)){
			// 		index.css("top","auto");
			// 		index.css("bottom",0);
			// 	}else{
			// 		index.css("top",r1.top);
			// 		index.css("bottom","auto");
			// 	}
			// }
			/*original-end*/
			/*extra-begin*/
			if(index.height()<(h-headerHeight)){
				if(controller.offset().top>($("#layout").height()-h1)){
					index.css("top","auto");
					index.css("bottom",-($("#layout").height()-(window.pageYOffset+h)));
				}else{
					index.css("top",r1.top);
					index.css("bottom","auto");
				}
			}
			/*extra-end*/
		}
	}
	/*core2-结束*/

	/*左侧导航-树形-点击-零级菜单控制一级菜单（固定）-开始*/
	$("#aside_nav ul li a").attr("on-off","off");
	$("#aside_nav .aside_nav-index0>li>a").click(function(){
		$("aside>.aside_nav-index1").remove();
		$("aside>.aside_nav-index2").remove();

		core1($(this),"aside>.aside_nav-index1",$("aside").offset().left+$("aside").width()+0,160,$("#aside_nav .aside_nav-index0>li>a"));

		/*左侧导航-树形-点击-一级菜单控制二级菜单（固定）-开始*/
		$("aside>.aside_nav-index1>li>a").click(function(){
			$("aside>.aside_nav-index2").remove();

			core1($(this),"aside>.aside_nav-index2",$("aside").offset().left+$("aside").width()+160,160,$("aside>.aside_nav-index1>li>a"));

		});
		/*左侧导航-树形-点击-一级菜单控制二级菜单（固定）-结束*/

		/*左侧导航-树形-点击-一级菜单控制二级菜单（滚动）-开始*/
		$("aside>.aside_nav-index1").scroll(function(){
			
			core2($("aside>.aside_nav-index2"),$("aside>.aside_nav-index1>li>a"));

		});
		/*左侧导航-树形-点击-一级菜单控制二级菜单（滚动）-结束*/

	});
	/*左侧导航-树形-点击-零级菜单控制一级菜单（固定）-结束*/

	/*左侧导航-树形-点击-零级菜单控制一级菜单（滚动）-开始*/
	if($(">i:eq(0)","#panel_btn-sidebar").css("display")=="inline-block"){
		$(window).on("scroll",scrollComponent);
		$("#aside_wrap").on("scroll",scrollComponent);
	}else{
		$("#aside_wrap").on("scroll",scrollComponent);
	}
	function scrollComponent(){

		core2($("aside>.aside_nav-index1"),$("#aside_nav .aside_nav-index0>li>a"));

		core2($("aside>.aside_nav-index2"),$("aside>.aside_nav-index1>li>a"));

	};
	/*左侧导航-树形-点击-零级菜单控制一级菜单（滚动）-结束*/
}
/*左侧导航-树形-点击-结束*/

/*左侧导航-树形-移入移出-开始*/
function nav3(){
	/*core-开始*/
	function core(aThis,index,indexLeft,indexWidth){
		$(index).remove();
		if(aThis.next().length>0){
			aThis.find("span i:eq(0)").css("display","none");
			aThis.find("span i:eq(1)").css("display","inline-block");
			aThis.next().clone().appendTo($("aside"));
			var h=document.documentElement.clientHeight||document.body.clientHeight;
			var indexHeight=0;
			$(index).children().each(function(){
				indexHeight+=$(this).height();
			});
			var headerHeight=$("header").height();
			if($(">i:eq(0)","#panel_btn-header").css("display")=="inline-block" 
				&& $(">i:eq(0)","#panel_btn-sidebar").css("display")=="inline-block"){
				headerHeight=0;
			}
			if(indexHeight>(h-headerHeight)){
				$(index).height(h-headerHeight);
				$(index).width(indexWidth-$(index).width()+indexWidth);
			}
			var r1=aThis.get(0).getBoundingClientRect();
			$(index).css("left",indexLeft);
			$(index).css("top",r1.top);
			$(index).css("bottom","auto");
			var r2=$(index).get(0).getBoundingClientRect();
			if(r2.bottom>h){
				$(index).css("top","auto");
				$(index).css("bottom",0);
			}
		}
	}
	/*core-结束*/

	/*左侧导航-树形-移入移出-零级菜单控制一级菜单-开始*/
	$("#aside_nav .aside_nav-index0 li a").hover(function(){

		core($(this),"aside>.aside_nav-index1",$("aside").offset().left+$("aside").width()+0,160);

	},function(){
		var thisTemp0=$(this);			
		$(this).find("span i:eq(0)").css("display","inline-block");
		$(this).find("span i:eq(1)").css("display","none");
		$("aside>.aside_nav-index1").css("display","none");

		$("aside>.aside_nav-index1").hover(function(){
			thisTemp0.find("span i:eq(0)").css("display","none");
			thisTemp0.find("span i:eq(1)").css("display","inline-block");
			$("aside>.aside_nav-index1").css("display","block");

			/*二级菜单第一次显示-开始*/
			$(this).one("mousemove",function(e){
				var temp1=Math.floor((e.pageY-$(this).offset().top)
					/$(this).children().eq(0).height());
				var temp2=$(this).children().eq(temp1).children("a");

				core(temp2,"aside>.aside_nav-index2",$("aside").offset().left+$("aside").width()+160,160);

			});
			/*二级菜单第一次显示-结束*/

			/*左侧导航-树形-移入移出-一级菜单控制二级菜单-开始*/
			$("aside>.aside_nav-index1 li a").hover(function(){
				
				core($(this),"aside>.aside_nav-index2",$("aside").offset().left+$("aside").width()+160,160);

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

					/*三级菜单第一次显示-开始*/

					/*三级菜单第一次显示-结束*/

					/*左侧导航-树形-移入移出-二级菜单控制三级菜单-开始*/

					/*左侧导航-树形-移入移出-二级菜单控制三级菜单-结束*/

				},function(){
					thisTemp0.find("span i:eq(0)").css("display","inline-block");
					thisTemp0.find("span i:eq(1)").css("display","none");
					thisTemp1.find("span i:eq(0)").css("display","inline-block");
					thisTemp1.find("span i:eq(1)").css("display","none");
					$("aside>.aside_nav-index1").css("display","none");
					$("aside>.aside_nav-index2").css("display","none");
				});
				
			});
			/*左侧导航-树形-移入移出-一级菜单控制二级菜单-结束*/

		},function(){
			thisTemp0.find("span i:eq(0)").css("display","inline-block");
			thisTemp0.find("span i:eq(1)").css("display","none");
			$("aside>.aside_nav-index1").css("display","none");
		});
		
	});
	/*左侧导航-树形-移入移出-零级菜单控制一级菜单-结束*/
}
/*左侧导航-树形-移入移出-结束*/