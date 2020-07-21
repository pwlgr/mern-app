import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Payments from './Payments';

const Header = (props) => {
	const renderContent = () => {
		switch (props.auth) {
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
					<li>
						<Payments />
					</li>,
					<li>
						<a href="/api/logout">Logout</a>
					</li>
				];
		}
	};

	const { auth } = props;

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
