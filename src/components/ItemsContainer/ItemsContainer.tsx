import React, { ComponentProps } from "react";

type ItemsContainerProps = {}


export const ItemsContainer: React.FC<ComponentProps<"div"> & ItemsContainerProps> = ({ ...props }) => {

	return (
		<div>hi</div>
	)

}
