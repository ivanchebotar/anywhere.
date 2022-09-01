export default function initValidation() {
  jQuery('.validation-holder').each(function () {
    var holder = jQuery(this);
    var structure = '<div class="validation">' +
                    '<div class="validation__img">' +
                      '<img src="images/img32.png" alt="smiling girl">' +
                    '</div>' +
                    '<h2 class="validation__title">Hi! Welcome to <span>Anywhere</span>.</h2>' +
                    '<p class="validation__text">Please, enter your password to start using the platform.</p>' +
                    '<div class="validation__form">' +
                      '<form class="form">' +
                        '<div class="input-holder">' +
                          '<input type="password" autocomplete="on" placeholder="Enter password">' +
                          '<span id="hint-error" class="hint hint--error">Invalid password</span>' +
                        '</div>' +
                        '<button id="submit" type="submit" class="btn btn--primary btn--primary--alt">Submit</button>' +
                      '</form>' +
                    '</div>' +
                  '</div>'

    holder.html(structure);

    var inputHolder = jQuery(this).find('.input-holder');
    var formInput = jQuery(this).find('input');
    var formSubmit = jQuery(this).find('button');
    var hintError = jQuery(this).find('#hint-error');
    var pass = 'Welc0m2022$';

    if (localStorage.enterance == 22) { 
      holder.addClass('done');
      holder.html('');
    }

    formSubmit.on('click', function (e) {
      e.preventDefault();

      if (formInput.val() == pass) {
        document.location.reload();
        localStorage.setItem('enterance', 22);

        setTimeout( function () {
          if (document.location.reload()) {
            holder.addClass('done');
          }
        }, 1000)

      } else {
        hintError.addClass('show');
        inputHolder.addClass('error');
      }
    });

    formInput.on('focus', function (e) {
      inputHolder.removeClass('error');
    });
  });
}