import React from 'react';

const Section = ({title, description, dataTiles}) => {
	return (
		<div className='mt-5'>
			<h3 className='heading-tertiary text-white mb-3'>
				{title}
				<span className='fas fa-angle-double-right ml-2 color-brand-base align-middle txt-tertiary' />
			</h3>
			<p className='txt-secondary color-dark-septnary'>{description}</p>
			{populateDataTiles(dataTiles)}
		</div>
	);
};

const populateDataTiles = dataTiles => {
	//..
};

export default Section;
