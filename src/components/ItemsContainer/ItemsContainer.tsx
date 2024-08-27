import React, { ComponentProps } from "react";
import "./itemsContainer.css"
import { ItemCard, ItemCardProps } from "../ItemCard/ItemCard";

type ItemsContainerProps = {
	results: ItemCardProps[]
}


export const ItemsContainer: React.FC<ComponentProps<"div"> & ItemsContainerProps> = ({
	results, ...props }) => {

	return (
		<div className="items-container" {...props}>
			{results.map((v, i) => (
				<ItemCard key={`item-contain${i}-${v.itemId}`}
					itemId={v.itemId} title={v.title}
					optionsSelector={v.optionsSelector}
					optionsSelectorClr={v.optionsSelectorClr}
					description={v.description}
					price={v.price} />
			))}
		</div>
	)

}
