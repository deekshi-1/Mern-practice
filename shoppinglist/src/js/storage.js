export const saveToStorage= (shoppingList,completedList)=>{
    window.localStorage.setItem('active',JSON.stringify(shoppingList));
    window.localStorage.setItem('completed',JSON.stringify(completedList));
}

export const getStored= ()=>{
    const act=window.localStorage.getItem('active');
    const compl=window.localStorage.getItem('completed');
    return{
        active:act?JSON.parse(act):[],
        completed:compl?JSON.parse(compl):[]
    }
}