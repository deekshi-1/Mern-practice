import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialData = {
  items: [],
  totalItems: 0,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState: initialData,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: nanoid(),
        ...action.payload,
      };
      state.items.push(newItem);
      state.totalItems = state.totalItems + action.payload.quantity;
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) =>item.id !== action.payload.id);
      state.totalItems = state.totalItems-action.payload.quantity
    },
    sortAsc:(state)=>{
            state.items.sort((a,b)=>a.quantity-b.quantity)
    },
    sortDesc:(state)=>{
            state.items.sort((a,b)=>b.quantity-a.quantity)
    }
  },
});


export const{addItem,removeItem,sortAsc,sortDesc}=inventorySlice.actions;

export const inventoryReducer = inventorySlice.reducer;