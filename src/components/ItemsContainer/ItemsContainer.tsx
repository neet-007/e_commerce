import React, { ComponentProps } from "react";
import "./itemsContainer.css"
import { ItemCard, ItemType } from "../ItemCard/ItemCard";

type ItemsContainerProps = {
	results: ItemType[]
}


export const ItemsContainer: React.FC<ComponentProps<"div"> & ItemsContainerProps> = ({
	results, ...props }) => {

	return (
		<div className="items-container" {...props}>
			{results.map((v, i) => (
				<ItemCard key={`item-contain${i}-${v.itemId}`}
					item={v} />
			))}
		</div>
	)

}
