import React, { ComponentProps } from "react";
import "./itemsContainer.css"
import { Button } from "../Shared/Button";

type ItemsContainerFilterProps = {
	isFilterOpen: boolean;
	setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
	filtersOptions: Map<string, string[]>
}

type CheckBoxProps = {
	item: string
}

type CheckBoxContainerProps = {
	containerName: string;
	items: string[]
}

type ButtonsContainer = {
	containerName: string;
	buttons: string[]
}

const CheckBox: React.FC<ComponentProps<"div"> & CheckBoxProps> = ({
	item, ...props }) => {
	return (
		<div {...props}>
			<input id={`check-box-${item}-${item}`}
				type="checkbox" value={item} />
			<label htmlFor="">{item}</label>
		</div>
	)
}

const CheckBoxContainer: React.FC<ComponentProps<"div"> & CheckBoxContainerProps> = ({
	containerName, items, ...props }) => {
	return (
		<div className="items-container-filter-checkbox" {...props}>
			<div>
				{containerName}
			</div>
			<div>
				{items.map((v, i) => (
					<CheckBox key={`checkbox-item${v}-${i}`}
						item={v} />
				))}
			</div>
		</div>

	)
}

const ButtonContainer: React.FC<ComponentProps<"div"> & ButtonsContainer> = ({
	containerName, buttons, ...props }) => {
	return (
		<div {...props}>
			<div>
				{containerName}
			</div>
			<div className="items-container-filter-picker">
				{buttons.map((v, i) => (
					<Button key={`button-contier-button-${v}-${i}`}
						size="sm" roundedCorners
						variant="primary">
						{v}
					</Button>
				))}
			</div>
		</div>
	)
}

export const ItemsContainerFilter: React.FC<ComponentProps<"div"> & ItemsContainerFilterProps> = (
	{ isFilterOpen, setIsFilterOpen, filtersOptions, ...props }) => {

	console.log(filtersOptions)
	return (
		<div className={`items-container-filter ${isFilterOpen ? "items-container-filter-open" : ""}`} {...props}>
			<div className="items-container-filter-header">
				<div>filter</div>
				<button className="button-none"
					onClick={() => setIsFilterOpen(false)}>
					X
				</button>
			</div>
			{[...filtersOptions].map(([key, value]) => {
				return <CheckBoxContainer containerName={key}
					items={value} />
			})}
			<ButtonContainer containerName="sizes"
				buttons={["35", "43", "44",
					"14", "41", "53"
				]} />
			<div className="items-container-filter-slider">
				slider
			</div>
		</div>
	)

}

