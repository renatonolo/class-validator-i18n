import { IsSurrogatePair as _IsSurrogatePair, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsSurrogatePair(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsSurrogatePair(translate(translation, 'isSurrogatePair', validationOptions));
}
