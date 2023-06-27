import { ValidationOptions, IsEmail as _IsEmail } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsEmail(
  options?: ValidatorJS.IsEmailOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsEmail(options, translate(translation, 'isEmail', validationOptions));
}
