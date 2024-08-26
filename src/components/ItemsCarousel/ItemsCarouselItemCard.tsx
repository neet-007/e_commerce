import React, { ComponentProps } from "react";
import "./itemsCarousel.css"

type ItemsCarouselItemCardProps = {}


export const ItemsCarouselItemCard: React.FC<ComponentProps<"div"> & ItemsCarouselItemCardProps> = ({ ...props }) => {

	return (
		<div className="items-carousel-item-card-container" {...props}>
			<img className="items-carousel-item-card-img"
				src="src/assets/head_phone_black.jpg" alt="" />
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
