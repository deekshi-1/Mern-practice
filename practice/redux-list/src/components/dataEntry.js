import { useState } from "react";
import { addItem } from "../redux/inventorySlice";
import { useDispatch } from "react-redux";

export default function DataEntry() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const addItems = () => {
    if (title !== "" && quantity > 0) {
      dispatch(addItem({ title, quantity }));
      setTitle("");
      setQuantity(0);
    } else {
      alert("Enter va lid values");
    }
  };

  return (
    <div className="leftWrapper">
      <input
        className="inputText"
        value={title}
        type="text"
        placeholder="Enter the Item"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        className="inputNumber"
        value={quantity}
        type="number"
        placeholder="Quantity"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <br />
      <button className="addItemButton" onClick={addItems}>
        Add Item
      </button>
    </div>
  );
}
