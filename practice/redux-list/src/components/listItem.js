import"./right.css"
import { removeItem } from "../redux/inventorySlice"
import { useDispatch } from "react-redux"

export default function Listitem({id,title,quantity}){
    const dispatch = useDispatch()
    const remove=()=>{
        dispatch(removeItem({id,quantity}))
    }
    return(
        <div className="listItemWrapper">
            <div className="listitemName">{title}</div>
            <div className="listitemquantity">{quantity}</div>
            <div  className="listitembutton"><button onClick={remove}>X</button></div>
        </div>
    )
}
