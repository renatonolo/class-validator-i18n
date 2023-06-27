import { IsJSON as _IsJSON, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsJSON(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsJSON(translate(translation, 'isJSON', validationOptions));
}
