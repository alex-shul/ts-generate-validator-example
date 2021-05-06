import {
  CustomValidation,
  CustomValidationFunction,
  EmailValidation,
  MaxLengthValidation,
  MinLengthValidation,
  Validation,
  ValidationError,
} from 'ts-generate-validator';

export const customAsyncValidator: CustomValidationFunction = async ({
  propertyName,
}) => {
  console.log('customAsyncValidator called!');
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        reject(
          new ValidationError(<string>propertyName, 'rejected in promise')
        ),
      2000
    );
  });
};

@Validation
export class User {
  @MinLengthValidation(2)
  name: string;

  surname?: string;

  @EmailValidation()
  email?: string;

  @MinLengthValidation(10)
  @MaxLengthValidation(10)
  phone: string;
}
