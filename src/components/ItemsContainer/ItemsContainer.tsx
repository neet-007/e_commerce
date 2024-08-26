import React, { ComponentProps } from "react";
import "./itemsContainer.css"
import { ItemCard } from "../ItemCard/ItemCard";

type ItemsContainerProps = {}


export const ItemsContainer: React.FC<ComponentProps<"div"> & ItemsContainerProps> = ({ ...props }) => {

	return (
		<div className="items-container" {...props}>
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
		</div>
	)

}
