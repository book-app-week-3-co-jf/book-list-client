page('/', app.bookView.initIndexPage);
page('/books/:book_id', Books.fetchOne(app.bookView.initDetailPage));
page('/books/new', app.bookView.initFormPage);

page();

