import React, { ComponentProps } from "react";

type NavbarProps = {}


export const Navbar: React.FC<ComponentProps<"div"> & NavbarProps> = ({ ...props }) => {

	return (
		<div>hi</div>
	)

}
