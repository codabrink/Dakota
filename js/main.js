$(function() {
  setTimeout(function() {
    $('.ground-cloud').addClass('low');
    setTimeout(function() {
      $('.ground-cloud').remove();
      $('.cloud').removeClass('high');
      $('#ground').removeClass('low');
      $('#sun').removeClass('low');
      setTimeout(function() {
        $('#sun').addClass('setting');
        $('.tree').removeClass('low');
      }, 3000);
    }, 3000);
  }, 3000);
});
