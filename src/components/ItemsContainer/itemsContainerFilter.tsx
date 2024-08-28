import React, { ComponentProps, useRef } from "react";
import "./itemsContainer.css"
import { Button } from "../Shared/Button";
import { useLocation, useNavigate, NavigateFn } from "@tanstack/react-router";

type ItemsContainerFilterProps = {
	isFilterOpen: boolean;
	setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
	filtersOptions: Map<string, string[]>
}

type CheckBoxProps = {
	item: string;
	filters: string;
	navigate: NavigateFn
	containerName: string
}

type CheckBoxContainerProps = {
	containerName: string;
	items: string[]
	filters: string;
	navigate: NavigateFn
}

type ButtonsContainer = {
	containerName: string;
	buttons: string[];
	filters: string;
	navigate: NavigateFn
}

const CheckBox: React.FC<ComponentProps<"div"> & CheckBoxProps> = ({
	item, navigate, filters, containerName, ...props }) => {
	const loaction = useLocation();
	return (
		<div {...props}>
			<input id={`check-box-${item}-${item}`}
				type="checkbox" value={item}
				onChange={(e) => {
					navigate({
						search: {
							...loaction.search,
							[containerName.toLocaleLowerCase()]: e.target.value.toLocaleLowerCase()
						}
					})
				}}
			/>
			<label htmlFor="">{item}</label>
		</div>
	)
}

const CheckBoxContainer: React.FC<ComponentProps<"div"> & CheckBoxContainerProps> = ({
	containerName, items, navigate, filters, ...props }) => {
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
						filters={filters}
						containerName={containerName}
					/>
				))}
			</div>
		</div>

	)
}

const ButtonContainer: React.FC<ComponentProps<"div"> & ButtonsContainer> = ({
	containerName, buttons, navigate, filters, ...props }) => {
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
	const location = useLocation();
	const navigate = useNavigate();

	const filters = location.search.filter || ""
	console.log(filters)
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
					filters={filters}
					navigate={navigate}
				/>
			})}
			<ButtonContainer containerName="sizes"
				buttons={["35", "43", "44",
					"14", "41", "53"
				]}

				filters={filters}
				navigate={navigate}
			/>
			<div className="items-container-filter-slider">
				slider
			</div>
		</div>
	)

}

