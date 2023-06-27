import { IsHalfWidth as _IsHalfWidth, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsHalfWidth(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsHalfWidth(translate(translation, 'isHalfWidth', validationOptions));
}
