import React from "react";
import { FcLike } from "react-icons/fc";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";

class Card extends React.Component {
  state = {
    isLiked: false,
  };
  like=()=>{
    this.setState({isLiked:!this.state.isLiked})
  }
  render() {
    const { postDetail } = this.props;
    const { isLiked } = this.state;
    return (
      <div className="card-wrapper">
        <div className="profileSection">
          <div className="dp">
            <img src={postDetail.userImageURL} alt={postDetail.user} />
          </div>
          <div className="name">{postDetail.user}</div>
        </div>
        <img
          src={postDetail.largeImageURL}
          alt={postDetail.user}
          className="mainImg"
        />
        <div className="bottom">
          <div className="icons-div">
            <div className="icon">
              <button onClick={this.like}>{isLiked ? <FcLike /> : <CiHeart />}</button>
            </div>
            <div className="icon">
              <button>
                <FaRegComment />
              </button>
            </div>
            <div className="icon">
              <button>
                <CiShare2 />
              </button>
            </div>
          </div>
          <span className="likes">
            {isLiked ? postDetail.likes + 1 : postDetail.likes}
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
