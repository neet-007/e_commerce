import React, { ComponentProps } from "react";
import "./cart.css"
import { CartItemType, useCartContext } from "../../context/cartContext";
import { useNavigate } from "@tanstack/react-router";

type CartItemCardProps = {
  item: CartItemType
}


export const CartItemCard: React.FC<ComponentProps<"div"> & CartItemCardProps> = ({ item,
  ...props }) => {

  const { removeSingleItem, removeItem } = useCartContext();
  const navigate = useNavigate();

  return (
    <div className="cart-card-item-container" {...props}>
      <img className="cart-card-item-img" src="/head_phone_black.jpg"
        onClick={() => navigate({
          to: `/men/$productId`,
          params: { productId: String(item.item.itemId) }
        })}
      />
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
          <button className="cart-card-item-option"
            onClick={() => removeSingleItem(item.item.itemId)}>
            delete
          </button>
          <button className="cart-card-item-option"
            onClick={() => removeItem(item.item.itemId)}>
            delete all items
          </button>
        </div>
      </div>
    </div>
  )

}

