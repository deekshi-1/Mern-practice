import React,{Component} from "react";
import songs from "./services/songs";
import SongCard from "./component/songCard";

class App extends Component{
  render(){
    state={
      songs
    }
    sortByTitle=()=>{
      this.setState({
        songs:[...this.state.songs.sort((a,b)=>a.title.toUpperCase()<b.title.toUpperCase()?-1:1)]
      })
    }

    sortByRating=()=>{
      this.setState({
        songs:[...this.state.songs.sort((a,b)=>b.rating-a.rating)]
      })
    }


    return(
      <div id="super-tunes">
        <h2 id="st-title">SuperTunes - Songs of the Week</h2>
        <button onClick={this.sortByTitle}>Sort by Title</button>
        <button onClick={this.sortByRating}>Sort by rating</button>
        <div id="song-list">
          {this.state.songs.map(song =>(<SongCard key={song.id} data={song}></SongCard>))}
        </div>
      </div>
    );
  }
}

export default App;