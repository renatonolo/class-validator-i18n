import { IsISO31661Alpha2 as _IsISO31661Alpha2, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsISO31661Alpha2(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsISO31661Alpha2(translate(translation, 'isISO31661Alpha2', validationOptions));
}
