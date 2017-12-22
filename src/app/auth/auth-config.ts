export interface AuthConfig {
	CLIENT_ID: string;
	CLIENT_DOMAIN: string;
	AUDIENCE: string;
	REDIRECT: string;
	SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
	CLIENT_ID: 'J1Q17M02saU2NFo3smT4cCvF32W2l8uR',
	CLIENT_DOMAIN: 'jeffho.auth0.com', // eg. you.auth0.com
	AUDIENCE: 'http://localhost:3000',
	REDIRECT: 'http://localhost:3000/callback',
	SCOPE: 'openid profile email'
};
