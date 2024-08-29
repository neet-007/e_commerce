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
		count: number;
		prevPage: boolean;
		nextPage: boolean;
		filters: Map<string, [string, boolean][]>
		colors: [string, boolean][]
	}
}


export const ItemsMain: React.FC<ComponentProps<"div"> & ItemsMainProps> = ({
	data, ...props }) => {
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

	return (
		<div className="items-main" {...props}>
			<ItemsContainerFilter isFilterOpen={isFilterOpen}
				setIsFilterOpen={setIsFilterOpen}
				filtersOptions={data.filters}
				colors={data.colors}
			/>
			<ItemsContainerBar setIsFilterOpen={setIsFilterOpen}
				count={data.count}
			/>
			<ItemsContainer results={data.results}
				page={data.page}
				prevPage={data.prevPage}
				nextPage={data.nextPage}
			/>
		</div>
	)

}
