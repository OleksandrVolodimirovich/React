import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={s.item}>
			<img
				src="https://cdn.icon-icons.com/icons2/1736/PNG/128/4043274-avatar-einstein-professor-scientist_113259.png"
				alt="ava"
			/>
			{props.message}
			<div>
				<span>{props.like}</span>
			</div>
		</div>
	);
};
export default Post;
