import { IsArray as _IsArray } from 'class-validator';
import { ValidationOptions } from 'class-validator';
import { translate } from '../../translator';
import { Translations } from '../../translations';

export function IsArray(validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsArray(translate(Translations.isArray, validationOptions));
}
