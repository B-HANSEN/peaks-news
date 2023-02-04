import { Link } from 'react-router-dom';
import Loader from '../../components/loader';

const Bookmarks = () => {
	return (
		<div>
			<Loader />
			<Link to='/'>Click to view Home Page</Link>
			<h1>All bookmarks</h1>;
		</div>
	);
};

export default Bookmarks;

// Given a loaded website, with all saved articles listed
// When: the news articles are loaded
// Then: I should see the list of saved articles based listed by newest first

// Given a loaded website, with all articles listed.
// When: I click on a single news card.
// Then: the site should be navigated to an Article Page.
