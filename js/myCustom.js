(function($) {
  //Changes background color of navbar when scrolling down
  //Adapted from: https://medium.com/@_patrickcameron/a-complete-beginner-s-guide-to-changing-background-colour-on-scroll-using-jquery-fce686d55049
  $(window).scroll(function() {
    if($(this).scrollTop() > 300) {
      $('body').addClass('dynamic-color');
      document.getElementById("logo").src="images/logo-color-resize.png"
    }
    if($(this).scrollTop() < 300) {
      $('body').removeClass('dynamic-color')
      document.getElementById("logo").src="images/logo-color.png"
    }
  });


  //Taken from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


})(jQuery);

var index = 0;
function startup() {

  //Animating welcome message on startup
  //Adapted from: https://www.w3schools.com/howto/howto_js_animate.asp
  var text = document.getElementById("title");
  let message = 'Hello world! My name is Izabela.';
  var numChar = 0;
  var id = setInterval(frame, 55);

  function frame() {
    if(numChar == message.length) {
      clearInterval(id);
      cursorBlink();
    } else {
      text.innerHTML = text.innerHTML + message[numChar];
      numChar++;
    }
  }
  return;
}

function cursorBlink() {
  index++;
  if(index % 2 == 0) {
    document.getElementById("title").innerHTML = "Hello world! My name is Izabela.|";
  }
  else {
    document.getElementById("title").innerHTML = "Hello world! My name is Izabela.&nbsp";
  }
  setTimeout("cursorBlink()", 500);
  return;
}
