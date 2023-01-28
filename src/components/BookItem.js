import React from 'react';

const BookItem =(props)=>{

    console.log(props);

    return(
        <div style={{padding:20, backgroundColor:'#efefef', width:700, marginBottom:5}}>
            <h2>{props.book.title}</h2>
            <h3>{props.book.author}</h3>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default BookItem