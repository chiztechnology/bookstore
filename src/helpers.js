import axios from 'axios';

const APP_ID = 'X8vIlO9i7KQo8SNQbsqv';

const connectionString = axios.create({
  baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// get books from API
export const getBooks = async () => {
  const books = await connectionString.get('/books');
  return Object.entries(books.data).map(([id, book]) => {
    const [{ title, author, category }] = book;
    return {
      id,
      title,
      author,
      category,
    };
  });
};

// add a new Book using API 
export const addBook = async ({
  id, title, author, category,
}) => {
  await connectionString.post('/books', {
    item_id: id,
    title,
    author,
    category: 'action'
  });
};

// delete book
export const deleteBook = async (id) => {
  await connectionString.delete(`/books/${id}`);
};

export default connectionString;