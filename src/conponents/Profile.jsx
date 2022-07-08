import React from "react";
import s from './Profile.module.css';

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
			<div>
				my post
				<div>new post</div>
				<div className={s.posts}>
					<div className={s.item}>post1</div>
					<divi>post2</divi>
				</div>
			</div>
		</div>
	);
};
export default Profile;
