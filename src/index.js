 import React from 'react';
 import ReactDOM from 'react-dom';
 import SearchBar from './components/searchBar';


 const API_KEY = "AIzaSyA-ML7Hg8U6qdwo_4k9gQjlCMkGUD9i_oI";

 const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
 }

 ReactDOM.render(<App />, document.querySelector('.container'));