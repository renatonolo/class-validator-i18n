import { IsCurrency as _IsCurrency, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsCurrency(
  options?: ValidatorJS.IsCurrencyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsCurrency(options, translate(translation, 'isCurrency', validationOptions));
}
