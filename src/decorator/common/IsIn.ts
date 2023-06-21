import { ValidationOptions, IsIn as _IsIn } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsIn(values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsIn(values, translate(Translations.isIn, validationOptions));
}
