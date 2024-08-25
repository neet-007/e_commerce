import React, { ComponentProps } from "react";

type CartIconProps = {}


export const CartIcon: React.FC<ComponentProps<"div"> & CartIconProps> = ({ ...props }) => {

  return (
    <div>hi</div>
  )

}
