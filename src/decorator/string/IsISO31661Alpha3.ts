import { IsISO31661Alpha3 as _IsISO31661Alpha3, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsISO31661Alpha3(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsISO31661Alpha3(translate(translation, 'isISO31661Alpha3', validationOptions));
}
