import "./App.css";
import React from "react";
import Header from "./conponents/Header/Header";
import Navbar from "./conponents/Navbar/Navbar";
import Profile from "./conponents/Profile/Profile.jsx";
import Dialogs from "./conponents/Dialogs/Dialogs";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header/>
			<Navbar/>	
			<div className='app-wrapper-content'>
				{/* <Dialogs/> */}
				<Profile/>
			</div>		
			
		</div>
	);
};

export default App;
