import { IsBtcAddress as _IsBtcAddress, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsBtcAddress(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsBtcAddress(translate(translation, 'isBtcAddress', validationOptions));
}
