import { IsHSL as _IsHSL, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsHSL(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsHSL(translate(translation, 'isHSL', validationOptions));
}
