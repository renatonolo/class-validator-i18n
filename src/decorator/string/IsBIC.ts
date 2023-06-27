import { IsBIC as _IsBIC, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsBIC(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsBIC(translate(translation, 'isBIC', validationOptions));
}
