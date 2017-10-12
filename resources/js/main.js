var scrollThreshold = 0;
$(window).scroll(function(){
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance >= (scrollThreshold + 50)) {
    var navbarHeight = $('.navbar').height();
    $('.navbar').animate({top: '-' + navbarHeight}, 150);
    scrollThreshold = scrollDistance;
  }else if (scrollThreshold >= (scrollDistance + 50)) {
    $('.navbar').animate({top: "0px"}, 150);
    scrollThreshold = scrollDistance;
  }
})
