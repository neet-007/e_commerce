import React, { useState, useContext, createContext } from "react";
import { ItemType } from "../components/ItemCard/ItemCard"

export type CartItemType = { item: ItemType, quantity: number, price: number, options: string[], optionsClr: string[] };

type CartContextType = {
  cartItems: CartItemType[];
  addItem: (item: ItemType, options: string[], optionsClr: string[]) => void;
  removeSingleItem: (id: number, options: string[], optionsClr: string[]) => void;
  removeItem: (id: number, options: string[], optionsClr: string[]) => void;
  count: number;
  total: number;
}

const INITIAL_STATE = {
  cartItems: [],
  addItem: (_: ItemType, __: string[], ___: string[]) => { },
  removeSingleItem: (_: number, __: string[], ___: string[]) => { },
  removeItem: (_: number, __: string[], ___: string[]) => { },
  count: 0,
  total: 0,
} as CartContextType

function valueDeepEquality(val1: any, val2: any): boolean {
  if (val1 === val2) return true;

  if (typeof val1 !== 'object' || val1 === null || typeof val2 !== 'object' || val2 === null) {
    return false;
  }

  const keys1 = Object.keys(val1);
  const keys2 = Object.keys(val2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !valueDeepEquality(val1[key], val2[key])) {
      return false;
    }
  }

  return true;
}

function arrayDeepEquality(arr1: any[], arr2: any[]) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false
  }

  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!valueDeepEquality(arr1[i], arr2[i])) {
      return false
    }
  }

  return true
}

const CartContext = createContext<CartContextType>(INITIAL_STATE);

export const CartContextProvider: React.FC<React.ComponentProps<"div">> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  function addItem(item: ItemType, options: string[], optionsClr: string[]) {
    setCartItems(prev => {
      if (!prev.find(x => x.item.itemId === item.itemId &&
        arrayDeepEquality(x.options, options) &&
        arrayDeepEquality(x.optionsClr, optionsClr))) {
        prev.push({
          item: item,
          price: item.price.amount,
          quantity: 1,
          options,
          optionsClr
        })
        return [...prev]
      }
      return prev.map(x => x.item.itemId === item.itemId &&
        arrayDeepEquality(x.options, options) &&
        arrayDeepEquality(x.optionsClr, optionsClr) ?
        { ...x, quantity: x.quantity + 1, price: x.price + item.price.amount }
        : x)
    });
    setCount(prev => prev + 1);
    setTotal(prev => prev + item.price.amount);
  }

  function removeSingleItem(id: number, options: string[], optionsClr: string[]) {
    setCartItems(prev => {
      return prev.map(x => {
        const optionsEqual = arrayDeepEquality(x.options, options)
        const optionsClrEqual = arrayDeepEquality(x.optionsClr, optionsClr)
        if (x.item.itemId === id && optionsEqual && optionsClrEqual) {
          setTotal(prevTotal => Math.max(parseFloat((prevTotal - x.item.price.amount).toFixed(2))
            , 0));
          if (x.quantity > 1) {
            return {
              ...x, quantity: x.quantity - 1, price:
                parseFloat((x.price - x.item.price.amount).toFixed(2))
            }
          } else {
            return null
          }
        }
        return x
      }).filter(x => x != null)
    })
    setCount(prev => Math.max(prev - 1, 0));
  }

  function removeItem(id: number, options: string[], optionsClr: string[]) {
    let quantity = 0;
    let price = 0;
    setCartItems(prev => {
      const updatedItems = prev.filter(x => {
        const optionsEqual = arrayDeepEquality(x.options, options);
        const optionsClrEqual = arrayDeepEquality(x.optionsClr, optionsClr);

        if (x.item.itemId === id && optionsEqual && optionsClrEqual) {
          price = x.item.price.amount * x.quantity;
          quantity = x.quantity;
          return false;
        }

        return true;
      });

      console.log(price)
      console.log(quantity)
      return updatedItems;
    });

    setTotal(prevTotal => Math.max(parseFloat((prevTotal - price).toFixed(2)), 0));
    setCount(prevCount => Math.max((prevCount - quantity), 0));
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





