import React, { ComponentProps } from "react";
import "./itemsCarousel.css"
import { ItemsCarouselItemCard } from "./ItemsCarouselItemCard";

type ItemsCarouselProps = {}


export const ItemsCarousel: React.FC<ComponentProps<"div"> & ItemsCarouselProps> = ({ ...props }) => {

	return (
		<div className="items-carousel-container" {...props}>
			<div className="items-carousel-header">
				<div className="items-carousel-title">
					titel &#xF179;
				</div>
				<div className="items-carousel-control">
					<button className="items-carousel-control-icon">
						{"<"}
					</button>
					<button className="items-carousel-control-icon">
						{">"}
					</button>
				</div>
			</div>
			<div className="items-carousel-items">
				<ItemsCarouselItemCard />
				<ItemsCarouselItemCard />
				<ItemsCarouselItemCard />
			</div>
		</div>
	)

}
