import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getItem(): Promise<any> {
    return await this.httpService.get('http://localhost:3000/resource');
  }
}
