import React, { Component } from 'react';
import { loadUserProfile, updateUserProfile } from '../../../redux/actions/profile'
import UserProfileView from './userProfileView'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class UserProfile extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let { actions } = this.props;
        actions.loadUserProfile(1)
    }
 
    componentDidUpdate() {
    }
    updateProfile(userProfile){
        let { actions } = this.props;
        actions.updateUserProfile(userProfile)
    }
    
    renderProfile(){
        let {userProfile,userData} = this.props;
        if(userProfile.length!=0){
            return <UserProfileView item={userProfile} onUpdateUser={userProfile => this.updateProfile(userProfile)} />
        }
    }

    render() {
        let {userProfile,userData} = this.props;
        return (
            <div>
                {this.renderProfile()}
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    userData: state,
    userProfile: state.userProfile
})

const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ loadUserProfile, updateUserProfile }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(UserProfile);

