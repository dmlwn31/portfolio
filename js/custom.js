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





//메잊페이지 클릭 이벤트
$(function(){
  $('#mainBoxImg2').click(function(){
      $('.dethImg').show();
      $('.welcomeImg').show(1500);
      $('.mainTit').show();
      $('#mainBoxImg1').hide();
      $('#mainBoxImg2').hide();
      $('#mainBoxImg3').show();
  });
});

