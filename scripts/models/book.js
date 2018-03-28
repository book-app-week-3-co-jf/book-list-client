'use strict';
var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'insert cloud API server URL here';
ENV.developmentApiUrl = 'insert local API server URL here';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function (module) {

  function Books (rawDataObj) {
    this.title = rawDataObj.title;
    this.author = rawDataObj.author;
    this.isbn = rawDataObj.isbn;
    this.image_url = rawDataObj.image_url;
    this.description = rawDataObj.description;
    Books.all.push(this);
  }

  Books.all = [];

  Books.prototype.toHtml = function() {
    console.log(this);
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  }

  Books.loadAll = rows => Books.all = rows.sort((a, b) => a.title - b.title).map(book => new Books(book));
  
  Books.fetchAll = callback => {
      $.getJSON('http://localhost:3000/api/v1/books')
      .then(data => { 
        console.log(data);
        Books.loadAll(data);
        callback();
      })
      .catch(err => app.errorView.errorCallback(err));
    }
    module.Books = Books;
}(app));