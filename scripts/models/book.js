'use strict';
var app = app || {};

(function (module) {

function Books (rawDataObj) {
  this.title = rawDataObj.title;
  this.author = rawDataObj.author;
  this.isbn = rawDataObj.isbn;
  this.image_url = rawDataObj.image_url;
  this.description = rawDataObj.description;
}

Books.all = [];

Books.prototype.toHtml = function() {
  let template = Handlebars.compile($something)
  return template(this);
}

Books.loadAll = bookData;

//FETCH ALL
Books.fetchAll = () => {
  if (localStorage.rawData) {
    Books.loadAll(JSON.parse(localStorage.rawData));
      bookView.initIndexPage();
  } else {
    $.getJSON('http://localhost:3000/api/v1/books').then(results => console.log(results)).then(data => {
      Books.loadAll(data);
      localStorage.rawData = JSON.stringify(data);

      bookView.initIndexPage(); 
  }, err => {
      console.error(err);
  });
  }

  }
})(app)