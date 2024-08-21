import {
  addToShoppingList,
  setPriority,
  removeItem,
  addToCompletedList,
  clearCompleted,
  bootUp
} from "./model";
import { renderShpList, renderCmplList } from "./view";

const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector(".shopping-list");
const completedDiv = document.querySelector(".completed");
const clearCompletedBtn = document.querySelector("#clear-completed");

itemInput.addEventListener("keyup", function (evt) {
  if (evt.key == "Enter") {
    //Add to shoopping list
    addToShoppingList(this.value);
    //update view
    renderShpList();
    //clear field
    this.value = "";
  }
});

shoppingListDiv.addEventListener("click", function (evt) {
  //priority
  if (evt.target.parentElement.classList.contains("priority-control")) {
    const priority = evt.target.classList.value;
    const itemId =
      evt.target.parentElement.parentElement.getAttribute("data-id");
    console.log(itemId, priority);

    //set priority
    setPriority(itemId, priority);
    //rerender
    renderShpList();
  }
  if (evt.target.classList.contains("remove-btn")) {
    const itemId = evt.target.parentElement.getAttribute("data-id");
    const confirm = window.confirm("Do you want to delete the item");
    if (confirm) {
      removeItem(itemId);
      renderShpList();
    }
  }
});

shoppingListDiv.addEventListener("dragstart", function (evt) {
  if (evt.target.classList.contains("item")) {
    const itemId = evt.target.getAttribute("data-id");
    evt.dataTransfer.setData("text/plain", itemId);
  }
});

completedDiv.addEventListener("drop", function (evt) {
  const itemId = evt.dataTransfer.getData("text/plain");
  if (itemId) {
    //add to completed
    addToCompletedList(itemId);
    //update shoppinglist
    renderShpList();
    //update completed task
    renderCmplList();
  }
});

completedDiv.addEventListener("dragover", function (evt) {
  evt.preventDefault();
});

clearCompletedBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  clearCompleted();
  renderCmplList();
});

(()=>{
  bootUp()
  renderCmplList()
  renderShpList()
})();