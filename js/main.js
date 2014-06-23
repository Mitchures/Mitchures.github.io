(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('.options').click(fadeOut);

  }

  function fadeOut(){
    $('header').fadeOut('fast');
  }







})();
