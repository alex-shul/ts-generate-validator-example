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

import {
  GardenProductOptions,
  FoodProductOptions,
  ElectrictProductSubcategory,
  ElectricProductOptions,
  CleaningProductOptions,
} from "./../../models/productOptions";

export const validateGardenProductOptions: GeneratedValidation = <
  D extends Data = typeof GardenProductOptions,
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
        property: data?.sunResistance,
        propertyName: `${propNamePrefix}sunResistance`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
      }),

    () =>
      typeValidator({
        property: data?.material,
        propertyName: `${propNamePrefix}material`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.string,

        typeName: "string",
      }),

    () =>
      typeValidator({
        property: data?.width,
        propertyName: `${propNamePrefix}width`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
      }),

    () =>
      typeValidator({
        property: data?.height,
        propertyName: `${propNamePrefix}height`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
      }),

    () =>
      typeValidator({
        property: data?.length,
        propertyName: `${propNamePrefix}length`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
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

export const validateFoodProductOptions: GeneratedValidation = <
  D extends Data = typeof FoodProductOptions,
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
        property: data?.createdDate,
        propertyName: `${propNamePrefix}createdDate`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.string,

        typeName: "string",
      }),

    () =>
      typeValidator({
        property: data?.expiredDate,
        propertyName: `${propNamePrefix}expiredDate`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.string,

        typeName: "string",
      }),

    () =>
      typeValidator({
        property: data?.caloriesCount,
        propertyName: `${propNamePrefix}caloriesCount`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
      }),

    () =>
      typeValidator({
        property: data?.weight,
        propertyName: `${propNamePrefix}weight`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
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

export const validateElectricProductOptions: GeneratedValidation = <
  D extends Data = typeof ElectricProductOptions,
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
        property: data?.voltage,
        propertyName: `${propNamePrefix}voltage`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
      }),

    () =>
      typeValidator({
        property: data?.power,
        propertyName: `${propNamePrefix}power`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
      }),

    () =>
      typeValidator({
        property: data?.subcategory,
        propertyName: `${propNamePrefix}subcategory`,
        data,
        optional: false,
        config,
        context,

        typeDescription: {
          type: "enum",
          typeDescription: ElectrictProductSubcategory,
        } as TypeValidatorPayload,

        type: ValidationType.array,

        typeName: "ElectrictProductSubcategory[]",
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

export const validateCleaningProductOptions: GeneratedValidation = <
  D extends Data = typeof CleaningProductOptions,
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
        property: data?.containsAlcohol,
        propertyName: `${propNamePrefix}containsAlcohol`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.boolean,

        typeName: "boolean",
      }),

    () =>
      typeValidator({
        property: data?.capacity,
        propertyName: `${propNamePrefix}capacity`,
        data,
        optional: false,
        config,
        context,

        type: ValidationType.number,

        typeName: "number",
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
