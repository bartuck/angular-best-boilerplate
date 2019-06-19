import { Params } from '@angular/router';

import { en_GB } from '../translations/en_GB.const';
import { Translations } from './core/interfaces/translations.interface';

export abstract class AppController {
  /**
   * Routing data for all child components
   */
  public routing: Params = {};

  /**
   * Current translations for all child components
   */
  public trans: Translations = en_GB;
}
