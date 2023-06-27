import { IsUppercase as _IsUppercase, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsUppercase(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsUppercase(translate(translation, 'isUppercase', validationOptions));
}
