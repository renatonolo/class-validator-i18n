import { IsBooleanString as _IsBooleanString, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsBooleanString(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsBooleanString(translate(translation, 'isBooleanString', validationOptions));
}
