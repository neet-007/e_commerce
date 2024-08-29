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
			<Link to="/" className="link-none">
				<div className="nav-bar-logo">
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
						<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
					</svg>
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
				<div className="cursor-pointer">
					<NavbarSearch />
				</div>
				<Link to="/cart">
					<CartIcon className="cursor-pointer" />
				</Link>
				<div className="nav-bar-menu">
					<button onClick={() => setIsNavOpen(prev => !prev)}
						className="button-none">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
						</svg>
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
