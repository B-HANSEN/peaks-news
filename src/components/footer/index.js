import React, { useEffect, useState } from 'react';
import Snackbar from '../../components/snackbar';
import './footer.css';

const Footer = param => {
	const [showSnackbar, setShowSnackbar] = useState(false);
	const bookmark = param.param;

	useEffect(() => {
		setShowSnackbar(true);
		const timeout = setTimeout(() => setShowSnackbar(false), 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, [param]);

	return (
		<>
			<section className='reactangle__copy' />
			{showSnackbar && <Snackbar param={bookmark} />}
		</>
	);
};

export default Footer;
