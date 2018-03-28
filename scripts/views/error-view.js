'use strict';
var app = app || {};
var errorView = {};

(function (module) {

errorView.initErrorPage = (err) => {
  $('.container').hide();
  $('.error-view').show();
  $('.error-view').empty();
var template = Handlebars.compile($('#error-template'))
$('.error-view').append(template(err));
}
  module.errorView = errorView;
})(app);
