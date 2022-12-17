import React from 'react';
import bookImg1 from '../../Assets/books-img1.svg';
import bookImg2 from '../../Assets/books-img2.svg';
import bookImg3 from '../../Assets/books-img3.svg';
import bookImg4 from '../../Assets/books-img4.svg';
import bookImg5 from '../../Assets/books-img5.svg';
import bookImg6 from '../../Assets/books-img6.svg';
import { AiFillStar } from 'react-icons/ai';

const bookItems = [
	{
		id: 1,
		desc: 'Advanced Chemistry',
		category: 'Senior-Secondary',
		image: bookImg1,
		rate: <AiFillStar />,
		price: 3500
	},
	{
		id: 2,
		desc: 'Nursery Rhyme',
		category: 'Nursery School',
		image: bookImg2,
		rate: <AiFillStar />,
		price: 2500
	},
	{
		id: 3,
		desc: 'Essential Biology',
		category: 'Senior-Secondary',
		image: bookImg3,
		rate: <AiFillStar />,
		price: 3500
	},
	{
		id: 4,
		desc: 'Mathematics Breakdown',
		category: 'Junior-Secondary',
		image: bookImg4,
		rate: <AiFillStar />,
		price: 3500
	},
	{
		id: 5,
		desc: 'Quantitative Reasoning',
		category: 'Primary School',
		image: bookImg5,
		rate: <AiFillStar />,
		price: 1500
	},
	{
		id: 6,
		desc: 'Phonics Worksheet',
		category: 'Nursery School',
		image: bookImg6,
		rate: <AiFillStar />,
		price: 3500
	}
];

export default bookItems;
