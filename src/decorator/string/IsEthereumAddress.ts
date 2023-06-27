import { IsEthereumAddress as _IsEthereumAddress, ValidationOptions } from 'class-validator';
import { getTranslation } from '../../i18n';
import { translate } from '../../translator';

export function IsEthereumAddress(validationOptions?: ValidationOptions): PropertyDecorator {
  const translation = getTranslation();
  return _IsEthereumAddress(translate(translation, 'isEthereumAddress', validationOptions));
}
