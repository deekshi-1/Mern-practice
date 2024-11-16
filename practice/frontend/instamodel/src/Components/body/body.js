import React from "react";
import Card from "./card";
import { RotatingLines } from "react-loader-spinner";
import "./body.css";
import { CiSearch } from "react-icons/ci";


const apiStatusConst = {
  success: "SUCCESS",
  loading: "LOADING",
  failure: "FAILED",
};
class Body extends React.Component {
  state = {
    allPosts: [],
    searchResult: [],
    apiStatus: apiStatusConst.failure,
    searchInput: "",
  };
  componentDidMount() {
    this.getPosts();
  }
  getPosts = async () => {
    this.setState({ apiStatus: apiStatusConst.loading });
    const url =
      "https://pixabay.com/api/?key=46593457-a9eb3c3b51d991197fa270434&image_type=photo&pretty=true";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        allPosts: data.hits,
        searchResult: data.hits,
        apiStatus: apiStatusConst.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConst.failure });
    }
  };

  renderPosts = () => {
    const { searchResult } = this.state;
    return (
      <ul>
        {searchResult.map((post) => {
          return <Card key={post.id} postDetail={post} />;
        })}
      </ul>
    );
  };
  renderLoading = () => {
    return (
      <div className="loading midAlign">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  };
  renderFailure = () => {
    return (
      <div className="failDiv">
        <img src="images/failed.jpeg" alt="failueimage" className="midAlign" />
        <div className="failText">!! Failed to load the page !!</div>
        <div className="midAlign">
          <button onClick={this.getPosts}>Reload</button>
        </div>
      </div>
    );
  };
  renderSwitch = () => {
    switch (this.state.apiStatus) {
      case apiStatusConst.success:
        return this.renderPosts();
      case apiStatusConst.loading:
        return this.renderLoading();
      case apiStatusConst.failure:
        return this.renderFailure();
      default:
        return this.renderLoading();
    }
  };

  
  onSearchInput=(e)=>{
    console.log(e.target.value);
    this.setState({searchInput:e.target.value})
    
  }

  searchItemButton=()=>{
    const {searchInput,allPosts} = this.state;
    const  filteredPosts = allPosts.filter((post)=>{
      let user = post.user.toLowerCase();
      let searchUser = searchInput.toLowerCase();
      if(user.includes(searchUser)) return true
      return false
    })
    this.setState({searchResult:filteredPosts})

  }
  render() {
    return (
      <div className="main-wrapper">
        <div className="searchBar">
          <input
            type="search"
            placeholder="Search User"
            className="search-input"
            value={this.state.searchInput}
            onChange={this.onSearchInput}
          />
          <button onClick={this.searchItemButton}><CiSearch/></button>
        </div>
        <div className="posts">{this.renderSwitch()}</div>
      </div>
    );
  }
}

export default Body;
