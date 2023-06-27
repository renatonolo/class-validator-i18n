import { IsISBN as _IsISBN, IsISBNVersion, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsISBN(version?: IsISBNVersion, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsISBN(version, translate(translation, 'isISBN', validationOptions));
}
