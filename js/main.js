$(function() {
  //cloud_float($('#c1'), 14000);
  //cloud_float($('#c2'), 20000);
  //cloud_float($('#c3'), 26000);

  setTimeout(function() {
    $('.cloud').addClass('low');
  }, 3000);

});


function cloud_float(cloud, time) {
  cloud.animate({
    left: '-=750px'
  }, time, 'linear', function() {
    cloud.css('left', '0');
    cloud_float(cloud, time);
  });  
}
