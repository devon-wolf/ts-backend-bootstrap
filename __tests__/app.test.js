import pool from '../dist/lib/utils/pool.js';
import setup from '../dist/data/setup.js';
import request from 'supertest';
import app from '../dist/lib/app.js';

// test file is not currently set up for TypeScript, it will be directed to the /dist folder that contains the transpiled js
describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});
