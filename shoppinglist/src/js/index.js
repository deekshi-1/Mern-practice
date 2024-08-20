import { addToShoppingList } from "./model";
import { renderShpList } from "./view";

const itemInput = document.querySelector("input[name='itemInput']");
const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');
const clearCompletedBtn = document.querySelector('#clear-completed');


itemInput.addEventListener('keyup',function(evt){
  if(evt.key =='Enter'){
    //Add to shoopping list
    addToShoppingList(this.value);
    //update view
    renderShpList();
    //clear field
    this.value='';
  }
})