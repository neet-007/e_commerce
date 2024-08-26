import React, { ComponentProps } from "react";
import { CartIcon } from "../Cart/CartIcon";
import "./navbar.css"

type NavbarProps = {}


export const Navbar: React.FC<ComponentProps<"nav"> & NavbarProps> = ({ ...props }) => {

	return (
		<nav className="nav-bar-nav" {...props}>
			<div className="nav-bar-logo">
				logo
			</div>
			<ul className="nav-bar-ul">
				<li>home</li>
				<li>men</li>
				<li>women</li>
				<li>kids</li>
			</ul>
			<div className="nav-bar-options">
				<div>
					like
				</div>
				<div>
					search
				</div>
				<CartIcon />
				<div className="nav-bar-menu">
					menu
				</div>
			</div>
			<ul className="nav-bar-side-nav">
				<li>home</li>
				<li>men</li>
				<li>women</li>
				<li>kids</li>
			</ul>
		</nav>
	)

}
