import { ValidationOptions, NotEquals as _NotEquals } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function NotEquals(comparison: any, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _NotEquals(comparison, translate(translation, 'notEquals', validationOptions));
}
