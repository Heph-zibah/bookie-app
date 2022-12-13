import React from 'react';
import './Buy.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import buyImg from '../../Assets/buy-img.svg';

const Buy = () => {
	return (
		<>
			<section className='wrapper'>
				<div className='buy__container'>
					<div className='buy__img'>
						<img src={buyImg} alt='a father reading with his children' />
					</div>
					<div className='buy__content'>
						<h1>Buy Books</h1>
						<p>You can buy books on Bookie and have an easy access </p>
						<button>
							Learn More <MdKeyboardArrowRight />
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Buy;
