// Given a loaded website, on any pages
// When: I click on the Peaks Logo
// Then: the browser should navigate to the home page.

// import search bar
import Peaks from '../../assets/Peaks.png';
import The from '../../assets/The.png';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
	return (
		<div className='header'>
			<section className='rectangle'>
				<Link to='/' className='logo__white'>
					<div className='group'>
						<div className='rectangle__theLogo'>
							<img src={The} alt='the_logo' />
						</div>
						<div className='rectangle__peaksLogo'>
							<img src={Peaks} alt='peaks_logo' />
						</div>
					</div>
				</Link>
			</section>
		</div>
	);
};

export default Header;
