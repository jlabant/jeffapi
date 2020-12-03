import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GiftsController } from './gifts/gifts.controller';
import { GiftsService } from './gifts/gifts.service';
import { HolidaysController } from './holidays/holidays.controller';
import { HolidaysService } from './holidays/holidays.service';

@Module({
  imports: [],
  controllers: [AppController, GiftsController, HolidaysController],
  providers: [AppService, GiftsService, HolidaysService],
})
export class AppModule {}
