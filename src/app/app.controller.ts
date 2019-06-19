import { en_GB } from '../translations/en_GB.const';
import { Translations } from './core/interfaces/translations.interface';
import { routerConfig } from './core/config/router-config.const';
import { appConfig } from './core/config/app-config.const';
import { RouterConfig } from './core/interfaces/router-config.interface';
import { AppConfig } from './core/interfaces/app-config.interface';

export abstract class AppController {

  /**
   * Application configuration for all environments
   */
  public config: AppConfig = appConfig;

  /**
   * Routing data
   */
  public routing: RouterConfig = routerConfig;

  /**
   * Current translations
   */
  public trans: Translations = en_GB;
}
