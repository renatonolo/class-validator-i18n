import { ValidationOptions, IsNotIn as _IsNotIn } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function IsNotIn(values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsNotIn(values, translate(translation, 'isNotIn', validationOptions));
}
