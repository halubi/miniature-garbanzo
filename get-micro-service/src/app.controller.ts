import { Controller, Get } from '@nestjs/common';
import { map } from 'rxjs';
import { AppService } from './app.service';

@Controller('rest/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/resource')
  getItem() {
    return this.appService.getItem().pipe(map((response) => response.data));
  }
}
