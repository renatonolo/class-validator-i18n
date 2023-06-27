import { IsRgbColor as _IsRgbColor, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsRgbColor(includePercentValues?: boolean, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsRgbColor(includePercentValues, translate(translation, 'isRgbColor', validationOptions));
}
