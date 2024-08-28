import React, { ComponentProps } from "react";
import "./itemcard.css"
import { ItemType } from "./ItemCard";
import { Button } from "../Shared/Button";
import { useCartContext } from "../../context/cartContext";

export type PageItemCardProps = {
	item: ItemType
}

export const PageItemCard: React.FC<ComponentProps<"div"> & PageItemCardProps> = ({
	item, ...props }) => {

	const { addItem } = useCartContext();
	console.log(item)
	return (
		<div className="page-item-card-container" {...props}>
			<div className="page-item-card-title">
				{item.title}
			</div>
			<div className="page-item-card-price">
				<span>{item.price.currency}</span>
				<span>{item.price.amount}</span>
			</div>
			<img src="/head_phone_black.jpg" alt=""
				className="page-item-card-img" />
			<div className="page-item-card-images-list">
				<img src="/head_phone_black.jpg" alt=""
					className="page-item-card-img-list-item" />
			</div>
			<div className="page-item-card-options">
				{item.optionsSelector.options.map((v, i) => (
					<button key={`item-card-${i}-${item.itemId}`}
						className="page-item-card-option">
						{v}
					</button>
				))}
			</div>
			<div className="page-item-card-options-clr">
				{item.optionsSelectorClr.map((v, i) => (
					<button key={`item-card-${i}-${item.itemId}`}
						className="page-item-card-option">
						{v}
					</button>
				))}
			</div>
			<Button variant="primary" size="md" roundedCorners
				className="page-item-card-button"
				onClick={() => addItem({ ...item })}
			>
				add to cart
			</Button>
			<div className="page-item-card-description">
				{item.description}
			</div>
		</div>
	)

}
