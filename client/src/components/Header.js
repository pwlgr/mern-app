import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Payments from './Payments';

const Header = ({ auth }) => {
	const renderContent = () => {
		switch (auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<Payments />
					</li>,
					<li style={{ margin: '0 10px' }}>Credits: {auth.credits}</li>,
					<li key="2">
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	};

	return (
		<nav>
			<div className="nav-wrapper">
				<Link to={auth ? '/feedbacks' : '/'} className="left brand-logo">
					Feedback
				</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					{renderContent()}
				</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = ({ auth }) => ({
	auth
});

export default connect(mapStateToProps)(Header);
