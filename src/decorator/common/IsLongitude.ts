import { ValidationOptions, IsLongitude as _IsLongitude } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsLongitude(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsLongitude(translate(translation, 'isLongitude', validationOptions));
}
