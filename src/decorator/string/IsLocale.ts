import { IsLocale as _IsLocale, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsLocale(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsLocale(translate(translation, 'isLocale', validationOptions));
}
