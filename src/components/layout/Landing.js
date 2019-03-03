import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Landing extends Component {
	componentDidMount = () => {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	};
	render() {
		return (
			<div className='col-12 d-flex align-items-center justify-content-center text-center vh-100'>
				<div className='text-white p-5'>
					{/* <img className='mb-5 pb-2' src={logo} alt='mësoj' width='190' /> */}
					<h1 className='mb-5 heading-primary'>
						<p>Never compromize on learning.</p>
					</h1>
					<p className='txt-primary w-50 m-auto pb-5 op-8'>
						We believe that these books could be of irreplaceable assistance in helping you learning anytime anywhere.
					</p>
					<div>
						<Link className='btn d-inline-block button button-primary mr-3 ml-3 text-uppercase' to='/login'>
							Log in
						</Link>
						<Link className='btn d-inline-block button button-transparent mr-3 ml-3 text-uppercase' to='/signup'>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

Landing.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{}
)(Landing);
