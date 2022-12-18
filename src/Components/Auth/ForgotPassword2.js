import React, { useState } from 'react';
import logo from '../../Assets/logo.svg';
import { TiEye, TiTimes } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const ForgotPassword2 = () => {
	const handleSubmit = (e) => {
		e.preventdefault();
	};
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [showPassword2, setShowPassword2] = useState(false);
	return (
		<>
			<section className='auth__section'>
				<div className='auth__card'>
					<div className='auth__icon' onClick={() => navigate('/')}>
						<TiTimes />
					</div>
					<div className='auth__logo'>
						<img src={logo} alt='logo' />
						<h1>Bookie</h1>
					</div>
					<div className='auth__header'>
						<h2>Reset Password </h2>
						<p>Enter Reset code and your New Password </p>
					</div>
					<form onSubmit={handleSubmit} className='auth__form'>
						<label htmlFor='code'>Enter code </label>
						<input type='text' name='code' id='code' placeholder='2359' />
						<label htmlFor='password'>New Password</label>
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
						<label htmlFor='password2'>Re type New Password</label>
						<div className='auth__password'>
							<input
								type={showPassword2 ? 'text' : 'password'}
								name='password2'
								id='password2'
								placeholder='********'
							/>
							<div
								className='auth__show'
								onClick={() => setShowPassword2(!showPassword2)}
							>
								<TiEye />
								<p>{showPassword2 ? 'hide' : 'show'}</p>
							</div>
						</div>
						<button className='auth__btn' type='button' onClick={() => navigate('')}>
							Proceed
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default ForgotPassword2;
