import React, { useState, useContext, createContext } from "react";
import { ItemType } from "../components/ItemCard/ItemCard"

export type CartItemType = { item: ItemType, quantity: number, price: number };

type CartContextType = {
  cartItems: CartItemType[];
  addItem: (item: ItemType) => void;
  removeSingleItem: (id: number) => void;
  removeItem: (id: number) => void;
  count: number;
  total: number;
}

const INITIAL_STATE = {
  cartItems: [],
  addItem: (_: ItemType) => { },
  removeSingleItem: (_: number) => { },
  removeItem: (_: number) => { },
  count: 0,
  total: 0,
} as CartContextType

const CartContext = createContext<CartContextType>(INITIAL_STATE);

export const CartContextProvider: React.FC<React.ComponentProps<"div">> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

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
    setTotal(prev => prev + item.price.amount);
  }

  function removeSingleItem(id: number) {
    setCartItems(prev => {
      return prev.map(x => {
        if (x.item.itemId === id) {
          setTotal(prevTotal => Math.max(prevTotal - x.item.price.amount, 0));
          if (x.quantity > 1) {
            return { ...x, quantity: x.quantity - 1, price: x.price - x.item.price.amount }
          } else {
            return null
          }
        }
        return x
      }).filter(x => x != null)
    })
    setCount(prev => Math.max(prev - 1, 0));
  }

  function removeItem(id: number) {
    setCartItems(prev => {
      return prev.filter(x => {
        if (x.item.itemId === id) {
          setTotal(prevTotal => Math.max(prevTotal - x.item.price.amount, 0))
          setCount(prevCount => Math.max(prevCount - x.quantity, 0));
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
    count,
    total
  } as CartContextType

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )

}

export const useCartContext = () => useContext(CartContext);





