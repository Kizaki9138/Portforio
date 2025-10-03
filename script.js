$(function(){
  $('a[href^="#"]').click(function(e){
    e.preventDefault(); // デフォルト動作を無効化
    var href = $(this).attr('href');
    var target = href === "#" || href === "" ? $('html') : $(href);
    var position = target.offset().top - 80;

    $('html,body').animate({scrollTop:position},600,"swing");
  });
});
