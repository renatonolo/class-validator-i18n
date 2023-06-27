import { IsJWT as _IsJWT, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsJWT(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsJWT(translate(translation, 'isJWT', validationOptions));
}
