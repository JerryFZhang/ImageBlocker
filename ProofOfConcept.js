setInterval(function() {
$('img').removeAttr('src');
$('video').removeAttr("src");
$('img').removeAttr('data-src');
$('.tcu-imageWrapper').removeAttr('data-style');
$('.tcu-imageWrapper').removeAttr('style');
console.log("done!");
}, 100);
