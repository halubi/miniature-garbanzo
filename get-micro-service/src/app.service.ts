import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  private url = 'http://localhost:3000/resource';
  async getItem(): Promise<any> {
    try {
      return await this.httpService.get(this.url);
    } catch (error) {
      console.error('Error geting item. ', error);
      throw error;
    }
  }
}
