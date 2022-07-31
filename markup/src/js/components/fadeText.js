export default function initFadeText() {
  var fadeContent = $('.fade');

  function fade(pageLoad) {
    var windowTop = $(window).scrollTop(), windowBottom = windowTop + $(window).innerHeight();
    var min = 0;
    var max = 1; 
    var threshold = 0;
    
    fadeContent.each(function() {
      var objectHeight = $(this).outerHeight();
      var objectTop = $(this).offset().top;
      var objectBottom = $(this).offset().top+objectHeight;
      
      if (objectTop < windowTop) {
        if (objectBottom > windowTop) {
          $(this).fadeTo(0, min + ((max-min) * ((objectBottom-windowTop) / objectHeight)));
        }

        else if ($(this).css('opacity') >= min+threshold || pageLoad) {
          $(this).fadeTo(0, min);
        }

      } else if (objectBottom > windowBottom) {
        if (objectTop < windowBottom) {
          $(this).fadeTo(0, min + ((max-min) * ((windowBottom-objectTop)/objectHeight)));
        }
        else if ($(this).css('opacity') >= min+threshold || pageLoad) { 
          $(this).fadeTo(0, min); 
        }
      } else if ($(this).css('opacity') <= max-threshold || pageLoad) { 
        $(this).fadeTo(0, max); 
      }
    });
  } fade(true); 
  $(window).on('scroll', function() { fade(false); }); 
}