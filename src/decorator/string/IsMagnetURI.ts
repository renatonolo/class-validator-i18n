import { IsMagnetURI as _IsMagnetURI, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsMagnetURI(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsMagnetURI(translate(translation, 'isMagnetURI', validationOptions));
}
