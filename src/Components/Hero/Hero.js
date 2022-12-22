import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../Assets/hero-img.svg';
import './Hero.css';

const Hero = () => {
	const navigate = useNavigate();
	return (
		<>
			<header>
				<div className='header__container'>
					<div className='header__img'>
						<img src={heroImg} alt='a young girl reading' />
					</div>
					<div className='header__content'>
						<h1>Save Money and Buy Books for Your Kids </h1>
						<p>Let us help you out. Save and Buy Books our website </p>
						<div>
							<button onClick={() => navigate('/LogIn')}>Get Started</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Hero;
