import { MaxDate as _MaxDate, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function MaxDate(date: Date | (() => Date), validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _MaxDate(date, translate(translation, 'maxDate', validationOptions));
}
