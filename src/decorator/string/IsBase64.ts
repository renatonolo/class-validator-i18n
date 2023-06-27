import { IsBase64 as _IsBase64, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsBase64(
  options?: ValidatorJS.IsBase64Options,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsBase64(translate(translation, 'isBase64', validationOptions));
}
