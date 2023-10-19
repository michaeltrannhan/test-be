import { Product } from '@prisma/client';

export class Category {
  name: string;
  description: string;
  products: Product[];
}
