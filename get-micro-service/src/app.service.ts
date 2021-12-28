import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  private url =
    'http://ec2-18-194-79-132.eu-central-1.compute.amazonaws.com/rest/api/resource';
  async getItem(): Promise<any> {
    try {
      const item = await this.httpService.get(this.url);
      console.log('item', item);

      return item;
    } catch (error) {
      console.error('Error geting item. ', error);
      throw error;
    }
  }
}
