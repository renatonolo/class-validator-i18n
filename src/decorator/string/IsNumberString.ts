import { IsNumberString as _IsNumberString, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsNumberString(
  options?: ValidatorJS.IsNumericOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsNumberString(options, translate(translation, 'isNumberString', validationOptions));
}
