import { ValidationOptions, IsEmail as _IsEmail } from 'class-validator';
import ValidatorJS from 'validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsEmail(
  options?: ValidatorJS.IsEmailOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return _IsEmail(options, translate(Translations.isEmail, validationOptions));
}
