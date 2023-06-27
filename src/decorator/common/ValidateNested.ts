import { ValidationOptions, ValidateNested as _ValidateNested } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function ValidateNested(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _ValidateNested(translate(translation, 'validateNested', validationOptions));
}
