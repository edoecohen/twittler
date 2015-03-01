$(document).ready(function(){
  var $body = $('.posts'),
      username = '',
      textarea = $('.new-post textarea');

  // WHEN YOU CLICK ON A USER NAME
  $('.posts').on('click', 'h1', function(){
    username = $(this).text();
    $('.user').show();
    $('.user h1').text(username);
    $('.posts article').hide();
    $('h1:contains(' + username + ')').parent().show();
    $('.new-post').hide();
  });

  // WHEN YOU CLICK ON THE LOGO
  $('.navbar-brand').on('click', function(){
    $('.posts article').show();
    $('.user').hide();
    $('.new-post').show().find('textarea').val('').focusout();
  });

  // WHEN USER CREATES A NEW POST
  $('.new-post').on('click', 'button', function(event){
    //var textarea = $(this).parent().find('textarea');
    event.preventDefault();
    var post = textarea.val();
    var newTweet = $('<article><h1>@meMyself</h1><h2></h2><p></p></article>');
    var timeCreated = new moment().startOf('minute').fromNow();
    
    if(!textarea.val()){
      return false
    }
    else {
      newTweet.find('h2').text('• ' + timeCreated);
      newTweet.find('p').text(post);
      newTweet.prependTo($body);
      closeBox();
      $('.new-post button').addClass('btn-disabled');
    }
    
    // CLEAR TEXTAREA
    textarea.focusout();
    textarea.val('');
    $(this).focusout();
    newTweet = "";
  });

  // WHEN USER IS FOCUSED ON TEXTAREA FOR NEW POST
  textarea.focus(function(){
      $(this).animate({height:"75px"}, 100);
      $(this).parent().find('button').show();
  });
  
  textarea.on('keyup', function() {
    if(!$(this).val()){
      $(this).parent().find('button').addClass('btn-disabled');
    }
    else $(this).parent().find('button').removeClass('btn-disabled');
  });

  // WHEN USER EXITS FOCUS ON TEXTAREA
  textarea.focusout(function(){
    if(!$(this).val()){
      closeBox();
    };
  });

  // CLOSE POST BOX
  var closeBox = function(){
    textarea.animate({height:"35px"}, 100);
    textarea.parent().find('button').hide();
  };

});