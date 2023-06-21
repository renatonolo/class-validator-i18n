import { ValidationOptions, Max as _Max } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function Max(maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return _Max(maxValue, translate(Translations.max, validationOptions));
}
