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
	]

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
				<DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
			</div>
			<div className={s.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
				<Message message={messagesData[2].message} />
				<Message message={messagesData[3].message} />
			</div>
		</div>
	);
};
export default Dialogs;
