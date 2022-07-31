export default function initAccordion() {
  let accordionOpener = $('.accordion__opener');
  let accordionContent = $('.accordion__content');

  accordionOpener.each( function (i) {
    $(this).on('click', function () {
      accordionOpener.each( function (e) {
        if (i == e) {
          $(this).toggleClass('accordion__opener--active');

        } else {
          $(this).removeClass('accordion__opener--active');
        }
      })

      accordionContent.each( function (e) {
        if (i == e) {
          $(this).slideToggle(300);

        } else {
          $(this).slideUp(300);
        }
      })
    })
  })
}
