'use strict';
var app = app || {};

(function (module) {

var bookView = {};

bookView.initIndexPage = () => {
    app.Books.all.forEach(a => $('#title-author').append(a.toHtml()));
  }
  module.bookView = bookView;
})(app);