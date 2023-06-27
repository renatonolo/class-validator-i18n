import { IsEmpty as _IsEmpty, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsEmpty(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsEmpty(translate(translation, 'isEmpty', validationOptions));
}
