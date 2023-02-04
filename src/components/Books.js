import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveBook, fetchBooks } from '../redux/books/books';
import './Books.css'
import { Input, Button } from '@mantine/core';

const Books = () => {
    const { books } = useSelector((state) => state.books);

    const dispatch = useDispatch();
    const [book, setBook] = useState({ title: '', author: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(book);
        dispatch(saveBook({ id: Date.now(), ...book }));

        // clear input fields after dispatch
        setBook({ title: '', author: '' });
    };

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <div className='books-container'>
            {books.length > 0 && books.map((element) => (
                <BookItem book={element} key={element.id} />
            ))}
            <div>
                <h2 style={{ marginLeft: 16 }}>Add a new book</h2>
                <form className='myForm'>
                    <Input type='text' className='book-title-field' placeholder='Book title' name='title' onChange={(e) => setBook({ ...book, title: e.target.value })} />
                    <Input type='text' className='book-author-field' placeholder='Author' name='author' onChange={(e) => setBook({ ...book, author: e.target.value })} />
                    <Button type='submit' className='submit-field' onClick={handleSubmit}>
                        ADD BOOK
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Books