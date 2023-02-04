import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Article from './pages/article';
import Bookmarks from './pages/bookmarks';
import Home from './pages/home';
import SearchResults from './pages/searchResults';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='article' element={<Article />} />
				<Route path='bookmarks' element={<Bookmarks />} />
				<Route path='searchResults' element={<SearchResults />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
