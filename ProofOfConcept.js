(function(){
  var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();
setInterval(function() {
$('img').removeAttr('src');
$('video').removeAttr("src");
$('img').removeAttr('data-src');
$('img').removeAttr('srcset');
//$('.tcu-imageWrapper').removeAttr('data-style');
//$('.tcu-imageWrapper').removeAttr('style');
//$('.LiveVideoHomePageModule-postSlate').removeAttr('style');
//$('.PlayableMedia-player*').removeAttr('style');
$('*').css("background-image", "");
console.log("done!");
}, 100);
