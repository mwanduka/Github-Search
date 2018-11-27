interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }

  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'vbqtprb1P9dWUp15fBs7XA8fYeT1h527',
    CLIENT_DOMAIN: 'tsusmita.auth0.com',
    AUDIENCE: 'https://tsusmita.auth0.com/userinfo',
    REDIRECT: 'http://github.tsusmitaportfolio.live/profile',
    SCOPE: 'openid profile'
  };
