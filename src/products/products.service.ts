import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async addProduct(title: string, desc: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description: desc,
      price,
    });
    return await newProduct.save();
    // return newProduct;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products as Product[];
  }
  async getSingleProduct(prodId: string) {
    try {
      const filteredProd = await this.productModel.findById(prodId);
      if (!filteredProd) {
        throw new NotFoundException('ID NOT FOUND');
      }
      return filteredProd;
    } catch (e) {
      throw new NotFoundException('Kia yar id hai kia');
    }
  }

  async updateProduct(
    prodId: string,
    title: string,
    desc: string,
    price: number,
  ) {
    const filteredProd = await this.productModel.findById(prodId).exec();

    if (!filteredProd) {
      throw new NotFoundException('ID NOT FOUND');
    }

    // const filteredProd = { ...filteredProd };
    filteredProd.title = title || filteredProd.title;
    filteredProd.description = desc || filteredProd.description;
    filteredProd.price = price || filteredProd.price;

    filteredProd.save();
    return filteredProd;
  }

  async deleteProd(prodId: string) {
    try {
      const deletedProduct = await this.productModel
        .deleteOne({
          _id: prodId,
        })
        .exec();
      console.log(deletedProduct);
      return deletedProduct;
    } catch (e) {
      throw new NotFoundException('Kia yar id hai kia');
    }
  }
}
