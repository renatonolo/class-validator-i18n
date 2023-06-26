import { Translations } from 'interfaces/translations';

export const translations: Translations = {
  // Typechecker
  isArray: '$property deve ser uma lista',
  isBoolean: '$property deve ser um valor boleano',
  isDate: '$property deve ser uma data',
  isEnum: '$property deve ser um dos seguintes valores: $constraint2',
  isInt: '$property deve ser um número inteiro',
  isNumber: '$property deve ser um número conforme o que foi definido no contrato',
  isObject: '$property deve ser um objeto',
  isString: '$property deve ser uma string',
  // String
  isEmail: '$property deve ser um email',
  length: '$property deve ser maior ou igual a $constraint1 e menor ou igual a $constraint2 caracteres',
  maxLength: '$property deve ser menor ou igual a $constraint1 caracteres',
  isUUID: '$property deve ser um UUID',
  isDateString: '$property deve ser uma string ISO 8601 de data válida',
  isUrl: '$property deve ser uma URL válida',
  isDecimal: '$property não é um número decimal válido',
  // Number
  max: '$property não pode ser maior que $constraint1',
  min: '$property não pode ser menor que $constraint1',
  // Array
  arrayContains: '$property deve conter os valores $constraint1',
  arrayMaxSize: '$property deve conter no máximo $constraint1 elemento(s)',
  arrayMinSize: '$property deve conter pelo menos $constraint1 elemento(s)',
  arrayNotContains: '$property não deve conter os valores $constraint1',
  arrayNotEmpty: '$property não deve ser vazio',
  arrayUnique: 'Todos os $property devem ser únicos',
  // Common
  isNotEmpty: '$property não deve ser vazio',
  validateNested: 'propriedade aninhada $property deve ser um objeto ou uma lista',
  isIn: '$property deve ser um dos seguintes valores: $constraint1',
};
