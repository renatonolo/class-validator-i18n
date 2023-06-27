import { IsStrongPassword as _IsStrongPassword, IsStrongPasswordOptions, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsStrongPassword(
  options?: IsStrongPasswordOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsStrongPassword(options, translate(translation, 'isStrongPassword', validationOptions));
}
