import { Link } from 'react-router-dom';

const searchResults = () => {
	return (
		<div>
			<Link to='/'>Click to view Home Page</Link>
			<p />
			<Link to='/article'>Click to view Article Page</Link>
			<Link to='/bookmarks'>Click to view Article Page</Link>
			<h1>Search Results Page</h1>
			<p>Bookmark button</p>
		</div>
	);
};

export default searchResults;

// add view bookmarks button & filter

// Given a loaded website. When: I enter a search query.
// Then: I should see the list of articles based on a search query.
// Articles should be loaded from api by 15 elements and paginate with infinite scroll.

// Given a loaded website, with all articles listed.
// When: I click on a single news card.
// Then: the site should be navigated to an Article Page.
