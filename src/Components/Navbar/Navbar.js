import React, { useState } from 'react';
import logo from '../../Assets/logo.svg';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { TiThMenu, TiTimes } from 'react-icons/ti';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const navigate = useNavigate();
	const [dropdown, setDropdown] = useState(false);
	const [mobDropdown, setMobDropdown] = useState(false);
	return (
		<nav className='container'>
			<div className='nav__container'>
				<div className='nav__logo'>
					<img src={logo} alt='open book' />
					<h1> Bookie </h1>
				</div>
				<ul className='nav__lists'>
					<li className='nav__list'>Home</li>
					<li className='nav__list'>About</li>
					<li className='nav__list' onClick={() => setDropdown(!dropdown)}>
						Services {dropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
					</li>
					<li className='nav__list'>
						More
						<MdKeyboardArrowDown />
					</li>
				</ul>

				<div className='nav__btns'>
					<Button primary type='button' onClick={() => navigate('/LogIn')}>
						Log In
					</Button>
					<Button type='button' onClick={() => navigate('/SignUp')}>
						Sign Up
					</Button>
				</div>
				<div className='mobile__header'>
					<button
						type='button'
						className='mobile__header--btn'
						onClick={() => navigate('/LogIn')}
					>
						Log In
					</button>
					<div onClick={() => setNav(!nav)} className='nav__icon'>
						{!nav ? <TiThMenu /> : <TiTimes className='mobile__icon' />}
					</div>
				</div>
			</div>
			<div className={!nav ? 'mobile__nav' : 'mobile__nav show'}>
				<div onClick={() => setNav(!nav)} className='mobile__icon'>
					{!nav ? <TiThMenu className='nav__icon' /> : <TiTimes />}
				</div>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li onClick={() => setMobDropdown(!mobDropdown)}>
						Services
						{mobDropdown ? (
							<MdKeyboardArrowUp />
						) : (
							<IoIosArrowForward className='list__icon' />
						)}
						{mobDropdown && (
							<ul className='mobile__dropdown'>
								<li>Save Money</li>
								<li>Buy Books</li>
							</ul>
						)}
					</li>
					<li>
						More
						<IoIosArrowForward className='list__icon' />
					</li>
				</ul>
			</div>
			{dropdown && (
				<ul className='nav__dropdown'>
					<li>Save Money</li>
					<li>Buy Books</li>
				</ul>
			)}
			{mobDropdown && (
				<ul className='mobile__dropdown'>
					<li>Save Money</li>
					<li>Buy Books</li>
				</ul>
			)}
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
