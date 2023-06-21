import { ValidationOptions, MaxLength as _MaxLength } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function MaxLength(max: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return _MaxLength(max, translate(Translations.maxLength, validationOptions));
}
