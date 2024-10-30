import'../App.css'
import { BiLike,BiSolidDislike  } from "react-icons/bi";

export default function LikeButton(){
    return(
        <div className="likeUnlike">
        <button><BiLike/></button>
        <span>655</span>
        <button><BiSolidDislike/></button>
      </div>
    )
}