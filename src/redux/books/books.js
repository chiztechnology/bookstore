const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialStates = {
    books: [
        {
            id: 1,
            title: "They betray peace",
            author: 'Jean KATALA',
        },
        {
            id: 2,
            title: "At the world's end",
            author: 'Johny DEPP',
        },
        {
            id: 3,
            title: 'The curse of thhe black pearl',
            author: 'Pirates of the carribean',
        },
    ],
};

const reducer = (state = initialStates, action) => {
    switch (action.type) {
        case ADD:
            return {
                books: [...state.books, action.payload],
            };
        case REMOVE:
            return {
                books: state.books.filter((book) => book.id !== action.payload),
            };
        default:
            return state;
    }
};

export const addBook = (book) => ({ type: ADD, payload: book });

export const removeBook = (id) => ({ type: REMOVE, payload: id });

export default reducer;