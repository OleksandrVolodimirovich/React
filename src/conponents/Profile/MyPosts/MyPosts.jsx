import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
				<Post message='Hi true' Like='10'/>
				<Post message='This problem' Like='23'/>
			</div>
		</div>
	);
};
export default MyPosts;
