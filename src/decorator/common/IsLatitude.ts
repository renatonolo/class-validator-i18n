import { IsLatitude as _IsLatitude, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsLatitude(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsLatitude(translate(translation, 'isLatitude', validationOptions));
}
