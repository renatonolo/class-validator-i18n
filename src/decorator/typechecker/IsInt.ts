import { ValidationOptions, IsInt as _IsInt } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsInt(validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsInt(translate(Translations.isInt, validationOptions));
}
