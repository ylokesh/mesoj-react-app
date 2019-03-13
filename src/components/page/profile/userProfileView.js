import React, { Component } from 'react';
import { loadUserProfile, updateUserProfile } from '../../../redux/actions/profile'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class UserProfileView extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        if(this.props.item.length){
            let {item} = this.props;
            this.setState({
                photo: item[0].photo,
                fullname: item[0].fullname,
                email: item[0].email,
                phone:item[0].phone,
                subject:item[0].subject,
                id:item[0].id,
                user_id:item[0].user_id
            })
        }
    }
 
    componentDidUpdate() {
    }
    handleChange(e) {
        let fieldId = e.target.id;
        let fieldValue = e.target.value;
        this.setState({ [fieldId]: fieldValue })
    }
    handleForm(e) {
        e.preventDefault()
        let { onUpdateUser } = this.props;
        let { photo,fullname, email, phone, subject,id,user_id } = this.state;
        if (onUpdateUser) {
            onUpdateUser({ photo,fullname, email, phone, subject,id, user_id })
        }
    }
    renderForm() {
        if(this.state){
            let { photo,fullname, email, phone, subject } = this.state;
         return(   
            <div className="card card-default profilePage">
                <div className="card-header">User Profile</div>
                <div className="card-body">
                <form onSubmit={e => this.handleForm(e)}>
                        <div className="form-group text-center">
                            <img src={'images/'+photo} className="profilePic"/>
                        </div>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input className="form-control" id="fullname" value={fullname} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" id="email" value={email} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input className="form-control" id="phone" value={phone} onChange={e => this.handleChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <select className="form-control" id="subject" value={subject} onChange={e => this.handleChange(e)}>
                                {['XI', 'XII', 'XIII', 'XIV', 'XV'].map((n, idx) => <option key={idx}>{n}</option>)}
                            </select>
                        </div>
                        <button className="btn btn-sm btn-primary">Save</button>
                    </form>
                </div>
            </div>
         )
        }
    }
    
    render() {
        let {item} = this.props;
        return (
            <div>
                {this.renderForm() }
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    userData: state,
    userProfile: state.UserProfile
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

export default connectToStore(UserProfileView);

