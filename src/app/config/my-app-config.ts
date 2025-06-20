export default {
  oidc: {
    clientId: '0oaothcyv6PVhH7MH5d7',
    issuer: 'https://dev-12702799.okta.com/oauth2/default',
    redirectUri: 'https://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: false,
    postLogoutRedirectUri: 'http://localhost:4200',
  }
}
