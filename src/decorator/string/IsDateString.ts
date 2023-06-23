import { ValidationOptions, IsDateString as _IsDateString } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsDateString(
  options?: ValidatorJS.IsISO8601Options,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsDateString(options, translate(translation.isDateString, validationOptions));
}
