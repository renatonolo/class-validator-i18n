import { IsLowercase as _IsLowercase, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsLowercase(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsLowercase(translate(translation, 'isLowercase', validationOptions));
}
