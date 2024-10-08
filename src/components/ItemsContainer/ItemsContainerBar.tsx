import React, { ComponentProps } from "react";
import "./itemsContainer.css"

type ItemsContainerBarProps = {
	setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
	count: number;
}


export const ItemsContainerBar: React.FC<ComponentProps<"div"> & ItemsContainerBarProps> = ({
	setIsFilterOpen, count, ...props }) => {

	return (
		<div className="items-container-bar" {...props}>
			<div className="h3">
				results ({count})
			</div>
			<button className="button-none"
				onClick={() => setIsFilterOpen(prev => !prev)}>
				filters
			</button>
		</div>
	)

}
