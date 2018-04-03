 import React, { Component } from 'react';
 import ReactDOM from 'react-dom';
 import SearchBar from './components/searchBar';
 import VideoList from './components/videoList';


 import YTSearch from 'youtube-api-search';

 const API_KEY = "AIzaSyA-ML7Hg8U6qdwo_4k9gQjlCMkGUD9i_oI";


 class App extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             videos:[]
            }
        YTSearch({key:API_KEY, term:'surfboards'}, (videos) => {
            this.setState({videos});
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

 ReactDOM.render(<App />, document.querySelector('.container'));