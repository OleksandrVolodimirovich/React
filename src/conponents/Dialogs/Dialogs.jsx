import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
	// let dialogsData = [
	// 	{ id: 1, name: "Dmytro" },
	// 	{ id: 2, name: "Petro" },
	// 	{ id: 3, name: "Max" },
	// 	{ id: 4, name: "Ira" },
	// 	{ id: 5, name: "Vika" },
	// 	{ id: 6, name: "Igor" },
	// ];

	// let messagesData = [
	// 	{ id: 1, message: "Hello, my freand" },
	// 	{ id: 2, message: "Do you have a car?" },
	// 	{ id: 3, message: "I liv in Lviv." },
	// 	{ id: 4, message: "Do you love Ukraine?" },
	// ];

	let dialogsElements = props.dialogs.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
	));

	let messageElements = props.messages.map((mes) => (
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
