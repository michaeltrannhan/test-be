import { IsNumber, IsArray, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  shortDesc: string;

  @IsNumber()
  stock: number;

  @IsNumber()
  price: number;

  @IsNumber()
  oldPrice: number;

  @IsArray()
  image: string[];
}
