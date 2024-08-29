import React, { ComponentProps, useState } from "react";
import "./button.css"

type ButtonProps = {
	variant: "primary" | "secondary" | "success" | "warning"
	size: "sm" | "md" | "lg"
	roundedCorners?: boolean
	round?: boolean
	highlight?: boolean
	pill?: boolean
}


export const Button: React.FC<ComponentProps<"button"> & ButtonProps> = ({ variant, size,
	round, roundedCorners, className, onClick, highlight, pill, children, ...props }) => {
	const [clicked, setClicked] = useState<boolean>(highlight || false);
	return (
		<button
			className={`button-class ${variant}-color ${variant}-button
		    ${clicked ? `${variant}-button-highlight` : ""}
		    ${round ? "border-round button-round" : ""}
		    ${pill ? "button-pill" : ""}
		    ${roundedCorners ? `${size}-button border-radius-button` :
					`${size}-button-round`}
		    ${className}`}
			onClick={(e) => {
				setClicked(prev => !prev);
				onClick ? onClick(e) : undefined
			}}
			{...props}>
			{children ? children : 'button'}
		</button>
	)

}
