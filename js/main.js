$(function() {
  setTimeout(function() {
    $('.ground-cloud').addClass('low');
    setTimeout(function() {
      $('.ground-cloud').remove();
      $('.cloud').removeClass('high');
      $('#ground').removeClass('low');
      $('#sun').removeClass('low');
    }, 3000);
  }, 3000);
});
