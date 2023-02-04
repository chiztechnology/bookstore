import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './BookItem.css';
import { RingProgress, Text, Button } from '@mantine/core';

const BookItem = (props) => {
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <div className='left-block'>
                <text className='book-category'>{props.book.category}</text>
                <h2 className='book-title'>{props.book.title}</h2>
                <p className='book-author'>{props.book.author}</p>
                <button className='btn comment-btn'>Comments</button>
                <button className='btn remove-btn' onClick={() => dispatch(removeBook(props.book.id))}>Remove</button>
                <button className='btn edit-btn'>Edit</button>
            </div>

            <div className='middle-block'>
                <RingProgress
                    sections={[{ value: 40, color: 'blue' }]}
                    label={
                        <Text color='blue' weight={700} align='center' size='xl'>
                            40%
                        </Text>
                    }
                />
            </div>

            <div className='right-block'>
                <text className='current-chapter'>CURRENT CHAPTER</text>
                <h3 style={{ margin: 0 }}>Chapter 17</h3>
                <Button style={{ marginTop: 20 }}>
                    UPDATE PROGRESS
                </Button>
            </div>
        </div>
    )
};

export default BookItem