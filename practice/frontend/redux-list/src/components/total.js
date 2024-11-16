import"./right.css"
import { useSelector } from "react-redux"

export default function TotalItems({total}){
    const {totalItems} =useSelector((state)=>state.inventory)
    return(
        <div className="totalitemWrapper">
            <div className="totalText">Total items in the inventry  :&nbsp;</div>
            <div className="quantity">{totalItems}</div>
        </div>
    )
}
