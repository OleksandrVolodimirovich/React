import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img
					src="https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg"
					alt="slider"
				/>
			</div>
			<div>avatar</div>
			<MyPosts/>
		</div>
	);
};
export default Profile;
