import { ValidationOptions, IsDate as _IsDate } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsDate(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsDate(translate(translation, 'isDate', validationOptions));
}
