import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<div className={s.dialog + " " + s.active}>
					<NavLink to="/dialogs/1">Dmitro</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/2">Petro</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/3">Max</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/4">Ira</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/5">Vika</NavLink>
				</div>
			</div>
			<div className={s.massages}>
				<div className={s.massage}>Hi how are you</div>
				<div className={s.massage}>Do you have a car?</div>
				<div className={s.massage}>I liv in Lviv.</div>
			</div>
		</div>
	);
};
export default Dialogs;
