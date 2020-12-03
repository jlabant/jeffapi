import { Injectable } from '@nestjs/common';
import * as cuid from 'cuid';
import { Holiday } from 'src/gifts/models/holiday';
import { HolidayCreate } from 'src/gifts/models/holiday-create';

@Injectable()
export class HolidaysService {
  private db: Holiday[] = [
    {
      id: 'cki8u6ahy00007svqdtq6b3lg',
      name: 'Christmas',
    },
    {
      id: 'cki8u6stm00017svqf742hiep',
      name: 'Hannukah',
    },
    {
      id: 'cki8u7a4o00027svqbby56nqs',
      name: 'Kwanzaa',
    },
    {
      id: 'cki8u7tqq00037svqbcr98yol',
      name: 'Birthday',
    },
  ];

  getAll(): Holiday[] {
    return this.db;
  }
  addOne(holiday: HolidayCreate) {
    const newHoliday: Holiday = { ...holiday, id: cuid() };
    this.db = [newHoliday, ...this.db];
    return newHoliday;
  }
}
