$(function(){



	/*导航begin*/
	$(".header_nav li").hover(function(){
		$(this).find("dl").stop().slideDown(233);
	},function(){
		$(this).find("dl").stop().slideUp(233);
	});
	$(".header_nav li dl dt").hover(function(){
		$(this).css("background-color","#7b8ec8");
        $(this).find("a").css("color","#FFF");
	},function(){
		$(this).css("background-color","#FFF");
        $(this).find("a").css("color","#000");
	});
	/*导航end*/



	/*轮播begin*/
	var container=document.getElementsByClassName('item_focus')[0].getElementsByClassName('container')[0];
    var list=container.getElementsByClassName('list')[0];
    var spans=container.getElementsByClassName('buttons')[0].getElementsByTagName('span');
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var index=1;//图片和图片下方小按钮的编号
    var animated=false;//表示当前是否正在执行切换，默认否
    var timer;//辅助play()和stop()
    /*play()和stop()控制图片自动播放和停止*/
    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 3000);//相当于每3000毫秒点一次右侧按钮
        /*另一种方法*/
        /*timer = setTimeout(function () {
            next.onclick();
            play();
        }, 300);*/
    }
    play();
    function stop() {
        clearInterval(timer);
        /*另一种方法*/
        /*clearTimeout(timer);*/
    }
    container.onmouseover=stop;
    container.onmouseout=play;
    /*下面函数控制：第index个轮播图片下方小按钮的亮起*/
    function showButtonSpan(){
        for(var i=0;i<spans.length;i++){
            if(spans[i].className=="on"){
                spans[i].className="";
                break;
            }
        }
        spans[index-1].className="on";
    }
    /*下面注释的函数直接切换图片，无等待时间*/
    /*
    function animate(offset){
        var newLeft=parseInt(list.style.left)+offset;
        list.style.left=newLeft+"px";
        if(newLeft>-600){
            list.style.left=-3000+"px";
        }
        if(newLeft<-3000){
            list.style.left=-600+"px";
        }
    }
    */
    /*animate函数传入偏移量，进行切换*/
    function animate(offset){
        animated=true;
        var newLeft=parseInt(list.style.left)+offset;
        var time=300;//理论位移总时间，不是真正的总时间，只是在抛开函数执行时间什么的之后，理论上的理想值，实际位移总时间大于理论位移总时间
        var interval=30;//小位移间隔的时间，在上条注释描述下，值越小，实际位移总时间越长，反之，值越大，实际位移总时间越小
        //interval越大，实际位移总时间就越接近理论位移总时间
        //interval应设置为可以被理论位移总时间除尽的数
        var speed=offset/(time/interval);//每次小位移量
        function go(){
            if(parseInt(list.style.left)!=newLeft){
                list.style.left=parseInt(list.style.left)+speed+"px";
                setTimeout(go,interval);
            }
            else{
                if(newLeft>-900){
                    list.style.left=-4500+"px";
                }
                if(newLeft<-4500){
                    list.style.left=-900+"px";
                }
                animated=false;
            }
        }
        go();
    }
    prev.onclick=function(){
        if(!animated){
            animate(900);
            if(index==1){
                index=5;
            }
            else{
                index--;
            }
            showButtonSpan();
        }
    }
    next.onclick=function(){
        if(!animated){
            animate(-900);
            if(index==5){
                index=1;
            }
            else{
                index++;
            }
            showButtonSpan();
        }
    }
    /*下面for循环控制：当用户直接点击轮播下方小按钮时发生的事件*/
    for(var i=0;i<spans.length;i++){
        spans[i].onclick=function(){
            if(this.className=="on"){
                return;
            }
            var nextNum=parseInt(this.getAttribute("num"));//用户点击的按钮编号
            var newOffset=(nextNum-index)*(-900);//通过计算获得用户点击的按钮编号与之前的按钮编号对应的图片的偏移量
            if(!animated){
                animate(newOffset);
                index=nextNum;
                showButtonSpan();
            }
        }
    }
    /*轮播end*/




});

