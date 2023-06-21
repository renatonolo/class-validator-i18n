import { IsNumberOptions, ValidationOptions, IsNumber as _IsNumber } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsNumber(options: IsNumberOptions = {}, validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsNumber(options, translate(Translations.isNumber, validationOptions));
}
