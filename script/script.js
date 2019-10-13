$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active');
  });
  $(window).scroll(function() {

      if ($(this).scrollTop()>0)
       {
          $('#navbar').css('margin-top',0);
       }
      else
       {
        $('#navbar').css('margin-top',37);
       }
   });

   $("#scrollbtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#linetitle").offset().top
    }, 1000);
});

});
