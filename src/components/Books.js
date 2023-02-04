import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Books = () => {
    const { books } = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const [book, setBook] = useState({ title: '', author: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook({ id: Date.now(), ...book }));

        // clear input fields after dispatch
        setBook({ title: '', author: '' });
    };
    return (
        <div>
            {books.length > 0 && books.map((element) => (
                <BookItem book={element} key={element.id} />
            ))}
            <div>
                <h2>Add a new book</h2>
                <form>
                    <input type='text' placeholder='Book title' name='title' onChange={(e) => setBook({ ...book, title: e.target.value })} />
                    <input type='text' placeholder='Author' name='author' onChange={(e) => setBook({ ...book, author: e.target.value })} />
                    <input type='submit' title='Add book' onClick={handleSubmit} />
                </form>
            </div>
        </div>
    )
}

export default Books