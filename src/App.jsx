import React from 'react';
import './App.css';
import Game from './components/Game';

const App = () => {
	return (
		<div className="app">
			<h2>Tic Tac Toe Game</h2>
			<Game />
		</div>
	);
};

export default App;
