import { ValidationOptions, IsString as _IsString } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsString(validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsString(translate(Translations.isString, validationOptions));
}
