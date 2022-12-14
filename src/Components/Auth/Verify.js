import React from 'react';
import logo from '../../Assets/logo.svg';
import { TiTimes } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Verify = () => {
	const handleSubmit = (e) => {
		e.preventdefault();
	};
	const navigate = useNavigate();
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
						<h2>Verification Code </h2>
						<p>Enter the Verification Code send to your Number</p>
					</div>
					<form onSubmit={handleSubmit} className='auth__form'>
						<button className='auth__btn' type='button' onClick={() => navigate('')}>
							Proceed
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Verify;
