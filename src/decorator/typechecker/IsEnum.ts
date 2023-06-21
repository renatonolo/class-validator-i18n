import { ValidationOptions, IsEnum as _IsEnum } from 'class-validator';
import { Translations } from '../../translations';
import { translate } from '../../translator';

export function IsEnum(entity: object, validationOptions?: ValidationOptions): PropertyDecorator {
  return _IsEnum(entity, translate(Translations.isEnum, validationOptions));
}
