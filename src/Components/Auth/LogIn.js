import React, { useState } from 'react';
import logo from '../../Assets/logo.svg';
import { TiEye, TiTimes } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import './Auth.css';

const LogIn = () => {
	const handleSubmit = (e) => {
		e.preventdefault();
	};

	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<section className='auth__section'>
				<div className='auth__card'>
					<div className='auth__icon'>
						<TiTimes />
					</div>
					<div className='auth__logo'>
						<img src={logo} alt='logo' />
						<h1>Bookie</h1>
					</div>
					<div className='auth__header'>
						<h2>Login</h2>
						<p>Welcome back</p>
					</div>
					<form onSubmit={handleSubmit} className='auth__form'>
						<label htmlFor='phoneNumber'>Phone Number</label>
						<input
							type='text'
							name='phoneNumber'
							id='phoneNumber'
							placeholder='Enter phone Number'
						/>
						<label htmlFor='password'>Enter Password</label>
						<div className='auth__password'>
							<input
								type={showPassword ? 'text' : 'password'}
								name='password'
								id='password'
								placeholder='********'
							/>
							<div
								className='auth__show'
								onClick={() => setShowPassword(!showPassword)}
							>
								<TiEye />
								<p>{showPassword ? 'hide' : 'show'}</p>
							</div>
						</div>
						<div className='auth__forgot'>
							<select name='' id=''>
								Remember me
							</select>
							<p>
								<Link to='/ForgotPassword1'>Forgot Password?</Link>
							</p>
						</div>
						<button className='auth__btn' type='button'>
							<Link>Login</Link>
						</button>
					</form>
					<div className='auth__footer'>
						<p>
							Don,t have Bookie Account? <Link to='/SignUp'> Sign Up </Link>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default LogIn;
