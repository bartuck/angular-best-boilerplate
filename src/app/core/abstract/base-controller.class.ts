import { Params } from '@angular/router';

import { en_GB } from '../../../translations/en_GB.const';

export abstract class BaseController {
  /**
   * Routing data for all child components
   */
  public routing: Params = {};

  /**
   * Current translations for all child components
   */
  public trans: Object = en_GB;
}
