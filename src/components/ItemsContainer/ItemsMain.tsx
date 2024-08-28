import React, { ComponentProps, useState } from "react";
import "./itemsContainer.css"
import { ItemsContainerFilter } from "./itemsContainerFilter";
import { ItemsContainer } from "./ItemsContainer";
import { ItemsContainerBar } from "./ItemsContainerBar";
import { ItemType } from "../ItemCard/ItemCard";

type ItemsMainProps = {
	data: {
		results: ItemType[];
		page: number;
		filters: Map<string, [string, boolean][]>
	}
}


export const ItemsMain: React.FC<ComponentProps<"div"> & ItemsMainProps> = ({
	data, ...props }) => {
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

	return (
		<div className="items-main" {...props}>
			<ItemsContainerFilter isFilterOpen={isFilterOpen}
				setIsFilterOpen={setIsFilterOpen}
				filtersOptions={data.filters} />
			<ItemsContainerBar setIsFilterOpen={setIsFilterOpen} />
			<ItemsContainer results={data.results} />
		</div>
	)

}
