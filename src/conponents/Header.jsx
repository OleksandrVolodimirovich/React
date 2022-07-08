import React from "react";
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<img
				src="https://www.shareicon.net/data/256x256/2015/09/15/101515_logo_512x512.png"
				alt="ico"
			/>
		</header>
	);
};
export default Header;
