import React, { ComponentProps } from "react";
import "./itemsCarousel.css"
import { useNavigate } from "@tanstack/react-router";
import { ItemType } from "../ItemCard/ItemCard";

type ItemsCarouselItemCardProps = {
	item: ItemType;
}

export const ItemsCarouselItemCard: React.FC<ComponentProps<"div"> & ItemsCarouselItemCardProps> = ({ item, ...props }) => {

	const navigate = useNavigate();
	return (
		<div className="items-carousel-item-card-container" {...props}>
			<img className="items-carousel-item-card-img"
				src={item.imgUrl} alt=""
				onClick={() => navigate({
					to: "/men/$productId",
					params: { productId: String(item.itemId) }
				})}
			/>
			<div className="itmes-carousel-item-card-title">
				{item.title}
			</div>
			<div className="itmes-carousel-item-card-category">
				{item.title}
			</div>
			<div className="itmes-carousel-item-card-price h4">
				<span>{item.price.amount}</span>
				<span>{item.price.currency}</span>
			</div>
		</div>
	)

}
