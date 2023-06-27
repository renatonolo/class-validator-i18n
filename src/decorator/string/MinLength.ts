import { MinLength as _MinLength, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function MinLength(min: number, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _MinLength(min, translate(translation, 'minLength', validationOptions));
}
