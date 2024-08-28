import React, { ComponentProps } from "react";
import "./itemsContainer.css"
import { Button } from "../Shared/Button";
import { useLocation, useNavigate, NavigateFn } from "@tanstack/react-router";

type ItemsContainerFilterProps = {
	isFilterOpen: boolean;
	setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
	filtersOptions: Map<string, [string, boolean][]>
}

type CheckBoxProps = {
	item: [string, boolean];
	navigate: NavigateFn
	containerName: string
}

type CheckBoxContainerProps = {
	containerName: string;
	items: [string, boolean][];
	navigate: NavigateFn
}

type ButtonsContainer = {
	containerName: string;
	buttons: string[];
	navigate: NavigateFn
}

const CheckBox: React.FC<ComponentProps<"div"> & CheckBoxProps> = ({
	item, navigate, containerName, ...props }) => {
	const location = useLocation();
	return (
		<div {...props}>
			<input id={`check-box-${item}-${item}`}
				type="checkbox" value={item[0]}
				checked={item[1]}
				onChange={(e) => {
					const newSearch = { ...location.search }
					if (newSearch[containerName.toLocaleLowerCase()]) {
						newSearch[containerName.toLocaleLowerCase()] = newSearch[containerName.toLocaleLowerCase()] + "," + e.target.value.toLocaleLowerCase()
					}
					else {
						newSearch[containerName.toLocaleLowerCase()] = e.target.value.toLocaleLowerCase()
					}
					navigate({
						search: {
							...newSearch
						}
					})
				}}
			/>
			<label htmlFor="">{item[0]}</label>
		</div>
	)
}

const CheckBoxContainer: React.FC<ComponentProps<"div"> & CheckBoxContainerProps> = ({
	containerName, items, navigate, ...props }) => {
	return (
		<div className="items-container-filter-checkbox" {...props}>
			<div>
				{containerName}
			</div>
			<div>
				{items.map((v, i) => (
					<CheckBox key={`checkbox-item${v}-${i}`}
						item={v}
						navigate={navigate}
						containerName={containerName}
					/>
				))}
			</div>
		</div>

	)
}

const ButtonContainer: React.FC<ComponentProps<"div"> & ButtonsContainer> = ({
	containerName, buttons, navigate, ...props }) => {
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
	const navigate = useNavigate();

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
					items={value}
					navigate={navigate}
				/>
			})}
			<ButtonContainer containerName="sizes"
				buttons={["35", "43", "44",
					"14", "41", "53"
				]}
				navigate={navigate}
			/>
			<div className="items-container-filter-slider">
				slider
			</div>
		</div>
	)

}

