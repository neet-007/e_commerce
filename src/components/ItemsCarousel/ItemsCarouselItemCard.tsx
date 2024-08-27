import React, { ComponentProps } from "react";
import "./itemsCarousel.css"
import { useNavigate } from "@tanstack/react-router";

type ItemsCarouselItemCardProps = {}


export const ItemsCarouselItemCard: React.FC<ComponentProps<"div"> & ItemsCarouselItemCardProps> = ({ ...props }) => {

	const navigate = useNavigate();
	return (
		<div className="items-carousel-item-card-container" {...props}>
			<img className="items-carousel-item-card-img"
				src="/head_phone_black.jpg" alt=""
				onClick={() => navigate({
					to: "/men/$productId",
					params: { productId: "21" }
				})}
			/>
			<div className="itmes-carousel-item-card-title">
				titel
			</div>
			<div className="itmes-carousel-item-card-category">
				caregoy
			</div>
			<div className="itmes-carousel-item-card-price">
				90 sar
			</div>
		</div>
	)

}
