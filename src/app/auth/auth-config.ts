export interface AuthConfig {
	CLIENT_ID: string;
	CLIENT_DOMAIN: string;
	AUDIENCE: string;
	REDIRECT: string;
	SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
	CLIENT_ID: 'M7GTsUkU8z83BopR2qwqjBacFabAOhbI',
	CLIENT_DOMAIN: 'jeffho.auth0.com', // eg. you.auth0.com
	AUDIENCE: 'http://localhost:3000',
	REDIRECT: 'http://localhost:3000/callback',
	SCOPE: 'openid profile email'
};
