import { IsBase58 as _IsBase58, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsBase58(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsBase58(translate(translation, 'isBase58', validationOptions));
}
