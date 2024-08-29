import React, { ComponentProps } from "react";
import "./itemsContainer.css"
import { ItemCard, ItemType } from "../ItemCard/ItemCard";
import { Button } from "../Shared/Button";
import { useLocation, useNavigate } from "@tanstack/react-router";

type ItemsContainerProps = {
	results: ItemType[];
	page: number;
	prevPage: boolean;
	nextPage: boolean;
}


export const ItemsContainer: React.FC<ComponentProps<"div"> & ItemsContainerProps> = ({
	results, page, prevPage, nextPage, ...props }) => {

	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div className="items-container" {...props}>
			<div className="items-container-items">
				{results.map((v, i) => (
					<ItemCard key={`item-contain${i}-${v.itemId}`}
						item={v} />
				))}
			</div>
			<div className="items-container-buttons">
				<Button
					variant="primary"
					roundedCorners
					size="sm"
					dontHighlight
					disabled={!prevPage}
					onClick={() => {
						navigate({
							search: {
								...location.search,
								page: page - 1
							}

						})
					}}
				>
					prev
				</Button>
				{page}
				<Button
					variant="primary"
					roundedCorners
					size="sm"
					dontHighlight
					disabled={!nextPage}
					onClick={() => {
						navigate({
							search: {
								...location.search,
								page: page + 1
							}
						})
					}}
				>
					next
				</Button>
			</div>
		</div>
	)

}
