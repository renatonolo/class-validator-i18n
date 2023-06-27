import { Matches as _Matches, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function Matches(
  pattern: RegExp | string,
  modifiersOrAnnotationOptions?: string | ValidationOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  let modifiers: string | undefined = undefined;

  if (modifiersOrAnnotationOptions && modifiersOrAnnotationOptions instanceof Object && !validationOptions) {
    validationOptions = modifiersOrAnnotationOptions;
  } else {
    modifiers = modifiersOrAnnotationOptions as string;
  }

  const translation = getTranslation();

  return _Matches(pattern as any, modifiers, translate(translation, 'matches', validationOptions));
}
