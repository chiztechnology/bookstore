import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
    const dispatch = useDispatch();
    return (
        <div style={{ padding: 20, backgroundColor: '#efefef', width: 700, marginBottom: 5 }}>
            <h2>{props.book.title}</h2>
            <h3>{props.book.author}</h3>
            <button>Edit</button>
            <button onClick={() => dispatch(removeBook(props.book.id))}>Delete</button>
        </div>
    )
};

export default BookItem