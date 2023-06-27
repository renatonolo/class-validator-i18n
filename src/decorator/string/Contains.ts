import { Contains as _Contains, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function Contains(seed: string, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _Contains(seed, translate(translation, 'contains', validationOptions));
}
