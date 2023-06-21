import { ValidationOptions, IsBoolean as _IsBoolean } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsBoolean(validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsBoolean(translate(Translations.isBoolean, validationOptions));
}
