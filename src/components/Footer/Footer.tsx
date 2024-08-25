import React, { ComponentProps } from "react";

type FooterProps = {}


export const Footer: React.FC<ComponentProps<"div"> & FooterProps> = ({ ...props }) => {

	return (
		<div>hi</div>
	)

}

