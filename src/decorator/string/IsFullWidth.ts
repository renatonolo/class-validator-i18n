import { IsFullWidth as _IsFullWidth, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsFullWidth(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsFullWidth(translate(translation, 'isFullWidth', validationOptions));
}
