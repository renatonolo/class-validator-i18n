import { ValidationOptions, ValidateNested as _ValidateNested } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function ValidateNested(validationOptions?: ValidationOptions): PropertyDecorator {
  return _ValidateNested(translate(Translations.validateNested, validationOptions));
}
