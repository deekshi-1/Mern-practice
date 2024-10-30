import "./right.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { sortAsc, sortDesc } from "../redux/inventorySlice";

export default function SortingButtons() {
  const dispatch = useDispatch();
  return (
    <div className="sortingButtons">
      <button onClick={dispatch(sortAsc())}>
        <FaAngleUp />
      </button>
      <button onClick={dispatch(sortDesc())}>
        <FaAngleDown />
      </button>
    </div>
  );
}
