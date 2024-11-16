import { useGetProductQuery } from "../redux/appSlice";
import { FcLike } from "react-icons/fc";

import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductQuery(id);
  
  return (
    <div className="detailWrapper">
      {isLoading ? (
        <h2>Loading.....</h2>
      ) : (
        <div>
          <div className="detailtitle">{product.title}</div>
          <div className="detailprice">${product.price}</div>
          <div className="detaillikes"><FcLike/><span>{product.likes}</span></div> 
          <div className="detaildescription">{product.description}</div>
          <div className="detailcomments">
            {product.review.map(item=><p>{item}</p>)}
          </div>
        </div>  
      )}
    </div>
  );
}
