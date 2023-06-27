import { IsTimeZone as _IsTimeZone, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsTimeZone(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsTimeZone(translate(translation, 'isTimeZone', validationOptions));
}
