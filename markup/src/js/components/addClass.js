export default function initAddingClass() {
  $(window).on('load', function () {
    setTimeout( function () {
      $('.animate-section').addClass('section-active');
    }, 1000)
  })

  $('#expolre-btn').on('click', function () {
    $('.body').addClass('menu-active');
  })

  $('.menu-overflow').on('click', function () {
    $('.body').removeClass('menu-active');
  })

  $('.option--list').on('click', function () {
    $('.nav-list').addClass('list');
    $('.option--list').addClass('option--active');
    $('.option--grid').removeClass('option--active');
  })

  $('.option--grid').on('click', function () {
    $('.nav-list').removeClass('list');
    $('.option--grid').addClass('option--active');
    $('.option--list').removeClass('option--active');
  })
}
