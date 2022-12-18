import React from 'react';
import logo from '../../Assets/logo.svg';
import { TiTimes } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const ForgotPassword1 = () => {
	const handleSubmit = (e) => {
		e.preventdefault();
	};
	const navigate = useNavigate();
	return (
		<>
			<section className='auth__section'>
				<div className='auth__card' onClick={() => navigate('/')}>
					<div className='auth__icon'>
						<TiTimes />
					</div>
					<div className='auth__logo'>
						<img src={logo} alt='logo' />
						<h1>Bookie</h1>
					</div>
					<div className='auth__header'>
						<h2>Forget Password</h2>
						<p>Enter your Phone number to reset your Password</p>
					</div>
					<form onSubmit={handleSubmit} className='auth__form'>
						<label htmlFor='phoneNumber'>Phone Number</label>
						<input
							type='text'
							name='phoneNumber'
							id='phoneNumber'
							placeholder='Enter phone Number'
						/>

						<button
							className='auth__btn'
							type='button'
							onClick={() => navigate('/ForgotPassword2')}
						>
							Reset Password
						</button>
					</form>
					<div className='auth__footer'>
						<p>
							<Link to='/'> Back to Login</Link>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default ForgotPassword1;
