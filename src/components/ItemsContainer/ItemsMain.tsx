import React, { ComponentProps } from "react";
import "./itemsContainer.css"
import { ItemsContainerFilter } from "./itemsContainerFilter";
import { ItemsContainer } from "./ItemsContainer";
import { ItemsContainerBar } from "./ItemsContainerBar";

type ItemsMainProps = {}


export const ItemsMain: React.FC<ComponentProps<"div"> & ItemsMainProps> = ({ ...props }) => {

	return (
		<div className="items-main" {...props}>
			<ItemsContainerFilter />
			<ItemsContainerBar />
			<ItemsContainer />
		</div>
	)

}
