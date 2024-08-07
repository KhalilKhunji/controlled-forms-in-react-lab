import {useState} from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({title: '', author: ''});
    
    const handleInputChange = (event) => {
        let updatedBook = {...newBook};
        if(event.target.name === 'title') {
            updatedBook = {...newBook, title: event.target.value};
        };
        if(event.target.name === 'author') {
            updatedBook = {...newBook, author: event.target.value};
        };
        setNewBook(updatedBook);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({title: '', author: ''})
    };

    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={newBook.title} onChange={handleInputChange} />
                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" id="author" value={newBook.author} onChange={handleInputChange} />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            {books.map((book) => (
                <div className="bookCardsDiv" key={book}>
                    <div>Title: {book.title}</div>
                    <div>Author: {book.author}</div>
                </div>
            ))}
        </div>
    );
};

export default Bookshelf;