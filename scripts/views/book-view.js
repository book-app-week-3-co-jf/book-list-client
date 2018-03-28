'use strict';
var app = app || {};

(function (module) {

var bookView = {};

bookView.initIndexPage = () => {
    app.Books.all.forEach(a => $('#title-author').append(a.toHtml()));
  }
// need to edit the initDetailView 
bookView.initDetailView(err) {
  $('.container').hide();  
  $('.form-view').hide();
  $('.detail-view').show(); 
  let selected = Books.all.filter(el => el.book_id = params.book_id)   //this line needs edits
  $('#book-detail-view').append(selected[0](err)); //this needs edited
}


  module.bookView = bookView;
})(app);