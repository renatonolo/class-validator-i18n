import { ValidationOptions, IsIn as _IsIn } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsIn(values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsIn(values, translate(translation, 'isIn', validationOptions));
}
