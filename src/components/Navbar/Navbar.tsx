import React, { ComponentProps, useState } from "react";
import { CartIcon } from "../Cart/CartIcon";
import "./navbar.css"
import { Link } from "@tanstack/react-router";
import { NavbarSearch } from "./NavbarSearch";

type NavbarProps = {}


export const Navbar: React.FC<ComponentProps<"nav"> & NavbarProps> = ({ ...props }) => {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	return (
		<nav className="nav-bar-nav" {...props}>
			<Link to="/">
				<div className="nav-bar-logo">
					logo
				</div>
			</Link>
			<ul className="nav-bar-ul">
				<li>
					<Link
						to="/"
						className="link"
						activeProps={{
							className: "link-active"
						}}
						activeOptions={{
							includeSearch: false
						}}
					>
						home
					</Link>
				</li>
				<li>
					<Link
						to="/men/clothing"
						className="link"
						activeProps={{
							className: "link-active"
						}}
						activeOptions={{
							includeSearch: false
						}}
						search={{
							page: 1,
							sort: "none",
							filter: "none"
						}}
					>
						men
					</Link>
				</li>
				<li>
					<Link
						to="/women/clothing"
						className="link"
						activeProps={{
							className: "link-active"
						}}
						activeOptions={{
							includeSearch: false
						}}
						search={{
							page: 1,
							sort: "none",
							filter: "none"
						}}
					>
						women
					</Link>
				</li>
				<li>
					<Link
						to="/kids/clothing"
						className="link"
						activeProps={{
							className: "link-active"
						}}
						activeOptions={{
							includeSearch: false
						}}
						search={{
							page: 1,
							sort: "none",
							filter: "none"
						}}
					>
						kids
					</Link>
				</li>
			</ul>
			<div className="nav-bar-options">
				<div>
					<NavbarSearch />
				</div>
				<Link to="/cart">
					<CartIcon />
				</Link>
				<div className="nav-bar-menu">
					<button onClick={() => setIsNavOpen(prev => !prev)}
						className="button-none">
						menue
					</button>

					<ul className={`nav-bar-side-nav ${isNavOpen ? "nav-bar-side-nav-open" : ""}`}>
						<li>
							<Link
								to="/"
								className="link"
								activeProps={{
									className: "link-active"
								}}
								activeOptions={{
									includeSearch: false
								}}
							>
								home
							</Link>
						</li>
						<li>
							<Link
								to="/men/clothing"
								className="link"
								activeProps={{
									className: "link-active"
								}}
								activeOptions={{
									includeSearch: false
								}}
								search={{
									page: 1,
									sort: "none",
									filter: "none"
								}}
							>
								men
							</Link>
						</li>
						<li>
							<Link
								to="/women/clothing"
								className="link"
								activeProps={{
									className: "link-active"
								}}
								activeOptions={{
									includeSearch: false
								}}
								search={{
									page: 1,
									sort: "none",
									filter: "none"
								}}
							>
								women
							</Link>
						</li>
						<li>
							<Link
								to="/kids/clothing"
								className="link"
								activeProps={{
									className: "link-active"
								}}
								activeOptions={{
									includeSearch: false
								}}
								search={{
									page: 1,
									sort: "none",
									filter: "none"
								}}
							>
								kids
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)

}
