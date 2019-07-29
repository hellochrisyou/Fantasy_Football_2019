interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'y38c5beotlr0sHUCQlaacdlmCehcXTK6',
  domain: 'r13champ.auth0.com',
  callbackURL: 'http://localhost:4200/home'
};
