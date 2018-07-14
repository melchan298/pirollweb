var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
      slides[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " active";
    }

$('.progress-bar').each(function() {

  var valueNow = $(this).attr('aria-valuenow');

  $(this).animate({
    
    width: valueNow + '%',

    percent: 100

  }, {

    progress: function(a, p, n) {

      $(this)
        .css('width', (valueNow * p + '%'));

    }

  });

});
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll > 130) {
      $('#mainNav').addClass('light-menu');
    }
    else {
      $('#mainNav').removeClass('light-menu');
    }
});