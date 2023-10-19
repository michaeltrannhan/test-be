import { Product } from '@prisma/client';

export class CreateCategoryDto {
  name: string;
  description: string;
  products: Product[];
}
