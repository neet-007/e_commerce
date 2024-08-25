import React, { ComponentProps } from "react";
import "./itemcard.css"
import { Button } from "../Shared/Button";

type ItemCardProps = {}


export const ItemCard: React.FC<ComponentProps<"div"> & ItemCardProps> = ({ ...props }) => {

	return (
		<div className="item-card-container" {...props}>
			<div className="item-card-title">
				Title
			</div>
			<div className="item-card-img">
				img
			</div>
			<div className="item-card-options">
				<div className="item-card-option">
					<button className="item-card-option-selector">
						sm
					</button>
					<button className="item-card-option-selector">
						md
					</button>
					<button className="item-card-option-selector">
						lg
					</button>

				</div>
				<div className="item-card-option">
					<button className="item-card-option-selector">
						<div className="item-card-option-selector-clr"
							style={{ backgroundColor: "red" }}>
						</div>
						<div>
							red
						</div>
					</button>
					<button className="item-card-option-selector">
						<div className="item-card-option-selector-clr"
							style={{ backgroundColor: "blue" }}>
						</div>
						<div>
							blue
						</div>
					</button>
					<button className="item-card-option-selector">
						<div className="item-card-option-selector-clr"
							style={{ backgroundColor: "green" }}>
						</div>
						<div>
							green
						</div>
					</button>
				</div>
			</div>
			<div className="item-card-description">
				discriptoin
			</div>
			<div className="item-card-footer">
				<div className="item-card-footer-item">
					price
				</div>
				<Button variant="primary"
					size="md"
					roundedCorners
					className="item-card-footer-item">
					button
				</Button>
			</div>
		</div>
	)

}
