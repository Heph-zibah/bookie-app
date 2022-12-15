import React from 'react';
import servicesImg from '../../Assets/services-img.svg';
import { MdKeyboardArrowRight } from 'react-icons/md';
import './Services.css';

const Services = () => {
	return (
		<>
			<section className='wrapper'>
				<div className='services__container'>
					<h1>The Services We Provide </h1>
					<div className='services__content'>
						<div className='services__img'>
							<img src={servicesImg} alt='happy woman holding a ball' />
						</div>
						<div className='services__info'>
							<h2>Save Money </h2>
							<p>You can have a saving wallets with Bookie</p>
							<div>
								<button>
									Learn More <MdKeyboardArrowRight />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
