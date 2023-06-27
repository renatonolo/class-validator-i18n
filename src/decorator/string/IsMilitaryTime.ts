import { IsMilitaryTime as _IsMilitaryTime, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsMilitaryTime(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsMilitaryTime(translate(translation, 'isMilitaryTime', validationOptions));
}
