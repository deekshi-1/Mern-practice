import { saveToStorage,getStored } from "./storage";

let shoppingList =[];
let completedList =[];

export const addToShoppingList = (item)=>{
    const itemId = `${parseInt(Math.random()*1000000)}-${new Date().getTime()}`;
    shoppingList.push({
        id:itemId,
        item,
        priority:'normal',
    });
    saveToStorage(shoppingList,completedList)
};

export const setPriority = (itemId,priority) =>{
    shoppingList=shoppingList.map( item =>{
        if(item.id == itemId){
          return{
            ...item,
            priority
          } 
        }
        return item;
    });
    saveToStorage(shoppingList,completedList)
}

export const removeItem = (itemId) =>{
    shoppingList =shoppingList.filter(({id})=> id !== itemId);
    saveToStorage(shoppingList,completedList)
}

export const  getShoppingList =() => shoppingList;


export const addToCompletedList = (itemId) =>{
    const  Item = shoppingList.find(({id})=> id == itemId);
     shoppingList =shoppingList.filter(({id})=> id !== itemId);
     completedList =  [Item,...completedList];
     saveToStorage(shoppingList,completedList)
} 

export const getCompletedList = ()=> completedList;


export const clearCompleted = () => {
    completedList=[]
    saveToStorage(shoppingList,completedList);    
};

export const bootUp=()=>{
    const{active,completed}=getStored()
    shoppingList=active;
    completedList=completed;
}