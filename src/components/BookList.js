import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

function BookList() {
    //useBooksContext is a custom hook
    //using destructuring to get a specific property out of the valueToShare object.
    const { books } = useBooksContext();
    
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    );
}

export default BookList;