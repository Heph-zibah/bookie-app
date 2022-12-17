import React from 'react';
import './Books.css';
import bookItems from './BooksData';

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
							{bookItems.map((bookItem) => {
								const { id, image, desc, category, rate, price } = bookItem;
								return (
									<div key={id} className='books__card'>
										<img src={image} alt={desc} />
										<div className='books__info'>
											<div className='books__div'>
												<p className='books__name'>{category}</p>
												<p>Senior -Secondary</p>
												<div className='books__rating'>
													<i className='books__rate'>{rate}</i>
													<i className='books__rate'>{rate}</i>
													<i className='books__rate'>{rate}</i>
													<i className='books__rate'>{rate}</i>
													<i className='books__rate'>{rate}</i>
												</div>
											</div>
											<div className='books__price'>
												<p>NGN{price}</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Books;
