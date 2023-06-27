import { IsDataURI as _IsDataURI, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsDataURI(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsDataURI(translate(translation, 'isDataURI', validationOptions));
}
