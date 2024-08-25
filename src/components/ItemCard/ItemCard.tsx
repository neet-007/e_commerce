import React, { ComponentProps } from "react";

type ItemCardProps = {}


export const ItemCard: React.FC<ComponentProps<"div"> & ItemCardProps> = ({ ...props }) => {

	return (
		<div>hi</div>
	)

}
