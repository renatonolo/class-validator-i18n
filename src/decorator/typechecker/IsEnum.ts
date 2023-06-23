import { ValidationOptions, IsEnum as _IsEnum } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsEnum(entity: object, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsEnum(entity, translate(translation.isEnum, validationOptions));
}
