import { useContext } from 'react'; //useContext is the function for accessing value in context.
import BooksContext from '../context/books'; //importing the context object.

function useBooksContext() {
    return useContext(BooksContext);
}

export default useBooksContext;