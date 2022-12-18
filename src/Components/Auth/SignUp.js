import React, { useState } from 'react';
import logo from '../../Assets/logo.svg';
import { TiEye, TiTimes } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const SignUp = () => {
	const handleSubmit = (e) => {
		e.preventdefault();
	};
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
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
						<h2>Sign up</h2>
						<p>Secure an account with Bookie</p>
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
						<button
							className='auth__btn'
							type='button'
							onClick={() => navigate('/Verify')}
						>
							Proceed
						</button>
					</form>
					<div className='auth__footer'>
						<p>
							By signing up you agree to
							<Link to='/'> Bookie Term of use and Privacy Policy</Link>
						</p>
						<p>
							Already have an account. <Link to='/LogIn'> Login </Link>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default SignUp;
