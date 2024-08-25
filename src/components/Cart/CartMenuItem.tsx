import React, { ComponentProps } from "react";

type CartMenuItemProps = {}


export const CartMenuItem: React.FC<ComponentProps<"div"> & CartMenuItemProps> = ({ ...props }) => {

  return (
    <div>hi</div>
  )

}
