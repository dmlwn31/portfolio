$(".top").click(function () {
  var offset = $(".nav").offset(); 
  $("html").animate({ scrollTop: offset.top }, 400);
});



jQuery(function($){
  $(window).scroll(function () {
    if($(window).scrollTop() > 70) {
     $('.top').show(300);
     $('.back').css('margin-top','-60px');
    } else {
     $('.top').hide(300);
     $('.back').css('margin-top', '30px');
    }
   });
  
  });


  
  


