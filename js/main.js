(function(){

  'use strict';

  $(document).ready(initialize);



  function initialize(){
    $('#footer_wrap').load('footer.html');
    $('.options').click(fadeOut);

  }

  function fadeOut(){
    $('header').fadeOut('fast');
  }









})();
