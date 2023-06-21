import { ValidationOptions, IsDate as _IsDate } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsDate(validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsDate(translate(Translations.isDate, validationOptions));
}
