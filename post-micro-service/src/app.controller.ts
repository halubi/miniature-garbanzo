import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/rest/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/resource')
  postItem(@Body() body: any): string {
    return this.appService.postItem(body);
  }

  @Get('/resource')
  getItem(): string {
    return this.appService.getItem();
  }
}
