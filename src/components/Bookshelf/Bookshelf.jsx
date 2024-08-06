import {useState} from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([{}]);
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

    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" onChange={handleInputChange} />
                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" id="author" onChange={handleInputChange} />
                    <button type="submit"></button>
                </form>
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    );
};

export default Bookshelf;