import React, { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import Bookmark from '../../assets/Bookmark.png';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Loader from '../../components/loader';
import { getSingleArticle } from '../../utility/endpoint';
import './article.css';

const Article = () => {
	const match = useMatch(':id/*');
	const [loading, setLoading] = useState(false);
	const [article, setArticle] = useState();
	const [bookmarkState, setBookmarkState] = useState('');
	const [param, setParam] = useState('');

	useEffect(() => {
		const fetchArticle = async () => {
			setLoading(true);
			let singleArticle = await getSingleArticle(match.pathname);
			setArticle(singleArticle);
			setLoading(false);
		};
		fetchArticle();
	}, []);

	useEffect(() => {
		const articleId = article?.content.id;
		if (localStorage.getItem(articleId)) {
			setBookmarkState('remove');
		} else setBookmarkState('add');
	}, []);

	const timestamp = article?.content.webPublicationDate;
	const title = article?.content.webTitle;
	const subtitle = article?.content.fields.trailText;
	const thumbnail = article?.content.fields.thumbnail;
	const articleId = article?.content.id;

	const parser = new DOMParser();
	const doc = parser.parseFromString(article?.content.fields.body, 'text/html');
	const body = doc.documentElement.textContent;

	const newDate = timestamp ? new Date(Date.parse(timestamp)) : new Date();
	const readDate = new Date(newDate);

	let options = {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZone: 'Europe/London',
		timeZoneName: 'short',
	};
	let formattedTime = new Intl.DateTimeFormat('en-GB', options).format(
		readDate
	);

	const handleClick = () => {
		const arr = [title, thumbnail, timestamp, articleId];

		bookmarkState === 'add'
			? ((localStorage.setItem(articleId, JSON.stringify(arr)),
			  setBookmarkState('remove')),
			  setParam('remove'))
			: (localStorage.removeItem(articleId),
			  setBookmarkState('add'),
			  setParam('add'));
	};

	return (
		<>
			<Header />
			{loading ? (
				<Loader />
			) : (
				<div className='article'>
					<button onClick={handleClick} className='article__bookmark'>
						<div className='article__bookmark--icon'>
							<img src={Bookmark} alt='bookmark_logo' />
						</div>
						<span className='article__bookmark--text'>
							{`${bookmarkState} bookmark`}
						</span>
					</button>
					<div className='article__timestamp'>{formattedTime}</div>
					<section className='article__content'>
						<div className='article__title'>{title}</div>
						<div className='article__subtitle'>{subtitle}</div>
						<div className='article__line' />
						<div className='article__body'>
							<div className='article__body--text'>{body}</div>
							<div className='article__body__image'>
								<img src={thumbnail} />
							</div>
						</div>
					</section>
				</div>
			)}
			<Footer param={param} />
		</>
	);
};

export default Article;
