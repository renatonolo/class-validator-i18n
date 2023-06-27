import { IsHash as _IsHash, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsHash(algorithm: string, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsHash(algorithm, translate(translation, 'isHash', validationOptions));
}
