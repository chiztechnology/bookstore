import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import { useSelector } from 'react-redux';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        // setBooks([{ id: 1, title: 'welcome home', author: 'Wilian einstein' }, { id: 2, title: 'home is safe', author: 'Elen W.' }]);
        setBooks(useSelector((state) => state.books));
        console.log(books);
    }, [])

    return (
        <div>
            {books.length > 0 && books.map((element) => (
                <BookItem book={element} key={element.id} />
            ))}
            <div>
                <h2>Add a new book</h2>
                <form>
                    <input type='text' placeholder='Book title' name='title' />
                    <input type='text' placeholder='Author' name='author' />
                    <input type='submit' title='Add book' />
                </form>
            </div>
        </div>
    )
}

export default Books