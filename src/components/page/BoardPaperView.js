import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Section from '../organisms/Section';


// Actions
import {updateUserStandard} from '../../redux/actions/authActions';

class boardPaper extends Component {

	render() {
		const {user, standard} = this.props.auth;
		const showSubjectList = (
			<div className='ms-dashbaord'>

			</div>
		);

		return (
			<div className='row'>
				<div className='ms-main'>
					<div className='col-12 p-5 vh-100'></div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{updateUserStandard}
)(withRouter(boardPaper));
