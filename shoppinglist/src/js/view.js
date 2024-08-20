import Item from "./Item";
import { getShoppingList } from "./model";

const shoppingListDiv = document.querySelector('.shopping-list');


export const renderShpList =() => {
    const domNodes =getShoppingList().map(({item,priority,id})=>{
        return Item(item, priority, id);
    })
    shoppingListDiv.innerHTML=domNodes.join('');
}