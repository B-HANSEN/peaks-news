import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';
import './bookmarks.css';

const Bookmarks = () => {
	const [filter, setFilter] = useState('old');
	const [result, setResult] = useState([]);

	useEffect(() => {
		let storageObject = { ...localStorage };
		let arr = [];

		for (let key in storageObject) {
			let singleArticle = storageObject[key];
			arr.push(JSON.parse(singleArticle));
		}
		setResult(arr);
	}, []);

	const Cards = () => {
		return result.map((article, id) => {
			return (
				<Link to={`/${article[3]}`} key={id}>
					<article className='bookmarks__contents--card4'>
						<div className=''>
							<img
								src={article[1]}
								style={{ height: 216, width: 350 }}
								alt='thumbnail'
							/>
						</div>
						<div className='bookmarks__contents--card4__headline--box'>
							<div className='bookmarks__contents--card4__headline--box__text'>
								{article[0]}
							</div>
						</div>
					</article>
				</Link>
			);
		});
	};

	return (
		<>
			<Header />
			<div className='bookmarks'>
				<section className='bookmarks__topSection'>
					<div className='bookmarks__topSection--header'>All bookmark</div>;
					<select
						id='time'
						defaultValue='new'
						onChange={e => setFilter(e.target.value)}
						className='bookmarks__topSection--filter'
					>
						<option value='new'>Newest first</option>
						<option value='old'>Oldest first</option>
					</select>
				</section>
				<div className='bookmarks__contents'>
					<Cards />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Bookmarks;

// Given a loaded website, with all saved articles listed
// When: the news articles are loaded
// Then: I should see the list of saved articles based listed by newest first

// Given a loaded website, with all articles listed.
// When: I click on a single news card.
// Then: the site should be navigated to an Article Page.
