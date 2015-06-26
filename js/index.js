(function(window, document) {
  'use strict';
  
  var App = require('lfa-core/app');
  var $ = require('bootstrap');
  require('jqmath');
  var FakeNameGenerator = require('./fake-name-generator');
  var ClassMateList = require('lfa-classroom/views/classmate-list');
  var NameInput = require('lfa-classroom/views/name-input');

  FakeNameGenerator.registerRandomName();

  App.book.on('render', function( /*opts*/ ) {
    var studentList = document.getElementById('student-list');
    var nameInput = document.getElementById('name-input');

    $('#textbook').parseMath();
    $('#textbook').removeClass('lfdemo-slide-container');

    if ($('.lfdemo-slide-contents').length > 0) {
      $('#textbook').addClass('lfdemo-slide-container');
    }

    setTimeout(function() {
        App.trigger('avatar:say', 'Welcome!')
      },
      4000);

    if (studentList) {
      React.render(
        React.createElement(ClassMateList, null), studentList
      );
    }

    if (nameInput) {
      React.render(
        React.createElement(NameInput, null), nameInput
      );
    }

  });



})(this, document);