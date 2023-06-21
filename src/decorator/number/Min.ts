import { ValidationOptions, Min as _Min } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function Min(minValue: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return _Min(minValue, translate(Translations.min, validationOptions));
}
