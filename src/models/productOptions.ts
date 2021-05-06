import { Validation } from 'ts-generate-validator';

@Validation
export class GardenProductOptions {
  sunResistance: number;
  material: string;
  width: number;
  height: number;
  length: number;
}

@Validation
export class FoodProductOptions {
  createdDate: string;
  expiredDate: string;
  caloriesCount: number;
  weight: number;
}

export enum ElectrictProductSubcategory {
  tool = 'tool',
  appliances = 'appliances',
  multimedia = 'multimedia',
}
@Validation
export class ElectricProductOptions {
  voltage: number;
  power: number;
  subcategory: ElectrictProductSubcategory[];
}

@Validation
export class CleaningProductOptions {
  containsAlcohol: boolean;
  capacity: number;
}
