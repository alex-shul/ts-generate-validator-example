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
  TypeValidatorPayload,
} from "ts-generate-validator";

import { validateProduct } from "./src.models.product";

import { ProductList } from "./../../models/productList";

export const validateProductList: GeneratedValidation = <
  D extends Data = typeof ProductList,
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
        property: data?.totalCount,
        propertyName: `${propNamePrefix}totalCount`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
      }),

    () =>
      typeValidator({
        property: data?.items,
        propertyName: `${propNamePrefix}items`,
        data,
        optional: false,
        config,
        context,

        typeDescription: {
          type: "nested",
          typeDescription: validateProduct,
        } as TypeValidatorPayload,

        type: ValidationType.array,

        typeName: "Product[]",
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
