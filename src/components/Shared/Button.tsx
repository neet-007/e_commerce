import React, { ComponentProps } from "react";

type ButtonProps = {}


export const Button: React.FC<ComponentProps<"div"> & ButtonProps> = ({ ...props }) => {

	return (
		<div>hi</div>
	)

}
