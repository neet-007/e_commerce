import React, { ComponentProps } from "react";
import "./cart.css"

type CartItemCardProps = {}


export const CartItemCard: React.FC<ComponentProps<"div"> & CartItemCardProps> = ({ ...props }) => {

  return (
    <div className="cart-card-item-container" {...props}>
      <img className="cart-card-item-img" src="/head_phone_black.jpg" />
      <div className="cart-card-item-content">
        <div className="cart-card-item-header">
          <div className="cart-card-item-price">
            title
          </div>
          <div className="cart-card-item-price">
            price
          </div>
        </div>
        <div className="cart-card-item-details">
          details
        </div>
        <div className="cart-card-item-options">
          <div className="cart-card-item-option">like</div>
          <div className="cart-card-item-option">delete</div>
        </div>
      </div>
    </div>
  )

}

