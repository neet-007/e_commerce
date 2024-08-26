import React, { ComponentProps } from "react";
import "./itemcard.css"
import { Button } from "../Shared/Button";

export type ItemCardProps = {
	itemId: number
	title: string
	optionsSelector: string[]
	optionsSelectorClr: string[]
	description: string
	price: { amount: number, currency: string }
}


export const ItemCard: React.FC<ComponentProps<"div"> & ItemCardProps> = ({
	id, title, optionsSelector, optionsSelectorClr, description, price,
	...props }) => {

	return (
		<div className="item-card-container" {...props}>
			<div className="item-card-title">
				{title}
			</div>
			<img className="item-card-img" src="/head_phone_black.jpg" />
			<div className="item-card-options">
				<div className="item-card-option">
					{optionsSelector.length === 0 ?
						null :
						optionsSelector.map((s, i) => (
							<button key={`${s}-${i}-item${id}-card`}
								className="item-card-option-selector">
								{s}
							</button>
						))
					}
				</div>
				<div className="item-card-option">
					{optionsSelectorClr.length === 0 ?
						null :
						optionsSelectorClr.map((s, i) => (
							<button key={`${s}-${i}-item${id}-clr`}
								className="item-card-option-selector">
								<div className="item-card-option-selector-clr"
									style={{ backgroundColor: s }}>
								</div>
								<div>
									{s}
								</div>
							</button>
						))
					}
				</div>
			</div>
			<div className="item-card-description">
				{description}
			</div>
			<div className="item-card-footer">
				<div className="item-card-footer-item">
					<span>{price.amount}</span>
					<span>{price.currency}</span>
				</div>
				<Button variant="primary"
					size="md"
					roundedCorners
					className="item-card-footer-item">
					add to cart
				</Button>
			</div>
		</div>
	)

}
