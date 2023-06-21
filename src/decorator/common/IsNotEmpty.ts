import { ValidationOptions, IsNotEmpty as _IsNotEmpty } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsNotEmpty(validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsNotEmpty(translate(Translations.isNotEmpty, validationOptions));
}
