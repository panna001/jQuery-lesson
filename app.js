$(function(){
  $('.box1').slideDown(2000,function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '100px'
    }).slideUp(1500);
  });
});