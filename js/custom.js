//네비게이션 클릭시 scroll
$(document).ready(function () {
  
});
$("#navHome").click(function () {
  var offset = $("#section_01").offset(); //선택한 태그의 위치를 반환

  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#navProfile").click(function () {
  var offset = $("#section_02").offset();

  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#navWebsite").click(function () {
  var offset = $("#section_03").offset();
  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#navOtherproject").click(function () {
  var offset = $("#section_04").offset();
  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#navIntroduction").click(function () {
  var offset = $("#section_05").offset();
  $("html").animate({ scrollTop: offset.top }, 400);
});

$("#navContact").click(function () {
  var offset = $("#section_06").offset();
  $("html").animate({ scrollTop: offset.top }, 400);
});





//메인페이지 클릭 이벤트
$(function(){
  $('#mainBoxImg2').click(function(){
      $('.dethImg').show();
      $('.welcomeImg').show(1500);
      $('#mainBoxImg1').hide();
      $('#mainBoxImg2').hide();
      $('#mainBoxImg3').show();
      $('.tree').show();
      setTimeout(function () {
        
        $('.mainTit').show(1500);
    },1000);
  })
});



 
// 섹션 3 가로 스크롤
  $(".portfolioCon").on('mousewheel',function(e){

		var wheelDelta = e.originalEvent.wheelDelta;

		if(wheelDelta > 0){

			console.log("up");

			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

		}else{

		console.log("down");

			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
		}
});




// 세로 스크롤 휠 막기
$(".portfolioCon").on('scroll touchmove mousewheel', function(e){

  e.preventDefault();
  
  e.stopPropagation(); 
  
  return false;
  
  })

  
  
//   window.onload = function () {
//     var elm = ".PortfolioBox";
//     $(elm).each(function (index) {
//         // 개별적으로 Wheel 이벤트 적용
//         $(this).on("mousewheel DOMMouseScroll", function (e) {
//             e.preventDefault();
//             var delta = 0;
//             if (!event) event = window.event;
//             if (event.wheelDelta) {
//                 delta = event.wheelDelta / 120;
//                 if (window.opera) delta = -delta;
//             } 
//             else if (event.detail)
//                 delta = -event.detail / 3;
//             var moveTop = $(window).scrollLeft();
//             var elmSelecter = $(elm).eq(index);
//             // 마우스휠을 위에서 아래로
//             if (delta < 0) {
//                 if ($(elmSelecter).next() != undefined) {
//                     try{
//                         moveTop = $(elmSelecter).next().offset().left;
//                     }catch(e){}
//                 }
//             // 마우스휠을 아래에서 위로
//             } else {
//                 if ($(elmSelecter).prev() != undefined) {
//                     try{
//                         moveTop = $(elmSelecter).prev().offset().right;
//                     }catch(e){}
//                 }
//             }
             
//             // 화면 이동 0.8초(800)
//             $(".portfolioCon").stop().animate({
//                 scrollLeft: moveTop + 'px'
//             }, {
//                 duration: 800, complete: function () {
//                 }
//             });
//         });
//     });
// }