(function(){

  'use strict';

  $(document).ready(initialize);



  function initialize(){
    $('.options').click(fadeOut);
    randomImage();

  }

  function fadeOut(){
    $('header').fadeOut('fast');
  }

  function randomImage(){

    var imageArray = new Array();

    imageArray[0] = "img/zilla1.png";
    imageArray[1] = "img/zilla2.png";
    imageArray[2] = "img/zilla4.png";

    var rand = Math.floor(Math.random()*3);

    var imgPath = "<img class='animated fadeInDown' src='"+imageArray[rand]+"'/>";

    document.getElementById("image-target").innerHTML = imgPath;

}









})();
