import { ValidationOptions, MaxLength as _MaxLength } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function MaxLength(max: number, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _MaxLength(max, translate(translation.maxLength, validationOptions));
}
