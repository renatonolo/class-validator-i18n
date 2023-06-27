import { IsISSN as _IsISSN, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsISSN(options?: ValidatorJS.IsISSNOptions, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsISSN(options, translate(translation, 'isISSN', validationOptions));
}
