import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {loginuser} from '../../redux/actions/authActions';
import TextFieldGroup from '../molecules/TextFieldGroup';
import Button from '../atoms/Button';

class Login extends Component {
	constructor() {
		super();
		this.state = {
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
		if (nextProps) {
			if (nextProps.auth.isAuthenticated) {
				this.props.history.push('/dashboard');
			}
			this.setState({
				errors: nextProps.errors
			});
		}
	}
	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	onSubmit(event) {
		event.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginuser(userData);
	}
	render() {
		let {email, password, errors} = this.state;
		return (
			<div className='page-login col-12'>
				<div className='page-landing--content'>
					<div className='d-flex justify-content-center align-items-center'>
						<div className='uxt-panel uxt-form--login'>
							<h2 className='heading-secondary mb-4'>Log In</h2>
							<form className='uxt-form' method='POST' onSubmit={this.onSubmit} noValidate>
								<div className='uxt-form--error mb-4 d-none'>
									<span>Oops! That email / password combination is not valid.</span>
								</div>
								<div className='form-group'>
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
								{/* TODO: Remember Me option to be included */}
								<div className='form-group text-center mb-5'>
									{/* Supported PROPS => primary, block, disabled, loading */}
									<Button type='submit' value='Sign In' primary block /*disabled='disabled'*/ />
								</div>
							</form>
							<div className='uxt-forgetPassword text-center mb-3'>
								<Link className='txt-secondary' to='/forgotpassword'>
									Forgot Password?
								</Link>
							</div>
							<div className='text-center'>
								<p className='txt-secondary m-0'>
									<span>Don't have an account?</span>
									<Link className='txt-secondary ml-2' to='/signup'>
										Get Started
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginuser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{loginuser}
)(Login);
