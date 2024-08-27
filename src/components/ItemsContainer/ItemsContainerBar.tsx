import React, { ComponentProps } from "react";
import "./itemsContainer.css"

type ItemsContainerBarProps = {}


export const ItemsContainerBar: React.FC<ComponentProps<"div"> & ItemsContainerBarProps> = ({ ...props }) => {

	return (
		<div className="items-container-bar" {...props}>
			<button className="button-none">
				results
			</button>
			<button className="button-none">
				filters
			</button>
		</div>
	)

}
