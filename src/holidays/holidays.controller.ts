import { Body, Controller, Get, Post } from '@nestjs/common';
import { HolidayCreate } from 'src/gifts/models/holiday-create';
import { HolidaysService } from './holidays.service';

@Controller('holidays')
export class HolidaysController {
  constructor(private service: HolidaysService) {}

  @Get()
  getAll() {
    return {
      data: this.service.getAll(),
    };
  }

  @Post()
  addOne(@Body() holiday: HolidayCreate) {
    const response = this.service.addOne(holiday);
    return response;
  }
}
