import React, { ComponentProps } from "react";
import "./itemcard.css"
import { useLocation, useNavigate } from "@tanstack/react-router";

export type ItemType = {
	itemId: number
	title: string
	optionsSelector: string[]
	optionsSelectorClr: string[]
	description: string
	price: { amount: number, currency: string }
}

export type ItemCardProps = {
	item: ItemType
}


export const ItemCard: React.FC<ComponentProps<"div"> & ItemCardProps> = ({
	item, ...props }) => {

	const location = useLocation();
	const naivate = useNavigate()
	return (
		<div className="item-card-container" {...props}>
			<div className="item-card-title">
				{item.title}
			</div>
			<img className="item-card-img" src="/head_phone_black.jpg"
				onClick={() => naivate({
					to: `${location.pathname.replace("/clothing", "")}/$productId`,
					params: { productId: String(item.itemId) }
				})}
			/>
			<div className="item-card-options">
				<div className="item-card-option">
					{item.optionsSelector.length === 0 ?
						null :
						item.optionsSelector.map((s, i) => (
							<button key={`${s}-${i}-item${item.itemId}-card`}
								className="item-card-option-selector">
								{s}
							</button>
						))
					}
				</div>
				<div className="item-card-option">
					{item.optionsSelectorClr.length === 0 ?
						null :
						item.optionsSelectorClr.map((s, i) => (
							<button key={`${s}-${i}-item${item.itemId}-clr`}
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
				{item.description}
			</div>
			<div className="item-card-footer">
				<div className="item-card-footer-item">
					<span>{item.price.amount}</span>
					<span>{item.price.currency}</span>
				</div>
			</div>
		</div>
	)

}
