import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bookmark from '../../assets/Bookmark.png';
import Empty_thumbnail from '../../assets/Empty_thumbnail.png';
import Loader from '../../components/loader';
import { getCategoryStories, getTopStories } from '../../utility/endpoint';
import './topStories.css';

const TopStories = () => {
	const [loading, setLoading] = useState(true);
	const [topStories, setTopStories] = useState([]);
	const [categoryStories, setCategoryStories] = useState([]);
	const [filter, setFilter] = useState('new');

	useEffect(() => {
		const fetchAllStories = async () => {
			let topStoryArticles = await getTopStories(filter);
			let articlesByCategory = await getCategoryStories(filter);
			setTopStories(topStoryArticles.results);
			setCategoryStories(articlesByCategory.results);
			setLoading(false);
		};
		fetchAllStories();
	}, [filter]);

	const firstArticle = topStories[0]?.id;
	const secondArticle = topStories[1]?.id;
	const thirdArticle = topStories[2]?.id;
	const fourthArticle = topStories[3]?.id;
	const fifthArticle = topStories[4]?.id;
	const sixthArticle = topStories[5]?.id;
	const seventhArticle = topStories[6]?.id;
	const eighthArticle = topStories[7]?.id;

	const firstCatArticle = categoryStories[0]?.id;
	const secondCatArticle = categoryStories[1]?.id;
	const thirdCatArticle = categoryStories[2]?.id;

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='landing__page'>
					<section>
						<p className='topStories'>Top stories</p>
						<Link to='/bookmarks'>
							<div className='button__bookmark'>
								<div className='frame'>
									<div className='icon'>
										<img src={Bookmark} alt='bookmark_logo' />
									</div>
									<span className='button--text'>view bookmark</span>
								</div>
							</div>
						</Link>
						<select
							id='time'
							// defaultValue='new'
							onChange={e => setFilter(e.target.value)}
							className='dropdown'
						>
							<option value='new'>Newest first</option>
							<option value='old'>Oldest first</option>
						</select>
					</section>
					<section className='group__topStories'>
						<Link to={`/${firstArticle}`}>
							<div className='card6'>
								<img
									src={topStories[0]?.fields.thumbnail}
									style={{ height: 287, width: 540 }}
									alt='first_article'
								/>
								<div className='card6__rectangle'>
									<div className='card6__title'>{topStories[0]?.webTitle}</div>
									<div className='card6__title--copy'>
										{topStories[0]?.fields.trailText}
									</div>
								</div>
							</div>
						</Link>

						<section>
							<Link to={`/${secondArticle}`}>
								<div className='card3'>
									<img
										style={{ height: 148, width: 255 }}
										src={topStories[1]?.fields.thumbnail}
										alt='second_article'
									/>
									<div className='card3__reactangle--copy2'>
										<div className='card3__title'>
											{topStories[1]?.webTitle}
										</div>
									</div>
								</div>
							</Link>
							<Link to={`/${thirdArticle}`}>
								<div className='card3__copy'>
									<img
										style={{ height: 148, width: 255 }}
										src={topStories[2]?.fields.thumbnail}
										alt='third_article'
									/>
									<div className='card3__copy__reactangle--copy2'>
										<div className='card3__copy--title'>
											{topStories[2]?.webTitle}
										</div>
									</div>
								</div>
							</Link>
						</section>
						<section>
							<Link to={`/${fourthArticle}`} className='card3__noimage'>
								<div className='card3__noimage--rectangle__copy'>
									<div className='card3__noimage--title'>
										{topStories[3]?.webTitle}
									</div>
								</div>
							</Link>
							<Link to={`/${fifthArticle}`} className='card3__noimage--right'>
								<div className='card3__noimage--rectangle__copy'>
									<div className='card3__noimage--title'>
										{topStories[4]?.webTitle}
									</div>
								</div>
							</Link>
						</section>
						<section className='middle__section'>
							<Link to={`/${sixthArticle}`}>
								<div className='card4'>
									<img
										src={topStories[5]?.fields.thumbnail || Empty_thumbnail}
										style={{ height: 216, width: 350 }}
										alt='sixth_article'
									/>
									<div className='card4__rectangle--copy2'>
										<div className='card4__rectangle--copy2__title'>
											{topStories[5]?.webTitle}
										</div>
										<div className='card4__rectangle--copy2__title--copy'>
											{topStories[5]?.fields.trailText}
										</div>
									</div>
								</div>
							</Link>
							<Link to={`/${seventhArticle}`}>
								<div className='card4__copy'>
									<img
										src={topStories[6]?.fields.thumbnail || Empty_thumbnail}
										style={{ height: 216, width: 350 }}
										alt='seventh_article'
									/>
									<div className='card4__copy__rectangle--copy2'>
										<div className='card4__copy__rectangle--copy2__title'>
											{topStories[6]?.webTitle}
										</div>
										<div className='card4__copy__rectangle--copy2__title--copy'>
											{topStories[6]?.fields.trailText}
										</div>
									</div>
								</div>
							</Link>
							<Link to={`/${eighthArticle}`}>
								<div className='card4__copy2'>
									<img
										src={topStories[7]?.fields.thumbnail || Empty_thumbnail}
										style={{ height: 216, width: 350 }}
										alt='eighth_article'
									/>
									<div className='card4__copy2__rectangle--copy2'>
										<div className='card4__copy2__rectangle--copy2__title'>
											{topStories[7]?.webTitle}
										</div>
										<div className='card4__copy2__rectangle--copy2__title--copy'>
											{topStories[7]?.fields.trailText}
										</div>
									</div>
								</div>
							</Link>
						</section>
					</section>
					<section className='category'>
						<p className='category__header'>Sports</p>
					</section>
					<section className='group3'>
						<Link to={`/${firstCatArticle}`}>
							<div className='card4__copy3'>
								<img
									src={categoryStories[0]?.fields.thumbnail || Empty_thumbnail}
									style={{ height: 216, width: 350 }}
									alt='ninth_article'
								/>
								<div className='card4__copy3__rectangle--copy2'>
									<div className='card4__copy3--title'>
										{categoryStories[0]?.webTitle}
									</div>
								</div>
							</div>
						</Link>
						<Link to={`/${secondCatArticle}`}>
							<div className='card4__copy4'>
								<img
									src={categoryStories[1]?.fields.thumbnail || Empty_thumbnail}
									style={{ height: 216, width: 350 }}
									alt='tenth_article'
								/>
								<div className='card4__copy4__rectangle--copy2'>
									<div className='card4__copy4--title'>
										{categoryStories[1]?.webTitle}
									</div>
								</div>
							</div>
						</Link>
						<Link to={`/${thirdCatArticle}`}>
							<div className='card4__copy5'>
								<img
									src={categoryStories[2]?.fields.thumbnail || Empty_thumbnail}
									style={{ height: 216, width: 350 }}
									alt='eleventh_article'
								/>
								<div className='card4__copy5__rectangle--copy2'>
									<div className='card4__copy5--title'>
										{categoryStories[2]?.webTitle}
									</div>
								</div>
							</div>
						</Link>
					</section>
				</div>
			)}
		</>
	);
};

export default TopStories;
