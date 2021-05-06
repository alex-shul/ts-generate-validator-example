/* This file was automatically generated and should not be edited */
// tslint:disable
/* eslint-disable */

import {
  GeneratedValidation,
  ValidationConfig,
  PartialValidationConfig,
  ValidationError,
  ValidationException,
  ValidationType,
  Data,
  UserContext,
  getConfig,
  mergeDeep,
  typeValidator,
  minLengthValidator,
  emailValidator,
  maxLengthValidator,
} from "ts-generate-validator";

import { User } from "./../../models/user";

export const validateUser: GeneratedValidation = <
  D extends Data = typeof User,
  C extends UserContext = UserContext
>(
  data: D,
  configArg?: PartialValidationConfig,
  context?: C,
  propNamePrefix: string = ""
) => {
  const config = <ValidationConfig>mergeDeep({}, getConfig(), configArg ?? {});
  const errors: ValidationError[] = [];
  const validationChain = [
    () =>
      typeValidator({
        property: data?.name,
        propertyName: `${propNamePrefix}name`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.string,

        typeName: "string",
      }),

    () =>
      minLengthValidator({
        property: data?.name,
        propertyName: `${propNamePrefix}name`,
        data,
        optional: false,
        config,
        context,

        threshold: 2,
      }),

    () =>
      typeValidator({
        property: data?.surname,
        propertyName: `${propNamePrefix}surname`,
        data,
        optional: true,
        config,
        context,

        type: ValidationType.string,

        typeName: "string",
      }),

    () =>
      typeValidator({
        property: data?.email,
        propertyName: `${propNamePrefix}email`,
        data,
        optional: true,
        config,
        context,

        type: ValidationType.string,

        typeName: "string",
      }),

    () =>
      emailValidator({
        property: data?.email,
        propertyName: `${propNamePrefix}email`,
        data,
        optional: true,
        config,
        context,
      }),

    () =>
      typeValidator({
        property: data?.phone,
        propertyName: `${propNamePrefix}phone`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.string,

        typeName: "string",
      }),

    () =>
      minLengthValidator({
        property: data?.phone,
        propertyName: `${propNamePrefix}phone`,
        data,
        optional: false,
        config,
        context,

        threshold: 10,
      }),

    () =>
      maxLengthValidator({
        property: data?.phone,
        propertyName: `${propNamePrefix}phone`,
        data,
        optional: false,
        config,
        context,

        threshold: 10,
      }),
  ];

  for (const validation of validationChain) {
    try {
      validation();
    } catch (err) {
      if (err instanceof ValidationException) {
        if (config.stopAtFirstError) {
          throw err;
        }

        errors.push(...err.errors);
      } else {
        if (!(err instanceof ValidationError)) {
          throw err;
        }

        errors.push(err);

        if (config.stopAtFirstError) {
          throw new ValidationException(errors);
        }
      }
    }
  }

  if (errors.length) {
    throw new ValidationException(errors);
  }
};
