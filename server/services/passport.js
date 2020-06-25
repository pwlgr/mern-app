passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('at', accessToken);
			console.log('rt', refreshToken);
			console.log('profile', profile);
		}
	)
);
