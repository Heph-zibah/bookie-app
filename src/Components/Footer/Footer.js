import React from 'react';
import logo from '../../Assets/logo.svg';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<footer>
				<div className='footer__container'>
					<div className='footer__info'>
						<div className='footer__logo'>
							<img src={logo} alt='open book' />
							<h1> Bookie </h1>
						</div>
						<p>Save Money in other to Buy Books for your children </p>
						<p>10, Publish Estate, Alakori Street, Abeokuta Ogun State </p>
						<p>Bookie@gmail.com</p>
					</div>
					<div className='footer__links'>
						<ul>
							<h2>Links</h2>
							<li>Contact Us</li>
							<li>About Us</li>
							<li>Direction</li>
							<li>Blog</li>
						</ul>
						<ul>
							<h2>My Account</h2>
							<li>Profile</li>
							<li>Savings</li>
							<li>Track History</li>
							<li>Renew Transaction</li>
						</ul>
						<ul>
							<h2>Socials</h2>
							<li>Instagram</li>
							<li>Facebook</li>
							<li>Twitter</li>
							<li>LinkedIn</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
