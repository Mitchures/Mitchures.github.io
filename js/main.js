(function(){

  'use strict';

  var app = angular.module('mitch', ['custom-directives']);



  app.controller('ImageController', function(){

  });

  app.controller('LearnedController', function(){
    this.languages = languages;
  });

  var languages = [
    {
      name: 'HTML',
      link: 'http://en.wikipedia.org/wiki/HTML5'
    },
    {
      name: 'CSS',
      link: 'http://www.w3.org/Style/CSS/Overview.en.html'
    },
    {
      name: 'Javascript',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      name: 'LESS',
      link: 'http://lesscss.org/'
    },
    {
      name: 'JADE',
      link: 'http://jade-lang.com/'
    },
    {
      name: 'AJAX',
      link: 'http://en.wikipedia.org/wiki/Ajax_(programming)'
    },
    {
      name: 'jQuery',
      link: 'http://jquery.com/'
    },
    {
      name: 'Lo_Dash',
      link: 'http://lodash.com/'
    },
    {
      name: 'Ruby',
      link: 'http://ruby-doc.org/'
    },
    {
      name: 'Bootstrap',
      link: 'http://getbootstrap.com/'
    },
    {
      name: 'Vim',
      link: 'http://www.vim.org/'
    },
    {
      name: 'Atom',
      link: 'https://atom.io/'
    },
    {
      name: 'Sublime',
      link: 'http://www.sublimetext.com/'
    },
    {
      name: 'Brackets',
      link: 'http://brackets.io/'
    },
    {
      name: 'Terminal',
      link: 'http://en.wikipedia.org/wiki/Command-line_interface'
    },
    {
      name: 'Github / Git',
      link: 'https://github.com/'
    },
    {
      name: 'Grunt',
      link: 'http://gruntjs.com/'
    },
    {
      name: 'Firebase',
      link: 'https://www.firebase.com/'
    },
    {
      name: 'JS Hint',
      link: 'http://www.jshint.com/'
    },
    {
      name: 'Foundation',
      link: 'http://foundation.zurb.com/'
    },
    {
      name: 'Rails',
      link: 'http://guides.rubyonrails.org/'
    },
    {
      name: 'Sass',
      link: 'http://sass-lang.com/guide'
    },
    {
      name: 'Node.js',
      link: 'http://nodejs.org/'
    },
    {
      name: 'RSpec',
      link: 'http://rspec.info/'
    },
    {
      name: 'Heroku',
      link: 'http://heroku.com/'
    },
    {
      name: 'Haml',
      link: 'http://haml.info/'
    },
    {
      name: 'Github Pages',
      link: 'https://pages.github.com/'
    },
    {
      name: 'Jekyll',
      link: 'http://jekyllrb.com/'
    },
    {
      name: 'Angular.js',
      link: 'https://angularjs.org'
    }

  ];

//   $(document).ready(initialize);
//
//
//
//   function initialize(){
//     randomImage();
//     randomGreeting();
//     $('.options').click(fadeOut);
//   }
//
//   function fadeOut(){
//     $('header').fadeOut('fast');
//   }
//
//   function randomImage(){
//
//     var imageArray = new Array();
//
//     imageArray[0] = "img/zilla1.png";
//     imageArray[1] = "img/zilla2.png";
//     imageArray[2] = "img/firefly2.png";
//     imageArray[3] = "img/halo1.png";
//
//     var rand = Math.floor(Math.random()*4);
//
//     var imgPath = "<img class='animated fadeInDown' src='"+imageArray[rand]+"'/>";
//
//     document.getElementById("image-target").innerHTML = imgPath;
//
// }
//
//   function randomGreeting(){
//     var greetingArray = new Array();
//
//     greetingArray[0] = 'Konnichiwa! Thats Japanese for Hello!';
//     greetingArray[1] = 'Aloha! Thats Hawaiian for Hello!';
//     greetingArray[2] = 'Hello There! Welcome!';
//
//     var random = Math.floor(Math.random()*3);
//
//     var greetPath = "<h2>"+greetingArray[random]+"</h2>";
//
//     document.getElementById("greeting").innerHTML = greetPath;
//   }












})();
