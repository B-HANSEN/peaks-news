// import here:

// header
import TopStories from '../../components/topStories';
import Sorter from '../../components/sorter';
import Categories from '../../components/categories';
// view bookmark button & filter
// sport section
// footer component with toast (added bookmark & removed bookmark) TODO: check if footer should handle the toast!

// Content area is the main section for showing app content, this will be changed according to the page that is opened, which includes:
// ● Homepage
// ● Search Result
// And also the loading screen which will be displayed on any pages that are being loaded.

const Home = () => {
	return (
		<div>
			<TopStories />
			<Sorter />
			<p>view bookmark button</p>
			<Categories />
		</div>
	);
};

export default Home;
