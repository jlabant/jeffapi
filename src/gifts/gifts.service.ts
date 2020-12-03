import { Injectable } from '@nestjs/common';
import { Gift } from './models/gift';
import { GiftCreate } from './models/gift-create';
import * as cuid from 'cuid';
@Injectable()
export class GiftsService {
  private db: Gift[] = [
    {
      id: 'cki8tnmjy0000l0vq27yc1kur',
      for: 'Bill',
      holiday: 'Christmas',
      suggestions: 'Books',
    },
    {
      id: 'cki8tos600001l0vq8qpzcfv7',
      for: 'Jessika',
      holiday: 'Hanukkah',
      suggestions: 'Shoes, Hats, Large Guage Ammunition',
    },
  ];

  GetAllGifts(): Gift[] {
    return this.db;
  }

  AddGift(gift: GiftCreate) {
    const giftToAdd: Gift = { ...gift, id: cuid() };
    this.db = [giftToAdd, ...this.db];
    return giftToAdd;
  }
}
