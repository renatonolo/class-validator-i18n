import { IsTaxId as _IsTaxId, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsTaxId(locale?: string, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsTaxId(locale, translate(translation, 'isTaxId', validationOptions));
}
