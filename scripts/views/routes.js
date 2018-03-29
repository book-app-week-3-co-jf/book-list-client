
page('/', ctx => app.bookView.initIndexPage(ctx));
page('/books/:book_id', ctx => app.Books.fetchOne(ctx, app.bookView.initDetailPage));
page('/books/new', ctx => app.bookView.initFormPage(ctx));

page();

