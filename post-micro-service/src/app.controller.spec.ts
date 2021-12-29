/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as fs from 'fs';

describe('App', () => {
  const mock = '{"something":"blablablai"}';
  let appController: AppController;
  let appService: AppService;
  // const appService = { getItem: () => mock };

  beforeEach(() => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  describe('getItem', () => {
    it('should return an string result', () => {
      jest
        .spyOn(fs, 'readFileSync')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .mockImplementation((path) => mock);
      appService.getItem();
      expect(fs.readFileSync).toBeCalledWith('temp.txt');

      jest.spyOn(appService, 'getItem').mockImplementation(() => {
        return mock;
      });

      expect(appController.getItem()).toBe(mock);
    });
  });

  describe('postItem', () => {
    it('should return an string result', () => {
      const result = 'You posted successfuly';

      jest
        .spyOn(fs, 'writeFileSync')
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        .mockImplementation((path, data) => {});
      appService.postItem(mock);
      expect(fs.writeFileSync).toBeCalledWith('temp.txt', JSON.stringify(mock));
      // expect(fs.writeFileSync).toThrow('Error in Post');
      jest.spyOn(appService, 'postItem').mockImplementation(() => result);
      expect(appController.postItem(mock)).toBe(result);
    });
  });
});
