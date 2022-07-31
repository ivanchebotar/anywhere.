export default function initLeaveSearch() {
  $('#live-search').on('keyup', function () {
    var filter = $(this).val().trim().toLowerCase();
    var showError = true;

    $('.nav-list .nav-list__card-holder').each( function () {
      if ($(this).find('h4').text().toLowerCase().includes(filter)) {
        $(this).fadeIn();
        showError = false;

      } else {
        $(this).fadeOut();
      };
    });

    if (showError) {
      $('.no-result').fadeIn();
    } else {
      $('.no-result').hide();
    }
  });
}