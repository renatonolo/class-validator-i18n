import { ValidationOptions, IsDecimal as _IsDecimal } from 'class-validator';
import ValidatorJS from 'validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsDecimal(
  options?: ValidatorJS.IsDecimalOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return _IsDecimal(options, translate(Translations.isDecimal, validationOptions));
}
