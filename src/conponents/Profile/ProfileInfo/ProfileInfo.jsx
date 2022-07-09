import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
    <div>
			<div>
				<img
					src="https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg"
					alt="slider"
				/>
			</div>
			<div className={s.descriptionBlock}>avatar + discription</div>
		</div>
	);
};
export default ProfileInfo;
