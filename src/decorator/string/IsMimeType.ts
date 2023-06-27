import { IsMimeType as _IsMimeType, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsMimeType(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsMimeType(translate(translation, 'isMimeType', validationOptions));
}
