jQuery(document).ready(function($) {

  var body = $('body');

  if(body.hasClass('background-blues')){
    $('a.background-blues').addClass('active');
  } else if(body.hasClass('background-color')){
    $('a.background-color').addClass('active');
  }

  body.on('click', '#Sorted div', function(){
    $(this).toggleClass('byebye');
  });

});