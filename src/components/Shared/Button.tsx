import React, { ComponentProps } from "react";
import "./button.css"

type ButtonProps = {
	variant: "primary" | "secondary" | "success" | "warning"
	size: "sm" | "md" | "lg"
	roundedCorners?: boolean
	round?: boolean
}


export const Button: React.FC<ComponentProps<"button"> & ButtonProps> = ({ variant, size,
	round, roundedCorners, className, children, ...props }) => {

	return (
		<button
			className={`button-class ${variant}-color 
		    ${round ? "border-round button-round" : ""}
		    ${roundedCorners ? `${size}-button border-radius-button` :
					`${size}-button-round`}
		    ${className}`}
			{...props}>
			{children ? children : 'button'}
		</button>
	)

}
