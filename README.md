# Class-validator-i18n

## The translator for class-validator

Class-validator-i18n is a translator to class-validator library.

## Decorators already translated

You can check the translations on table below.

| Decorator      |
| -------------- |
| IsArray        |
| IsDate         |
| IsEmail        |
| IsEnum         |
| IsInt          |
| IsNotEmpty     |
| IsNumber       |
| IsString       |
| Length         |
| Max            |
| MaxLength      |
| Min            |
| ValidateNested |
| IsUUID         |
| ArrayMinSize   |
| IsDateString   |
| IsIn           |
| IsUrl          |
| IsDecimal      |

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
