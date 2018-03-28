'use script';







// 1. As a user, I want to request information about a single book so that I can view additional details.

// Add an endpoint for a GET request to /api/v1/books/:id.
// This should allow the client to make a request for a singular book, which returns the details of that record from the DB.
// Note: you will not be able to manually enter a book id into the address bar of your browser.
// Create a new static method to interact with your Book model, such as fetchOne.
// Create a Detail View container in index.html to display the detail view of a single book.