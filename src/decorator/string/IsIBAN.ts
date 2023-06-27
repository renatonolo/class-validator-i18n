import { IsIBAN as _IsIBAN, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsIBAN(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsIBAN(translate(translation, 'isIBAN', validationOptions));
}
