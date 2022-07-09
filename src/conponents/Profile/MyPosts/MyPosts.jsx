import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

	let postsData = [
		{ id: 1, message: "Hello, my freand", likesCount: 14 },
		{ id: 2, message: "Do you have a car?", likesCount: 26 },
		{ id: 3, message: "I liv in Lviv.", likesCount: 45 },
		{ id: 4, message: "Do you love Ukraine?", likesCount: 30 },
	]

	return (
		<div className={s.postsBlock}>
			<h3>my posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				<Post message={postsData[0].message} like={postsData[0].likesCount}/>
				<Post message={postsData[1].message} like={postsData[1].likesCount}/>
			</div>
		</div>
	);
};
export default MyPosts;
