import React, { ComponentProps, useState } from "react";
import "./itemsContainer.css"
import { Button } from "../Shared/Button";

type ItemsContainerFilterProps = {
	isFilterOpen: boolean;
	setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type CheckBoxProps = {
	itemName: string;
	itemValue: string | number
}

type CheckBoxContainerProps = {
	containerName: string;
	items: CheckBoxProps[]
}

type ButtonsContainer = {
	containerName: string;
	buttons: string[]
}

const CheckBox: React.FC<ComponentProps<"div"> & CheckBoxProps> = ({
	itemName, itemValue, ...props }) => {
	return (
		<div {...props}>
			<input id={`check-box-${itemName}-${itemValue}`}
				type="checkbox" value={itemValue} />
			<label htmlFor="">{itemName}</label>
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
					<CheckBox key={`checkbox-item${v.itemName}-${i}`}
						itemName={v.itemName}
						itemValue={v.itemValue} />
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
	{ isFilterOpen, setIsFilterOpen, ...props }) => {
	const [testItems, _] = useState<CheckBoxContainerProps[]>([
		{
			containerName: "container1", items: [
				{ itemName: "iteme1", itemValue: "value1" },
				{ itemName: "iteme2", itemValue: "value2" },
				{ itemName: "iteme3", itemValue: "value3" },
			]
		},
		{
			containerName: "container2", items: [
				{ itemName: "iteme4", itemValue: "value4" },
				{ itemName: "iteme5", itemValue: "value5" },
				{ itemName: "iteme6", itemValue: "value6" },
			]
		},
		{
			containerName: "container3", items: [
				{ itemName: "iteme7", itemValue: "value7" },
				{ itemName: "iteme8", itemValue: "value8" },
				{ itemName: "iteme9", itemValue: "value9" },
			]
		},
	])

	return (
		<div className={`items-container-filter ${isFilterOpen ? "items-container-filter-open" : ""}`} {...props}>
			<div className="items-container-filter-header">
				<div>filter</div>
				<button className="button-none"
					onClick={() => setIsFilterOpen(false)}>
					X
				</button>
			</div>
			{testItems.map((v, i) => (
				<CheckBoxContainer containerName={v.containerName}
					key={`container-${v.containerName}-${i}`}
					items={v.items} />
			))}
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

