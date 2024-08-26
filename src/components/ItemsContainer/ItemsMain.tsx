import React, { ComponentProps } from "react";
import "./itemsContainer.css"
import { ItemsContainerFilter } from "./itemsContainerFilter";
import { ItemsContainer } from "./ItemsContainer";
import { ItemsContainerBar } from "./ItemsContainerBar";
import { ItemCardProps } from "../ItemCard/ItemCard";

type ItemsMainProps = {
	data: {
		results: ItemCardProps[];
		page: number
	}
}


export const ItemsMain: React.FC<ComponentProps<"div"> & ItemsMainProps> = ({
	data, ...props }) => {

	return (
		<div className="items-main" {...props}>
			<ItemsContainerFilter />
			<ItemsContainerBar />
			<ItemsContainer results={data.results} />
		</div>
	)

}
