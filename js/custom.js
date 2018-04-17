/*
파일명 : custom.js
작성자 :최은혜
설명 : 마우스 휠 plugin을 사용하여 스크롤되는 웹페이지
*/

$(document).ready(function(){

	var ht = $(window).height();

	$("section").height(ht);

	//브라우저가 리사이즈될 때마다 브라우저와 section의 높이 값을 갱신
	$(window).on("resize",function(){
		var ht = $(window).height();
		$("section").height(ht);
	});

	$("section").on("mousemove" , function(e){
		//변수 posX에 마우스 커서의 x축 위치 저장
		var posX = e.pageX;
		//변수 posY에 마우스 커서의 y축 위치 저장
		var posY = e.pageY;

		//첫번째 박스의 이미지 위치 값을 마우스 커서의 위치 값과 연동
		$(".p11").css({"right":20-(posX/30) , "bottom":20-(posY/30)});
		$(".p12").css({"right":130+(posX/20) , "bottom":-40+(posY/20)});
		$(".p13").css({"right":60+(posX/20) , "top":180+(posY/20)});

		//두번째 박스의 이미지 위치 값을 마우스 커서의 위치 값과 연동
		$(".p21").css({"right":-180-(posX/30) , "bottom":-480-(posY/30)});
		$(".p22").css({"right":130+(posX/50) , "bottom":-40+(posY/50)});

		//세번째 박스의 이미지 위치 값을 마우스 커서의 위치 값과 연동
		$(".p31").css({"right":280-(posX/30) , "bottom":30-(posY/30)});
		$(".p32").css({"right":110+(posX/20) , "bottom":-270+(posY/20)});
		$(".p33").css({"right":-70+(posX/20) , "top":-130+(posY/20)});

		//네번째 박스의 이미지 위치 값을 마우스 커서의 위치 값과 연동
		$(".p41").css({"right":20-(posX/30) , "bottom":-120-(posY/30)});
		$(".p42").css({"right":0+(posX/20) , "bottom":-180+(posY/20)});

	});

	$("#menu li").on("click",function(e){
		e.preventDefault();


		var ht = $(window).height();
		var i = $(this).index();
		var nowTop = i * ht;

		$('html, body').stop().animate({"scrollTop":nowTop},800);
	});

	$(window).on('scroll',function(){

		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		for(var i=0;i<5;i++){
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$('#menu li').removeClass();
				$('#menu li').eq(i).addClass('on');
			}
		}
	});

//section 위에서 마운스 휠을 움직이면
	$("section").on("mousewheel", function(event,delta){

		//마우스 휠을 올렸을때
		if(delta>0){

			var prev = $(this).prev().offset().top;

			$('html,body').stop().animate({"scrollTop":prev},1100,'easeOutBounce');

		}else if(delta<0){

		//마우스 휠을 내렸을때


			var next = $(this).next().offset().top;

			$('html,body').stop().animate({"scrollTop":next},1100,'easeOutBounce');
		}
	});



});//end














//
