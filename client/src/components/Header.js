import React from 'react';

const Header = () => {
	return (
		<nav>
			<div class="nav-wrapper">
				<a href="#" class="left brand-logo">
					Feedback
				</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li>
						<a href="#">Login with Google</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
