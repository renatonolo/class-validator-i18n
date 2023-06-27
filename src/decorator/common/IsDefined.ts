import { IsDefined as _IsDefined, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsDefined(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsDefined(translate(translation, 'isDefined', validationOptions));
}
