import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {loadLearn} from '../../../redux/actions/learnAction';

import Spinner from '../../atoms/Spinner';
import learnThumbImg from '../../../images/young_scientists.jpg';

class Learn extends Component {
	componentDidMount() {
		let {actions} = this.props;
		actions.loadLearn();
	}

	renderLearn() {
		let {learn} = this.props;
		let renderLearnList =
			learn.subjectList.length &&
			learn.subjectList.map((item, idx) => {
				let ref = '/subject/' + item.subjectTitle.toLowerCase() + '/' + item._id;
				return (
					<div key={item._id} className='col-xs-12 col-sm-6 col-md-6 col-lg-3'>
						<div className='card mb-4 shadow-sm'>
							<div className='card-body p-2' href='/#'>
								<div className='card-image overflow-hidden'>
									<img className='img-fluid' src={learnThumbImg} alt='' />
									<span className='card-cover d-block' />
									<span className='card-icon color-dark-tertiary mb-3 mt-3 heading-secondary'>
										{item.subjectTitle}
										{/* <i class='fas fa-magic' /> */}
									</span>
								</div>
								<span className='d-block txt-tertiary mb-2 color-dark-tertiary'>Total Chapters -{item.chapterCount}</span>
								<Link className='txt-secondary rounded text-white text-center bg-brand-tertiary p-2 d-block' to={ref}>
									Start Course
								</Link>
							</div>
						</div>
					</div>
				);
			});

		let noLearnDataAvailable = <div className='color-brand-primary'>No Learn Available.</div>;

		if (learn.loading) {
			renderLearnList = <Spinner />;
			noLearnDataAvailable = <Spinner />;
		}

		return learn.subjectList.length ? renderLearnList : noLearnDataAvailable;
	}

	render() {
		return (
			<div>
				<div className='ms-learn'>
					<div className='ms-main'>
						<div className='col-12 p-5 vh-100'>
							<div className='mb-2 color-brand-tertiary heading-secondary'>
								<span className='far fa-clock mr-3 color-brand-tertiary ms-theme--icon' />
								<span className='color-brand-primary' />
								Learn
							</div>
							<p className='color-light-base'>
								A team of experts has done a tremendous job to prepare the notes which are then delivered in an intuitive and engaging
								way to the users of the app.
							</p>
							<hr className='bg-dark-decnary mb-5' />
							<div className='row text-white'>{this.renderLearn()}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	learn: state.learn
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({loadLearn}, dispatch)
});

const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(Learn);
