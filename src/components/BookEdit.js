import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    //useBooksContext is a custom hook
    //using destructuring to get a specific property out of the valueToShare object.
    const { editBookById } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(); //closes the BookEdit component.
        editBookById(book.id, title);
    }; 

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;