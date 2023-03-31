import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

//context object
const BooksContext = createContext();

//custom provider component - tells the BooksContext.Provider what data to share
function Provider({ children }) {

    const [books, setBooks] = useState([]);

    //useCallback is used so that the useEffect hook in App.js doesn't make an infinite loop of requests by calling fetchBooks over and over.
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }, []);

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    //because the value passed into createBook is the same name as the key in the object, title: title is not required.
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });

        //take all of the books, add them into the updatedBooks array, and at the very end of it add the data from the response. 
        const updatedBooks = [
            ...books,
            response.data
        ];
        setBooks(updatedBooks);
    };

    //object being shared with all the components.
    //since I want to use the same names for keys and values, they can be condensed.
    const valueToShare = {
        books, 
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };
    

    return (
        <BooksContext.Provider value={valueToShare}> 
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;

