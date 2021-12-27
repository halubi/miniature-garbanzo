import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('rest/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/resource')
  async getItem(): Promise<any> {
    return await this.appService.getItem();
  }
}
