export interface AppEnvironment {
  production: boolean;
  baseApiUrl: string;
  security: {
    allowedOrigins: string;
  };
}
