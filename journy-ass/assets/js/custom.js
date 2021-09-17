$(document).ready(function() {
  winW =$(window).width();
  //alert(winW);
  let Mart = $('.journy__logo__right').outerHeight();
  $(".journy__infinite__newsletter").css('margin-top', Mart);
  $(".journy__logo__right img").css("max-width",winW/2 - 50);

});