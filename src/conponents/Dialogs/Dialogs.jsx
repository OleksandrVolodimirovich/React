import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

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
