$(document).ready(function(){
  var $body = $('.posts');
  

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
});