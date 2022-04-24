import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, ChatPage } from './pages';

function App () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginPage />} />
        <Route path='/chat/:username' element={<ChatPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;