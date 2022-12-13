import React from 'react';
import heroImg from '../../Assets/hero-img.svg';
import './Hero.css';

const Hero = () => {
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
						<button>Get Started</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Hero;
