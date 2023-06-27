import { NotContains as _NotContains, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function NotContains(seed: string, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _NotContains(seed, translate(translation, 'notContains', validationOptions));
}
