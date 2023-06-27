import { IsMultibyte as _IsMultibyte, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsMultibyte(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsMultibyte(translate(translation, 'isMultibyte', validationOptions));
}
