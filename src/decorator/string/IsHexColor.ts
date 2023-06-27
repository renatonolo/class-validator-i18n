import { IsHexColor as _IsHexColor, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsHexColor(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsHexColor(translate(translation, 'isHexColor', validationOptions));
}
