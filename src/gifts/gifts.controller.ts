import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { GiftsService } from './gifts.service';
import { GiftCreate } from './models/gift-create';

@Controller('gifts')
export class GiftsController {
  constructor(private service: GiftsService) {}

  @Get()
  GetAllGifts() {
    return {
      data: this.service.GetAllGifts(),
    };
  }

  @Post()
  async AddGift(@Body() gift: GiftCreate) {
    return await new Promise((res, rej) => {
      setTimeout(() => {
        if (gift.for === 'Jonathan') {
          rej(new HttpException('We do NOT buy him gifts.', 400));
        } else {
          const response = this.service.AddGift(gift);
          res(response);
        }
      }, 3000);
    });
  }
}
