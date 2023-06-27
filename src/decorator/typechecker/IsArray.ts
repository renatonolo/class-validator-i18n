import { ValidationOptions, IsArray as _IsArray } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsArray(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsArray(translate(translation, 'isArray', validationOptions));
}
