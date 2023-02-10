import { Routes, Route } from 'react-router-dom';
import Article from './pages/article';
import Bookmarks from './pages/bookmarks';
import Home from './pages/home';
import SearchResults from './pages/searchResults';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path=':id/*' element={<Article />} />
				<Route path='bookmarks' element={<Bookmarks />} />
				{/* <Route path='searchResults' element={<SearchResults />} /> */}
			</Routes>
		</div>
	);
}

export default App;
