import { ValidationOptions, IsString as _IsString } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsString(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsString(translate(translation, 'isString', validationOptions));
}
