import { ValidationOptions, IsObject as _IsObject } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsObject(validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsObject(translate(Translations.isObject, validationOptions));
}
