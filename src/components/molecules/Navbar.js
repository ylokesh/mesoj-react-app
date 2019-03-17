import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutuser} from '../../redux/actions/authActions';

import {Link} from 'react-router-dom';
import logo from '../../images/logo_primary.svg';
import dashboardIcon from '../../images/dashboard.svg';

class Navbar extends Component {
	onLogoutClick(event) {
		event.preventDefault();
		this.props.logoutuser();
		this.props.history.push('/login');
	}
	render() {
		const {isAuthenticated, user} = this.props.auth;
		let {pageHeading} = this.props;

		const breadcrumb = (
			<div className='ms-breadcrumb'>
				<h2 className='heading-quinary color-light-base'>
					<img className='mr-1' src={dashboardIcon} alt='Dashboard' />
					<span>{pageHeading ? pageHeading: 'Dashboard'}</span>
				</h2>
			</div>
		);

		const authLinks = (
			<div className=''>
				<div className='ms-nav--link ms-dropdown'>
					<span className='fas fa-ellipsis-h' />
					<ul className='ms-dropdown--menu'>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
						<li>
							<Link to='/report'>Report</Link>
						</li>
						<li>
							<hr className='mb-2 bg-light-base' />
							<Link to='/login' onClick={this.onLogoutClick.bind(this)}>
								<span className='fas fa-sign-out-alt mr-2' />
								Log out
							</Link>
						</li>
					</ul>
				</div>
				<a href='/#' className='ms-nav--link'>
					<span className='far fa-bell d-block' />
				</a>
				<a href='/#' className='ms-nav--link'>
					<span className='d-block w-100 txt-tertiary'>
						{user.name}
						<br />
						{user.email}
					</span>
				</a>
			</div>
		);

		const guestLinks = (
			<div className='ms-topnav'>
				<Link className='d-inline-block text-white p-3 mr-3 mt-2' to='/login'>
					Log in
				</Link>
				<Link className='d-inline-block text-white mr-3 mt-2' to='/signup'>
					Get Started
				</Link>
			</div>
		);

		return (
			<header className='row'>
				<div className='w-100 ms-header position-fixed text-right'>
					<div className='ms-logo'>
						<Link to='/'>
							<img className='' src={logo} alt='mësoj' width='90' />
						</Link>
					</div>
					{isAuthenticated ? breadcrumb : null}
					{isAuthenticated ? authLinks : guestLinks}
				</div>
			</header>
		);
	}
}

Navbar.propTypes = {
	logoutuser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	pageHeading: state.commonSection.pageHeading,
});

export default connect(
	mapStateToProps,
	{logoutuser}
)(withRouter(Navbar));
