(function(){
  // var app = angular.module('portfolio', []);

  // app.controller('PicController', function(){

  // });

  $(document).ready(initialize);



  function initialize(){
    randomImage();
    randomGreeting();
    $('.options').click(fadeOut);
  }

  function fadeOut(){
    $('header').fadeOut('fast');
  }

  function randomImage(){

    var imageArray = new Array();

    imageArray[0] = "img/zilla1.png";
    imageArray[1] = "img/zilla2.png";
    imageArray[2] = "img/firefly2.png";
    imageArray[3] = "img/halo1.png";

    var rand = Math.floor(Math.random()*4);

    var imgPath = "<img class='animated fadeInDown' src='"+imageArray[rand]+"'/>";

    document.getElementById("image-target").innerHTML = imgPath;

}

  function randomGreeting(){
    var greetingArray = new Array();

    greetingArray[0] = 'Konnichiwa! Thats Japanese for Hello!';
    greetingArray[1] = 'Aloha! Thats Hawaiian for Hello!';
    greetingArray[2] = 'Hello There! Welcome!';

    var random = Math.floor(Math.random()*3);

    var greetPath = "<h2>"+greetingArray[random]+"</h2>";

    document.getElementById("greeting").innerHTML = greetPath;
  }












})();
