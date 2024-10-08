import React, { ComponentProps } from "react";
import './cart.css'
import { useCartContext } from "../../context/cartContext";

type CartIconProps = {}


export const CartIcon: React.FC<ComponentProps<"button"> & CartIconProps> = ({ className,
  ...props }) => {

  const { count } = useCartContext();

  return (
    <button className={`cart-icon-container ${className}`} {...props}>
      <div className="cart-icon-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-bag"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
        </svg>
      </div>
      <div className="cart-icon-count">
        {count}
      </div>
    </button>
  )

}
