/*
	命名：nav.js
	调用关系：被index.js调用
	作用：提供左侧导航三种使用方式的函数
	注意：不可添加 $(document).ready(); 方法，会导致调用时冲突
*/

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
	/*左侧导航-树形-点击-零级菜单控制一级菜单（固定）-开始*/
	$("#aside_nav ul li a").attr("on-off","off");
	$("#aside_nav .aside_nav-index0 li a").click(function(){
		$("aside>.aside_nav-index1").remove();
		$("aside>.aside_nav-index2").remove();
		if($(this).next().length>0){
			if($(this).attr("on-off")=="off"){
				$("#aside_nav .aside_nav-index0>li>a").each(function(){
					$(">span>i:eq(0)",this).css("display","inline-block");
					$(">span>i:eq(1)",this).css("display","none");
					$(this).attr("on-off","off");
				});
				$(">span>i:eq(0)",this).css("display","none");
				$(">span>i:eq(1)",this).css("display","inline-block");
				$(this).attr("on-off","on");
				$(this).next().clone().appendTo($("aside"));
				var index=$("aside>.aside_nav-index1");
				var h=document.documentElement.clientHeight||document.body.clientHeight;
				var indexHeight=0;
				index.children().each(function(){
					indexHeight+=$(this).height();
				});
				if(indexHeight>(h-50)){
					index.height(h-50);
					index.width(160-index.width()+160);
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
			}else{
				$(">span>i:eq(0)",this).css("display","inline-block");
				$(">span>i:eq(1)",this).css("display","none");
				$(this).attr("on-off","off");
			}
		}else{
			$("#aside_nav .aside_nav-index0>li>a").each(function(){
				$(">span>i:eq(0)",this).css("display","inline-block");
				$(">span>i:eq(1)",this).css("display","none");
				$(this).attr("on-off","off");
			});
		}
		
		/*左侧导航-树形-点击-一级菜单控制二级菜单（固定）-开始*/
		$("aside>.aside_nav-index1 li a").click(function(){
			$("aside>.aside_nav-index2").remove();
			if($(this).next().length>0){
				if($(this).attr("on-off")=="off"){
					$("aside>.aside_nav-index1>li>a").each(function(){
						$(">span>i:eq(0)",this).css("display","inline-block");
						$(">span>i:eq(1)",this).css("display","none");
						$(this).attr("on-off","off");
					});
					$(">span>i:eq(0)",this).css("display","none");
					$(">span>i:eq(1)",this).css("display","inline-block");
					$(this).attr("on-off","on");
					$(this).next().clone().appendTo($("aside"));
					var index=$("aside>.aside_nav-index2");
					var h=document.documentElement.clientHeight||document.body.clientHeight;
					var indexHeight=0;
					index.children().each(function(){
						indexHeight+=$(this).height();
					});
					if(indexHeight>(h-50)){
						index.height(h-50);
						index.width(160-index.width()+160);
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
				}else{
					$(">span>i:eq(0)",this).css("display","inline-block");
					$(">span>i:eq(1)",this).css("display","none");
					$(this).attr("on-off","off");
				}
			}else{
				$("aside>.aside_nav-index1>li>a").each(function(){
					$(">span>i:eq(0)",this).css("display","inline-block");
					$(">span>i:eq(1)",this).css("display","none");
					$(this).attr("on-off","off");
				});
			}
		});
		/*左侧导航-树形-点击-一级菜单控制二级菜单（固定）-结束*/

		/*左侧导航-树形-点击-一级菜单控制二级菜单（滚动）-开始*/
		$("aside>.aside_nav-index1").scroll(function(){
			
			if($("aside>.aside_nav-index2").length>0){
				var index=$("aside>.aside_nav-index2");
				var h=document.documentElement.clientHeight||document.body.clientHeight;
				var h1=index.height();
				var temp;
				$("aside>.aside_nav-index1>li>a").each(function(){
					if($(this).attr("on-off")=="on"){
						temp=$(this);
					}
				});
				var r1=temp.get(0).getBoundingClientRect();
				var r2=index.get(0).getBoundingClientRect();
				if(index.height()<(h-50)){
					if(r1.top<50){
						index.css("top",50);
						index.css("bottom","auto");
					}else if(r1.top>(h-h1)){
						index.css("top","auto");
						index.css("bottom",0);
					}else{
						index.css("top",r1.top);
						index.css("bottom","auto");
					}
				}
			}

		});
		/*左侧导航-树形-点击-一级菜单控制二级菜单（滚动）-结束*/

	});
	/*左侧导航-树形-点击-零级菜单控制一级菜单（固定）-结束*/

	/*左侧导航-树形-点击-零级菜单控制一级菜单（滚动）-开始*/
	$("#aside_wrap").scroll(function(){

		if($("aside>.aside_nav-index1").length>0){
			var index=$("aside>.aside_nav-index1");
			var h=document.documentElement.clientHeight||document.body.clientHeight;
			var h1=index.height();
			var temp;
			$("#aside_nav .aside_nav-index0>li>a").each(function(){
				if($(this).attr("on-off")=="on"){
					temp=$(this);
				}
			});
			var r1=temp.get(0).getBoundingClientRect();
			var r2=index.get(0).getBoundingClientRect();
			if(index.height()<(h-50)){
				if(r1.top<50){
					index.css("top",50);
					index.css("bottom","auto");
				}else if(r1.top>(h-h1)){
					index.css("top","auto");
					index.css("bottom",0);
				}else{
					index.css("top",r1.top);
					index.css("bottom","auto");
				}
			}
		}

		if($("aside>.aside_nav-index2").length>0){
			var index=$("aside>.aside_nav-index2");
			var h=document.documentElement.clientHeight||document.body.clientHeight;
			var h1=index.height();
			var temp;
			$("aside>.aside_nav-index1>li>a").each(function(){
				if($(this).attr("on-off")=="on"){
					temp=$(this);
				}
			});
			var r1=temp.get(0).getBoundingClientRect();
			var r2=index.get(0).getBoundingClientRect();
			if(index.height()<(h-50)){
				if(r1.top<50){
					index.css("top",50);
					index.css("bottom","auto");
				}else if(r1.top>(h-h1)){
					index.css("top","auto");
					index.css("bottom",0);
				}else{
					index.css("top",r1.top);
					index.css("bottom","auto");
				}
			}
		}

	});
	/*左侧导航-树形-点击-零级菜单控制一级菜单（滚动）-结束*/
}
/*左侧导航-树形-点击-结束*/

/*左侧导航-树形-移入移出-开始*/
function nav3(){
	/*左侧导航-树形-移入移出-零级菜单控制一级菜单-开始*/
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
				index.width(160-index.width()+160);
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

			/*二级菜单第一次显示-开始*/
			$(this).one("mousemove",function(e){
				var r=$(this).get(0).getBoundingClientRect();
				var temp1=Math.floor((e.pageY-r.top)/39);
				var temp2=$(this).children().eq(temp1).children("a");

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
						index.width(160-index.width()+160);
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
			/*二级菜单第一次显示-结束*/

			/*左侧导航-树形-移入移出-一级菜单控制二级菜单-开始*/
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
						index.width(160-index.width()+160);
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