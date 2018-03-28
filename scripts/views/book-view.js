'use strict';
var app = app || {};

(function (module) {

var bookView = {};

bookView.initIndexPage = () => {
    console.log('inside of init idex')
    app.Books.all.forEach(a => $('#title-author').append(a.toHtml()));
  }
  module.bookView = bookView;
})(app);