import { IsISIN as _IsISIN, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsISIN(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsISIN(translate(translation, 'isISIN', validationOptions));
}
