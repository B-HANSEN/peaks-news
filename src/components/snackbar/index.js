import React from 'react';
import Bookmark from '../../assets/Bookmark.png';
import Bookmark_remove from '../../assets/Bookmark_remove.png';
import './snackbar.css';

const Snackbar = ({ param }) => {
	return (
		<>
			{param === '' && <div />}

			{param === 'add' && (
				<div className='bookmark__add'>
					<div className='bookmark__add--group8'>
						<div className='bookmark__remove--rectangle'>
							<div className='bookmark__add--group7'>
								<div className='bookmark__add--icon'>
									{' '}
									<img src={Bookmark_remove} alt='bookmark_logo' />
								</div>
								<div className='bookmark__add--text'>
									removed from bookmarks
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{param === 'remove' && (
				<div className='bookmark__add'>
					<div className='bookmark__add--group8'>
						<div className='bookmark__add--rectangle'>
							<div className='bookmark__add--group7'>
								<div className='bookmark__add--icon'>
									{' '}
									<img src={Bookmark} alt='bookmark_logo' />
								</div>
								<div className='bookmark__add--text'>saved to bookmarks</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Snackbar;
