'use strict';
var app = app || {};

(function (module) {

var bookView = {};

bookView.initIndexPage = () => {
    app.Books.all.forEach(a => $('#title-author').append(a.toHtml()));
  }
// need to edit the initDetailView
//create hb template and pass the book thru template and append to the page
bookView.initDetailView = (book) => {
  $('#book-list-template').hide();
  $('.detail-view-template').show();
  var template = Handlebars.compile($('#detail-view-template').text());
  // let selected = Books.all.filter(el => el.book_id = params.book_id)   //this line needs edits
  $('.detail-view').append(book); //this needs edited
}

  module.bookView = bookView;
})(app);
