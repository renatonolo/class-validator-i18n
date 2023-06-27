import { IsCreditCard as _IsCreditCard, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsCreditCard(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsCreditCard(translate(translation, 'isCreditCard', validationOptions));
}
