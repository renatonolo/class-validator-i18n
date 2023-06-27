import { IsRFC3339 as _IsRFC3339, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsRFC3339(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsRFC3339(translate(translation, 'isRFC3339', validationOptions));
}
