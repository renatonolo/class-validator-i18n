import { UUIDVersion, ValidationOptions, IsUUID as _IsUUID } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsUUID(version?: UUIDVersion, validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsUUID(version, translate(Translations.isUUID, validationOptions));
}
