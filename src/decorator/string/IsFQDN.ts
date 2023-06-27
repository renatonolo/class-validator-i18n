import { IsFQDN as _IsFQDN, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsFQDN(options?: ValidatorJS.IsFQDNOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsFQDN(options, translate(translation, 'isFQDN', validationOptions));
}
