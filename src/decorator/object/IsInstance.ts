import { IsInstance as _IsInstance, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsInstance(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  targetType: new (...args: any[]) => any,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsInstance(targetType, translate(translation, 'isInstance', validationOptions));
}
