import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
	const path = "/dialogs/" + props.id;
	return (
		<div className={s.dialog + " " + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<DialogItem name="Dmytro" id="1"/>
				<DialogItem name="Petro" id="2"/>
				<DialogItem name="Max" id="3"/>
				<DialogItem name="Ira" id="4"/>
				<DialogItem name="Vika" id="5"/>
			</div>
			<div className={s.messages}>
				<Message message = "Hello, my freand"/>
				<Message message = "Do you have a car?"/>
				<Message message = "I liv in Lviv."/>
				<Message message = "Do you love Ukraine?"/>
			</div>
		</div>
	);
};
export default Dialogs;
