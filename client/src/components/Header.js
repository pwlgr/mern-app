import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';

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
				return (
					<li>
						<a href="/api/logout">Logout</a>
					</li>
				);
		}
	};

	return (
		<nav>
			<div className="nav-wrapper">
				<a href="#" className="left brand-logo">
					Feedback
				</a>
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
