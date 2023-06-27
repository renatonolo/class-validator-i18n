import { IsDivisibleBy as _IsDivisibleBy, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsDivisibleBy(num: number, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsDivisibleBy(num, translate(translation, 'isDivisibleBy', validationOptions));
}
