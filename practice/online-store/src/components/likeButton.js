import'../App.css'
import { BiLike,BiSolidDislike  } from "react-icons/bi";

export default function LikeButton({likes,onIncrement,onDecrement,pvtdefault,disable}){
  
    return(
        <div className="likeUnlike" onClick={pvtdefault}>
        <button onClick={onIncrement} disabled={disable}><BiLike/></button>
        <span>{likes}</span>
        <button onClick={onDecrement} disabled={disable}><BiSolidDislike/></button>
      </div>
    )
}