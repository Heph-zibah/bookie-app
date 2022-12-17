import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword1 from './Components/Auth/ForgotPassword1';
import ForgotPassword2 from './Components/Auth/ForgotPassword2';
import LogIn from './Components/Auth/LogIn';
import SignUp from './Components/Auth/SignUp';
import Verify from './Components/Auth/Verify';
import Home from './Pages/Home';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/SignUp' element={<SignUp />} />
				<Route path='/Verify' element={<Verify />} />
				<Route path='/LogIn' element={<LogIn />} />
				<Route path='/ForgotPassword1' element={<ForgotPassword1 />} />
				<Route path='/ForgotPassword2' element={<ForgotPassword2 />} />
			</Routes>
		</Router>
	);
}

export default App;
