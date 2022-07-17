import "./App.css";
import React from "react";
import Header from "./conponents/Header/Header";
import Navbar from "./conponents/Navbar/Navbar";
import Profile from "./conponents/Profile/Profile.jsx";
import Dialogs from "./conponents/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Routes>
						<Route
							path="/dialogs/*"
							element={
								<Dialogs
									dialogs={props.state.profilePage.dialogs}
									messages={props.state.messagesPage.messages}
								/>
							}
						/>
						<Route
							path="/profile"
							element={
								<Profile
									posts={props.state.profilePage.posts}
									newPostText={props.state.profilePage.newPostText}
									addPost={props.addPost}
								/>
							}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
