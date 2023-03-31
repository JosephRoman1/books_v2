import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

//Provider is a component at the top of the hierarchy of components for this application,
//so when 'books' state is updated, the Provider component will rerender, and all of the sub components 
//will then also rerender.
root.render(
    <Provider>
        <App />
    </Provider>
);