$(function() {
  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });
  $('.close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });

  $('#login-btn').click(function(){
    $('#login-modal').fadeIn();
  });
  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
  });

  $('.twitter').click(function(){
    $('#twitter-modal').fadeIn();
  });
  $('.close-modal').click(function() {
    $('#twitter-modal').fadeOut();
  });

  $('.facebook').click(function(){
    $('#facebook-modal').fadeIn();
  });
  $('.close-modal').click(function() {
    $('#facebook-modal').fadeOut();
  });
})
