import Footer from './components/footer';
import Header from './components/header';

function App() {
	return (
		<div className='App'>
			<Header />
			<header className='App-header'>
				<h1>This will be my Peaks News App</h1>
			</header>
			<Footer />
		</div>
	);
	// render conditional: Home or Article
}

export default App;
