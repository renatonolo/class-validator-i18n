import { ValidationOptions, IsNotEmpty as _IsNotEmpty } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsNotEmpty(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsNotEmpty(translate(translation, 'isNotEmpty', validationOptions));
}
