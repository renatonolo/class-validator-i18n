import { IsEAN as _IsEAN, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsEAN(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsEAN(translate(translation, 'isEAN', validationOptions));
}
