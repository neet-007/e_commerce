import React, { ComponentProps, useState } from "react";
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
	const [imgSrc, setImgSrc] = useState<number>(0);
	const [imgsSrcs, _] = useState<string[]>([
		"/head_phone_black.jpg",
		"/head_phone_red.jpg",
		"/head_phone_white.jpg",
		"/head_phone_gold.jpg",
	])
	const [options, setOptions] = useState<string[]>([]);
	const [optionsClr, setOptionsClr] = useState<string[]>([]);
	console.log(options)
	console.log(optionsClr)
	return (
		<div className="page-item-card-container" {...props}>
			<div className="page-item-card-title">
				<div className="h3">
					{item.title}
				</div>
				<div className="page-item-card-price h4">
					<span>{item.price.currency}</span>
					<span>{item.price.amount}</span>
				</div>
			</div>
			<img src={imgsSrcs[imgSrc]} alt=""
				className="page-item-card-img" />
			<div className="page-item-card-images-list">
				{imgsSrcs.map((v, i) => (
					<div className="page-item-card-img-list-item">
						{i === imgSrc &&
							<div className="page-item-card-img-list-item-selected"></div>
						}
						<img key={`item${item.itemId}img-${i}`}
							src={v} alt=""
							onMouseOver={() => setImgSrc(i)} />
					</div>
				))}
			</div>
			<div className="page-item-card-options">
				{item.optionsSelector.options.map((v, i) => (
					<button key={`item-card-${i}-${item.itemId}`}
						className={`page-item-card-option
						          ${v === options[0] ?
								"page-item-card-option-highlite"
								: ""}
							`}
						onClick={() => {
							setOptions([v])
						}}>
						{v}
					</button>
				))}
			</div>
			<div className="page-item-card-options-clr">
				{item.optionsSelectorClr.map((v, i) => (
					<button key={`item-card-${i}-${item.itemId}`}
						className={`page-item-card-option
							  ${v === optionsClr[0] ?
								"page-item-card-option-highlite"
								: ""}`}
						onClick={() => {
							setOptionsClr([v])
						}}>
						<div className="page-item-card-option-clr"
							style={{ backgroundColor: v }}>
						</div>
						<div>{v}</div>
					</button>
				))}
			</div>
			<Button variant="primary" size="md" roundedCorners
				className="page-item-card-button"
				dontHighlight
				onClick={() => {
					addItem({ ...item }, options, optionsClr)
				}}
				disabled={options.length === 0 || optionsClr.length === 0}
				pill
			>
				add to cart
			</Button>
			<div className="page-item-card-description">
				<p>dsajdksaljdklsajdksdjsakldjasdlkjdkaldjsalkdjsakdjaskljd</p>
				<p>dsajdksaljdklsajdksdjsakldjasdlkjdkaldjsalkdjsakdjaskljd</p>
				<p>dsajdksaljdklsajdksdjsakldjasdlkjdkaldjsalkdjsakdjaskljd</p>
				<p>dsajdksaljdklsajdksdjsakldjasdlkjdkaldjsalkdjsakdjaskljd</p>
				<p>dsajdksaljdklsajdksdjsakldjasdlkjdkaldjsalkdjsakdjaskljd</p>
				<p>dsajdksaljdklsajdksdjsakldjasdlkjdkaldjsalkdjsakdjaskljd</p>
				<p>dsajdksaljdklsajdksdjsakldjasdlkjdkaldjsalkdjsakdjaskljd</p>
				<p>dsajdksaljdklsajdksdjsakldjasdlkjdkaldjsalkdjsakdjaskljd</p>
			</div>
		</div>
	)

}
