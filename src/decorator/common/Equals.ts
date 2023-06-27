import { ValidationOptions, Equals as _Equals } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Equals(comparison: any, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _Equals(comparison, translate(translation, 'equals', validationOptions));
}
