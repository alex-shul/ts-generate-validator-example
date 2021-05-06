import { Validation } from 'ts-generate-validator';
import { Product } from './product';

@Validation
export class ProductList {
  totalCount: number;
  items: Product[];
}
