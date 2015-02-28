$(document).ready(function(){
  var $body = $('.posts'),
      username = '';
  
  // RANDOM TWEETS ARE CREATED
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<article><h1></h1><h2></h2><p></p></article>');
  moment().startOf('day').fromNow();  
    
    $tweet.find('h1').text('@' + tweet.user);
    $tweet.find('h2').text('• ' + tweet.created_at);
    $tweet.find('p').text(tweet.message);
    $tweet.appendTo($body);
    index -= 1;
  }

  // WHEN YOU CLICK ON A USER NAME
  $('.posts h1').on('click', function(){
    username = $(this).text();
    $('.user').show();
    $('.user h1').text(username);
    $('.posts article').hide();
    $('h1:contains(' + username + ')').parent().show();
  });

  // WHEN YOU CLICK ON THE LOGO
  $('.navbar-brand').on('click', function(){
    $('.posts article').show();
    $('.user').hide();
  });

});