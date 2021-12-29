import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
@Injectable()
export class AppService {
  /**
   * writing the item into a txt file saved locally - doesn't append.
   * @param item request parameter sent from client
   * @returns a string if success, throw if error
   */
  postItem(item): string {
    try {
      fs.writeFileSync(`temp.txt`, JSON.stringify(item));
      return `You posted successfuly`;
    } catch (error) {
      console.error('Error in Post ', error);
      throw 'Error in Post';
    }
  }

  /**
   * reading the item from temo.txt file.
   *
   * @returns the content from the file, if file is emp, throw if error
   */
  getItem() {
    try {
      return JSON.parse(fs.readFileSync(`temp.txt`).toString());
    } catch (error) {
      console.error('Error in Get ', error);
      throw 'Error in Get';
    }
  }
}
