$(function(){
    //スキルのバーを動かす
    $('#start_bar_animation').on('inview', function() {
      $('.bar').addClass('slidein');
      $('.percent').addClass('fadein');
  });

});