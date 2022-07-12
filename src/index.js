import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [
  { id: 1, message: "Hello, my freand", likesCount: 14 },
  { id: 2, message: "Do you have a car?", likesCount: 26 },
  { id: 3, message: "I liv in Lviv.", likesCount: 45 },
  { id: 4, message: "Do you love Ukraine?", likesCount: 30 },
];

	let dialogs = [
		{ id: 1, name: "Dmytro" },
		{ id: 2, name: "Petro" },
		{ id: 3, name: "Max" },
		{ id: 4, name: "Ira" },
		{ id: 5, name: "Vika" },
		{ id: 6, name: "Igor" },
	];

	let messages = [
		{ id: 1, message: "Hello, my freand" },
		{ id: 2, message: "Do you have a car?" },
		{ id: 3, message: "I liv in Lviv." },
		{ id: 4, message: "Do you love Ukraine?" },
	];

root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>
);





