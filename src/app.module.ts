import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NftController } from './nft/nft.controller';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://ibra360:asafjui123@cluster0.vor4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController, NftController],
  providers: [AppService],
})
export class AppModule {}
