import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  private url =
    'http://ec2-18-194-79-132.eu-central-1.compute.amazonaws.com/rest/api/resource';
  getItem(): Observable<any> {
    try {
      const item = this.httpService.get(this.url);
      console.log('item', item);

      return item;
    } catch (error) {
      console.error('Error geting item. ', error);
      throw error;
    }
  }
}
