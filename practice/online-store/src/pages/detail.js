import LikeButton from "../components/likeButton";

import "../App.css"

export default function DetailPage() {
  return (
    <div>
      <div className="title">{title}</div>
      <div className="price">${price}</div>
      <div className="description">{description}</div>
      <LikeButton/>
    </div>
  );
}
