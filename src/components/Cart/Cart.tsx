import React, { ComponentProps } from "react";

type CartProps = {}


export const Cart: React.FC<ComponentProps<"div"> & CartProps> = ({ ...props }) => {

  return (
    <div>hi</div>
  )

}


