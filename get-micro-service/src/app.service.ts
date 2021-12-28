import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  /**
   * http get method to the other ec2 instance requesting the content that hase been posted
   * @returns the content from earlier post request
   */
  getItem(): Observable<any> {
    try {
      const item = this.httpService.get(process.env.URL);
      return item;
    } catch (error) {
      console.error('Error geting item. ', error);
      throw error;
    }
  }
}
