import React from "react";
import './App.css';
import AddModal from "./components/AddModal";
import {v4 as uuidv4} from "uuid";
import ListMovies from "./components/ListMovies";

class App extends React.Component {
  state = {
    movies: [
      {
        id: uuidv4(),
        name:"inception",
        image :"https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        rating:4,
        year:"2005"
      },
      {
        id:uuidv4(),
        name:"Game Of Thrones",
        image:"https://www.journaldugeek.com/content/uploads/2019/04/got1-5-640x400.jpg",
        rating:2,
        year:"2013"
      },
      {
        id:uuidv4(),
        name:"Vikings",
        image:"https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2019-12/vikings-season-6.jpg",
        rating:5,
        year:"2015"
      },
    ],
    searchTerm: "",
    rating: 1,
  };
  add = (newMovie) => {
    this.setState({
      movies: this.state.movies.concat({...newMovie, id: uuidv4() }),
    });
  };
  getSearch = (ValueSearch) => {
    this.setState ({
      searchTerm: ValueSearch,
    });
  };
  getRating = (ValueRating) => {
    this.setState ({
      rating : ValueRating,
    });
  }
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movie App</h1>
          <Search search={(S) => this.getSearch(s)} />
          <Rating rating={(R) => this.getRating(R)} />
          <ListMovies 
          search={this.state.searchTerm}
          movies={this.state.movies}
         />
          <AddModal addMovie={(M)=> this.add(M)} />
        </header>
      </div>
    );
  }
  
}

export default App;
