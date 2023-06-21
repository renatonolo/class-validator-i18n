import { ValidationOptions, ArrayMinSize as _ArrayMinSize } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function ArrayMinSize(min: number, validationOptions?: ValidationOptions): PropertyDecorator {
  return _ArrayMinSize(min, translate(Translations.arrayMinSize, validationOptions));
}
