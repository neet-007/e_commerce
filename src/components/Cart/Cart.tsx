import React, { ComponentProps } from "react";
import "./cart.css"
import { CartItemCard } from "./CartItemCard";
import { Button } from "../Shared/Button";

type CartProps = {}


export const Cart: React.FC<ComponentProps<"div"> & CartProps> = ({ ...props }) => {

  return (
    <div className="cart-container" {...props}>
      <div className="cart-bag">
        <div className="cart-bag-header">
          bag
        </div>
        <div className="cart-bag-items">
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
        </div>
      </div>
      <div className="cart-summery">
        <div>
          summery
        </div>
        <div className="cart-summery-total">
          <div>
            sub total
          </div>
          <div>
            125 sar
          </div>
        </div>
        <div className="cart-summery-total">
          <div>
            total
          </div>
          <div>
            125 sar
          </div>
        </div>
        <div className="cart-summery-promo">
          <label htmlFor="">do you have promo code</label>
          <input type="text" />
        </div>
        <Button className="cart-summery-button" variant="primary" size="md" roundedCorners>
          checkout
        </Button>
      </div>
    </div>
  )

}


