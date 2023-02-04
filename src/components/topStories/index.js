import React from 'react';
import { Link } from 'react-router-dom';
import Bookmark from '../../assets/Bookmark.png';
import { getArticles } from '../../utility/endpoint';
import './topStories.css';

const TopStories = () => {
	const [topStories, setTopStories] = React.useState([]);
	console.log('topStories: ', topStories);

	React.useEffect(() => {
		const fetchData = async () => {
			let res = await getArticles();
			setTopStories(res);
		};
		fetchData();
	}, []);

	return (
		<>
			<section className='topStories'>
				<p className='topStories__header'>Top stories</p>
				<Link to='/bookmark' className='topStories__bookmark'>
					<div className='topStories__bookmark--icon'>
						<img src={Bookmark} alt='bookmark_logo' />
					</div>
					<span className='topStories__bookmark--text'>view bookmark</span>
				</Link>
				<div className='topStories__filter'>
					<select id='time'>
						<option>Newest first</option>
						<option>Oldest first</option>
					</select>
				</div>
			</section>
			<section className='allStories'>
				<div className='uppersection'>
					<article className='uppersection--card6'>
						<div>
							<img src={topStories[0]?.fields.thumbnail} alt='first_article' />
						</div>
						<div className='uppersection--card6__headline'>
							{topStories[0]?.webTitle}
						</div>
						<div className='uppersection--card6__bodytext'>
							{topStories[0]?.fields.trailText}
						</div>
					</article>

					<div className='uppersection__right'>
						<div className='uppersection__right--top'>
							<article className='uppersection__right--top--card3'>
								<div className='uppersection__right--top--card3__thumbnail'>
									<img
										style={{ height: 148, width: 255 }}
										src={topStories[1]?.fields.thumbnail}
										alt='second_article'
									/>
									<div className='uppersection__right--top--card3__headline'>
										{topStories[1]?.webTitle}
									</div>
								</div>
							</article>
							<article className='uppersection__right--top--card3'>
								<div className='uppersection__right--top--card3__thumbnail'>
									<img
										style={{ height: 148, width: 255 }}
										src={topStories[2]?.fields.thumbnail}
										alt='second_article'
									/>
									<div className='uppersection__right--top--card3__headline'>
										{topStories[2]?.webTitle}
									</div>
								</div>
							</article>
						</div>
						<div className='uppersection__right--bottom'>
							<article className='uppersection__right--bottom--card3__small'>
								<div className='uppersection__right--top--card3__small--headline'>
									{topStories[3]?.webTitle}
								</div>
							</article>
							<article className='uppersection__right--bottom--card3__small'>
								<div className='uppersection__right--top--card3__small--headline'>
									{topStories[4]?.webTitle}
								</div>
							</article>
						</div>
					</div>
				</div>
				<div className='middlesection'>
					<article className='middlesection--card4'>art6</article>
					<article className='middlesection--card4'>art7</article>
					<article className='middlesection--card4'>art8</article>
				</div>
			</section>
			<section className='category'>
				<p className='category__header'>Sports</p>
			</section>
			<section className='categoryArticles'>
				<article className='categoryArticles--card4'>art9</article>
				<article className='categoryArticles--card4'>art10</article>
				<article className='categoryArticles--card4'>art11</article>
			</section>
		</>
	);
};

export default TopStories;

// Given a loaded website, with all articles listed.
// When: I click on a single news card.
// Then: the site should be navigated to an Article Page.
