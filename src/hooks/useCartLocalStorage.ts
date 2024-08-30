import { CartItemType } from "../context/cartContext";

export function useCartLocalStorage() {
  function setCart(cart: CartItemType[]) {
    try {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.log(e)
    }

  }

  function getCart() {
    try {
      const cart = window.localStorage.getItem("cart");
      if (cart) {
        return JSON.parse(cart);
      }
    } catch (e) {
      console.log(e)
    }
  }


  return { setCart, getCart }
}
