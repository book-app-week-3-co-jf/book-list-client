'use strict';
var app = app || {};

(function (module) {

var bookView = {};

bookView.initIndexPage = () => {
  $('#title-author').empty();
  $('.container').show();
  app.Books.all.forEach(a => $('#title-author').append(a.toHtml()));
  }

bookView.initDetailView = (book) => {
  $('.container').hide();
  $('.detail-view').show();
  $('.detail').show();
  var template = Handlebars.compile($('#detail-view-template').text());
  $('.detail-view').append(template(book)); 
}

bookView.initFormPage = (form) => {
  $('.container').hide();
  $('#write').show().on('submit') //write a function to pass in as second arg. 

}

  module.bookView = bookView;
})(app);
