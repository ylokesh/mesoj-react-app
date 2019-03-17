import React from 'react';

export default function Sidebar() {
	return (
		<div className='ms-sidebar'>
			<div className='vh-100 bg-brand-quinary'>
				<div className='list-group list-group-flush'>
					<a href='/#' className='list-group-item list-group-item-action active'>
						<span className='fa fa-home mr-3' />
						Home
					</a>
					<a href='/learn' className='list-group-item list-group-item-action'>
						<span className='fa fa-book-open mr-3' />
						Chapters
					</a>
					<a href='/quizzes' className='list-group-item list-group-item-action'>
						<span className='far fa-clock mr-3' />
						Quiz
					</a>
					<a href='/boardPapers' className='list-group-item list-group-item-action'>
						<span className='fas fa-chalkboard mr-3' />
						Board Papers
					</a>
				</div>
			</div>
		</div>
	);
}
