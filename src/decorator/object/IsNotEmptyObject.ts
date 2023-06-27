import { IsNotEmptyObject as _IsNotEmptyObject, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsNotEmptyObject(
  options?: { nullable?: boolean },
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsNotEmptyObject(options, translate(translation, 'isNotEmptyObject', validationOptions));
}
