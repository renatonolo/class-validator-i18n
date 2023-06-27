import { IsSemVer as _IsSemVer, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsSemVer(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsSemVer(translate(translation, 'isSemVer', validationOptions));
}
