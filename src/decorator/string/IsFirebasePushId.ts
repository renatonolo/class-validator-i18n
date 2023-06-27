import { IsFirebasePushId as _IsFirebasePushId, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsFirebasePushId(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsFirebasePushId(translate(translation, 'isFirebasePushId', validationOptions));
}
