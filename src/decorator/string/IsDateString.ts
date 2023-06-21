import { ValidationOptions, IsDateString as _IsDateString } from 'class-validator';
import ValidatorJS from 'validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsDateString(
  options?: ValidatorJS.IsISO8601Options,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return _IsDateString(options, translate(Translations.isDateString, validationOptions));
}
