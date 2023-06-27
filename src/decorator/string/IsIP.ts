import { IsIP as _IsIP, IsIpVersion, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsIP(version?: IsIpVersion, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsIP(version, translate(translation, 'isIP', validationOptions));
}
