import { IsMACAddress as _IsMACAddress, isValidationOptions, ValidationOptions } from 'class-validator';
import ValidatorJS from 'validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsMACAddress(
  optionsArg?: ValidatorJS.IsMACAddressOptions,
  validationOptionsArg?: ValidationOptions
): PropertyDecorator;
export function IsMACAddress(validationOptionsArg?: ValidationOptions): PropertyDecorator;
export function IsMACAddress(
  optionsOrValidationOptionsArg?: ValidatorJS.IsMACAddressOptions | ValidationOptions,
  validationOptionsArg?: ValidationOptions
): PropertyDecorator {
  const options = !isValidationOptions(optionsOrValidationOptionsArg) ? optionsOrValidationOptionsArg : undefined;
  const validationOptions = isValidationOptions(optionsOrValidationOptionsArg)
    ? optionsOrValidationOptionsArg
    : validationOptionsArg;
  const translation = getTranslation();

  return _IsMACAddress(options, translate(translation, 'isMACAddress', validationOptions));
}
