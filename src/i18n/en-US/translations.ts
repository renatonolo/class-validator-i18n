import { Translations } from 'interfaces/translations';

export const translations: Translations = {
  // Typechecker
  isArray: '$property must be an array',
  isBoolean: '$property must be a boolean value',
  isDate: '$property must be a Date instance',
  isEnum: '$property must be one of the following values: $constraint2',
  isInt: '$property must be an integer number',
  isNumber: '$property must be a number conforming to the specified constraints',
  isObject: '$property must be an object',
  isString: '$property must be a string',
  // String
  isEmail: '$property must be an email',
  length: '$property must be longer than or equal to $constraint1 and shorter than or equal to $constraint2 characters',
  maxLength: '$property must be shorter than or equal to $constraint1 characters',
  isUUID: '$property must be a UUID',
  isDateString: '$property must be a valid ISO 8601 date string',
  isUrl: '$property must be a URL address',
  isDecimal: '$property is not a valid decimal number.',
  // Number
  max: '$property must not be greater than $constraint1',
  min: '$property must not be less than $constraint1',
  // Array
  arrayMinSize: '$property must contain at least $constraint1 elements',
  // Common
  isNotEmpty: '$property should not be empty',
  validateNested: 'nested property $property must be either object or array',
  isIn: '$property must be one of the following values: $constraint1',
};
