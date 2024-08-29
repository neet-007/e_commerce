import React, { ComponentProps } from "react";
import "./itemsContainer.css"
import { Button } from "../Shared/Button";
import { useLocation, useNavigate, NavigateFn, ParsedLocation } from "@tanstack/react-router";

type ItemsContainerFilterProps = {
	isFilterOpen: boolean;
	setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
	filtersOptions: Map<string, [string, boolean][]>
	colors: [string, boolean][]
}

type CheckBoxProps = {
	item: [string, boolean];
	navigate: NavigateFn
	containerName: string
	location: ParsedLocation
}

type CheckBoxContainerProps = {
	containerName: string;
	items: [string, boolean][];
	navigate: NavigateFn
	location: ParsedLocation
}

type ButtonsContainer = {
	containerName: string;
	buttons: [string, boolean][];
	navigate: NavigateFn
	location: ParsedLocation
}


function onClick(v: [string, boolean], searchVal: string, newSearch, navigate: NavigateFn) {
	const lowerCaseVal = v[0].toLocaleLowerCase();
	//@ts-ignore
	if (newSearch[searchVal]) {
		if (v[1]) {
			//@ts-ignore
			if (newSearch[searchVal].includes(",")) {
				//@ts-ignore
				if (!newSearch[searchVal].includes("," + newSearch[searchVal])) {
					newSearch[searchVal] = newSearch[searchVal].replace(lowerCaseVal + ",", "")
				}
				newSearch[searchVal] = newSearch[searchVal].replace("," + lowerCaseVal, "")
			} else {
				//@ts-ignore
				delete newSearch[searchVal]
			}
		} else {

			//@ts-ignore
			newSearch[searchVal] = newSearch[searchVal] + "," + lowerCaseVal
		}
	}
	else {
		//@ts-ignore
		newSearch[searchVal] = lowerCaseVal
	}
	navigate({
		search: {
			...newSearch,
			page: 1
		}
	})
}

const CheckBox: React.FC<ComponentProps<"div"> & CheckBoxProps> = ({
	item, navigate, containerName, location, ...props }) => {

	return (
		<div {...props}>
			<input id={`check-box-${item}-${item}`}
				type="checkbox" value={item[0]}
				checked={item[1]}
				onChange={() => onClick(item, containerName.toLocaleLowerCase(), location.search, navigate)}
			/>
			<label htmlFor="">{item[0]}</label>
		</div>
	)
}

const CheckBoxContainer: React.FC<ComponentProps<"div"> & CheckBoxContainerProps> = ({
	containerName, items, navigate, location, ...props }) => {
	return (
		<div className="items-container-filter-checkbox" {...props}>
			<div className="h4">
				{containerName}
			</div>
			<div>
				{items.map((v, i) => (
					<CheckBox key={`checkbox-item${v[0]}-${i}`}
						item={v}
						navigate={navigate}
						location={location}
						containerName={containerName}
					/>
				))}
			</div>
		</div>

	)
}

const ButtonContainer: React.FC<ComponentProps<"div"> & ButtonsContainer> = ({
	containerName, buttons, navigate, location, ...props }) => {

	return (
		<div {...props}>
			<div className="h4">
				{containerName}
			</div>
			<div className="items-container-filter-picker">
				{buttons.map((v, i) => (
					<Button key={`button-contier-button-${v[0]}-${i}`}
						size="sm" roundedCorners
						variant="secondary"
						highlight={v[1]}
						onClick={() => onClick(v, containerName.toLocaleLowerCase(), location.search, navigate)}
					>
						{v[0]}
					</Button>
				))}
			</div>
		</div>
	)
}

export const ItemsContainerFilter: React.FC<ComponentProps<"div"> & ItemsContainerFilterProps> = (
	{ isFilterOpen, setIsFilterOpen, filtersOptions, colors, ...props }) => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div className={`items-container-filter ${isFilterOpen ? "items-container-filter-open" : ""}`} {...props}>
			<div className="items-container-filter-header">
				<div>filter</div>
				<button className="button-none"
					onClick={() => setIsFilterOpen(false)}>
					X
				</button>
			</div>
			{[...filtersOptions].map(([key, value], i) => {
				if (key === "size") {
					return <ButtonContainer
						key={`checkbox-containers-${key}-${i}`}
						containerName={key}
						buttons={value}
						navigate={navigate}
						location={location}
					/>
				}
				return <CheckBoxContainer
					key={`checkbox-containers-${key}-${i}`}
					containerName={key}
					items={value}
					navigate={navigate}
					location={location}
				/>
			})}
			<div className="items-container-filter-colors">
				{colors.map((v, i) => (
					<button key={`colors-button-${v[0]}-${i}`}
						className="button-none items-container-filter-color-button"
						onClick={() => onClick(v, "color", location.search, navigate)}
					>
						<div className="items-container-filter-color"
							style={{ backgroundColor: v[0] }}>
							{v[1] &&
								<div className="items-container-filter-color-check">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
									</svg>
								</div>
							}
						</div>
						<div>{v[0]}</div>
					</button>
				))
				}
			</div>
			<div className="items-container-filter-slider">
			</div>
			<div className="items-container-filter-margin">

			</div>
		</div>
	)

}

