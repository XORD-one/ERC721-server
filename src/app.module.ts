import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NftController } from './nft/nft.controller';
import { NftService } from './nft/nft.service';

@Module({
  imports: [],
  controllers: [AppController, NftController],
  providers: [AppService,NftService],
})
export class AppModule {}
