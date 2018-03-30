
page('/', ctx => app.bookView.initIndexPage(ctx));
page('/books', ctx => app.Books.fetchAll(app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initFormPage(ctx));
page('/books/:book_id', ctx => app.Books.fetchOne(ctx, app.bookView.initDetailView));

page();

