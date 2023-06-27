import { UUIDVersion, ValidationOptions, IsUUID as _IsUUID } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsUUID(version?: UUIDVersion, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsUUID(version, translate(translation, 'isUUID', validationOptions));
}
