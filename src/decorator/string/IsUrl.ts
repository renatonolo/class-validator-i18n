import { ValidationOptions, IsUrl as _IsUrl } from 'class-validator';
import ValidatorJS from 'validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsUrl(options?: ValidatorJS.IsURLOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsUrl(options, translate(Translations.isUrl, validationOptions));
}
