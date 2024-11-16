import "../App.css";
import LikeButton from "./likeButton";
import { Link } from "react-router-dom";
import { useUpdateLikesMutation } from "../redux/appSlice";
export default function Card({ id, title, price, description, likes }) {

  const [upDateLike,{isLoading}]=useUpdateLikesMutation();
  
  const increment = (evt) => {
    evt.preventDefault();
    upDateLike({id,likes:likes+1})
  };
  const decrement = (evt) => {
    evt.preventDefault();
    upDateLike({id,likes:likes-1})
  };
  const prevent = (evt) => {
    evt.preventDefault();
  };
  return (
    <Link to={`/product/${id}`} className="item">
      <div className="title">{title}</div>
      <div className="price">${price}</div>
      <div className="description">{description}</div>
      <LikeButton
        likes={likes}
        onIncrement={increment}
        onDecrement={decrement}
        pvtdefault={prevent}
        disable={isLoading}
      />
    </Link>
  );
}
