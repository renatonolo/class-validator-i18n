import { IsByteLength as _IsByteLength, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsByteLength(min: number, max?: number, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsByteLength(min, max, translate(translation, 'isByteLength', validationOptions));
}
