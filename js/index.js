(function(window, document) {
  'use strict'
  var App = require('lfa-core/app');
  var $ = require('bootstrap');
  require('jqmath');

  var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 57, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  var small_primes = [2, 3, 5, 7, 11];

  var assets = [
    'img/avatar/kat-angry.png',
    'img/avatar/kat-bored.png',
    'img/avatar/kat-happy.png',
    'img/avatar/kat-helpless.png',
    'img/avatar/kat-neutral.png',
    'img/avatar/kat-sad.png',
    'img/avatar/kat-sleeping.gif',
    'img/avatar/kat-smart.png',
    'img/avatar/kat-smile.png',
    'img/avatar/kat-uneasy.gif',
    'img/avatar/kat-unimpressed.png',
    'img/avatar/kat-upset.png',
    'img/avatar/kat-wink.png',
    'img/avatar/kat-wondering.gif',
    'img/8889827_orig.jpg',
    'img/divinity/1024px-Torah_and_jad.jpg',
    'img/divinity/10_divinity.jpg',
    'img/divinity/11_divinity.jpg',
    'img/divinity/1200px-Muslims_praying_in_a_Masque_in_Bangladesh.jpg',
    'img/divinity/12_divinity.jpg',
    'img/divinity/13_divinity.jpg',
    'img/divinity/14_divinity.jpg',
    'img/divinity/15_divinity.jpg',
    'img/divinity/16234468457_9ea749b5a3_k.jpg',
    'img/divinity/16_divinity.jpg',
    'img/divinity/17_divinity.jpg',
    'img/divinity/18_divinity.png',
    'img/divinity/19_divinity.png',
    'img/divinity/1_divinity.jpg',
    'img/divinity/20_divinity.png',
    'img/divinity/21_divinity.png',
    'img/divinity/22_divinity.jpg',
    'img/divinity/2_divinity.jpg',
    'img/divinity/3370859327_ec58a80992_o.jpg',
    'img/divinity/3_divinity.jpg',
    'img/divinity/4_divinity.png',
    'img/divinity/5195581117_a335862552_b.jpg',
    'img/divinity/599px-Portrait_Gandhi.jpg',
    'img/divinity/5_divinity.jpg',
    'img/divinity/6957067747_e0752a8b80_k.jpg',
    'img/divinity/7773906578_e33fc69840_k.jpg',
    'img/divinity/7_divinity.jpg',
    'img/divinity/8_divinity.jpg',
    'img/divinity/9_divinity.png',
    'img/divinity/A_school_of_untouchables_near_Bangalore_by_Lady_Ottoline_Morrell_2.jpg',
    'img/divinity/buddhism-buddha.jpg',
    'img/divinity/buddhism-cover.jpg',
    'img/divinity/Buddhist_monks.jpg',
    'img/divinity/ca74eb2fa169799f9135638c99443e82.jpg',
    'img/divinity/divinity-cover.jpg',
    'img/divinity/hinduism-cover.jpg',
    'img/divinity/islam-cover.jpg',
    'img/divinity/ivanov-resurection.jpg',
    'img/divinity/sikhism-cover.jpg',
    'img/divinity/The_Incredulity_of_Saint_Thomas_by_Caravaggio.jpg',
    'img/divinity/The_Victory_of_Buddha.jpg',
    'img/divinity/trimurti.jpg',
    'img/economics/6605979025_3796d3856e_o.jpg',
    'img/economics/economics-cover3.jpg',
    'img/economics/inequality-header.jpg',
    'img/economics/poverty-header.jpg',
    'img/economics/The-Spirit-Level.jpg',
    'img/lfdemo-logo.png',
    'img/lfdemo-logo2-white.jpg',
    'img/greyzz.png',
    'img/history/10_history.jpg',
    'img/history/1_history.png',
    'img/history/21-DEP1.jpg',
    'img/history/2_history.png',
    'img/history/3_history.jpg',
    'img/history/4_history.png',
    'img/history/5_history.jpg',
    'img/history/6_history.jpg',
    'img/history/7_history.jpg',
    'img/history/8_history.jpg',
    'img/history/9_history.jpg',
    'img/history/history-header.jpg',
    'img/history/ilw1889.jpg',
    'img/history/middle-east-no-names.png',
    'img/iranian_revolution.jpg',
    'img/isfahanPanel.jpg',
    'img/lorenz_curve.png',
    'img/Mass_demonstration.jpg',
    'img/mathematics/p-value.png',
    'img/mathematics/square.png',
    'img/mathematics/star.png',
    'img/mathematics/statistics-header.jpg',
    'img/mathematics/triangle.png'
  ];

  var GenerateQEquation = function(level) {
    var qe = document.getElementsByClassName("q-equation"); // The quadratic equation elements list
    qe[0].innerHTML = "$x^2 + 2x + 3 = 0$";
    switch (level) {
      case 1: 
        var r1 = Math.floor((Math.random() * 10) + 1);
        var r2 = Math.floor((Math.random() * 10) + 1);
        qe[0].innerHTML = "$x^2 - " + (r1 + r2) + "x  + " + (r1 * r2)  + "= 0$";
        break;
      case 2:
        var q1 = small_primes[Math.floor((Math.random() * small_primes.length) + 1)];
        var q2 = Math.floor((Math.random() * 10) + 1);
        qe[0].innerHTML = "$" + q1 + "x^2 + " + q2 + "x = 0$"
        break;
    }
  }

  var assetsPreloaded = false;

  App.book.on('render', function(opts) {
    if (!assetsPreloaded) {
      assets.forEach(function preloadAsset(url) {
        var i = new Image();
        i.src = url;
      });
      assetsPreloaded = true;
    }
    $('.footnote').popover({
      html: true,
      // container: 'body'
    });
    GenerateQEquation(1);
    $('#textbook').parseMath();
  });

})(this, document);
