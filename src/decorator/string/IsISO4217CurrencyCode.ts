import { IsISO4217CurrencyCode as _IsISO4217CurrencyCode, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsISO4217CurrencyCode(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsISO4217CurrencyCode(translate(translation, 'isISO4217CurrencyCode', validationOptions));
}
