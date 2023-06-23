import { ValidationOptions, IsDecimal as _IsDecimal } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsDecimal(
  options?: ValidatorJS.IsDecimalOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsDecimal(options, translate(translation.isDecimal, validationOptions));
}
