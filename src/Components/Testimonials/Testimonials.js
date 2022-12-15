import React from 'react';
import avatar from '../../Assets/avatar-testimonials.svg';
import './Testimonials.css';

const Testimonials = () => {
	return (
		<>
			<section className='testimonials__container'>
				<div className='testimonials__content'>
					<h1>Testimonials</h1>
					<div className='testimonials__cards'>
						<div className='testimonials__card'>
							<img src={avatar} alt='avatar' />
							<p>
								“Bookie is a very easy platform which allow users, save money ,buy books
								and other educational Material ”
							</p>
							<strong>-Adewale 0</strong>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonials;
