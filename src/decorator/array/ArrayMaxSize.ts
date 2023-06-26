import { ValidationOptions, ArrayMaxSize as _ArrayMaxSize } from 'class-validator';
import { getTranslation } from 'i18n';
import { translate } from 'translator';

export function ArrayMaxSize(max: number, validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _ArrayMaxSize(max, translate(translation.arrayMaxSize, validationOptions));
}
