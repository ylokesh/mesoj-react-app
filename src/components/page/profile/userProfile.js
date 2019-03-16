import React, {Component} from 'react';
import {loadUserProfile, updateUserProfile} from '../../../redux/actions/profile';
import UserProfileView from './userProfileView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UserProfile extends Component {
	componentDidMount() {
		let {actions} = this.props;
		actions.loadUserProfile(1);
	}

	componentDidUpdate() {}
	updateProfile(userProfile) {
		let {actions} = this.props;
		actions.updateUserProfile(userProfile);
	}

	renderProfile() {
		let {userProfile} = this.props;
		if (userProfile.length !== 0) {
			return <UserProfileView item={userProfile} onUpdateUser={userProfile => this.updateProfile(userProfile)} />;
		}
	}

	render() {
		return <div>{this.renderProfile()}</div>;
	}
}

const mapStateToProps = (state, ownProps) => ({
	userData: state,
	userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({loadUserProfile, updateUserProfile}, dispatch)
});

const connectToStore = connect(
	mapStateToProps,
	mapDispatchToProps
);

export default connectToStore(UserProfile);
