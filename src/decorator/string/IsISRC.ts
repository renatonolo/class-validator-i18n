import { IsISRC as _IsISRC, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsISRC(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsISRC(translate(translation, 'isISRC', validationOptions));
}
