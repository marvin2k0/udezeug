import {environment} from './environment';

export const AppConfig = {
  production: environment.production,
  apiUrl: (window as any).__env?.apiUrl ?? 'http://localhost:8080',
}
