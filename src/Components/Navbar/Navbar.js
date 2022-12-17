import React, { useState } from 'react';
import logo from '../../Assets/logo.svg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	return (
		<nav className='container'>
			<div className='nav__container'>
				<div className='nav__logo'>
					<img src={logo} alt='open book' />
					<h1> Bookie </h1>
				</div>
				<ul className='nav__lists'>
					<li>Home</li>
					<li>About</li>
					<li>
						Services <MdKeyboardArrowDown />
					</li>
					<li>
						More
						<MdKeyboardArrowDown />
					</li>
				</ul>
				<div className='nav__btns'>
					<Button primary type='button'>
						<Link to='/LogIn'>Log In</Link>
					</Button>
					<Button type='button'>
						<Link to='/SignUp'>Sign Up</Link>
					</Button>
				</div>
				<div onClick={() => setNav(!nav)} className='nav__icon'>
					{!nav ? <TiThMenu /> : <TiTimes className='mobile__icon' />}
				</div>
			</div>
			<div className={!nav ? 'mobile__nav' : 'mobile__nav show'}>
				<div onClick={() => setNav(!nav)} className='mobile__icon'>
					{!nav ? <TiThMenu className='nav__icon' /> : <TiTimes />}
				</div>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>
						Services <IoIosArrowForward className='list__icon' />
					</li>
					<li>
						More
						<IoIosArrowForward className='list__icon' />
					</li>
				</ul>
			</div>
		</nav>
	);
};
const Button = styled.button`
	background-color: ${(props) =>
		props.primary ? 'var(--clr-primary)' : 'white'};
	color: ${(props) => (props.primary ? 'white' : 'var(--clr-primary)')};
	padding: ${(props) => (props.primary ? '15px 42px' : '15px 35px')};
	border: ${(props) =>
		props.primary ? 'none' : '1px solid var(--clr-primary)'};
	margin-left: ${(props) => (props.primary ? '0' : '16px')};
	font-size: 18px;
	border-radius: 10px;
	outline: 0;
	font-family: 'Bree Serif', serif;
`;
export default Navbar;
