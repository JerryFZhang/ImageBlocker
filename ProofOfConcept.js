if(!window.jQuery)
{
(function(){
  var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();
}

setInterval(function() {
jQuery('img').removeAttr('src');
jQuery('video').removeAttr("src");
jQuery('img').removeAttr('data-src');
jQuery('img').removeAttr('srcset');
jQuery('source').removeAttr('srcset');

//$('.tcu-imageWrapper').removeAttr('data-style');
//$('.tcu-imageWrapper').removeAttr('style');
//$('.LiveVideoHomePageModule-postSlate').removeAttr('style');
//$('.PlayableMedia-player*').removeAttr('style');
jQuery('*').css("background-image", "");
console.log("done!");
}, 100);
