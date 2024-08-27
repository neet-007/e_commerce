import React, { ComponentProps } from "react";
import "./cart.css"
import { CartItemCard } from "./CartItemCard";
import { Button } from "../Shared/Button";
import { useCartContext } from "../../context/cartContext";

type CartProps = {}


export const Cart: React.FC<ComponentProps<"div"> & CartProps> = ({ ...props }) => {

  const { count, total, cartItems } = useCartContext();

  console.log(cartItems);
  return (
    <div className="cart-container" {...props}>
      <div className="cart-bag">
        <div className="cart-bag-header">
          <div className="h3">
            bag
          </div>
          <div className="cart-bag-header-details">
            <div>
              {`${count === 0 ? "" : count} ${count === 0 ? "" : count === 1 ? "item" : "items"}`}
            </div>
            <div>{count === 0 ? "" : "|"}</div>
            <div>
              <span>{total}</span>
              <span>{cartItems.length === 0 ? 0 : cartItems[0].item.price.currency}</span>
            </div>
          </div>
        </div>
        <div className="cart-bag-items">
          {cartItems.map((item, i) => (
            <CartItemCard key={`cart-item-${item.item.itemId}-${i}`} item={item} />
          ))}
        </div>
      </div>
      <div className="cart-summery">
        <div className="h3">
          summery
        </div>
        <div className="cart-summery-total">
          <div>
            {`sub total ${count === 0 ? "" : count} ${count === 0 ? "" : count === 1 ? "(item)" : "{items)"}`}
          </div>
          <div>
            <span>{total}</span>
            <span>{cartItems.length === 0 ? 0 : cartItems[0].item.price.currency}</span>
          </div>
        </div>
        <div className="cart-summery-total">
          <div>
            total
          </div>
          <div>
            <span>{total}</span>
            <span>{cartItems.length === 0 ? 0 : cartItems[0].item.price.currency}</span>
          </div>
        </div>
        <div className="cart-summery-promo">
          <label htmlFor="">do you have promo code</label>
          <input type="text" />
        </div>
        <Button className="cart-summery-button" variant="primary" size="md" roundedCorners
          disabled={count === 0}>
          checkout
        </Button>
      </div>
    </div>
  )

}


