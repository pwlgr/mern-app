import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const FeedbackNew = () => <h2>FeedbackNew</h2>;

const App = (props) => {
	useEffect(() => {
		props.fetchUser();
	});

	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/feedbacks" component={Dashboard} />
					<Route path="/feedbacks/new" component={FeedbackNew} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default connect(null, actions)(App);
