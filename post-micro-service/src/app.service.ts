import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
@Injectable()
export class AppService {
  postItem(body): void {
    try {
      console.log('hereee');

      fs.writeFileSync(`temp.txt`, JSON.stringify(body));
    } catch (error) {
      console.error('Error in Post ', error);
    }
  }

  getItem() {
    try {
      return (
        JSON.parse(fs.readFileSync(`temp.txt`).toString()) || 'Item not found!'
      );
    } catch (error) {
      console.error('Error in Get ', error);
    }
  }
}
