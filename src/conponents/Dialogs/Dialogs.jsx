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
	return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
	let dialogsData = [
		{ id: 1, name: "Dmytro" },
		{ id: 2, name: "Petro" },
		{ id: 3, name: "Max" },
		{ id: 4, name: "Ira" },
		{ id: 5, name: "Vika" },
		{ id: 6, name: "Igor" },
	];

	let messagesData = [
		{ id: 1, message: "Hello, my freand" },
		{ id: 2, message: "Do you have a car?" },
		{ id: 3, message: "I liv in Lviv." },
		{ id: 4, message: "Do you love Ukraine?" },
	];

	let dialogsElements = dialogsData.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
	));

	let messageElements = messagesData.map((mes) => (
		<Message message={mes.message} id={mes.id} key={mes.id} />
	));

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>{dialogsElements}</div>
			<div className={s.messages}>{messageElements}</div>
		</div>
	);
};
export default Dialogs;
