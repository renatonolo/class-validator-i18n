import { Translations } from 'interfaces/translations';

export const translations: Translations = {
  // Array
  arrayContains: '$eachPrefix $property must contain $constraint1 values',
  arrayMaxSize: '$eachPrefix $property must contain no more than $constraint1 elements',
  arrayMinSize: '$eachPrefix $property must contain at least $constraint1 elements',
  arrayNotContains: '$eachPrefix $property should not contain $constraint1 values',
  arrayNotEmpty: '$eachPrefix $property should not be empty',
  arrayUnique: `All $property's elements must be unique`,

  // Common
  equals: '$eachPrefix $property must be equal to $constraint1',
  isDefined: '$eachPrefix $property should not be null or undefined',
  isEmpty: '$eachPrefix $property must be empty',
  isLatitude: '$eachPrefix $property must be a latitude string or number',
  isLatLong: '$eachPrefix $property must be a latitude,longitude string',
  isLongitude: '$eachPrefix $property must be a longitude string or number',
  isNotEmpty: '$eachPrefix $property should not be empty',
  isNotIn: '$eachPrefix $property should not be one of the following values: $constraint1',
  notEquals: '$eachPrefix $property should not be equal to $constraint1',
  validateNested: 'nested property $property must be either object or array',
  isIn: '$eachPrefix $property must be one of the following values: $constraint1',
  eachPrefix: 'each value in',

  // Date
  maxDate: 'maximal allowed date for $eachPrefix $property is $constraint1',
  minDate: 'minimal allowed date for $eachPrefix $property is $constraint1',

  // Number
  isDivisibleBy: '$eachPrefix $property must be divisible by $constraint1',
  isNegative: '$eachPrefix $property must be a negative number',
  isPositive: '$eachPrefix $property must be a positive number',
  max: '$eachPrefix $property must not be greater than $constraint1',
  min: '$eachPrefix $property must not be less than $constraint1',

  // Object
  isInstance: '$eachPrefix must be an instance of defined property',
  isNotEmptyObject: '$eachPrefix $property must be a non-empty object',

  // String
  contains: '$eachPrefix $property must contain a $constraint1 string',
  isISO4217CurrencyCode: '$eachPrefix $property must be a valid ISO4217 currency code',
  isTaxId: '$eachPrefix $property must be a Tax Identification Number',
  isAlpha: '$eachPrefix $property must contain only letters (a-zA-Z)',
  isAlphanumeric: '$eachPrefix $property must contain only letters and numbers',
  isAscii: '$eachPrefix $property must contain only ASCII characters',
  isBase32: '$eachPrefix $property must be base32 encoded',
  isBase58: '$eachPrefix $property must be base58 encoded',
  isBase64: '$eachPrefix $property must be base64 encoded',
  isBIC: '$eachPrefix $property must be a BIC or SWIFT code',
  isBooleanString: '$eachPrefix $property must be a boolean string',
  isBtcAddress: '$eachPrefix $property must be a BTC address',
  isByteLength: `$eachPrefix $property's byte length must fall into ($constraint1, $constraint2) range`,
  isCreditCard: '$eachPrefix $property must be a credit card',
  isCurrency: '$eachPrefix $property must be a currency',
  isDataURI: '$eachPrefix $property must be a data uri format',
  isDateString: '$eachPrefix $property must be a valid ISO 8601 date string',
  isDecimal: '$eachPrefix $property is not a valid decimal number.',
  isEAN: '$eachPrefix $property must be an EAN (European Article Number)',
  isEmail: '$eachPrefix $property must be an email',
  isEthereumAddress: '$eachPrefix $property must be an Ethereum address',
  isFirebasePushId: '$eachPrefix $property must be a Firebase Push Id',
  isFQDN: '$eachPrefix $property must be a valid domain name',
  isFullWidth: '$eachPrefix $property must contain a full-width characters',
  isHalfWidth: '$eachPrefix $property must contain a half-width characters',
  isHash: '$eachPrefix $property must be a hash of type $constraint1',
  isHexadecimal: '$eachPrefix $property must be a hexadecimal number',
  isHexColor: '$eachPrefix $property must be a hexadecimal color',
  isHSL: '$eachPrefix $property must be a HSL color',
  isIBAN: '$eachPrefix $property must be an IBAN (International Bank Account Number)',
  isIdentityCard: '$eachPrefix $property must be a identity card number',
  isIP: '$eachPrefix $property must be an ip address',
  isISBN: '$eachPrefix $property must be an ISBN',
  isISIN: '$eachPrefix $property must be an ISIN (stock/security identifier)',
  isISO8601: '$eachPrefix $property must be a valid ISO 8601 date string',
  isISO31661Alpha2: '$eachPrefix $property must be a valid ISO31661 Alpha2 code',
  isISO31661Alpha3: '$eachPrefix $property must be a valid ISO31661 Alpha3 code',
  isISRC: '$eachPrefix $property must be an ISRC',
  isISSN: '$eachPrefix $property must be a ISSN',
  isJSON: '$eachPrefix $property must be a json string',
  isJWT: '$eachPrefix $property must be a jwt string',
  isLocale: '$eachPrefix $property must be locale',
  isLowercase: '$eachPrefix $property must be a lowercase string',
  isMACAddress: '$eachPrefix $property must be a MAC address',
  isMagnetURI: '$eachPrefix $property must be magnet uri format',
  isMilitaryTime: '$eachPrefix $property must be a valid representation of military time in the format HH:MM',
  isMimeType: '$eachPrefix $property must be MIME type format',
  isMobilePhone: '$eachPrefix $property must be a phone number',
  isMongoId: '$eachPrefix $property must be a mongodb id',
  isMultibyte: '$eachPrefix $property must contain one or more multibyte chars',
  isNumberString: '$eachPrefix $property must be a number string',
  isOctal: '$eachPrefix $property must be valid octal number',
  isPassportNumber: '$eachPrefix $property must be valid passport number',
  isPhoneNumber: '$eachPrefix $property must be a valid phone number',
  isPort: '$eachPrefix $property must be a port',
  isPostalCode: '$eachPrefix $property must be a postal code',
  isRFC3339: '$eachPrefix $property must be RFC 3339 date',
  isRgbColor: '$eachPrefix $property must be RGB color',
  isSemVer: '$eachPrefix $property must be a Semantic Versioning Specification',
  isStrongPassword: '$eachPrefix $property is not strong enough',
  isSurrogatePair: '$eachPrefix $property must contain any surrogate pairs chars',
  isTimeZone: '$eachPrefix $property must be a valid IANA time-zone',
  isUppercase: '$eachPrefix $property must be uppercase',
  isUrl: '$eachPrefix $property must be a URL address',
  isUUID: '$eachPrefix $property must be a UUID',
  isVariableWidth: '$eachPrefix $property must contain a full-width and half-width characters',
  length:
    '$eachPrefix $property must be longer than or equal to $constraint1 and shorter than or equal to $constraint2 characters',
  matches: '$eachPrefix $property must match $constraint1 regular expression',
  maxLength: '$eachPrefix $property must be shorter than or equal to $constraint1 characters',
  minLength: '$eachPrefix $property must be longer than or equal to $constraint1 characters',
  notContains: '$eachPrefix $property should not contain a $constraint1 string',

  // Typechecker
  isArray: '$eachPrefix $property must be an array',
  isBoolean: '$eachPrefix $property must be a boolean value',
  isDate: '$eachPrefix $property must be a Date instance',
  isEnum: '$eachPrefix $property must be one of the following values: $constraint2',
  isInt: '$eachPrefix $property must be an integer number',
  isNumber: '$eachPrefix $property must be a number conforming to the specified constraints',
  isObject: '$eachPrefix $property must be an object',
  isString: '$eachPrefix $property must be a string',
};
