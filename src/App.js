import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {    
    //using destructuring to get a specific property out of the valueToShare object.
    const { fetchBooks } = useContext(BooksContext);
   
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;