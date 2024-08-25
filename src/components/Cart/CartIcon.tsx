import React, { ComponentProps } from "react";
import './cart.css'

type CartIconProps = {}


export const CartIcon: React.FC<ComponentProps<"div"> & CartIconProps> = ({ ...props }) => {

  return (
    <button className="cart-icon-container">
      <div className="cart-icon-icon">
        cart icon
      </div>
      <div className="cart-icon-count">
        1
      </div>
    </button>
  )

}
