$(function(){
    //スキルのバーを動かす
    $('.skill').on('inview', function() {
        $('.bar').addClass('slidein');
        $('.percent').addClass('fadein');
  });

});