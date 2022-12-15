import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import booksImg from '../../Assets/books-img.svg';
import './Books.css';

const Books = () => {
	return (
		<>
			<section className='books__container'>
				<div className='books__content'>
					<h1>Books</h1>
					<div>
						<div className='books__links'>
							<p className='active'>Recommended</p>
							<p>Nursery School</p>
							<p>Primary School</p>
							<p>Junior-Secondary</p>
							<p>Senior-Secondary</p>
						</div>
						<div className='books__cards'>
							<div className='books__card'>
								<img src={booksImg} alt='a chemistry book' />
								<div className='books__info'>
									<div className='books__div'>
										<p className='books__name'>Advanced Chemistry</p>
										<p>Senior -Secondary</p>
										<div className='books__rating'>
											<AiFillStar className='books__rate' />
											<AiFillStar className='books__rate' />
											<AiFillStar className='books__rate' />
											<AiFillStar className='books__rate' />
											<AiFillStar className='books__rate' />
										</div>
									</div>
									<div className='books__price'>
										<p>NGN3,500</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Books;
