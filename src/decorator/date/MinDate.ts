import { MinDate as _MinDate, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function MinDate(date: Date | (() => Date), validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _MinDate(date, translate(translation, 'minDate', validationOptions));
}
