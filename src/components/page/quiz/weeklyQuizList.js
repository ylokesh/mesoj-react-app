import React, {Component} from 'react';
import CardView from './cardView';

class WeeklyQuizList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			weekQuiz: [
				{id: 1, name: 'Week 1', correct: '14', wrong: '1', percent: '87', colorCss: 'blueCardBox'},
				{id: 2, name: 'Week 2', correct: '8', wrong: '12', percent: '41', colorCss: 'blueCardBox'}
			],
			totalWeekScore: {id: 0, name: 'Overview', correct: 0, wrong: 0, percent: 0, colorCss: 'whiteCardBox'}
		};
	}

	renderQuiz() {
		let {weekQuiz, totalWeekScore} = this.state;
		let CalPercentage = 0;
		totalWeekScore.correct = 0;
		totalWeekScore.wrong = 0;
		return weekQuiz.map((item, idx) => {
			totalWeekScore.correct += parseInt(item.correct);
			totalWeekScore.wrong += parseInt(item.wrong);
			CalPercentage += parseInt(item.percent);
			totalWeekScore.percent = parseInt(CalPercentage) / (idx + 1);
			return (
				<div key={idx} className='mb-2'>
					<CardView card={item} />
				</div>
			);
		});
	}

	render() {
		let {totalWeekScore} = this.state;
		return (
			<div>
				<div className='mb-2'>
					<CardView card={totalWeekScore} />
				</div>
				{this.renderQuiz()}
			</div>
		);
	}
}

export default WeeklyQuizList;
