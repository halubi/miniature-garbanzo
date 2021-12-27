import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
@Injectable()
export class AppService {
  postItem(body): string {
    try {
      console.log('hereee');
      fs.writeFileSync(`temp.txt`, JSON.stringify(body));
      return `You posted ${body} successfuly`;
    } catch (error) {
      console.error('Error in Post ', error);
      throw error;
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
