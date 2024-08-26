import React, { ComponentProps } from "react";
import "./itemsContainer.css"
import { Button } from "../Shared/Button";

type ItemsContainerFilterProps = {}


export const ItemsContainerFilter: React.FC<ComponentProps<"div"> & ItemsContainerFilterProps> = ({ ...props }) => {

	return (
		<div className="items-container-filter" {...props}>
			<ul className="items-container-filter-ul">
				<li>category</li>
				<li>category</li>
				<li>category</li>
				<li>category</li>
				<li>category</li>
			</ul>
			<div className="items-container-filter-checkbox">
				<div>
					<label htmlFor="">label</label>
					<input type="checkbox" />
				</div>
				<div>
					<label htmlFor="">label</label>
					<input type="checkbox" />
				</div>
				<div>
					<label htmlFor="">label</label>
					<input type="checkbox" />
				</div>
			</div>
			<div className="items-container-filter-picker">
				<Button variant="primary" size="md" roundedCorners>
					picker
				</Button>
				<Button variant="primary" size="md" roundedCorners>
					picker
				</Button>
				<Button variant="primary" size="md" roundedCorners>
					picker
				</Button>
			</div>
			<div className="items-container-filter-slider">
				slider
			</div>
		</div>
	)

}

