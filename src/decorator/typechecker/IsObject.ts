import { ValidationOptions, IsObject as _IsObject } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsObject(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsObject(translate(translation.isObject, validationOptions));
}
