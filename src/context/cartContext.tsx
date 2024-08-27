import React, { useState, useContext, createContext } from "react";
import { ItemType } from "../components/ItemCard/ItemCard"

export type CartItemType = { item: ItemType, quantity: number, price: number };

type CartContextType = {
  cartItems: CartItemType[];
  addItem: (item: ItemType) => void;
  removeSingleItem: (id: number) => void;
  removeItem: (id: number) => void;
  count: number;
}

const INITIAL_STATE = {
  cartItems: [],
  addItem: (_: ItemType) => { },
  removeSingleItem: (_: number) => { },
  removeItem: (_: number) => { },
  count: 0,
} as CartContextType

const CartContext = createContext<CartContextType>(INITIAL_STATE);

export const CartContextProvider: React.FC<React.ComponentProps<"div">> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [count, setCount] = useState<number>(0);

  function addItem(item: ItemType) {
    setCartItems(prev => {
      if (!prev.find(x => x.item.itemId === item.itemId)) {
        prev.push({
          item: item,
          price: item.price.amount,
          quantity: 1
        })
        return [...prev]
      }
      return prev.map(x => x.item.itemId === item.itemId ?
        { ...x, quantity: x.quantity + 1, price: x.price + item.price.amount }
        : x)
    });
    setCount(prev => prev + 1);
  }

  function removeSingleItem(id: number) {
    setCartItems(prev => {
      return prev.map(x => x.item.itemId === id ?
        x.quantity > 1 ?
          { ...x, quantity: x.quantity - 1, price: x.price - x.item.price.amount }
          : null
        : x).filter(x => x != null)
    })
    setCount(prev => Math.min(prev - 1, 0));
  }

  function removeItem(id: number) {
    setCartItems(prev => {
      return prev.filter(x => {
        if (x.item.itemId === id) {
          setCount(prevCount => Math.min(prevCount - x.quantity, 0));
        }
        return x.item.itemId !== id
      })
    })
  }

  const value = {
    cartItems,
    addItem,
    removeSingleItem,
    removeItem,
    count: count
  } as CartContextType

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )

}

export const useCartContext = () => useContext(CartContext);





