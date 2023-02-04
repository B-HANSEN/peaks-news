import { Link } from 'react-router-dom';
import Loader from '../../components/loader';
import Snackbar from '../../components/snackbar';

const Article = () => {
	return (
		<div>
			<Loader />
			<Link to='/'>Click to view Home Page</Link>
			<p>bookmark button</p>
			<p>date / time: webPublicationDate [API]</p>
			<h1>article title: webTitle[API]</h1>
			<p>[opt]: Article Headline: headline [API]</p>;
			<p>Article Details: body [API]</p>;
			<p>[opt]: Article Media: showElements [API]</p>;
			<button>add /remove bookmark button</button>;
			{/* TODO: snackbar here or in footer? */}
			<Snackbar />
		</div>
	);
};

export default Article;

// Given a loaded article page.
// When: I click bookmark button, Article page screen spec (1)
// Then: I should see the snackbar showing that the article has been save
