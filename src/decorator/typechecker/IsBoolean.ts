import { ValidationOptions, IsBoolean as _IsBoolean } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsBoolean(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsBoolean(translate(translation.isBoolean, validationOptions));
}
