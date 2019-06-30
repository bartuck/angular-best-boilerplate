/**
 * Global Configuration, i.e. languages, locale, date formats etc.
 *
 * Shared settings for all environments: dev, prod, stage etc.
 */
import { AppConfig } from '../interfaces/app-config.interface';

export const appConfig: AppConfig = {
  appTitle: 'Angular Best Boilerplate',
  browserTabTitleDelimiter: ' | ',
  defaultLanguage: 'en_GB',
  availableLanguages: ['en_GB', 'pl_PL']
};
