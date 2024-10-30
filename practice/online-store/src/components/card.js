import '../App.css';
import LikeButton from './likeButton';


export default function Card({title,price,description,likes}) {
  return (
    <div className="item">
      <div className="title">{title}</div>
      <div className="price">${price}</div>
      <div className="description">{description}</div>
      <LikeButton/>
    </div>
  );
}
