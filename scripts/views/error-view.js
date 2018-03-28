'use strict';
var app = app || {};
var errorView = {};

(function (module) {

function initErrorPage(err) {
  $('.container').hide();
  $('.error-view').show();
  $('.error-view').empty();
  var template = Handlebars.compile($('#error-template').text());
  $('.error-view').append(template(err));
}

errorView.errorCallback = (err) => {
  console.log(err);
    initErrorPage(err);
  }

module.errorView = errorView;
})(app);



