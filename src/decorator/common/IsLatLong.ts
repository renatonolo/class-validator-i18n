import { ValidationOptions, IsLatLong as _IsLatLong } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsLatLong(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsLatLong(translate(translation, 'isLatLong', validationOptions));
}
