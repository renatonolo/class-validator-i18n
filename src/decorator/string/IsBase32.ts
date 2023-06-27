import { IsBase32 as _IsBase32, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsBase32(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsBase32(translate(translation, 'isBase32', validationOptions));
}
