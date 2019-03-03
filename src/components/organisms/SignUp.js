import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../atoms/Button';
import {connect} from 'react-redux';
import {registeruser} from '../../redux/actions/authActions';
import TextFieldGroup from '../molecules/TextFieldGroup';

class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			errors: {}
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount = () => {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({errors: nextProps.errors});
		}
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	onSubmit(event) {
		event.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		};

		this.props.registeruser(newUser, this.props.history);
	}
	render() {
		let {name, email, password, errors} = this.state;

		return (
			<div className='col-12 d-flex align-items-center justify-content-center'>
				<div className='uxt-panel uxt-form--signup m-5'>
					{/* <h2 className='heading-primary'>Start creating the future NOW.</h2> */}
					<div className='uxt-panel--heading'>
						<h2 className='heading-secondary mb-4'>Sign Up</h2>
					</div>

					<form className='uxt-form' method='POST' onSubmit={this.onSubmit}>
						<div className='form-group mb-4'>
							<TextFieldGroup
								type='text'
								name='name'
								placeholder='Your Name'
								error={errors.name}
								labelText='Name'
								onChange={this.onChange}
								value={name}
								autoComplete='true'
								aria='userFirstName'
							/>
						</div>
						<div className='form-group mb-4'>
							<TextFieldGroup
								type='email'
								name='email'
								placeholder='youremail@domain.com'
								error={errors.email}
								labelText='Email Address'
								onChange={this.onChange}
								value={email}
								autoComplete='true'
								info=''
								aria='emailHelp'
							/>
						</div>
						<div className='form-group mb-4'>
							<TextFieldGroup
								type='password'
								name='password'
								placeholder='Enter your password'
								error={errors.password}
								labelText='Password'
								onChange={this.onChange}
								value={password}
								autoComplete='true'
								aria='password'
							/>
						</div>
						{/* TODO: Button Loading state with three animated dots */}
						<div className='form-group p-0 m-0'>
							<Button onClick='' type='submit' value='Continue' primary block />
						</div>
					</form>
					<div className='mt-4 mb-4 ml-auto mr-auto divider--or'>
						<span>or</span>
					</div>
					<div className='text-center'>
						<Button cssClass='text-left button-social--facebook mb-3' onClick='' type='button' value='Sign up with Facebook' block />
						<Button cssClass='text-left button-social--google mb-4' onClick='' type='button' value='Sign up with Google' block />
						<p className='txt-secondary m-0'>
							Already have an account?{' '}
							<Link className='txt-secondary' to='/login'>
								Log In
							</Link>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

SignUp.propTypes = {
	registeruser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{registeruser}
)(withRouter(SignUp));
