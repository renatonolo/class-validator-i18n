import { IsVariableWidth as _IsVariableWidth, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsVariableWidth(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsVariableWidth(translate(translation, 'isVariableWidth', validationOptions));
}
