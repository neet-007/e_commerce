import React, { ComponentProps } from "react";
import "./cart.css"
import { CartItemType } from "../../context/cartContext";

type CartItemCardProps = {
  item: CartItemType
}


export const CartItemCard: React.FC<ComponentProps<"div"> & CartItemCardProps> = ({ item,
  ...props }) => {

  return (
    <div className="cart-card-item-container" {...props}>
      <img className="cart-card-item-img" src="/head_phone_black.jpg" />
      <div className="cart-card-item-content">
        <div className="cart-card-item-header">
          <div className="cart-card-item-price">
            {item.item.title}
          </div>
          <div className="cart-card-item-price">
            <span>{item.price}</span>
            <span>{item.item.price.currency}</span>
          </div>
        </div>
        <div className="cart-card-item-details">
          {item.item.description}
        </div>
        <div className="cart-card-item-options">
          <div className="cart-card-item-option">like</div>
          <div className="cart-card-item-option">delete</div>
        </div>
      </div>
    </div>
  )

}

