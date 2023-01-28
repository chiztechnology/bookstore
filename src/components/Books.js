import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks([{ title: 'welcome home', author: 'Wilian einstein' }]);
        console.log(books);
    }, [])

    return (
        <div>
            {books.length > 0 && books.map((element) => (
                <BookItem book={element} />
            ))}
            <div>
                <h2>Add new book</h2>
                <form>
                    <input type='text' placeholder='Book title'/>
                    <select placeholder='select'>
                        <option value='action'>Action</option>
                        <option value='science'>Science Fiction</option>
                        <option value='economy'>Economy</option>
                    </select>
                    <input type='submit' title='Add book'/>
                </form>
            </div>
        </div>
    )
}

export default Books