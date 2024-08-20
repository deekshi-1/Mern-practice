let shoppingList =[];

export const addToShoppingList = (item)=>{
    const itemId = `${parseInt(Math.random()*1000000)}-${new Date().getTime()}`;
    shoppingList.push({
        id:itemId,
        item,
        priority:'normal',
    });
};


export const  getShoppingList =() => shoppingList;