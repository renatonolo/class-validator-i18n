import { IsPort as _IsPort, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsPort(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsPort(translate(translation, 'isPort', validationOptions));
}
