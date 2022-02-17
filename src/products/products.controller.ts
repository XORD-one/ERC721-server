import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,

    @Body('price') prodPrice: number,
  ) {
    const generatedProd = await this.productsService.addProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    console.log(generatedProd);
    return generatedProd;
  }

  @Get()
  async getAllProducts() {
    return await this.productsService.getProducts();
  }
  @Get('/:id')
  async getSingleProduct(@Param('id') prodId: string) {
    return await this.productsService.getSingleProduct(prodId);
  }
  @Patch('/:id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,

    @Body('price') prodPrice: number,
  ) {
    return await this.productsService.updateProduct(
      prodId,
      prodTitle,
      prodDesc,
      prodPrice,
    );
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') prodId: string) {
    return await this.productsService.deleteProd(prodId);
  }
}
