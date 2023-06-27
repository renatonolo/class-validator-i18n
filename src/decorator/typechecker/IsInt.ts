import { ValidationOptions, IsInt as _IsInt } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsInt(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsInt(translate(translation, 'isInt', validationOptions));
}
