import React from 'react';
import {Link} from 'react-router-dom';

export default function ErrorPage(location) {
	return (
		<div className='page-error col-12'>
			<div className='page-error--content'>
				<div className='d-flex align-items-center justify-content-center text-center'>
					<div className='text-white p-5'>
						{/* <img className='mb-5 pb-2' src={logo} alt='mësoj' width='190' /> */}
						<h1 className='mb-3 heading-tertiary'>
							<p>You have reached the end of the internet.</p>
						</h1>
						<p className='mb-5'>Just kidding. There's just nothing here.</p>
						<div>
							<Link className='btn d-inline-block button button-primary mr-3 ml-3 text-uppercase' to='/'>
								Back to home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
