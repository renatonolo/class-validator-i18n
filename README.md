# Class-validator-i18n

## The translator for class-validator

Class-validator-i18n is a translator to class-validator library.

## Decorators already translated

You can check the translated decorators at the links below.

- [Array decorators](https://github.com/renatonolo/class-validator-i18n/blob/master/src/decorator/array/index.ts)
- [Common decorators](https://github.com/renatonolo/class-validator-i18n/blob/master/src/decorator/common/index.ts)
- [Date decorators](https://github.com/renatonolo/class-validator-i18n/blob/master/src/decorator/date/index.ts)
- [Number decorators](https://github.com/renatonolo/class-validator-i18n/blob/master/src/decorator/number/index.ts)
- [Object decorators](https://github.com/renatonolo/class-validator-i18n/blob/master/src/decorator/object/index.ts)
- [String decorators](https://github.com/renatonolo/class-validator-i18n/blob/master/src/decorator/string/index.ts)
- [Type checker decorators](https://github.com/renatonolo/class-validator-i18n/blob/master/src/decorator/typechecker/index.ts)

## How to use

First, export an environment variable called `CLASS_VALIDATOR_I18N_LANGUAGE` specifying the language.
The default language is en-US.

```
export CLASS_VALIDATOR_I18N_LANGUAGE=pt-BR
```

After that you just need to use the decorators imported from 'class-validator-i18n' instead of the original 'class-validator'.
All the validators that are not translated yet will still working with original messages in english.

```
import { IsArray, IsString } from 'class-validator-i18n';

export class Testing {
  @IsArray()
  array: string[];

  @IsString({ description: 'Description os testing' })
  description: string;
}
```

### Attention

For NestJS projects, define variable before starts the project, for example, inside the package.json, on start:dev script or wherever.

NestJS doesn't guarantee that .env file will loads before decorators. This will make your errors be in default language, that is en-US.

## Supported languages

| Supported languages | env variable    |
| ------------------- | --------------- |
| English (US)        | en-US (default) |
| Portuguese (BR)     | pt-BR           |
