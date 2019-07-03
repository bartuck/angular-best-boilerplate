import { AppEnvironment } from '../app/core/interfaces/app-environment.interface';

export const environment: AppEnvironment = {
  production: true,
  baseApiUrl: 'https://stage.example.com/api/v1',
  security: {
    allowedOrigins: 'https://stage.example.com'
  }
};
