import React, { ComponentProps } from "react";
import "./itemsContainer.css"

type ItemsContainerBarProps = {}


export const ItemsContainerBar: React.FC<ComponentProps<"div"> & ItemsContainerBarProps> = ({ ...props }) => {

	return (
		<div className="items-container-bar" {...props}>
			<div>
				results
			</div>
			<div>
				filters
			</div>
		</div>
	)

}
