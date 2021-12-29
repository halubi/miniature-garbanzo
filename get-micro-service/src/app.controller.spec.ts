import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { Test } from '@nestjs/testing';

describe('App', () => {
  let app: INestApplication;
  const mock = '{"something":"blablablai"}';
  const appService = { getItem: () => mock };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(appService)
      .useValue(appService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET /rest/api/resource`, () => {
    return request(app.getHttpServer())
      .get('/rest/api/resource')
      .expect(200)
      .expect(appService.getItem());
  });

  afterAll(async () => {
    await app.close();
  });
});
