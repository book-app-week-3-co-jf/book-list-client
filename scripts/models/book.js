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
//this will get invoked from the form
//we need to build the form so that everything can communicate with eachother
  Books.fetchOne = book_id => { //book_id is arbitrary, it can be called anything. But once it's named, the parameter has to be the same when you call it later
    $.getJSON(`http://localhost:3000/api/v1/books/${book_id}`) //find out how to grab one id from one book 
    .then(data => {
      console.log(data);
      Books.loadAll(data);
      callback();
    })
    .catch(err => app.errorView.errorCallback(err));
  }
  
  Books.fetchAll = callback => {
      $.getJSON('http://localhost:3000/api/v1/books')
      .then(data => { 
        console.log(data);
        Books.loadAll(data);
        callback();
      })
      .catch(err => app.errorView.errorCallback(err));
    }

  // Books.insertRecord = function(callback) {
  //     $.post('/api/v1/books', {title: this.tile, author: this.author})
  //       .then(data => {
  //         console.log(data);
  //         if (callback) callback();
  //       })
  //   };

    module.Books = Books;
}(app));