import { IsIdentityCard as _IsIdentityCard, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsIdentityCard(
  locale?: ValidatorJS.IdentityCardLocale,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  const translation = getTranslation();
  return _IsIdentityCard(locale, translate(translation, 'isIdentityCard', validationOptions));
}
