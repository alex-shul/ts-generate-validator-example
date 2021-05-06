import {
  GardenProductOptions,
  FoodProductOptions,
  ElectricProductOptions,
  CleaningProductOptions,
} from './productOptions';
import { ProductCategory } from './productCategory';
import { Validation } from 'ts-generate-validator';

@Validation
export class Product {
  id: number;
  name: string;
  description: string;
  categories: ProductCategory[];
  options:
    | GardenProductOptions
    | FoodProductOptions
    | ElectricProductOptions
    | CleaningProductOptions;
  onSale: boolean;
}
