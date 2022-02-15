import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,

    @Body('price') prodPrice: number,
  ) {
    const generatedProd = this.productsService.addProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    console.log(generatedProd);
    return generatedProd.price;
  }
}
