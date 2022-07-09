import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
	const activeLink = (navData) => (navData.isActive ? s.active : s.item);
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink
					to="/profile"
					className={activeLink}
				>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/messages"
					className={activeLink}
				>
					Messages
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/news"
					className={activeLink}
				>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/music"
					className={activeLink}
				>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/settings"
					className={activeLink}
				>
					Setting
				</NavLink>
			</div>
		</nav>
	);
};
export default Navbar;
