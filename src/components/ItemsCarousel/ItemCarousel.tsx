import React, { ComponentProps, useRef, useState } from "react";
import "./itemsCarousel.css"
import { ItemsCarouselItemCard } from "./ItemsCarouselItemCard";

type ItemsCarouselProps = {}


export const ItemsCarousel: React.FC<ComponentProps<"div"> & ItemsCarouselProps> = ({ ...props }) => {
	const [items, _] = useState([
		<ItemsCarouselItemCard key={'car-1'} />,
		<ItemsCarouselItemCard key={'car-2'} />,
		<ItemsCarouselItemCard key={'car-3'} />,
		<ItemsCarouselItemCard key={'car-4'} />,
		<ItemsCarouselItemCard key={'car-5'} />,
		<ItemsCarouselItemCard key={'car-6'} />,
	])
	const [sliderIndex, setSliderIndex] = useState<number>(1);
	const containerRef = useRef<HTMLDivElement>(null);

	function move(dir: "l" | "r") {
		if (!containerRef.current) {
			return;
		}

		if (dir === "r") {
			setSliderIndex(prev => {
				const newIndex = Math.min(prev + 1, items.length - 1);
				containerRef.current!.style.transform = `translateX(-${33 * newIndex}%)`;
				return newIndex;
			});
		} else if (dir === "l") {
			setSliderIndex(prev => {
				const newIndex = Math.max(prev - 1, 0);
				containerRef.current!.style.transform = `translateX(-${33 * newIndex}%)`;
				return newIndex;
			});
		}
	}

	return (
		<div className="items-carousel-container" {...props}>
			<div className="items-carousel-header">
				<div className="items-carousel-title">
					titel
				</div>
				<div className="items-carousel-control">
					<button className="items-carousel-control-icon"
						disabled={sliderIndex <= 1}
						onClick={() => move("l")}>
						{"<"}
					</button>
					<button className="items-carousel-control-icon"
						disabled={items.length - (sliderIndex + 1) < 3}
						onClick={() => move("r")}>
						{">"}
					</button>
				</div>
			</div>
			<div className="items-carousel-items" ref={containerRef}>
				{items.map(v => (
					v
				))}
			</div>
		</div>
	)

}
