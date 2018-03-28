'use strict';
var app = app || {};

(function (module) {

var bookView = {};

bookView.initIndexPage = () => {
    app.Books.all.forEach(a => $('#title-author').append(a.toHtml()));
  }

// Books.create = () => {
//     let bookView;
  
//     Books = new Books({
//       title: $('#title').val(),
//       author: $('#author').val(),
//     });
  
//     $('#something).append(Books.toHtml());
//   };


  module.bookView = bookView;
})(app);