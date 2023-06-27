import { ValidationOptions, Length as _Length } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function Length(min: number, max?: number, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _Length(min, max, translate(translation, 'length', validationOptions));
}
