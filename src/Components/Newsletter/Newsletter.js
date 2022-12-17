import React from 'react';
import newsImg from '../../Assets/new-img.svg';
import './Newsletter.css';

const Newsletter = () => {
	const handleSubmit = (e) => {
		e.preventdefault();
	};
	return (
		<>
			<section className='news__container'>
				<div className='news__content'>
					<div className='news__img'>
						<img src={newsImg} alt='a woman reading to kids in a library' />
					</div>
					<div className='news__info'>
						<h1>
							New to <span> Bookie</span>
						</h1>
						<p>Subscribe to our newsletter to get updates on our latest offers. </p>
						<form className='news__form' onSubmit={handleSubmit}>
							<input type='text' placeholder='Enter Email' />
							<div>
								<button type='button'>Subscribe</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Newsletter;
