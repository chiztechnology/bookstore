import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {addBook, getBooks, deleteBook} from '../../helpers';

const FETCH = 'bookstore/books/FETCH';
const ADD = 'bookstore/books/ADD';
const DELETE = 'bookstore/books/DELETE';

export const fetchBooks = createAsyncThunk(FETCH, async () => {
  const books = await getBooks();
  return books;
});

export const saveBook = createAsyncThunk(ADD, async (book) => {
  await addBook(book);
  return book;
});

export const removeBook = createAsyncThunk(DELETE, async (id) => {
  await deleteBook(id);
  return id;
});

const initialState = {
  books: [],
};



const booksSlice = createSlice({
  name: 'bookstore/books',
  initialState,
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      const currentState = state;
      currentState.books = action.payload;
    },
    [saveBook.fulfilled]: (state, action) => {
      const currentState = state;
      const book = { ...action.payload, category: 'TBD' };
      currentState.books = [...state.books, book];
    },
    [removeBook.fulfilled]: (state, action) => {
      const currentState = state;
      currentState.books = state.books.filter(
        (book) => book.id !== action.payload,
      );
    },
  },
});

export default booksSlice.reducer;