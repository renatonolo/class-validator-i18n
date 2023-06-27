import { ValidationOptions, ArrayMinSize as _ArrayMinSize } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function ArrayMinSize(min: number, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _ArrayMinSize(min, translate(translation, 'arrayMinSize', validationOptions));
}
