import { ValidationOptions, IsUrl as _IsUrl } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsUrl(options?: ValidatorJS.IsURLOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsUrl(options, translate(translation.isUrl, validationOptions));
}
