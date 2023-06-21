import { ValidationOptions, Length as _Length } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function Length(min: number, max?: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return _Length(min, max, translate(Translations.length, validationOptions));
}
