import { IsMongoId as _IsMongoId, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsMongoId(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsMongoId(translate(translation, 'isMongoId', validationOptions));
}
