export default function initSwitcher() {
  function btnSwitcher (theme) {
    var siblings = theme.siblings();
    
    siblings.each( function () {
      $(this).removeClass('theme-active');
    })
  
    theme.addClass('theme-active');
  }
  
  $(document).ready( function() {
    if (localStorage) { 
      var ind = localStorage['theme']       
      btnSwitcher($('.theme-switcher a').eq(ind));
    }

    if (localStorage.getItem('theme') == 1) {
      $('.body').addClass('dark-mode')
    } else {
      $('.body').removeClass('dark-mode')
    }
        
    $('.theme-switcher a').on('click', function (e) {
      if (localStorage) { 
        localStorage['theme'] = $(this).index(); 
      }

      if (localStorage.getItem('theme') == 1) {
        $('.body').addClass('dark-mode')
      } else {
        $('.body').removeClass('dark-mode')
      }

      btnSwitcher($(this));
    });
  });
}