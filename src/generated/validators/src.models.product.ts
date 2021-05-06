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

import { ProductCategory } from "./../../models/productCategory";

import {
  validateGardenProductOptions,
  validateFoodProductOptions,
  validateElectricProductOptions,
  validateCleaningProductOptions,
} from "./src.models.productOptions";

import { Product } from "./../../models/product";

export const validateProduct: GeneratedValidation = <
  D extends Data = typeof Product,
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
        property: data?.id,
        propertyName: `${propNamePrefix}id`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
      }),

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
      typeValidator({
        property: data?.description,
        propertyName: `${propNamePrefix}description`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.string,

        typeName: "string",
      }),

    () =>
      typeValidator({
        property: data?.categories,
        propertyName: `${propNamePrefix}categories`,
        data,
        optional: false,
        config,
        context,

        typeDescription: {
          type: "enum",
          typeDescription: ProductCategory,
        } as TypeValidatorPayload,

        type: ValidationType.array,

        typeName: "ProductCategory[]",
      }),

    () =>
      typeValidator({
        property: data?.options,
        propertyName: `${propNamePrefix}options`,
        data,
        optional: false,
        config,
        context,

        typeDescription: [
          {
            type: "nested",
            typeDescription: validateGardenProductOptions,
          },
          {
            type: "nested",
            typeDescription: validateFoodProductOptions,
          },
          {
            type: "nested",
            typeDescription: validateElectricProductOptions,
          },
          {
            type: "nested",
            typeDescription: validateCleaningProductOptions,
          },
        ] as TypeValidatorPayload[],

        type: ValidationType.union,

        typeName:
          "GardenProductOptions | FoodProductOptions | ElectricProductOptions | CleaningProductOptions",
      }),

    () =>
      typeValidator({
        property: data?.onSale,
        propertyName: `${propNamePrefix}onSale`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.boolean,

        typeName: "boolean",
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
